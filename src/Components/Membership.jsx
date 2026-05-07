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

      {/* Book Gym Tour Form */}
      <div className="w-full max-w-3xl mt-32 bg-[#0a0a0a] border border-[#1a1a1a] rounded-2xl p-8 md:p-12 font-sans relative shadow-2xl shadow-black/50">
        <h2 className="text-4xl md:text-5xl font-black mb-5 tracking-wide" style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif' }}>
          <span className="text-white">BOOK YOUR </span>
          <span className="text-[#a3ff00]">GYM TOUR</span>
        </h2>
        
        <div className="flex items-start gap-3 mb-6">
          <svg className="w-5 h-5 text-[#a3ff00] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <p className="text-gray-300 text-sm md:text-base leading-snug">
            2nd and 3rd Floor, KP Landmark, 7th Main, 100Ft Road, Indiranagar, Bangalore 560008
          </p>
        </div>

        <p className="text-gray-400 text-sm mb-8">
          Pick a date, drop your details and come experience WooHoo in person.
        </p>

        <form className="flex flex-col gap-5">
          <input 
            type="text" 
            placeholder="Your Name *" 
            className="w-full bg-[#111] border border-[#222] text-white rounded-xl p-4 focus:outline-none focus:border-[#a3ff00] placeholder-gray-600 transition-colors"
            required
          />
          
          <input 
            type="tel" 
            placeholder="Phone Number (10 digits) *" 
            className="w-full bg-[#111] border border-[#222] text-white rounded-xl p-4 focus:outline-none focus:border-[#a3ff00] placeholder-gray-600 transition-colors"
            required
          />
          
          <div className="relative">
            <select 
              className="w-full bg-[#111] border border-[#222] text-gray-400 rounded-xl p-4 focus:outline-none focus:border-[#a3ff00] transition-colors appearance-none"
              required
              defaultValue=""
            >
              <option value="" disabled hidden>Select Goal *</option>
              <option value="weight_loss" className="text-white">Weight Loss</option>
              <option value="muscle_gain" className="text-white">Muscle Gain</option>
              <option value="endurance" className="text-white">Endurance & Fitness</option>
              <option value="rehab" className="text-white">Rehabilitation</option>
            </select>
            {/* Custom chevron for select */}
            <svg className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-500 text-[11px] font-bold ml-1 tracking-widest uppercase">
              Pick Your Visit Date & Time * (7 AM – 7 PM)
            </label>
            <div className="relative">
              {/* Added standard styling to mimic the design */}
              <input 
                type="datetime-local" 
                className="w-full bg-[#111] border border-[#222] text-gray-300 rounded-xl p-4 focus:outline-none focus:border-[#a3ff00] transition-colors appearance-none color-scheme-dark [&::-webkit-calendar-picker-indicator]:opacity-50 hover:[&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
                style={{ colorScheme: 'dark' }}
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-[#a3ff00] text-black font-black uppercase tracking-widest py-4 rounded-xl mt-4 hover:bg-[#8ee000] hover:scale-[1.02] transition-all shadow-[0_0_20px_rgba(163,255,0,0.2)]"
            style={{ fontFamily: '"Bebas Neue", "Bebas Neue Fallback", sans-serif', fontSize: '1.25rem' }}
          >
            Book Your Free Gym Tour
          </button>
        </form>
      </div>

    </section>
  );
};

export default Membership;
