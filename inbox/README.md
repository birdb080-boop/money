# 📥 Inbox — drop zone for JARVIS

Since your client email is in Outlook (not connected to Claude), this is where you
hand JARVIS information the easy way. Drop anything here, then run `/intake`.

## What you can drop here
- **Screenshots** of your Outlook inbox or LOS pipeline (`.png`/`.jpg`) — JARVIS reads them.
- **CSV exports** from your LOS (Encompass, Arive, etc.) — JARVIS parses them.
- A plain **`.txt` / `.md` list** of deals or to-dos.

## Even easier (no files needed)
Just **talk to JARVIS** in chat:
> "Add a deal: John S, conventional purchase, in processing, waiting on paystubs,
> closing 6/30, realtor Mike Torres."

Or **paste** an email's text straight into the chat and run `/intake`.

## 🔒 Safety
Don't drop anything with **SSNs, account numbers, or income docs** — JARVIS only needs
names, loan type, stage, and next step. It will scrub sensitive details if it sees them.

*(Files you drop here are git-ignored by default so nothing sensitive gets committed.)*
