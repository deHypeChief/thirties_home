# Thirties Home & Studios

Marketing site for **Thirties Home & Studios** — a creative media house and studio
in Durumi, Abuja offering content production, advertisement creation, equipment
rental, and creative space rental.

Built as a single-page editorial experience: a magazine-style layout with a
deep-aubergine / white / grey palette, the brand magenta-purple as a surgical
accent, Fraunces display serif paired with Hanken Grotesk, and a full-screen
overlay navigation.

## Stack

- **React 19** + **Vite 8**
- Plain CSS (no UI framework) — design tokens live in `src/index.css`
- Google Fonts: Fraunces + Hanken Grotesk
- No runtime dependencies beyond React

## Run it

This repo uses **bun** (see `bun.lock`):

```bash
bun install      # first time only
bun run dev      # start the dev server
bun run build    # production build → dist/
bun run preview  # preview the production build
```

(`npm install` / `npm run dev` work too if you prefer npm.)

## Structure

```
index.html            # fonts, meta, favicon
public/
  logo.png            # brand wordmark (thirties HOME)
  favicon.svg         # geometric "t" monogram
src/
  index.css           # design system: tokens, reset, type, grain, utilities
  App.css             # all section styles + responsive
  App.jsx             # content + all section components + scroll-reveal
  main.jsx            # entry
```

All site copy and contact details (address, phone, email, hours) live as plain
data objects near the top of `src/App.jsx` — edit there to update content.

## Images

The studio's own photography lives in `public/img/`, grouped as:

- `img/space/` — the studio / creative-space interiors
- `img/props/` — vintage rental pieces
- `img/clients/` — production & behind-the-scenes shots

Source phone photos were 20–30 MB each; they're resized to ≤2000px and
re-compressed (~120–380 KB each) for the web. To change which photo appears
where, edit the `IMG` map (and the menu `thumbs` array) near the top of
`src/App.jsx`. Each photo is rendered as a lightly purple-graded "plate" with a
gradient fallback, so the layout still holds if a file is missing.

## Notes

- **Social links** in the footer are placeholders (`#`) — drop in the real
  Instagram / TikTok / YouTube handles.
- The "WhatsApp" contact button deep-links to `wa.me`; the "Talk" card and
  footer still use a `tel:` call link.
- Respects `prefers-reduced-motion`.
