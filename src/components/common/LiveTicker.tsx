import React, { useState, useEffect } from 'react';
import { TrendingUp, TrendingDown, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { SITE_DATA } from '../../data/site';

interface TickerState {
  symbol: string;
  name: string;
  price: number;
  change: number;
  changePercent: number;
  direction: 'up' | 'down' | 'neutral';
  decimals: number;
}

export const LiveTicker: React.FC = () => {
  const [ticks, setTicks] = useState<TickerState[]>([
    { symbol: 'EUR/USD', name: 'Euro / USD', price: 1.0842, change: 0.0003, changePercent: 0.03, direction: 'up', decimals: 4 },
    { symbol: 'GBP/USD', name: 'British Pound / USD', price: 1.2915, change: -0.0007, changePercent: -0.05, direction: 'down', decimals: 4 },
    { symbol: 'USD/JPY', name: 'USD / Japanese Yen', price: 151.68, change: 0.14, changePercent: 0.09, direction: 'up', decimals: 2 },
    { symbol: 'XAU/USD', name: 'Spot Gold / USD', price: 2684.50, change: 4.20, changePercent: 0.16, direction: 'up', decimals: 2 },
    { symbol: 'AUD/USD', name: 'Aussie / USD', price: 0.6582, change: 0.0004, changePercent: 0.06, direction: 'up', decimals: 4 },
    { symbol: 'USD/CHF', name: 'USD / Swiss Franc', price: 0.8645, change: -0.0002, changePercent: -0.02, direction: 'down', decimals: 4 },
  ]);

  const [flashingSymbol, setFlashingSymbol] = useState<string | null>(null);

  useEffect(() => {
    // Simulated price updates every 2.6 seconds - architectural hook for WebSocket stream
    const interval = setInterval(() => {
      setTicks((prevTicks) => {
        const randomIndex = Math.floor(Math.random() * prevTicks.length);
        const itemToUpdate = prevTicks[randomIndex];
        const isUp = Math.random() > 0.45;
        const deltaMultiplier = isUp ? 1 : -1;
        
        let delta = 0;
        if (itemToUpdate.decimals === 4) {
          delta = (Math.floor(Math.random() * 5) + 1) * 0.0001 * deltaMultiplier;
        } else if (itemToUpdate.symbol === 'USD/JPY') {
          delta = (Math.floor(Math.random() * 6) + 1) * 0.02 * deltaMultiplier;
        } else {
          // Gold
          delta = (Math.floor(Math.random() * 8) + 1) * 0.25 * deltaMultiplier;
        }

        const newPrice = Number((itemToUpdate.price + delta).toFixed(itemToUpdate.decimals));
        const newChange = Number((itemToUpdate.change + delta).toFixed(itemToUpdate.decimals));
        const newPct = Number(((newChange / newPrice) * 100).toFixed(2));

        setFlashingSymbol(itemToUpdate.symbol);
        setTimeout(() => setFlashingSymbol(null), 850);

        return prevTicks.map((t, idx) => 
          idx === randomIndex
            ? {
                ...t,
                price: newPrice,
                change: newChange,
                changePercent: newPct,
                direction: delta >= 0 ? 'up' : 'down'
              }
            : t
        );
      });
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  const renderTickerList = (keyPrefix: string) => (
    <div className="flex items-center gap-8 shrink-0 pr-8">
      {ticks.map((tick, index) => {
        const isFlashing = flashingSymbol === tick.symbol;
        const isPositive = tick.change >= 0;

        return (
          <div 
            key={`${keyPrefix}-${tick.symbol}-${index}`} 
            className={`inline-flex items-center gap-3 px-4 py-1.5 rounded-xl transition-all duration-300 shrink-0 ${
              isFlashing 
                ? isPositive 
                  ? 'bg-[#B6F35A]/20 text-white' 
                  : 'bg-red-500/20 text-white'
                : 'bg-[#181818]/60 text-zinc-300 border border-white/5'
            }`}
          >
            <div className="flex items-center gap-1.5 font-bold text-sm tracking-tight text-white">
              <span>{tick.symbol}</span>
              <span className="text-[10px] text-zinc-500 font-normal hidden sm:inline">
                {tick.name}
              </span>
            </div>

            <span className={`font-mono text-sm font-semibold tabular-nums ${
              isPositive ? 'text-[#B6F35A]' : 'text-rose-400'
            }`}>
              {tick.price.toFixed(tick.decimals)}
            </span>

            <div className={`flex items-center text-xs font-mono tabular-nums ${
              isPositive ? 'text-[#B6F35A]' : 'text-rose-400'
            }`}>
              {isPositive ? (
                <ArrowUpRight className="w-3.5 h-3.5" />
              ) : (
                <ArrowDownRight className="w-3.5 h-3.5" />
              )}
              <span>{isPositive ? '+' : ''}{tick.changePercent.toFixed(2)}%</span>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="w-full bg-[#101010] border-y border-[#202020] overflow-hidden py-2 select-none relative group">
      {/* Edge gradient masks for seamless fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#101010] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#101010] to-transparent z-10 pointer-events-none" />

      {/* Infinite Smooth Scrolling Track (Track 1 + Track 2 translates -50% seamlessly) */}
      <div className="animate-marquee-ticker flex items-center">
        {renderTickerList('track-1')}
        {renderTickerList('track-2')}
      </div>
    </div>
  );
};
