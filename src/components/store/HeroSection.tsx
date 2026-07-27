import React from 'react';
import { Crown, ArrowRight, Scissors, Sparkles, MapPin, Star } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const HeroSection: React.FC = () => {
  const { setStoreSection, setIsBespokeModalOpen } = useStore();

  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-[#030A1C] via-[#081B4B] to-[#020612] overflow-hidden flex items-center pt-8 pb-16">
      {/* Background Gold Abstract Lines & Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Glowing Light Spheres */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#081B4B]/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Heritage Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#081B4B]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest shadow-lg">
              <Crown className="w-4 h-4 animate-spin-slow text-[#D4AF37]" />
              <span>EST. 1984 • HERITAGE EXCELLENCE</span>
            </div>

            {/* Headline */}
            <h1 className="font-playfair font-bold text-4xl sm:text-6xl lg:text-7xl leading-tight text-slate-100">
              Premium <span className="gold-gradient-text italic font-serif">Men's & Boys</span> Fashion
            </h1>

            {/* Subtitle */}
            <p className="font-poppins text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-light">
              Discover bespoke tuxedos, royal sherwanis, Egyptian cotton shirts, tailored trousers, accessories, and seasonal collections crafted for the modern gentleman and young prince.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setStoreSection('shop')}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-sm uppercase tracking-wider flex items-center gap-3 shadow-2xl hover:scale-105 hover:shadow-[#D4AF37]/30 transition-all cursor-pointer"
              >
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsBespokeModalOpen(true)}
                className="px-8 py-4 rounded-xl border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] font-montserrat font-semibold text-sm uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer bg-[#081B4B]/30 backdrop-blur-md"
              >
                <Scissors className="w-4 h-4" />
                <span>Visit Store Atelier</span>
              </button>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-[#D4AF37]/20 max-w-lg">
              <div>
                <p className="font-playfair font-bold text-2xl text-[#D4AF37]">40+ Yrs</p>
                <p className="text-xs text-slate-400 font-poppins">Master Tailoring</p>
              </div>
              <div>
                <p className="font-playfair font-bold text-2xl text-[#D4AF37]">100%</p>
                <p className="text-xs text-slate-400 font-poppins">Pure Luxury Silk & Wool</p>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-[#D4AF37]" />
                  <span className="font-bold text-base text-slate-100">4.9/5</span>
                </div>
                <p className="text-xs text-slate-400 font-poppins">12,000+ Royal Patrons</p>
              </div>
            </div>

          </div>

          {/* Right Fashion Model Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gold Frame Accent */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#D4AF37] via-[#081B4B] to-[#AA7C11] opacity-50 blur-lg transform rotate-2"></div>
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl bg-[#081B4B]">
                <img
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
                  alt="ASKARA GRAND Royal Men's Fashion"
                  referrerPolicy="no-referrer"
                  className="w-full h-[520px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030A1C] via-transparent to-transparent opacity-80" />

                {/* Floating Craft Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-card border border-[#D4AF37]/40 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#081B4B] flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-playfair font-bold text-sm text-slate-100">The Italian Tuxedo</h3>
                      <p className="text-xs text-[#D4AF37]">Super 150s Silk Velvet</p>
                    </div>
                  </div>
                  <span className="text-xs font-montserrat font-bold text-slate-100 bg-[#081B4B] px-3 py-1 rounded-full border border-[#D4AF37]/30">
                    ₹27,999
                  </span>
                </div>

                {/* Top Location Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#030A1C]/80 backdrop-blur-md border border-[#D4AF37]/40 text-[11px] text-[#D4AF37] flex items-center gap-1.5 font-montserrat">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Flagship Atelier, Chennai</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
