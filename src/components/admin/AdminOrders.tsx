import React, { useState } from 'react';
import { ShoppingBag, Eye, Printer, CheckCircle2, Truck, Clock, XCircle } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Order } from '../../types';

export const AdminOrders: React.FC = () => {
  const { orders, updateOrderStatus, addToast } = useStore();

  const [filterStatus, setFilterStatus] = useState<string>('ALL');
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const filteredOrders = orders.filter((o) => {
    if (filterStatus === 'ALL') return true;
    return o.orderStatus === filterStatus;
  });

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Orders Pipeline & Dispatch</h2>
          <p className="text-xs text-slate-400 font-poppins font-light">Monitor patron orders, update processing stages, and issue tax invoices.</p>
        </div>

        {/* Status Filters */}
        <div className="flex items-center gap-2 overflow-x-auto">
          {['ALL', 'Pending', 'Confirmed', 'Processing', 'Shipped', 'Delivered', 'Cancelled'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-montserrat cursor-pointer whitespace-nowrap ${
                filterStatus === st ? 'bg-[#D4AF37] text-[#081B4B] font-bold' : 'bg-[#081B4B] text-slate-300 hover:text-white'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase font-montserrat text-[10px]">
              <th className="py-3 px-3">Order Number</th>
              <th className="py-3 px-3">Patron Name</th>
              <th className="py-3 px-3">Date</th>
              <th className="py-3 px-3">Items</th>
              <th className="py-3 px-3">Total Amount</th>
              <th className="py-3 px-3">Payment Method</th>
              <th className="py-3 px-3">Status</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.map((ord) => (
              <tr key={ord.id} className="border-b border-slate-800/60 hover:bg-[#081B4B]/40">
                <td className="py-3 px-3 font-bold text-[#D4AF37]">{ord.orderNumber}</td>
                <td className="py-3 px-3 text-slate-200">
                  <div>
                    <span className="font-semibold block">{ord.customerName}</span>
                    <span className="text-[10px] text-slate-400">{ord.phone}</span>
                  </div>
                </td>
                <td className="py-3 px-3 text-slate-400">{new Date(ord.createdAt).toLocaleDateString()}</td>
                <td className="py-3 px-3 text-slate-300">{ord.items.length} garments</td>
                <td className="py-3 px-3 font-bold text-[#FFF1C5]">₹{ord.totalAmount.toLocaleString('en-IN')}</td>
                <td className="py-3 px-3 text-emerald-400">{ord.paymentMethod}</td>
                <td className="py-3 px-3">
                  <select
                    value={ord.orderStatus}
                    onChange={(e) => updateOrderStatus(ord.id, e.target.value as any)}
                    className="bg-[#030A1C] border border-[#D4AF37]/30 text-[#D4AF37] font-bold text-[11px] rounded-lg p-1.5 focus:outline-none"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="py-3 px-3 text-right">
                  <button
                    onClick={() => setSelectedOrder(ord)}
                    className="p-1.5 rounded bg-[#081B4B] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B]"
                    title="View Invoice"
                  >
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Invoice Viewer Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-[#030A1C] border border-[#D4AF37]/50 text-slate-100 rounded-3xl shadow-2xl p-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3 border-slate-800">
              <h3 className="font-playfair font-bold text-lg text-[#FFF1C5]">Invoice #{selectedOrder.orderNumber}</h3>
              <button onClick={() => setSelectedOrder(null)} className="text-slate-400 hover:text-white">Close</button>
            </div>

            <div className="p-4 bg-white text-slate-900 rounded-2xl text-xs space-y-3 font-poppins">
              <div className="flex justify-between border-b pb-2">
                <span className="font-bold text-sm text-[#081B4B]">ASKARA GRAND ATELIER</span>
                <span>Date: {new Date(selectedOrder.createdAt).toLocaleDateString()}</span>
              </div>
              <div>
                <p><strong>Customer:</strong> {selectedOrder.customerName} ({selectedOrder.phone})</p>
                <p><strong>Shipping:</strong> {selectedOrder.address.street}, {selectedOrder.address.city}, {selectedOrder.address.pincode}</p>
              </div>
              <table className="w-full text-left border-collapse border-t border-slate-200 pt-2">
                <thead>
                  <tr className="border-b text-[10px] uppercase font-bold text-slate-600">
                    <th className="py-1">Garment</th>
                    <th className="py-1">Size</th>
                    <th className="py-1 text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedOrder.items.map((it, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-1 font-semibold">{it.product.name}</td>
                      <td className="py-1">{it.selectedSize}</td>
                      <td className="py-1 text-right">₹{it.product.offerPrice.toLocaleString('en-IN')}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="text-right pt-2 font-bold text-sm text-[#081B4B]">
                Total Paid: ₹{selectedOrder.totalAmount.toLocaleString('en-IN')}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button onClick={handlePrint} className="px-4 py-2 bg-[#D4AF37] text-[#081B4B] font-bold text-xs rounded-xl flex items-center gap-1.5">
                <Printer className="w-4 h-4" />
                <span>Print Invoice</span>
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
