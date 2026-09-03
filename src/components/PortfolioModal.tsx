import React from 'react';
import { PortfolioItem } from '../types';
import { X, CheckCircle, TrendingUp, Sparkles, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
  onSelectForInquiry: (itemTitle: string) => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  item,
  onClose,
  onSelectForInquiry,
}) => {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50/60 rounded-t-3xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Sparkles className="w-3 h-3" />
              {item.tag} Case Study
            </div>
            <h3 className="text-2xl font-black text-slate-900">{item.title}</h3>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">{item.summary}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Live Website Preview if available */}
          {item.liveUrl && (
            <div className="p-4 rounded-2xl bg-indigo-50/90 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <div>
                  <div className="text-xs font-bold text-slate-900">Live Production Deployment</div>
                  <div className="text-[11px] text-slate-600">Experience this platform live with real study notes & tests</div>
                </div>
              </div>
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all whitespace-nowrap"
              >
                <span>Visit {item.liveUrl.replace(/^https?:\/\//, '')}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Key Metrics Grid */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5 text-indigo-600" />
              Measured Results & Outcomes
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {item.impactStats.map((stat, idx) => (
                <div key={idx} className="bg-indigo-50/50 rounded-2xl p-3.5 border border-indigo-100/70 text-center">
                  <div className="text-xl sm:text-2xl font-black text-indigo-700">{stat.value}</div>
                  <div className="text-[11px] font-semibold text-slate-600 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Problem / Challenge */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
            <h5 className="text-xs font-bold uppercase tracking-wider text-rose-600 mb-1">
              The Institute's Bottleneck
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed">{item.challenge}</p>
          </div>

          {/* The Solution */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/70">
            <h5 className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-1">
              The Digital Setup Engineered
            </h5>
            <p className="text-xs text-slate-700 leading-relaxed">{item.solution}</p>
          </div>

          {/* Implemented Features */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Technical Features Delivered
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {item.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Back to Portfolio
          </button>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>Visit Live Website</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                onSelectForInquiry(item.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
            >
              <span>Build Similar Setup For My Institute</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
