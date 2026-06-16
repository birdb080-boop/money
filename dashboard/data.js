/* JARVIS data feed — grows as you talk to it (auto-saves on your phone). */
window.JARVIS_DATA = {
  operator: "Martin",
  unit: "V.I.P. MORTGAGE",

  // Genius Mode (optional): paste a Claude API key in ⚙️ Settings to chat freely.
  // Blank = runs on the free built-in brain. Stored only on your phone.
  apiKey: "",
  model: "claude-opus-4-8",

  commissionPct: 1.0,   // your commission % — say "set commission to 1.25"
  monthVolume: 1150000, // closed loan volume this month (for earned $)

  // Today's rates — from your Mortgage News Daily screenshot.
  // Update: tap 📷 FEED SCREENSHOT, or say "set rates to ...".
  rates: {
    source: "Mortgage News Daily",
    updated: "Jun 15, 2026",
    conv30: 6.56, conv15: 6.12, fha30: 6.13, va30: 6.15, jumbo30: 6.83, arm: 6.22,
    tenYr: 4.45,
    headline: "Mortgage rates hit one-month lows",
    commentary: "MBS are moderately stronger today — that upward movement could nudge rates lower. Great moment to reach hesitant buyers and fence-sitters."
  },

  // amount = loan size (drives your money/commission board)
  deals: [
    { name: "Sarah L.",    type: "Conventional", stage: "Processing",   flag: "risk", next: "Updated paystubs",     amount: 415000, phone: "" },
    { name: "Mendez Fam.", type: "FHA",          stage: "App",          flag: "risk", next: "Bank statements",      amount: 320000, phone: "" },
    { name: "James R.",    type: "VA",           stage: "Underwriting", flag: "wait", next: "Waiting on appraisal", amount: 295000, phone: "" },
    { name: "The Garcias", type: "Refi watch",   stage: "Lead",         flag: "ok",   next: "Quarterly check-in",   amount: 0,      phone: "" }
  ],

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
