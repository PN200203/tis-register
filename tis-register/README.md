# TIS Register: Tulas International School homepage redesign

A school-register concept. You sign in by **marking attendance** (name + role, then a PRESENT stamp lands), and the homepage is laid out as a **school-day timetable** on ruled notebook paper.

## Features
- Unique auth gate: attendance register with stamp animation (mock auth, stored in `localStorage`)
- Custom cursor that grows over interactive elements
- Scroll progress bar, scroll-triggered staggered reveals
- Notebook / Chalkboard theme switcher
- Respects `prefers-reduced-motion`, keyboard focus visible, responsive

## Stack
React 18, Vite, Framer Motion, CSS Modules

## Run locally
```bash
npm install
npm run dev
```

## Deploy
Push to GitHub, import the repo in Vercel or Netlify (build: `npm run build`, output: `dist`).

## Structure
`src/App.jsx` (auth state, theme) · `components/Gate` · `components/Home` · `components/Cursor` · `tokens.css`

## Note
Copy is placeholder in the spirit of TIS. Replace it with the exact text from https://tis.edu.in/.
