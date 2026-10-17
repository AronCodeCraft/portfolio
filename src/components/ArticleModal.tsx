import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, CheckCircle2 } from 'lucide-react';
import type { BlogPost } from '../types/portfolio';

interface ArticleModalProps {
  article: BlogPost | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
      <div
        className="relative w-full max-w-3xl bg-cream-100 rounded-2xl border border-cream-400 shadow-soft-lg overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-cream-200 border-b border-cream-400 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-charcoal-500 mb-2">
              <span className="text-teal-800 font-semibold uppercase">{article.category}</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {article.readTime}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal-900 leading-tight">
              {article.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-300 transition-colors"
            aria-label="Close Article"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Summary Lead */}
          <p className="text-base sm:text-lg text-charcoal-800 font-medium leading-relaxed italic border-l-4 border-teal-600 pl-4 bg-cream-200/50 py-2 rounded-r-lg">
            "{article.summary}"
          </p>

          {/* Key Takeaways */}
          <div className="p-4 sm:p-5 rounded-xl bg-teal-50/70 border border-teal-200">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-teal-900 mb-3 flex items-center gap-2">
              <Bookmark className="w-4 h-4 text-teal-700" />
              Core Takeaways
            </h4>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-teal-950">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-sm sm:text-base text-charcoal-700 leading-relaxed">
            {article.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-cream-300 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-cream-200 border border-cream-400 text-charcoal-700 text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-cream-200 border-t border-cream-400 flex items-center justify-between">
          <span className="text-xs font-mono text-charcoal-500">
            Written by Aron A • RNSIT
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-heading font-semibold text-cream-50 bg-charcoal-900 hover:bg-charcoal-700 rounded-lg transition-colors"
          >
            Done Reading
          </button>
        </div>
      </div>
    </div>
  );
};
