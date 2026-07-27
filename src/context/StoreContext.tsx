import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, Order, Customer, Coupon, BespokeMeasurement } from '../types';
import { INITIAL_PRODUCTS, INITIAL_ORDERS, INITIAL_CUSTOMERS, INITIAL_COUPONS } from '../data/mockData';

interface Toast {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'error';
}

interface StoreContextType {
  products: Product[];
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
  cart: CartItem[];
  wishlist: string[];
  orders: Order[];
  setOrders: React.Dispatch<React.SetStateAction<Order[]>>;
  customers: Customer[];
  coupons: Coupon[];
  appliedCoupon: Coupon | null;
  activeView: 'storefront' | 'admin' | 'admin-login';
  setActiveView: (view: 'storefront' | 'admin' | 'admin-login') => void;
  adminActiveTab: 'dashboard' | 'products' | 'inventory' | 'orders' | 'customers' | 'reports' | 'settings';
  setAdminActiveTab: (tab: 'dashboard' | 'products' | 'inventory' | 'orders' | 'customers' | 'reports' | 'settings') => void;
  storeSection: 'home' | 'shop' | 'categories' | 'collections' | 'new-arrivals' | 'offers' | 'about' | 'contact' | 'atelier' | 'stylist';
  setStoreSection: (section: 'home' | 'shop' | 'categories' | 'collections' | 'new-arrivals' | 'offers' | 'about' | 'contact' | 'atelier' | 'stylist') => void;
  
  // UI states
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  selectedCategoryFilter: string;
  setSelectedCategoryFilter: (cat: string) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (prod: Product | null) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (open: boolean) => void;
  isBespokeModalOpen: boolean;
  setIsBespokeModalOpen: (open: boolean) => void;
  user: { name: string; email: string; role: 'customer' | 'admin' } | null;
  setUser: (u: { name: string; email: string; role: 'customer' | 'admin' } | null) => void;
  
  // Actions
  addToCart: (product: Product, selectedSize?: string, selectedColor?: { name: string; hex: string }, qty?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateCartQuantity: (cartItemId: string, delta: number) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  applyCouponCode: (code: string) => boolean;
  removeCoupon: () => void;
  placeOrder: (orderData: Partial<Order>) => Order;
  updateOrderStatus: (orderId: string, status: Order['orderStatus']) => void;
  
  // Product CRUD
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, updated: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Toasts
  toasts: Toast[];
  addToast: (title: string, message: string, type?: 'success' | 'info' | 'error') => void;
  removeToast: (id: string) => void;
  
  // Bespoke
  saveBespokeMeasurements: (m: BespokeMeasurement) => void;
  bespokeData: BespokeMeasurement | null;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('ag_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('ag_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    const saved = localStorage.getItem('ag_wishlist');
    return saved ? JSON.parse(saved) : ['prod-001', 'prod-004'];
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('ag_orders');
    return saved ? JSON.parse(saved) : INITIAL_ORDERS;
  });

