import React, { useState } from 'react';
import { X, User, Lock, Mail, ShieldCheck, Crown } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AuthModal: React.FC = () => {
  const { isAuthModalOpen, setIsAuthModalOpen, user, setUser, addToast, setActiveView, setAdminActiveTab } = useStore();

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  if (!isAuthModalOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setUser({
      name: name || 'Lord Sterling',
      email: email || 'sterling@askaragrand.com',
      role: email.includes('admin') ? 'admin' : 'customer'
    });
    addToast('Welcome Back', 'Signed into Askara Grand Privilege Account.', 'success');
    setIsAuthModalOpen(false);
  };

  const handleQuickAdminLogin = () => {
    setActiveView('admin-login');
    setIsAuthModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-[#030A1C] border border-[#D4AF37]/50 text-slate-100 rounded-3xl shadow-2xl overflow-hidden relative">
        
        {/* Header */}
        <div className="p-6 bg-[#081B4B] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-playfair font-bold text-xl text-[#FFF1C5]">Privilege Account</h3>
          </div>
          <button onClick={() => setIsAuthModalOpen(false)} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          {user ? (
            <div className="text-center space-y-4">
              <div className="w-20 h-20 rounded-full bg-[#D4AF37] text-[#081B4B] flex items-center justify-center font-playfair font-bold text-2xl mx-auto border-2 border-[#FFF1C5]">
                {user.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-playfair font-bold text-xl text-slate-100">{user.name}</h4>
                <p className="text-xs text-slate-400 font-poppins">{user.email}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] font-montserrat font-bold text-[10px] uppercase">
                  Privilege Patron ({user.role})
                </span>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-2">
                <button
                  onClick={handleQuickAdminLogin}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Enter Admin Dashboard</span>
                </button>

                <button
                  onClick={() => {
                    setUser(null);
                    addToast('Signed Out', 'You have been signed out.', 'info');
                  }}
                  className="w-full py-2 rounded-xl border border-slate-700 text-slate-400 text-xs font-montserrat"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              {mode === 'register' && (
                <div>
                  <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Lord Sterling"
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sterling@askaragrand.com"
                  className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Passcode</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-wider"
              >
                {mode === 'login' ? 'Sign In to Patron Club' : 'Create Privilege Account'}
              </button>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <button
                  type="button"
                  onClick={() => setMode(mode === 'login' ? 'register' : 'login')}
                  className="hover:text-[#D4AF37] underline"
                >
                  {mode === 'login' ? 'New Patron? Register' : 'Already registered? Sign In'}
                </button>

                <button
                  type="button"
                  onClick={handleQuickAdminLogin}
                  className="text-[#D4AF37] font-semibold hover:underline flex items-center gap-1"
                >
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Admin Login Page</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
