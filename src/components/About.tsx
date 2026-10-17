import React from 'react';
import { Target, BrainCircuit, ShieldCheck, Sparkles, GraduationCap } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Target,
      title: "Analytical Problem Solving",
      description: "Approaching data problems with systematic curiosity—uncovering root causes rather than skimming surfaces."
    },
    {
      icon: BrainCircuit,
      title: "Continuous Learning",
      description: "Dedicated to building strong foundations in Python, mathematics, and relational database systems day by day."
    },
    {
      icon: ShieldCheck,
      title: "Integrity & Transparency",
      description: "Presenting real skills, authentic project outcomes, and reproducible analysis without fabrication."
    },
    {
      icon: Sparkles,
      title: "Future in Data Science",
      description: "Starting from solid data analytics groundwork and intentionally progressing toward predictive modeling and machine learning."
    }
  ];

  return (
    <section id="about" className="py-20 bg-cream-200 border-t border-cream-400/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-2">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal-900 tracking-tight">
            Driven by curiosity. Grounded in data.
          </h2>
        </div>

        {/* Story & Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Narrative text (Col 1-7) */}
          <div className="lg:col-span-7 space-y-5 text-charcoal-700 leading-relaxed text-base">
            <p className="text-lg text-charcoal-900 font-medium">
              {personalInfo.professionalSummary}
            </p>
            <p>
              At <strong className="text-charcoal-900 font-semibold">RNS Institute of Technology (RNSIT)</strong>, I study the intersection of computer engineering, database architecture, and statistical concepts. I believe that data analytics is more than just running scripts—it is the disciplined practice of turning ambiguous questions into clear, actionable truths.
            </p>
            <p>
              My day-to-day focus centers on writing clean Python code, leveraging <strong className="text-charcoal-900 font-semibold">NumPy</strong> for numerical computations, mastering <strong className="text-charcoal-900 font-semibold">Pandas</strong> for tabular transformations, and querying relational databases via <strong className="text-charcoal-900 font-semibold">MySQL</strong>.
            </p>
            <p>
              As I progress through my undergraduate years, my goal is to gain hands-on industry experience through internships, contribute to impactful data teams, and systematically build toward advanced machine learning and Data Science.
            </p>

            {/* Quick Education Callout Box */}
            <div className="pt-3">
              <div className="rounded-xl bg-cream-100 border border-cream-400 p-4.5 flex items-start gap-4 shadow-soft-sm">
                <div className="p-2.5 rounded-lg bg-teal-50 border border-teal-200 text-teal-700">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-sm text-charcoal-900">
                    RNS Institute of Technology (RNSIT), Bengaluru
                  </h4>
                  <p className="text-xs text-charcoal-600 mt-0.5">
                    Bachelor of Engineering — Computer Science Engineering with Data Science
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars & Values Cards (Col 8-12) */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-cream-100 border border-cream-400 p-5 shadow-soft-sm hover:border-charcoal-500 hover:shadow-soft-md transition-all group"
                >
                  <div className="flex items-center gap-3.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-cream-200 text-teal-700 flex items-center justify-center group-hover:bg-teal-700 group-hover:text-cream-50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-heading font-bold text-sm text-charcoal-900">
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-xs text-charcoal-600 leading-normal pl-11">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
