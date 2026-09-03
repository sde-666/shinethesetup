import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/content';
import { PortfolioItem } from '../types';
import { 
  Sparkles, 
  GraduationCap, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Youtube, 
  ArrowRight,
  BarChart3,
  ExternalLink
} from 'lucide-react';

interface PortfolioSectionProps {
  onOpenCaseStudy: (item: PortfolioItem) => void;
  onSelectForInquiry: (itemTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  onOpenCaseStudy,
  onSelectForInquiry,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filters = ['All', 'LMS', 'Website', 'App', 'Courses', 'YouTube', 'Complete'];

  const filteredItems = selectedFilter === 'All'
    ? PORTFOLIO_DATA
    : PORTFOLIO_DATA.filter(item => item.category.toLowerCase() === selectedFilter.toLowerCase());

  const getVisualIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'lms':
        return <GraduationCap className="w-12 h-12 text-indigo-600" />;
      case 'website':
        return <Globe className="w-12 h-12 text-blue-600" />;
      case 'app':
        return <Smartphone className="w-12 h-12 text-emerald-600" />;
      case 'courses':
        return <ShoppingCart className="w-12 h-12 text-amber-600" />;
      case 'youtube':
        return <Youtube className="w-12 h-12 text-rose-600" />;
      case 'complete':
      default:
        return <Sparkles className="w-12 h-12 text-purple-600" />;
    }
  };

  const getVisualBg = (category: string) => {
    switch (category.toLowerCase()) {
      case 'lms':
        return 'from-indigo-50 to-indigo-100/50 border-indigo-100';
      case 'website':
        return 'from-blue-50 to-blue-100/50 border-blue-100';
      case 'app':
        return 'from-emerald-50 to-emerald-100/50 border-emerald-100';
      case 'courses':
        return 'from-amber-50 to-amber-100/50 border-amber-100';
      case 'youtube':
        return 'from-rose-50 to-rose-100/50 border-rose-100';
      case 'complete':
      default:
        return 'from-purple-50 to-purple-100/50 border-purple-100';
    }
  };

  return (
    <section className="py-20 bg-white" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-indigo-600" />
            Proven Concepts & Blueprints
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Ideas That Can <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Shine</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real architectural examples of the digital systems we engineer for computer institutes, coaching academies, and educators.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedFilter === filter
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {filter === 'Complete' ? 'Complete Setup' : filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Visual Header Graphic */}
                <div className={`h-48 bg-gradient-to-br ${getVisualBg(item.category)} border-b flex flex-col items-center justify-center relative overflow-hidden group-hover:scale-[1.01] transition-transform duration-300`}>
                  {/* Subtle geometric circles */}
                  <div className="absolute w-32 h-32 rounded-full bg-white/40 -top-8 -right-8 pointer-events-none"></div>
                  <div className="absolute w-24 h-24 rounded-full bg-white/30 -bottom-6 -left-6 pointer-events-none"></div>
                  
                  <div className="p-4 rounded-2xl bg-white/90 shadow-sm border border-white/80 z-10">
                    {getVisualIcon(item.category)}
                  </div>
                  
                  <span className="mt-3 text-[11px] font-mono font-bold tracking-wider uppercase text-slate-500 z-10">
                    {item.tag}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {item.summary}
                  </p>

                  {/* Impact Stats Pills */}
                  <div className="grid grid-cols-2 gap-2 mt-4 pt-4 border-t border-slate-100">
                    {item.impactStats.slice(0, 2).map((stat, idx) => (
                      <div key={idx} className="bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
                        <div className="text-sm font-black text-indigo-700">{stat.value}</div>
                        <div className="text-[10px] text-slate-500 truncate">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Live Website Preview Button if available */}
                  {item.liveUrl && (
                    <div className="mt-4 pt-3 border-t border-slate-100">
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50 hover:bg-indigo-100/90 text-indigo-700 text-xs font-bold transition-all border border-indigo-200/70 group/ext"
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span>Preview Live LMS ({item.liveUrl.replace(/^https?:\/\//, '')})</span>
                        <ExternalLink className="w-3.5 h-3.5 text-indigo-500 group-hover/ext:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenCaseStudy(item)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/btn"
                >
                  <span>Inspect Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
                <button
                  onClick={() => onSelectForInquiry(item.title)}
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  I Want This
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center max-w-4xl mx-auto shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Have a Custom Requirement?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black mt-2 text-white">
              Let's make your institute the next success story.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Whether you have 50 students or 5,000 students, we build systems that scale smoothly without expensive ongoing SaaS lock-ins.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => onSelectForInquiry('Custom Educational Setup')}
                className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md shadow-indigo-600/30 flex items-center gap-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
