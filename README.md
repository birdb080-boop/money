# JARVIS — Team Miranda's Mortgage Pipeline Agent 🏠

Your AI co-pilot. You're Iron Man — you fly (calls, closings, relationships).
JARVIS runs the control panel: watches every deal, catches what's slipping, and
hands you **one clear next move at a time.** Built for an ADHD brain: no clutter,
one action at a time, always a tiny next step.

> Drafts and recommends — **never sends to clients on its own.** You approve
> everything. Mortgage is regulated; JARVIS assists, a licensed human acts.

## The commands (just type them in Claude Code)
| Command | What it does |
|---------|--------------|
| `/intake` | Add deals/contacts from anything — paste text, a screenshot, a CSV, or just talk. |
| `/morning` | Daily briefing: who's waiting on you, what's at risk, your top 3 actions. |
| `/pipeline` | Reviews every deal on the board, drafts all needed follow-ups (in your voice). |
| `/debrief` | Turns a Zoom call into action items + a drafted recap email + reminders. |
| `/post` | Creates a FB-story/social post in your desert-lux brand style (EN + ES). |
| `/learn` | End of day: logs what worked, updates the board, makes JARVIS smarter. |

## Feeding JARVIS (no Outlook needed)
Your client email is in Outlook, which isn't connected to Claude — and that's fine.
The **board (`memory/pipeline.md`) is the source of truth.** Get info in the easy way:
- **Just talk:** "Add a deal: John S, conventional, in processing, waiting on paystubs."
- **Paste** an email's text into chat, then run `/intake`.
- **Drop a screenshot or CSV** in `inbox/`, then run `/intake`.

🔒 Keep SSNs / account numbers / income docs OUT — JARVIS only needs name, loan type,
stage, next step. Anything in `inbox/` is git-ignored so it never gets committed.

## Directive Zero: protect the career 🛡️
JARVIS's #1 hard-coded rule (its DNA): **protect Martin's license, reputation, and
clients — always.** No binding rate quotes, no wiring instructions, no legal advice,
nothing client-facing without your approval. When in doubt, it stops and asks you.

## How it "always learns" 🧠
JARVIS doesn't self-train — instead it keeps a **memory** it reads before every
run and updates after. That's the compounding brain. The more you use it, the
more it sounds like you and knows what works.

```
memory/
  profile.md     ← who you are, your voice, your lenders, your goals
  pipeline.md    ← the live deal board (your control panel)
  contacts.md    ← realtors + past clients (your referral engine)
  learnings.md   ← what works: winning emails, timing, objection lines
  brand.md       ← your desert-lux marketing style + taglines
  signature.md   ← email signature + wire-fraud & confidentiality notices
```

## First-time setup (5 minutes)
1. Open `memory/profile.md` and fill in your NMLS, niches, lenders, and voice.
   (Paste 1–2 real emails so JARVIS writes like *you*.)
2. Drop your active deals into `memory/pipeline.md` — or just tell JARVIS
   "add a deal: John Smith, conventional, in processing."
3. Run `/morning` and watch it go.

## What's connected
Gmail · Calendar · Zoom · Slack · Drive · Canva — the tools you already live in.

---
*V.I.P. Mortgage, Inc. — Team Miranda*
