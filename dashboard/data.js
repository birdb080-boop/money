/* JARVIS data feed — grows as you talk to it (auto-saves on your phone). */
window.JARVIS_DATA = {
  operator: "Martin",
  unit: "V.I.P. MORTGAGE",

  // Today's rates — pulled from your Mortgage News Daily screenshot.
  // Update anytime: share a new screenshot or say "set rates to ...".
  rates: {
    source: "Mortgage News Daily",
    updated: "Jun 15, 2026",
    conv30: 6.56, conv15: 6.12, fha30: 6.13, va30: 6.15, jumbo30: 6.83, arm: 6.22,
    tenYr: 4.45,
    headline: "Mortgage rates hit one-month lows",
    commentary: "MBS are moderately stronger today — that upward movement could nudge rates lower. Great moment to reach hesitant buyers and fence-sitters."
  },

  // stage: Lead | App | Processing | Underwriting | CTC | Closed
  // flag: "risk" (needs you) | "wait" (waiting on others) | "ok"
  // phone: optional — enables one-tap Text/Call (stays only on your phone)
  deals: [
    { name: "Sarah L.",    type: "Conventional", stage: "Processing",   flag: "risk", next: "Updated paystubs",     phone: "" },
    { name: "Mendez Fam.", type: "FHA",          stage: "App",          flag: "risk", next: "Bank statements",      phone: "" },
    { name: "James R.",    type: "VA",           stage: "Underwriting", flag: "wait", next: "Waiting on appraisal", phone: "" },
    { name: "The Garcias", type: "Refi watch",   stage: "Lead",         flag: "ok",   next: "Quarterly check-in",   phone: "" }
  ],

  // Follow-ups JARVIS reminds you about (pops up + beeps + speaks when due)
  followups: [
    { id: "demo1", name: "Sarah L.", note: "She asked about her rate", due: 0, done: false, alerted: true }
  ],

  priorities: [
    "Get Sarah L.'s updated paystubs so processing doesn't stall",
    "Collect the Mendez family's bank statements",
    "Post today's pre-approval flyer and reply to every DM"
  ],

  notes: [],
  history: [],
  rateNote: "",
  monthClosed: 3,
  monthGoal: 8
};
