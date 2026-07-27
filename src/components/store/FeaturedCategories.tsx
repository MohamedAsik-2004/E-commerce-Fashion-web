import React from 'react';
import { ArrowUpRight, Crown } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { CategoryType } from '../../types';

interface CategoryCard {
  title: CategoryType;
  image: string;
  itemCount: string;
  badge?: string;
}

const CATEGORIES: CategoryCard[] = [
  {
    title: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800',
    itemCount: '48 Items',
    badge: 'BESTSELLER'
  },
  {
    title: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=800',
    itemCount: '32 Items',
    badge: 'ROYAL EDIT'
  },
  {
    title: 'Blazers',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    itemCount: '28 Items'
  },
  {
    title: 'Shirts',
    image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=800',
    itemCount: '64 Items',
    badge: 'EGYPTIAN COTTON'
  },
  {
    title: 'Kids Collection',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=800',
    itemCount: '24 Items',
    badge: 'YOUNG PRINCE'
  },
  {
    title: 'Accessories',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    itemCount: '40 Items'
  },
  {
    title: 'Casual Wear',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800',
    itemCount: '36 Items'
  },
  {
    title: 'Trousers',
    image: 'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=800',
    itemCount: '30 Items'
  },
  {
    title: 'Jeans',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=800',
    itemCount: '22 Items'
  },
  {
    title: 'T-Shirts',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
    itemCount: '18 Items'
  }
];

export const FeaturedCategories: React.FC = () => {
  const { setStoreSection, setSelectedCategoryFilter } = useStore();

  const handleCategoryClick = (catTitle: CategoryType) => {
    setSelectedCategoryFilter(catTitle);
    setStoreSection('shop');
  };

  return (
    <section className="py-20 bg-[#030A1C] relative border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-montserrat uppercase tracking-widest mb-2">
              <Crown className="w-4 h-4" />
              <span>Tailored Collections</span>
            </div>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl text-slate-100">
              Curated <span className="gold-gradient-text italic font-serif">Categories</span>
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategoryFilter('ALL');
              setStoreSection('shop');
            }}
            className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold text-[#D4AF37] hover:text-white uppercase tracking-wider transition-colors cursor-pointer group"
          >
            <span>View All Categories</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.title}
              onClick={() => handleCategoryClick(cat.title)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer border border-[#D4AF37]/30 hover:border-[#D4AF37] transition-all duration-500 shadow-xl bg-[#081B4B] aspect-[3/4]"
            >
              {/* Category Background Image */}
              <img
                src={cat.image}
                alt={cat.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030A1C] via-[#030A1C]/40 to-transparent group-hover:opacity-90 transition-opacity" />

              {/* Optional Badge */}
              {cat.badge && (
                <div className="absolute top-3 left-3 bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-[9px] px-2.5 py-1 rounded-full uppercase tracking-widest shadow-md">
                  {cat.badge}
                </div>
              )}

              {/* Category Content */}
              <div className="absolute bottom-0 inset-x-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-montserrat tracking-widest uppercase text-[#D4AF37] font-medium">
                  {cat.itemCount}
                </span>
                <h3 className="font-playfair font-bold text-base sm:text-lg text-slate-100 group-hover:text-[#FFF1C5] transition-colors">
                  {cat.title}
                </h3>
                
                <div className="mt-2 flex items-center gap-1 text-[11px] font-montserrat text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
