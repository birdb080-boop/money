/* JARVIS data feed — JARVIS updates this as you talk to it (and it saves on your
   phone automatically). Edit by hand anytime, or just talk to it. */
window.JARVIS_DATA = {
  operator: "Martin",
  unit: "V.I.P. MORTGAGE",

  // stage: Lead | App | Processing | Underwriting | CTC | Closed
  // flag: "risk" (needs you) | "wait" (waiting on others) | "ok"
  // phone: optional — enables one-tap Text/Call. (Stays only on your phone.)
  deals: [
    { name: "Sarah L.",    type: "Conventional", stage: "Processing",   flag: "risk", next: "Updated paystubs",      phone: "" },
    { name: "Mendez Fam.", type: "FHA",          stage: "App",          flag: "risk", next: "Bank statements",       phone: "" },
    { name: "James R.",    type: "VA",           stage: "Underwriting", flag: "wait", next: "Waiting on appraisal",  phone: "" },
    { name: "The Garcias", type: "Refi watch",   stage: "Lead",         flag: "ok",   next: "Quarterly check-in",    phone: "" }
  ],

  priorities: [
    "Get Sarah L.'s updated paystubs so processing doesn't stall",
    "Collect the Mendez family's bank statements",
    "Post today's pre-approval flyer and reply to every DM"
  ],

  notes: [],
  history: [],
  rateNote: "",          // say "set rates to ..." and JARVIS keeps it ready
  monthClosed: 3,
  monthGoal: 8
};
