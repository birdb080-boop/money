# Always-On JARVIS — the 3 levels (and how to actually run it 24/7)

You asked for the *real* JARVIS — humming in the background, always learning, running
without you. Here's the honest architecture and how to get there.

## Level 1 — On-demand brain ✅ (you have this now)
- The HUD remembers everything and compounds (always learning).
- **Genius Mode** answers anything about your whole world.
- The `/jarvis` command runs a full autonomous pass on demand: briefing + drafts the
  day's follow-ups into `memory/queue.md`, learns, flags risk. **Drafts only — never sends.**

## Level 2 — Scheduled JARVIS ⏰ (the realistic "always-on")
Run `/jarvis` **on a schedule** without you lifting a finger:
- **Claude Code on the web** supports **scheduled triggers**. Set one to run `/jarvis`
  every morning (e.g. 6:30am). It reads your pipeline, writes your briefing, and fills the
  approval queue before you wake up. You open the app, review, tap-send.
- Docs: https://code.claude.com/docs/en/claude-code-on-the-web (Triggers / scheduling).
- This is the closest thing to "JARVIS running on its own" without standing up a server.
  Cost: just your Claude usage.

## Level 3 — True 24/7 reactive agent 🤖 (the full Iron Man)
Always-listening, reacts to events in real time (a client texts → JARVIS drafts a reply
into your queue instantly; a rate moves → it pings you). This needs:
- A small **always-running backend** (a cheap cloud worker), your **Claude key**, your
  **business-text line API** (OpenPhone/Twilio), and optional ElevenLabs for voice.
- Everything still routes through **your approval** — JARVIS drafts, you send. (Your rule,
  permanent.)
- This is a real build (a few days of setup + ~$15–40/mo in services). Worth it once the
  app + scheduled run are proving their value.

## The one rule that never changes
At every level: **JARVIS drafts and queues; it never contacts anyone without your
per-message approval.** Always-on means always *thinking* for you — not acting for you.

## Recommended path
1. Use `/jarvis` on demand this week (free, now).
2. Add the **scheduled morning run** (Level 2) — biggest bang, minimal setup.
3. Build **Level 3** once your text line is live and you want real-time.
