# LingoMind

A Next.js 14 + TypeScript starter tailored for vocabulary learning with dedicated routes for search, notebooks, and spaced repetition study. The layout adapts to mobile (bottom navigation) and tablet/desktop (left sidebar) automatically.

## Getting started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project structure

- `app/layout.tsx` – Global responsive layout with shared navigation.
- `app/page.tsx` – Landing page linking to each feature area.
- `app/search/page.tsx` – Search UI for querying words.
- `app/notebook/page.tsx` – Notebook overview cards.
- `app/study/page.tsx` – Spaced repetition sessions.
- `app/globals.css` – Global styles and Tailwind layers.
- `tailwind.config.ts` & `postcss.config.mjs` – Tailwind CSS configuration.

## Scripts

- `npm run dev` – Start the development server.
- `npm run build` – Create a production build.
- `npm run start` – Start the production server.
- `npm run lint` – Run ESLint.
