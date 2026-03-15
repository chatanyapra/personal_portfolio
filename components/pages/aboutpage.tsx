"use client"
import { ScrollViewAnimation } from '@/components/component-animations/animations';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {

    return (
        <div className=" w-full flex justify-evenly max-md:items-center z-10 md:mt-32 max-md:flex-col">
            <div className="w-[52%] max-md:w-[98%] min-h-112.5 overflow-hidden z-10 max-md:h-auto md:rounded-[50px] rounded-t-[50px] p-2 border-b-0 relative" >
                <h1 className="text-4xl sm:text-5xl mt-4 font-bold">Hello,</h1>
                <div className="text-4xl sm:text-5xl pt-4 font-bold pr-2">I&apos;m
                    <ScrollViewAnimation>
                        <span className="text-gradient ml-3">Chatanya</span>
                    </ScrollViewAnimation>
                </div>
                <ScrollViewAnimation delay={0.3}>
                    <p className="pt-4">
                        A developer who loves building scalable products, breaking complex systems into simple pieces, and turning ideas into real, working applications.</p>
                </ScrollViewAnimation>
                <ScrollViewAnimation delay={0.6}>
                    <p className="pt-4">
                        I spend most of my time creating high-performance projects — from a distributed online coding platform (with workers, queues, WebSockets, load balancers, and Judge0) to Auramic, my own MERN-based social platform with real-time chat, video calls, stories, and an AI assistant.                    </p>
                </ScrollViewAnimation>
                <ScrollViewAnimation delay={0.9}>
                    <p className="pt-4">
                        I enjoy diving deep into tech: system design, AWS, databases, scaling architecture, and writing clean, maintainable code. Whether it’s debugging a distributed worker system at 2 AM or designing a microservice flow for fun, I’m always exploring how things work under the hood.                    </p>
                </ScrollViewAnimation>
                <ScrollViewAnimation delay={1.2}>
                    <p className="pt-4">
                        I’m currently learning, building, and leveling up every day.                   </p>
                </ScrollViewAnimation>
            </div>
            {/* CORRECTED IMAGE */}
            <div className="w-[34%] max-md:w-[98%] max-md:hidden h-auto rounded-[50px] overflow-hidden flex justify-center items-center sm:big-screen-light-dark-shadow">
                <Image
                    src={"/assets/images/imageface2.png"}
                    alt="A portrait of Chatanya"
                    width={400}
                    height={450}
                    className="m-auto w-full h-auto max-h-112.5 max-w-112.5 "
                    sizes="(max-width: 640px) 100vw, 440px"
                />
            </div>
            <motion.div
                initial={{ top: -20 }}
                animate={{ top: 125 }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    bounce: 0.5,
                }}
                className="w-14 absolute right-12 sm:hidden"
            >
                <motion.img
                    src={"/assets/images/comma.png"}
                    alt="Hanging Image"
                    className="swing w-14 h-10 object-cover float-right -scale-y-100 "
                    style={{ filter: "drop-shadow(0 0 4px black)" }}
                />
            </motion.div>

        </div>
    )
}

export default AboutPage