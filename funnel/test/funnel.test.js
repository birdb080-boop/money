/* End-to-end functional test for the HELOC funnel.
   Loads the REAL config.js + the REAL inline <script> from index.html under a
   minimal DOM shim and drives the full flow: step navigation, validation gating,
   equity math, and lead routing. Run: `node funnel/test/funnel.test.js`         */
const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');

/* ---------- tiny DOM shim (only what the funnel touches) ---------- */
function mkEl(id){
  const handlers = {};
  return {
    id, value:'', textContent:'', href:'', disabled:false, checked:false,
    style:{}, dataset:{}, __handlers:handlers,
    classList:{ _s:new Set(), add(c){this._s.add(c);}, remove(c){this._s.delete(c);},
                contains(c){return this._s.has(c);}, toggle(c,f){f?this._s.add(c):this._s.delete(c);} },
    addEventListener(t,fn){ (handlers[t]=handlers[t]||[]).push(fn); },
    querySelector(sel){ if(sel.indexOf('company')>=0) return {value:''}; return mkEl('q'); },
    querySelectorAll(){ return []; },
    appendChild(){}, getAttribute(){return null;}, setAttribute(){}, scrollIntoView(){}
  };
}
const registry = {};
function byId(id){ return registry[id] || (registry[id] = mkEl(id)); }

global.window = {};
global.navigator = { language:'en-US' };
global.location = { search:'?fbclid=TESTCLICK' };
let lastFetch = null;
global.fetch = (url, opts) => { lastFetch = { url, opts }; return { then(fn){ fn(); return { catch(){} }; } }; };
global.document = {
  getElementById: byId,
  querySelector(sel){
    if(sel.indexOf('input[name="company"]')>=0) return { value:'' };
    if(sel.indexOf('.step[data-step=')>=0) return mkEl('step');
    return mkEl('q');
  },
  querySelectorAll(sel){
    if(sel === '.step') return [mkEl('s1'),mkEl('s2')];
    return [];   // tel/mailto/a[href] lookups, .opt, etc.
  },
  createElement(){ return mkEl('created'); },
  getElementsByTagName(){ return [mkEl('head')]; },
  addEventListener(){},
  documentElement:{}
};
global.window.addEventListener = () => {};
global.window.scrollY = 0; global.window.innerWidth = 1200;

/* ---------- load REAL config.js then REAL inline funnel script ---------- */
const cfg = fs.readFileSync(path.join(root,'config.js'),'utf8');
eval(cfg); // sets window.FUNNEL_CONFIG

const html = fs.readFileSync(path.join(root,'index.html'),'utf8');
const scripts = html.match(/<script>([\s\S]*?)<\/script>/g).map(s=>s.replace(/<\/?script>/g,''));
const appJs = scripts[scripts.length-1];

// expose the funcs/state we want to drive by appending exports to the eval'd scope
const harness = appJs + '\n;global.__T = { state, next, computeResult, form:document.getElementById("form") };';
eval(harness);
const T = global.__T;

/* ---------- assertions ---------- */
let pass = 0, fail = 0;
function ok(name, cond){ cond ? (pass++, console.log('  ✓ '+name)) : (fail++, console.log('  ✗ '+name)); }

console.log('HELOC funnel — end-to-end logic test\n');

// 1) step flow + validation
byId('homeValue').value = '450,000';
T.next(1);
ok('advances past step 1 with a valid home value', T.state.step === 2);
ok('captured home value as a number', T.state.homeValue === 450000);

byId('balance').value = '220000';
T.next(2);
ok('advances past step 2 with a balance', T.state.step === 3);

T.next(3);
ok('step 3 BLOCKS without a credit selection', T.state.step === 3);
T.state.credit = 'good';
T.next(3);
ok('step 3 advances once credit is set', T.state.step === 4);

T.state.goal = 'debt';
T.next(4);
ok('reaches the result/contact step', T.state.step === 5);

// 2) equity math: 450000 * 0.85 - 220000 = 162500 -> rounds to 163000
ok('equity estimate is correct ($163,000)', T.state.estimate === 163000);

// 3) lead routing: no leadEndpoint but leadEmail set -> FormSubmit to that inbox
byId('name').value = 'Jane Homeowner';
byId('email').value = 'jane@example.com';
byId('consent').checked = true;
const submit = (T.form.__handlers.submit || [])[0];
ok('a submit handler is wired', typeof submit === 'function');
submit.call(T.form, { preventDefault(){} });   // browser binds `this` to the form
ok('routes the lead to the configured email via FormSubmit',
   !!lastFetch && /formsubmit\.co\/ajax\/.*vipmtginc\.com/.test(lastFetch.url));
ok('shows the thank-you step after submit', T.state.step === 6);

console.log('\n' + (fail? '❌ '+fail+' failed, ' : '✅ ') + pass + ' passed');
process.exit(fail ? 1 : 0);
