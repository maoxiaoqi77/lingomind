const notebooks = [
  { title: 'Travel phrases', words: 32, toneClass: 'bg-sky-300 text-slate-900' },
  { title: 'Academic words', words: 58, toneClass: 'bg-violet-300 text-slate-900' },
  { title: 'Daily review', words: 15, toneClass: 'bg-emerald-300 text-slate-900' },
];

export default function NotebookPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Notebook</p>
        <h1 className="text-3xl font-semibold text-white">Keep words organized and ready to review.</h1>
        <p className="text-slate-200">
          Create themed notebooks, attach context notes, and monitor how many terms you have mastered in each set.
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {notebooks.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-slate-950/50 p-5 shadow-lg shadow-indigo-900/30 transition hover:-translate-y-1 hover:border-white/30"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ${item.toneClass}`}>
                {item.words} words
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-300">Track progress and move words to your Study queue when you feel ready.</p>
            <button className="mt-4 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white transition hover:border-sky-400 hover:text-white">
              Open notebook
            </button>
          </article>
        ))}
      </div>

      <div className="rounded-2xl border border-dashed border-white/20 bg-white/5 p-6 text-center">
        <p className="text-lg font-semibold text-white">Create a new notebook</p>
        <p className="mt-2 text-slate-200">Group words by topic, difficulty, or course.</p>
        <button className="mt-4 rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg">
          Add notebook
        </button>
      </div>
    </section>
  );
}
