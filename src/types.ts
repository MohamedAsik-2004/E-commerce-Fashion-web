export type CategoryType = 
  | 'Formal Wear'
  | 'Casual Wear'
  | 'Ethnic Wear'
  | 'Shirts'
  | 'T-Shirts'
  | 'Jeans'
  | 'Trousers'
  | 'Blazers'
  | 'Accessories'
  | 'Kids Collection';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: CategoryType;
  gender: 'Men' | 'Boys' | 'Unisex';
  price: number;
  offerPrice: number;
  discountBadge?: string;
  rating: number;
  reviewCount: number;
  stock: number;
  sku: string;
  barcode: string;
  sizes: string[];
  colors: { name: string; hex: string }[];
  images: string[];
  featured: boolean;
  isNewArrival?: boolean;
  description: string;
  fabric: string;
  careInstructions?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedSize: string;
  selectedColor: { name: string; hex: string };
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  items: CartItem[];
  subtotal: number;
  gstAmount: number;
  shippingFee: number;
  discountAmount: number;
  totalAmount: number;
  paymentMethod: 'Razorpay' | 'UPI' | 'Credit Card' | 'Cash on Delivery';
  paymentStatus: 'Paid' | 'Pending' | 'Refunded';
  orderStatus: 'Pending' | 'Confirmed' | 'Packing' | 'Shipping' | 'Delivered' | 'Cancelled' | 'Returned';
  trackingNumber?: string;
  createdAt: string;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  totalOrders: number;
  totalSpent: number;
  rewardPoints: number;
  walletBalance: number;
  avatar: string;
  joinDate: string;
}

export interface Testimonial {
  id: string;
  customerName: string;
  customerLocation: string;
  avatar: string;
  rating: number;
  review: string;
  designation?: string;
}

export interface LookbookItem {
  id: string;
  title: string;
  category: string;
  image: string;
  aspectRatio?: string;
}

export interface Coupon {
  code: string;
  discountPercent: number;
  maxDiscount: number;
  minPurchase: number;
  active: boolean;
}

export interface BespokeMeasurement {
  chest: number;
  waist: number;
  shoulder: number;
  sleeve: number;
  neck: number;
  height: number;
  fitPreference: 'Slim Fit' | 'Bespoke Modern' | 'Classic Royal';
  occasion: string;
}
