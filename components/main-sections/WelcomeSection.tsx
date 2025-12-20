import { motion } from "framer-motion";
import Image from "next/image";
import ImageRevealHover from "../ui/ImageRevealHover";

const WelcomeSection = () => {
    return (
        <div>
            <div className="w-2/4 max-md:w-full h-full relative max-sm:overflow-hidden md:mr-4 ">
                <div className="w-96 home-image max-sm:scale-75 max-sm:w-[370px] mt-3" style={{ borderRadius: "100px", height: "500px" }}></div>
                <div className="w-96 h-[500px] rounded-[100px] m-auto absolute top-0 overflow-hidden max-sm:scale-75" >
                    <ImageRevealHover />
                </div>
                <motion.div
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 12,
                        duration: 2,
                        delay: 0.8
                    }}
                    className="imageUser moving-img left-[-120px] bg-gray-200 flex py-3 px-6 rounded-2xl z-10 justify-between items-center max-sm:relative max-sm:left-20">
                    <div className="relative flex justify-center items-center w-[60px] h-[60px]">
                        <Image
                            src="/assets/personsImages/NewSideLook.PNG"
                            fill
                            sizes="(max-width: 768px) 60px, 60px"
                            className="rounded-full object-cover object-top"
                            alt="Profile image"
                            loading="lazy"
                        />
                    </div>

                    <div className="block">
                        <div className="pl-3 pt-2 flex flex-col text-gray-900">
                            <span className="font-bold">Chatanya Pratap</span>
                            <small className="-mt-1 font-extralight text-gray-500">@chatanya</small>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default WelcomeSection
