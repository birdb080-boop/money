# 🚀 Go-Live Playbook — HELOC Funnel (Team Miranda)

> ⛔ **STOP — approval gate first.** Do **not** deploy to a public URL until every box in
> `APPROVAL-CHECKLIST.md` is signed off by you (and V.I.P. compliance). Until then it stays
> in private preview. This is what protects your license.

**The goal:** turn ad clicks → leads → applications → funded HELOC cash-outs.
**Your rule (Directive Zero):** the funnel captures and routes leads and *drafts*
follow-ups. **It never texts, emails, or calls a borrower on its own.** You approve
and send every message yourself.

Do these **7 steps in order.** Each one is small. Everything you edit lives in **`config.js`.**

---

## ① Decide where leads land (2–10 min) — *the only must-do*
Pick ONE:

**⚡ Fastest — straight to your inbox (no account):**
1. Open `config.js`, set `leadEmail: "martin.miranda@vipmtginc.com",`
2. Deploy (Step ④), submit one test lead, and click the **one-time confirmation email** FormSubmit sends you. Done — every lead now emails you.
   *(Good to launch today. For CRM routing + instant texts, upgrade to the Zapier option below anytime.)*

**Formspree (free, dashboard + spam filtering):**
1. Go to **formspree.io** → sign up (free tier is fine to start).
2. Create a form → copy its endpoint URL (looks like `https://formspree.io/f/abc123`).
3. Open `config.js`, paste it: `leadEndpoint: "https://formspree.io/f/abc123",`
4. Set Formspree to **email you instantly** on every submission. Done — leads now hit your inbox.

**More powerful — Zapier (routes to your CRM + texts you):** see the blueprint at the bottom.

> ✅ Test it: open the page, run the estimator, submit a fake lead, confirm you got it.

---

## ② Set your application link (5 min) — *this is the money step*
This is the button that sends a hot lead **straight into a real application** while they're excited.
1. Get your secure online application URL (Floify, SimpleNexus/nCino, Encompass Consumer Connect, Blend, Arive — whatever V.I.P. uses).
2. Paste it: `applicationUrl: "https://your-application-link",`
3. Now the "thank you" screen shows **"Start my application →"**. Leave it `""` and it just drives calls instead.

---

## ③ Add your Meta Pixel (10 min) — *makes ads cheaper over time*
1. **business.facebook.com → Events Manager → Data Sources → add a Web data source (Pixel).**
2. Copy the **Pixel ID** (a number).
3. Paste it: `metaPixelId: "1234567890",`
4. The page now reports a **Lead** event to Facebook (no personal info — just "a lead happened"), so Meta learns who to show your ad to. Optionally add `ga4Id` for Google Analytics.

---

## ④ Deploy (5 min)
From the `funnel/` folder:
```bash
npx vercel --prod
```
Drag-and-drop to Netlify works too. Copy your live URL (e.g. `https://your-funnel.vercel.app`).

---

## ⑤ Two quick compliance confirmations (15 min)
- **Reviews:** the "Real People. Real Results." cards are placeholders. Put in **real** Google/Zillow reviews (with the client's OK). Don't ship made-up ones.
- **Privacy/Terms:** `privacy.html` and `terms.html` are solid templates — have your **compliance/legal team glance at them** and confirm the SMS program description matches what you actually send.
- The page already has: Equal Housing mark, full NMLS/license block, NMLS Consumer Access link, TCPA consent + STOP/HELP, "not a commitment to lend," and **no rates/APRs** (which keeps you clear of TILA trigger-term rules).

---

## ⑥ Launch the Facebook ad — *housing rules matter here*
- In Ads Manager, set **Special Ad Category = Credit / Housing.** (Mortgage ads are required to. This removes age/gender/ZIP targeting — that's normal and keeps you fair-lending compliant.)
- Put your **privacy policy URL** (`.../privacy.html`) in the ad where Meta asks.
- Point the ad at your live funnel URL. Keep the ad creative honest — no rate claims, no "guaranteed approval."

---

## ⑦ Work the leads (every day) — *where loans actually get funded*
Every lead email is **auto-tagged by priority** so you know who to call first:
🔥 **HOT** (big equity + strong credit) → call within minutes · 🟡 **WARM** → same day · 🌱 **NURTURE** → drip.

When a lead comes in:
1. **You** call/text fast (speed-to-lead is the #1 conversion factor — minutes beat hours). Work 🔥 HOT first.
2. Ask JARVIS to **draft** the follow-up text/email in your voice → you review → you send.
3. Send them the **application link**; help them finish the 1003.
4. Log it. Ask JARVIS `/pipeline` to keep every deal moving.

> 5 closings of ~$1M cash-out each (or more smaller ones) = your $5M target. The math
> that gets you there: **cheap qualified leads (good ad + pixel) × fast follow-up
> (you) × an easy application (step ②).**

---

## 🔌 Zapier blueprint (optional, recommended) — instant routing, no auto-contact
Create a Zap:
1. **Trigger:** *Webhooks by Zapier → Catch Hook.* Copy the hook URL into `config.js` → `leadEndpoint`.
2. **Action A — your CRM:** create a lead/contact (Lofty, Salesforce, Encompass, etc.) from the JSON fields: `name, email, phone, zip, homeValue, mortgageBalance, creditBand, goal, estimate, lang, fbclid`.
3. **Action B — alert YOU instantly:** send *yourself* a text/email/Slack with the lead's details so you can follow up in minutes.
4. **Action C (optional) — draft, don't send:** create a *draft* email/SMS for you to approve. **Never** wire an auto-reply to the borrower — that's the Directive Zero line.

---
*Questions? Just ask JARVIS. V.I.P. Mortgage, Inc. — Team Miranda · Equal Housing Lender.*
