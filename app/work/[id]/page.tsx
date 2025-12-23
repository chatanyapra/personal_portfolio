import type { Metadata } from 'next';
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import dynamic from 'next/dynamic';
import { connectToDB } from '@/lib/mongodb';
import Project from '@/models/projectModel';
import { Types } from 'mongoose';

const Workpage = dynamic(() => import('@/components/pages/workpage'));

type Params = {
    id: string;
};

// Static params for SSG
export async function generateStaticParams() {
    try {
        await connectToDB();
        const projects = await Project.find().select('_id').lean();
        return Array.isArray(projects)
            ? projects.map((project: any) => ({ id: String(project._id) }))
            : [];
    } catch (err) {
        console.error('Error in generateStaticParams:', err);
        return []; // Prevent build crash
    }
}

// Metadata for SEO
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { id } = await params;

    if (!Types.ObjectId.isValid(id)) {
        return {
            title: 'Project Not Found',
            description: 'The project you are looking for does not exist.',
        };
    }

    await connectToDB();
    const data: any = await Project.findById(id).lean();

    if (!data) {
        return {
            title: 'Project Not Found',
            description: 'The project you are looking for does not exist.',
        };
    }

    return {
        title: data?.title || 'Project | My Website',
        description: data?.shortDescription || 'Explore a featured project from my portfolio.',
        openGraph: {
            title: data?.title,
            description: data?.shortDescription,
            images: data?.images?.length
                ? [{ url: data.images[0].url, alt: data.images[0].alt || 'project image' }]
                : [],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: data?.title,
            description: data?.shortDescription,
            images: data?.images?.[0]?.url,
        },
    };
}

export default async function page({ params }: { params: Params }) {
    const { id } = await params;
    let project: any = null;
    if (Types.ObjectId.isValid(id)) {
        await connectToDB();
        project = await Project.findById(id).lean();
    }

    return (
        <div className="w-full mx-auto flex flex-col relative pt-32 max-md:pt-12">
            {!project || !project.longDescription ? (
                <div className="md:w-[90%] w-full mx-auto min-h-96 animate-pulse rounded-[50px] flex max-md:flex-col justify-between mb-8 max-sm:px-2">
                    <div className="w-full">
                        <div className="h-10 w-[250px] md:w-[40%] bg-gray-400 dark:bg-gray-600 rounded mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-2/3 bg-gray-400 dark:bg-gray-600 rounded"></div>
                            <div className="h-4 w-3/4 bg-gray-400 dark:bg-gray-600 rounded"></div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="md:w-[90%] w-full mx-auto min-h-96 flex flex-col mb-16 light-dark-shadow max-sm:px-2">
                    <ScrollViewAnimation>
                        <h1 className="text-4xl pb-8 font-bold">{project.title}</h1>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.5}>
                        <div className='text-gray-800 medium-gray-text' dangerouslySetInnerHTML={{ __html: project.longDescription }}></div>
                    </ScrollViewAnimation>
                </div>
            )}
            <Workpage projectId={id} />
        </div>
    );
}
