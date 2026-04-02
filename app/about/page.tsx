import { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
export const metadata: Metadata = {
    title: "About Chatanya Pratap - Full Stack Developer | Chatanyapra",
    description: "Learn about Chatanya Pratap (Chatanyapra), a passionate full stack developer specializing in React, Next.js, Node.js, and modern web technologies. Discover my journey, skills, and experience in web development.",
    keywords: ["Chatanya Pratap", "Chatanyapra", "About Chatanya", "Full Stack Developer", "Web Developer Biography", "React Developer", "Next.js Developer"],
};

const AboutPage = dynamic(() => import("@/components/pages/aboutpage"));
const Skills = dynamic(() => import("@/components/skills-stack/Skills"));
const TechStack = dynamic(() => import("@/components/TechStack"));

const page = () => {
    return (
        <div className="min-h-300 w-full relative overflow-hidden flex flex-col items-center m-auto" style={{ maxWidth: "1600px" }}>
            <AboutPage />
            <div className="w-full z-10 sm:mt-28 mt-10 px-0">
                <Skills />
                <div className="w-full h-auto mx-auto relative">
                    <Image
                        src={"/assets/images/background-line.png"}
                        alt="Background decorative lines for Chatanya Pratap's skills section"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="relative z-10">
                        <TechStack />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;