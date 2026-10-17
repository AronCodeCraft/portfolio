import React from 'react';
import { Code2, Database, BarChart2, Laptop, Layers } from 'lucide-react';
import { skillGroups } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Programming Languages':
        return Code2;
      case 'Data Analysis Libraries':
        return BarChart2;
      case 'Databases & Platforms':
        return Database;
      case 'Productivity & Developer Tools':
        return Laptop;
      default:
        return Layers;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Core':
        return 'bg-charcoal-900 text-cream-50';
      case 'Known':
        return 'bg-teal-50 border border-teal-200 text-teal-800';
      case 'Basic':
        return 'bg-cream-300 text-charcoal-700 border border-cream-400';
      case 'Exploring':
        return 'bg-cream-200 text-charcoal-600 border border-cream-400 border-dashed';
      default:
        return 'bg-cream-200 text-charcoal-700';
    }
  };

  return (
    <section id="skills" className="py-20 bg-cream-300/40 border-t border-cream-400/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-2">
              Technical Skillset
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal-900 tracking-tight">
              Tools and technologies I work with.
            </h2>
            <p className="text-sm text-charcoal-600 mt-2">
              An honest, pragmatic overview of the tools I use for data manipulation, database querying, and code development.
            </p>
          </div>

          <div className="text-xs font-mono text-charcoal-600 bg-cream-100 border border-cream-400 px-3.5 py-2 rounded-lg self-start md:self-auto shadow-soft-sm">
            💡 Actively expanding with modern ML libraries
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group) => {
            const Icon = getCategoryIcon(group.category);
            return (
              <div
                key={group.category}
                className="rounded-2xl bg-cream-100 border border-cream-400 p-6 sm:p-7 shadow-soft-sm hover:shadow-soft-md transition-all space-y-5"
              >
                {/* Category Header */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-cream-200 border border-cream-400 text-teal-700 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-charcoal-900">
                      {group.category}
                    </h3>
                    <p className="text-xs text-charcoal-600 mt-0.5 leading-normal">
                      {group.description}
                    </p>
                  </div>
                </div>

                {/* Skills In This Category */}
                <div className="space-y-3 pt-1">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-cream-200/60 border border-cream-400/80 hover:bg-cream-200 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3 mb-1">
                        <span className="font-heading font-semibold text-sm text-charcoal-900">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md font-medium ${getLevelBadgeClass(
                            skill.level
                          )}`}
                        >
                          {skill.level}
                        </span>
                      </div>
                      {skill.description && (
                        <p className="text-xs text-charcoal-600 leading-normal">
                          {skill.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
