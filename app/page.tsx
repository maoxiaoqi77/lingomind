import Link from 'next/link';

const sections = [
  {
    title: 'Search',
    description: 'Look up definitions, pronunciation, and usage for any word.',
    href: '/search',
  },
  {
    title: 'Notebook',
    description: 'Save curated vocabulary lists with notes, tags, and progress.',
    href: '/notebook',
  },
  {
    title: 'Study',
    description: 'Use spaced repetition to strengthen recall and mastery.',
    href: '/study',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-2xl shadow-sky-900/20">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-300">Welcome to LingoMind</p>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Grow your vocabulary with focus.</h1>
            <p className="max-w-2xl text-lg text-slate-200">
              Jump into search to learn new words, save them into a notebook, then study them with spaced repetition. This
              starter layout keeps navigation close on any device.
            </p>
          </div>
          <div className="flex gap-3 md:flex-col">
            <Link
              href="/search"
              className="rounded-full bg-white px-4 py-2 text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start searching
            </Link>
            <Link
              href="/study"
              className="rounded-full border border-white/40 px-4 py-2 text-white transition hover:-translate-y-0.5 hover:border-white"
            >
              Begin studying
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="group rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition hover:-translate-y-1 hover:border-white/30 hover:shadow-xl hover:shadow-indigo-900/40"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{section.title}</h2>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-slate-200 transition group-hover:bg-white/20">
                Open
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-200">{section.description}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
