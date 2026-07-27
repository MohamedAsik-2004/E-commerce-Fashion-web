import React from 'react';
import { Award, Sparkles, Scissors, ShieldCheck, Truck, RefreshCw, Crown } from 'lucide-react';

const PILLARS = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Super 150s Merino wool, 200/2 Egyptian Giza cotton, and pure Mulberry silk for unmatched comfort.'
  },
  {
    icon: Sparkles,
    title: 'Latest Fashion',
    desc: 'Contemporary European silhouettes merged seamlessly with timeless Indian royal heritage.'
  },
  {
    icon: Scissors,
    title: 'Expert Tailoring',
    desc: '40+ years of master tailor heritage guaranteeing razor-sharp drape and flawless fit.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Brand',
    desc: 'Over 12,000 discerning corporate directors, fashion leaders, and royal families served.'
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    desc: 'Priority insured shipping across India and express dispatch to 45+ international countries.'
  },
  {
    icon: RefreshCw,
    title: 'Easy Exchange',
    desc: '7-day complimentary home alteration service and hassle-free size exchanges.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-[#020612] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
            <Crown className="w-4 h-4" />
            <span>The Askara Standard</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
            Why Choose <span className="gold-gradient-text italic font-serif">Askara Grand</span>
          </h2>
          <p className="font-poppins text-slate-400 text-sm mt-2 font-light">
            Sartorial excellence woven into every seam, thread, and lining.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl glass-card glass-card-hover space-y-4 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#081B4B] p-0.5 shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-full h-full bg-[#030A1C] rounded-[10px] flex items-center justify-center text-[#D4AF37]">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="font-playfair font-bold text-xl text-slate-100 group-hover:text-[#FFF1C5] transition-colors">
                  {pillar.title}
                </h3>

                <p className="font-poppins text-xs text-slate-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
