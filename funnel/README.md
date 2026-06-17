# HELOC Equity Funnel — Team Miranda

A single-page home-equity (HELOC) lead funnel in Martin's **desert-lux** brand.
Built to run the same way as the reference Facebook-ad page (`?fbclid=…`): one
static page you can drop on Vercel, Netlify, or any host.

## 👉 New here? Read `SETUP.md` — the 7-step go-live playbook.

## Go live in one click
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/birdb080-boop/money&project-name=team-miranda-heloc&root-directory=funnel)

Or from this folder: `npx vercel --prod`. Lead capture is pre-wired to Martin's
inbox (`config.js` → `leadEmail`); click FormSubmit's one-time confirmation on the
first test lead and you're collecting leads.

## Verify it works
The funnel logic is covered by an end-to-end test (runs in CI on every push):
```bash
node funnel/test/funnel.test.js
```
It drives the real code through step gating, the equity math, and lead routing.

## What's here
```
funnel/
  index.html               ← the landing page (HTML + CSS + JS)
  config.js                ← ⭐ the ONE place you edit: lead endpoint, app link, pixel, etc.
  SETUP.md                 ← step-by-step go-live + Facebook ad + Zapier blueprint
  privacy.html             ← privacy policy (Meta ads require it)
  terms.html               ← terms + SMS/TCPA program policy
  budget.html              ← 💰 budget & ROI tracker — hyper-tracks spend, shows where to reinvest
  APPROVAL-CHECKLIST.md    ← ✅ sign-off gate — nothing goes live until you approve every box
  team-miranda-logo.png    ← logo
  img/martin-headshot.png  ← Martin's headshot (Meet Martin section)
```

> ⛔ **Approval gate:** the funnel stays in private preview until `APPROVAL-CHECKLIST.md`
> is fully signed off (by you + compliance). Open `budget.html` in your browser to track
> ad spend, cost-per-lead, ROAS, and get a "put your next dollar here" recommendation.

## What it does (the lead → application machine)
- **Interactive equity estimator** — the highest-converting pattern there is (quizzes
  convert far better than static forms). Value → balance → credit → goal → contact.
- **Lead → application handoff** — the thank-you screen drives the hot lead straight
  into your real online application (`applicationUrl` in `config.js`).
- **Conversion mechanics** — exit-intent recovery popup, sticky mobile CTA, autofill,
  trust signals (headshot, NMLS badge, "no credit pull"), and a fast one-question-at-a-time flow.
- **Ad optimization** — fires a Meta Pixel `Lead` event (no PII) so Facebook learns who
  to target; optional GA4. Captures `fbclid` for attribution.
- **Compliance built in** — Equal Housing, NMLS + Consumer Access link, TCPA consent with
  STOP/HELP, privacy + terms pages, "not a commitment to lend," and **no rates/APRs**.
- **Directive Zero safe** — captures and routes leads only. **Never auto-contacts a
  borrower.** Martin approves and sends every message himself.

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
