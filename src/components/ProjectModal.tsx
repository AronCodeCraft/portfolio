import React, { useEffect } from 'react';
import { X, CheckCircle2, Target, Lightbulb, Wrench } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-charcoal-900/60 backdrop-blur-sm animate-fade-in">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-3xl bg-cream-100 rounded-2xl border border-cream-400 shadow-soft-lg overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-cream-200 border-b border-cream-400 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
                {project.category}
              </span>
              <span className="text-cream-500">•</span>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded-full font-medium ${
                  project.status === 'Completed'
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-amber-100 text-amber-900 border border-amber-300'
                }`}
              >
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-charcoal-900">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-600 hover:text-charcoal-900 hover:bg-cream-300 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 mb-1">
              Project Overview
            </h4>
            <p className="text-sm sm:text-base text-charcoal-800 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Problem Statement */}
          <div className="p-4 rounded-xl bg-cream-200/80 border border-cream-400">
            <div className="flex items-center gap-2 text-charcoal-900 font-heading font-bold text-sm mb-1.5">
              <Lightbulb className="w-4 h-4 text-teal-700" />
              Problem Statement
            </div>
            <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
              {project.problemStatement}
            </p>
          </div>

          {/* Objectives & Goals */}
          <div>
            <div className="flex items-center gap-2 text-charcoal-900 font-heading font-bold text-sm mb-3">
              <Target className="w-4 h-4 text-teal-700" />
              Project Objectives
            </div>
            <ul className="space-y-2">
              {project.objectives.map((obj, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-700 flex-shrink-0 mt-0.5" />
                  <span>{obj}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology */}
          <div>
            <div className="flex items-center gap-2 text-charcoal-900 font-heading font-bold text-sm mb-3">
              <Wrench className="w-4 h-4 text-teal-700" />
              Analytical Methodology
            </div>
            <ol className="space-y-2 list-decimal list-inside text-xs sm:text-sm text-charcoal-700">
              {project.methodology.map((step, i) => (
                <li key={i} className="leading-relaxed pl-1">
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Key Findings */}
          <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200">
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-teal-900 mb-2">
              Key Insights & Outcomes
            </h5>
            <ul className="space-y-1.5">
              {project.keyFindings.map((finding, i) => (
                <li key={i} className="text-xs sm:text-sm text-teal-950 flex items-start gap-2">
                  <span className="text-teal-700 font-bold">•</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-charcoal-500 mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 rounded-md bg-cream-200 border border-cream-400 text-charcoal-800 font-mono text-xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-cream-200 border-t border-cream-400 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-heading font-semibold text-charcoal-700 hover:text-charcoal-900 bg-cream-100 hover:bg-cream-300 border border-cream-400 rounded-lg transition-colors"
          >
            Close
          </button>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-heading font-semibold text-cream-50 bg-charcoal-900 hover:bg-charcoal-700 rounded-lg transition-colors shadow-soft-sm"
          >
            <GithubIcon className="w-4 h-4" />
            Inspect on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
