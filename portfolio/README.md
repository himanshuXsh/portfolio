# Data Engineer Portfolio

A clean, modern, and responsive portfolio website for a Data Engineer. Built with semantic HTML, modern CSS, and vanilla JavaScript. No build tools required.

## Structure

- `index.html`: Main site with sections: Home, About, Projects, Skills, Experience, Education, Contact
- `styles.css`: Theme variables, layout, components, responsive styles
- `script.js`: Theme toggle, mobile nav, project filters, reveal-on-scroll, copy email, smooth scroll
- `resume.pdf`: Optional résumé file (add your own)

## Getting Started

1. Edit `index.html` and replace placeholders:
   - Name, bio, email, LinkedIn, GitHub
   - Project titles, descriptions, metrics, and tech stack
   - Experience, education, certifications
2. Optionally add `resume.pdf` next to `index.html` and adjust the link.
3. Open `index.html` in a browser, or run a local static server:

```bash
# From the project directory
python3 -m http.server 8000
# then open http://localhost:8000
```

## Customize

- Colors and spacing: update CSS variables in `styles.css`
- Dark/light/auto theme: click the theme toggle; persisted in `localStorage`
- Project filters: controlled by `.filter-btn` buttons and `data-tags` on each `.project-card`
- Contact form: defaults to `mailto:` action. Replace with a provider (e.g., Formspree) if desired

## Accessibility

- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`)
- Skip link, focus styles, high contrast, reduced motion friendly
- Sufficient color contrast; keyboard accessible nav and controls

## Performance

- No frameworks; minimal, modern CSS and JS
- Lazy-ish progressive reveal (no heavy libs)
- Use system fonts; add a webfont if needed

## SEO

- Meta title/description; Open Graph/Twitter tags
- JSON‑LD `Person` schema
- Add a proper `og-image.png` if deploying publicly

## Deployment

- GitHub Pages:
  1. Push this folder to a GitHub repository
  2. In repository Settings → Pages, set Source to `main`/`docs` or root
  3. Your site will be available at `https://<user>.github.io/<repo>`
- Netlify:
  - Drag‑and‑drop the folder or connect the repo; set build command to none and publish directory to root
- Vercel:
  - Import the repo, framework = Other, output directory = `.`

## License

Use, modify, and deploy freely. Consider adding your own license file.