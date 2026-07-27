import React, { useState } from 'react';
import { Sparkles, Crown, ArrowRight, ShoppingBag, CheckCircle2, RefreshCw } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Product } from '../../types';

export const AIStylistSection: React.FC = () => {
  const { products, addToCart, addToast } = useStore();

  const [occasion, setOccasion] = useState('Grand Wedding Reception');
  const [patronGroup, setPatronGroup] = useState<'Men' | 'Boys'>('Men');
  const [stylePreference, setStylePreference] = useState('Royal Heritage');
  const [isGenerating, setIsGenerating] = useState(false);

  const [recommendedEnsemble, setRecommendedEnsemble] = useState<{
    title: string;
    description: string;
    items: Product[];
  } | null>(null);

  const handleGenerateOutfit = () => {
    setIsGenerating(true);

    setTimeout(() => {
      // Pick matching products based on group & preference
      const matched = products.filter((p) => {
        if (patronGroup === 'Boys') return p.gender === 'Boys';
        return p.gender === 'Men';
      });

      const primary = matched[0] || products[0];
      const secondary = matched[1] || products[2];
      const accessory = products.find((p) => p.category === 'Accessories') || products[7];

      setRecommendedEnsemble({
        title: `The ${stylePreference} ${occasion} Ensemble`,
        description: `Hand-selected bespoke coordination tailored for a ${occasion}. Blends ${primary.fabric} with complementary accents for an impeccable silhouette.`,
        items: [primary, secondary, accessory].filter(Boolean) as Product[]
      });

      setIsGenerating(false);
      addToast('Ensemble Generated', 'AI Master Stylist curated your royal combination.', 'success');
    }, 1200);
  };

  const handleAddEnsembleToBag = () => {
    if (!recommendedEnsemble) return;
    recommendedEnsemble.items.forEach((item) => {
      addToCart(item);
    });
    addToast('Complete Ensemble Reserved', 'All items added to your Atelier Bag.', 'success');
  };

  return (
    <section id="ai-stylist" className="py-20 bg-gradient-to-br from-[#081B4B] via-[#030A1C] to-[#0A183A] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2 px-3 py-1 rounded-full bg-[#030A1C] border border-[#D4AF37]/30">
            <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" />
            <span>AI Master Concierge</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
            AI Bespoke <span className="gold-gradient-text italic font-serif">Stylist</span>
          </h2>
          <p className="font-poppins text-slate-300 text-sm mt-2 font-light">
            Specify your occasion and preferences to receive curated outfit ensembles designed by Askara Grand stylists.
          </p>
        </div>

        {/* Control Box */}
        <div className="max-w-4xl mx-auto p-8 rounded-3xl glass-card border border-[#D4AF37]/40 shadow-2xl space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            <div>
              <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                Patron Category
              </label>
              <select
                value={patronGroup}
                onChange={(e) => setPatronGroup(e.target.value as 'Men' | 'Boys')}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Men">Gentlemen (Men)</option>
                <option value="Boys">Young Prince (Boys)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                Occasion Type
              </label>
              <select
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Grand Wedding Reception">Grand Wedding Reception</option>
                <option value="Gala Black Tie Evening">Gala Black Tie Evening</option>
                <option value="Executive Boardroom">Executive Boardroom</option>
                <option value="Festive Royal Celebration">Festive Royal Celebration</option>
                <option value="Coastal Luxury Sunset">Coastal Luxury Sunset</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                Style Vibe
              </label>
              <select
                value={stylePreference}
                onChange={(e) => setStylePreference(e.target.value)}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              >
                <option value="Royal Heritage">Royal Heritage Zardozi</option>
                <option value="Modern Italian Classic">Modern Italian Classic</option>
                <option value="Minimalist Luxury">Minimalist Luxury</option>
                <option value="Bespoke Tuxedo Velvet">Bespoke Tuxedo Velvet</option>
              </select>
            </div>

          </div>

          <button
            onClick={handleGenerateOutfit}
            disabled={isGenerating}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFF1C5] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl hover:scale-101 transition-all cursor-pointer"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin text-[#081B4B]" />
                <span>Curating Ensemble...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#081B4B]" />
                <span>Curate Bespoke Ensemble</span>
              </>
            )}
          </button>
        </div>

        {/* Result Display */}
        {recommendedEnsemble && (
          <div className="max-w-4xl mx-auto mt-10 p-8 rounded-3xl bg-[#030A1C]/90 border border-[#D4AF37] shadow-2xl space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-montserrat text-[#D4AF37] uppercase tracking-widest font-semibold">
                  Curated Royal Match
                </span>
                <h3 className="font-playfair font-bold text-2xl text-slate-100 mt-1">
                  {recommendedEnsemble.title}
                </h3>
                <p className="text-xs text-slate-300 font-poppins mt-1">
                  {recommendedEnsemble.description}
                </p>
              </div>

              <button
                onClick={handleAddEnsembleToBag}
                className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl hover:bg-[#FFF1C5] transition-all cursor-pointer shrink-0"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Reserve Entire Look</span>
              </button>
            </div>

            {/* Product Cards in Ensemble */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {recommendedEnsemble.items.map((prod) => (
                <div key={prod.id} className="p-4 rounded-2xl bg-[#081B4B]/60 border border-[#D4AF37]/30 flex items-center gap-4">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-16 h-20 object-cover rounded-xl border border-[#D4AF37]/30"
                  />
                  <div>
                    <span className="text-[10px] text-[#D4AF37] uppercase font-montserrat font-semibold">{prod.category}</span>
                    <h4 className="font-playfair font-bold text-sm text-slate-100 line-clamp-1">{prod.name}</h4>
                    <p className="font-playfair font-bold text-xs text-[#FFF1C5] mt-1">
                      ₹{prod.offerPrice.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
