import { Metadata } from "next";

export const urlmain = process.env.NEXT_PUBLIC_BASE_URL;

export const siteConfig = {
    name: "Chatanya Pratap",
    description: "Chatanya Pratap (Chatanyapra) - Expert Full Stack Developer & MERN Stack Specialist. Explore cutting-edge web development projects, insightful tech blogs, and discover my journey from PHP/Laravel to modern React, Next.js, Node.js, and DevOps technologies. Available for freelance projects and full-time opportunities.",
    url: urlmain,
    ogImage: `/opengraph-image.JPG`,
    profileImage: `assets/my-image2.png`,
    keywords: [
        // Primary name variations for brand recognition
        "Chatanya",
        "Chatanyapra",
        "Chatanya Pratap",
        "Chaitanya",
        "Chetanya",
        "Chaitanya Pratap",
        "Chetanya Pratap",
        "Chetan",
        "Chetanyapra",
        "Chaitanyapra",
        "Chatanya Pra",
        "Chetan Pratap",
        "Chatanya Portfolio",
        "Chatanyapra Portfolio",
        "Chaitanya Portfolio",
        "Chetanya Portfolio",

        // Core developer roles
        "Full Stack Developer",
        "MERN Stack Developer",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "JavaScript Developer",
        "TypeScript Developer",

        // Specialized skills
        "Frontend Developer",
        "Backend Developer",
        "Web Developer",
        "Software Engineer",
        "UI/UX Developer",

        // Technologies & frameworks
        "React.js Expert",
        "Next.js Specialist",
        "MongoDB Developer",
        "Express.js Developer",
        "Laravel Developer",
        "PHP Developer",
        "MySQL Developer",

        // Modern tech stack
        "Tailwind CSS",
        "Framer Motion",
        "Socket.IO",
        "WebRTC Developer",
        "RESTful API",
        "GraphQL",

        // DevOps & deployment
        "Docker",
        "AWS Developer",
        "CI/CD Pipeline",
        "Jenkins",
        "Kubernetes",

        // Project types
        "Portfolio Website",
        "E-commerce Development",
        "Social Media Platform",
        "Banking Application",
        "School Management System",
        "Real-time Chat Application",

        // Services & availability
        "Freelance Developer",
        "Web Development Services",
        "Custom Web Applications",
        "Responsive Web Design",
        "Progressive Web Apps",
        "Tech Blog Writer",

        // Location & availability
        "India Web Developer",
        "Remote Developer",
        "Freelance Web Developer India",
        "Full Stack Developer for hire",

        // SEO-focused name + role combinations
        "Chatanya Full Stack Developer",
        "Chatanyapra Web Developer",
        "Chaitanya React Developer",
        "Chetanya MERN Stack Developer",
        "Chetan JavaScript Developer",
        "Chatanya Pratap Portfolio Website",
        "Chaitanya Pratap Developer",
        "Chetanya Pratap Freelancer",

        // Long-tail keywords for better ranking
        "Chatanya Pratap Full Stack Developer Portfolio",
        "Chatanyapra React Next.js Developer",
        "Chaitanya Web Development Services",
        "Chetanya MERN Stack Projects",
        "Chetan Freelance Developer India"
    ],
    author: "Chatanya Pratap",
    social: {
        github: "https://github.com/chatanyapra",
        linkedin: "https://www.linkedin.com/in/chatanya-pratap-ab410a277/",
        codepen: "https://codepen.io/chatanyaPratap",
        twitter: "https://x.com/Chatanyapra"
    }
}

export const metadata: Metadata = {
    title: {
        default: `${siteConfig.name} - Full Stack Developer Portfolio | Chatanyapra`,
        template: `%s | ${siteConfig.name} - Full Stack Developer`
    },
    description: siteConfig.description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: `${urlmain}`,
        title: `${siteConfig.name} | Full Stack Developer Portfolio - Chatanyapra`,
        description: siteConfig.description,
        siteName: "Chatanya Pratap Portfolio",
        images: [
            {
                url: `${urlmain}/opengraph-image.JPG`,
                width: 1200,
                height: 630,
                alt: "Chatanya Pratap - Full Stack Developer Portfolio Preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: `${siteConfig.name} | Full Stack Developer Portfolio`,
        description: siteConfig.description,
        images: [`${urlmain}${siteConfig.ogImage}`],
        creator: "@chatanyapra",
    },
    alternates: {
        canonical: `${urlmain}`,
    },
    metadataBase: new URL(`${urlmain || 'https://chatanya.dev'}`),
    other: {
        "google-site-verification": "Oz8EedM8aBkgg0Igm42z88lDklyU1SXpR1oQNWfcFPA",
    }
};
