# i:Quest Learning Solutions Website

Premium informational website for i:Quest Learning Solutions, built with React + Vite + Tailwind CSS.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## One-Click Hosting Configuration

This repo includes both:

- `render.yaml` for Render Blueprint/static site deploys
- `netlify.toml` for Netlify deploys

Both are configured for SPA fallback routes.

## Render Deployment Steps

1. Push this project to GitHub.
2. In Render, choose **New +** -> **Blueprint**.
3. Select this repository (Render will detect `render.yaml`).
4. Confirm service settings:
   - Type: `static_site`
   - Build command: `npm ci && npm run build`
   - Publish path: `dist`
5. Create the service and wait for deploy to finish.

## Netlify Deployment Steps

1. In Netlify, choose **Add new site** -> **Import an existing project**.
2. Select this repository.
3. Netlify will use `netlify.toml` automatically.
4. Deploy.

## Custom Domain Setup (Render or Netlify)

Use the same DNS approach on either platform:

1. Buy/identify your domain (for example `iquestlearningsolutions.com`).
2. In hosting dashboard, open **Custom Domains** and add:
   - apex domain: `iquestlearningsolutions.com`
   - subdomain: `www.iquestlearningsolutions.com`
3. At your DNS provider, create/update records from host instructions:
   - usually `A`/`ALIAS` for apex
   - `CNAME` for `www`
4. Set primary domain to `www.iquestlearningsolutions.com` (or apex, if preferred).
5. Enable/verify automatic HTTPS certificate.
6. After propagation, verify both domain versions redirect to one canonical host.

## SEO + Social Metadata Notes

`index.html` includes:

- canonical URL
- Open Graph tags
- Twitter card tags
- robots directives

`public/` includes:

- `social-preview.svg`
- `robots.txt`
- `sitemap.xml`

If your final domain is different, update:

- canonical URL in `index.html`
- `og:url`, `og:image`, and `twitter:image`
- domain in `robots.txt` and `sitemap.xml`
