import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import gsap from 'gsap';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  useEffect(() => {
    if (isOpen) {
      // Prevent background scrolling
      document.body.style.overflow = 'hidden';
      
      // Animate full screen menu down
      gsap.to(menuRef.current, {
        y: '0%',
        duration: 0.6,
        ease: 'power4.inOut'
      });
      
      // Stagger animate links fading and sliding up
      gsap.fromTo(linksRef.current, 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
      );
    } else {
      document.body.style.overflow = 'auto';
      
      // Animate full screen menu back up
      gsap.to(menuRef.current, {
        y: '-100%',
        duration: 0.6,
        ease: 'power4.inOut'
      });
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Handle scroll to hide/show navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      // If menu is open, always keep the navbar visible
      if (isOpen) {
        setIsVisible(true);
        return;
      }
      
      const currentScrollY = window.scrollY;
      
      // Hide if scrolling down and past 100px. Show if scrolling up.
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const links = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'TRAINERS', path: '/trainers' },
    { name: 'MEMBERSHIP', path: '/membership' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      {/* Top Navbar Container */}
      <nav className={`fixed top-0 left-0 w-full z-[60] flex justify-between items-center px-6 md:px-10 py-6 bg-gradient-to-b from-black/90 to-transparent pointer-events-none transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        {/* Logo */}
        <div className="cursor-pointer group pointer-events-auto">
          <div className="border-2 border-[#a3ff00] p-1.5 flex flex-col items-center justify-center font-black text-[13px] md:text-[15px] group-hover:scale-105 transition-transform duration-300 gap-[2px] tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
            <div className="flex items-center text-[#a3ff00]">
              <span className="mr-0.5">W</span>
              <span>O</span>
              <div className="w-2 h-[3px] bg-[#a3ff00] mx-[1px]"></div>
              <span>O</span>
            </div>
            <div className="flex items-center text-[#a3ff00]">
              <span className="mr-0.5">H</span>
              <span>O</span>
              <div className="w-2 h-[3px] bg-[#a3ff00] mx-[1px]"></div>
              <span>O</span>
            </div>
          </div>
        </div>

        {/* Hamburger / Close Icon */}
        <button 
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none pointer-events-auto group"
          aria-label="Toggle Menu"
        >
          <span className={`block w-8 h-0.5 bg-white transition-all duration-300 origin-center group-hover:bg-[#a3ff00] ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-all duration-300 group-hover:bg-[#a3ff00] ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-8 h-0.5 bg-white transition-all duration-300 origin-center group-hover:bg-[#a3ff00] ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Fullscreen Menu Canvas */}
      <div 
        ref={menuRef}
        className="fixed inset-0 z-[50] bg-[#050505] flex flex-col items-center justify-center"
        style={{ transform: 'translateY(-100%)' }}
      >
        {/* Background Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none" 
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center gap-8 md:gap-10 z-10">
          {links.map((link, index) => (
            <div 
              key={link.name} 
              className="overflow-hidden"
            >
              <div ref={el => linksRef.current[index] = el}>
                {link.path.startsWith('#') ? (
                  <a 
                    href={link.path}
                    onClick={closeMenu}
                    className="text-2xl md:text-xl font-bold tracking-[0.1em] text-white hover:text-[#a3ff00] hover:scale-110 transition-all duration-300 inline-block"
                    style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                  >
                    {link.name}
                  </a>
                ) : (
                  <NavLink 
                    to={link.path}
                    onClick={closeMenu}
                    className="text-4xl md:text-6xl font-bold tracking-[0.1em] text-white hover:text-[#a3ff00] hover:scale-110 transition-all duration-300 inline-block"
                    style={{ fontFamily: '"Bebas Neue", sans-serif' }}
                  >
                    {link.name}
                  </NavLink>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;
