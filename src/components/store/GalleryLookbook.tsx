import React, { useState } from 'react';
import { LOOKBOOK_ITEMS } from '../../data/mockData';
import { Camera, Crown, Sparkles } from 'lucide-react';

export const GalleryLookbook: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const categories = ['ALL', 'Formal Wear', 'Ethnic Wear', 'Shirts & Suits', 'Kids Collection', 'Bespoke Atelier', 'Leather & Silk'];

  const filteredItems = LOOKBOOK_ITEMS.filter(
    (item) => activeFilter === 'ALL' || item.category === activeFilter
  );

  return (
    <section id="atelier-lookbook" className="py-20 bg-[#020612] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
            <Camera className="w-4 h-4" />
            <span>Sartorial Lookbook</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
            Atelier <span className="gold-gradient-text italic font-serif">Gallery</span>
          </h2>
          <p className="font-poppins text-slate-400 text-sm mt-2 font-light">
            An aesthetic showcase of handcrafted tailoring, store atmosphere, and royal fashion events.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-montserrat font-medium transition-all cursor-pointer border whitespace-nowrap ${
                activeFilter === cat
                  ? 'border-[#D4AF37] bg-[#D4AF37] text-[#081B4B] font-bold shadow-lg'
                  : 'border-slate-800 text-slate-400 hover:border-[#D4AF37]/40 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative rounded-2xl overflow-hidden glass-card border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 cursor-pointer shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.title}
                referrerPolicy="no-referrer"
                className="w-full h-auto object-cover group-hover:scale-108 transition-transform duration-700"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A1C] via-[#030A1C]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Caption Content */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] font-montserrat uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {item.category}
                </span>
                <h3 className="font-playfair font-bold text-lg text-slate-100 group-hover:text-[#FFF1C5]">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
