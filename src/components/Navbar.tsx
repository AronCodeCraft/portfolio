import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface NavbarProps {
  onResumeClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onResumeClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#timeline' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-cream-200/90 backdrop-blur-md shadow-soft-sm border-b border-cream-400/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="group flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-cream-50 flex items-center justify-center font-heading font-bold text-lg shadow-soft-sm group-hover:bg-teal-700 transition-colors">
            A
          </div>
          <div>
            <span className="font-heading font-bold text-charcoal-900 text-base tracking-tight block">
              {personalInfo.name}
            </span>
            <span className="text-xs font-mono text-teal-700 font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-600 animate-pulse"></span>
              Open for Internships
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-cream-100/90 border border-cream-400/80 px-3 py-1.5 rounded-full shadow-soft-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 text-sm font-medium text-charcoal-700 hover:text-charcoal-900 hover:bg-cream-300/80 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onResumeClick}
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-mono font-medium text-charcoal-800 bg-cream-100 hover:bg-cream-300 border border-cream-400 rounded-lg transition-colors shadow-soft-sm"
            title="Resume details"
          >
            <FileText className="w-3.5 h-3.5 text-teal-700" />
            Resume
          </button>
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-heading font-semibold text-cream-50 bg-charcoal-900 hover:bg-charcoal-700 rounded-lg shadow-soft-sm transition-all hover:shadow-soft-md"
          >
            Get in Touch
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg bg-cream-100 border border-cream-400 text-charcoal-800 hover:bg-cream-300 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-cream-100 border-b border-cream-400 px-6 py-6 shadow-soft-lg space-y-4">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-base font-medium text-charcoal-800 hover:bg-cream-300 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-cream-400 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setIsOpen(false);
                onResumeClick();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-charcoal-800 bg-cream-200 border border-cream-400 rounded-lg"
            >
              <FileText className="w-4 h-4 text-teal-700" />
              View Resume Status
            </button>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-cream-50 bg-charcoal-900 hover:bg-charcoal-700 rounded-lg"
            >
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
