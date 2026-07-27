import React from 'react';
import { BarChart3, Download, TrendingUp, DollarSign, FileText, Printer, CheckCircle2 } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminReports: React.FC = () => {
  const { orders, products, addToast } = useStore();

  const totalSales = orders.reduce((sum, o) => sum + o.totalAmount, 0);
  const totalGST = orders.reduce((sum, o) => sum + o.gstAmount, 0);
  const totalDiscount = orders.reduce((sum, o) => sum + o.discountAmount, 0);

  const handleDownloadReport = (title: string) => {
    addToast('Report Downloaded', `${title} generated in PDF format.`, 'success');
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Financial & GST Tax Reports</h2>
          <p className="text-xs text-slate-400 font-poppins">Comprehensive revenue audits, GST tax statements, and sales performance logs.</p>
        </div>

        <button
          onClick={() => handleDownloadReport('FY2026 Comprehensive Audit')}
          className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center gap-2 shadow-xl hover:bg-[#FFF1C5]"
        >
          <Download className="w-4 h-4" />
          <span>Download FY2026 Audit</span>
        </button>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-2">
          <span className="text-xs font-montserrat text-slate-400 uppercase">Gross Sales Revenue</span>
          <p className="font-playfair font-bold text-3xl text-[#FFF1C5]">₹{totalSales.toLocaleString('en-IN')}</p>
          <p className="text-[11px] text-emerald-400 font-semibold">+22% YoY Growth</p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-2">
          <span className="text-xs font-montserrat text-slate-400 uppercase">GST 12% Liability Collected</span>
          <p className="font-playfair font-bold text-3xl text-slate-100">₹{totalGST.toLocaleString('en-IN')}</p>
          <p className="text-[11px] text-slate-400">Filing Deadline: 20th Monthly</p>
        </div>

        <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-2">
          <span className="text-xs font-montserrat text-slate-400 uppercase">Privilege Discounts Granted</span>
          <p className="font-playfair font-bold text-3xl text-red-400">₹{totalDiscount.toLocaleString('en-IN')}</p>
          <p className="text-[11px] text-slate-400">Coupon & Seasonal Promotions</p>
        </div>
      </div>

      {/* Available Downloadable Statement List */}
      <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
        <h3 className="font-playfair font-bold text-lg text-slate-100">Generate Statements & Tax Forms</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: 'GSTR-1 Sales Return Statement', period: 'July 2026', format: 'JSON / Excel' },
            { name: 'GSTR-3B Tax Summary Return', period: 'Q2 2026', format: 'PDF Document' },
            { name: 'Bespoke Inventory Valuation Report', period: 'Current Live', format: 'CSV Data' },
            { name: 'Profit & Loss Statement (Atelier)', period: 'H1 2026', format: 'PDF Document' },
          ].map((rep, i) => (
            <div key={i} className="p-4 rounded-xl bg-[#081B4B]/60 border border-[#D4AF37]/20 flex items-center justify-between">
              <div>
                <h4 className="font-playfair font-bold text-sm text-slate-100">{rep.name}</h4>
                <p className="text-[11px] text-slate-400">Period: {rep.period} • Format: {rep.format}</p>
              </div>
              <button
                onClick={() => handleDownloadReport(rep.name)}
                className="px-3 py-1.5 rounded-lg border border-[#D4AF37] text-[#D4AF37] text-xs font-montserrat font-bold hover:bg-[#D4AF37] hover:text-[#081B4B]"
              >
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