  const [customers, setCustomers] = useState<Customer[]>(INITIAL_CUSTOMERS);
  const [coupons] = useState<Coupon[]>(INITIAL_COUPONS);
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null);

  const [activeView, setActiveView] = useState<'storefront' | 'admin' | 'admin-login'>('storefront');
  const [adminActiveTab, setAdminActiveTab] = useState<'dashboard' | 'products' | 'inventory' | 'orders' | 'customers' | 'reports' | 'settings'>('dashboard');
  const [storeSection, setStoreSection] = useState<'home' | 'shop' | 'categories' | 'collections' | 'new-arrivals' | 'offers' | 'about' | 'contact' | 'atelier' | 'stylist'>('home');

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState('ALL');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isBespokeModalOpen, setIsBespokeModalOpen] = useState(false);

  const [user, setUser] = useState<{ name: string; email: string; role: 'customer' | 'admin' } | null>({
    name: 'Lord Sterling',
    email: 'sterling@askaragrand.com',
    role: 'customer'
  });

  const [toasts, setToasts] = useState<Toast[]>([]);
  const [bespokeData, setBespokeData] = useState<BespokeMeasurement | null>(null);

  // Persistence effects
  useEffect(() => {
    localStorage.setItem('ag_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('ag_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('ag_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('ag_orders', JSON.stringify(orders));
  }, [orders]);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const addToCart = (
    product: Product,
    selectedSize?: string,
    selectedColor?: { name: string; hex: string },
    qty: number = 1
  ) => {
    const sizeToUse = selectedSize || product.sizes[0] || 'Standard';
    const colorToUse = selectedColor || product.colors[0] || { name: 'Default', hex: '#081B4B' };

    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === sizeToUse &&
          item.selectedColor.name === colorToUse.name
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += qty;
        return updated;
      }

      return [
        ...prevCart,
        {
          id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          product,
          selectedSize: sizeToUse,
          selectedColor: colorToUse,
          quantity: qty
        }
      ];
    });

    addToast('Added to Atelier Bag', `${product.name} (${sizeToUse}) has been reserved.`, 'success');
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
    addToast('Item Removed', 'Product removed from your Atelier Bag.', 'info');
  };

  const updateCartQuantity = (cartItemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === cartItemId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (productId: string) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        addToast('Removed from Wishlist', 'Item removed from your saved heritage pieces.', 'info');
        return prev.filter((id) => id !== productId);
      } else {
        addToast('Added to Wishlist', 'Item saved to your personal collection.', 'success');
        return [...prev, productId];
      }
    });
  };

  const applyCouponCode = (code: string) => {
    const found = coupons.find((c) => c.code.toUpperCase() === code.toUpperCase() && c.active);
    if (found) {
      setAppliedCoupon(found);
      addToast('Royal Coupon Applied', `Enjoy ${found.discountPercent}% privilege discount!`, 'success');
      return true;
    } else {
      addToast('Invalid Privilege Code', 'Please check your code and try again.', 'error');
      return false;
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
  };

  const placeOrder = (orderData: Partial<Order>): Order => {
    const orderNum = `AG-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    const subtotal = cart.reduce((acc, item) => acc + item.product.offerPrice * item.quantity, 0);
    
    let discount = 0;
    if (appliedCoupon) {
      discount = Math.min((subtotal * appliedCoupon.discountPercent) / 100, appliedCoupon.maxDiscount);
    }

    const gstAmount = Number(((subtotal - discount) * 0.12).toFixed(2));
    const totalAmount = Number((subtotal - discount + gstAmount).toFixed(2));

    const newOrder: Order = {
      id: `ord-${Date.now()}`,
      orderNumber: orderNum,
      customerName: orderData.customerName || user?.name || 'Valued Patron',
      customerEmail: orderData.customerEmail || user?.email || 'patron@askaragrand.com',
      phone: orderData.phone || '+91 98765 43210',
      address: orderData.address || {
        street: 'Grand Palais Residences',
        city: 'Chennai',
        state: 'Tamil Nadu',
        pincode: '600001',
        country: 'India'
      },
      items: [...cart],
      subtotal,
      gstAmount,
      shippingFee: 0,
      discountAmount: discount,
      totalAmount,
      paymentMethod: orderData.paymentMethod || 'Razorpay',
      paymentStatus: 'Paid',
      orderStatus: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    setOrders((prev) => [newOrder, ...prev]);
    clearCart();
    setAppliedCoupon(null);
    addToast('Order Placed Successfully', `Order #${orderNum} confirmed. Tracking sent to email.`, 'success');
    return newOrder;
  };

  const updateOrderStatus = (orderId: string, status: Order['orderStatus']) => {
    setOrders((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, orderStatus: status } : ord))
    );
    addToast('Status Updated', `Order status set to ${status}.`, 'info');
  };

  const addProduct = (newProd: Omit<Product, 'id'>) => {
    const created: Product = {
      ...newProd,
      id: `prod-${Date.now()}`
    };
    setProducts((prev) => [created, ...prev]);
    addToast('Product Published', `${created.name} added to catalog.`, 'success');
  };

  const updateProduct = (id: string, updated: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((prod) => (prod.id === id ? { ...prod, ...updated } : prod))
    );
    addToast('Catalog Updated', 'Product details saved successfully.', 'info');
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((prod) => prod.id !== id));
    addToast('Product Removed', 'Item deleted from store inventory.', 'info');
  };

  const saveBespokeMeasurements = (m: BespokeMeasurement) => {
    setBespokeData(m);
    addToast('Measurements Saved', 'Your bespoke fitting profile is active.', 'success');
  };

  return (
    <StoreContext.Provider
      value={{
        products,
        setProducts,
        cart,
        wishlist,
        orders,
        setOrders,
        customers,
        coupons,
        appliedCoupon,
        activeView,
        setActiveView,
        adminActiveTab,
        setAdminActiveTab,
        storeSection,
        setStoreSection,
        searchQuery,
        setSearchQuery,
        selectedCategoryFilter,
        setSelectedCategoryFilter,
        quickViewProduct,
        setQuickViewProduct,
        isCartOpen,
        setIsCartOpen,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isBespokeModalOpen,
        setIsBespokeModalOpen,
        user,
        setUser,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        applyCouponCode,
        removeCoupon,
        placeOrder,
        updateOrderStatus,
        addProduct,
        updateProduct,
        deleteProduct,
        toasts,
        addToast,
        removeToast,
        saveBespokeMeasurements,
        bespokeData
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
