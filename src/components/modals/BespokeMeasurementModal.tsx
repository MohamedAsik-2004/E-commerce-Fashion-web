import React, { useState } from 'react';
import { X, Scissors, Check, Sparkles } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { BespokeMeasurement } from '../../types';

export const BespokeMeasurementModal: React.FC = () => {
  const { isBespokeModalOpen, setIsBespokeModalOpen, saveBespokeMeasurements, bespokeData } = useStore();

  const [form, setForm] = useState<BespokeMeasurement>(bespokeData || {
    chest: 40,
    waist: 34,
    shoulder: 18,
    sleeve: 25,
    neck: 16,
    height: 178,
    fitPreference: 'Bespoke Modern',
    occasion: 'Wedding / Gala Evening'
  });

  if (!isBespokeModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveBespokeMeasurements(form);
    setIsBespokeModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-[#030A1C] border border-[#D4AF37]/50 text-slate-100 rounded-3xl shadow-2xl overflow-hidden my-8 relative">
        
        {/* Header */}
        <div className="p-6 bg-[#081B4B] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-playfair font-bold text-xl text-[#FFF1C5]">Master Tailor Fitting Profile</h3>
          </div>
          <button onClick={() => setIsBespokeModalOpen(false)} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
          <p className="text-xs text-slate-300 font-poppins font-light leading-relaxed">
            Input your exact body dimensions below. Our master tailors in Chennai will adjust pattern cuts and chest canvases for your online order.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Chest (inches)</label>
              <input
                type="number"
                value={form.chest}
                onChange={(e) => setForm({ ...form, chest: Number(e.target.value) })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Waist (inches)</label>
              <input
                type="number"
                value={form.waist}
                onChange={(e) => setForm({ ...form, waist: Number(e.target.value) })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Shoulder (inches)</label>
              <input
                type="number"
                value={form.shoulder}
                onChange={(e) => setForm({ ...form, shoulder: Number(e.target.value) })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Sleeve Length</label>
              <input
                type="number"
                value={form.sleeve}
                onChange={(e) => setForm({ ...form, sleeve: Number(e.target.value) })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Neck Collar</label>
              <input
                type="number"
                value={form.neck}
                onChange={(e) => setForm({ ...form, neck: Number(e.target.value) })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            <div>
              <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Height (cm)</label>
              <input
                type="number"
                value={form.height}
                onChange={(e) => setForm({ ...form, height: Number(e.target.value) })}
                className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 px-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-montserrat uppercase text-slate-300 mb-1">Fit Silhouette Preference</label>
            <select
              value={form.fitPreference}
              onChange={(e) => setForm({ ...form, fitPreference: e.target.value as any })}
              className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
            >
              <option value="Slim Fit">Slim Fit (Snug contouring)</option>
              <option value="Bespoke Modern">Bespoke Modern (Clean structured drape)</option>
              <option value="Classic Royal">Classic Royal (Generous heritage room)</option>
            </select>
          </div>

          <div className="pt-4 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setIsBespokeModalOpen(false)}
              className="px-4 py-2.5 rounded-xl border border-slate-700 text-slate-300 text-xs font-montserrat"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center gap-1.5"
            >
              <Check className="w-4 h-4" />
              <span>Save Fitting Profile</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
