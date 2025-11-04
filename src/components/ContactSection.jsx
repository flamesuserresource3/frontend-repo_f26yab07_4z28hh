import { Mail, Phone, Instagram, Twitter, Dribbble, Linkedin } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    setStatus(`Thanks, ${name}! Ill get back to you within 24 hours.`);
    e.currentTarget.reset();
  };

  return (
    <section className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Lets work together</h2>
          <p className="mt-2 text-zinc-400 max-w-xl">
            Tell me about your project. I collaborate with startups, brands, and agencies on identity, campaigns, and product visuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-zinc-300 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/60"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm text-zinc-300 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/60"
                  placeholder="Tell me about your goals, timeline, and budget"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black hover:opacity-90 transition"
              >
                Send Message
              </button>
              {status && <p className="text-sm text-zinc-300">{status}</p>}
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-3">Contact</h3>
              <div className="space-y-2 text-zinc-300 text-sm">
                <a href="mailto:hello@avakeller.design" className="flex items-center gap-2 hover:text-white transition">
                  <Mail size={18} /> hello@avakeller.design
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition">
                  <Phone size={18} /> +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold mb-3">Social</h3>
              <div className="flex flex-wrap items-center gap-3 text-zinc-300">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"><Instagram size={16} /> Instagram</a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"><Twitter size={16} /> Twitter</a>
                <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"><Dribbble size={16} /> Dribbble</a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10 transition"><Linkedin size={16} /> Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
