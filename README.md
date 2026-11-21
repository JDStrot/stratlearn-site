# stratlearn.co

Marketing site for STRATLEARN (The Strategic Learning Co.) and Pilates Daddy.
Astro static site, hosted on Cloudflare Pages, contact form via a Pages Function + Resend, spam protection via Turnstile, bookings via Cal.com.

## Pages
- `/` — home: Learning Consultancy, Fractional L&D, eLearning Library, Workshops & Team Building, About, Contact
- `/pilates-daddy` — Pilates Daddy events and sessions, with booking form

## Edit
- Site settings (email, Cal.com link, Turnstile site key): `src/site.ts`
- Copy: `src/pages/index.astro`, `src/pages/pilates-daddy.astro`
- Brand colors and fonts: top of `src/layouts/Base.astro`
- Logos: `public/brand/`, `public/pilates-daddy/`

## Run locally
```
npm install
npm run dev
```

## Deploy (Cloudflare Pages)
1. Push this folder to its own GitHub repo (keep it separate from product code).
2. Cloudflare > Workers & Pages > Create > Pages > Connect to Git. Framework preset: Astro. Build command `npm run build`, output `dist`.
3. Custom domains: add `stratlearn.co` and `www.stratlearn.co`; add a Redirect Rule www → apex (301, keep path). Test a deep link like `www.stratlearn.co/pilates-daddy`.
4. Resend: add and verify `stratlearn.co`, create an API key.
5. Turnstile: create a widget for stratlearn.co; put the site key in `src/site.ts`.
6. Pages > Settings > Variables and secrets (Production and Preview): `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`, `TURNSTILE_SECRET_KEY`.
7. Cal.com: create an event type and put the link (e.g. `stratlearn/discovery`) in `src/site.ts`.
8. Add Cloudflare Web Analytics; submit `https://stratlearn.co/sitemap-index.xml` in Google Search Console.

If the form ever fails to send, the page shows the email address instead, so no enquiry is lost.
