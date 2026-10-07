import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ArrowRight, 
  TrendingUp, 
  ShieldCheck, 
  Cpu, 
  Users, 
  FileText, 
  Layers, 
  CreditCard,
  Calculator,
  HelpCircle,
  BookOpen,
  Building,
  Sparkles,
  Zap,
  Play,
  Activity,
  Globe2,
  Lock,
  ArrowUpRight
} from 'lucide-react';
import { SITE_DATA } from '../../data/site';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileSubmenu(null);
  }, [location.pathname]);

  const navItems = SITE_DATA.navigation;

  // Icon mapping for rich dropdown items
  const getSubItemIcon = (label: string) => {
    if (label.includes('Live Account')) return <Zap className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Demo')) return <Play className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Plans')) return <Layers className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Safety')) return <ShieldCheck className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Deposit')) return <CreditCard className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Forex')) return <TrendingUp className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Share')) return <Layers className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Commodities')) return <Sparkles className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('VPS') || label.includes('Client Services')) return <Cpu className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Calculator')) return <Calculator className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Pre-Test')) return <HelpCircle className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Analysis') || label.includes('News')) return <BookOpen className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Questions') || label.includes('FAQ')) return <HelpCircle className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('About')) return <Building className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Architecture')) return <Cpu className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Representatives')) return <Globe2 className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Affiliates') || label.includes('Brokers')) return <Users className="w-4 h-4 text-[#B6F35A]" />;
    if (label.includes('Contact')) return <FileText className="w-4 h-4 text-[#B6F35A]" />;
    return <ArrowRight className="w-4 h-4 text-[#B6F35A]" />;
  };

  // Promo card data per dropdown
  const getDropdownPromo = (navLabel: string) => {
    switch (navLabel) {
      case 'Accounts':
        return {
          tag: 'FEATURED TIER',
          title: 'Starter Live Account',
          desc: 'Deploy automated EAs with institutional stop-loss from $250.',
          ctaText: 'Open Live ($250)',
          ctaHref: '/register/live',
          stat: 'Min $250 Deposit',
        };
      case 'Trading':
        return {
          tag: 'SUB-12MS EXECUTION',
          title: 'Equinix LD4 Fiber Hub',
          desc: 'Raw ECN liquidity with spreads starting from 0.0 pips.',
          ctaText: 'Explore Forex Pairs',
          ctaHref: '/products/forex',
          stat: 'Raw 0.0 Pips',
        };
      case 'Tools & Media':
        return {
          tag: 'LIVE SIMULATOR',
          title: 'FX Profit & Loss Calculator',
          desc: 'Calculate pip value, risk margins, and returns in real-time.',
          ctaText: 'Launch Calculator',
          ctaHref: '/calculator',
          stat: 'Live Pips & Margin',
        };
      case 'Company':
        return {
          tag: 'INSTITUTIONAL TRUST',
          title: 'BVI & USA Regulated',
          desc: '100% Tier-1 client segregated banking & negative balance protection.',
          ctaText: 'Why Forex Bank Pro',
          ctaHref: '/about',
          stat: 'BVI #1024298',
        };
      default:
        return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* Top High-Trust Market Utility Bar */}
      <div className={`hidden md:block bg-[#080808]/90 border-b border-white/[0.06] text-[11px] text-zinc-400 py-1.5 transition-all duration-300 ${
        scrolled ? 'opacity-0 -translate-y-full h-0 py-0 overflow-hidden border-none' : 'opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Real-time Live Market Pulse */}
          <div className="flex items-center gap-4">
            <div className="inline-flex items-center gap-2 text-zinc-300 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B6F35A] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B6F35A]"></span>
              </span>
              <span className="tracking-wide uppercase font-semibold text-[#B6F35A]">24/5 Live Markets</span>
            </div>
            <span className="text-zinc-600">|</span>
            <span className="hidden lg:inline text-zinc-400">
              EUR/USD <strong className="text-white font-mono">1.0842</strong> <span className="text-[#B6F35A] font-mono">+0.03%</span>
            </span>
            <span className="hidden xl:inline text-zinc-400">
              XAU/USD <strong className="text-white font-mono">2,684.50</strong> <span className="text-[#B6F35A] font-mono">+0.16%</span>
            </span>
            <span className="hidden lg:inline text-zinc-400">
              Equinix LD4 Latency: <strong className="text-[#B6F35A] font-mono">12ms</strong>
            </span>
          </div>

          {/* Right: Quick Trust Signals & Fast Links */}
          <div className="flex items-center gap-4 text-zinc-400">
            <span className="text-zinc-500 hidden sm:inline">
              Regulated BVI #1024298 · Austin, TX
            </span>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <Link to="/calculator" className="hover:text-[#B6F35A] transition-colors flex items-center gap-1">
              <span>FX Calculator</span>
            </Link>
            <Link to="/register/demo" className="text-[#B6F35A] hover:underline font-semibold flex items-center gap-1">
              <span>Free Demo ($10k)</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0B0B0B]/92 backdrop-blur-xl border-b border-[#242424] shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-3' 
          : 'bg-[#0B0B0B]/50 backdrop-blur-md border-b border-white/[0.08] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* 1. Brand Logo Zone: Eye-Catching Futuristic Monogram */}
            <Link 
              to="/" 
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B6F35A] rounded-xl"
              aria-label="Forex Bank Pro Homepage"
            >
              {/* Geometric High-Tech Logo Icon */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#141414] to-[#1E1E1E] border border-[#2E2E2E] group-hover:border-[#B6F35A] flex items-center justify-center transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(182,243,90,0.3)]">
                <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer geometric shield facet */}
                  <path d="M5 8L16 3L27 8V18C27 24 16 29 16 29C16 29 5 24 5 18V8Z" stroke="#B6F35A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="rgba(182,243,90,0.06)" />
                  {/* Candlestick ascending chevron */}
                  <path d="M12 17L15 13L18 16L21 11" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 11H17M21 11V15" stroke="#B6F35A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Wordmark typography */}
              <div className="flex flex-col">
                <div className="text-white font-extrabold text-xl tracking-tight leading-none flex items-center">
                  <span>ForexBank</span>
                  <span className="text-[#B6F35A] ml-0.5">Pro</span>
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-zinc-400 font-semibold uppercase tracking-wider">
                    Automated EA Desk
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#B6F35A] inline-block"></span>
                  <span className="text-[9px] text-[#B6F35A] font-mono font-bold">24/5</span>
                </div>
              </div>
            </Link>

            {/* 2. Streamlined Navigation Links (High-Efficiency 5 Pillars matching Reference Image) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = activeDropdown === item.label;
                const isHome = item.label === 'Home';
                const isActiveRoute = isHome 
                  ? location.pathname === '/' 
                  : location.pathname.startsWith(item.href) || item.children?.some(c => location.pathname === c.href);

                if (hasChildren) {
                  const promo = getDropdownPromo(item.label);

                  return (
                    <div 
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold transition-all rounded-xl relative group ${
                          isOpen || isActiveRoute 
                            ? 'text-white' 
                            : 'text-zinc-300 hover:text-white'
                        }`}
                        aria-expanded={isOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#B6F35A]' : 'text-zinc-500 group-hover:text-zinc-300'
                        }`} />

                        {/* Active Neon Lime Dot Indicator matching reference layout */}
                        {isActiveRoute && (
                          <motion.div 
                            layoutId="activeNavDot"
                            className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B6F35A] shadow-[0_0_8px_#B6F35A]"
                          />
                        )}
                      </button>

                      {/* Rich Megamenu Dropdown Panel */}
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                            className="absolute top-full -left-12 mt-2 w-[520px] rounded-3xl bg-[#121212]/98 border border-[#2E2E2E] shadow-[0_20px_60px_rgba(0,0,0,0.85)] z-50 backdrop-blur-2xl p-4 overflow-hidden"
                          >
                            <div className="grid grid-cols-12 gap-4">
                              
                              {/* Left Items Column */}
                              <div className="col-span-7 space-y-1">
                                <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-wider px-3 py-1 mb-1 flex items-center gap-1.5">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
                                  <span>{item.label} Directory</span>
                                </div>

                                {item.children!.map((subItem) => (
                                  <Link
                                    key={subItem.label}
                                    to={subItem.href}
                                    className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-[#1A1A1A] border border-transparent hover:border-[#2C2C2C] transition-all group/item"
                                  >
                                    <div className="w-8 h-8 rounded-xl bg-[#181818] border border-[#262626] group-hover/item:border-[#B6F35A] flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                                      {getSubItemIcon(subItem.label)}
                                    </div>
                                    <div className="min-w-0">
                                      <div className="text-xs font-bold text-zinc-200 group-hover/item:text-[#B6F35A] transition-colors leading-tight">
                                        {subItem.label}
                                      </div>
                                      {subItem.description && (
                                        <div className="text-[11px] text-zinc-500 group-hover/item:text-zinc-400 mt-0.5 line-clamp-1 leading-snug">
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                  </Link>
                                ))}
                              </div>

                              {/* Right Promo Feature Card */}
                              {promo && (
                                <div className="col-span-5 rounded-2xl bg-gradient-to-br from-[#181D14] to-[#141414] border border-[#B6F35A]/30 p-4 flex flex-col justify-between">
                                  <div>
                                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#B6F35A]/15 text-[#B6F35A] text-[9px] font-bold uppercase tracking-wider mb-2">
                                      <Sparkles className="w-3 h-3" />
                                      <span>{promo.tag}</span>
                                    </div>
                                    <div className="text-sm font-bold text-white mb-1.5 leading-snug">
                                      {promo.title}
                                    </div>
                                    <p className="text-[11px] text-zinc-400 leading-relaxed mb-3">
                                      {promo.desc}
                                    </p>
                                  </div>

                                  <div className="pt-3 border-t border-white/10">
                                    <div className="text-[10px] font-mono text-[#B6F35A] font-semibold mb-2">
                                      {promo.stat}
                                    </div>
                                    <Link
                                      to={promo.ctaHref}
                                      className="w-full py-2 px-3 rounded-xl bg-[#B6F35A] hover:bg-[#C4F675] text-[#0B0B0B] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95"
                                    >
                                      <span>{promo.ctaText}</span>
                                      <ArrowRight className="w-3.5 h-3.5" />
                                    </Link>
                                  </div>
                                </div>
                              )}

                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                // Single Nav Link (e.g. Home)
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`px-3.5 py-2 text-sm font-semibold transition-all rounded-xl relative group ${
                      isActiveRoute ? 'text-white' : 'text-zinc-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActiveRoute && (
                      <motion.div 
                        layoutId="activeNavDot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#B6F35A] shadow-[0_0_8px_#B6F35A]"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 3. Action Zone (High Attention & Grabbing Client Conversion) */}
            <div className="hidden sm:flex items-center gap-4">
              
              {/* Secondary CTA: Login with hover arrow slide */}
              <Link
                to="/login"
                className="group flex items-center gap-1.5 text-sm font-semibold text-zinc-300 hover:text-white px-3 py-2 transition-colors rounded-xl focus-visible:ring-2 focus-visible:ring-[#B6F35A]"
              >
                <span>Login</span>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-[#B6F35A] transition-all group-hover:translate-x-1" />
              </Link>
              
              {/* Primary CTA: Neon Lime Glowing Hero Button matching Reference */}
              <Link
                to="/register/live"
                className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#B6F35A] text-[#0B0B0B] text-sm font-extrabold tracking-tight hover:bg-[#C4F675] hover:scale-[1.04] active:scale-[0.98] transition-all duration-200 shadow-[0_0_25px_rgba(182,243,90,0.4)] focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>Open Account</span>
                <div className="w-5 h-5 rounded-full bg-[#0B0B0B]/15 flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0B]" />
                </div>
              </Link>

            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-2xl bg-[#141414] border border-[#2A2A2A] text-zinc-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#B6F35A]"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#B6F35A]" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer (Polished, Fast & Complete) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="lg:hidden border-b border-[#2A2A2A] bg-[#0B0B0B]/98 backdrop-blur-3xl overflow-hidden px-4 pt-4 pb-8 max-h-[88vh] overflow-y-auto shadow-2xl"
          >
            {/* Quick Status Pill */}
            <div className="flex items-center justify-between p-3 rounded-2xl bg-[#141414] border border-[#242424] mb-4 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#B6F35A] animate-pulse"></span>
                <span className="text-white font-bold">24/5 Live EA Surveillance</span>
              </div>
              <span className="text-[#B6F35A] font-mono font-semibold">Min $250</span>
            </div>

            <div className="space-y-1.5">
              {navItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isSubmenuOpen = mobileSubmenu === item.label;

                if (hasChildren) {
                  return (
                    <div key={item.label} className="rounded-2xl overflow-hidden border border-transparent">
                      <button
                        type="button"
                        onClick={() => setMobileSubmenu(isSubmenuOpen ? null : item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left text-sm font-bold text-zinc-200 hover:bg-[#141414] rounded-2xl transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          isSubmenuOpen ? 'rotate-180 text-[#B6F35A]' : 'text-zinc-500'
                        }`} />
                      </button>
                      
                      <AnimatePresence>
                        {isSubmenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-3 pr-2 py-2 space-y-1 bg-[#141414]/70 rounded-2xl my-1 border border-[#222222]"
                          >
                            {item.children!.map((sub) => (
                              <Link
                                key={sub.label}
                                to={sub.href}
                                className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-zinc-300 hover:text-[#B6F35A] rounded-xl hover:bg-[#1E1E1E] transition-colors"
                              >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
                                <span>{sub.label}</span>
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    className="block px-4 py-3 text-sm font-bold text-zinc-200 hover:text-[#B6F35A] hover:bg-[#141414] rounded-2xl transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action CTAs */}
            <div className="pt-6 mt-4 border-t border-[#222222] flex flex-col gap-3">
              <Link
                to="/register/live"
                className="w-full py-3.5 flex items-center justify-center gap-2 rounded-full bg-[#B6F35A] text-[#0B0B0B] font-extrabold text-sm hover:bg-[#C4F675] shadow-lg"
              >
                <span>Open Live Account ($250 Min)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <div className="grid grid-cols-2 gap-2">
                <Link
                  to="/register/demo"
                  className="py-2.5 text-center rounded-xl bg-[#141414] border border-[#2A2A2A] text-zinc-300 text-xs font-semibold hover:border-zinc-500"
                >
                  Free Demo ($10k)
                </Link>
                <Link
                  to="/login"
                  className="py-2.5 text-center rounded-xl bg-[#141414] border border-[#2A2A2A] text-zinc-300 text-xs font-semibold hover:border-zinc-500"
                >
                  Client Login
                </Link>
              </div>

              <div className="text-center text-[11px] text-zinc-500 pt-2">
                24/5 Direct Assistance: <a href="mailto:info@forexbankpro.com" className="text-[#B6F35A] underline">info@forexbankpro.com</a>
              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
