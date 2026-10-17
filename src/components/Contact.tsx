import React, { useState } from 'react';
import { Copy, Check, Send, ArrowUpRight, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.contacts.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }

    setIsSubmitting(true);

    // Open default mail client with pre-filled message for 100% reliable direct transmission
    const subject = encodeURIComponent('Portfolio Inquiry from ' + formData.name);
    const body = encodeURIComponent(
      'Hi Aron,\n\nMy name is ' + formData.name + ' (' + formData.email + ').\n\n' + formData.message + '\n\nBest regards,\n' + formData.name
    );
    
    // Simulate short UI delay for smooth UX
    setTimeout(() => {
      window.location.href = 'mailto:' + personalInfo.contacts.email + '?subject=' + subject + '&body=' + body;
      setIsSubmitting(false);
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-cream-300/40 border-t border-cream-400/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs font-mono uppercase tracking-widest text-teal-700 font-semibold block mb-2">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal-900 tracking-tight">
            Let's connect and discuss data opportunities.
          </h2>
          <p className="text-sm text-charcoal-600 mt-2">
            I am open to exploring internship opportunities, collaborating on open-source data projects, and learning from experienced data professionals.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Channels (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with 1-click copy */}
            <div className="rounded-2xl bg-cream-100 border border-cream-400 p-5 shadow-soft-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-charcoal-500 uppercase tracking-wider">Email Address</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-teal-800 bg-teal-50 border border-teal-200 rounded-md hover:bg-teal-100 transition-colors"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-teal-700" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <a
                href={'mailto:' + personalInfo.contacts.email}
                className="text-base font-heading font-semibold text-charcoal-900 hover:text-teal-700 transition-colors block break-all"
              >
                {personalInfo.contacts.email}
              </a>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl bg-cream-100 border border-cream-400 p-5 shadow-soft-sm">
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-wider block mb-2">Direct Phone</span>
              <a
                href={'tel:' + personalInfo.contacts.phone.replace(/\s+/g, '')}
                className="text-base font-heading font-semibold text-charcoal-900 hover:text-teal-700 transition-colors flex items-center justify-between"
              >
                <span>{personalInfo.contacts.phone}</span>
                <ArrowUpRight className="w-4 h-4 text-charcoal-500" />
              </a>
            </div>

            {/* LinkedIn Card */}
            <div className="rounded-2xl bg-cream-100 border border-cream-400 p-5 shadow-soft-sm">
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-wider block mb-2">Professional Network</span>
              <a
                href={personalInfo.contacts.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-base font-heading font-semibold text-charcoal-900 hover:text-teal-700 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <LinkedinIcon className="w-4 h-4 text-teal-700" />
                  <span>Aron A on LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-500" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="rounded-2xl bg-cream-100 border border-cream-400 p-5 shadow-soft-sm">
              <span className="text-xs font-mono text-charcoal-500 uppercase tracking-wider block mb-2">Code & Repositories</span>
              <a
                href={personalInfo.contacts.github}
                target="_blank"
                rel="noreferrer"
                className="text-base font-heading font-semibold text-charcoal-900 hover:text-teal-700 transition-colors flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <GithubIcon className="w-4 h-4 text-charcoal-800" />
                  <span>github.com/AronCodeCraft</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-500" />
              </a>
            </div>

          </div>

          {/* Interactive Contact Form (Col 6-12) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-cream-100 border border-cream-400 p-6 sm:p-8 shadow-soft-sm">
              <h3 className="font-heading font-bold text-xl text-charcoal-900 mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-charcoal-600 mb-6">
                Fill in your details below and it will launch a formatted email directly to <span className="font-mono text-charcoal-900">aronbestowed711@gmail.com</span>.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-charcoal-700 mb-1.5">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-charcoal-800 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-charcoal-700 mb-1.5">
                    Your Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-charcoal-800 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-charcoal-700 mb-1.5">
                    Message / Opportunity Details
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, internship opportunity, or project idea..."
                    className="w-full px-4 py-2.5 rounded-xl bg-cream-200 border border-cream-400 text-charcoal-900 placeholder-charcoal-400 text-sm focus:outline-none focus:border-charcoal-800 transition-colors resize-none"
                  />
                </div>

                {formStatus === 'error' && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>Please fill in all fields before sending.</span>
                  </div>
                )}

                {formStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-600" />
                    <span>Email client launched! You can also copy my email directly above.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-charcoal-900 text-cream-50 font-heading font-semibold text-sm hover:bg-charcoal-700 transition-all shadow-soft-sm disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Opening Mail Client...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
