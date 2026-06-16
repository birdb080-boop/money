# Business Texting Line — Setup (so texts auto-log + AI can send safely)

Goal: a business number you text clients from. It keeps personal iMessage separate
(better for compliance records), **auto-logs every text both ways**, and has an **API**
JARVIS connects to — so the Follow-Up Queue can send through it and incoming texts log
to the right client automatically.

## Recommended: OpenPhone (easiest) — ~$15/mo
1. Go to **openphone.com** → Start free trial → **Business** plan.
2. **Pick a local number** (a Tucson 520 area code looks local to your clients).
3. Install the **OpenPhone app** on your iPhone (and desktop). Text clients from this
   number — it works like Messages, but every thread is logged and exportable.
4. **A2P 10DLC registration** (required for US business texting — OpenPhone walks you
   through it in Settings → Phone numbers → register):
   - Business legal name: **V.I.P. Mortgage, Inc.** (or your DBA "Team Miranda")
   - EIN, business address (5401 N Oracle Rd, Tucson, AZ 85704)
   - Sample messages (use your MARTY follow-ups), opt-in description
   - Approval is usually 1–3 business days. Until approved, texting works limited.
5. In OpenPhone → **Settings → Integrations / API** → generate an **API key**. That key
   is what JARVIS connects to (give it to the connector, not into the public app).

### Cheaper / more flexible alternative: Twilio (~$1–2/mo number + ~$0.008/text)
Fully programmable, lowest per-text cost, but needs the connector wired (no consumer app).
Same 10DLC step applies. Pick this only if you want max control + lowest cost.

## How JARVIS plugs in (the "last mile" connector)
Once you have the line + API key, a small always-on connector lets JARVIS:
- **Send** approved Queue messages through the line (one tap → real text from your number)
- **Log incoming + outgoing** texts to the right client's history automatically
- Feed the AI so follow-ups reference real conversation, not just notes

The connector is a small backend (the only piece not yet built — the per-client log and
draft+queue are done). Say the word once your line is live and we'll spec it.

### ⛔ APPROVAL-ONLY — non-negotiable
The connector will **never auto-send**. It sends **only** the messages Martin approves
in the Follow-Up Queue (one tap each). No message reaches a client, realtor, or anyone
without Martin's per-message review — by design, permanently. The AI drafts; Martin sends.

## Compliance reminders (protect the license)
- Get **opt-in** before texting (a checkbox on your app/website, or "reply YES").
- Honor **STOP** instantly (the platform handles this automatically).
- Keep texts professional — they're records. No binding rate/term promises (persona R15).
