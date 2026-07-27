import React, { useState } from 'react';
import { X, CheckCircle2, CreditCard, Smartphone, ShieldCheck, Printer, ArrowLeft, ArrowRight, Truck } from 'lucide-react';
import { useStore } from '../../context/StoreContext';
import { Order } from '../../types';

export const CheckoutModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
}> = ({ isOpen, onClose }) => {
  const { cart, placeOrder, user, appliedCoupon } = useStore();

  const [step, setStep] = useState<1 | 2 | 3>(1);

  const [formData, setFormData] = useState({
    name: user?.name || 'Lord Sterling',
    email: user?.email || 'sterling@askaragrand.com',
    phone: '+91 98765 43210',
    street: '45 Nungambakkam High Road, Suite 402',
    city: 'Chennai',
    state: 'Tamil Nadu',
    pincode: '600034',
    country: 'India',
    paymentMethod: 'Razorpay' as 'Razorpay' | 'UPI' | 'Credit Card' | 'Cash on Delivery'
  });

  const [placedOrder, setPlacedOrder] = useState<Order | null>(null);

  if (!isOpen) return null;

  const handlePlaceOrder = () => {
    const newOrd = placeOrder({
      customerName: formData.name,
      customerEmail: formData.email,
      phone: formData.phone,
      address: {
        street: formData.street,
        city: formData.city,
        state: formData.state,
        pincode: formData.pincode,
        country: formData.country
      },
      paymentMethod: formData.paymentMethod
    });
    setPlacedOrder(newOrd);
    setStep(3);
  };

  const handlePrintInvoice = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-[#030A1C] border border-[#D4AF37]/50 text-slate-100 rounded-3xl shadow-2xl overflow-hidden my-8 relative">
        
        {/* Header */}
        <div className="p-6 bg-[#081B4B] border-b border-[#D4AF37]/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-montserrat uppercase tracking-widest text-[#D4AF37]">
              Askara Grand Atelier
            </span>
            <h3 className="font-playfair font-bold text-xl text-[#FFF1C5]">
              {step === 3 ? 'Order Confirmation Invoice' : 'Bespoke Checkout'}
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar (if not completed) */}
        {step !== 3 && (
          <div className="bg-[#020612] px-6 py-3 border-b border-slate-800 flex items-center justify-between text-xs font-montserrat">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#D4AF37]' : 'text-slate-500'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-[10px]">1</span>
              <span>Delivery Address</span>
            </div>
            <span className="text-slate-700">—</span>
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#D4AF37]' : 'text-slate-500'}`}>
              <span className="w-5 h-5 rounded-full border border-current flex items-center justify-center font-bold text-[10px]">2</span>
              <span>Payment Gateway</span>
            </div>
          </div>
        )}

        <div className="p-6 sm:p-8 space-y-6">
          
          {/* STEP 1: Address Form */}
          {step === 1 && (
            <div className="space-y-4">
              <h4 className="font-playfair font-bold text-lg text-slate-100">Patron Delivery Information</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div>
                <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                  Street / Suite Address *
                </label>
                <input
                  type="text"
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-montserrat uppercase tracking-wider text-slate-300 mb-1">
                    Pin Code
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                    className="w-full bg-[#081B4B] border border-[#D4AF37]/30 rounded-xl py-2.5 px-3.5 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <span>Select Payment Method</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Payment Options */}
          {step === 2 && (
            <div className="space-y-6">
              <h4 className="font-playfair font-bold text-lg text-slate-100">Select Payment Method</h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'Razorpay' })}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'Razorpay'
                      ? 'border-[#D4AF37] bg-[#081B4B]'
                      : 'border-slate-800 bg-[#020612] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5 text-[#D4AF37]" />
                      <span className="font-playfair font-bold text-sm text-slate-100">Razorpay / Card</span>
                    </div>
                    {formData.paymentMethod === 'Razorpay' && <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 font-poppins">
                    Credit / Debit Cards, Net Banking & Wallet
                  </p>
                </div>

                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'UPI' })}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all ${
                    formData.paymentMethod === 'UPI'
                      ? 'border-[#D4AF37] bg-[#081B4B]'
                      : 'border-slate-800 bg-[#020612] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-5 h-5 text-[#D4AF37]" />
                      <span className="font-playfair font-bold text-sm text-slate-100">Instant UPI</span>
                    </div>
                    {formData.paymentMethod === 'UPI' && <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 font-poppins">
                    Google Pay, PhonePe, Paytm QR Code
                  </p>
                </div>

                <div
                  onClick={() => setFormData({ ...formData, paymentMethod: 'Cash on Delivery' })}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all sm:col-span-2 ${
                    formData.paymentMethod === 'Cash on Delivery'
                      ? 'border-[#D4AF37] bg-[#081B4B]'
                      : 'border-slate-800 bg-[#020612] hover:border-slate-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Truck className="w-5 h-5 text-[#D4AF37]" />
                      <span className="font-playfair font-bold text-sm text-slate-100">Atelier Cash on Delivery</span>
                    </div>
                    {formData.paymentMethod === 'Cash on Delivery' && <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />}
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 font-poppins">
                    Pay after inspecting your garment at your doorstep.
                  </p>
                </div>

              </div>

              <div className="flex justify-between pt-4 border-t border-slate-800">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 rounded-xl border border-slate-700 text-slate-300 text-xs font-montserrat flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Address</span>
                </button>

                <button
                  onClick={handlePlaceOrder}
                  className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-widest shadow-2xl hover:scale-101 cursor-pointer"
                >
                  Confirm & Place Royal Order
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Order Confirmation & Invoice */}
          {step === 3 && placedOrder && (
            <div id="printable-invoice" className="space-y-6">
              
              <div className="text-center p-6 bg-[#081B4B]/80 rounded-2xl border border-[#D4AF37]">
                <CheckCircle2 className="w-12 h-12 text-[#D4AF37] mx-auto mb-2" />
                <h3 className="font-playfair font-bold text-2xl text-[#FFF1C5]">Order Confirmed</h3>
                <p className="text-xs text-slate-300 mt-1 font-poppins">
                  Order Number: <strong className="text-[#D4AF37]">{placedOrder.orderNumber}</strong>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  A receipt has been dispatched to {placedOrder.customerEmail}
                </p>
              </div>

              {/* Printable Invoice Box */}
              <div className="p-6 rounded-2xl bg-white text-slate-900 space-y-4 font-poppins text-xs shadow-xl">
                
                <div className="flex items-start justify-between border-b pb-4 border-slate-200">
                  <div>
                    <h2 className="font-playfair font-bold text-xl text-[#081B4B]">ASKARA GRAND</h2>
                    <p className="text-[10px] text-slate-500 uppercase tracking-widest">Master Tailors & Clothiers</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-slate-800">INVOICE</p>
                    <p className="text-[10px] text-slate-500">{new Date(placedOrder.createdAt).toLocaleDateString()}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-[11px]">
                  <div>
                    <span className="font-bold text-slate-800 block uppercase">Patron Details</span>
                    <p>{placedOrder.customerName}</p>
                    <p>{placedOrder.phone}</p>
                    <p>{placedOrder.address.street}, {placedOrder.address.city}, {placedOrder.address.pincode}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-800 block uppercase">Payment Method</span>
                    <p className="font-semibold text-emerald-700">{placedOrder.paymentMethod} (Paid)</p>
                    <p>Status: {placedOrder.orderStatus}</p>
                  </div>
                </div>

                {/* Items Table */}
                <table className="w-full text-left border-collapse mt-2">
                  <thead>
                    <tr className="border-b border-slate-300 font-bold text-[10px] uppercase text-slate-700">
                      <th className="py-2">Item Description</th>
                      <th className="py-2">Fitting</th>
                      <th className="py-2 text-center">Qty</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {placedOrder.items.map((item, idx) => (
                      <tr key={idx} className="border-b border-slate-100">
                        <td className="py-2 font-medium">{item.product.name}</td>
                        <td className="py-2 text-slate-500">{item.selectedSize}</td>
                        <td className="py-2 text-center">{item.quantity}</td>
                        <td className="py-2 text-right">₹{(item.product.offerPrice * item.quantity).toLocaleString('en-IN')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Totals */}
                <div className="text-right space-y-1 pt-2">
                  <p>Subtotal: ₹{placedOrder.subtotal.toLocaleString('en-IN')}</p>
                  {placedOrder.discountAmount > 0 && <p className="text-red-600">Discount: -₹{placedOrder.discountAmount.toLocaleString('en-IN')}</p>}
                  <p>GST (12%): ₹{placedOrder.gstAmount.toLocaleString('en-IN')}</p>
                  <p className="font-bold text-sm text-[#081B4B] pt-1 border-t border-slate-300">
                    Grand Total: ₹{placedOrder.totalAmount.toLocaleString('en-IN')}
                  </p>
                </div>

              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-2 no-print">
                <button
                  onClick={handlePrintInvoice}
                  className="px-4 py-2.5 rounded-xl border border-[#D4AF37] text-[#D4AF37] font-montserrat font-bold text-xs uppercase flex items-center gap-2 hover:bg-[#D4AF37] hover:text-[#081B4B]"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Receipt / PDF</span>
                </button>

                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase"
                >
                  Return to Store
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
