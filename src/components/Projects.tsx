import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Exploratory Data Analysis', 'SQL & Databases', 'Data Analytics'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-cream-200 border-t border-cream-400/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-2">
            Featured Projects & Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal-900 tracking-tight">
            Applied analytics and practical implementations.
          </h2>
          <p className="text-sm text-charcoal-600 mt-2">
            Real data projects exploring exploratory analysis, relational schema architecture, and automated tabular pipelines.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all ${
                selectedCategory === category
                  ? 'bg-charcoal-900 text-cream-50 font-semibold shadow-soft-sm'
                  : 'bg-cream-100 text-charcoal-700 border border-cream-400 hover:bg-cream-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl bg-cream-100 border border-cream-400 p-6 flex flex-col justify-between shadow-soft-sm hover:shadow-soft-md hover:border-charcoal-500 transition-all group"
            >
              <div className="space-y-4">
                
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-mono text-teal-800 font-medium bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md">
                    {project.category}
                  </span>
                  <span
                    className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-medium ${
                      project.status === 'Completed'
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                        : 'bg-amber-100 text-amber-900 border border-amber-300'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-charcoal-900 group-hover:text-teal-800 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-charcoal-600 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Tools Stack Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-cream-200 border border-cream-400 text-charcoal-700"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-cream-300 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-heading font-semibold text-charcoal-900 hover:text-teal-700 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  View Case Study
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg bg-cream-200 hover:bg-cream-300 text-charcoal-700 hover:text-charcoal-900 transition-colors"
                  title="View on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Future expansion note banner */}
        <div className="mt-12 p-4 rounded-xl bg-cream-100 border border-cream-400/80 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2.5 text-xs text-charcoal-700">
            <Sparkles className="w-4 h-4 text-teal-700 flex-shrink-0" />
            <span>
              <strong>Building more soon:</strong> New machine learning and interactive data visualization projects will be linked here as coursework and self-study progress.
            </span>
          </div>
          <a
            href="https://github.com/AronCodeCraft"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono font-medium text-teal-800 hover:underline inline-flex items-center gap-1"
          >
            Follow on GitHub @AronCodeCraft
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};
