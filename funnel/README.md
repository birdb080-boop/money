# HELOC Equity Funnel — Team Miranda

A single-page home-equity (HELOC) lead funnel in Martin's **desert-lux** brand.
Built to run the same way as the reference Facebook-ad page (`?fbclid=…`): one
static page you can drop on Vercel, Netlify, or any host.

## What's here
```
funnel/
  index.html               ← the whole landing page (HTML + CSS + JS, one file)
  team-miranda-logo.png    ← logo used in the header + footer
  img/martin-headshot.png  ← Martin's headshot (Meet Martin section)
```

## Photos & how to swap them
- **Martin's headshot** is self-hosted at `img/martin-headshot.png` and shows in the
  "Meet Martin" section. Replace that file (keep the name) to update it.
- The two full-width **photo bands** (home + family) use **royalty-free stock photos
  hotlinked from Unsplash** as placeholders. To use your own photography (recommended —
  even better, real local homes or a client family with their consent), edit the
  `background-image: …url('…')` in each `<section class="band" …>` and point it at your
  image. The dark gradient overlay doubles as a fallback, so the bands still look right
  even if a photo fails to load.
- Heads-up: the image CDNs are blocked from the build sandbox, so the stock photos can't
  be downloaded and self-hosted here — they load in your browser and on the live site,
  which both have open internet.

## Color note
The palette got a warm refresh: the desert-lux cream/gold/charcoal base now carries a
**terracotta/clay accent** (section labels, the "Meet Martin" tags, badges, and band
accents). Tune it via the `--clay` / `--clay2` variables in `:root`.

## Features
- **Multi-step equity estimator** (home value → balance → credit band → goal → contact).
  Shows an illustrative "up to" equity number, then captures the lead.
- **EN / ES toggle** in the top bar (auto-detects Spanish browsers). Bilingual per brand.
- **Desert-lux styling** — cream/sand background, gold/bronze accents, charcoal serif
  headlines (Playfair Display) with a gold-script accent word (Great Vibes).
- **Compliance built in** — Equal Housing Lender mark, full NMLS/license block,
  TCPA-style consent checkbox, and an advertising/"not a commitment to lend" disclaimer.
  **No rates or APRs anywhere** (avoids TILA/Reg Z trigger-term disclosure rules).
- **No auto-contact.** The form only *captures* a lead and shows a thank-you. JARVIS /
  the site never texts or emails the borrower automatically — Martin follows up himself.

## Two things to do before it goes live
1. **Real reviews.** The "Real People. Real Results." cards are placeholders. Replace
   them with genuine Google/Zillow reviews (with the client's consent + first name /
   last initial). Don't publish made-up testimonials — that's an advertising-rules risk.
   Look for the `COMPLIANCE NOTE FOR MARTIN` comment in `index.html`.
2. **Where leads go.** Set `LEAD_ENDPOINT` near the top of the `<script>` in `index.html`
   to your secure form handler — a [Formspree](https://formspree.io) URL, a Zapier catch
   hook into your CRM, etc. Leave it as `""` to run in **demo mode** (thank-you screen,
   nothing sent; submissions just log to the browser console for testing).

   The lead payload sent is: name, email, phone, ZIP, home value, mortgage balance,
   credit band, goal, the estimate shown, language, and the `fbclid` (for ad attribution).
   ⚠️ Pick an endpoint that handles this securely — it contains borrower PII. Never wire
   it to anything that posts the data publicly, and never commit captured leads to this repo.

## Deploy (Vercel, like the reference page)
From this `funnel/` folder:
```bash
npx vercel        # preview
npx vercel --prod # live
```
Or drag the folder into Netlify, or point any static host at it. No build step.

## Test locally
```bash
cd funnel && python3 -m http.server 8080
# open http://localhost:8080
```

---
*V.I.P. Mortgage, Inc. — Team Miranda · Martin Miranda NMLS 1683424 · Co. NMLS 145502 · Equal Housing Lender*
