import React from 'react';
import MembershipPlans from '../Components/Membership'; // Bringing in the membership pricing section

const Membership = () => {
  return (
    <div className="w-full bg-[#050505] min-h-screen flex flex-col">
      {/* Banner Section */}
      <section className="relative w-full h-[40vh] md:h-[60vh] flex flex-col items-center justify-center overflow-hidden">

        {/* Background Image Area - Grayscale Dumbbells */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
          style={{
            // High-quality gym weights image
            backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
            filter: "grayscale(100%) brightness(0.6)" // Match the dark grayscale look
          }}
        ></div>

        {/* Gradient Overlays for perfect blending */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Top gradient for Navbar, Bottom gradient to blend into the section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/90 via-transparent to-[#050505]"></div>

        {/* Banner Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 mt-16 md:mt-24">
          <h1
            className="text-transparent bg-clip-text bg-gradient-to-b from-white via-[#f4f4f4] to-[#666666] text-6xl sm:text-8xl md:text-[140px] font-black leading-none tracking-tight drop-shadow-[0_20px_20px_rgba(0,0,0,0.9)] mb-2 md:mb-4 scale-y-110"
            style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}
          >
            MEMBERSHIPS
          </h1>
          <p
            className="text-[#a3ff00] font-bold text-base md:text-2xl tracking-[0.2em] uppercase drop-shadow-[0_5px_10px_rgba(0,0,0,1)]"
            style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}
          >
            INVEST IN YOUR POWER
          </p>
        </div>
      </section>

      {/* Render the actual pricing cards below the banner */}
      <div className="-mt-10 relative z-20">
        <MembershipPlans />
      </div>
    </div>
  );
};

export default Membership;