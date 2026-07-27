import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Crown } from 'lucide-react';
import { INITIAL_TESTIMONIALS } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % INITIAL_TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-[#030A1C] via-[#081B4B]/30 to-[#020612] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
            <Crown className="w-4 h-4" />
            <span>Patron Endorsements</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
            Patron <span className="gold-gradient-text italic font-serif">Experiences</span>
          </h2>
          <p className="font-poppins text-slate-400 text-sm mt-2 font-light">
            Voices of discerning gentlemen who wear Askara Grand with pride.
          </p>
        </div>

        {/* Carousel Card */}
        <div className="max-w-4xl mx-auto relative">
          <div className="p-8 sm:p-12 rounded-3xl glass-card border border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
            <Quote className="absolute top-6 right-8 w-20 h-20 text-[#D4AF37]/10 pointer-events-none" />

            <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
              
              {/* Customer Avatar */}
              <div className="shrink-0">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-tr from-[#D4AF37] to-[#081B4B] p-1 shadow-2xl">
                  <img
                    src={INITIAL_TESTIMONIALS[activeTab].avatar}
                    alt={INITIAL_TESTIMONIALS[activeTab].customerName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

              {/* Review Text & Info */}
              <div className="space-y-4 text-center md:text-left">
                {/* 5 Stars */}
                <div className="flex items-center justify-center md:justify-start gap-1 text-[#D4AF37]">
                  {[...Array(INITIAL_TESTIMONIALS[activeTab].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                  ))}
                </div>

                <p className="font-playfair italic text-lg sm:text-xl text-slate-100 leading-relaxed font-normal">
                  "{INITIAL_TESTIMONIALS[activeTab].review}"
                </p>

                <div>
                  <h4 className="font-montserrat font-bold text-base text-[#FFF1C5]">
                    {INITIAL_TESTIMONIALS[activeTab].customerName}
                  </h4>
                  <p className="text-xs text-slate-400 font-poppins">
                    {INITIAL_TESTIMONIALS[activeTab].customerLocation}
                  </p>
                </div>
              </div>

            </div>

            {/* Slider Dots & Navigation */}
            <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {INITIAL_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeTab === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-slate-700 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab((prev) => (prev === 0 ? INITIAL_TESTIMONIALS.length - 1 : prev - 1))}
                  className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTab((prev) => (prev + 1) % INITIAL_TESTIMONIALS.length)}
                  className="p-2 rounded-full border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
