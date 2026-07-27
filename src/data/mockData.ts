import { Product, Testimonial, LookbookItem, Order, Customer, Coupon } from '../types';

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'prod-001',
    name: 'Royal Midnight Velvet Tuxedo',
    brand: 'ASKARA GRAND Atelier',
    category: 'Blazers',
    gender: 'Men',
    price: 34999,
    offerPrice: 27999,
    discountBadge: '20% OFF',
    rating: 4.9,
    reviewCount: 128,
    stock: 14,
    sku: 'AG-TUX-001',
    barcode: '890123456701',
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Royal Navy', hex: '#081B4B' },
      { name: 'Midnight Black', hex: '#0B0D17' }
    ],
    images: [
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
    isNewArrival: true,
    description: 'Crafted from Italian silk-velvet with satin shawl lapels, silk-lined interior, and gold filigree cuff buttons. Designed for galas and royal celebrations.',
    fabric: 'Super 150s Italian Silk Velvet & Satin',
    careInstructions: 'Dry Clean Only at Master Tailor Atelier'
  },
  {
    id: 'prod-002',
    name: 'Heritage Gold Thread Sherwani',
    brand: 'ASKARA Couture',
    category: 'Ethnic Wear',
    gender: 'Men',
    price: 49999,
    offerPrice: 39999,
    discountBadge: 'ROYAL EDIT',
    rating: 5.0,
    reviewCount: 94,
    stock: 8,
    sku: 'AG-ETH-002',
    barcode: '890123456702',
    sizes: ['38', '40', '42', '44', '46'],
    colors: [
      { name: 'Antique Gold', hex: '#D4AF37' },
      { name: 'Ivory Cream', hex: '#F9F6EE' }
    ],
    images: [
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
    isNewArrival: true,
    description: 'Intricately hand-embroidered with Zardozi gold wire on raw silk fabric. Comes with matching silk churidar and handcrafted dupion stole.',
    fabric: '100% Pure Raw Silk with Gold Zardozi',
    careInstructions: 'Dry Clean Only'
  },
  {
    id: 'prod-003',
    name: 'Egyptian Giza Cotton Formal Shirt',
    brand: 'ASKARA Executive',
    category: 'Shirts',
    gender: 'Men',
    price: 6999,
    offerPrice: 4999,
    discountBadge: 'BESTSELLER',
    rating: 4.8,
    reviewCount: 310,
    stock: 45,
    sku: 'AG-SHI-003',
    barcode: '890123456703',
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Navy Blue', hex: '#081B4B' },
      { name: 'Champagne Gold', hex: '#F3E5AB' }
    ],
    images: [
      'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
    isNewArrival: false,
    description: 'Woven from long-staple Egyptian Giza 87 cotton with 200/2 ply count for silky softness, crease-resistance, and French cuffs.',
    fabric: '200/2 Egyptian Giza Cotton',
    careInstructions: 'Machine Wash Soft / Gentle Steam Iron'
  },
  {
    id: 'prod-004',
    name: 'Young Prince Royal Velvet Blazer',
    brand: 'ASKARA Junior',
    category: 'Kids Collection',
    gender: 'Boys',
    price: 14999,
    offerPrice: 10999,
    discountBadge: 'KIDS LUXURY',
    rating: 4.9,
    reviewCount: 67,
    stock: 12,
    sku: 'AG-KID-004',
    barcode: '890123456704',
    sizes: ['24 (4-5Y)', '26 (6-7Y)', '28 (8-9Y)', '30 (10-11Y)', '32 (12-13Y)'],
    colors: [
      { name: 'Deep Royal Navy', hex: '#081B4B' },
      { name: 'Wine Maroon', hex: '#58111A' }
    ],
    images: [
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
    isNewArrival: true,
    description: 'Sublime micro-velvet tailored blazer for young gentlemen, complete with gold crest emblem embroidery and pocket square.',
    fabric: 'Soft Silk Micro Velvet',
    careInstructions: 'Dry Clean Only'
  },
  {
    id: 'prod-005',
    name: 'Florentine Wool Pleated Trousers',
    brand: 'ASKARA Bespoke',
    category: 'Trousers',
    gender: 'Men',
    price: 8999,
    offerPrice: 6999,
    discountBadge: '22% OFF',
    rating: 4.7,
    reviewCount: 88,
    stock: 22,
    sku: 'AG-TRO-005',
    barcode: '890123456705',
    sizes: ['30', '32', '34', '36', '38'],
    colors: [
      { name: 'Charcoal Grey', hex: '#2C3539' },
      { name: 'Midnight Navy', hex: '#081B4B' }
    ],
    images: [
      'https://images.unsplash.com/photo-1479064555552-3ef4979f8908?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: false,
    isNewArrival: false,
    description: 'Double pleated high-waist classic trousers featuring adjustable side tabs and hand-stitched pick seams.',
    fabric: '100% Super 130s Merino Wool',
    careInstructions: 'Dry Clean'
  },
  {
    id: 'prod-006',
    name: 'Bespoke Bandhgala Jodhpuri Jacket',
    brand: 'ASKARA Heritage',
    category: 'Ethnic Wear',
    gender: 'Men',
    price: 28999,
    offerPrice: 22999,
    discountBadge: 'ROYAL FAVOURITE',
    rating: 4.9,
    reviewCount: 156,
    stock: 10,
    sku: 'AG-ETH-006',
    barcode: '890123456706',
    sizes: ['38', '40', '42', '44'],
    colors: [
      { name: 'Imperial Navy', hex: '#081B4B' },
      { name: 'Obsidian Black', hex: '#0F0F14' }
    ],
    images: [
      'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
    isNewArrival: false,
    description: 'Structured high collar Jodhpuri tailored jacket adorned with handcrafted gold brass buttons and subtle sheen.',
    fabric: 'Silk Wool Blend with Metallic Buttons',
    careInstructions: 'Dry Clean Only'
  },
  {
    id: 'prod-007',
    name: 'Handcrafted Gold Thread Mojari Footwear',
    brand: 'ASKARA Atelier',
    category: 'Accessories',
    gender: 'Men',
    price: 5999,
    offerPrice: 4499,
    discountBadge: '25% OFF',
    rating: 4.8,
    reviewCount: 79,
    stock: 18,
    sku: 'AG-ACC-007',
    barcode: '890123456707',
    sizes: ['7 UK', '8 UK', '9 UK', '10 UK', '11 UK'],
    colors: [
      { name: 'Royal Gold', hex: '#D4AF37' },
      { name: 'Midnight Blue', hex: '#081B4B' }
    ],
    images: [
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: false,
    isNewArrival: true,
    description: 'Genuine leather cushioned soles with dabka and sequin handcrafted embroidery for majestic ethnic elegance.',
    fabric: 'Italian Leather Base with Gold Metallic Embroidery',
    careInstructions: 'Store in Dust Bag / Leather Conditioner'
  },
  {
    id: 'prod-008',
    name: 'Italian Silk Jacquard Tie & Cufflink Set',
    brand: 'ASKARA Accessories',
    category: 'Accessories',
    gender: 'Men',
    price: 3999,
    offerPrice: 2999,
    discountBadge: 'GIFT BOX',
    rating: 4.9,
    reviewCount: 204,
    stock: 50,
    sku: 'AG-ACC-008',
    barcode: '890123456708',
    sizes: ['Free Size'],
    colors: [
      { name: 'Gold & Navy Pattern', hex: '#D4AF37' }
    ],
    images: [
      'https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: false,
    isNewArrival: false,
    description: 'Presented in a velvet luxury box including a 100% woven silk tie, matching pocket square, and 18K gold-plated cufflinks.',
    fabric: '100% Mulberry Silk & 18K Gold Plated Brass',
    careInstructions: 'Spot Clean Only'
  },
  {
    id: 'prod-009',
    name: 'Riviera Linen Summer Casual Shirt',
    brand: 'ASKARA Casuals',
    category: 'Casual Wear',
    gender: 'Men',
    price: 5499,
    offerPrice: 3999,
    discountBadge: 'NEW SEASON',
    rating: 4.6,
    reviewCount: 82,
    stock: 30,
    sku: 'AG-CAS-009',
    barcode: '890123456709',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Pastel Sand', hex: '#E3C1A1' },
      { name: 'Sky Blue', hex: '#87CEEB' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: false,
    isNewArrival: true,
    description: 'Breathable European flax linen tailored with a modern band collar, ideal for coastal retreats and upscale casual evenings.',
    fabric: '100% Pure Normandy Linen',
    careInstructions: 'Machine Wash Cold / Hang Dry'
  },
  {
    id: 'prod-010',
    name: 'Young Prince Kurta Pyjama with Waistcoat',
    brand: 'ASKARA Junior Ethnic',
    category: 'Kids Collection',
    gender: 'Boys',
    price: 8999,
    offerPrice: 6999,
    discountBadge: 'FESTIVE SPECIAL',
    rating: 4.9,
    reviewCount: 41,
    stock: 15,
    sku: 'AG-KID-010',
    barcode: '890123456710',
    sizes: ['24 (4-5Y)', '28 (8-9Y)', '32 (12-13Y)'],
    colors: [
      { name: 'Cream & Gold', hex: '#F3E5AB' },
      { name: 'Royal Navy', hex: '#081B4B' }
    ],
    images: [
      'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: true,
    isNewArrival: true,
    description: '3-piece ethnic ensemble for young boys featuring silk blend embroidered jacket, soft cotton-silk kurta, and comfortable pajama.',
    fabric: 'Silk Brocade & Breathable Cotton Blend',
    careInstructions: 'Dry Clean Only'
  },
  {
    id: 'prod-011',
    name: 'Selvedge Japanese Denim Luxury Jeans',
    brand: 'ASKARA Denim',
    category: 'Jeans',
    gender: 'Men',
    price: 7999,
    offerPrice: 5999,
    discountBadge: 'CRAFTED DENIM',
    rating: 4.8,
    reviewCount: 112,
    stock: 25,
    sku: 'AG-DEN-011',
    barcode: '890123456711',
    sizes: ['30', '32', '34', '36'],
    colors: [
      { name: 'Indigo Navy', hex: '#1C2951' },
      { name: 'Raw Black', hex: '#121212' }
    ],
    images: [
      'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1582552938357-32b906df40cb?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: false,
    isNewArrival: false,
    description: 'Shuttle-loomed 14oz Japanese shuttle selvedge denim with gold contrast stitching, custom brass hardware, and tailored straight taper fit.',
    fabric: '14oz Kuroki Mills Japanese Selvedge Denim',
    careInstructions: 'Turn Inside Out / Cold Wash'
  },
  {
    id: 'prod-012',
    name: 'Mercerized Pima Cotton Polo T-Shirt',
    brand: 'ASKARA Luxe Casuals',
    category: 'T-Shirts',
    gender: 'Men',
    price: 3999,
    offerPrice: 2999,
    discountBadge: '25% OFF',
    rating: 4.7,
    reviewCount: 140,
    stock: 40,
    sku: 'AG-TSH-012',
    barcode: '890123456712',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Royal Navy', hex: '#081B4B' },
      { name: 'Emerald Green', hex: '#046307' },
      { name: 'Oatmeal Beige', hex: '#E6D7C3' }
    ],
    images: [
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&q=80&w=1200'
    ],
    featured: false,
    isNewArrival: false,
    description: 'Double-mercerized long-staple Pima cotton polo featuring mother-of-pearl buttons and embroidered gold logo badge.',
    fabric: '100% Mercerized Pima Cotton',
    careInstructions: 'Machine Wash Cold / Gentle Cycle'
  }
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    customerName: 'Aditya Verma',
    customerLocation: 'Corporate Director, Chennai',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    review: 'The attention to detail at Askara Grand is unparalleled. Their bespoke tuxedos fit better than any off-the-rack luxury brand I have worn in Paris or London.',
    designation: 'Corporate Director'
  },
  {
    id: 'test-2',
    customerName: 'Rahul S. Sharma',
    customerLocation: 'Fashion Blogger, Mumbai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    review: 'Perfect for ethnic occasions. I bought a sherwani for my wedding and the compliments haven\'t stopped. Truly majestic experience!',
    designation: 'Fashion Influencer'
  },
  {
    id: 'test-3',
    customerName: 'Vikram Mehta',
    customerLocation: 'Tech Entrepreneur, Bengaluru',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    rating: 5,
    review: 'Askara Grand\'s boys collection is just as premium as their men\'s wear. My son felt so comfortable and confident in his first velvet suit.',
    designation: 'Entrepreneur'
  }
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'lb-1',
    title: 'The Royal Gala Evening',
    category: 'Formal Wear',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lb-2',
    title: 'Grand Heritage Wedding Sherwani',
    category: 'Ethnic Wear',
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lb-3',
    title: 'Executive Boardroom Elegance',
    category: 'Shirts & Suits',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lb-4',
    title: 'Young Gentleman Heritage Line',
    category: 'Kids Collection',
    image: 'https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lb-5',
    title: 'Modern Jodhpuri Craftsmanship',
    category: 'Bespoke Atelier',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 'lb-6',
    title: 'Luxury Accessories & Footwear',
    category: 'Leather & Silk',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1200'
  }
];

export const INITIAL_ORDERS: Order[] = [
  {
    id: 'ord-1001',
    orderNumber: 'AG-2026-8901',
    customerName: 'Aditya Verma',
    customerEmail: 'aditya.v@corporate.in',
    phone: '+91 98765 43210',
    address: {
      street: '45 Nungambakkam High Road, Suite 402',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600034',
      country: 'India'
    },
    items: [
      {
        id: 'item-1',
        product: INITIAL_PRODUCTS[0],
        selectedSize: '40',
        selectedColor: { name: 'Royal Navy', hex: '#081B4B' },
        quantity: 1
      },
      {
        id: 'item-2',
        product: INITIAL_PRODUCTS[7],
        selectedSize: 'Free Size',
        selectedColor: { name: 'Gold & Navy Pattern', hex: '#D4AF37' },
        quantity: 1
      }
    ],
    subtotal: 30998,
    gstAmount: 3719.76,
    shippingFee: 0,
    discountAmount: 1500,
    totalAmount: 33217.76,
    paymentMethod: 'Razorpay',
    paymentStatus: 'Paid',
    orderStatus: 'Shipping',
    trackingNumber: 'AG-EXP-99201',
    createdAt: '2026-07-25T10:15:00Z'
  },
  {
    id: 'ord-1002',
    orderNumber: 'AG-2026-8902',
    customerName: 'Karan Kapoor',
    customerEmail: 'karan.kapoor@gmail.com',
    phone: '+91 98123 77654',
    address: {
      street: '12 Anna Salai, Alwarpet',
      city: 'Chennai',
      state: 'Tamil Nadu',
      pincode: '600018',
      country: 'India'
    },
    items: [
      {
        id: 'item-3',
        product: INITIAL_PRODUCTS[1],
        selectedSize: '42',
        selectedColor: { name: 'Antique Gold', hex: '#D4AF37' },
        quantity: 1
      }
    ],
    subtotal: 39999,
    gstAmount: 4799.88,
    shippingFee: 0,
    discountAmount: 2000,
    totalAmount: 42798.88,
    paymentMethod: 'UPI',
    paymentStatus: 'Paid',
    orderStatus: 'Confirmed',
    createdAt: '2026-07-26T14:30:00Z'
  },
  {
    id: 'ord-1003',
    orderNumber: 'AG-2026-8903',
    customerName: 'Vikram Mehta',
    customerEmail: 'vikram.m@tech.com',
    phone: '+91 97788 12345',
    address: {
      street: '88 Indiranagar 100ft Road',
      city: 'Bengaluru',
      state: 'Karnataka',
      pincode: '560038',
      country: 'India'
    },
    items: [
      {
        id: 'item-4',
        product: INITIAL_PRODUCTS[3],
        selectedSize: '28 (8-9Y)',
        selectedColor: { name: 'Deep Royal Navy', hex: '#081B4B' },
        quantity: 1
      },
      {
        id: 'item-5',
        product: INITIAL_PRODUCTS[2],
        selectedSize: '40',
        selectedColor: { name: 'Pure White', hex: '#FFFFFF' },
        quantity: 2
      }
    ],
    subtotal: 20997,
    gstAmount: 2519.64,
    shippingFee: 0,
    discountAmount: 1000,
    totalAmount: 22516.64,
    paymentMethod: 'Credit Card',
    paymentStatus: 'Paid',
    orderStatus: 'Packing',
    createdAt: '2026-07-27T09:20:00Z'
  }
];

export const INITIAL_CUSTOMERS: Customer[] = [
  {
    id: 'cust-1',
    name: 'Aditya Verma',
    email: 'aditya.v@corporate.in',
    phone: '+91 98765 43210',
    location: 'Chennai, Tamil Nadu',
    totalOrders: 6,
    totalSpent: 145000,
    rewardPoints: 2900,
    walletBalance: 4500,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    joinDate: '2025-01-15'
  },
  {
    id: 'cust-2',
    name: 'Karan Kapoor',
    email: 'karan.kapoor@gmail.com',
    phone: '+91 98123 77654',
    location: 'Chennai, Tamil Nadu',
    totalOrders: 3,
    totalSpent: 89000,
    rewardPoints: 1780,
    walletBalance: 2000,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    joinDate: '2025-03-22'
  },
  {
    id: 'cust-3',
    name: 'Vikram Mehta',
    email: 'vikram.m@tech.com',
    phone: '+91 97788 12345',
    location: 'Bengaluru, Karnataka',
    totalOrders: 4,
    totalSpent: 112000,
    rewardPoints: 2240,
    walletBalance: 3500,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    joinDate: '2025-05-10'
  }
];

export const INITIAL_COUPONS: Coupon[] = [
  {
    code: 'ROYAL10',
    discountPercent: 10,
    maxDiscount: 5000,
    minPurchase: 10000,
    active: true
  },
  {
    code: 'ASKARAGRAND',
    discountPercent: 15,
    maxDiscount: 10000,
    minPurchase: 20000,
    active: true
  },
  {
    code: 'FESTIVE50',
    discountPercent: 20,
    maxDiscount: 15000,
    minPurchase: 30000,
    active: true
  }
];
