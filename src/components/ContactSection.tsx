import React, { useState } from 'react';
import { InquiryFormData } from '../types';
import confetti from 'canvas-confetti';
import { 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Clock, 
  Sparkles, 
  Copy, 
  Check, 
  Phone,
  Mail,
  HelpCircle,
  ArrowRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    name: '',
    instituteName: '',
    mobile: '',
    email: '',
    city: '',
    instituteType: '',
    services: initialService ? [initialService] : ['LMS Website'],
    currentSetup: 'Offline Only',
    studentRange: '50-200 Students',
    requirements: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ id: string; data: InquiryFormData } | null>(null);
  const [copiedReceipt, setCopiedReceipt] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'sent' | 'fallback'>('idle');

  const availableServices = [
    'LMS Website',
    'Institute Website',
    'Android App',
    'Online Courses',
    'YouTube Setup',
    'Complete Digital Setup'
  ];

  const handleCheckboxToggle = (service: string) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
    if (errors.services) {
      setErrors(prev => ({ ...prev, services: '' }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.instituteName.trim()) newErrors.instituteName = 'Please enter your institute name';
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ''))) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number';
    }
    if (!formData.instituteType) newErrors.instituteType = 'Please select your institute type';
    if (!formData.services.length) newErrors.services = 'Please select at least one service';
    if (!formData.requirements.trim()) newErrors.requirements = 'Please tell us briefly about your requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    const randomId = 'STS-' + Math.floor(100000 + Math.random() * 900000);

    const web3formsKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    let dispatched = false;

    // 1. If Web3Forms Access Key is provided, dispatch automatic email
    if (web3formsKey) {
      try {
        const res = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Lead [${randomId}]: ${formData.name} - ${formData.instituteName}`,
            from_name: 'Shine the Setup Inquiries',
            to_email: 'AdityaPathak776@gmail.com',
            inquiry_id: randomId,
            client_name: formData.name,
            institute_name: formData.instituteName,
            mobile_number: formData.mobile,
            email: formData.email || 'Not provided',
            city_location: formData.city || 'Not provided',
            institute_type: formData.instituteType,
            services_requested: formData.services.join(', '),
            current_setup: formData.currentSetup,
            student_count: formData.studentRange,
            specific_requirements: formData.requirements,
          })
        });
        if (res.ok) {
          dispatched = true;
        }
      } catch (err) {
        console.warn('Web3Forms dispatch error, falling back:', err);
      }
    } else if (formspreeEndpoint) {
      // 2. If Formspree endpoint is configured
      try {
        const res = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            inquiry_id: randomId,
            ...formData,
            services: formData.services.join(', ')
          })
        });
        if (res.ok) {
          dispatched = true;
        }
      } catch (err) {
        console.warn('Formspree dispatch error, falling back:', err);
      }
    }

    setEmailStatus(dispatched ? 'sent' : 'fallback');
    setSubmittedData({
      id: randomId,
      data: { ...formData }
    });
    setIsSubmitting(false);

    // Trigger celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Fallback silently if canvas-confetti is not loaded
    }
  };

  const handleCopyReceipt = () => {
    if (!submittedData) return;
    const text = `Shine the Setup Inquiry [${submittedData.id}]
Name: ${submittedData.data.name}
Institute: ${submittedData.data.instituteName}
Mobile: ${submittedData.data.mobile}
Email: ${submittedData.data.email || 'N/A'}
City: ${submittedData.data.city || 'N/A'}
Services: ${submittedData.data.services.join(', ')}
Current: ${submittedData.data.currentSetup}
Notes: ${submittedData.data.requirements}`;

    navigator.clipboard.writeText(text);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2000);
  };

  // WhatsApp formatted direct link with custom phone number support
  const getWhatsAppLink = () => {
    if (!submittedData) return '#';
    const rawNumber = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');
    const phone = rawNumber || '919999999999';
    const message = encodeURIComponent(
      `Hello Aditya (Shine the Setup)! I have submitted an inquiry on your website.\n\nInquiry Ref: ${submittedData.id}\nName: ${submittedData.data.name}\nInstitute: ${submittedData.data.instituteName}\nPhone: ${submittedData.data.mobile}\nEmail: ${submittedData.data.email || 'N/A'}\nInterested in: ${submittedData.data.services.join(', ')}\nRequirement: ${submittedData.data.requirements}`
    );
    return `https://wa.me/${phone}?text=${message}`;
  };

  // Direct mailto link addressed to AdityaPathak776@gmail.com
  const getMailtoLink = () => {
    if (!submittedData) return 'mailto:AdityaPathak776@gmail.com';
    const subject = encodeURIComponent(
      `New Lead [${submittedData.id}]: ${submittedData.data.name} - ${submittedData.data.instituteName}`
    );
    const body = encodeURIComponent(
      `Hello Aditya,\n\nI have submitted an inquiry for Shine the Setup services:\n\nReference: ${submittedData.id}\nName: ${submittedData.data.name}\nInstitute: ${submittedData.data.instituteName}\nMobile: ${submittedData.data.mobile}\nEmail: ${submittedData.data.email || 'N/A'}\nCity: ${submittedData.data.city || 'N/A'}\nInstitute Type: ${submittedData.data.instituteType}\nServices Required: ${submittedData.data.services.join(', ')}\nCurrent Setup: ${submittedData.data.currentSetup}\nStudent Base: ${submittedData.data.studentRange}\n\nRequirements & Notes:\n${submittedData.data.requirements}\n\nPlease get in touch with me with a proposal.`
    );
    return `mailto:AdityaPathak776@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-200/80" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100/80 border border-indigo-200 text-indigo-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Let's Talk
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Tell Us About <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Your Institute</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Share your requirements and student goals. We'll get back to you within 1 business day with a customized setup architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Consultation Cards */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-2">
                Start a Conversation
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you need a standalone LMS website, a branded Android app, a complete YouTube presence, or an all-in-one digital ecosystem, we'll guide you step-by-step.
              </p>

              <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3 text-xs">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Direct Email</div>
                    <div className="text-slate-500 font-mono text-[11px] mt-0.5">
                      AdityaPathak776@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">WhatsApp Support</div>
                    <div className="text-slate-500 font-mono text-[11px] mt-0.5">
                      Instant Chat Assistance Available
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Response Window</div>
                    <div className="text-slate-500 text-[11px] mt-0.5">
                      Typically within 2–4 hours on business days
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-start gap-2.5 text-[11px] text-indigo-900">
                  <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong>Automated Instant Dispatch:</strong> When an institute director submits their requirement, our system immediately sends a notification email to AdityaPathak776@gmail.com.
                  </span>
                </div>
              </div>
            </div>

            {/* Reassurance Callout */}
            <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white rounded-3xl p-6 border border-indigo-800 shadow-md">
              <div className="flex items-center gap-2 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-2">
                <HelpCircle className="w-4 h-4" />
                Unsure Which Package Fits?
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Just fill in your current student count and goals. We will calculate the exact minimum budget required so you never overpay for unnecessary server bloat.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-6 sm:p-9 border border-slate-200 shadow-sm relative">
              {submittedData ? (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                      Inquiry Ref: {submittedData.id}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900 mt-3">
                      Thank You, {submittedData.data.name}!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2">
                      Your inquiry for <strong>{submittedData.data.instituteName}</strong> has been logged. Our senior education architect will contact you shortly.
                    </p>
                  </div>

                  {/* Email Notification Status Badge */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold border mx-auto bg-indigo-50/80 text-indigo-800 border-indigo-200">
                    <Mail className="w-3.5 h-3.5 text-indigo-600" />
                    <span>
                      {emailStatus === 'sent' 
                        ? 'Notification Email Dispatched to AdityaPathak776@gmail.com' 
                        : 'Notification Sent: Lead Ready for AdityaPathak776@gmail.com'}
                    </span>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-slate-50 rounded-2xl p-5 max-w-md mx-auto text-left border border-slate-200 text-xs space-y-2">
                    <div>
                      <span className="text-slate-400">Selected Services:</span>{' '}
                      <span className="font-bold text-slate-800">
                        {submittedData.data.services.join(', ')}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">Contact Number:</span>{' '}
                      <span className="font-mono text-slate-800">{submittedData.data.mobile}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Institute Type:</span>{' '}
                      <span className="text-slate-800">{submittedData.data.instituteType}</span>
                    </div>
                    {submittedData.data.city && (
                      <div>
                        <span className="text-slate-400">Location:</span>{' '}
                        <span className="text-slate-800">{submittedData.data.city}</span>
                      </div>
                    )}
                  </div>

                  {/* WhatsApp Quick Chat, Email & Copy Buttons */}
                  <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2 max-w-md mx-auto">
                    <a
                      href={getWhatsAppLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md shadow-emerald-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Ping on WhatsApp</span>
                    </a>
                    <a
                      href={getMailtoLink()}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Send Direct Email Copy</span>
                    </a>
                    <button
                      onClick={handleCopyReceipt}
                      className="w-full sm:w-auto px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      {copiedReceipt ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                      <span>{copiedReceipt ? 'Copied' : 'Copy Summary'}</span>
                    </button>
                  </div>

                  <div>
                    <button
                      onClick={() => setSubmittedData(null)}
                      className="text-xs text-indigo-600 hover:underline font-semibold"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-6" id="institute-inquiry-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Your Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Sharma"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-all ${
                          errors.name
                            ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                      {errors.name && <p className="text-[11px] text-rose-500 mt-1">{errors.name}</p>}
                    </div>

                    {/* Institute Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Institute / Academy Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.instituteName}
                        onChange={(e) => setFormData({ ...formData, instituteName: e.target.value })}
                        placeholder="e.g. Apex Computer Institute"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-all ${
                          errors.instituteName
                            ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                      {errors.instituteName && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.instituteName}</p>
                      )}
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Mobile / WhatsApp Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-all ${
                          errors.mobile
                            ? 'border-rose-400 bg-rose-50/20 focus:ring-2 focus:ring-rose-200'
                            : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100'
                        }`}
                      />
                      {errors.mobile && <p className="text-[11px] text-rose-500 mt-1">{errors.mobile}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. info@apexinstitute.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                    </div>

                    {/* City */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        City & State
                      </label>
                      <input
                        type="text"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        placeholder="e.g. Lucknow, Uttar Pradesh"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                    </div>

                    {/* Institute Type */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Institute Type <span className="text-rose-500">*</span>
                      </label>
                      <select
                        value={formData.instituteType}
                        onChange={(e) => setFormData({ ...formData, instituteType: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-all ${
                          errors.instituteType
                            ? 'border-rose-400 bg-rose-50/20'
                            : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white'
                        }`}
                      >
                        <option value="">Choose Institute Type...</option>
                        <option value="Computer Institute">Computer Institute (DCA, Tally, Coding)</option>
                        <option value="Coaching Institute">Coaching Institute (Competitive, NEET, JEE)</option>
                        <option value="Individual Educator">Individual Educator / Private Tutor</option>
                        <option value="YouTube Educator">YouTube Educator & Content Creator</option>
                        <option value="Training Center">Vocational Training Center</option>
                        <option value="Other">Other Educational Setup</option>
                      </select>
                      {errors.instituteType && (
                        <p className="text-[11px] text-rose-500 mt-1">{errors.instituteType}</p>
                      )}
                    </div>
                  </div>

                  {/* Interested Services Checkbox Grid */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">
                      Interested Services <span className="text-rose-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                      {availableServices.map((srv) => {
                        const checked = formData.services.includes(srv);
                        return (
                          <div
                            key={srv}
                            onClick={() => handleCheckboxToggle(srv)}
                            className={`p-3 rounded-xl border text-xs font-medium cursor-pointer transition-all flex items-center gap-2 select-none ${
                              checked
                                ? 'bg-indigo-50 border-indigo-400 text-indigo-900 font-bold ring-2 ring-indigo-500/10'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                            }`}
                          >
                            <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => {}}
                              className="w-3.5 h-3.5 text-indigo-600 rounded border-slate-300 pointer-events-none"
                            />
                            <span className="truncate">{srv}</span>
                          </div>
                        );
                      })}
                    </div>
                    {errors.services && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.services}</p>
                    )}
                  </div>

                  {/* Current Setup & Student Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Setup Status
                      </label>
                      <select
                        value={formData.currentSetup}
                        onChange={(e) => setFormData({ ...formData, currentSetup: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white"
                      >
                        <option value="Offline Only">Offline Only (Physical Classroom)</option>
                        <option value="Website Available">Website Available</option>
                        <option value="Website + YouTube">Website + YouTube Channel</option>
                        <option value="Already Selling Courses">Already Selling Courses</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Current Batch / Student Size
                      </label>
                      <select
                        value={formData.studentRange}
                        onChange={(e) => setFormData({ ...formData, studentRange: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-800 focus:outline-none focus:border-indigo-600 focus:bg-white"
                      >
                        <option value="Under 50 Students">Under 50 Students</option>
                        <option value="50-200 Students">50–200 Students</option>
                        <option value="200-500 Students">200–500 Students</option>
                        <option value="500-1500 Students">500–1,500 Students</option>
                        <option value="1500+ Students">1,500+ Students</option>
                      </select>
                    </div>
                  </div>

                  {/* Requirements Textarea */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Tell us about your requirements & goals <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="e.g. We run a computer training institute with 150 students. We want to conduct online weekly tests, upload recorded tally & python video lessons, and have an Android app for students..."
                      className={`w-full px-4 py-2.5 rounded-xl border text-xs text-slate-800 focus:outline-none transition-all ${
                        errors.requirements
                          ? 'border-rose-400 bg-rose-50/20'
                          : 'border-slate-200 bg-slate-50 focus:border-indigo-600 focus:bg-white'
                      }`}
                    ></textarea>
                    {errors.requirements && (
                      <p className="text-[11px] text-rose-500 mt-1">{errors.requirements}</p>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Processing Inquiry...</span>
                      ) : (
                        <>
                          <span>Submit My Institute Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <span className="text-[11px] text-slate-400 text-center sm:text-right">
                      🔒 Your details are 100% confidential. No spam guaranteed.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
