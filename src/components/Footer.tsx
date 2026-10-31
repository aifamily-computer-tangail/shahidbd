import React, { useState } from 'react';
import { ShieldCheck, FileText, X } from 'lucide-react';
import { CONTACT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [modalType, setModalType] = useState<'terms' | 'privacy' | null>(null);

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Copyright notice */}
          <div>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-400">
              Copyright &copy; 2026 |{' '}
              <span className="text-slate-900 dark:text-white font-semibold">{CONTACT_INFO.author}</span> -{' '}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">{CONTACT_INFO.company}</span> | All Rights Reserved
            </p>
            <p className="text-[11px] text-slate-400 dark:text-slate-500 mt-1">
              Sales Engineer & Business Developer — Tangail / Dhaka, Bangladesh
            </p>
          </div>

          {/* Legal / Policy Links */}
          <div className="flex items-center gap-6 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <button
              type="button"
              onClick={() => setModalType('terms')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button
              type="button"
              onClick={() => setModalType('privacy')}
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </div>

      {/* Terms of Service / Privacy Policy Modal */}
      {modalType !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setModalType(null)}
        >
          <div
            className="relative max-w-xl w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-8 text-left shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex items-center gap-2">
                {modalType === 'terms' ? (
                  <FileText className="w-5 h-5 text-amber-500 dark:text-amber-400" />
                ) : (
                  <ShieldCheck className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
                )}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {modalType === 'terms' ? 'Terms of Service' : 'Privacy Policy'}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-3 leading-relaxed">
              {modalType === 'terms' ? (
                <>
                  <p>
                    All consultancy, sales engineering, and web development projects delivered by <strong>M Shahid I / Brainchild BD</strong> operate under verified milestone contracts.
                  </p>
                  <p>
                    1. <strong>Milestone Basis</strong>: Work deliverables are broken down into transparent milestones agreed upon prior to project initiation.
                  </p>
                  <p>
                    2. <strong>Intellectual Property</strong>: Upon completion of final milestone payment, full ownership and source code access are transferred directly to the client.
                  </p>
                  <p>
                    3. <strong>After-Sales Support</strong>: Support and maintenance windows are delivered as outlined in the selected package or contract terms.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong>Brainchild BD</strong> respects your privacy. Any personal or business information submitted via the contact form or WhatsApp is strictly kept confidential.
                  </p>
                  <p>
                    1. <strong>Direct Communication</strong>: Contact form details are forwarded exclusively to <code>brainchilds.bd@gmail.com</code> for the sole purpose of discussing project requirements.
                  </p>
                  <p>
                    2. <strong>Zero Third-Party Sharing</strong>: Your contact information, email, or project plans will never be sold, distributed, or shared with third parties.
                  </p>
                  <p>
                    3. <strong>Security</strong>: All client data, access credentials, and server configurations are handled using industry-standard encryption practices.
                  </p>
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 text-right">
              <button
                type="button"
                onClick={() => setModalType(null)}
                className="px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl bg-cyan-500 hover:bg-cyan-400 dark:bg-cyan-400 dark:hover:bg-cyan-300 text-slate-950 transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
