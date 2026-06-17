/* ============================================================================
   TEAM MIRANDA — HELOC FUNNEL CONFIG
   ----------------------------------------------------------------------------
   This is the ONE place to set things up. Edit the values, save, redeploy.
   You do NOT need to touch index.html. Anything left as "" is simply skipped.
   ============================================================================ */
window.FUNNEL_CONFIG = {

  /* ---- WHERE LEADS GO ----------------------------------------------------
     FASTEST START (zero accounts): just put your email in `leadEmail` below and
     leads are emailed straight to you (via FormSubmit — you click one confirmation
     link the first time). Great for going live today.

     MORE POWERFUL: paste a webhook in `leadEndpoint` to route into a CRM + text
     yourself instantly (Formspree URL, or a Zapier "Catch Hook" — see SETUP.md).
     If `leadEndpoint` is set it wins; otherwise `leadEmail` is used; if both are
     empty the form runs in demo mode (thank-you screen, nothing sent).
     ⚠️ Leads contain borrower info — these route it to YOUR inbox/CRM only. */
  leadEmail: "",      // e.g. "martin.miranda@vipmtginc.com"
  leadEndpoint: "",

  /* ---- THE APPLICATION LINK (this is the money step) ---------------------
     Your secure online application (1003 / point-of-sale). Examples:
       • Floify, SimpleNexus/nCino, Encompass Consumer Connect, Blend, Arive, etc.
     When set, the "thank you" screen shows a big "Start my application" button
     that sends the borrower straight into your real app. Leave "" to hide it
     and just drive calls instead. */
  applicationUrl: "",

  /* ---- BOOK-A-CALL LINK (speed-to-lead = more funded loans) --------------
     Your scheduling link (Calendly, Acuity, Google Appointments, etc.). When set,
     the "thank you" screen offers "Book a quick call" so a hot lead locks in time
     with you immediately. Leave "" to hide it. */
  bookingUrl: "",

  /* ---- FACEBOOK / META ADS TRACKING --------------------------------------
     Your Meta Pixel ID (Events Manager → Data Sources). Powers ad optimization
     so Facebook finds more people who actually submit. Leave "" to skip.
     NOTE: we fire a "Lead" event with NO personal info — borrower PII is never
     sent to Meta, only the fact that a lead happened. */
  metaPixelId: "",

  /* ---- GOOGLE ANALYTICS 4 (optional) -------------------------------------
     Your GA4 Measurement ID, e.g. "G-XXXXXXX". Leave "" to skip. */
  ga4Id: "",

  /* ---- CONTACT (used by buttons + footer) -------------------------------- */
  officePhone:        "+15207194130",
  officePhoneDisplay: "(520) 719-4130",
  mobilePhone:        "+15204615054",
  email:              "martin.miranda@vipmtginc.com",

  /* ---- FOOTER WEBSITE LINK ------------------------------------------------
     Your site link forwards to your Lofty page. For a lead funnel it's usually
     best to keep visitors ON this page, so this is OFF by default. Set to true
     to show the website link in the footer again. */
  showWebsiteLink: false,
  website: "https://martinmiranda.vipmtginc.com",

  /* ---- THE ESTIMATE MATH --------------------------------------------------
     Illustrative max combined loan-to-value used by the estimator. 0.85 = 85%.
     This is an ESTIMATE only (clearly disclaimed); underwriting sets the real number. */
  maxCLTV: 0.85
};
