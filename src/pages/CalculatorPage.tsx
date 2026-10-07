import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRightLeft, TrendingUp, TrendingDown, DollarSign, Info, ShieldAlert } from 'lucide-react';
import { SITE_DATA } from '../data/site';

interface PairConfig {
  symbol: string;
  name: string;
  defaultOpen: number;
  defaultClose: number;
  pipMultiplier: number;
  pipDecimal: number;
  contractSize: number;
}

const PAIRS: Record<string, PairConfig> = {
  'EUR/USD': { symbol: 'EUR/USD', name: 'Euro / US Dollar', defaultOpen: 1.0850, defaultClose: 1.0920, pipMultiplier: 10000, pipDecimal: 4, contractSize: 100000 },
  'GBP/USD': { symbol: 'GBP/USD', name: 'Pound / US Dollar', defaultOpen: 1.2900, defaultClose: 1.2980, pipMultiplier: 10000, pipDecimal: 4, contractSize: 100000 },
  'USD/JPY': { symbol: 'USD/JPY', name: 'US Dollar / Yen', defaultOpen: 151.50, defaultClose: 150.80, pipMultiplier: 100, pipDecimal: 2, contractSize: 100000 },
  'AUD/USD': { symbol: 'AUD/USD', name: 'Aussie / US Dollar', defaultOpen: 0.6550, defaultClose: 0.6610, pipMultiplier: 10000, pipDecimal: 4, contractSize: 100000 },
  'XAU/USD': { symbol: 'XAU/USD', name: 'Gold / US Dollar', defaultOpen: 2680.00, defaultClose: 2695.50, pipMultiplier: 10, pipDecimal: 2, contractSize: 100 },
};

