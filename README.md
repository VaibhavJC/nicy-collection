# Nicy Collection ✨

A premium, static, frontend-only website for **Nicy Collection** — a handmade
jewellery and décor brand from Nagpur, Bhandara & Lakhni, Maharashtra.

Built with React + Vite + TypeScript + Tailwind CSS + Framer Motion, and
designed to be deployed for free on **GitHub Pages** with zero backend.

---

## ✨ Features

- Fully responsive, mobile-first design (320px → 1920px)
- Data-driven product catalogue (`src/data/products.ts`) built from real
  product photographs — no stock images, no invented products
- Frontend-only search & filtering (by category, subcategory, occasion,
  customizable)
- Product detail pages with an image gallery, thumbnails, swipe support and
  a click-to-expand lightbox
- A "Customize Your Order" form that opens a pre-filled WhatsApp message —
  no backend required
- Per-product "Enquire on WhatsApp" buttons, with messages generated
  dynamically from product data
- Instagram-inspired masonry gallery with lightbox
- Elegant, boutique-style visual design (ivory / champagne / gold / maroon /
  forest palette, serif + sans typography)
- Subtle Framer Motion animations (entrance, hover, scroll-reveal) — nothing
  excessive
- Accessible: semantic HTML, alt text, keyboard navigation, visible focus
  states, ARIA labels on interactive controls
- SEO: page titles, meta descriptions, Open Graph tags, favicon
- Graceful fallbacks for missing images/data, and polished empty states for
  filtered results with none found

---

## 🗂️ Project Structure

```
src/
├── components/     Reusable UI components (Navbar, Footer, ProductCard, ...)
├── pages/          One file per route/page
├── data/           Data-driven product, category and occasion definitions
├── config/         Central site configuration (brand name, WhatsApp, etc.)
├── utils/          WhatsApp message builder, page-meta helper
public/
├── images/         Organised, optimised (WebP) product photography
.github/workflows/
└── deploy.yml      GitHub Actions workflow: build + deploy to GitHub Pages
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

This starts a local dev server (usually at `http://localhost:5173`).

### Production build

```bash
npm run build
```

This produces a fully static site in `dist/`, ready for GitHub Pages.

```bash
npm run preview
```

Locally preview the production build.

---

## 🌐 Deploying to GitHub Pages

This project is preconfigured to deploy automatically via **GitHub Actions**
(`.github/workflows/deploy.yml`) whenever you push to `main`.

### One-time setup

1. **Push this project to a new GitHub repository.**

2. **Set the repository name in `vite.config.ts`.**
   GitHub Pages project sites are served at
   `https://<your-username>.github.io/<repo-name>/`, so Vite needs to know
   the repo name to generate correct asset paths:

   ```ts
   // vite.config.ts
   const REPO_NAME = 'nicy-collection' // 👈 change this to match your repo name
   ```

   If you're deploying to a **custom domain** or a `<username>.github.io`
   **user/org root site** instead of a project site, set `base: '/'` instead.

3. **Enable GitHub Pages via GitHub Actions.**
   In your repository: **Settings → Pages → Build and deployment → Source**,
   select **GitHub Actions**.

4. **Push to `main`.** The included workflow will:
   - Check out the repository
   - Install Node.js 20
   - Install dependencies (`npm ci`)
   - Run `npm run build`
   - Upload and deploy the `dist/` folder to GitHub Pages

Your site will be live at `https://<your-username>.github.io/<repo-name>/`
within a couple of minutes of the workflow completing.

### Why HashRouter?

This project uses React Router's `HashRouter` (URLs look like
`/#/collections`) instead of `BrowserRouter`. This means client-side routing
and page refreshes **always work correctly on GitHub Pages** without any
extra `404.html` redirect tricks, since GitHub Pages only ever needs to serve
`index.html`.

---

## ⚙️ Configuration

All brand details live in **one file**: `src/config/site.ts`.

```ts
export const siteConfig = {
  brandName: "Nicy Collection",
  whatsappNumber: "919022350529", // digits only, with country code
  instagramUrl: "https://www.instagram.com/nicy.collection/",
  locations: ["Nagpur", "Bhandara", "Lakhni"],
  // ...
};
```

Update this file to change the WhatsApp number, Instagram link, locations,
or brand copy — nothing else in the codebase hard-codes these values.

---

## 🛍️ Adding / Editing Products

Products are fully data-driven. To add a new product:

1. Add optimised product photos to the right folder under
   `public/images/products/<category>/` (WebP recommended; see naming
   pattern of existing files — a full-size image and a `-thumb` version).
2. Add a new entry to the `products` array in `src/data/products.ts`.

No component code needs to change — product cards, filters, detail pages
and WhatsApp messages are all generated from this data.

To add a brand-new category or occasion, add an entry to
`src/data/categories.ts` or `src/data/occasions.ts` respectively.

---

## 📸 About the Product Photography

Every product image on this site comes from real photographs supplied for
Nicy Collection. Two categories in the original brief — **pure Flower
Jewellery** and **general Home Décor** (beyond Lippan art) — don't yet have
matching product photographs, so those collection pages currently show a
polished "new designs coming soon" empty state with a link to the
Customize page, rather than invented placeholder products. Add real photos
and product entries for these categories any time using the steps above.

---

## 🧩 Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/) (`HashRouter`)
- [Framer Motion](https://motion.dev/)
- [Lucide React](https://lucide.dev/) (icons)

No backend, no database, no authentication, no payment system — just a
fast, maintainable, static catalogue and WhatsApp-enquiry website.
