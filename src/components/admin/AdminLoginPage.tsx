import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  Mail, 
  KeyRound, 
  Crown, 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Building2, 
  Server, 
  Clock, 
  Fingerprint,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminLoginPage: React.FC = () => {
  const { setUser, setActiveView, setAdminActiveTab, addToast } = useStore();

  const [selectedRole, setSelectedRole] = useState<'super_admin' | 'inventory_mgr' | 'concierge'>('super_admin');
  const [email, setEmail] = useState('admin@askaragrand.com');
  const [password, setPassword] = useState('admin123');
  const [securityPin, setSecurityPin] = useState('123456');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Role details mapping
  const rolePresets = {
    super_admin: {
      title: 'Master Atelier Admin',
      email: 'admin@askaragrand.com',
      pin: '123456',
      desc: 'Full access to financial analytics, catalog management, customer rosters & system settings.',
      badge: 'Level 5 Access'
    },
    inventory_mgr: {
      title: 'Head Inventory Curator',
      email: 'inventory@askaragrand.com',
      pin: '888999',
      desc: 'Access to product catalog, stock counts, fabric allocations, and supplier orders.',
      badge: 'Level 3 Access'
    },
    concierge: {
      title: 'Bespoke Order Concierge',
      email: 'concierge@askaragrand.com',
      pin: '555777',
      desc: 'Manage customer orders, bespoke measurements, delivery tracking, and VIP inquiries.',
      badge: 'Level 2 Access'
    }
  };

  const handleRoleSelect = (roleKey: 'super_admin' | 'inventory_mgr' | 'concierge') => {
    setSelectedRole(roleKey);
    const preset = rolePresets[roleKey];
    setEmail(preset.email);
    setPassword('admin123');
    setSecurityPin(preset.pin);
    setErrorMsg('');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      // Basic validation check
      if (!email || !password) {
        setErrorMsg('Please enter both your email address and passcode.');
        setIsLoading(false);
        return;
      }

      if (securityPin.length < 4) {
        setErrorMsg('Security PIN must be at least 4 to 6 digits.');
        setIsLoading(false);
        return;
      }

      // Successful Authentication
      const preset = rolePresets[selectedRole];
      setUser({
        name: preset.title,
        email: email,
        role: 'admin'
      });

      setActiveView('admin');
      setAdminActiveTab('dashboard');
      addToast('Authentication Granted', `Welcome back, ${preset.title}. Security level verified.`, 'success');
      setIsLoading(false);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#020612] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(8,27,75,0.6),rgba(2,6,18,1))] text-slate-100 flex flex-col justify-between p-4 sm:p-6 lg:p-8 font-poppins relative overflow-hidden">
      
      {/* Background Decorative Crests */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-[#081B4B]/30 rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Navigation Bar */}
      <header className="max-w-7xl mx-auto w-full flex items-center justify-between pb-6 border-b border-[#D4AF37]/20 relative z-10">
        <button
          onClick={() => setActiveView('storefront')}
          className="flex items-center gap-2 text-xs font-montserrat font-semibold text-slate-300 hover:text-[#D4AF37] transition-colors bg-[#081B4B]/40 px-4 py-2 rounded-full border border-[#D4AF37]/30 hover:border-[#D4AF37]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Storefront</span>
        </button>

        <div className="flex items-center gap-2 text-[#FFF1C5]">
          <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
          <span className="font-montserrat font-bold text-xs uppercase tracking-widest hidden sm:inline">
            256-bit Encrypted Vault Portal
          </span>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto w-full my-auto py-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Left Column: Atelier Security Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/40 text-[#D4AF37] text-[11px] font-montserrat font-bold uppercase tracking-widest">
              <Crown className="w-3.5 h-3.5" />
              <span>Master Tailor Portal</span>
            </div>
            
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl text-[#FFF1C5] tracking-wide leading-tight">
              ASKARA GRAND EXECUTIVE ATELIER
            </h1>

            <p className="text-xs text-slate-300 leading-relaxed">
              Restricted management portal for inventory curation, bespoke order tracking, financial reporting, and patron relations.
            </p>
          </div>

          {/* Quick Preset Credentials Picker */}
          <div className="space-y-3 bg-[#030A1C] border border-[#D4AF37]/30 p-4 sm:p-5 rounded-2xl shadow-xl">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-montserrat font-bold uppercase text-[#FFF1C5] tracking-wider flex items-center gap-2">
                <Fingerprint className="w-4 h-4 text-[#D4AF37]" />
                <span>Select Admin Role Preset</span>
              </h3>
              <span className="text-[10px] text-slate-400">Click to fill</span>
            </div>

            <div className="space-y-2">
              {(['super_admin', 'inventory_mgr', 'concierge'] as const).map((rKey) => {
                const info = rolePresets[rKey];
                const isSelected = selectedRole === rKey;
                return (
                  <button
                    key={rKey}
                    type="button"
                    onClick={() => handleRoleSelect(rKey)}
                    className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-[#081B4B] border-[#D4AF37] text-white shadow-md'
                        : 'bg-[#020612]/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                    }`}
                  >
                    <div>
                      <div className="font-montserrat font-bold text-[#FFF1C5]">{info.title}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">{info.email}</div>
                    </div>
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                      isSelected ? 'bg-[#D4AF37] text-[#081B4B]' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {info.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* System Security Badges */}
          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
            <div className="p-3 bg-[#030A1C]/60 border border-slate-800 rounded-xl flex items-center gap-2.5">
              <Server className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <p className="text-[10px] text-slate-400 font-montserrat uppercase">Server Status</p>
                <p className="font-bold text-emerald-400 text-xs flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Operational
                </p>
              </div>
            </div>

            <div className="p-3 bg-[#030A1C]/60 border border-slate-800 rounded-xl flex items-center gap-2.5">
              <Building2 className="w-4 h-4 text-[#D4AF37]" />
              <div>
                <p className="text-[10px] text-slate-400 font-montserrat uppercase">Primary Hub</p>
                <p className="font-bold text-slate-200 text-xs">Chennai Flagship</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Login Form */}
        <div className="lg:col-span-7">
          <div className="bg-[#030A1C] border border-[#D4AF37]/50 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#D4AF37]/20 to-transparent rounded-bl-full pointer-events-none" />

            <div className="mb-6 pb-4 border-b border-[#D4AF37]/20 flex items-center justify-between">
              <div>
                <h2 className="font-playfair font-bold text-2xl text-slate-100">Sign In to Admin Portal</h2>
                <p className="text-xs text-slate-400 font-poppins mt-1">
                  Authenticate credentials for <span className="text-[#D4AF37] font-semibold">{rolePresets[selectedRole].title}</span>
                </p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[#081B4B] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
                <Lock className="w-6 h-6" />
              </div>
            </div>

            {/* Error Message Box */}
            {errorMsg && (
              <div className="mb-6 p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Login Form */}
            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* Email Address */}
              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                  Admin Email Address
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@askaragrand.com"
                    className="w-full bg-[#081B4B]/80 border border-[#D4AF37]/30 rounded-xl py-3 pl-10 pr-4 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                  Atelier Security Passcode
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3.5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#081B4B]/80 border border-[#D4AF37]/30 rounded-xl py-3 pl-10 pr-10 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-slate-400 hover:text-[#D4AF37]"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Security PIN */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 font-semibold">
                    6-Digit Verification PIN
                  </label>
                  <span className="text-[10px] text-[#D4AF37] font-mono">Demo PIN: {rolePresets[selectedRole].pin}</span>
                </div>
                <div className="relative">
                  <ShieldAlert className="w-4 h-4 text-[#D4AF37] absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    maxLength={6}
                    value={securityPin}
                    onChange={(e) => setSecurityPin(e.target.value.replace(/\D/g, ''))}
                    placeholder="123456"
                    className="w-full bg-[#081B4B]/80 border border-[#D4AF37]/30 rounded-xl py-3 pl-10 pr-4 text-xs font-mono tracking-widest text-[#FFF1C5] focus:outline-none focus:border-[#D4AF37] focus:ring-1 focus:ring-[#D4AF37]"
                  />
                </div>
              </div>

              {/* Remember Session & Forgot PIN */}
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="rounded border-slate-700 text-[#D4AF37] focus:ring-0 bg-[#081B4B]"
                  />
                  <span>Keep session authenticated (8 hrs)</span>
                </label>

                <button
                  type="button"
                  onClick={() => addToast('Security Reset', 'Passcode reset link dispatched to master email.', 'info')}
                  className="text-[#D4AF37] hover:underline"
                >
                  Reset Passcode?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#AA7C11] text-[#081B4B] font-montserrat font-black text-xs uppercase tracking-widest shadow-xl hover:shadow-[#D4AF37]/20 hover:scale-[1.01] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#FFF1C5]/50 disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#081B4B] border-t-transparent rounded-full animate-spin" />
                    <span>Verifying Credentials...</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authenticate & Enter Atelier</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>

            </form>

            {/* Quick Demo Credentials Info Note */}
            <div className="mt-6 pt-4 border-t border-slate-800/80 bg-[#081B4B]/30 p-3.5 rounded-xl border border-[#D4AF37]/20 flex items-center justify-between text-[11px] text-slate-300">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0 animate-pulse" />
                <span>
                  <strong>Demo Mode:</strong> Click any role preset on the left or press <strong>Authenticate</strong> directly.
                </span>
              </div>
              <button
                type="button"
                onClick={() => {
                  handleRoleSelect('super_admin');
                  addToast('Demo Fill', 'Super Admin credentials populated.', 'info');
                }}
                className="px-2.5 py-1 rounded bg-[#D4AF37]/20 text-[#D4AF37] font-bold uppercase text-[10px] hover:bg-[#D4AF37] hover:text-[#081B4B] transition-colors shrink-0"
              >
                Auto Fill
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto w-full text-center text-[11px] text-slate-500 pt-6 border-t border-slate-800/80 relative z-10">
        <p>© {new Date().getFullYear()} Askara Grand Atelier Security Protocol. Unauthorized access attempts are monitored and logged.</p>
      </footer>

    </div>
  );
};
