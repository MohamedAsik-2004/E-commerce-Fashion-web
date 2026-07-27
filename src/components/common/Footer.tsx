import React from 'react';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Award, 
  RefreshCw,
  Send,
  Crown
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const Footer: React.FC = () => {
  const { setStoreSection, setActiveView } = useStore();

  return (
    <footer className="bg-gradient-to-b from-[#030A1C] via-[#05112E] to-[#020612] border-t border-[#D4AF37]/30 text-slate-300 font-poppins pt-16 pb-8">
      {/* Upper Value Pillars Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-12 border-b border-[#D4AF37]/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center p-4 rounded-xl bg-[#081B4B]/30 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
            <Award className="w-8 h-8 text-[#D4AF37] mb-2" />
            <h4 className="font-playfair font-semibold text-slate-100 text-sm mb-1">Master Craftsmanship</h4>
            <p className="text-xs text-slate-400">Pure Giza Cotton & Super 150s Wool</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-[#081B4B]/30 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
            <Truck className="w-8 h-8 text-[#D4AF37] mb-2" />
            <h4 className="font-playfair font-semibold text-slate-100 text-sm mb-1">Express Dispatch</h4>
            <p className="text-xs text-slate-400">Complimentary Insurance Shipping</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-[#081B4B]/30 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
            <RefreshCw className="w-8 h-8 text-[#D4AF37] mb-2" />
            <h4 className="font-playfair font-semibold text-slate-100 text-sm mb-1">Seamless Exchange</h4>
            <p className="text-xs text-slate-400">7-Day Atelier Home Alteration</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-xl bg-[#081B4B]/30 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all">
            <ShieldCheck className="w-8 h-8 text-[#D4AF37] mb-2" />
            <h4 className="font-playfair font-semibold text-slate-100 text-sm mb-1">100% Authentic</h4>
            <p className="text-xs text-slate-400">Certified Luxury Fashion House</p>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand Overview Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#081B4B] p-0.5">
              <div className="w-full h-full bg-[#030A1C] rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div>
              <h2 className="font-playfair font-bold text-2xl tracking-wider text-slate-100 uppercase">
                ASKARA GRAND
              </h2>
              <p className="font-cormorant italic text-xs tracking-widest text-[#D4AF37]">
                Luxury Men's & Boys Wear
              </p>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
            Elevating the sartorial experience since 1984. Askara Grand brings together European precision cuts, handcrafted Indian silk zardozi, and bespoke royal tailoring for the discerning gentleman and young prince.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <a href="#" className="w-8 h-8 rounded-full bg-[#081B4B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#081B4B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-[#081B4B] border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-playfair font-semibold text-slate-100 text-sm uppercase tracking-wider mb-4 text-[#FFF1C5]">
            Quick Links
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li>
              <button onClick={() => { setActiveView('storefront'); setStoreSection('shop'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Gentlemen's Tuxedos & Suits
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveView('storefront'); setStoreSection('categories'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Royal Sherwanis & Ethnic
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveView('storefront'); setStoreSection('new-arrivals'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Young Prince Boys Collection
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveView('storefront'); setStoreSection('offers'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Heritage Seasonal Privilege
              </button>
            </li>
            <li>
              <button onClick={() => { setActiveView('storefront'); setStoreSection('atelier'); }} className="hover:text-[#D4AF37] transition-colors cursor-pointer">
                Atelier Lookbook
              </button>
            </li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-playfair font-semibold text-slate-100 text-sm uppercase tracking-wider mb-4 text-[#FFF1C5]">
            Atelier Service
          </h3>
          <ul className="space-y-2.5 text-xs text-slate-400">
            <li><a href="#bespoke" onClick={() => { setActiveView('storefront'); setStoreSection('contact'); }} className="hover:text-[#D4AF37] transition-colors">Master Fitting Appointment</a></li>
            <li><a href="#size-guide" onClick={() => { setActiveView('storefront'); setStoreSection('about'); }} className="hover:text-[#D4AF37] transition-colors">Bespoke Size Guide</a></li>
            <li><a href="#orders" onClick={() => { setActiveView('storefront'); setStoreSection('contact'); }} className="hover:text-[#D4AF37] transition-colors">Track Order Status</a></li>
            <li><a href="#care" onClick={() => { setActiveView('storefront'); setStoreSection('about'); }} className="hover:text-[#D4AF37] transition-colors">Garment Care Guide</a></li>
            <li>
              <button 
                type="button"
                onClick={() => setActiveView('admin-login')} 
                className="text-[#D4AF37] hover:underline font-semibold transition-colors flex items-center gap-1 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Executive Admin Portal</span>
              </button>
            </li>
            <li><a href="#privacy" onClick={() => { setActiveView('storefront'); setStoreSection('contact'); }} className="hover:text-[#D4AF37] transition-colors">Privacy & Privilege Terms</a></li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-playfair font-semibold text-slate-100 text-sm uppercase tracking-wider mb-4 text-[#FFF1C5]">
            Privilege Newsletter
          </h3>
          <p className="text-xs text-slate-400 mb-3 leading-relaxed">
            Receive private invitations to seasonal trunk shows and new collection previews.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-lg py-2.5 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37] pr-10"
              />
              <button type="submit" className="absolute right-1.5 top-1.5 p-1 rounded bg-[#D4AF37] text-[#081B4B] hover:bg-[#FFF1C5] transition-colors">
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <span className="text-[10px] text-slate-500 block">We respect your privacy. Unsubscribe anytime.</span>
          </form>
        </div>
      </div>

      {/* Flagship Atelier Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex flex-wrap items-center gap-6">
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" />
            Flagship Atelier: Nungambakkam High Rd, Chennai, India
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
            +91 84893 32211
          </span>
          <span className="flex items-center gap-1.5 text-slate-300">
            <Mail className="w-3.5 h-3.5 text-[#D4AF37]" />
            concierge@askaragrand.com
          </span>
        </div>
        <div>
          <p className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} ASKARA GRAND Tailors & Clothiers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
