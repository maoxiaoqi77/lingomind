"use client";

import { FormEvent, useMemo, useState } from "react";

type SearchResult = {
  word: string;
  phonetic: string;
  meaning: string;
  usageSentences: string[];
  highlightedExample: string;
  imageUrl: string;
  audioUrl: string;
};

const baseMock: SearchResult = {
  word: "serendipity",
  phonetic: "/ˌser.ənˈdɪp.ɪ.ti/",
  meaning: "a pleasant and unexpected discovery made by chance",
  usageSentences: [
    "Finding that cozy café on a rainy day felt like pure serendipity.",
    "Their friendship started with a serendipitous seat assignment on the plane.",
    "She described landing her dream job as a moment of serendipity.",
  ],
  highlightedExample: "It was serendipity that led us to the hidden beach at sunset.",
  imageUrl: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
  audioUrl: "https://example.com/audio/serendipity.mp3",
};

function buildMockResult(query: string): SearchResult {
  if (!query.trim()) return baseMock;

  return {
    ...baseMock,
    word: query.trim(),
    meaning: `${baseMock.meaning} (mocked for \"${query.trim()}\")`,
  };
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<SearchResult | null>(null);
  const [lastSearched, setLastSearched] = useState<string | null>(null);

  const suggestions = useMemo(
    () => ["lexicon", "polyglot", "mnemonic", "inflection", "idiomatic"],
    [],
  );

  const handleSearch = (event: FormEvent<HTMLFormElement> | null, term?: string) => {
    event?.preventDefault();
    const nextQuery = typeof term === "string" ? term : query;

    setIsLoading(true);
    setLastSearched(nextQuery);

    setTimeout(() => {
      setResult(buildMockResult(nextQuery));
      setIsLoading(false);
    }, 750);
  };

  const handlePlayAudio = () => {
    if (!result?.audioUrl) return;

    const audio = new Audio(result.audioUrl);
    audio.play().catch(() => {
      /* ignore playback errors in mock environment */
    });
  };

  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Search</p>
        <h1 className="text-3xl font-semibold text-white">Find the meaning behind every word.</h1>
        <p className="text-slate-200">
          Quickly search definitions, pronunciations, and example sentences. Add interesting words straight to your notebook.
        </p>
      </header>

      <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-6 shadow-lg shadow-sky-900/30">
        <form className="flex flex-col gap-3 md:flex-row md:items-center" onSubmit={(event) => handleSearch(event)}>
          <input
            type="search"
            name="query"
            placeholder="Search for a word..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-sky-400 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex items-center justify-center rounded-xl bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isLoading ? "Searching..." : "Search"}
          </button>
        </form>

        <div className="mt-5 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-400">Try one</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((word) => (
              <button
                key={word}
                type="button"
                onClick={() => {
                  setQuery(word);
                  handleSearch(null, word);
                }}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-100 transition hover:border-sky-400 hover:text-white"
              >
                {word}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {isLoading && (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200 shadow-lg shadow-sky-900/20">
            Searching for {lastSearched || "your word"}...
          </div>
        )}

        {result && !isLoading && (
          <article className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-950/70 via-slate-900/60 to-slate-950/50 shadow-xl shadow-sky-900/30">
            <div className="flex flex-col gap-6 p-6 sm:p-8">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Result</p>
                <h2 className="text-3xl font-semibold text-white">{result.word}</h2>
                <p className="text-lg text-sky-200">{result.phonetic}</p>
              </div>

              <div className="grid gap-6 md:grid-cols-5 md:gap-8">
                <div className="md:col-span-3 space-y-4">
                  <p className="text-base leading-relaxed text-slate-100">{result.meaning}</p>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">Daily Usage</h3>
                    <ul className="space-y-2">
                      {result.usageSentences.map((sentence) => (
                        <li
                          key={sentence}
                          className="rounded-2xl bg-white/5 px-4 py-3 text-slate-100 shadow-inner shadow-slate-900/30"
                        >
                          {sentence}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    type="button"
                    onClick={handlePlayAudio}
                    className="flex w-full items-center justify-between rounded-2xl border border-sky-500/40 bg-sky-500/10 px-4 py-3 text-left text-slate-100 transition hover:border-sky-400 hover:bg-sky-500/20"
                  >
                    <span className="text-sm font-medium">{result.highlightedExample}</span>
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-200">Play</span>
                  </button>
                </div>

                <div className="md:col-span-2 space-y-4">
                  <div className="overflow-hidden rounded-2xl bg-white/5 shadow-inner shadow-slate-900/40">
                    <img
                      src={result.imageUrl}
                      alt={`Illustration for ${result.word}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  <button
                    type="button"
                    className="w-full rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-900/40 transition hover:-translate-y-0.5 hover:bg-sky-400"
                  >
                    Ask about this word
                  </button>
                </div>
              </div>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
