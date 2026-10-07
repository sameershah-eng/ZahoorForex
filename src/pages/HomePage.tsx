import React from 'react';
import { Hero } from '../components/home/Hero';
import { LiveTicker } from '../components/common/LiveTicker';
import { PartnerBanner } from '../components/common/PartnerBanner';
import { WelcomeSection } from '../components/home/WelcomeSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { StatsRow } from '../components/home/StatsRow';
import { PricingSection } from '../components/home/PricingSection';
import { TestimonialSection } from '../components/home/TestimonialSection';
import { FaqSection } from '../components/home/FaqSection';
import { MediaSection } from '../components/home/MediaSection';
import { CtaBanner } from '../components/home/CtaBanner';

export const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Live ticker bar */}
      <LiveTicker />

      {/* 3. Lime partner-logo band */}
      <PartnerBanner />

      {/* 4. Welcome to Forex Bank Pro */}
      <WelcomeSection />

      {/* 5. 3 Service cards */}
      <ServicesSection />

      {/* 6. How it works */}
      <HowItWorksSection />

      {/* 7. Stats row with large lime numbers */}
      <StatsRow />

      {/* 8. Pricing plans */}
      <PricingSection />

      {/* 9. Testimonial slider */}
      <TestimonialSection />

      {/* 10. FAQ accordion */}
      <FaqSection />

      {/* 11. Media / Blog */}
      <MediaSection />

      {/* 12. CTA banner */}
      <CtaBanner />
    </div>
  );
};
