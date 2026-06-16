/* JARVIS data feed — JARVIS updates this when you run /intake or /learn.
   Edit by hand anytime, or just tell JARVIS "update the HUD". */
window.JARVIS_DATA = {
  operator: "Martin",
  team: "TEAM MIRANDA",
  unit: "V.I.P. MORTGAGE",
  mark: "MK I",

  // Your live deals. stage: Lead | App | Processing | Underwriting | CTC | Closed
  // flag: "risk" (needs you / at risk) | "wait" (waiting on others) | "ok"
  deals: [
    { name: "Sarah L.",  type: "Conventional", stage: "Processing",   flag: "risk", next: "Send updated paystubs request", close: "06/30" },
    { name: "The Garcias", type: "Refi watch",  stage: "Lead",        flag: "ok",   next: "Quarterly check-in",          close: "" },
    { name: "James R.",  type: "VA Purchase",   stage: "Underwriting", flag: "wait", next: "Waiting on appraisal",        close: "07/10" },
    { name: "Mendez Fam.", type: "FHA Purchase", stage: "App",        flag: "risk", next: "Collect bank statements",      close: "" }
  ],

  // Top priorities JARVIS reads aloud (keep to 3 — ADHD mode)
  priorities: [
    "Sarah L. — request updated paystubs before processing stalls.",
    "Mendez family — collect bank statements to keep the app moving.",
    "Post today's pre-approval flyer and reply to every DM."
  ],

  // One-line market / motivation note for the ticker
  ticker: "LOCAL EXPERTS · REAL PEOPLE · REAL RESULTS · LET'S GET YOU HOME",

  monthClosed: 3,      // closings logged this month (momentum fuel)
  monthGoal: 8         // your target
};
