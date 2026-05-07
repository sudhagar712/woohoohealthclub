import React from 'react';

const Membership = () => {
  return (
    <section className="w-full bg-[#050505] py-24 px-4 md:px-8 flex flex-col items-center justify-center font-sans text-white">
      <div className="text-center mb-16">
        <h4 className="text-[#a3ff00] font-bold tracking-[0.2em] text-sm mb-4">MEMBERSHIP PLANS</h4>
        <h2 className="text-5xl md:text-7xl font-bold tracking-wide" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
          CHOOSE YOUR <span className="text-[#a3ff00]">PATH</span>
        </h2>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">
        
        {/* Monthly Plan */}
        <div className="bg-[#111111] rounded-xl p-8 flex flex-col h-full min-h-[480px]">
          <h3 className="text-2xl font-bold tracking-wider mb-2" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>MONTHLY PLAN</h3>
          <div className="flex items-baseline mb-10 mt-2">
            <span className="text-5xl font-bold" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>₹12,000</span>
            <span className="text-gray-400 ml-2 text-sm font-sans font-medium">/month</span>
          </div>
          
          <ul className="space-y-5 mb-10 font-sans text-sm text-gray-300 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              All facilities access
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              No commitment
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              Cancel anytime
            </li>
          </ul>

          <button className="mt-auto w-full py-4 rounded-xl bg-[#222222] text-white font-bold hover:bg-[#333333] transition-colors font-sans text-sm tracking-widest uppercase">
            Get Started
          </button>
        </div>

        {/* Annual Plan */}
        <div className="bg-[#181e04] rounded-xl p-8 flex flex-col h-full min-h-[520px] border border-[#a3ff00] relative shadow-[0_0_30px_rgba(163,255,0,0.05)] lg:scale-105 z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#a3ff00] text-black text-xs font-bold px-6 py-1.5 rounded-full tracking-wider font-sans whitespace-nowrap">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold tracking-wider mb-2 mt-2" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>ANNUAL PLAN</h3>
          <div className="flex flex-col mb-10">
            <div className="flex items-baseline mt-2">
              <span className="text-5xl font-bold text-[#a3ff00]" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>₹60,000</span>
              <span className="text-gray-400 ml-2 text-sm font-sans font-medium">/year</span>
            </div>
            <span className="text-[#a3ff00] text-xs font-sans mt-2 tracking-wider font-bold">(₹5,000/month • ₹165/day)</span>
          </div>
          
          <ul className="space-y-5 mb-10 font-sans text-sm text-gray-300 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a3ff00]"></div>
              All facilities access
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a3ff00]"></div>
              50% savings
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a3ff00]"></div>
              Best value
            </li>
            <li className="flex items-center gap-3 text-[#a3ff00] font-bold">
              <div className="w-1.5 h-1.5 rounded-full bg-[#a3ff00]"></div>
              MOST POPULAR 🌟
            </li>
          </ul>

          <button className="mt-auto w-full py-4 rounded-xl bg-[#a3ff00] text-black font-bold hover:bg-[#8ee000] transition-colors font-sans text-sm tracking-widest uppercase">
            Get Started
          </button>
        </div>

        {/* Quarterly Plan */}
        <div className="bg-[#111111] rounded-xl p-8 flex flex-col h-full min-h-[480px]">
          <h3 className="text-2xl font-bold tracking-wider mb-2" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>QUARTERLY PLAN</h3>
          <div className="flex flex-col mb-10">
            <div className="flex items-baseline mt-2">
              <span className="text-5xl font-bold" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>₹28,000</span>
              <span className="text-gray-400 ml-2 text-sm font-sans font-medium">/quarter</span>
            </div>
            <span className="text-[#a3ff00] text-xs font-sans mt-2 tracking-wider font-bold">(₹9,333/month)</span>
          </div>
          
          <ul className="space-y-5 mb-10 font-sans text-sm text-gray-300 font-medium">
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              All facilities access
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              25% savings
            </li>
            <li className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
              3-month commitment
            </li>
          </ul>

          <button className="mt-auto w-full py-4 rounded-xl bg-[#222222] text-white font-bold hover:bg-[#333333] transition-colors font-sans text-sm tracking-widest uppercase">
            Get Started
          </button>
        </div>

      </div>
    </section>
  );
};

export default Membership;
