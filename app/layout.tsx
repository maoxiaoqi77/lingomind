import type { Metadata } from 'next';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LingoMind',
  description: 'Vocabulary search, notebook, and study tools for language learners.',
};

const navItems = [
  { href: '/search', label: 'Search' },
  { href: '/notebook', label: 'Notebook' },
  { href: '/study', label: 'Study' },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}> 
        <div className="min-h-screen bg-slate-900/90 text-slate-100">
          <div className="flex min-h-screen">
            <aside className="hidden md:flex fixed md:static inset-y-0 left-0 w-full max-w-xs flex-col justify-between border-r border-white/10 bg-slate-900/80 p-6 backdrop-blur">
              <div>
                <Link href="/" className="mb-8 block text-2xl font-semibold tracking-tight">
                  LingoMind
                </Link>
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-lg font-medium text-slate-200 transition hover:bg-white/5 hover:text-white"
                    >
                      <span className="h-2 w-2 rounded-full bg-emerald-400/80" aria-hidden />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200">
                <p className="font-semibold text-white">Tips</p>
                <p className="mt-1 text-slate-300">
                  Save new words into your notebook, then revisit them regularly in Study to reinforce memory.
                </p>
              </div>
            </aside>

            <div className="flex-1 md:ml-[20rem]">
              <header className="hidden md:flex items-center justify-between border-b border-white/10 bg-black/20 px-6 py-4 backdrop-blur">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Vocabulary Lab</p>
                  <p className="text-2xl font-semibold text-white">Master new words every day</p>
                </div>
                <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  Built with Next.js 14 + Tailwind CSS
                </div>
              </header>

              <main className="mx-auto max-w-5xl px-4 pb-24 pt-6 md:px-10 md:pb-12">{children}</main>
            </div>
          </div>

          <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-around border-t border-white/10 bg-slate-950/70 backdrop-blur md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-1 flex-col items-center gap-1 px-4 py-3 text-sm font-medium text-slate-200 transition hover:text-white"
              >
                <span className="h-1.5 w-6 rounded-full bg-white/50" aria-hidden />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </body>
    </html>
  );
}
