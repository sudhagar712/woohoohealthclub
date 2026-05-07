import React, { useState } from 'react';

const Trainers = () => {
  const [activeTab, setActiveTab] = useState(0);

  const trainers = [
    {
      firstName: "IBRAHIM",
      lastName: "KHALEEL",
      roles: "CO FOUNDER • MASTER PERSONAL TRAINER • PERFORMANCE COACH",
      experience: "7+ YRS",
      clients: "600+",
      tier: "TIER 5",
      specializations: [
        "Advanced Strength & Resistance Training",
        "Body Composition & Physique Transformation",
        "Functional Movement & Corrective Exercise",
        "Sport-Specific Athletic Conditioning",
        "Metabolic Conditioning & Cardiovascular Performance",
        "Holistic Wellness & Lifestyle Coaching",
        "Nutritional Strategy & Performance Fuelling"
      ],
      // Using placeholder images that fit the vibe
      image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop", 
      thumbnail: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=200&auto=format&fit=crop"
    },
    {
      firstName: "SARAH",
      lastName: "JENKINS",
      roles: "SENIOR PERSONAL TRAINER • YOGA INSTRUCTOR",
      experience: "5+ YRS",
      clients: "300+",
      tier: "TIER 4",
      specializations: [
        "Yoga & Flexibility Training",
        "Core Strength & Stability",
        "Pre & Post Natal Fitness",
        "Mindfulness & Meditation Coaching",
        "Mobility & Posture Correction"
      ],
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop", 
      thumbnail: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=200&auto=format&fit=crop"
    },
    {
      firstName: "MARCUS",
      lastName: "WRIGHT",
      roles: "STRENGTH COACH • NUTRITION SPECIALIST",
      experience: "10+ YRS",
      clients: "1000+",
      tier: "TIER 5",
      specializations: [
        "Olympic Weightlifting",
        "Powerlifting Coaching",
        "Macro & Micro Nutritional Planning",
        "Injury Rehabilitation",
        "Sports Psychology"
      ],
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop", 
      thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=200&auto=format&fit=crop"
    }
  ];

  const activeTrainer = trainers[activeTab];

  return (
    <div className="w-full bg-[#050505] min-h-screen text-white flex flex-col lg:flex-row relative pt-20 lg:pt-0">
      
      {/* LEFT FIXED AREA (Sidebar + Large Image) */}
      <div className="w-full lg:w-[60%] h-[60vh] lg:h-screen lg:sticky lg:top-0 flex flex-col sm:flex-row border-b lg:border-b-0 lg:border-r border-[#222] z-10 bg-[#050505]">
        
        {/* Vertical/Horizontal Tabs Sidebar */}
        <div className="w-full sm:w-24 lg:w-28 h-auto sm:h-full border-b sm:border-b-0 sm:border-r border-[#222] flex sm:flex-col items-center py-4 sm:py-10 gap-4 sm:gap-8 bg-[#0a0a0a] overflow-x-auto sm:overflow-visible px-4 sm:px-0 shrink-0">
          
          {/* Desktop "SELECT TRAINER" vertical text */}
          <div className="hidden sm:flex flex-col items-center gap-4 mt-16">
            <div className="w-px h-16 bg-[#a3ff00]"></div>
            <span className="text-gray-500 text-[10px] tracking-[0.3em] font-bold" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              SELECT TRAINER
            </span>
            <div className="w-px h-16 bg-[#a3ff00]"></div>
          </div>
          
          {/* Mobile text */}
          <span className="sm:hidden text-gray-500 text-[10px] tracking-[0.3em] font-bold whitespace-nowrap uppercase">
            Select Trainer
          </span>

          {/* Thumbnails */}
          <div className="flex sm:flex-col gap-4 sm:mt-8 shrink-0">
            {trainers.map((t, i) => (
              <button 
                key={i}
                onClick={() => setActiveTab(i)}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition-all duration-300 shrink-0 ${activeTab === i ? 'border-[#a3ff00] scale-110 shadow-[0_0_15px_rgba(163,255,0,0.4)]' : 'border-[#333] opacity-40 hover:opacity-100 hover:border-gray-500'}`}
              >
                <img src={t.thumbnail} alt={t.firstName} className="w-full h-full object-cover filter grayscale" />
              </button>
            ))}
          </div>
        </div>

        {/* Large Image Area */}
        <div className="flex-1 relative overflow-hidden bg-[#050505] flex items-end justify-center">
          {/* Faint Background Repeating Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center opacity-[0.03] pointer-events-none overflow-hidden select-none translate-x-[-10%]">
            <span className="text-[150px] sm:text-[200px] lg:text-[300px] font-black text-transparent leading-[0.75] whitespace-nowrap" style={{ WebkitTextStroke: '3px white', fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
              {activeTrainer.firstName}
            </span>
            <span className="text-[150px] sm:text-[200px] lg:text-[300px] font-black text-transparent leading-[0.75] whitespace-nowrap" style={{ WebkitTextStroke: '3px white', fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
              {activeTrainer.firstName}
            </span>
            <span className="text-[150px] sm:text-[200px] lg:text-[300px] font-black text-transparent leading-[0.75] whitespace-nowrap" style={{ WebkitTextStroke: '3px white', fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
              {activeTrainer.firstName}
            </span>
          </div>
          
          {/* Main Trainer Portrait Image */}
          <div className="relative z-10 w-full h-[95%]">
            {/* Using an object-contain image aligned to bottom so it looks like they are standing */}
            <img 
              src={activeTrainer.image} 
              alt={activeTrainer.name} 
              className="w-full h-full object-contain object-bottom filter grayscale drop-shadow-2xl transition-opacity duration-500 ease-in-out" 
            />
            {/* Gradient fade at the bottom to blend seamlessly into black */}
            <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-[#050505] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* RIGHT SCROLLABLE CONTENT AREA */}
      <div className="w-full lg:w-[40%] bg-[#050505] p-6 sm:p-10 lg:p-16 flex flex-col justify-center min-h-screen">
        <div className="max-w-xl animate-fade-in-up transition-all duration-500" key={activeTab}>
          
          {/* Roles */}
          <p className="text-[#a3ff00] font-bold text-xs md:text-sm tracking-[0.2em] uppercase mb-4 leading-relaxed">
            {activeTrainer.roles}
          </p>
          
          {/* Name Title */}
          <h1 className="text-6xl sm:text-7xl lg:text-[90px] font-black mb-10 leading-none tracking-tight" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
            <span className="text-white">{activeTrainer.firstName} </span>
            <span className="text-[#a3ff00] drop-shadow-[0_0_15px_rgba(163,255,0,0.3)]">{activeTrainer.lastName}</span>
          </h1>

          {/* Stats Divider */}
          <div className="w-full h-px bg-[#222] mb-8"></div>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-6 pb-10 mb-8 border-b border-[#222]">
            
            {/* Experience */}
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
                {activeTrainer.experience}
              </span>
              <span className="text-gray-500 text-[10px] tracking-widest font-bold mt-2 uppercase">EXPERIENCE</span>
            </div>
            
            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-[#333]"></div>
            
            {/* Clients */}
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
                {activeTrainer.clients}
              </span>
              <span className="text-gray-500 text-[10px] tracking-widest font-bold mt-2 uppercase">NO OF CLIENTS</span>
            </div>
            
            {/* Divider */}
            <div className="hidden sm:block w-px h-12 bg-[#333]"></div>
            
            {/* Tier */}
            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-black text-white" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
                {activeTrainer.tier}
              </span>
              <span className="text-gray-500 text-[10px] tracking-widest font-bold mt-2 uppercase">TIER</span>
            </div>

          </div>

          {/* Specializations Section */}
          <div>
            <p className="text-gray-500 text-[11px] tracking-[0.15em] font-bold mb-6 uppercase">
              SPECIALIZATIONS
            </p>
            <div className="flex flex-wrap gap-3">
              {activeTrainer.specializations.map((spec, i) => (
                <span 
                  key={i} 
                  className="px-5 py-3 rounded-full border border-[#2a2a2a] text-gray-300 text-xs sm:text-sm font-medium bg-[#0f0f0f] hover:border-[#a3ff00] hover:text-white transition-colors cursor-default shadow-sm"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Trainers;
