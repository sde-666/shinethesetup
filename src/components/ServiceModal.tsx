import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle, Clock, Cpu, Layers, ArrowRight, ShieldCheck, ExternalLink } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectServiceForInquiry,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-slate-100 flex items-start justify-between bg-slate-50/70 rounded-t-3xl">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-wider mb-2">
              <Layers className="w-3 h-3" />
              {service.tagline}
            </div>
            <h3 className="text-2xl font-black text-slate-900">{service.title}</h3>
            <p className="text-slate-600 text-sm mt-1">{service.description}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Live Production Preview Banner if available */}
          {service.previewUrl && (
            <div className="p-4 rounded-2xl bg-indigo-50/80 border border-indigo-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0"></span>
                <div>
                  <div className="text-xs font-bold text-slate-900">Live Client Architecture in Production</div>
                  <div className="text-[11px] text-slate-600">See real batch notes, tests & video lecture portal live</div>
                </div>
              </div>
              <a
                href={service.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-xs transition-all whitespace-nowrap"
              >
                <span>Preview LMS ({service.previewUrl.replace(/^https?:\/\//, '')})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          )}

          {/* Timeline & Ideal For */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100/60 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <Clock className="w-4 h-4 text-indigo-600 shrink-0" />
              <span><strong>Estimated Delivery:</strong> {service.timeline}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span><strong>Deployment:</strong> 100% Turnkey Handover</span>
            </div>
          </div>

          {/* Full Features Breakdown */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Included Core Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs font-medium text-slate-700">
                  <CheckCircle className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Checklist */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
              Direct Handover Deliverables
            </h4>
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 space-y-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 shrink-0"></span>
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-slate-500" />
              Engineering & Stack Architecture
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-mono font-medium border border-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 bg-slate-50/50 rounded-b-3xl">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-bold text-slate-600 hover:text-slate-900"
          >
            Close
          </button>
          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto">
            {service.previewUrl && (
              <a
                href={service.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-sm transition-all"
              >
                <span>Preview Live LMS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={() => {
                onSelectServiceForInquiry(service.title);
                onClose();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white text-xs font-bold shadow-md shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
            >
              <span>Inquire About {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
