import Image from "next/image";
import { useRef } from "react";

const CIRCLE_SIZE = 120;

const ImageReveal = () => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const revealImgRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!wrapperRef.current || !circleRef.current || !revealImgRef.current) return;

        const rect = wrapperRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Move circle
        circleRef.current.style.left = `${x}px`;
        circleRef.current.style.top = `${y}px`;
        circleRef.current.style.display = "block";

        // Move FULL image inside circle (reverse)
        revealImgRef.current.style.transform = `translate(${-x + CIRCLE_SIZE / 2}px, ${-y + CIRCLE_SIZE / 2}px)`;
    };

    const handleMouseLeave = () => {
        if (circleRef.current) circleRef.current.style.display = "none";
    };

    return (
        <div
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-96 h-[500px] rounded-[100px] overflow-hidden cursor-none"
        >
            {/* BASE IMAGE (FULL SIZE) */}
            <Image
                src="/assets/personsImages/NewSideLook.PNG"
                fill
                className="object-cover"
                priority
                alt="Base image"
            />

            {/* REVEAL CIRCLE */}
            <div
                ref={circleRef}
                style={{ width: CIRCLE_SIZE, height: CIRCLE_SIZE }}
                className="absolute hidden pointer-events-none rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
                {/* FULL SIZE IMAGE INSIDE CIRCLE */}
                <div
                    ref={revealImgRef}
                    className="absolute inset-0 w-96 h-[500px]"
                >
                    <Image
                        src="/assets/personsImages/NewSideLight.PNG"
                        fill
                        className="object-cover"
                        alt="Reveal image"
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageReveal;
