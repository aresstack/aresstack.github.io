# AresStack website

Official [AresStack](https://github.com/aresstack) landing page for [aresstack.com](https://aresstack.com).

The design reflects the organization's [public profile](https://github.com/aresstack/.github/blob/main/profile/README.md): midnight navy, copper and cyan accents, and the positioning **Efficiency with measure**.

## Source files

- `index.html`: semantic content, SEO metadata, project links and accessible sections
- `styles.css`: responsive visual design and CSS-based architectural illustration
- `site.js`: mobile navigation and copyright year
- `favicon.svg`: lightweight vector favicon
- `CNAME`: existing GitHub Pages custom-domain binding (keep unchanged)

The three philosophy illustrations are linked from the public `.github` organization's profile assets. They belong to this organization and are reused without modification.

## Local preview

Open `index.html` or start a static web server in the repository root. For example:

```bash
python -m http.server 8000
```

No framework, build pipeline, tracking, analytics or server process is required for deployment.

## GitHub Pages

The custom domain is managed through the existing `CNAME` and the repository's **Settings → Pages** configuration. Merge to the configured publishing branch to deploy. The draft PR does not change the live page.
