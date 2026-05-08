// src/components/Hero.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef(null);
    const textRef = useRef(null);
    const scrollTextRef = useRef(null);
    const revealSectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "+=2000",
                    scrub: 1,
                    pin: true,
                }
            });

            // 1. Fade out scroll indicator
            tl.to(scrollTextRef.current, {
                opacity: 0,
                duration: 0.1
            }, 0);

            // 2. Scale the WOO HOO text massively to zoom through the 'O'
            // We use 43% X origin to zoom precisely into the second 'O' in WOO HOO
            tl.to(textRef.current, {
                scale: 120,
                opacity: 0,
                duration: 1,
                ease: "power2.in"
            }, 0);

            // 3. Fade in the reveal section underneath (Original Hero images)
            tl.fromTo(revealSectionRef.current, {
                opacity: 0,
                scale: 1.1
            }, {
                opacity: 1,
                scale: 1,
                duration: 0.5,
                ease: "power1.out"
            }, 0.5);

            // 4. Subtle zoom effect on the revealed front image for extra polish
            tl.to(imageRef.current, {
                scale: 1.05,
                duration: 0.5,
                ease: "power1.out"
            }, 0.5);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-[#050505] relative w-full">
            {/* The sticky container that holds the entire animation */}
            <div ref={containerRef} className="h-[100dvh] w-full relative overflow-hidden bg-black flex items-center justify-center">

                {/* The WOO HOO Text Layer */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <h1
                        ref={textRef}
                        className="text-[#a3ff00] text-[22vw] md:text-[20vw] font-black leading-none m-0 p-0 tracking-tight whitespace-nowrap"
                        style={{
                            fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif',
                            transformOrigin: "43% 50%"
                        }}
                    >
                        WOO HOO
                    </h1>
                </div>

                {/* Scroll To Enter Indicator */}
                <div ref={scrollTextRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20">
                    <span className="text-gray-500 tracking-[0.4em] text-[10px] md:text-xs font-bold uppercase">Scroll to play</span>
                    <div className="w-px h-16 bg-gradient-to-b from-[#a3ff00] to-transparent"></div>
                </div>

                {/* Reveal Layer (Original Hero Content) */}
                <div ref={revealSectionRef} className="absolute inset-0 z-30 opacity-0 w-full h-full flex flex-col items-center justify-center pointer-events-auto bg-black">

                    {/* Background Gym Image */}
                    <div className="absolute inset-0 w-full h-full overflow-hidden z-[1]">
                        <img
                            ref={imageRef}
                            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2000"
                            alt="Gym Interior"
                            className="w-full h-full object-cover object-center opacity-40"
                        />
                    </div>

                    {/* Dark Overlay for contrast */}
                    <div className="absolute inset-0 bg-black/60 z-[2]"></div>

                    {/* Typographic Overlay matching Image 2 */}
                    <div className="relative z-[3] flex flex-col items-center text-center px-4 mt-16 md:mt-24">
                        {/* Top Accent Line */}
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <div className="w-10 md:w-16 h-[2px] bg-[#a3ff00]"></div>
                            <span className="text-[#a3ff00] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase">INDIRANAGAR</span>
                        </div>

                        {/* Main Typography */}
                        <div className="flex flex-col items-center justify-center leading-[0.85] tracking-tight" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
                            <h2 className="text-white text-[70px] sm:text-[90px] md:text-[130px] lg:text-[160px] font-black uppercase drop-shadow-2xl">
                                9,000 SQ FT
                            </h2>
                            <h2 className="text-white text-[60px] sm:text-[80px] md:text-[110px] lg:text-[140px] font-black uppercase drop-shadow-2xl">
                                OF PURE
                            </h2>
                            <h2 className="text-[#a3ff00] text-[70px] sm:text-[90px] md:text-[130px] lg:text-[160px] font-black uppercase drop-shadow-[0_0_30px_rgba(163,255,0,0.3)] mb-8 md:mb-12">
                                ENERGY
                            </h2>
                        </div>

                        {/* CTA Button */}
                        <Link to="/premium-plans">
                            <button className="bg-[#a3ff00] text-black font-black uppercase tracking-[0.2em] px-8 md:px-12 py-4 md:py-5 rounded-sm hover:bg-white transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(163,255,0,0.4)] text-sm md:text-lg mt-2" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
                                BOOK YOUR FREE GYM TOUR
                            </button>
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;