import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Phone, FileText, Sparkles, MapPin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onResumeClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onResumeClick }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden data-grid-bg">
      {/* Decorative ambient gradient blobs - soft creamy warmth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-100/40 via-cream-300/60 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Col 1-7) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status & Academic Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream-100 border border-cream-400 shadow-soft-sm text-xs font-mono text-charcoal-700">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-600"></span>
              </span>
              <span>RNSIT • CSE (Data Science)</span>
              <span className="text-cream-500">|</span>
              <span className="text-teal-800 font-medium">Aspiring Data Analyst</span>
            </div>

            {/* Editorial Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal-900 tracking-tight leading-[1.12]">
              Turning <span className="underline decoration-teal-500/40 decoration-4 underline-offset-4">Data</span> into Insights. <br className="hidden sm:inline" />
              Building Toward <span className="text-teal-700">Intelligence.</span>
            </h1>

            {/* Subtitle & Introduction */}
            <p className="text-lg sm:text-xl text-charcoal-700 font-normal leading-relaxed max-w-2xl">
              I am <strong className="font-semibold text-charcoal-900">{personalInfo.name}</strong>, an 18-year-old undergraduate student at{' '}
              <span className="text-charcoal-900 font-medium">RNS Institute of Technology (RNSIT)</span>, pursuing Computer Science Engineering with Data Science.
            </p>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed max-w-xl">
              Passionate about uncovering patterns and building practical solutions using Python, MySQL, NumPy, and Pandas—striving to become an impactful Data Analyst and evolve into Data Science.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-charcoal-900 text-cream-50 font-heading font-semibold text-sm hover:bg-charcoal-700 transition-all shadow-soft-md hover:shadow-soft-lg group"
              >
                Explore My Projects
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cream-100 hover:bg-cream-300 border border-cream-400 text-charcoal-800 font-heading font-semibold text-sm transition-all shadow-soft-sm"
              >
                Get In Touch
                <ArrowUpRight className="w-4 h-4 text-charcoal-600" />
              </a>

              <button
                onClick={onResumeClick}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-cream-100/60 hover:bg-cream-300/80 border border-cream-400 text-charcoal-700 font-mono text-xs transition-all shadow-soft-sm"
              >
                <FileText className="w-4 h-4 text-teal-700" />
                Resume Status
              </button>
            </div>

            {/* Verified Quick Social Links */}
            <div className="pt-4 flex items-center gap-3">
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 mr-1">Connect:</span>
              
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:border-charcoal-500 hover:bg-cream-300 transition-all shadow-soft-sm"
                title="GitHub: AronCodeCraft"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:border-charcoal-500 hover:bg-cream-300 transition-all shadow-soft-sm"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={'mailto:' + personalInfo.contacts.email}
                className="p-2.5 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:border-charcoal-500 hover:bg-cream-300 transition-all shadow-soft-sm"
                title="Email Aron"
              >
                <Mail className="w-4 h-4" />
              </a>

              <a
                href={'tel:' + personalInfo.contacts.phone.replace(/\s+/g, '')}
                className="p-2.5 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-700 hover:text-charcoal-900 hover:border-charcoal-500 hover:bg-cream-300 transition-all shadow-soft-sm"
                title="Call Aron"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Interactive Profile & Analytical Snapshot Card (Col 8-12) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-cream-100 border border-cream-400 p-6 sm:p-7 shadow-soft-lg space-y-6">
              
              {/* Card Header */}
              <div className="flex items-start justify-between border-b border-cream-300 pb-5">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-1">
                    Student Profile Snapshot
                  </span>
                  <h3 className="font-heading font-bold text-xl text-charcoal-900">
                    {personalInfo.name}
                  </h3>
                  <p className="text-xs text-charcoal-600 flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-charcoal-500" />
                    RNSIT, Bengaluru, India
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded-md bg-teal-50 border border-teal-200 text-teal-800 text-xs font-mono font-medium">
                  Age 18
                </div>
              </div>

              {/* Snapshot Details */}
              <div className="space-y-3.5 text-xs font-mono">
                <div className="flex justify-between items-center py-1.5 border-b border-cream-300/80">
                  <span className="text-charcoal-500">Degree</span>
                  <span className="text-charcoal-900 font-semibold text-right">B.E. CSE (Data Science)</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-cream-300/80">
                  <span className="text-charcoal-500">Current Role</span>
                  <span className="text-teal-800 font-semibold">Aspiring Data Analyst</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-cream-300/80">
                  <span className="text-charcoal-500">Long-term Vision</span>
                  <span className="text-charcoal-900 font-semibold">Data Science Domain</span>
                </div>
                <div className="flex justify-between items-center py-1.5 border-b border-cream-300/80">
                  <span className="text-charcoal-500">GitHub</span>
                  <a
                    href={personalInfo.contacts.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-teal-700 hover:underline flex items-center gap-1 font-semibold"
                  >
                    @{personalInfo.contacts.githubUsername}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Active Technical Stack Tags */}
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 block mb-2.5">
                  Core Technologies in Use:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'NumPy', 'Pandas', 'MySQL', 'Supabase', 'Excel', 'VS Code'].map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-cream-200 border border-cream-400 text-charcoal-800 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status Banner */}
              <div className="rounded-xl bg-cream-200/90 border border-cream-400/80 p-3 flex items-center gap-3 text-xs text-charcoal-700">
                <Sparkles className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span>
                  Seeking summer / ongoing <strong>Data Analyst internships</strong> and collaborative student projects.
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
