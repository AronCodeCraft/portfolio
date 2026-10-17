import React, { useEffect } from 'react';
import { X, FileText, Mail, CheckCircle2, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-cream-100 rounded-2xl border border-cream-400 shadow-soft-lg overflow-hidden my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-cream-200 border-b border-cream-400 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 text-teal-700 flex items-center justify-center flex-shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-charcoal-900">
                Aron A — Resume Status
              </h3>
              <p className="text-xs text-charcoal-600 mt-0.5">
                Undergraduate Student • RNSIT (CSE Data Science)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-300 transition-colors"
            aria-label="Close Resume Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-sm text-charcoal-700 leading-relaxed">
          <div className="p-4 rounded-xl bg-cream-200/80 border border-cream-400 space-y-2">
            <div className="flex items-center gap-2 text-charcoal-900 font-heading font-bold text-xs uppercase tracking-wider">
              <Clock className="w-4 h-4 text-teal-700" />
              Academic Resume in Preparation
            </div>
            <p className="text-xs text-charcoal-600">
              My updated formal resume is being prepared to include recent coursework and ongoing project milestones.
            </p>
          </div>

          <div className="space-y-2 text-xs">
            <span className="font-mono text-charcoal-500 uppercase tracking-wider block">
              Quick Summary of Qualifications:
            </span>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                <span>B.E. Computer Science Engineering with Data Science at RNSIT</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                <span>Working knowledge of Python, NumPy, Pandas, MySQL, and Excel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
                <span>Open for summer & ongoing Data Analyst internship opportunities</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-xs text-charcoal-600">
              Need a formal CV copy for an immediate recruitment review? Feel free to contact me directly via email.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-cream-200 border-t border-cream-400 flex items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-heading font-semibold text-charcoal-700 hover:text-charcoal-900 bg-cream-100 hover:bg-cream-300 border border-cream-400 rounded-lg transition-colors"
          >
            Close
          </button>
          <a
            href={'mailto:' + personalInfo.contacts.email + '?subject=' + encodeURIComponent('Request for Aron A Resume')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-heading font-semibold text-cream-50 bg-charcoal-900 hover:bg-charcoal-700 rounded-lg transition-colors shadow-soft-sm"
          >
            <Mail className="w-4 h-4" />
            Request Resume by Email
          </a>
        </div>
      </div>
    </div>
  );
};
