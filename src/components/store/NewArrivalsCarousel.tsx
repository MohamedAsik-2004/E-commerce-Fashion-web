import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Crown, Sparkles, ArrowRight } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const NewArrivalsCarousel: React.FC = () => {
  const { products, setQuickViewProduct, addToCart, setStoreSection } = useStore();
  const newArrivals = products.filter((p) => p.isNewArrival || p.featured);

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? newArrivals.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === newArrivals.length - 1 ? 0 : prev + 1));
  };

  if (newArrivals.length === 0) return null;

  return (
    <section className="py-20 bg-gradient-to-b from-[#020612] via-[#081B4B]/40 to-[#030A1C] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Spring / Summer '26</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
              New <span className="gold-gradient-text italic font-serif">Arrivals</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-all cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-all cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth > 1024 ? 3 : window.innerWidth > 640 ? 2 : 1))}%)` }}
          >
            {newArrivals.map((item) => (
              <div
                key={item.id}
                className="w-full sm:w-1/2 lg:w-1/3 shrink-0 glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col justify-between"
              >
                <div className="relative aspect-[3/4] bg-[#030A1C]">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-[10px] px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                    New Season
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-xs font-montserrat uppercase tracking-wider text-[#D4AF37] font-semibold">
                    {item.brand}
                  </span>
                  <h3 className="font-playfair font-bold text-xl text-slate-100 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-light line-clamp-2">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-800">
                    <div>
                      <span className="font-playfair font-bold text-lg text-slate-100">
                        ₹{item.offerPrice.toLocaleString('en-IN')}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setQuickViewProduct(item)}
                        className="px-3 py-2 rounded-lg border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] text-xs font-montserrat font-semibold cursor-pointer"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => addToCart(item)}
                        className="px-4 py-2 rounded-lg bg-[#D4AF37] text-[#081B4B] hover:bg-[#FFF1C5] text-xs font-montserrat font-bold cursor-pointer"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
