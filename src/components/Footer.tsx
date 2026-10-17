import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-cream-100 border-t border-cream-400 py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-cream-300">
          
          {/* Brand & Identity */}
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-charcoal-900 text-cream-50 flex items-center justify-center font-heading font-bold text-sm">
                A
              </div>
              <span className="font-heading font-bold text-lg text-charcoal-900">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs text-charcoal-600 max-w-sm">
              Computer Science & Data Science Undergraduate at RNSIT. Aspiring Data Analyst exploring insights and building toward Data Science.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-300 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.contacts.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-300 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={'mailto:' + personalInfo.contacts.email}
              className="p-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-300 transition-colors"
              title="Email Aron"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-300 transition-colors ml-2"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-charcoal-500">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
