import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Timeline } from './components/Timeline';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream-200 text-charcoal-800 font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* Sticky Navigation */}
      <Navbar onResumeClick={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main>
        <Hero onResumeClick={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Status Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}

export default App;
