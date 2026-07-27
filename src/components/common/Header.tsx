import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Heart, 
  Search, 
  User, 
  Menu, 
  X, 
  ShieldCheck, 
  Sparkles,
  Scissors,
  PhoneCall,
  Crown
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const Header: React.FC = () => {
  const { 
    cart, 
    wishlist, 
    setIsCartOpen, 
    activeView, 
    setActiveView, 
    storeSection, 
    setStoreSection,
    searchQuery,
    setSearchQuery,
    setIsAuthModalOpen,
    setIsBespokeModalOpen,
    user
  } = useStore();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const cartItemsCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Shop Catalog', section: 'shop' },
    { label: 'Categories', section: 'categories' },
    { label: 'New Arrivals', section: 'new-arrivals' },
    { label: 'Offers & Deals', section: 'offers' },
    { label: 'Atelier Lookbook', section: 'atelier' },
    { label: 'AI Stylist', section: 'stylist' },
    { label: 'About Us', section: 'about' },
    { label: 'Contact', section: 'contact' },
  ] as const;

  return (
    <header className="sticky top-0 z-40 bg-[#030A1C]/90 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-2xl transition-all">
      {/* Top Banner Notice */}
      <div className="bg-gradient-to-r from-[#081B4B] via-[#0E2A73] to-[#081B4B] border-b border-[#D4AF37]/20 py-1.5 px-4 text-xs font-montserrat tracking-wider text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-[#D4AF37]">
            <Crown className="w-3.5 h-3.5 animate-pulse" />
            <span className="font-semibold uppercase tracking-widest text-[11px] text-[#FFF1C5]">
              Askara Grand Heritage Privilege
            </span>
            <span className="hidden md:inline text-slate-400">| Bespoke Tailoring & Complimentary Worldwide Delivery</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <button 
              onClick={() => setIsBespokeModalOpen(true)}
              className="flex items-center gap-1.5 text-[#D4AF37] hover:text-white transition-colors cursor-pointer"
            >
              <Scissors className="w-3 h-3" />
              <span>Book Master Fitting</span>
            </button>
            <span className="text-slate-600">|</span>
            <a href="tel:+918489332211" className="flex items-center gap-1 hover:text-[#D4AF37] transition-colors">
              <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
              <span>+91 84893 32211</span>
            </a>
            <span className="text-slate-600">|</span>
            <button 
              onClick={() => setActiveView(activeView === 'storefront' ? 'admin' : 'storefront')}
              className="px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] font-semibold transition-all cursor-pointer flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>{activeView === 'storefront' ? 'Admin Atelier' : 'Storefront'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div 
          onClick={() => {
            setActiveView('storefront');
            setStoreSection('home');
          }}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-br from-[#D4AF37] via-[#AA7C11] to-[#081B4B] p-0.5 shadow-lg group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#030A1C] rounded-full flex items-center justify-center border border-[#D4AF37]/40">
              <span className="font-playfair font-black text-lg text-[#D4AF37] tracking-tighter">AG</span>
            </div>
          </div>
          <div>
            <h1 className="font-playfair font-bold text-xl sm:text-2xl tracking-wider text-slate-100 uppercase group-hover:text-[#D4AF37] transition-colors">
              ASKARA GRAND
            </h1>
            <p className="font-cormorant italic text-xs tracking-widest text-[#D4AF37] font-medium -mt-1">
              Luxury Men's & Boys Wear
            </p>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-montserrat text-xs uppercase tracking-widest font-medium text-slate-300">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => {
                setActiveView('storefront');
                setStoreSection(link.section as any);
              }}
              className={`transition-colors py-1 relative cursor-pointer hover:text-[#D4AF37] ${
                storeSection === link.section && activeView === 'storefront'
                  ? 'text-[#D4AF37] font-semibold'
                  : 'text-slate-300'
              }`}
            >
              {link.label}
              {storeSection === link.section && activeView === 'storefront' && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFF1C5] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Search Trigger */}
          <div className="relative">
            {isSearchOpen ? (
              <div className="flex items-center bg-[#081B4B] border border-[#D4AF37]/50 rounded-full px-3 py-1 text-xs w-48 sm:w-64">
                <Search className="w-3.5 h-3.5 text-[#D4AF37] mr-2 shrink-0" />
                <input
                  type="text"
                  placeholder="Search tuxedos, sherwanis, shirts..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (storeSection !== 'shop') setStoreSection('shop');
                  }}
                  autoFocus
                  className="bg-transparent text-slate-100 focus:outline-none w-full text-xs"
                />
                <button onClick={() => setIsSearchOpen(false)} className="text-slate-400 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-slate-300 hover:text-[#D4AF37] transition-colors rounded-full hover:bg-[#081B4B]/50 cursor-pointer"
                title="Search Catalog"
              >
                <Search className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* AI Stylist Quick Trigger */}
          <button
            onClick={() => {
              setActiveView('storefront');
              setStoreSection('stylist');
            }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#081B4B] border border-[#D4AF37]/40 text-[#FFF1C5] hover:border-[#D4AF37] text-xs font-montserrat font-medium transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37] animate-pulse" />
            <span className="hidden md:inline">AI Stylist</span>
          </button>

          {/* Wishlist */}
          <button
            onClick={() => {
              setActiveView('storefront');
              setStoreSection('shop');
            }}
            className="p-2 text-slate-300 hover:text-[#D4AF37] transition-colors relative rounded-full hover:bg-[#081B4B]/50 cursor-pointer"
            title="Wishlist"
          >
            <Heart className="w-5 h-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-[#D4AF37] text-[#081B4B] font-bold text-[10px] rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Bag */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-slate-300 hover:text-[#D4AF37] transition-colors relative rounded-full hover:bg-[#081B4B]/50 cursor-pointer"
            title="Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartItemsCount > 0 && (
              <span className="absolute top-1 right-1 w-4.5 h-4.5 bg-gradient-to-r from-[#D4AF37] to-[#FFF1C5] text-[#081B4B] font-black text-[10px] rounded-full flex items-center justify-center shadow-md animate-bounce">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* User Account / Profile */}
          <button
            onClick={() => setIsAuthModalOpen(true)}
            className="flex items-center gap-2 p-1.5 rounded-full border border-[#D4AF37]/30 text-slate-300 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors cursor-pointer bg-[#081B4B]/40"
          >
            <User className="w-4 h-4 text-[#D4AF37]" />
            <span className="hidden md:inline text-xs font-montserrat font-medium truncate max-w-[100px]">
              {user ? user.name.split(' ')[0] : 'Sign In'}
            </span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-[#D4AF37] transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030A1C] border-b border-[#D4AF37]/30 px-6 py-5 space-y-4 font-montserrat text-sm uppercase tracking-wider">
          <div className="grid grid-cols-2 gap-3 pb-3 border-b border-slate-800">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => {
                  setActiveView('storefront');
                  setStoreSection(link.section as any);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-left py-2 px-3 rounded-lg border transition-all ${
                  storeSection === link.section && activeView === 'storefront'
                    ? 'border-[#D4AF37] bg-[#081B4B] text-[#D4AF37] font-semibold'
                    : 'border-slate-800 text-slate-300 hover:bg-[#081B4B]/40'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setActiveView(activeView === 'storefront' ? 'admin' : 'storefront');
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Switch To {activeView === 'storefront' ? 'Admin Atelier' : 'Storefront'}</span>
            </button>

            <button
              onClick={() => {
                setIsBespokeModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-lg border border-[#D4AF37] text-[#D4AF37] font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <Scissors className="w-4 h-4" />
              <span>Book Master Fitting</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
