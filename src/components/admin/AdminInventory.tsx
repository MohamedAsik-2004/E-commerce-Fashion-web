import React, { useState } from 'react';
import { Package, AlertTriangle, Barcode, RefreshCw, Plus, Minus, Search, Check } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const AdminInventory: React.FC = () => {
  const { products, updateProduct, addToast } = useStore();

  const [scannedBarcode, setScannedBarcode] = useState('');
  const [stockDelta, setStockDelta] = useState(1);

  const handleSimulateScan = () => {
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    if (randomProduct) {
      setScannedBarcode(randomProduct.barcode);
      addToast('Barcode Scanned', `Found SKU: ${randomProduct.sku} (${randomProduct.name})`, 'info');
    }
  };

  const scannedItem = products.find((p) => p.barcode === scannedBarcode || p.sku === scannedBarcode);

  const handleStockAdjust = (productId: string, delta: number) => {
    const item = products.find((p) => p.id === productId);
    if (!item) return;
    const newStock = Math.max(0, item.stock + delta);
    updateProduct(productId, { stock: newStock });
  };

  return (
    <div className="space-y-6">
      
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Warehouse & Inventory Control</h2>
          <p className="text-xs text-slate-400 font-poppins">Live barcode scanning, stock level adjustments, and low-inventory restock alerts.</p>
        </div>

        <button
          onClick={handleSimulateScan}
          className="px-4 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center gap-2 shadow-xl hover:bg-[#FFF1C5]"
        >
          <Barcode className="w-4 h-4" />
          <span>Simulate Barcode Scan</span>
        </button>
      </div>

      {/* Barcode Scanner Result Widget */}
      {scannedItem && (
        <div className="p-6 rounded-2xl bg-[#081B4B] border-2 border-[#D4AF37] shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img
              src={scannedItem.images[0]}
              alt={scannedItem.name}
              referrerPolicy="no-referrer"
              className="w-14 h-16 object-cover rounded-xl border border-[#D4AF37]"
            />
            <div>
              <span className="text-[10px] text-[#D4AF37] uppercase font-montserrat font-semibold">Scanned Item</span>
              <h3 className="font-playfair font-bold text-base text-slate-100">{scannedItem.name}</h3>
              <p className="text-xs text-slate-400 font-mono">Barcode: {scannedItem.barcode} • Current Stock: {scannedItem.stock}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => handleStockAdjust(scannedItem.id, -1)}
              className="p-2 rounded-lg bg-[#030A1C] border border-[#D4AF37]/30 text-slate-300 hover:text-white"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="font-bold text-lg text-[#FFF1C5]">{scannedItem.stock}</span>
            <button
              onClick={() => handleStockAdjust(scannedItem.id, 1)}
              className="p-2 rounded-lg bg-[#030A1C] border border-[#D4AF37]/30 text-slate-300 hover:text-white"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Inventory List */}
      <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 space-y-4">
        <h3 className="font-playfair font-bold text-lg text-slate-100">Warehouse Stock Matrix</h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 uppercase font-montserrat text-[10px]">
                <th className="py-3 px-3">Product Name</th>
                <th className="py-3 px-3">SKU</th>
                <th className="py-3 px-3">Barcode</th>
                <th className="py-3 px-3">Category</th>
                <th className="py-3 px-3">Current Stock</th>
                <th className="py-3 px-3">Stock Status</th>
                <th className="py-3 px-3 text-right">Quick Adjust</th>
              </tr>
            </thead>
            <tbody>
              {products.map((prod) => (
                <tr key={prod.id} className="border-b border-slate-800/60 hover:bg-[#081B4B]/40">
                  <td className="py-3 px-3 font-bold text-slate-100">{prod.name}</td>
                  <td className="py-3 px-3 text-[#D4AF37] font-mono">{prod.sku}</td>
                  <td className="py-3 px-3 text-slate-400 font-mono">{prod.barcode}</td>
                  <td className="py-3 px-3 text-slate-300">{prod.category}</td>
                  <td className="py-3 px-3 font-bold text-slate-100">{prod.stock} units</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      prod.stock < 10 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'
                    }`}>
                      {prod.stock < 10 ? 'Low Stock Warning' : 'Optimal'}
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    <div className="inline-flex items-center gap-1.5">
                      <button
                        onClick={() => handleStockAdjust(prod.id, -5)}
                        className="px-2 py-1 rounded bg-[#081B4B] border border-[#D4AF37]/30 text-xs text-slate-300 hover:text-white"
                      >
                        -5
                      </button>
                      <button
                        onClick={() => handleStockAdjust(prod.id, 5)}
                        className="px-2 py-1 rounded bg-[#081B4B] border border-[#D4AF37]/30 text-xs text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B]"
                      >
                        +5
                      </button>
                    </div>
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
