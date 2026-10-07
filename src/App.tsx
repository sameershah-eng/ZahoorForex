import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

// Layout & Common Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Preloader } from './components/common/Preloader';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';
import { RegisterLivePage } from './pages/RegisterLivePage';
import { RegisterDemoPage } from './pages/RegisterDemoPage';
import { PartnershipRepresentativesPage } from './pages/PartnershipRepresentativesPage';
import { PartnershipAffiliatesPage } from './pages/PartnershipAffiliatesPage';
import { ProductsForexPage } from './pages/ProductsForexPage';
import { ProductsShareCfdsPage } from './pages/ProductsShareCfdsPage';
import { ProductsCommoditiesPage } from './pages/ProductsCommoditiesPage';
import { PlansPage } from './pages/PlansPage';
import { FundsSafetyPage } from './pages/FundsSafetyPage';
import { FundsDepositPage } from './pages/FundsDepositPage';
import { FundsClientServicesPage } from './pages/FundsClientServicesPage';
import { PreTestPage } from './pages/PreTestPage';
import { MediaPage } from './pages/MediaPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { LoginPage } from './pages/LoginPage';
import { LegalPage } from './pages/LegalPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Animated routes wrapper
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
        className="flex-1 flex flex-col"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FaqPage />} />
          
          {/* Registration */}
          <Route path="/register/live" element={<RegisterLivePage />} />
          <Route path="/register/demo" element={<RegisterDemoPage />} />

          {/* Partnership */}
          <Route path="/partnership/representatives" element={<PartnershipRepresentativesPage />} />
          <Route path="/partnership/affiliates" element={<PartnershipAffiliatesPage />} />

          {/* Products */}
          <Route path="/products/forex" element={<ProductsForexPage />} />
          <Route path="/products/share-cfds" element={<ProductsShareCfdsPage />} />
          <Route path="/products/commodities" element={<ProductsCommoditiesPage />} />

          {/* Plans */}
          <Route path="/plans" element={<PlansPage />} />

          {/* Funds */}
          <Route path="/funds/safety" element={<FundsSafetyPage />} />
          <Route path="/funds/deposit" element={<FundsDepositPage />} />
          <Route path="/funds/client-services" element={<FundsClientServicesPage />} />

          {/* Tools & Media */}
          <Route path="/pre-test" element={<PreTestPage />} />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Legal Compliance */}
          <Route path="/privacy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="/risk-disclosure" element={<LegalPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Preloader />
      <div className="min-h-screen bg-[#0B0B0B] text-[#A1A1AA] flex flex-col antialiased selection:bg-[#B6F35A] selection:text-[#0B0B0B]">
        <Header />
        <main className="flex-1">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
