import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { SITE_DATA } from '../../data/site';

export const MediaSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#141414] border-y border-[#202020] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with See All Link matching reference */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#B6F35A] mb-1">
              Blog
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              News & Analysis
            </h2>
          </div>

          <Link
            to="/media"
            className="group inline-flex items-center gap-1.5 text-xs font-bold text-[#B6F35A] hover:underline"
          >
            <span>See All</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.mediaArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="rounded-3xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#B6F35A] overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Image Container with Zoom Effect */}
                <div className="relative h-56 overflow-hidden bg-[#111111]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  
                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#0B0B0B]/85 backdrop-blur-md border border-[#2A2A2A] text-[10px] font-bold text-[#B6F35A]">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6">
                  {/* Unboxed Metadata with separators (Strict Zero-Pill Compliance) */}
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-[#B6F35A] transition-colors line-clamp-2 mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 pb-6 pt-2 border-t border-[#242424]">
                <Link
                  to={`/media#${article.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#B6F35A] group-hover:translate-x-1 transition-all"
                >
                  <span>Continue Reading</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
};
