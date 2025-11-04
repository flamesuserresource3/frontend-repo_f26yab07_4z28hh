import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ currentPage, onNavigate }) {
  const [open, setOpen] = useState(false);

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => {
        onNavigate(id);
        setOpen(false);
      }}
      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        currentPage === id
          ? 'text-white bg-white/10'
          : 'text-zinc-200 hover:text-white hover:bg-white/10'
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-fuchsia-500 to-cyan-400" />
            <span className="text-white font-semibold tracking-wide">Ava Keller — Designer</span>
          </div>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink id="home" label="Home" />
            <NavLink id="projects" label="Projects" />
            <NavLink id="contact" label="Contact" />
            <button
              onClick={() => onNavigate('contact')}
              className="ml-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              Hire Me
            </button>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-zinc-200 hover:text-white hover:bg-white/10"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <NavLink id="home" label="Home" />
              <NavLink id="projects" label="Projects" />
              <NavLink id="contact" label="Contact" />
              <button
                onClick={() => {
                  onNavigate('contact');
                  setOpen(false);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
