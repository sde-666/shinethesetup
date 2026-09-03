import React from 'react';
import { ServiceItem } from '../types';
import { 
  GraduationCap, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Youtube, 
  Sparkles, 
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onOpenDetails,
  onSelectForInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-indigo-600" />;
      case 'Globe':
        return <Globe className="w-6 h-6 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-emerald-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-6 h-6 text-amber-600" />;
      case 'Youtube':
        return <Youtube className="w-6 h-6 text-rose-600" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-6 h-6 text-purple-600" />;
    }
  };

  const getIconBg = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return 'bg-indigo-50 border-indigo-100';
      case 'Globe':
        return 'bg-blue-50 border-blue-100';
      case 'Smartphone':
        return 'bg-emerald-50 border-emerald-100';
      case 'ShoppingCart':
        return 'bg-amber-50 border-amber-100';
      case 'Youtube':
        return 'bg-rose-50 border-rose-100';
      case 'Sparkles':
      default:
        return 'bg-purple-50 border-purple-100';
    }
  };

  return (
    <div className="group bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between relative overflow-hidden">
      {/* Top Graphic Accent */}
      <div className="flex items-start justify-between mb-5">
        <div className={`w-13 h-13 rounded-2xl border flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 duration-200 ${getIconBg(service.iconName)}`}>
          {getIcon(service.iconName)}
        </div>
        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-mono">
          {service.timeline}
        </span>
      </div>

      {/* Title & Tagline */}
      <div className="mb-4">
        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 block mb-1">
          {service.tagline}
        </span>
        <h3 className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-slate-600 mt-2 leading-relaxed line-clamp-3">
          {service.description}
        </p>
      </div>

      {/* Feature Checklist (3 points for clean card rhythm) */}
      <div className="space-y-2 py-3 border-t border-slate-100 mb-5 flex-grow">
        {service.features.slice(0, 3).map((feat, idx) => (
          <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
            <span className="line-clamp-1">{feat}</span>
          </div>
        ))}
        {service.features.length > 3 && (
          <div className="text-[11px] text-slate-400 font-medium pl-5.5">
            + {service.features.length - 3} more technical modules
          </div>
        )}
      </div>

      {/* Live Preview Button if available */}
      {service.previewUrl && (
        <div className="mb-3">
          <a
            href={service.previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-indigo-50/90 hover:bg-indigo-100 text-indigo-700 text-xs font-bold transition-all border border-indigo-200/80 shadow-2xs group/ext"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Preview Live LMS ({service.previewUrl.replace(/^https?:\/\//, '')})</span>
            <ExternalLink className="w-3.5 h-3.5 text-indigo-500 group-hover/ext:translate-x-0.5 transition-transform" />
          </a>
        </div>
      )}

      {/* Bottom Actions */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
        <button
          onClick={() => onOpenDetails(service)}
          className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 group/link"
        >
          <span>View Deliverables</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={() => onSelectForInquiry(service.title)}
          className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 hover:bg-indigo-600 hover:text-white transition-colors"
        >
          Inquire
        </button>
      </div>
    </div>
  );
};
