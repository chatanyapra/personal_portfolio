import { NextRequest, NextResponse } from 'next/server';
import Blog from '@/models/BlogModel';
import { Types } from 'mongoose';
import { connectToDB } from '@/lib/mongodb';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { parseForm } from '@/lib/parseForm';
import cloudinary from '@/lib/cloudinary';
import fs from 'fs';


export async function GET(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id: blogId } = await context.params;
  try {
    await connectToDB();

    // Optional: validate ID format
    if (!Types.ObjectId.isValid(blogId)) {
      return NextResponse.json(
        { success: false, message: 'Invalid blog ID' },
        { status: 400 }
      );
    }

    const blog = await Blog.findOne({ _id: blogId });

    if (!blog) {
      return NextResponse.json(
        { success: false, message: 'Blog not found or has been deleted' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: blog }, { status: 200 });
  } catch (error: any) {
    console.error('[GET_BLOG_BY_ID_ERROR]', error);
    return NextResponse.json(
      { success: false, message: 'Server Error', error: error.message },
      { status: 500 }
    );
  }
}


export async function PUT(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  const { id: blogId } = await context.params;
  await connectToDB();

  const session = await getServerSession(authOptions);
  if (!session || !session.user || !session.user.id) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  try {
    // Parse formData (files + fields)
    const { fields, files } = await parseForm(req);
    const { title, shortDescription, longDescription } = fields;

    // Validate required fields
    if (!title || !shortDescription || !longDescription) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }

    const existingBlog = await Blog.findById(blogId);
    if (!existingBlog) {
      return NextResponse.json({ message: 'Blog not found' }, { status: 404 });
    }

    // Handle new file uploads
    if (files && files.length > 0) {
      // Delete old Cloudinary images
      await Promise.all(
        existingBlog.images.map(async (img: any) => {
          const publicId = img.url.split('/').pop()?.split('.')[0];
          await cloudinary.uploader.destroy(`portfolio/${publicId}`);
        })
      );

      // Upload new files
      const uploadedImages = await Promise.all(
        files.map(async (file: any) => {
          const result = await cloudinary.uploader.upload(file.filepath, {
            folder: 'portfolio',
          });
          fs.unlinkSync(file.filepath); // remove temp file
          return { url: result.secure_url, alt: file.originalFilename };
        })
      );

      existingBlog.images = uploadedImages;
    }

    // Update blog fields
    existingBlog.userId = session.user.id;
    existingBlog.title = title;
    existingBlog.shortDescription = shortDescription;
    existingBlog.longDescription = longDescription;

    await existingBlog.save();

    return NextResponse.json({
      message: 'Blog updated successfully',
      data: existingBlog,
    }, { status: 200 });

  } catch (error: any) {
    console.error('Update error:', error);
    return NextResponse.json({ message: 'Error updating blog', error: error.message }, { status: 500 });
  }
}
