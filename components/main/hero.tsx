import React from "react";
import HeroContent from '../sub/HeroContent';

const Hero = () => {
    return (
        <div className="relative flex flex-col h-full w-full">
            <video
                autoPlay
                muted
                loop
                className="rotate-180  
                absolute  top-[-300px]
                  left-0 z-[1] w-full h-full object-cover"
                style={{
                    opacity: 0.8,
                    transition: "opacity 0.5s ease-in-out"
                }}
            >
                <source src="/blackhole.webm" type="video/webm"/>
            </video>
            <HeroContent/>
        </div>
    );
}

export default Hero;
// top-[-340px]