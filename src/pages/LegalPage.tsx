import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldAlert, FileText, Lock, CheckCircle2 } from 'lucide-react';
import { SITE_DATA } from '../data/site';

export const LegalPage: React.FC = () => {
  const location = useLocation();
  const path = location.pathname;

  const isPrivacy = path === '/privacy';
  const isTerms = path === '/terms';
  const isRisk = path === '/risk-disclosure';

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#141414] border border-[#242424] rounded-2xl w-fit mb-12 overflow-x-auto max-w-full">
          <Link
            to="/privacy"
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              isPrivacy ? 'bg-[#B6F35A] text-[#0B0B0B]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              isTerms ? 'bg-[#B6F35A] text-[#0B0B0B]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Terms of Service
          </Link>
          <Link
            to="/risk-disclosure"
            className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
              isRisk ? 'bg-[#B6F35A] text-[#0B0B0B]' : 'text-zinc-400 hover:text-white'
            }`}
          >
            Risk Disclosure
          </Link>
        </div>

        <div className="rounded-3xl bg-[#141414] border border-[#242424] p-8 sm:p-12 shadow-2xl text-zinc-300 text-sm leading-relaxed space-y-6">
          
          {isRisk && (
            <div>
              <div className="flex items-center gap-3 text-rose-400 mb-6 pb-4 border-b border-[#242424]">
                <ShieldAlert className="w-8 h-8 text-[#B6F35A]" />
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Full Risk Disclosure Statement</h1>
                  <span className="text-xs text-zinc-400">Notice on Leveraged Foreign Exchange and CFD Products</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-200 text-xs mb-6">
                <strong>CRITICAL WARNING:</strong> {SITE_DATA.brand.riskWarning}
              </div>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Nature of Leveraged CFD Trading</h2>
              <p>
                Contracts for Difference (CFDs) are complex derivative financial instruments traded on margin. Trading with leverage means that a relatively small price movement in the underlying currency pair will have a disproportionately large impact on your account balance. This can work to your advantage as well as to your disadvantage.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Automated Expert Advisor (EA) Execution</h2>
              <p>
                While automated Expert Advisors remove psychological hesitation and execute according to pre-programmed statistical rules, algorithms cannot eliminate systemic market risk, unexpected black swan geopolitical developments, central bank liquidity freezes, or flash crashes. Past simulation backtest yields are not predictive of future live performance.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Suitability of Investment</h2>
              <p>
                You should not commit capital that you cannot afford to lose entirely. Prior to trading live with real money (minimum $250 deposit), assess your personal financial objectives, risk tolerance, and trading experience. If you are uncertain, please seek independent financial counsel.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">4. Corporate Entity & Governance</h2>
              <p>
                Forex Bank Pro operates under British Virgin Islands company registration #{SITE_DATA.brand.registrationNumber} ({SITE_DATA.brand.trustCompanyNumber}) with head offices at {SITE_DATA.brand.headOffice} and US registered address at {SITE_DATA.brand.registeredAddress}.
              </p>
            </div>
          )}

          {isTerms && (
            <div>
              <div className="flex items-center gap-3 text-white mb-6 pb-4 border-b border-[#242424]">
                <FileText className="w-8 h-8 text-[#B6F35A]" />
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Terms of Service & Client Agreement</h1>
                  <span className="text-xs text-zinc-400">Forex Bank Pro Platform Conditions of Use</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Acceptance of Terms</h2>
              <p>
                By creating an account, depositing capital, or accessing Expert Advisor tools provided by Forex Bank Pro, you agree to be bound by these Terms of Service. If you do not accept these terms, you must refrain from utilizing our services.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Account Opening & KYC Requirements</h2>
              <p>
                Live trading accounts require identity verification (Know Your Customer) and anti-money laundering (AML) screening in compliance with international standard protocols. Accounts are funded in USD, EUR, or GBP with an initial deposit minimum of $250.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Intellectual Property</h2>
              <p>
                All algorithmic trading codes, Expert Advisor proprietary models, web designs, indicators, and calculation engines remain the exclusive intellectual property of Forex Bank Pro.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">4. Segregated Funds & Custody</h2>
              <p>
                Client funds are held in segregated bank custody at regulated Tier-1 banking partners. Negative balance protection applies to all retail live accounts.
              </p>
            </div>
          )}

          {isPrivacy && (
            <div>
              <div className="flex items-center gap-3 text-white mb-6 pb-4 border-b border-[#242424]">
                <Lock className="w-8 h-8 text-[#B6F35A]" />
                <div>
                  <h1 className="text-2xl font-extrabold text-white">Privacy & Data Protection Policy</h1>
                  <span className="text-xs text-zinc-400">Security Standards for Client Information</span>
                </div>
              </div>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">1. Data Collection & Usage</h2>
              <p>
                Forex Bank Pro collects identification details necessary to fulfill regulatory compliance, facilitate deposit/withdrawal operations, and route orders to liquidity providers.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">2. Cryptographic Security</h2>
              <p>
                All communications and portal sessions are protected by 256-bit SSL encryption. We do not store raw credit card numbers or unencrypted passwords.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">3. Third-Party Sharing</h2>
              <p>
                We never sell client data to third-party marketing brokers. Data is shared exclusively with verified payment gateways, regulatory auditors, and banking partners strictly to settle transactions.
              </p>

              <h2 className="text-lg font-bold text-white mt-6 mb-2">4. Inquiries & Data Rights</h2>
              <p>
                For data export or deletion requests, contact our compliance officer at <a href={`mailto:${SITE_DATA.brand.contactEmail}`} className="text-[#B6F35A] underline">{SITE_DATA.brand.contactEmail}</a>.
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
