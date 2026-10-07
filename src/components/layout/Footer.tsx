import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, MapPin, ShieldAlert, Globe, ExternalLink } from 'lucide-react';
import { SITE_DATA } from '../../data/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0B0B] border-t border-[#1F1F1F] text-zinc-400 text-sm relative">
      {/* Risk Warning Band */}
      <div className="bg-[#121212] border-b border-[#242424] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-[#B6F35A] shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs text-zinc-300 leading-relaxed">
            <strong className="text-white uppercase tracking-wider font-semibold mr-1">Regulatory Risk Warning:</strong>
            {SITE_DATA.brand.riskWarning}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-[#1F1F1F]">
          
          {/* Col 1: Brand & Registration */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#141414] border border-[#2A2A2A] flex items-center justify-center">
                <span className="font-extrabold text-[#B6F35A] text-sm tracking-tighter">FB</span>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                ForexBank<span className="text-[#B6F35A]">Pro</span>
              </span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Institutional-grade automated Expert Advisor trading platform delivering 24-hour algorithmic execution, millisecond liquidity access, and strict risk discipline.
            </p>

            <div className="pt-2 space-y-2 text-xs text-zinc-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#B6F35A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-zinc-200">US Operations:</strong> {SITE_DATA.brand.registeredAddress}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-3.5 h-3.5 text-[#B6F35A] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-zinc-200">Head Office:</strong> {SITE_DATA.brand.headOffice}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#B6F35A] shrink-0" />
                <a href={`mailto:${SITE_DATA.brand.contactEmail}`} className="text-[#B6F35A] hover:underline">
                  {SITE_DATA.brand.contactEmail}
                </a>
              </div>
            </div>

            <div className="text-[11px] text-zinc-400 pt-1 border-t border-[#1A1A1A]">
              Corporate Reg: {SITE_DATA.brand.registrationNumber} · {SITE_DATA.brand.trustCompanyNumber}
            </div>
          </div>

          {/* Col 2: Products & Technology */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
              Trading Products
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link to="/products/forex" className="hover:text-[#B6F35A] transition-colors">Forex Major & Minor Pairs</Link>
              </li>
              <li>
                <Link to="/products/share-cfds" className="hover:text-[#B6F35A] transition-colors">Global Share CFDs</Link>
              </li>
              <li>
                <Link to="/products/commodities" className="hover:text-[#B6F35A] transition-colors">Commodities & Metals (Gold/Oil)</Link>
              </li>
              <li>
                <Link to="/plans" className="hover:text-[#B6F35A] transition-colors">Account Plans & Tiers</Link>
              </li>
              <li>
                <Link to="/register/live" className="hover:text-[#B6F35A] transition-colors">Live Account from $250</Link>
              </li>
              <li>
                <Link to="/register/demo" className="hover:text-[#B6F35A] transition-colors">Free Demo Account ($10k)</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Research, Tools & Education */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
              Tools & Knowledge
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link to="/calculator" className="hover:text-[#B6F35A] transition-colors">Forex Profit / Loss Calculator</Link>
              </li>
              <li>
                <Link to="/pre-test" className="hover:text-[#B6F35A] transition-colors">Trading Knowledge Pre-Test</Link>
              </li>
              <li>
                <Link to="/media" className="hover:text-[#B6F35A] transition-colors">Algorithmic Insights & Blog</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#B6F35A] transition-colors">Why Forex Bank Pro</Link>
              </li>
              <li>
                <Link to="/about#our-system" className="hover:text-[#B6F35A] transition-colors">Our Algorithmic Architecture</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-[#B6F35A] transition-colors">Frequently Asked Questions</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Safety & Partnerships */}
          <div>
            <h4 className="text-white font-bold text-sm tracking-tight mb-4 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A]"></span>
              Client Trust & Partners
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              <li>
                <Link to="/funds/safety" className="hover:text-[#B6F35A] transition-colors">Safety of Funds (Segregated Accounts)</Link>
              </li>
              <li>
                <Link to="/funds/deposit" className="hover:text-[#B6F35A] transition-colors">Deposit & Withdrawal Gateways</Link>
              </li>
              <li>
                <Link to="/funds/client-services" className="hover:text-[#B6F35A] transition-colors">Client Support & Low-Latency VPS</Link>
              </li>
              <li>
                <Link to="/partnership/representatives" className="hover:text-[#B6F35A] transition-colors">Regional Representatives Program</Link>
              </li>
              <li>
                <Link to="/partnership/affiliates" className="hover:text-[#B6F35A] transition-colors">Introducing Broker / Affiliate Program</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#B6F35A] transition-colors">Contact Our Support Desk</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>© {new Date().getFullYear()} Forex Bank Pro. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-[#B6F35A] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#B6F35A] transition-colors">Terms & Conditions</Link>
            <Link to="/risk-disclosure" className="hover:text-[#B6F35A] transition-colors">Risk Disclosure</Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-zinc-400">Austin, USA · Road Town, BVI</span>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#141414] hover:bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B6F35A] text-[#B6F35A] transition-all group focus:outline-none focus:ring-2 focus:ring-[#B6F35A]"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
