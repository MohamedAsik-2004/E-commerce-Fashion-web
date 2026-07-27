import React, { useState } from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { ToastContainer } from './components/common/ToastContainer';

// Storefront Sections
import { HeroSection } from './components/store/HeroSection';
import { FeaturedCategories } from './components/store/FeaturedCategories';
import { FeaturedProducts } from './components/store/FeaturedProducts';
import { NewArrivalsCarousel } from './components/store/NewArrivalsCarousel';
import { SeasonalOfferBanner } from './components/store/SeasonalOfferBanner';
import { WhyChooseUs } from './components/store/WhyChooseUs';
import { Testimonials } from './components/store/Testimonials';
import { GalleryLookbook } from './components/store/GalleryLookbook';
import { AboutSection } from './components/store/AboutSection';
import { ContactSection } from './components/store/ContactSection';
import { AIStylistSection } from './components/store/AIStylistSection';

// Modals
import { CartDrawer } from './components/modals/CartDrawer';
import { CheckoutModal } from './components/modals/CheckoutModal';
import { QuickViewModal } from './components/modals/QuickViewModal';
import { BespokeMeasurementModal } from './components/modals/BespokeMeasurementModal';
import { AuthModal } from './components/modals/AuthModal';

// Admin Components
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminLoginPage } from './components/admin/AdminLoginPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AdminProducts } from './components/admin/AdminProducts';
import { AdminInventory } from './components/admin/AdminInventory';
import { AdminOrders } from './components/admin/AdminOrders';
import { AdminCustomers } from './components/admin/AdminCustomers';
import { AdminReports } from './components/admin/AdminReports';
import { AdminSettings } from './components/admin/AdminSettings';

const MainAppContent: React.FC = () => {
  const { activeView, adminActiveTab, user } = useStore();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020612] text-slate-100 flex flex-col selection:bg-[#D4AF37] selection:text-[#081B4B]">
      
      {/* Toast Notifications */}
      <ToastContainer />

      {/* Global Modals */}
      <CartDrawer onProceedToCheckout={() => setIsCheckoutOpen(true)} />
      <CheckoutModal isOpen={isCheckoutOpen} onClose={() => setIsCheckoutOpen(false)} />
      <QuickViewModal />
      <BespokeMeasurementModal />
      <AuthModal />

      {/* VIEW SWITCHER: STOREFRONT vs ADMIN LOGIN vs ADMIN DASHBOARD */}
      {activeView === 'storefront' ? (
        <>
          <Header />
          <main className="flex-1">
            <HeroSection />
            <FeaturedCategories />
            <FeaturedProducts />
            <NewArrivalsCarousel />
            <AIStylistSection />
            <SeasonalOfferBanner />
            <WhyChooseUs />
            <Testimonials />
            <GalleryLookbook />
            <AboutSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      ) : activeView === 'admin-login' || (activeView === 'admin' && user?.role !== 'admin') ? (
        <AdminLoginPage />
      ) : (
        <AdminLayout>
          {adminActiveTab === 'dashboard' && <AdminDashboard />}
          {adminActiveTab === 'products' && <AdminProducts />}
          {adminActiveTab === 'inventory' && <AdminInventory />}
          {adminActiveTab === 'orders' && <AdminOrders />}
          {adminActiveTab === 'customers' && <AdminCustomers />}
          {adminActiveTab === 'reports' && <AdminReports />}
          {adminActiveTab === 'settings' && <AdminSettings />}
        </AdminLayout>
      )}

    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainAppContent />
    </StoreProvider>
  );
}
