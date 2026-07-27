import React, { useState } from 'react';
import { 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Eye, 
  Download, 
  Upload, 
  Filter, 
  X, 
  Check, 
  Sparkles,
  Barcode
} from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Product, CategoryType } from '../../types';

export const AdminProducts: React.FC = () => {
  const { products, addProduct, updateProduct, deleteProduct, addToast } = useStore();

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Form State
  const [form, setForm] = useState<Partial<Product>>({
    name: '',
    brand: 'ASKARA GRAND Atelier',
    category: 'Formal Wear',
    gender: 'Men',
    price: 15999,
    offerPrice: 12999,
    discountBadge: '20% OFF',
    rating: 4.8,
    reviewCount: 45,
    stock: 20,
    sku: 'AG-NEW-001',
    barcode: '890123456799',
    sizes: ['38', '40', '42', '44'],
    colors: [{ name: 'Royal Navy', hex: '#081B4B' }],
    images: ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800'],
    featured: true,
    isNewArrival: true,
    description: 'Masterfully tailored from luxury wool-silk blend.',
    fabric: 'Super 150s Merino Wool'
  });

  const filteredProducts = products.filter((p) => {
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.sku.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory === 'ALL' || p.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  const handleOpenAdd = () => {
    setEditingProduct(null);
    setForm({
      name: '',
      brand: 'ASKARA GRAND Atelier',
      category: 'Formal Wear',
      gender: 'Men',
      price: 15999,
      offerPrice: 12999,
      discountBadge: '20% OFF',
      rating: 4.8,
      reviewCount: 12,
      stock: 25,
      sku: `AG-PROD-${Math.floor(100 + Math.random() * 900)}`,
      barcode: `89012345${Math.floor(10000 + Math.random() * 90000)}`,
      sizes: ['38', '40', '42', '44'],
      colors: [{ name: 'Royal Navy', hex: '#081B4B' }],
      images: ['https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800'],
      featured: true,
      isNewArrival: true,
      description: 'Crafted with bespoke canvas lining and horn buttons.',
      fabric: 'Super 150s Italian Silk Wool'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (prod: Product) => {
    setEditingProduct(prod);
    setForm(prod);
    setIsModalOpen(true);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.offerPrice) return;

    if (editingProduct) {
      updateProduct(editingProduct.id, form);
    } else {
      addProduct(form as Omit<Product, 'id'>);
    }
    setIsModalOpen(false);
  };

  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + ["SKU,Name,Category,Gender,Price,OfferPrice,Stock"].join(",") + "\n"
      + products.map(e => `${e.sku},"${e.name}",${e.category},${e.gender},${e.price},${e.offerPrice},${e.stock}`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "askara_grand_inventory.csv");
    document.body.appendChild(link);
    link.click();
    addToast('CSV Exported', 'Catalog data downloaded successfully.', 'success');
  };

  return (
    <div className="space-y-6">
      
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Product Catalog & Management</h2>
          <p className="text-xs text-slate-400 font-poppins">Manage tuxedos, sherwanis, shirts, and kids' heritage collections.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 rounded-xl border border-[#D4AF37]/50 text-[#D4AF37] font-montserrat font-bold text-xs uppercase flex items-center gap-1.5 hover:bg-[#D4AF37] hover:text-[#081B4B]"
          >
            <Download className="w-4 h-4" />
            <span>Export Excel/CSV</span>
          </button>

          <button
            onClick={handleOpenAdd}
            className="px-5 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase flex items-center gap-1.5 shadow-xl hover:bg-[#FFF1C5]"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Product</span>
          </button>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 rounded-2xl glass-card border border-[#D4AF37]/20 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#D4AF37] absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search product name or SKU..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2 pl-9 pr-3 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto">
          {['ALL', 'Formal Wear', 'Ethnic Wear', 'Shirts', 'Blazers', 'Kids Collection', 'Accessories', 'Casual Wear'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-montserrat whitespace-nowrap cursor-pointer ${
                selectedCategory === cat ? 'bg-[#D4AF37] text-[#081B4B] font-bold' : 'bg-[#081B4B] text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </div>

      {/* Table */}
      <div className="p-6 rounded-2xl glass-card border border-[#D4AF37]/30 overflow-x-auto">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-slate-800 text-slate-400 uppercase font-montserrat text-[10px]">
              <th className="py-3 px-3">Item Image</th>
              <th className="py-3 px-3">Product Name & SKU</th>
              <th className="py-3 px-3">Category</th>
              <th className="py-3 px-3">Gender</th>
              <th className="py-3 px-3">Price</th>
              <th className="py-3 px-3">Offer Price</th>
              <th className="py-3 px-3">Stock Level</th>
              <th className="py-3 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((prod) => (
              <tr key={prod.id} className="border-b border-slate-800/60 hover:bg-[#081B4B]/40">
                <td className="py-3 px-3">
                  <img
                    src={prod.images[0]}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-12 object-cover rounded-lg border border-[#D4AF37]/30"
                  />
                </td>
                <td className="py-3 px-3">
                  <span className="font-bold text-slate-100 block">{prod.name}</span>
                  <span className="text-[10px] text-[#D4AF37] font-mono">SKU: {prod.sku} • Barcode: {prod.barcode}</span>
                </td>
                <td className="py-3 px-3 text-slate-300">{prod.category}</td>
                <td className="py-3 px-3 text-slate-400">{prod.gender}</td>
                <td className="py-3 px-3 text-slate-400 line-through">₹{prod.price.toLocaleString('en-IN')}</td>
                <td className="py-3 px-3 font-bold text-[#FFF1C5]">₹{prod.offerPrice.toLocaleString('en-IN')}</td>
                <td className="py-3 px-3">
                  <span className={`px-2 py-0.5 rounded font-bold ${prod.stock < 10 ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                    {prod.stock} left
                  </span>
                </td>
                <td className="py-3 px-3 text-right space-x-2">
                  <button
                    onClick={() => handleOpenEdit(prod)}
                    className="p-1.5 rounded bg-[#081B4B] border border-[#D4AF37]/30 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#081B4B]"
                    title="Edit Item"
                  >
                    <Edit className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => deleteProduct(prod.id)}
                    className="p-1.5 rounded bg-red-500/20 border border-red-500/40 text-red-400 hover:bg-red-500 hover:text-white"
                    title="Delete Item"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#030A1C] border border-[#D4AF37]/50 text-slate-100 rounded-3xl shadow-2xl overflow-hidden my-8 relative">
            <div className="p-6 bg-[#081B4B] border-b border-[#D4AF37]/30 flex items-center justify-between">
              <h3 className="font-playfair font-bold text-xl text-[#FFF1C5]">
                {editingProduct ? 'Edit Catalog Product' : 'Add New Royal Product'}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4 max-h-[80vh] overflow-y-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Product Title *</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Brand Name</label>
                  <input
                    type="text"
                    value={form.brand}
                    onChange={(e) => setForm({ ...form, brand: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Category</label>
                  <select
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value as CategoryType })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  >
                    <option value="Formal Wear">Formal Wear</option>
                    <option value="Ethnic Wear">Ethnic Wear</option>
                    <option value="Blazers">Blazers</option>
                    <option value="Shirts">Shirts</option>
                    <option value="T-Shirts">T-Shirts</option>
                    <option value="Trousers">Trousers</option>
                    <option value="Jeans">Jeans</option>
                    <option value="Accessories">Accessories</option>
                    <option value="Kids Collection">Kids Collection</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Target Gender</label>
                  <select
                    value={form.gender}
                    onChange={(e) => setForm({ ...form, gender: e.target.value as any })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  >
                    <option value="Men">Men</option>
                    <option value="Boys">Boys</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">MRP Price (₹)</label>
                  <input
                    type="number"
                    value={form.price}
                    onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Offer Price (₹)</label>
                  <input
                    type="number"
                    value={form.offerPrice}
                    onChange={(e) => setForm({ ...form, offerPrice: Number(e.target.value) })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Stock Count</label>
                  <input
                    type="number"
                    value={form.stock}
                    onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">SKU Code</label>
                  <input
                    type="text"
                    value={form.sku}
                    onChange={(e) => setForm({ ...form, sku: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-slate-300 mb-1">Barcode EAN</label>
                  <input
                    type="text"
                    value={form.barcode}
                    onChange={(e) => setForm({ ...form, barcode: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase text-slate-300 mb-1">Main Image URL</label>
                <input
                  type="text"
                  value={form.images?.[0]}
                  onChange={(e) => setForm({ ...form, images: [e.target.value] })}
                  className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-slate-300 mb-1">Description & Specs</label>
                <textarea
                  rows={3}
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl p-2.5 text-xs"
                />
              </div>

              <div className="pt-4 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-xs"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-6 py-2 rounded-xl bg-[#D4AF37] text-[#081B4B] font-bold text-xs uppercase"
                >
                  Save Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
