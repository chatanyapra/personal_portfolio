'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollViewAnimation, SectionHeadAnimation } from '../component-animations/animations';
import GlowSpinner from '../ui/GlowSpinner';

type TimelineItem = {
    id: string;
    title: string;
    subItems?: {
        id: string;
        title: string;
        content: {
            title: string;
            period: string;
            description: string[];
        }[];
    };
    content?: {
        title: string;
        description: string[];
        skills?: string[];
        image?: string;
    };
};

type Certificate = {
    id: string;
    title: string;
    issuer: string;
    year: string;
};

type ActiveItem = {
    description: string[];
};

export const PortfolioTimeline = () => {
    const [activeTab, setActiveTab] = useState('about');
    const [activeSubTab, setActiveSubTab] = useState<string | null>(null);

    const timelineData: TimelineItem[] = [
        {
            id: 'about',
            title: 'About Me',
            content: {
                title: 'About Me',
                description: [`I’m Chatanya, a Full Stack Developer passionate about crafting modern, scalable, and high-performing web applications. I chose this career because I love turning ideas into functional and visually appealing digital experiences. Creativity and problem-solving drive my approach to development.`,
                    `Currently, I work as a Freelance Developer and a Full Stack Developer Intern, where I build dynamic web solutions tailored to users' needs. I am always open to new opportunities and challenges that push me to grow.`,

                    `With a mindset of continuous learning, I stay updated with the latest technologies, ensuring that my work aligns with industry best practices. My goal is to create impactful solutions that enhance user experiences and solve real-world problems.`],
                skills: ['JavaScript', 'React', 'Node.js', 'UI/UX'],
                image: 'https://via.placeholder.com/300x300'
            }
        },
        {
            id: 'journey',
            title: 'My Journey',
            subItems: {
                id: 'journey',
                title: 'My Professional Journey',
                content: [
                    {
                        title: '2022 - Career Beginnings',
                        period: '2022',
                        description: [
                            `I began my journey as a developer during my diploma, starting with the C language. My very first project was a fun experiment where I converted numbers and alphabets into large ASCII-art styled characters—similar to star patterns. Though simple, it sparked my curiosity and strengthened my interest in programming.`,
                            `Soon after, I transitioned into web development, learning HTML, CSS, and JavaScript. I built my very first portfolio website entirely on my own (back when ChatGPT wasn’t around!), which gave me hands-on experience and boosted my confidence.`,
                            `Later, I created an Online Quiz Application using PHP and MySQL. It had features like exam timers, random questions, student logins, and an admin panel. I ran it on XAMPP (Apache + PHP + MySQL) and wrote my own SQL queries to manage users, quizzes, and results.`,
                            `I built this application using pure HTML, CSS, JS, PHP, and MySQL—without frameworks like Tailwind or Bootstrap—which helped me strengthen my fundamentals in CSS, JavaScript, and database queries.`
                        ]
                    },
                    {
                        title: '2023 - First Major Project',
                        period: '2023',
                        description: [
                            `After learning PHP in 2022, I challenged myself to build a complete School Portal using Laravel (inspired by my college portal). It included secure logins, student and teacher panels, a registration system, attendance management, results, timetables, user profiles, and dashboards—everything organized class-wise.`,
                            `This project was a big step for me. I faced tough challenges in attendance tracking, timetable handling, email systems, and user registration, but solving them taught me how to build complex features from scratch. I used Laravel, AJAX, MySQL, HTML, CSS, and JS with XAMPP for local development.`,
                            `In the same year, I also worked as a freelancer on real-world projects. One of them was Lafloridian, a home service provider platform with separate panels for vendors, clients, and admins, plus a CMS for dynamic content management. I also contributed to Novatechnosys, a Tally-focused website.`,
                            `These experiences gave me real exposure to professional projects, sharpened my problem-solving skills, and boosted my confidence as a web developer.`
                        ]
                    },
                    {
                        title: '2024 - Expanding My Stack',
                        period: '2024',
                        description: [
                            `In 2024, I set out to grow my skills and explore new technologies while also doing freelancing on the side. I started learning the MERN stack, beginning with React.js, and built my first portfolio website as practice. This approach of learning through projects kept me curious and motivated, pushing me to improve step by step.`,
                            `As I gained confidence, I enhanced my portfolio with advanced features like a CMS, project and blog management, Google login, and user comments. These additions helped me understand real-world problems and how to solve them with modern tools`,
                            `Later in the year, I challenged myself with a new project—Auramic, a social media platform built from scratch. I integrated secure authentication, post and story uploads, likes, comments, follows, real-time chat, audio/video calls with WebRTC, dark/light mode, and even an AI chatbot powered by Gemini AI.`,
                            `Through this project, I worked with technologies like React, TypeScript, Node.js, Express, MongoDB, Tailwind CSS, Zustand, WebRTC, Socket.IO, Cloudinary, JWT, and Gemini AI. I also hosted it on Render’s free platform, making it accessible for others to explore. This year not only expanded my tech stack but also shaped me into a more confident full-stack developer.`
                        ]
                    },
                    {
                        title: '2025 - Current Focus',
                        period: '2025',
                        description: [
                            `After spending the last few years learning, freelancing, and building projects with the MERN stack, I’ve now started exploring Next.js. Since it builds on React, the transition was smooth, and I was especially drawn to its SEO-friendly features and performance benefits.`,
                            `I learned Next.js primarily through free resources on YouTube, focusing on hands-on projects to strengthen my skills. One of the most interesting projects I built was a banking application, where I worked with tools like Sentry, Plaid, Appwrite, and Dwolla, gaining exposure to new technologies beyond the MERN ecosystem.`,
                            `At the same time, I’ve also started diving into the world of DevOps. My learning journey includes Docker, AWS (EC2, Elastic Beanstalk, Containers, Kubernetes), Tomcat, CI/CD pipelines, and Jenkins. This has given me a solid foundation in managing deployments and improving project scalability.`,
                            `As part of this exploration, I successfully hosted a small project on an AWS EC2 server using GitHub, Jenkins, and a CI/CD pipeline. This hands-on experience is helping me expand my skills beyond development, preparing me to bridge the gap between building applications and deploying them efficiently.`
                        ]
                    }
                ]
            }
        },
        {
            id: 'certificates',
            title: 'Certificates',
            content: {
                title: 'My Certifications',
                description: []
            }
        }
    ];

    const certificates: Certificate[] = [
        {
            id: '1',
            title: 'Advanced React Developer',
            issuer: 'React Academy',
            year: '2023'
        },
        {
            id: '2',
            title: 'JavaScript Algorithms',
            issuer: 'CodeMaster',
            year: '2022'
        },
        {
            id: '3',
            title: 'UI/UX Design Principles',
            issuer: 'Design Institute',
            year: '2021'
        },
        {
            id: '4',
            title: 'Web Accessibility',
            issuer: 'A11y.org',
            year: '2023'
        }
    ];

    const handleTabChange = (tabId: string, isSubItem = false) => {
        if (isSubItem) {
            setActiveSubTab(tabId);
            setActiveTab('journey');
        } else {
            setActiveTab(tabId);
            setActiveSubTab(null);
        }
    };
    const renderContent = () => {
        const activeItem = timelineData.find(item => item.id === activeTab);

        if (!activeItem) return null;

        if (activeTab === 'about' && activeItem.content) {
            return (
                <div className="content-area" key={`about-${activeTab}`}>
                    <ScrollViewAnimation whileInView once={false}>
                        <h2 className="text-3xl font-bold mb-4 text-gradient">{activeItem.content.title}</h2>
                    </ScrollViewAnimation>
                    <div className="flex">
                        <div className="w-full">
                            {activeItem.content.description.map((text: string, index: number) => (
                                <ScrollViewAnimation key={`about-${index}`} delay={0.1 + (index * 0.1)} whileInView once={false}>
                                    <p className="mb-4">{text}</p>
                                </ScrollViewAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            );
        }

        if (activeTab === 'journey') {
            const journeyItem = timelineData.find(item => item.id === 'journey');

            if (!journeyItem?.subItems) return null;

            if (!activeSubTab) {
                return (
                    <div className="content-area" key={`journey-default`}>
                        <ScrollViewAnimation whileInView once={false}>
                            <h2 className="text-3xl font-bold mb-6 text-gradient">{journeyItem.subItems.title}</h2>
                        </ScrollViewAnimation>
                        <ScrollViewAnimation whileInView delay={0.1} once={false}>
                            <p className=" mb-6">
                                Select a year from the timeline to explore my career milestones and achievements during that period.
                            </p>
                        </ScrollViewAnimation>
                        <ScrollViewAnimation whileInView delay={0.2} once={false}>
                            <p className=" mb-6">
                                My journey began with curiosity during my diploma days, starting with C and growing into full-stack development. Over the years, I've explored PHP, MERN, Next.js, and now DevOps — always learning by building real projects and taking on new challenges.
                            </p>
                        </ScrollViewAnimation>

                        <ScrollViewAnimation whileInView delay={0.3} once={false}>
                            <p className=" mb-6">
                                This timeline highlights the key milestones that shaped me as a developer and continue to fuel my growth.
                            </p>
                        </ScrollViewAnimation>
                    </div>
                );
            }

            const subItemContent = journeyItem.subItems.content.find(item => item.period === activeSubTab);

            if (!subItemContent) return null;

            return (
                <div className="content-area" key={`journey-${activeSubTab}`}>
                    <ScrollViewAnimation whileInView once={false}>
                        <h2 className="text-3xl font-bold mb-4 text-gradient">{subItemContent.title}</h2>
                    </ScrollViewAnimation>
                    <div className="space-y-4">
                        {subItemContent.description.map((text: string, index: number) => (
                            <ScrollViewAnimation key={`journey-${activeSubTab}-${index}`} delay={0.1 + (index * 0.1)} whileInView once={false}>
                                <p className="mb-4">{text}</p>
                            </ScrollViewAnimation>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeTab === 'certificates') {
            return (
                <div className="content-area" key={`certificates-${activeTab}`}>
                    <ScrollViewAnimation whileInView once={false}>
                        <h2 className="text-3xl font-bold mb-6 text-gradient">My Certifications</h2>
                    </ScrollViewAnimation>
                    <ScrollViewAnimation delay={0.1} whileInView once={false}>
                        <div className="grid md:grid-cols-2 gap-6 m-auto">
                            {certificates.map((cert, index) => (
                                <ScrollViewAnimation key={cert.id} delay={0.1 + (index * 0.1)} whileInView once={false}>
                                    <div className=" rounded-lg p-5 hover:shadow-md transition-shadow">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-indigo-400 p-3 rounded-lg">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-gradient"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold">{cert.title}</h3>
                                                <p className="text-sm text-gray-600 mt-1">
                                                    Issued by {cert.issuer} - {cert.year}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollViewAnimation>
                            ))}
                        </div>
                    </ScrollViewAnimation>
                </div>
            );
        }

        return null;
    };

    return (
        <div className="transition-colors duration-300 m-auto md:pl-6 ">
            <div className='-ml-6'>
                <SectionHeadAnimation>
                    <i className="mb-2">My Journey</i>
                </SectionHeadAnimation>
            </div>

            <div className="container mx-auto md:px-4 px-2 pt-12">
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Sidebar Timeline Navigation */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-24 space-y-1">
                            {/* Timeline Items */}
                            <div className="space-y-8 relative pl-8 timeline-border">
                                {timelineData.map((item, index) => (
                                    <div
                                        key={item.id}
                                        className={`timeline-item relative ${activeTab === item.id ? 'active' : ''}`}
                                        data-target={item.id}
                                    >
                                        <ScrollViewAnimation delay={0.1 + (index * 0.1)} whileInView >
                                            <div className="flex items-center">
                                                {activeTab === item.id ? (
                                                    <GlowSpinner />
                                                ) : (
                                                    <div className={`timeline-dot absolute -left-8 w-4 h-4 rounded-full bg-[#725bda] border-2 border-white`} />

                                                )}
                                                <button
                                                    className={`cursor-pointer tab-button text-left font-medium text-xl hover:text-purple-400 transition-colors ${activeTab === item.id ? 'text-gradient' : 'hover:text-shadow-xs text-shadow-black'}`}
                                                    onClick={() => handleTabChange(item.id)}
                                                >
                                                    {item.title}
                                                </button>
                                            </div>
                                        </ScrollViewAnimation>

                                        {/* Sub-items */}
                                        <AnimatePresence>
                                            {
                                                item.subItems && activeTab === item.id && (
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: 'auto', opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{
                                                            duration: 0.3,
                                                            ease: 'easeInOut'
                                                        }}
                                                        className="ml-6 mt-2 space-y-2 pl-4 flex flex-col overflow-hidden"
                                                    >
                                                        {item.subItems.content.map((subItem, subIndex) => (
                                                            <motion.div
                                                                key={`sub-${subItem.period}`}
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                transition={{
                                                                    delay: subIndex * 0.1,
                                                                    duration: 0.2
                                                                }}
                                                            >
                                                                <button
                                                                    className={`cursor-pointer sub-item tab-button text-lg py-1.5 block transition-colors hover:text-purple-400 ${activeSubTab === subItem.period ? 'active font-semibold text-purple-400 text-gradient' : 'hover:text-shadow-xs text-shadow-black'}`}
                                                                    onClick={() => handleTabChange(subItem.period, true)}
                                                                >
                                                                    {subItem.period} - {subItem.title.split(' - ')[1]}
                                                                </button>
                                                            </motion.div>
                                                        ))}
                                                    </motion.div>
                                                )
                                            }
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Content Area */}
                    <div className="lg:w-3/4">
                        <div className="rounded-xl px-2 md:px-8 min-h-[400px]">
                            {renderContent()}
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};