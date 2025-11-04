import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero({ onHireClick }) {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <div className="max-w-2xl text-white">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200">
            <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-400" /> Modern • Minimal • Impactful
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Freelance Graphic Designer crafting bold brands and visuals
          </h1>
          <p className="mt-4 text-zinc-300 max-w-xl">
            I design distinctive identities, campaigns, and digital assets for startups and creators. Clean, modern aesthetics with vibrant accents.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onHireClick}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
            >
              <Rocket size={18} /> Hire Me
            </button>
            <a
              href="#projects"
              className="rounded-md border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
