# Inclusive Learning Hub — Lab 4

A React continuation of the semester project about accessible learning for students with dyslexia. The six original content pages and their illustrations are available through the React navigation. AI simplification and advanced audio features described in the text are proposals, not implemented AI or audio services.

## Run locally

Install Node.js (which includes npm), then open a terminal in the project folder:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal. For a production build, run `npm run build`; `npm run preview` serves that build locally.

## React features

- `Header`, `ReadingSettings`, `TopicExplorer`, `TopicCard`, and `ContentSection` are reusable components; each original page is also a component in `src/Pages.jsx`.
- Props pass data and callbacks into components, for example `page` and `onNavigate` into `TopicCard`, and reading settings into `ReadingSettings`.
- `useState` stores the selected page, search query, larger-text setting, and warm-background setting.
- `pages.map(...)` renders navigation and topic cards using a unique page ID as the key. The search field filters this list.
- Typing in the search field invokes `onChange`, which updates the search state. Clicking a topic invokes `onNavigate` to update the selected page.
- The original supplied website was informational and contained no form, search, CRUD list, or login UI to migrate. Search was added in React as a new interactive feature.

## Git and GitHub

The included Git history has the original website on `main` and the React work on `lab4`; the current branch is `lab4`. The local commits use a placeholder team identity (`team@localhost`). Create an empty GitHub repository, then replace the URL below with its actual URL:

```bash
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPOSITORY.git
git push -u origin main
git push -u origin lab4
```

The repository URL is the link to submit. Merge `lab4` into `main` only after the defense or approval specified in the assignment. A screenshot of the React interface is in `screenshots/`.
