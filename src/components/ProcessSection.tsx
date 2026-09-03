import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { CheckCircle2, ArrowRight, Sparkles, Layers, ShieldCheck, Rocket, Zap } from 'lucide-react';

interface ProcessSectionProps {
  onStartConsultation: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onStartConsultation }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 1:
        return <Zap className="w-5 h-5 text-purple-600" />;
      case 2:
        return <Rocket className="w-5 h-5 text-blue-600" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Text */}
          <div className="lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              From Offline to Online
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Your institute. Your brand. Your digital ecosystem.
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              We simplify the digital shift so you can stay 100% focused on teaching and mentoring students, while your digital infrastructure operates reliably in the background.
            </p>

            <div className="mt-8 p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-1">
                Zero Tech Headaches
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                No complex coding required from your side. We handle architecture, server hosting, domain routing, payment gateway approvals, and staff training.
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={onStartConsultation}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all"
              >
                <span>Why Shine the Setup?</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Step Timeline */}
          <div className="lg:col-span-7 space-y-4">
            {PROCESS_STEPS.map((item, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 sm:p-6 rounded-3xl border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'bg-white border-indigo-400 shadow-lg shadow-indigo-500/5 ring-2 ring-indigo-500/10'
                      : 'bg-white/60 hover:bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center font-black text-sm shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {item.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                        <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                          <span>{item.title}</span>
                          <span className="text-xs font-medium text-slate-500">
                            — {item.subtitle}
                          </span>
                        </h3>
                        {isSelected && (
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-bold border border-indigo-100 self-start sm:self-auto">
                            Active Phase
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                        {item.description}
                      </p>

                      {isSelected && (
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-indigo-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Milestone Deliverable: {item.deliverable}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
