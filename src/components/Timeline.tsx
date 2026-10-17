import React from 'react';
import { GraduationCap, Briefcase, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { timelineItems } from '../data/portfolioData';

export const Timeline: React.FC = () => {
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'education':
        return GraduationCap;
      case 'experience':
        return Briefcase;
      default:
        return Award;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-cream-300/40 border-t border-cream-400/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-2">
            Education & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal-900 tracking-tight">
            Academic path and professional development.
          </h2>
          <p className="text-sm text-charcoal-600 mt-2">
            A transparent chronicle of my formal degree at RNSIT, independent technical progress, and upcoming career milestones.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-cream-400 pl-6 sm:pl-8 ml-3 sm:ml-4 space-y-10">
          {timelineItems.map((item) => {
            const Icon = getItemIcon(item.type);
            return (
              <div key={item.id} className="relative group">
                
                {/* Timeline Node Pin */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-8 h-8 rounded-full bg-cream-100 border-2 border-charcoal-900 text-teal-700 flex items-center justify-center shadow-soft-sm group-hover:bg-charcoal-900 group-hover:text-cream-50 transition-colors">
                  <Icon className="w-4 h-4" />
                </div>

                {/* Timeline Card */}
                <div className="rounded-2xl bg-cream-100 border border-cream-400 p-6 sm:p-7 shadow-soft-sm hover:shadow-soft-md transition-all">
                  
                  {/* Top Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono uppercase tracking-wider text-teal-800 font-semibold bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
                      {item.degreeOrType}
                    </span>
                    <span className="text-xs font-mono text-charcoal-500 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                  </div>

                  {/* Title & Institution */}
                  <h3 className="font-heading font-bold text-xl text-charcoal-900">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-charcoal-700 mt-0.5 mb-3">
                    {item.institutionOrOrg}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-charcoal-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 border-t border-cream-300 pt-4">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-charcoal-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
