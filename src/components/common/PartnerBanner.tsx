import React from 'react';
import { SITE_DATA } from '../../data/site';

export const PartnerBanner: React.FC = () => {
  const logos = [
    { name: 'EQUINIX LD4', label: 'Equinix LD4 London', icon: '⚡' },
    { name: 'ONEZERO', label: 'oneZero Hub Engine', icon: '◈' },
    { name: 'FASTMATCH', label: 'FastMatch FX ECN', icon: '▲' },
    { name: 'METAQUOTES', label: 'MetaQuotes MT5', icon: '◆' },
    { name: 'CURRENEX', label: 'Currenex Gateway', icon: '●' },
    { name: 'LMAX EXCHANGE', label: 'LMAX Institutional', icon: '■' },
  ];

  const renderLogoTrack = (keyPrefix: string) => (
    <div className="flex items-center gap-14 shrink-0 pr-14">
      {logos.map((item, index) => (
        <div 
          key={`${keyPrefix}-${item.name}-${index}`}
          className="flex items-center gap-3 text-[#0B0B0B] font-extrabold tracking-tight text-lg sm:text-xl shrink-0 opacity-95 hover:opacity-100 transition-opacity cursor-default"
        >
          <span className="text-xl sm:text-2xl font-mono leading-none">{item.icon}</span>
          <span className="tracking-tighter uppercase font-black">{item.name}</span>
          <span className="text-[11px] font-bold tracking-normal bg-[#0B0B0B]/10 px-1.5 py-0.5 rounded text-zinc-900 ml-1 hidden sm:inline">
            [Partner]
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <section className="w-full bg-[#B6F35A] py-5 sm:py-6 overflow-hidden select-none relative group border-y border-[#B6F35A] shadow-md">
      {/* Infinite Smooth Scrolling Track (Track 1 + Track 2 seamlessly sliding -50%) */}
      <div className="animate-marquee-infinite flex items-center">
        {renderLogoTrack('partner-track-1')}
        {renderLogoTrack('partner-track-2')}
      </div>
    </section>
  );
};
