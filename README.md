# Thirumaran Eniyavan — Portfolio

A modern, responsive personal portfolio website built with React. Showcases education, technical skills, projects, research, and certifications.

## Tech Stack

- **React** — Functional components & hooks
- **Framer Motion** — Animations
- **React Icons** — Icons
- **CSS** — Custom styling (no Tailwind)

## Running Locally

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm start
   ```
   The app will open at [http://localhost:3000](http://localhost:3000).

3. Build for production:
   ```bash
   npm run build
   ```

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `thirumaran-portfolio`).

2. Update `homepage` in `package.json` to match your repo:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

3. Add GitHub remote and push:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

5. In your GitHub repo, go to **Settings → Pages** and set the source to **gh-pages** branch (root folder).

## Project Structure

```
├── public/
│   ├── index.html
│   ├── profile.jpg
│   └── cv.pdf          ← Add your CV PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Education.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Research.js
│   │   ├── Certifications.js
│   │   └── Contact.js
│   ├── App.js
│   ├── data.js         ← CV content
│   ├── index.js
│   └── styles.css
├── package.json
└── README.md
```

## Add Your CV

Place your CV PDF file at `public/cv.pdf` so the "Download CV" button works.

## License

MIT