export const CalculatorPage: React.FC = () => {
  const [selectedPair, setSelectedPair] = useState<string>('EUR/USD');
  const [direction, setDirection] = useState<'buy' | 'sell'>('buy');
  const [lots, setLots] = useState<number>(1.0);
  const [openPrice, setOpenPrice] = useState<number>(PAIRS['EUR/USD'].defaultOpen);
  const [closePrice, setClosePrice] = useState<number>(PAIRS['EUR/USD'].defaultClose);
  const [accountCurrency, setAccountCurrency] = useState<'USD' | 'EUR' | 'GBP'>('USD');

  const currentPairConfig = PAIRS[selectedPair] || PAIRS['EUR/USD'];

  const handlePairChange = (sym: string) => {
    setSelectedPair(sym);
    const cfg = PAIRS[sym];
    if (cfg) {
      setOpenPrice(cfg.defaultOpen);
      setClosePrice(cfg.defaultClose);
    }
  };

  const calculation = useMemo(() => {
    const isBuy = direction === 'buy';
    const priceDiff = isBuy ? (closePrice - openPrice) : (openPrice - closePrice);
    const pips = priceDiff * currentPairConfig.pipMultiplier;

    let profitUSD = 0;
    if (selectedPair === 'USD/JPY') {
      // USD/JPY pip value in USD = (0.01 / closePrice) * contractSize * lots
      profitUSD = (priceDiff / closePrice) * currentPairConfig.contractSize * lots;
    } else {
      // EUR/USD, GBP/USD, AUD/USD, XAU/USD where quote is USD:
      profitUSD = priceDiff * currentPairConfig.contractSize * lots;
    }

    // Convert to chosen account currency (approx exchange rates for conversion display)
    let finalProfit = profitUSD;
    if (accountCurrency === 'EUR') finalProfit = profitUSD / 1.085;
    if (accountCurrency === 'GBP') finalProfit = profitUSD / 1.29;

    const pipValueInAccount = (finalProfit / (pips || 1)) || 10;

    return {
      pips: Number(pips.toFixed(1)),
      profit: Number(finalProfit.toFixed(2)),
      pipValue: Number(Math.abs(pipValueInAccount).toFixed(2)),
      isProfit: finalProfit >= 0,
    };
  }, [selectedPair, direction, lots, openPrice, closePrice, accountCurrency, currentPairConfig]);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Risk Modeling</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Forex Profit & Loss <span className="text-[#B6F35A]">Calculator</span>
          </h1>
          <p className="mt-3 text-sm text-zinc-400">
            Simulate trade execution, lot sizing, and pip values in real-time before deploying live automated EA strategies.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-[#141414] border border-[#242424] rounded-3xl p-6 sm:p-8 shadow-2xl">
            <h2 className="text-base font-bold text-white mb-6 flex items-center justify-between">
              <span>Trade Parameters</span>
              <span className="text-xs text-zinc-500 font-mono">1 Lot = {currentPairConfig.contractSize.toLocaleString()} units</span>
            </h2>

            <div className="space-y-5">
              
              {/* Pair Selection */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Instrument / Pair
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {Object.keys(PAIRS).map((sym) => (
                    <button
                      key={sym}
                      type="button"
                      onClick={() => handlePairChange(sym)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                        selectedPair === sym
                          ? 'bg-[#B6F35A] text-[#0B0B0B] shadow-md'
                          : 'bg-[#1C1C1C] text-zinc-300 border border-[#2E2E2E] hover:border-zinc-500'
                      }`}
                    >
                      {sym}
                    </button>
                  ))}
                </div>
              </div>

              {/* Order Direction (Buy / Sell) */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Direction
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setDirection('buy')}
                    className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      direction === 'buy'
                        ? 'bg-[#B6F35A] text-[#0B0B0B] shadow-md'
                        : 'bg-[#1A1A1A] text-zinc-300 border border-[#2E2E2E]'
                    }`}
                  >
                    <TrendingUp className="w-4 h-4" />
                    <span>BUY (Long)</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setDirection('sell')}
                    className={`py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      direction === 'sell'
                        ? 'bg-rose-500 text-white shadow-md'
                        : 'bg-[#1A1A1A] text-zinc-300 border border-[#2E2E2E]'
                    }`}
                  >
                    <TrendingDown className="w-4 h-4" />
                    <span>SELL (Short)</span>
                  </button>
                </div>
              </div>

              {/* Lot Size */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-zinc-300 uppercase tracking-wider">
                    Volume (Standard Lots)
                  </label>
                  <span className="text-xs font-mono font-bold text-[#B6F35A]">{lots} Lots</span>
                </div>
                <input
                  type="range"
                  min="0.01"
                  max="10.0"
                  step="0.01"
                  value={lots}
                  onChange={(e) => setLots(parseFloat(e.target.value))}
                  className="w-full accent-[#B6F35A] bg-[#222222] h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-zinc-400 mt-1">
                  <span>0.01 Micro</span>
                  <span>1.0 Standard</span>
                  <span>10.0 Institutional</span>
                </div>
              </div>

              {/* Open Price & Close Price Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Open Price
                  </label>
                  <input
                    type="number"
                    step={1 / currentPairConfig.pipMultiplier}
                    value={openPrice}
                    onChange={(e) => setOpenPrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-2.5 text-sm font-mono text-white outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                    Close Price
                  </label>
                  <input
                    type="number"
                    step={1 / currentPairConfig.pipMultiplier}
                    value={closePrice}
                    onChange={(e) => setClosePrice(parseFloat(e.target.value) || 0)}
                    className="w-full bg-[#1A1A1A] border border-[#2A2A2A] focus:border-[#B6F35A] focus:ring-1 focus:ring-[#B6F35A] rounded-xl px-4 py-2.5 text-sm font-mono text-white outline-none"
                  />
                </div>
              </div>

              {/* Account Currency */}
              <div>
                <label className="block text-xs font-semibold text-zinc-300 uppercase tracking-wider mb-2">
                  Account Currency
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['USD', 'EUR', 'GBP'] as const).map((curr) => (
                    <button
                      key={curr}
                      type="button"
                      onClick={() => setAccountCurrency(curr)}
                      className={`py-2 rounded-xl text-xs font-bold transition-all ${
                        accountCurrency === curr
                          ? 'bg-zinc-100 text-zinc-900'
                          : 'bg-[#1C1C1C] text-zinc-400 border border-[#2E2E2E]'
                      }`}
                    >
                      {curr}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Results Summary Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className={`rounded-3xl p-6 sm:p-8 border transition-all duration-300 shadow-2xl ${
              calculation.isProfit 
                ? 'bg-[#121810] border-[#B6F35A]/50 shadow-[0_0_35px_rgba(182,243,90,0.15)]' 
                : 'bg-[#1A1112] border-rose-500/50 shadow-[0_0_35px_rgba(244,63,94,0.15)]'
            }`}>
              
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
                Estimated Net Outcome
              </div>

              <motion.div
                key={calculation.profit}
                initial={{ scale: 0.95, opacity: 0.8 }}
                animate={{ scale: 1, opacity: 1 }}
                className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${
                  calculation.isProfit ? 'text-[#B6F35A]' : 'text-rose-400'
                }`}
              >
                {calculation.isProfit ? '+' : ''}
                {accountCurrency === 'USD' ? '$' : accountCurrency === 'EUR' ? '€' : '£'}
                {Math.abs(calculation.profit).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
              </motion.div>

              <div className="mt-3 flex items-center gap-2 text-xs font-mono">
                <span className={`px-2 py-0.5 rounded-full font-bold ${
                  calculation.isProfit ? 'bg-[#B6F35A]/20 text-[#B6F35A]' : 'bg-rose-500/20 text-rose-400'
                }`}>
                  {calculation.isProfit ? 'PROFIT' : 'LOSS'}
                </span>
                <span className="text-zinc-300">
                  {calculation.pips >= 0 ? '+' : ''}{calculation.pips} Pips
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Pip Value (Approx):</span>
                  <span className="font-mono text-white font-semibold">
                    {accountCurrency === 'USD' ? '$' : accountCurrency === 'EUR' ? '€' : '£'}
                    {calculation.pipValue}
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Contract Position Size:</span>
                  <span className="font-mono text-white font-semibold">
                    {(lots * currentPairConfig.contractSize).toLocaleString()} units
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Automated Execution:</span>
                  <span className="text-[#B6F35A] font-semibold">Ready for EA deployment</span>
                </div>
              </div>
            </div>

            {/* Risk disclaimer note */}
            <div className="p-4 rounded-2xl bg-[#141414] border border-[#242424] text-xs text-zinc-400 flex items-start gap-3">
              <ShieldAlert className="w-4 h-4 text-[#B6F35A] shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                Calculations do not include broker overnight rollover swap fees or dynamic spreads. Past performance does not guarantee future results.
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
