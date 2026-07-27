import React from 'react';
import { Crown, Sparkles, ArrowRight, Percent } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const SeasonalOfferBanner: React.FC = () => {
  const { setStoreSection, setSelectedCategoryFilter } = useStore();

  return (
    <section className="py-16 bg-[#030A1C] relative overflow-hidden my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 bg-gradient-to-r from-[#081B4B] via-[#0D2258] to-[#030A1C] p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Gold Filigree Background Ornaments */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#030A1C]/80 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest">
                <Crown className="w-3.5 h-3.5" />
                <span>Privilege Heritage Celebration</span>
              </div>

              <h2 className="font-playfair font-black text-4xl sm:text-6xl lg:text-7xl text-slate-100 tracking-tight">
                Up to <span className="gold-gradient-text italic font-serif">50% OFF</span>
              </h2>

              <p className="font-poppins text-slate-300 text-sm sm:text-base font-light max-w-xl leading-relaxed">
                Exclusive seasonal offers on our heritage suits, tuxedos, silk sherwanis, and boys' occasion wear. Handcrafted luxury at unmatched privilege pricing.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => {
                    setSelectedCategoryFilter('ALL');
                    setStoreSection('shop');
                  }}
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-sm uppercase tracking-wider flex items-center gap-2 shadow-2xl hover:scale-105 transition-all cursor-pointer"
                >
                  <span>Shop Collection</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-2 text-xs font-montserrat text-[#FFF1C5]">
                  <Percent className="w-4 h-4 text-[#D4AF37]" />
                  <span>Use Code <strong className="text-[#D4AF37] underline decoration-wavy">ROYAL10</strong> for extra 10% OFF</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden border border-[#D4AF37]/40 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform">
                <img
                  src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800"
                  alt="Heritage Collection"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030A1C] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <span className="font-playfair font-bold text-lg text-[#FFF1C5]">Bespoke Sherwani Line</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
