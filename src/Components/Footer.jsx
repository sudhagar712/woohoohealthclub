import React from 'react';
import { Link } from 'react-router-dom';

const FacebookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const InstagramIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>);
const YoutubeIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>);
const WhatsappIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>);
const PhoneIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);

const Footer = () => {
  return (
    <footer 
      className="w-full bg-[#020202] min-h-[700px] text-white py-16 px-4 md:px-8 flex flex-col items-center justify-center relative border-t border-[#111]"
      style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}
    >
      {/* Subtle Radial Glow behind logo */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(25,25,25,1)_0%,_rgba(2,2,2,1)_60%)]"></div>

      {/* Full-height Background Noise Texture */}
      <div 
        className="absolute inset-0 w-full h-full opacity-[0.05] pointer-events-none mix-blend-screen" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}>
      </div>

      <div className="w-full max-w-9xl gap-10  py-10    flex flex-col items-center z-10 text-center">
        
        {/* Logo */}
        <div className="cursor-pointer group  ">
          <div className="border-[3px]  border-[#a3ff00] p-4 flex flex-col items-center justify-center font-black text-3xl group-hover:scale-105 transition-transform duration-300 gap-1 tracking-wider" style={{fontFamily: 'Impact, sans-serif'}}>
            <div className="flex items-center  text-[#a3ff00]">
              <span className="mr-1">W</span>
              <span>O</span>
              <div className="w-3 h-1.5 bg-[#a3ff00]"></div>
              <span>O</span>
            </div>
            <div className="flex items-center text-[#a3ff00]">
              <span className="mr-1">H</span>
              <span>O</span>
              <div className="w-3 h-1.5 bg-[#a3ff00]"></div>
              <span>O</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4  w-full">
          {['ABOUT', 'TRAINERS', 'CONTACT', 'MEMBERSHIP'].map((link) => (
            <Link
              key={link} 
              to={`/${link.toLowerCase()}`} 
              className=" text-md md:text-2xl font-bold tracking-[0.1em] text-gray-200 hover:text-[#a3ff00] transition-colors duration-300"
              style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5 ">
          {[
            { icon: <FacebookIcon />, label: "Facebook" },
            { icon: <InstagramIcon />, label: "Instagram" },
            { icon: <YoutubeIcon />, label: "YouTube" },
            { icon: <WhatsappIcon />, label: "WhatsApp" },
            { icon: <PhoneIcon />, label: "Phone" }
          ].map((item, index) => (
            <a 
              key={index} 
              href="#" 
              aria-label={item.label}
              className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center text-gray-300 hover:border-[#a3ff00] hover:text-[#a3ff00] hover:scale-110 transition-all duration-300 group bg-[#0a0a0a]"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Details */}
        <div className="flex flex-col items-center text-center space-y-3  text-[13px] md:text-sm text-gray-400 font-bold tracking-widest" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
          <p className="flex items-center justify-center gap-2 max-w-2xl leading-relaxed text-gray-300">
            <span className="text-red-600 text-lg">📍</span> 
            2ND AND 3RD FLOOR, KP LANDMARK, 7TH MAIN, 100FT ROAD, INDIRANAGAR, BANGALORE 560008
          </p>
          <p className="text-gray-300">PHONE: +91 88772 21131</p>
          <p className="text-gray-300">HOURS: MON-SAT 5:00AM - 11:00PM | SUNDAY 7:00AM - 7:00PM</p>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-800/80 mb-10 max-w-6xl"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-1.5 text-xs text-gray-500 font-medium">
          <p>© 2026 WooHoo Health Club. All rights reserved. <span className="hidden md:inline mx-1">|</span></p>
          <div className="flex items-center mt-2 md:mt-0">
            <span>Designed and Powered by </span>
            <a href="#" className="flex items-center ml-2 hover:opacity-80 transition-opacity">
              <span className="text-white font-bold text-sm tracking-wider">LS</span>
              <span className="text-[#ff5500] font-bold text-sm">optimAIze</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
