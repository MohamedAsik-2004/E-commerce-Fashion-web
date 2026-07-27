import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingBag, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  Bell, 
  Search, 
  ShieldCheck, 
  Crown,
  Plus,
  ArrowLeftRight
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { adminActiveTab, setAdminActiveTab, setActiveView, user, setUser, addToast } = useStore();

  const handleAdminSignOut = () => {
    setUser({
      name: 'Lord Sterling',
      email: 'sterling@askaragrand.com',
      role: 'customer'
    });
    setActiveView('admin-login');
    addToast('Logged Out', 'Admin session terminated securely.', 'info');
  };

  const navItems = [
    { id: 'dashboard', label: 'Overview', icon: LayoutDashboard },
    { id: 'products', label: 'Product Catalog', icon: ShoppingBag },
    { id: 'inventory', label: 'Inventory & Stock', icon: Package },
    { id: 'orders', label: 'Orders Pipeline', icon: BarChart3 },
    { id: 'customers', label: 'Patron Roster', icon: Users },
    { id: 'reports', label: 'Financial & GST', icon: BarChart3 },
    { id: 'settings', label: 'Store Settings', icon: Settings },
  ] as const;

  return (
    <div className="min-h-screen bg-[#020612] text-slate-100 flex font-poppins">
      
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#030A1C] border-r border-[#D4AF37]/30 flex flex-col justify-between hidden md:flex shrink-0">
        
        {/* Brand & Logo */}
        <div>
          <div 
            onClick={() => setActiveView('storefront')}
            className="p-6 border-b border-[#D4AF37]/20 flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#081B4B] p-0.5 shadow-lg">
              <div className="w-full h-full bg-[#030A1C] rounded-full flex items-center justify-center">
                <Crown className="w-5 h-5 text-[#D4AF37]" />
              </div>
            </div>
            <div>
              <h1 className="font-playfair font-bold text-lg text-slate-100 uppercase tracking-wider group-hover:text-[#D4AF37] transition-colors">
                ASKARA GRAND
              </h1>
              <p className="font-cormorant italic text-[11px] text-[#D4AF37]">
                Master Atelier Admin
              </p>
            </div>
          </div>

          {/* Nav Items */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = adminActiveTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setAdminActiveTab(item.id as any)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-montserrat font-semibold tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#081B4B] to-[#0B256B] border border-[#D4AF37] text-[#FFF1C5] shadow-lg'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-[#081B4B]/30'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-[#D4AF37]' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer Actions */}
        <div className="p-4 border-t border-[#D4AF37]/20 space-y-2">
          <button
            onClick={() => setActiveView('storefront')}
            className="w-full py-2.5 px-3 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center justify-center gap-2 hover:bg-[#FFF1C5] transition-colors cursor-pointer shadow-md"
          >
            <ArrowLeftRight className="w-4 h-4" />
            <span>Switch to Storefront</span>
          </button>

          <button
            onClick={handleAdminSignOut}
            className="w-full py-2 px-3 rounded-xl border border-rose-500/40 text-rose-300 hover:bg-rose-500/10 font-montserrat font-semibold text-xs uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Lock Admin Portal</span>
          </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
        
        {/* Admin Header Bar */}
        <header className="bg-[#030A1C]/90 backdrop-blur-md border-b border-[#D4AF37]/20 px-6 py-4 flex items-center justify-between gap-4 sticky top-0 z-30">
          
          <div className="flex items-center gap-4">
            <h2 className="font-playfair font-bold text-xl text-[#FFF1C5] uppercase tracking-wider">
              {adminActiveTab}
            </h2>
          </div>

          <div className="flex items-center gap-4">
            
            {/* Mobile Tab Select */}
            <div className="md:hidden">
              <select
                value={adminActiveTab}
                onChange={(e) => setAdminActiveTab(e.target.value as any)}
                className="bg-[#081B4B] border border-[#D4AF37]/30 text-xs text-[#D4AF37] rounded-lg p-2 font-montserrat"
              >
                {navItems.map((n) => (
                  <option key={n.id} value={n.id}>{n.label}</option>
                ))}
              </select>
            </div>

            {/* Notifications */}
            <button className="p-2 rounded-full border border-[#D4AF37]/30 text-slate-300 hover:text-[#D4AF37] relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400" />
            </button>

            {/* Admin User Badge */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-[#D4AF37] text-[#081B4B] flex items-center justify-center font-bold text-xs">
                {user?.name.charAt(0) || 'A'}
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-xs font-montserrat font-bold text-slate-100">{user?.name || 'Master Tailor'}</p>
                <p className="text-[10px] text-[#D4AF37]">Super Admin</p>
              </div>
            </div>

            <button
              onClick={handleAdminSignOut}
              className="p-2 text-rose-400 hover:text-rose-300 transition-colors"
              title="Lock Admin Portal"
            >
              <LogOut className="w-5 h-5" />
            </button>

            <button
              onClick={() => setActiveView('storefront')}
              className="md:hidden p-2 text-[#D4AF37]"
              title="Storefront"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>

          </div>

        </header>

        {/* Content Body */}
        <main className="p-6 sm:p-8 flex-1">
          {children}
        </main>

      </div>

    </div>
  );
};
