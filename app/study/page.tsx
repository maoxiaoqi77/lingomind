const sessions = [
  { title: 'Spaced repetition', detail: '15 cards due today', emphasis: 'Due now' },
  { title: 'Listening practice', detail: '8 cards queued', emphasis: 'Audio focus' },
  { title: 'Writing prompts', detail: '5 prompts available', emphasis: 'Free recall' },
];

export default function StudyPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Study</p>
        <h1 className="text-3xl font-semibold text-white">Spaced repetition that adapts to you.</h1>
        <p className="text-slate-200">
          Keep a steady cadence of reviews with sessions tuned for recognition, listening, and free recall.
        </p>
      </header>

      <div className="space-y-4">
        {sessions.map((session) => (
          <article
            key={session.title}
            className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-lg shadow-emerald-900/30 md:flex-row md:items-center md:justify-between"
          >
            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-white">{session.title}</h2>
              <p className="text-sm text-slate-200">{session.detail}</p>
            </div>
            <div className="flex flex-col items-start gap-2 md:items-end">
              <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-100">
                {session.emphasis}
              </span>
              <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-400 hover:text-white">
                Begin session
              </button>
            </div>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-emerald-500/10 via-sky-500/10 to-indigo-500/10 p-6 shadow-lg shadow-emerald-900/30">
        <h2 className="text-2xl font-semibold text-white">Stay consistent</h2>
        <p className="mt-2 text-slate-200">
          Complete your due cards each day to keep your streak going. LingoMind will keep surfacing the words that need the most
          attention.
        </p>
      </div>
    </section>
  );
}
