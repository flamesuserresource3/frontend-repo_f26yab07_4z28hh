import { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProjectsGallery from './components/ProjectsGallery.jsx';
import ContactSection from './components/ContactSection.jsx';

function App() {
  const [page, setPage] = useState('home');

  useEffect(() => {
    // Scroll to top on page change for a clean transition
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return (
    <div className="min-h-screen bg-black">
      <Navbar currentPage={page} onNavigate={setPage} />

      {page === 'home' && (
        <>
          <Hero onHireClick={() => setPage('contact')} />
          <ProjectsGallery />
        </>
      )}

      {page === 'projects' && (
        <>
          <div className="pt-20" />
          <ProjectsGallery />
        </>
      )}

      {page === 'contact' && (
        <>
          <div className="pt-20" />
          <ContactSection />
        </>
      )}

      <footer className="border-t border-white/10 bg-zinc-950 text-zinc-400">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Ava Keller — All rights reserved.</p>
          <p className="text-zinc-500">Dark theme • Vibrant accents • Minimal layout</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
