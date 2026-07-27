import React, { useState } from 'react';
import { 
  Heart, 
  Eye, 
  ShoppingBag, 
  Star, 
  Sparkles, 
  Check, 
  Filter,
  Layers,
  Crown
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Product } from '../../types';

export const FeaturedProducts: React.FC = () => {
  const { 
    products, 
    wishlist, 
    toggleWishlist, 
    addToCart, 
    setQuickViewProduct,
    searchQuery,
    selectedCategoryFilter,
    setSelectedCategoryFilter
  } = useStore();

  const [genderFilter, setGenderFilter] = useState<'ALL' | 'Men' | 'Boys'>('ALL');
  const [activeSizeSelectors, setActiveSizeSelectors] = useState<{ [key: string]: string }>({});

  const categories = ['ALL', 'Formal Wear', 'Ethnic Wear', 'Blazers', 'Shirts', 'Kids Collection', 'Casual Wear', 'Accessories', 'Trousers', 'Jeans', 'T-Shirts'];

  // Filtering
  const filteredProducts = products.filter((prod) => {
    // Search query
    const matchesSearch = 
      !searchQuery || 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.category.toLowerCase().includes(searchQuery.toLowerCase());

    // Category
    const matchesCategory = selectedCategoryFilter === 'ALL' || prod.category === selectedCategoryFilter;

    // Gender
    const matchesGender = genderFilter === 'ALL' || prod.gender === genderFilter;

    return matchesSearch && matchesCategory && matchesGender;
  });

  const handleSelectSize = (productId: string, size: string) => {
    setActiveSizeSelectors((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="shop-catalog" className="py-20 bg-[#020612] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
            <Crown className="w-4 h-4" />
            <span>Gentlemen's & Boys Masterpieces</span>
          </div>
          <h2 className="font-playfair font-bold text-3xl sm:text-5xl text-slate-100">
            Featured <span className="gold-gradient-text italic font-serif">Catalog</span>
          </h2>
          <p className="font-poppins text-slate-400 text-sm mt-3 font-light">
            Exquisite fabrics, Italian tailoring, and royal zardozi embroidery handcrafted for discerning patrons.
          </p>
        </div>

        {/* Gender Tabs & Category Filters */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-[#D4AF37]/20">
          
          {/* Gender Filter Segment */}
          <div className="flex items-center p-1 bg-[#081B4B]/60 rounded-xl border border-[#D4AF37]/30">
            <button
              onClick={() => setGenderFilter('ALL')}
              className={`px-4 py-2 rounded-lg text-xs font-montserrat font-semibold tracking-wider transition-all cursor-pointer ${
                genderFilter === 'ALL'
                  ? 'bg-[#D4AF37] text-[#081B4B] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              All Patrons
            </button>
            <button
              onClick={() => setGenderFilter('Men')}
              className={`px-4 py-2 rounded-lg text-xs font-montserrat font-semibold tracking-wider transition-all cursor-pointer ${
                genderFilter === 'Men'
                  ? 'bg-[#D4AF37] text-[#081B4B] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Men's Wear
            </button>
            <button
              onClick={() => setGenderFilter('Boys')}
              className={`px-4 py-2 rounded-lg text-xs font-montserrat font-semibold tracking-wider transition-all cursor-pointer ${
                genderFilter === 'Boys'
                  ? 'bg-[#D4AF37] text-[#081B4B] shadow-lg'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Boys Collection
            </button>
          </div>

          {/* Category Chips Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategoryFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-montserrat whitespace-nowrap transition-all cursor-pointer border ${
                  selectedCategoryFilter === cat
                    ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-[#D4AF37] font-semibold'
                    : 'border-slate-800 text-slate-400 hover:border-[#D4AF37]/40 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Product Count & Active Search Info */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6 font-montserrat">
          <p>
            Showing <span className="text-[#D4AF37] font-bold">{filteredProducts.length}</span> luxury pieces
          </p>
          {searchQuery && (
            <p className="italic text-slate-300">
              Matching search: "<span className="text-[#D4AF37]">{searchQuery}</span>"
            </p>
          )}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#081B4B]/20 rounded-2xl border border-[#D4AF37]/20">
            <Layers className="w-12 h-12 text-[#D4AF37] mx-auto mb-3 opacity-50" />
            <h3 className="font-playfair font-bold text-lg text-slate-200">No luxury items match your criteria</h3>
            <p className="text-xs text-slate-400 mt-1">Try resetting filters or adjusting search keywords.</p>
            <button
              onClick={() => {
                setSelectedCategoryFilter('ALL');
                setGenderFilter('ALL');
              }}
              className="mt-4 px-5 py-2 rounded-lg bg-[#D4AF37] text-[#081B4B] font-bold text-xs uppercase tracking-wider cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => {
              const isWishlisted = wishlist.includes(prod.id);
              const selectedSize = activeSizeSelectors[prod.id] || prod.sizes[0];

              return (
                <div
                  key={prod.id}
                  className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover flex flex-col justify-between"
                >
                  {/* Top Image Box */}
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#030A1C]">
                    <img
                      src={prod.images[0]}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-108 transition-transform duration-700"
                    />

                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030A1C] via-transparent to-transparent opacity-60" />

                    {/* Discount Badge */}
                    {prod.discountBadge && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-[10px] px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                        {prod.discountBadge}
                      </div>
                    )}

                    {/* Wishlist Heart Icon */}
                    <button
                      onClick={() => toggleWishlist(prod.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md border transition-all cursor-pointer ${
                        isWishlisted
                          ? 'bg-red-500/20 border-red-500 text-red-400'
                          : 'bg-[#030A1C]/70 border-[#D4AF37]/30 text-slate-300 hover:text-[#D4AF37]'
                      }`}
                      title="Add to Wishlist"
                    >
                      <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
                    </button>

                    {/* Quick View Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                      <button
                        onClick={() => setQuickViewProduct(prod)}
                        className="w-full py-2.5 rounded-xl bg-[#030A1C]/90 backdrop-blur-md border border-[#D4AF37]/60 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] font-montserrat font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-xl cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Card Content Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                    
                    <div>
                      {/* Brand & Stock Status */}
                      <div className="flex items-center justify-between text-[11px] font-montserrat tracking-wider uppercase mb-1">
                        <span className="text-[#D4AF37] font-medium">{prod.brand}</span>
                        <span className={`font-semibold ${prod.stock < 10 ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {prod.stock < 10 ? `Low Stock (${prod.stock})` : 'In Stock'}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-playfair font-bold text-base text-slate-100 group-hover:text-[#FFF1C5] transition-colors line-clamp-1">
                        {prod.name}
                      </h3>

                      {/* Ratings */}
                      <div className="flex items-center gap-1 mt-1 text-xs text-slate-400">
                        <div className="flex items-center text-[#D4AF37]">
                          <Star className="w-3 h-3 fill-[#D4AF37]" />
                          <span className="ml-1 font-bold text-slate-200">{prod.rating}</span>
                        </div>
                        <span className="text-[11px]">({prod.reviewCount} patrons)</span>
                      </div>
                    </div>

                    {/* Size Selector Quick Bar */}
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-montserrat tracking-widest text-slate-400">Select Fitting:</span>
                      <div className="flex flex-wrap gap-1">
                        {prod.sizes.map((sz) => (
                          <button
                            key={sz}
                            onClick={() => handleSelectSize(prod.id, sz)}
                            className={`px-2 py-0.5 text-[10px] font-montserrat rounded border transition-colors cursor-pointer ${
                              selectedSize === sz
                                ? 'border-[#D4AF37] bg-[#D4AF37] text-[#081B4B] font-bold'
                                : 'border-slate-800 text-slate-400 hover:border-slate-600'
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Price & Add To Cart Button */}
                    <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
                      <div>
                        <span className="font-playfair font-bold text-lg text-slate-100">
                          ₹{prod.offerPrice.toLocaleString('en-IN')}
                        </span>
                        {prod.price > prod.offerPrice && (
                          <span className="text-xs text-slate-500 line-through ml-2">
                            ₹{prod.price.toLocaleString('en-IN')}
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => addToCart(prod, selectedSize)}
                        className="p-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] hover:scale-105 transition-all shadow-md cursor-pointer font-bold flex items-center gap-1.5"
                        title="Add to Atelier Bag"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span className="text-xs font-montserrat hidden sm:inline uppercase tracking-wider">Bag</span>
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
