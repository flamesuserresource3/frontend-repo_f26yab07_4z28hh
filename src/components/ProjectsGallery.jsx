export default function ProjectsGallery() {
  const projects = [
    {
      title: 'Neon Studio — Brand Identity',
      image:
        'https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Monochrome Poster Series',
      image:
        'https://images.unsplash.com/photo-1520975934260-c95e66e5a0fd?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Creative Campaign Art Direction',
      image:
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=2000&auto=format&fit=crop',
    },
    {
      title: 'Digital Collage Exploration',
      image:
        'https://images.unsplash.com/photo-1545231027-637d2f6210f8?q=80&w=2000&auto=format&fit=crop',
    },
  ];

  return (
    <section id="projects" className="relative w-full bg-zinc-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Selected Projects</h2>
            <p className="mt-2 text-zinc-400 max-w-xl">
              A snapshot of recent identity systems, posters, and digital assets for clients across tech and culture.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <figure key={idx} className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5">
              <img
                src={p.image}
                alt={p.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-sm text-zinc-300">{p.title}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
