import React, { useState } from 'react';
import { X, Star, ShoppingBag, Heart, Check, ShieldCheck, Scissors } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const QuickViewModal: React.FC = () => {
  const {
    quickViewProduct,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
    setIsBespokeModalOpen
  } = useStore();

  if (!quickViewProduct) return null;

  const [selectedImage, setSelectedImage] = useState(quickViewProduct.images[0]);
  const [selectedSize, setSelectedSize] = useState(quickViewProduct.sizes[0] || '40');
  const [selectedColor, setSelectedColor] = useState(quickViewProduct.colors[0] || { name: 'Default', hex: '#081B4B' });

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-[#030A1C] border border-[#D4AF37]/50 text-slate-100 rounded-3xl shadow-2xl overflow-hidden my-8 relative animate-scale">
        
        {/* Close */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#081B4B]/80 text-slate-300 hover:text-white border border-[#D4AF37]/30"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          
          {/* Left Gallery Images */}
          <div className="space-y-4">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-[#D4AF37]/30 bg-[#081B4B]">
              <img
                src={selectedImage || quickViewProduct.images[0]}
                alt={quickViewProduct.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Thumbnail Row */}
            {quickViewProduct.images.length > 1 && (
              <div className="flex gap-2">
                {quickViewProduct.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-20 rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      selectedImage === img ? 'border-[#D4AF37] ring-2 ring-[#D4AF37]/50' : 'border-slate-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right Content */}
          <div className="space-y-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-montserrat uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {quickViewProduct.brand}
                </span>
                <span className="text-xs text-emerald-400 font-semibold font-montserrat">
                  SKU: {quickViewProduct.sku}
                </span>
              </div>

              <h2 className="font-playfair font-bold text-2xl sm:text-3xl text-slate-100 mt-1">
                {quickViewProduct.name}
              </h2>

              <div className="flex items-center gap-2 mt-2 text-xs text-slate-300">
                <div className="flex items-center text-[#D4AF37]">
                  <Star className="w-4 h-4 fill-[#D4AF37]" />
                  <span className="ml-1 font-bold text-slate-100">{quickViewProduct.rating}</span>
                </div>
                <span>•</span>
                <span>{quickViewProduct.reviewCount} patron reviews</span>
              </div>

              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-playfair font-bold text-2xl text-[#FFF1C5]">
                  ₹{quickViewProduct.offerPrice.toLocaleString('en-IN')}
                </span>
                {quickViewProduct.price > quickViewProduct.offerPrice && (
                  <span className="text-sm text-slate-500 line-through">
                    ₹{quickViewProduct.price.toLocaleString('en-IN')}
                  </span>
                )}
                {quickViewProduct.discountBadge && (
                  <span className="bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-[10px] px-2 py-0.5 rounded uppercase">
                    {quickViewProduct.discountBadge}
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-300 leading-relaxed font-poppins mt-4 font-light">
                {quickViewProduct.description}
              </p>

              {/* Fabric Details */}
              <div className="mt-4 p-3 rounded-xl bg-[#081B4B]/60 border border-[#D4AF37]/20 text-xs text-slate-300 space-y-1">
                <p><strong>Fabric:</strong> {quickViewProduct.fabric}</p>
                {quickViewProduct.careInstructions && <p><strong>Care:</strong> {quickViewProduct.careInstructions}</p>}
              </div>

              {/* Size Selector */}
              <div className="mt-5 space-y-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-montserrat uppercase font-semibold text-slate-300">Fitting Size</span>
                  <button
                    onClick={() => {
                      setQuickViewProduct(null);
                      setIsBespokeModalOpen(true);
                    }}
                    className="text-[#D4AF37] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <Scissors className="w-3 h-3" />
                    <span>Custom Measurement Profile</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3 py-1.5 rounded-lg border text-xs font-montserrat transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'border-[#D4AF37] bg-[#D4AF37] text-[#081B4B] font-bold'
                          : 'border-slate-800 text-slate-300 hover:border-slate-600'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selector */}
              <div className="mt-4 space-y-2">
                <span className="font-montserrat uppercase text-xs font-semibold text-slate-300">Shade Color</span>
                <div className="flex items-center gap-3">
                  {quickViewProduct.colors.map((clr) => (
                    <button
                      key={clr.name}
                      onClick={() => setSelectedColor(clr)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs cursor-pointer transition-all ${
                        selectedColor.name === clr.name ? 'border-[#D4AF37] bg-[#081B4B]' : 'border-slate-800'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white" style={{ backgroundColor: clr.hex }} />
                      <span className="text-slate-200">{clr.name}</span>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-6 border-t border-slate-800 flex items-center gap-3">
              <button
                onClick={() => {
                  addToCart(quickViewProduct, selectedSize, selectedColor);
                  setQuickViewProduct(null);
                }}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-2xl hover:scale-102 transition-all cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Reserve in Atelier Bag</span>
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                  isWishlisted ? 'border-red-500 bg-red-500/20 text-red-400' : 'border-slate-800 text-slate-400 hover:text-[#D4AF37]'
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-red-500' : ''}`} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
