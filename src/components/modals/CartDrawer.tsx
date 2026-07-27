import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

export const CartDrawer: React.FC<{
  onProceedToCheckout: () => void;
}> = ({ onProceedToCheckout }) => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateCartQuantity,
    appliedCoupon,
    applyCouponCode,
    removeCoupon
  } = useStore();

  const [promoInput, setPromoInput] = useState('');

  if (!isCartOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.offerPrice * item.quantity, 0);

  let discountAmount = 0;
  if (appliedCoupon) {
    discountAmount = Math.min((subtotal * appliedCoupon.discountPercent) / 100, appliedCoupon.maxDiscount);
  }

  const gstAmount = Number(((subtotal - discountAmount) * 0.12).toFixed(2));
  const finalTotal = Number((subtotal - discountAmount + gstAmount).toFixed(2));

  const handleApplyCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    if (applyCouponCode(promoInput)) {
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/70 backdrop-blur-sm flex justify-end">
      <div className="w-full max-w-md bg-[#030A1C] border-l border-[#D4AF37]/40 text-slate-100 flex flex-col h-full shadow-2xl animate-slide-left">
        
        {/* Header */}
        <div className="p-5 border-b border-[#D4AF37]/20 flex items-center justify-between bg-[#081B4B]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#D4AF37]" />
            <h3 className="font-playfair font-bold text-lg text-[#FFF1C5]">Atelier Bag ({cart.length})</h3>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="text-slate-400 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <ShoppingBag className="w-12 h-12 text-[#D4AF37] mx-auto opacity-40" />
              <p className="font-playfair text-slate-300 font-semibold">Your Atelier Bag is empty</p>
              <p className="text-xs text-slate-500 font-poppins">Explore our tuxedos, sherwanis, and luxury shirts.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl bg-[#081B4B]/60 border border-[#D4AF37]/20 flex gap-3 relative"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  referrerPolicy="no-referrer"
                  className="w-18 h-24 object-cover rounded-xl border border-[#D4AF37]/30 shrink-0"
                />

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between pr-6">
                    <div>
                      <span className="text-[10px] text-[#D4AF37] uppercase font-montserrat font-semibold">{item.product.brand}</span>
                      <h4 className="font-playfair font-bold text-sm text-slate-100 line-clamp-1">{item.product.name}</h4>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 flex items-center gap-2">
                    <span>Size: <strong className="text-slate-200">{item.selectedSize}</strong></span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      Color: <span className="w-2.5 h-2.5 rounded-full inline-block border border-white" style={{ backgroundColor: item.selectedColor.hex }} />
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="font-playfair font-bold text-sm text-[#FFF1C5]">
                      ₹{(item.product.offerPrice * item.quantity).toLocaleString('en-IN')}
                    </span>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-[#030A1C] border border-[#D4AF37]/30 rounded-lg px-2 py-0.5">
                      <button
                        onClick={() => updateCartQuantity(item.id, -1)}
                        className="text-slate-400 hover:text-white text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="font-bold text-xs w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateCartQuantity(item.id, 1)}
                        className="text-slate-400 hover:text-white text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-3 right-3 text-slate-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer Summary & Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#D4AF37]/30 bg-[#081B4B]/80 space-y-4">
            
            {/* Promo Code Input */}
            {appliedCoupon ? (
              <div className="p-2.5 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37] flex items-center justify-between text-xs text-[#FFF1C5]">
                <div className="flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-[#D4AF37]" />
                  <span>Code <strong>{appliedCoupon.code}</strong> Applied ({appliedCoupon.discountPercent}% OFF)</span>
                </div>
                <button onClick={removeCoupon} className="text-red-400 font-bold hover:underline">Remove</button>
              </div>
            ) : (
              <form onSubmit={handleApplyCode} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Privilege Coupon (e.g. ROYAL10)"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  className="flex-1 bg-[#030A1C] border border-[#D4AF37]/30 rounded-xl px-3 py-2 text-xs text-slate-100 focus:outline-none focus:border-[#D4AF37]"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#D4AF37] text-[#081B4B] font-montserrat font-bold text-xs uppercase"
                >
                  Apply
                </button>
              </form>
            )}

            {/* Subtotals */}
            <div className="space-y-1.5 text-xs text-slate-300 font-poppins pt-2 border-t border-slate-800">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {appliedCoupon && (
                <div className="flex justify-between text-[#D4AF37]">
                  <span>Privilege Discount</span>
                  <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-slate-400">
                <span>GST (12% Apparel)</span>
                <span>₹{gstAmount.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Atelier Shipping</span>
                <span className="text-emerald-400 font-semibold">Complimentary</span>
              </div>
              <div className="flex justify-between font-playfair font-bold text-base text-slate-100 pt-2 border-t border-slate-800">
                <span>Estimated Total</span>
                <span className="text-[#FFF1C5]">₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                onProceedToCheckout();
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#AA7C11] text-[#081B4B] font-montserrat font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-2xl hover:scale-101 transition-all cursor-pointer"
            >
              <span>Proceed to Bespoke Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>256-Bit Encrypted Razorpay & UPI Checkout</span>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
