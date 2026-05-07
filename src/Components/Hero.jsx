// src/components/Hero.jsx

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const wrapperRef = useRef(null);
    const imageRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add(
            {
                isDesktop: "(min-width: 768px)",
                isMobile: "(max-width: 767px)",
            },
            (context) => {
                let { isDesktop } = context.conditions;

                gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: wrapperRef.current,
                            start: "top top",
                            end: "+=150%",
                            pin: true,
                            scrub: true,
                            markers: false,
                        },
                    })
                    .to(imageRef.current, {
                        scale: isDesktop ? 2 : 1.3, // Less scale on mobile
                        z: isDesktop ? 350 : 200,
                        transformOrigin: "center center",
                        ease: "power1.inOut",
                    })
                    .to(
                        heroRef.current,
                        {
                            scale: isDesktop ? 1.1 : 1.05,
                            transformOrigin: "center center",
                            ease: "power1.inOut",
                        },
                        "<"
                    );
            }
        );

        return () => mm.revert();
    }, []);

    return (
        <div ref={wrapperRef} className="relative w-full z-[1] overflow-hidden">
            {/* Background Section */}
            <div className="relative w-full overflow-hidden z-[1]">
                <section
                    ref={heroRef}
                    className="w-full h-[100dvh] bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1589848315097-ba7b903cc1cc?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />
            </div>

            {/* Front Image */}
            <div
                className="absolute top-0 left-0 w-full h-[100dvh] z-[2] overflow-hidden"
                style={{ perspective: "500px" }}
            >
                <img
                    ref={imageRef}
                    src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
                    alt="Hero"
                    className="w-full h-full object-cover object-center"
                />
            </div>
        </div>  
    );
};

export default Hero;