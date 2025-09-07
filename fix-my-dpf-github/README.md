# FIX MY DPF — GitHub Pages build

This folder is ready to upload to a GitHub repository and run with **GitHub Pages**.

## Quick deploy
1. Create a new repo (public) on GitHub, e.g. `fix-my-dpf`.
2. Upload all files in this folder to the root of the repo.
3. Go to **Settings → Pages** and choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `main` (or `master`) / `/ (root)`
4. Wait for Pages to build. Your site will be live at `https://<your-username>.github.io/<repo>/`.

## Notes
- The entry point is `index.html` at the repo root.
- Internal links were normalised to `.html` where possible.
- If you use absolute links to `/assets/...`, consider using relative paths for GitHub Pages.
- Add your own favicon, analytics, and SEO tags as needed.
