import React from 'react';
import { motion } from 'motion/react';
import { Cpu, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../../data/site';

export const ServicesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-[#B6F35A]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B6F35A]" />,
    BarChart3: <BarChart3 className="w-6 h-6 text-[#B6F35A]" />
  };

  return (
    <section className="py-24 bg-[#141414] relative border-y border-[#202020]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-2 flex items-center gap-2">
              <span className="w-2 h-0.5 bg-[#B6F35A]"></span>
              <span>Proprietary Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Join a Club of Dedicated <br />
              <span className="text-[#B6F35A]">Algorithmic Traders</span>
            </h2>
          </div>

          <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
            From automated Expert Advisor architecture to real-time risk surveillance, our services are calibrated for consistent execution.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SITE_DATA.services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group p-8 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B6F35A] transition-all duration-300 relative shadow-xl hover:shadow-[0_10px_30px_rgba(182,243,90,0.15)] flex flex-col justify-between"
            >
              <div>
                {/* Icon Circle */}
                <div className="w-14 h-14 rounded-2xl bg-[#141414] border border-[#2E2E2E] group-hover:border-[#B6F35A] flex items-center justify-center mb-6 transition-colors shadow-inner">
                  {iconMap[service.icon]}
                </div>

                <div className="text-[11px] font-bold uppercase tracking-wider text-[#B6F35A] mb-1">
                  {service.badge}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#B6F35A] transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-8">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#B6F35A] shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[#262626]">
                <Link
                  to="/plans"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white group-hover:text-[#B6F35A] transition-colors"
                >
                  <span>Explore Plan Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Green Accent Line (Matching Design Reference) */}
        <div className="w-32 h-1 bg-[#B6F35A] rounded-full mt-14 mx-auto md:mx-0 shadow-[0_0_15px_#B6F35A]" />

      </div>
    </section>
  );
};
