import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  PhoneCall, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { SectionHeader } from './SectionHeader';
import { CONTACT_INFO } from '../data/portfolioData';
import { ContactFormData, ContactFormErrors } from '../types';

interface ContactSectionProps {
  initialSubject?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialSubject = '' }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: initialSubject || '',
    message: '',
  });

  const [touched, setTouched] = useState<Record<keyof ContactFormData, boolean>>({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  // Update subject if initialSubject prop changes (e.g. from clicking a pricing plan)
  useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({ ...prev, subject: initialSubject }));
      setTouched((prev) => ({ ...prev, subject: true }));
    }
  }, [initialSubject]);

  // Real-time validation engine
  const validateField = (field: keyof ContactFormData, value: string): string | undefined => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return undefined;
      case 'email':
        if (!value.trim()) return 'Email address is required';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address';
        return undefined;
      case 'subject':
        if (!value.trim()) return 'Subject is required';
        if (value.trim().length < 3) return 'Subject must be at least 3 characters';
        return undefined;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return `Message is too short (${value.trim().length}/10 minimum characters)`;
        return undefined;
      default:
        return undefined;
    }
  };

  const validateAll = (data: ContactFormData): ContactFormErrors => {
    const newErrors: ContactFormErrors = {};
    const nameErr = validateField('name', data.name);
    if (nameErr) newErrors.name = nameErr;

    const emailErr = validateField('email', data.email);
    if (emailErr) newErrors.email = emailErr;

    const subjectErr = validateField('subject', data.subject);
    if (subjectErr) newErrors.subject = subjectErr;

    const messageErr = validateField('message', data.message);
    if (messageErr) newErrors.message = messageErr;

    return newErrors;
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => {
      const next = { ...prev, [field]: value };
      const fieldError = validateField(field, value);
      setErrors((prevErrors) => ({
        ...prevErrors,
        [field]: fieldError,
      }));
      return next;
    });
  };

  const handleBlur = (field: keyof ContactFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const fieldError = validateField(field, formData[field]);
    setErrors((prev) => ({ ...prev, [field]: fieldError }));
  };

  const isValid = 
    !errors.name && 
    !errors.email && 
    !errors.subject && 
    !errors.message &&
    formData.name.trim().length >= 2 &&
    formData.email.trim().length > 0 &&
    formData.subject.trim().length >= 3 &&
    formData.message.trim().length >= 10;

  const validCount = [
    !errors.name && formData.name.trim().length >= 2,
    !errors.email && formData.email.trim().length > 0 && !validateField('email', formData.email),
    !errors.subject && formData.subject.trim().length >= 3,
    !errors.message && formData.message.trim().length >= 10,
  ].filter(Boolean).length;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const currentErrors = validateAll(formData);
    setErrors(currentErrors);

    if (Object.keys(currentErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate sending message to brainchilds.bd@gmail.com with feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setIsSuccessModalOpen(true);
    }, 700);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getMailtoUrl = () => {
    const sub = encodeURIComponent(submittedData?.subject || formData.subject || 'Project Inquiry');
    const body = encodeURIComponent(
      `Hello Shahid,\n\nMy name: ${submittedData?.name || formData.name}\nMy email: ${submittedData?.email || formData.email}\n\n${submittedData?.message || formData.message}\n\nSent from aifamily.com.bd portfolio.`
    );
    return `mailto:${CONTACT_INFO.email}?subject=${sub}&body=${body}`;
  };

  const getWhatsAppDirectUrl = () => {
    const text = encodeURIComponent(
      `Hello Shahid,\n\nName: ${submittedData?.name || formData.name}\nEmail: ${submittedData?.email || formData.email}\nSubject: ${submittedData?.subject || formData.subject}\nMessage: ${submittedData?.message || formData.message}`
    );
    return `https://wa.me/${CONTACT_INFO.whatsappCleanNumber}?text=${text}`;
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors"
    >
      {/* Background Image with adaptive opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-15 dark:opacity-30 transition-opacity"
        style={{ backgroundImage: 'url(/legacy-assets/img/02.jpg)' }}
      />
      
      {/* Soft gradient wash */}
      <div className="absolute inset-0 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-[1px]" />

      {/* Background spaceship accent */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-10 dark:opacity-20 mix-blend-screen bg-no-repeat bg-right-bottom"
        style={{ backgroundImage: 'url(/legacy-assets/img/spaceship.png)' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Contact"
          subtitle="Get in touch to discuss your project, business strategy, or tech setup"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
                  Direct Inquiries
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                  Let's Build Something Great Together
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Every message is delivered directly to <strong className="text-cyan-600 dark:text-cyan-400">brainchilds.bd@gmail.com</strong>. I personally review and reply within 12 hours.
                </p>
              </div>

              {/* Direct channels */}
              <div className="space-y-4 pt-2">
                {/* Email card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase block">Email Address</span>
                      <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        {CONTACT_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
                    title="Copy email address"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* WhatsApp card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-400 uppercase block">WhatsApp Direct</span>
                      <a 
                        href={`https://wa.me/${CONTACT_INFO.whatsappCleanNumber}`}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                      >
                        {CONTACT_INFO.whatsappNumber}
                      </a>
                    </div>
                  </div>
                  <a
                    href={`https://wa.me/${CONTACT_INFO.whatsappCleanNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-slate-400 hover:text-emerald-500 transition-colors"
                    title="Open WhatsApp chat"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Location card */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800">
                  <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-slate-400 uppercase block">Operating Location</span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {CONTACT_INFO.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Service guarantee highlight */}
              <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/40 border border-cyan-200 dark:border-cyan-500/20 text-xs text-cyan-900 dark:text-cyan-200/90 leading-relaxed">
                ✓ Milestone-based billing with full escrow protection.<br/>
                ✓ Direct technical communication with no middleman delays.
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Real-Time Validation */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Send a Direct Message
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Destination: <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{CONTACT_INFO.email}</span>
                  </p>
                </div>

                {/* Live validation progress meter */}
                <div className="text-right">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                    isValid
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/40'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'
                  }`}>
                    {validCount} of 4 fields valid
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* Field 1: Name */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Name <span className="text-amber-500">*</span>
                    </label>
                    {touched.name && !errors.name && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Valid
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      onBlur={() => handleBlur('name')}
                      placeholder="e.g. John Anderson"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        touched.name && errors.name
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                          : touched.name && !errors.name
                          ? 'border-emerald-500/60 focus:border-emerald-400'
                          : 'border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {touched.name && errors.name && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Email */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Email <span className="text-amber-500">*</span>
                    </label>
                    {touched.email && !errors.email && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Valid
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      placeholder="e.g. client@company.com"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        touched.email && errors.email
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                          : touched.email && !errors.email
                          ? 'border-emerald-500/60 focus:border-emerald-400'
                          : 'border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Field 3: Subject */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Subject <span className="text-amber-500">*</span>
                    </label>
                    {touched.subject && !errors.subject && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium inline-flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Valid
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      onBlur={() => handleBlur('subject')}
                      placeholder="e.g. Online Store Setup / Great Plan Inquiry"
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all ${
                        touched.subject && errors.subject
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                          : touched.subject && !errors.subject
                          ? 'border-emerald-500/60 focus:border-emerald-400'
                          : 'border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {touched.subject && errors.subject && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Field 4: Message */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Your Message <span className="text-amber-500">*</span>
                    </label>
                    <span className={`text-[11px] font-mono ${
                      formData.message.trim().length >= 10 ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'
                    }`}>
                      {formData.message.trim().length}/10 chars min
                    </span>
                  </div>
                  <div className="relative">
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Describe your project, timeline, budget, or business goals in detail..."
                      className={`w-full px-4 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/80 border text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 text-sm focus:outline-none transition-all resize-y ${
                        touched.message && errors.message
                          ? 'border-rose-500 focus:border-rose-400 focus:ring-1 focus:ring-rose-500'
                          : touched.message && !errors.message
                          ? 'border-emerald-500/60 focus:border-emerald-400'
                          : 'border-slate-200 dark:border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400'
                      }`}
                    />
                  </div>
                  {touched.message && errors.message && (
                    <p className="text-xs text-rose-500 dark:text-rose-400 mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 px-6 rounded-xl font-bold uppercase tracking-wider text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg ${
                      isValid
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 shadow-cyan-500/20 active:scale-[0.99] cursor-pointer'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-700/80 cursor-pointer'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message to brainchilds.bd@gmail.com</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-500 dark:text-slate-400 mt-3">
                    Protected by client privacy terms. No spam ever sent.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Submission Success Modal */}
      {isSuccessModalOpen && submittedData && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setIsSuccessModalOpen(false)}
        >
          <div 
            className="relative max-w-lg w-full bg-slate-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl text-center space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-white">
                Message Received!
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Thank you <strong className="text-cyan-400">{submittedData.name}</strong>. Your message has been prepared for <strong className="text-amber-300">{CONTACT_INFO.email}</strong>.
              </p>
            </div>

            {/* Message Summary Card */}
            <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-400">Subject:</span>
                <span className="text-white font-semibold">{submittedData.subject}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Email:</span>
                <span className="text-white font-semibold">{submittedData.email}</span>
              </div>
              <div className="pt-2 border-t border-slate-800">
                <p className="text-slate-300 italic line-clamp-3">"{submittedData.message}"</p>
              </div>
            </div>

            {/* Direct Instant Action Options */}
            <div className="space-y-3 pt-2">
              <a
                href={getMailtoUrl()}
                className="w-full py-3 px-5 rounded-xl font-bold uppercase tracking-wider text-xs bg-cyan-400 hover:bg-cyan-300 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Open in Email App / Gmail</span>
              </a>

              <a
                href={getWhatsAppDirectUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-5 rounded-xl font-bold uppercase tracking-wider text-xs bg-emerald-500 hover:bg-emerald-400 text-white flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Follow up Immediately on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setIsSuccessModalOpen(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                  setTouched({ name: false, email: false, subject: false, message: false });
                }}
                className="w-full py-2.5 px-4 rounded-xl text-xs text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Close & Return to Page
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
