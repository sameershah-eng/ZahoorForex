import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { SITE_DATA, MediaArticle } from '../data/site';

export const MediaPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [readingArticle, setReadingArticle] = useState<MediaArticle | null>(null);

  const categories = ['all', 'Algorithmic Trading', 'Market Structure', 'Risk Management'];

  const filteredArticles = activeCategory === 'all'
    ? SITE_DATA.mediaArticles
    : SITE_DATA.mediaArticles.filter((a) => a.category === activeCategory);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B0B0B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141414] border border-[#2A2A2A] text-xs font-semibold text-[#B6F35A] mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Quantitative Research & Media</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Market Insights & <span className="text-[#B6F35A]">Algorithmic Analysis</span>
          </h1>
          <p className="mt-3 text-base text-zinc-400">
            Educational breakdowns, quantitative market theory, and volatility management insights prepared by the Forex Bank Pro research desk.
          </p>
        </div>

        {/* Filter Controls (Buttons allowed per zero-pill discipline) */}
        <div className="flex items-center gap-2 p-1.5 bg-[#141414] border border-[#242424] rounded-2xl w-fit mb-12 overflow-x-auto max-w-full">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#B6F35A] text-[#0B0B0B] shadow-sm'
                  : 'text-zinc-400 hover:text-white hover:bg-[#1A1A1A]'
              }`}
            >
              {cat === 'all' ? 'All Publications' : cat}
            </button>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="rounded-3xl bg-[#141414] border border-[#242424] hover:border-[#B6F35A] overflow-hidden group transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-[#111111]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full bg-[#0B0B0B]/80 backdrop-blur-md text-[10px] font-bold text-[#B6F35A] border border-[#262626]">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  {/* Clean unboxed metadata with separators */}
                  <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
                    <span>{article.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.author}</span>
                    <span aria-hidden="true">·</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h2 className="text-lg font-bold text-white group-hover:text-[#B6F35A] transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-[#222222]">
                <button
                  onClick={() => setReadingArticle(article)}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#B6F35A] hover:underline"
                >
                  <span>Read Article Analysis</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reading Article Modal */}
        <AnimatePresence>
          {readingArticle && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-[#141414] border border-[#2A2A2A] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-10 relative shadow-2xl"
              >
                <button
                  onClick={() => setReadingArticle(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-[#1F1F1F] text-zinc-400 hover:text-white"
                  aria-label="Close reading view"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="text-[11px] font-bold text-[#B6F35A] uppercase tracking-wider mb-2">
                  {readingArticle.category}
                </div>
                <h2 className="text-2xl font-extrabold text-white mb-4 pr-6">
                  {readingArticle.title}
                </h2>
                
                <div className="flex items-center gap-2 text-xs text-zinc-500 mb-6 pb-4 border-b border-[#242424]">
                  <span>{readingArticle.date}</span>
                  <span>·</span>
                  <span>{readingArticle.author}</span>
                  <span>·</span>
                  <span>{readingArticle.readTime}</span>
                </div>

                <div className="mb-6 rounded-2xl overflow-hidden max-h-64">
                  <img
                    src={readingArticle.image}
                    alt={readingArticle.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                  <p className="font-medium text-white">{readingArticle.excerpt}</p>
                  <p>{readingArticle.content}</p>
                  <p className="text-xs text-zinc-500 pt-4 border-t border-[#242424]">
                    Educational Material Disclaimer: This content is prepared for technical education and research purposes only and does not constitute financial advice.
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
