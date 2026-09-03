import React from 'react';
import { NavPage, ServiceItem } from '../../types';
import { SERVICES_DATA } from '../../data/content';
import { 
  GraduationCap, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Youtube, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  Clock, 
  Cpu,
  Layers
} from 'lucide-react';

interface ServicesViewProps {
  onNavigate: (page: NavPage) => void;
  onOpenServiceModal: (service: ServiceItem) => void;
  onSelectServiceForInquiry: (serviceName: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenServiceModal,
  onSelectServiceForInquiry,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-8 h-8 text-indigo-600" />;
      case 'Globe':
        return <Globe className="w-8 h-8 text-blue-600" />;
      case 'Smartphone':
        return <Smartphone className="w-8 h-8 text-emerald-600" />;
      case 'ShoppingCart':
        return <ShoppingCart className="w-8 h-8 text-amber-600" />;
      case 'Youtube':
        return <Youtube className="w-8 h-8 text-rose-600" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-8 h-8 text-purple-600" />;
    }
  };

  return (
    <div className="py-12 lg:py-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            What We Build
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Digital Solutions for <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Educational Institutes</span>
          </h1>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Choose an individual service module or commission a complete, unified digital infrastructure around your institute.
          </p>
        </div>

        {/* Detailed Service Rows */}
        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm hover:border-indigo-200 transition-all"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Visual Left/Right Block */}
                  <div className={`lg:col-span-4 flex flex-col items-center justify-center p-8 rounded-2xl bg-slate-50 border border-slate-100 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="w-20 h-20 rounded-3xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center mb-4">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 font-mono">
                      Service {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-base font-black text-slate-900 text-center mt-1">
                      {service.title}
                    </h4>
                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{service.timeline} delivery</span>
                    </div>
                  </div>

                  {/* Description & Features */}
                  <div className={`lg:col-span-8 space-y-4 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                        {service.tagline}
                      </span>
                      <h3 className="text-2xl font-black text-slate-900 mt-1">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features Grid */}
                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Included Features & Capabilities
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {service.features.map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables snippet */}
                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-bold text-slate-700">Deliverables:</span>
                      {service.deliverables.slice(0, 3).map((deliv, dIdx) => (
                        <span key={dIdx} className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-600 text-[11px]">
                          {deliv}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => onOpenServiceModal(service)}
                        className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors"
                      >
                        <span>Full Deliverable Checklist</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => onSelectServiceForInquiry(service.title)}
                        className="px-6 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-sm transition-all"
                      >
                        Inquire For This Service
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center bg-slate-900 text-white rounded-3xl p-8 sm:p-12">
          <h3 className="text-2xl sm:text-3xl font-black">Not sure what your institute needs?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-2">
            Tell us how your institute operates today. We will review your batches and provide an honest roadmap.
          </p>
          <div className="mt-6">
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md"
            >
              Discuss My Institute Requirements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
