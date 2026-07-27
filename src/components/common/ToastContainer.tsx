import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useStore();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-start justify-between p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all transform translate-y-0 animate-slide-up ${
            toast.type === 'success'
              ? 'bg-[#081B4B]/95 border-[#D4AF37] text-slate-100'
              : toast.type === 'error'
              ? 'bg-[#380808]/95 border-red-500 text-slate-100'
              : 'bg-[#030A1C]/95 border-[#D4AF37]/50 text-slate-100'
          }`}
        >
          <div className="flex items-start gap-3">
            {toast.type === 'success' && <CheckCircle2 className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />}
            {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />}
            {toast.type === 'info' && <Info className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />}
            <div>
              <h4 className="font-playfair font-bold text-sm text-[#FFF1C5]">{toast.title}</h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-snug">{toast.message}</p>
            </div>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
