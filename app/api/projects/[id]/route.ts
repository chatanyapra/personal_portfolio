import { NextRequest, NextResponse } from 'next/server';
import { connectToDB } from '@/lib/mongodb';
import Project, { IProject } from '@/models/projectModel';
import { getServerSession } from 'next-auth';
import { authOptions } from '../../auth/[...nextauth]/route';
import { parseForm } from '@/lib/parseForm';
import cloudinary from '@/lib/cloudinary';
import fs from 'fs/promises';
import { Types } from 'mongoose';

export async function GET(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id: projectId } = await context.params;
    try {
        await connectToDB();


        if (!Types.ObjectId.isValid(projectId)) {
            return NextResponse.json(
                { success: false, message: 'Invalid project ID' },
                { status: 400 }
            );
        }

        const project = await Project.findOne({ _id: projectId });

        if (!project) {
            return NextResponse.json(
                { success: false, message: 'Project not found or has been deleted' },
                { status: 404 }
            );
        }

        return NextResponse.json({ success: true, data: project }, { status: 200 });
    } catch (error: any) {
        console.error('Error fetching project:', error.message);
        return NextResponse.json(
            { success: false, message: 'Server Error', error: error.message },
            { status: 500 }
        );
    }
}

// Update a project
export async function PATCH(
    req: NextRequest,
    context: { params: Promise<{ id: string }> }
) {
    const { id: projectId } = await context.params;
    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user?.email) {
            return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
        }

        await connectToDB();


        if (!Types.ObjectId.isValid(projectId)) {
            return NextResponse.json(
                { message: 'Invalid project ID' },
                { status: 400 }
            );
        }

        const { fields, files } = await parseForm(req);
        const {
            title,
            shortDescription,
            longDescription,
            techStack,
            link,
        } = fields;

        const existingProject = await Project.findById(projectId) as IProject;
        if (!existingProject) {
            return NextResponse.json({ message: 'Project not found' }, { status: 404 });
        }

        // Get sender's ID from DB
        const user = await import('@/models/userModel').then((mod) =>
            mod.default.findOne({ email: session.user?.email })
        );
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // If new files uploaded → delete old ones from cloudinary
        if (files && files.length > 0) {
            if (existingProject.images && existingProject.images.length > 0) {
                await Promise.all(
                    existingProject.images.map(async (image: any) => {
                        const publicId = image.url.split('/').pop()?.split('.')[0];
                        if (publicId) {
                            await cloudinary.uploader.destroy(`portfolio/${publicId}`);
                        }
                    })
                );
            }

            // Upload new images
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

            existingProject.images = imageUploads;
        }

        // Parse tech stack
        const parsedTechStack =
            typeof techStack === 'string' ? JSON.parse(techStack) : techStack;

        const techStackEntries = parsedTechStack.map((entry: any) =>
            typeof entry === 'string' ? { name: entry } : entry
        );

        // Update fields
        (existingProject as any).userId = user._id;
        existingProject.title = title;
        existingProject.shortDescription = shortDescription;
        existingProject.longDescription = longDescription;
        existingProject.techStack = techStackEntries;
        existingProject.link = link;

        await existingProject.save();

        return NextResponse.json(
            { message: 'Project updated successfully', data: existingProject },
            { status: 201 }
        );
    } catch (error: any) {
        console.error('Error modifying project:', error.message);
        return NextResponse.json(
            { message: 'Error modifying project', error: error.message },
            { status: 500 }
        );
    }
}
