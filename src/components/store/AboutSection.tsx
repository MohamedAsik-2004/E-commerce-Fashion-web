import React from 'react';
import { Crown, Scissors, ShieldCheck, Heart, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20 bg-[#030A1C] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#D4AF37]/50 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=1200"
                alt="ASKARA GRAND Master Tailor Atelier"
                referrerPolicy="no-referrer"
                className="w-full h-[480px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A1C] via-transparent to-transparent opacity-60" />
            </div>
            
            {/* Floating Heritage Badge */}
            <div className="absolute -bottom-6 -right-6 p-6 rounded-2xl glass-card border border-[#D4AF37] max-w-xs hidden sm:block">
              <p className="font-playfair font-bold text-3xl text-[#D4AF37]">1984</p>
              <p className="text-xs text-slate-300 font-poppins mt-1">
                Founded in Chennai as a premier bespoke atelier for royalty and statesmen.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest">
              <Crown className="w-4 h-4" />
              <span>Our Heritage & Craftsmanship</span>
            </div>

            <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
              The Legacy of <span className="gold-gradient-text italic font-serif">Askara Grand</span>
            </h2>

            <p className="font-poppins text-slate-300 text-sm leading-relaxed font-light">
              For over four decades, Askara Grand has redefined luxury fashion for men and young boys. What began as an exclusive master tailoring house in Tamil Nadu has grown into a prestigious international brand synonymous with refined drape, pure Italian fabrics, and opulent zardozi embroidery.
            </p>

            <p className="font-poppins text-slate-300 text-sm leading-relaxed font-light">
              Every jacket, shirt, and sherwani is constructed with floating canvas chest pieces, pick-stitched lapels, and hand-molded shoulder pads to deliver an unmistakable silhouette of dignity and confidence.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <Scissors className="w-6 h-6 text-[#D4AF37]" />
                <div>
                  <h4 className="font-playfair font-bold text-slate-100 text-sm">Hand-Cut Patterns</h4>
                  <p className="text-[11px] text-slate-400">Customized to individual body architecture</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#D4AF37]" />
                <div>
                  <h4 className="font-playfair font-bold text-slate-100 text-sm">Super 150s Wool</h4>
                  <p className="text-[11px] text-slate-400">Sourced directly from Biella mills, Italy</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission, Vision & Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Crown className="w-6 h-6" />
            </div>
            <h3 className="font-playfair font-bold text-xl text-slate-100">Our Mission</h3>
            <p className="font-poppins text-xs text-slate-400 leading-relaxed font-light">
              To provide every gentleman and young prince with sartorial armor crafted from the world's finest fabrics, ensuring confidence, poise, and elegance for every grand occasion.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-playfair font-bold text-xl text-slate-100">Our Vision</h3>
            <p className="font-poppins text-xs text-slate-400 leading-relaxed font-light">
              To remain the globally benchmarked house of luxury men's & boys' fashion, blending traditional zardozi embroidery with cutting-edge European bespoke tailoring.
            </p>
          </div>

          <div className="p-8 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-playfair font-bold text-xl text-slate-100">Core Values</h3>
            <p className="font-poppins text-xs text-slate-400 leading-relaxed font-light">
              Uncompromising fabric integrity, obsession with precision fit, patron privacy, ethical artisan empowerment, and timeless heirloom craftsmanship.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
