import React from 'react';
import { 
  TrendingUp, 
  ShoppingBag, 
  DollarSign, 
  Users, 
  Package, 
  AlertTriangle, 
  ArrowUpRight, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Printer,
  Sparkles
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminDashboard: React.FC = () => {
  const { products, orders, customers, setAdminActiveTab } = useStore();

  const totalRevenue = orders.reduce((acc, ord) => acc + ord.totalAmount, 0);
  const totalProfit = Number((totalRevenue * 0.42).toFixed(2)); // estimated 42% net profit
  const lowStockProducts = products.filter((p) => p.stock < 12);

  const recentOrders = orders.slice(0, 5);

  return (
    <div className="space-y-8">
      
      {/* Top Banner Quick Actions */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-[#081B4B] via-[#0E2A73] to-[#030A1C] border border-[#D4AF37]/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
        <div>
          <span className="text-xs font-montserrat uppercase tracking-widest text-[#D4AF37]">Executive Atelier Portal</span>
          <h2 className="font-playfair font-bold text-2xl text-slate-100 mt-0.5">Welcome back, Master Tailor</h2>
          <p className="text-xs text-slate-300 font-poppins">Here is your live financial performance and inventory health overview.</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setAdminActiveTab('products')}
            className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center gap-1.5 shadow-lg hover:bg-[#FFF1C5]"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
          <button
            onClick={() => setAdminActiveTab('orders')}
            className="px-4 py-2.5 rounded-xl border border-[#D4AF37]/50 text-[#D4AF37] font-montserrat font-bold text-xs uppercase hover:bg-[#D4AF37] hover:text-[#081B4B]"
          >
            <span>Manage Orders</span>
          </button>
        </div>
      </div>

      {/* 5 Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        
        <div className="p-5 rounded-2xl glass-card space-y-2 border border-[#D4AF37]/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-montserrat">
            <span>Total Revenue</span>
            <DollarSign className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-playfair font-bold text-2xl text-[#FFF1C5]">
            ₹{totalRevenue.toLocaleString('en-IN')}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+18.4% this month</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-2 border border-[#D4AF37]/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-montserrat">
            <span>Total Orders</span>
            <ShoppingBag className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-playfair font-bold text-2xl text-slate-100">
            {orders.length}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+12.1% growth</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-2 border border-[#D4AF37]/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-montserrat">
            <span>Active Patrons</span>
            <Users className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-playfair font-bold text-2xl text-slate-100">
            {customers.length + 120}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>+8 new VIPs</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-2 border border-[#D4AF37]/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-montserrat">
            <span>Catalog Items</span>
            <Package className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-playfair font-bold text-2xl text-slate-100">
            {products.length}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-[#D4AF37]">
            <span>10 Active Categories</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-card space-y-2 border border-[#D4AF37]/30">
          <div className="flex items-center justify-between text-slate-400 text-xs font-montserrat">
            <span>Est. Net Profit</span>
            <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          </div>
          <p className="font-playfair font-bold text-2xl text-emerald-400">
            ₹{totalProfit.toLocaleString('en-IN')}
          </p>
          <div className="flex items-center gap-1 text-[11px] text-slate-400">
            <span>42% Margin Rate</span>
          </div>
        </div>

      </div>

      {/* Analytics Visual Section & Low Stock Warning */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Revenue Performance Chart Bar Representation */}
        <div className="lg:col-span-8 p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-playfair font-bold text-lg text-slate-100">Revenue Analytics</h3>
              <p className="text-xs text-slate-400">Monthly breakdown for fiscal year 2026</p>
            </div>
            <span className="text-xs font-montserrat text-[#D4AF37] font-semibold">Target: ₹5,00,000</span>
          </div>

          {/* Bar Chart Representation */}
          <div className="h-48 flex items-end justify-between gap-2 pt-8 border-b border-slate-800">
            {[
              { month: 'Jan', value: 45 },
              { month: 'Feb', value: 58 },
              { month: 'Mar', value: 72 },
              { month: 'Apr', value: 65 },
              { month: 'May', value: 88 },
              { month: 'Jun', value: 94 },
              { month: 'Jul', value: 110 }
            ].map((bar) => (
              <div key={bar.month} className="flex-1 flex flex-col items-center gap-2 group">
                <span className="text-[10px] font-montserrat text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.value}k
                </span>
                <div
                  className="w-full bg-gradient-to-t from-[#081B4B] via-[#D4AF37] to-[#FFF1C5] rounded-t-lg transition-all group-hover:brightness-125"
                  style={{ height: `${bar.value}%` }}
                />
                <span className="text-[10px] text-slate-400 font-montserrat">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Low Stock Alerts */}
        <div className="lg:col-span-4 p-6 rounded-2xl glass-card border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-2 text-amber-400">
            <AlertTriangle className="w-5 h-5" />
            <h3 className="font-playfair font-bold text-base text-slate-100">Low Stock Inventory ({lowStockProducts.length})</h3>
          </div>

          <div className="space-y-3">
            {lowStockProducts.slice(0, 4).map((item) => (
              <div key={item.id} className="p-3 rounded-xl bg-[#081B4B]/50 border border-amber-500/20 flex items-center justify-between">
                <div>
                  <h4 className="font-playfair font-bold text-xs text-slate-200 line-clamp-1">{item.name}</h4>
                  <p className="text-[10px] text-slate-400">SKU: {item.sku}</p>
                </div>
                <span className="px-2 py-1 rounded bg-amber-500/20 text-amber-400 font-bold text-xs">
                  {item.stock} left
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setAdminActiveTab('inventory')}
            className="w-full py-2 rounded-xl border border-amber-500/40 text-amber-400 font-montserrat text-xs uppercase font-bold hover:bg-amber-500 hover:text-black transition-colors"
          >
            Manage Inventory Stock
          </button>
        </div>

      </div>

      {/* Recent Orders Table */}
      <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-playfair font-bold text-lg text-slate-100">Recent Patron Orders</h3>
          <button
            onClick={() => setAdminActiveTab('orders')}
            className="text-xs font-montserrat font-bold text-[#D4AF37] hover:underline"
          >
            View All Pipeline
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-montserrat text-[10px]">
                <th className="py-3 px-4">Order #</th>
                <th className="py-3 px-4">Patron Name</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Total Amount</th>
                <th className="py-3 px-4">Payment</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((ord) => (
                <tr key={ord.id} className="border-b border-slate-800/60 hover:bg-[#081B4B]/40">
                  <td className="py-3 px-4 font-bold text-[#D4AF37]">{ord.orderNumber}</td>
                  <td className="py-3 px-4 text-slate-200">{ord.customerName}</td>
                  <td className="py-3 px-4 text-slate-400">{new Date(ord.createdAt).toLocaleDateString()}</td>
                  <td className="py-3 px-4 font-bold text-slate-100">₹{ord.totalAmount.toLocaleString('en-IN')}</td>
                  <td className="py-3 px-4 text-emerald-400 font-semibold">{ord.paymentMethod}</td>
                  <td className="py-3 px-4">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/40">
                      {ord.orderStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};
