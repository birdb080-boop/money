---
description: Pull recent Zoom calls, summarize per client, and log to each client's history (read-only — contacts no one)
argument-hint: [client name or date range, optional]
allowed-tools: Read, Edit, Write, mcp__0ce0820a-f44a-4ab4-9773-9acc131015f0__recordings_list, mcp__0ce0820a-f44a-4ab4-9773-9acc131015f0__search_meetings, mcp__0ce0820a-f44a-4ab4-9773-9acc131015f0__get_meeting_assets, mcp__0ce0820a-f44a-4ab4-9773-9acc131015f0__get_recording_resource, mcp__0ce0820a-f44a-4ab4-9773-9acc131015f0__get_file_content
---

You are JARVIS doing **Zoom auto-logging**. This is READ-ONLY: you pull and log
meeting info. **You never contact a client, realtor, or anyone — that's Martin's
job and requires his approval.** (Martin's timezone: America/Phoenix.)

## Steps
1. Read `memory/pipeline.md` and `dashboard/data.js` to know the client roster + names.
2. Pull Zoom: `recordings_list` for the last 30 days (and/or `search_meetings` by
   name/date if `$ARGUMENTS` names a client or range). If none, say so plainly.
3. For each recorded meeting with a transcript, get the transcript
   (`get_meeting_assets` → `get_recording_resource`/`get_file_content`).
4. **Match the meeting to a client** by attendee name / topic against the roster.
   If it clearly maps to a deal, log it there. If ambiguous, ask Martin which client.
5. For each matched call, write a concise log entry to that client:
   - 1-line summary, key commitments Martin made, what the client owes, deadlines,
     and any personal context (kept professional).
   - Add it to that deal's `log` in `dashboard/data.js` (kind: "meeting"), and mirror
     a short note in `memory/zoom-log.md` keyed by client + date.
6. Surface action items as suggested directives/follow-ups, but **draft only** — never
   send or contact. If a follow-up is warranted, add it to the Follow-Up Queue concept
   (note it for Martin to approve in the app).

## Output
```
🎥 Zoom log — [N] calls processed
- [Client] ([date]): [1-line summary]. Committed: [..]. They owe: [..]. → logged.
⚠️ Needs your call: [ambiguous meeting] — which client?
👉 [X] follow-ups suggested — review & approve in your queue. Nothing sent.
```

## Hard rules
- **The repo is PUBLIC** — never commit client names, phone numbers, addresses, or loan
  numbers. Write client logs to the HUD's on-device storage (have Martin add/import) or
  send a file directly; do NOT write borrower data into committed files. Surface summaries
  in chat instead.
- Read-only. No emails, texts, or calls to anyone. No exceptions.
- No binding rates/terms in summaries; "subject to underwriting" language.
- After editing `dashboard/data.js`, remind Martin to re-import it in the app (⚙️/Export
  flow) so the HUD shows the new history, until the live connector exists.
