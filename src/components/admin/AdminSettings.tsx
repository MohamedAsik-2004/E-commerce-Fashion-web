import React, { useState } from 'react';
import { Settings, Save, ShieldCheck, Crown, CreditCard, MapPin } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminSettings: React.FC = () => {
  const { addToast } = useStore();

  const [form, setForm] = useState({
    storeName: 'ASKARA GRAND',
    tagline: 'Luxury Men\'s & Boys Wear',
    phone: '+91 84893 32211',
    email: 'concierge@askaragrand.com',
    address: 'Nungambakkam High Road, Suite 101, Luxury District, Chennai, Tamil Nadu',
    gstin: '33AAAAA0000A1Z5',
    razorpayKey: 'rzp_live_askara_987654',
    upiId: 'askaragrand@okaxis',
    enableCOD: true,
    taxRate: 12
  });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    addToast('Store Settings Saved', 'All changes updated across Askara Grand server.', 'success');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Master Store Settings</h2>
          <p className="text-xs text-slate-400 font-poppins">Configure brand identity, store contact numbers, GST numbers, and payment keys.</p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center gap-1.5 shadow-xl hover:bg-[#FFF1C5]"
        >
          <Save className="w-4 h-4" />
          <span>Save Changes</span>
        </button>
      </div>

      <form onSubmit={handleSave} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Brand Information */}
        <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
          <div className="flex items-center gap-2 border-b pb-3 border-slate-800">
            <Crown className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-playfair font-bold text-lg text-slate-100">Brand & Atelier Profile</h3>
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">Store Name</label>
            <input
              type="text"
              value={form.storeName}
              onChange={(e) => setForm({ ...form, storeName: e.target.value })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">Brand Tagline</label>
            <input
              type="text"
              value={form.tagline}
              onChange={(e) => setForm({ ...form, tagline: e.target.value })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase text-slate-300 mb-1">Support Phone</label>
              <input
                type="text"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-slate-300 mb-1">Support Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">Atelier Address</label>
            <textarea
              rows={3}
              value={form.address}
              onChange={(e) => setForm({ ...form, address: e.target.value })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100"
            />
          </div>
        </div>

        {/* Tax & Payment Settings */}
        <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
          <div className="flex items-center gap-2 border-b pb-3 border-slate-800">
            <CreditCard className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-playfair font-bold text-lg text-slate-100">Tax & Payment Configuration</h3>
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">GSTIN Tax Registration Number</label>
            <input
              type="text"
              value={form.gstin}
              onChange={(e) => setForm({ ...form, gstin: e.target.value })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">Apparel GST Rate (%)</label>
            <input
              type="number"
              value={form.taxRate}
              onChange={(e) => setForm({ ...form, taxRate: Number(e.target.value) })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100"
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">Razorpay Live API Key ID</label>
            <input
              type="text"
              value={form.razorpayKey}
              onChange={(e) => setForm({ ...form, razorpayKey: e.target.value })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100 font-mono"
            />
          </div>

          <div>
            <label className="block text-xs uppercase text-slate-300 mb-1">Atelier VPA UPI Handle</label>
            <input
              type="text"
              value={form.upiId}
              onChange={(e) => setForm({ ...form, upiId: e.target.value })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs text-slate-100 font-mono"
            />
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-[#081B4B] border border-[#D4AF37]/20">
            <span className="text-xs font-montserrat text-slate-200">Enable Cash on Delivery (COD)</span>
            <input
              type="checkbox"
              checked={form.enableCOD}
              onChange={(e) => setForm({ ...form, enableCOD: e.target.checked })}
              className="w-4 h-4 accent-[#D4AF37]"
            />
          </div>
        </div>

      </form>

    </div>
  );
};
