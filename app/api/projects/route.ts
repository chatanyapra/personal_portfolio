import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Project from '@/models/projectModel';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs/promises';
import { parseForm } from '@/lib/parseForm';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(req: NextRequest) {
  try {
    await connectToDB();

    // Get limit from query string (e.g., /api/projects?limit=3)
    const limitParam = req.nextUrl.searchParams.get('limit');
    const limit = limitParam ? parseInt(limitParam) : 0; // 0 = no limit

    const projectsQuery = Project.find()
      .select('-longDescription')
      .sort({ createdAt: -1 });

    if (limit > 0) {
      projectsQuery.limit(limit);
    }

    const projects = await projectsQuery;

    return NextResponse.json({ success: true, data: projects }, { status: 200 });
  } catch (error: any) {
    console.error('Error fetching projects:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: 'Server Error',
        error: error.message,
      },
      { status: 500 }
    );
  }
}


// Disable Next.js's default body parser


export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);
    if (!session || !session.user?.email) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    await connectToDB();

    const { fields, files } = await parseForm(req);
    const {
      title,
      shortDescription,
      longDescription,
      techStack,
      link,
    } = fields;

    // Validate fields
    if (
      !title ||
      !shortDescription ||
      !longDescription ||
      !techStack ||
      !link
    ) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    if (!files || files.length === 0) {
      return NextResponse.json(
        { message: 'No files uploaded' },
        { status: 400 }
      );
    }

    // Upload files to Cloudinary
    const imageUploads = await Promise.all(
      files.map(async (file) => {
        const data = await fs.readFile(file.filepath);
        const base64 = data.toString('base64');

        const result = await cloudinary.uploader.upload(
          `data:${file.mimetype};base64,${base64}`,
          { folder: 'portfolio' }
        );

        return {
          url: result.secure_url,
          alt: file.originalFilename || 'project-image',
        };
      })
    );

    // Get the user ID from DB using email
    const user = await import('@/models/userModel').then((mod) =>
      mod.default.findOne({ email: session.user?.email })
    );

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 }
      );
    }

    // Parse tech stack if it's a stringified JSON
    const parsedTechStack =
      typeof techStack === 'string' ? JSON.parse(techStack) : techStack;

    const techStackEntries = parsedTechStack.map((entry: any) =>
      typeof entry === 'string' ? { name: entry } : entry
    );

    // Save project
    const newProject = new Project({
      userId: user._id,
      title,
      shortDescription,
      longDescription,
      images: imageUploads,
      techStack: techStackEntries,
      link,
    });

    await newProject.save();

    return NextResponse.json(
      { message: 'Project uploaded successfully', data: newProject },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Error uploading project:', error.message);
    return NextResponse.json(
      { message: 'Server Error', error: error.message },
      { status: 500 }
    );
  }
}
