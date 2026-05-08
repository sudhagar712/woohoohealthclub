import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const progressBarRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = 'auto'; // Restore scroll
        if (onComplete) onComplete();
      }
    });

    // Pulsing glow effect on the logo box
    gsap.to(logoRef.current, {
      boxShadow: '0 0 100px 30px rgba(163,255,0,0.6)',
      duration: 1,
      yoyo: true,
      repeat: 3, // Pulse a few times during load
      ease: 'sine.inOut'
    });

    // Premium 3D text character animation
    const chars = textRef.current.querySelectorAll('.char-span');
    tl.from(chars, {
      opacity: 0,
      y: 40,
      scale: 0.5,
      rotationX: -90,
      transformOrigin: "50% 50% -50px",
      duration: 0.8,
      stagger: 0.03,
      ease: 'back.out(1.5)'
    }, 0.2);

    // Progress bar animating to 100% over 2.5 seconds
    tl.to(progressBarRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power3.inOut',
    }, 0);

    // Slide up the entire preloader screen
    tl.to(containerRef.current, {
      yPercent: -100,
      duration: 0.8,
      ease: 'power4.inOut',
    }, "+=0.3");

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center font-sans overflow-hidden"
    >
      {/* Background Noise Texture (Subtle) */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow z-10 w-full px-4">
        
        {/* Glowing Logo Box */}
        <div 
          ref={logoRef}
          className="bg-[#a3ff00] w-36 h-36 md:w-44 md:h-44 flex items-center justify-center mb-16 relative"
          style={{ boxShadow: '0 0 50px 15px rgba(163,255,0,0.3)' }}
        >
          {/* Inner Black Border Frame */}
          <div className="border-[3px] md:border-4 border-black w-28 h-28 md:w-36 md:h-36 flex flex-col items-center justify-center font-black text-2xl md:text-3xl tracking-wider leading-none gap-1" style={{ fontFamily: 'Impact, sans-serif', color: 'black' }}>
            <div className="flex items-center">
              <span className="mr-0.5">W</span>
              <span>O</span>
              <div className="w-2 md:w-3 h-1.5 bg-black mx-px"></div>
              <span>O</span>
            </div>
            <div className="flex items-center">
              <span className="mr-0.5">H</span>
              <span>O</span>
              <div className="w-2 md:w-3 h-1.5 bg-black mx-px"></div>
              <span>O</span>
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 
          ref={textRef}
          className="text-white text-2xl md:text-4xl tracking-[0.12em] md:tracking-[0.15em] font-bold text-center"
          style={{ fontFamily: '"Bebas Neue", sans-serif', perspective: '1000px' }}
        >
          {"READY TO ENTER THE WOOHOO EXPERIENCE?".split("").map((char, i) => (
            <span 
              key={i} 
              className={`char-span inline-block ${char === '?' ? 'opacity-70' : ''}`}
              style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>

      {/* Bottom Section */}
      <div className="w-full flex flex-col items-center mb-8 z-10">
        {/* Designed by */}
        <div className="flex flex-wrap items-center justify-center text-[10px] md:text-xs text-gray-500 font-medium tracking-wide">
          <span>Designed and Developed by</span>
          <div className="flex items-center ml-1.5">
            <span className="text-white font-bold tracking-wider">LS</span>
            <span className="text-[#ff5500] font-bold">optimAIze</span>
          </div>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="absolute bottom-0 left-0 w-full h-[5px] md:h-1.5 bg-[#1a1a1a] z-20">
        <div 
          ref={progressBarRef}
          className="h-full bg-[#a3ff00] w-0 relative"
          style={{ boxShadow: '0 0 10px 2px rgba(163,255,0,0.5)' }}
        >
          {/* Glow at the tip of the progress bar */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#a3ff00] blur-[8px] rounded-full"></div>
        </div>
      </div>
      
    </div>
  );
};

export default Preloader;
