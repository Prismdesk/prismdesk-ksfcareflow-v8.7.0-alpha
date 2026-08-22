// Default insurance plan list (seeded once, then editable/persisted in localStorage)
const defaultInsurancePlans = [
  { id: 1, name: "Aetna (Affiliations, POS, EPO, Choice, POS II, Indemnity, HMO, PPO)", status: "Accepted" },
  { id: 2, name: "Aetna HMO (Referral Rqrd with Provider and CPT Code)", status: "Accepted" },
  { id: 3, name: "Aetna CVS Health Plan (Referral Rqrd with Provider and CPT Code)", status: "Accepted" },
    { id: 4, name: "Aetna Marketplace (Referral Rqrd with Provider and CPT Code)", status: "Accepted" },
    { id: 5, name: "Aetna Medicare Supplement", status: "Accepted" },
    { id: 6, name: "AMBETTER MCR REPLACEMENT / CENTENE SUPERIOR HEALTH PLAN - Medicare Advantage EPO", status: "Accepted" },
    { id: 7, name: "American Health Plan - Medicare Advantage Plan", status: "Accepted" },
    { id: 8, name: "America’s Choice Provider Network (PPO)", status: "Accepted" },
    { id: 9, name: "Amerigroup (Wellpoint of TX) - TX AMERIVANTAGE DUAL COORDINATION (HMO SNP)", status: "Accepted" },
    { id: 10, name: "Amerigroup (Wellpoint of TX) - TX AMERIVANTAGE ESRD (HMO, POS, SNP)", status: "Accepted" },
    { id: 11, name: "Amerigroup (Wellpoint of TX) - Medicare HMO (Has the letter 'W' in the ID number)", status: "Accepted" },
    { id: 12, name: "Amerigroup (Wellpoint of TX) - Medicare PPO (Has the letter 'W' in the ID number)", status: "Accepted" },
    { id: 13, name: "Amerigroup (Wellpoint of TX) - WellPoint DUAL", status: "Accepted" },
    { id: 14, name: "Amerigroup (Wellpoint of TX) - WellMed Amerigroup", status: "Accepted" },
    { id: 15, name: "Amerigroup (Wellpoint of TX) - WellMed Amerigroup DUAL", status: "Accepted" },
    { id: 16, name: "BLUE CROSS BLUE SHIELD Exchange Plans - Exchange Plan 'Blue Essential'", status: "Accepted" },
    { id: 17, name: "BLUE CROSS BLUE SHIELD Exchange Plans - MY BLUE HEALTH (BCBS TX EXCHANGE PLAN)", status: "Accepted" },
    { id: 18, name: "BCBS IL, BCBS MI, etc", status: "Accepted" },
    { id: 19, name: "BCBS Federal Plans (PPO plan begins with 'R')", status: "Accepted" },
    { id: 20, name: "BCBS – TX Supplement plan", status: "Accepted" },
    { id: 21, name: "BCBS-TX Plans - POS / Health select", status: "Accepted" },
    { id: 22, name: "BCBS-TX Plans - EPO", status: "Accepted" },
    { id: 23, name: "BCBS-TX Plans - Indemnity", status: "Accepted" },
    { id: 24, name: "BCBS-TX Plans - PPO", status: "Accepted" },
    { id: 25, name: "BCBS-TX Plans - Wellmed", status: "Accepted" },
    { id: 26, name: "BCBS-TX Plans - HMO", status: "Accepted" },
    { id: 27, name: "Cigna Medicare Advantage HMO", status: "Accepted" },
    { id: 28, name: "Cigna Medicare HMO – DUAL", status: "Accepted" },
    { id: 29, name: "Cigna Medicare PPO", status: "Accepted" },
    { id: 30, name: "Curative- First Health (PPO)", status: "Accepted" },
    { id: 31, name: "Devoted Health Plan Medicare Advantage HMO (from Availity)", status: "Accepted" },
    { id: 32, name: "Devoted (Medicare Advantage plan) PPO", status: "Accepted" },
    { id: 33, name: "Devoted (Medicare Advantage plan) DUAL", status: "Accepted" },
    { id: 34, name: "GEHA United Shared Services", status: "Accepted" },
    { id: 35, name: "Employers Health Network", status: "Accepted" },
    { id: 36, name: "Galaxy Health Network (Commercial PPO, Workers Comp)", status: "Accepted" },
    { id: 37, name: "HealthSmart (Commercial PPO)", status: "Accepted" },
    { id: 38, name: "Health Texas IPA – UHC West Medicare Advantage HMO", status: "Accepted" },
    { id: 39, name: "Health Texas IPA – Health Texas DUAL plan", status: "Accepted" },
    { id: 40, name: "Humana Gold Plus Medicare Advantage Plans HMO", status: "Accepted" },
    { id: 41, name: "Humana Gold Plus Medicare Advantage Plans HMO - Conviva IPA", status: "Accepted" },
    { id: 42, name: "Humana Gold Plus Medicare Advantage Plans HMO - WellMed Humana Gold Plus HMO", status: "Accepted" },
    { id: 43, name: "Humana Gold Plus Medicare Advantage Plans PPO", status: "Accepted" },
    { id: 44, name: "Humana Gold Plus Medicare Advantage Plans PPFS", status: "Accepted" },
    { id: 45, name: "Humana Medicare PPO Humana Supplement plan", status: "Accepted" },
    { id: 46, name: "Imagine Health", status: "Accepted" },
    { id: 47, name: "Independent Medical Systems (PPO, HMO)", status: "Accepted" },
    { id: 48, name: "Medicare Traditional", status: "Accepted" },
    { id: 49, name: "Medicare Railroad", status: "Accepted" },
    { id: 50, name: "Traditional Medicaid SECONDARY TO TRADITIONAL MEDICARE ONLY", status: "Accepted" },
    { id: 51, name: "Medicaid - MQMB (Medicaid Qualified Medicare Beneficiary)", status: "Accepted" },
    { id: 52, name: "Medicaid - QMB (Qualified Medicare Beneficiary)", status: "Accepted" },
    { id: 53, name: "Prospect Medical Group (IPA) - Prospect Amerigroup Medicare HMO", status: "Accepted" },
    { id: 54, name: "Prospect Medical Group (IPA) - Prospect Amerigroup MCR/MCD Dual HMO", status: "Accepted" },
    { id: 55, name: "Prospect Medical Group (IPA) - Prospect Blue Cross Blue Shield HMO", status: "Accepted" },
    { id: 56, name: "Prospect Medical Group (IPA) - Prospect Blue Cross Blue Shield HMO- DUAL", status: "Accepted" },
    { id: 57, name: "Prospect Medical Group (IPA) - Prospect WellCare", status: "Accepted" },
    { id: 58, name: "Prospect Medical Group (IPA) - Prospect WellCare Dual", status: "Accepted" },
    { id: 59, name: "Prospect IPA - SCAN", status: "Accepted" },
    { id: 60, name: "Superior Medicare Currently Allwell WellCare - DUAL Plans", status: "Accepted" },
    { id: 61, name: "Superior Medicare Currently Allwell WellCare - HMO Plans", status: "Accepted" },
    { id: 62, name: "Tricare East Prime", status: "Accepted" },
    { id: 63, name: "Tricare East Select", status: "Accepted" },
    { id: 64, name: "Tricare for Life", status: "Accepted" },
    { id: 65, name: "TriWest", status: "Accepted" },
    { id: 66, name: "VES- Veterans Evaluation Services", status: "Accepted" },
    { id: 67, name: "UHC Commercial plans - UHC POS", status: "Accepted" },
    { id: 68, name: "UHC Commercial plans - UHC HMO", status: "Accepted" },
    { id: 69, name: "UHC Commercial plans - UHC Marketplace HMO", status: "Accepted" },
    { id: 70, name: "UHC Commercial plans - UHC Nexus ACO", status: "Accepted" },
    { id: 71, name: "UHC Commercial plans - UHC Nexus ACO-OA", status: "Accepted" },
    { id: 72, name: "UHC Commercial plans - UHC Navigate", status: "Accepted" },
    { id: 73, name: "UHC- OXFORD - EPO", status: "Accepted" },
    { id: 74, name: "UHC- OXFORD - HMO", status: "Accepted" },
    { id: 75, name: "UHC- OXFORD - PPO", status: "Accepted" },
    { id: 76, name: "UHC Medicare Advantage - Dual HMO", status: "Accepted" },
    { id: 77, name: "UHC Medicare Advantage - Dual PPO", status: "Accepted" },
    { id: 78, name: "UHC Medicare Advantage - Community Dual HMO", status: "Accepted" },
    { id: 79, name: "UHC Medicare Advantage - PPO", status: "Accepted" },
    { id: 80, name: "UHC Medicare Advantage - HMO", status: "Accepted" },
    { id: 81, name: "WellCare- HMO - WellCare HMO", status: "Accepted" },
    { id: 82, name: "WellCare- HMO - WellCare DUAL HMO", status: "Accepted" },
    { id: 83, name: "WellCare/Superior/ Allwell HMO", status: "Accepted" },
    { id: 84, name: "WellCare/Superior/ Allwell HMO - WellCare/Superior/Allwell DUAL", status: "Accepted" },
    { id: 85, name: "Prospect IPA - WellCare - Prospect WellCare", status: "Accepted" },
    { id: 86, name: "Prospect IPA - WellCare - Prospect WellCare Dual", status: "Accepted" },
    { id: 87, name: "Wellcare/Texan Plus (Medicare Advantage HMO)", status: "Accepted" },
    { id: 88, name: "WellMed IPA - WellMed Amerigroup", status: "Accepted" },
    { id: 89, name: "WellMed IPA - WellMed Amerigroup DUAL", status: "Accepted" },
    { id: 90, name: "WellMed IPA - WellMed Cigna HealthSpring or Total Care (HMO)", status: "Accepted" },
    { id: 91, name: "WellMed IPA - WellMed Cigna (HMO)", status: "Accepted" },
    { id: 92, name: "WellMed IPA - WellMed UHC HMO", status: "Accepted" },
    { id: 93, name: "WellMed IPA - WellMed UHC DUAL HMO", status: "Accepted" },
    { id: 94, name: "WellMed IPA - WellMed UHC Community DUAL- PPO", status: "Accepted" },
    { id: 95, name: "WellMed IPA - WellMed UHC PPO", status: "Accepted" },
    { id: 96, name: "WellMed IPA - WellMed Humana Gold Plus HMO", status: "Accepted" },
    { id: 97, name: "AETNA BETTER HEALTH MEDICAID", status: "Unaccepted" },
    { id: 98, name: "AETNA HMO SILVER", status: "Unaccepted" },
    { id: 99, name: "AETNA PRIME HMO", status: "Unaccepted" },
    { id: 100, name: "AETNA WHOLE HEALTH", status: "Unaccepted" },
    { id: 101, name: "AMBETTER STARPLUS", status: "Unaccepted" },
    { id: 102, name: "AMBETTER VALUE / SELECT PLANS HMO", status: "Unaccepted" },
    { id: 103, name: "AMERIGROUP MEDICAID PLANS", status: "Unaccepted" },
    { id: 104, name: "ANY KELSEY SEBOLD PLAN", status: "Unaccepted" },
    { id: 105, name: "ANY MEDICAID TRADITIONAL AND STARPLUS", status: "Unaccepted" },
    { id: 106, name: "ANY MEMORIAL HERMAN PLANS", status: "Unaccepted" },
    { id: 107, name: "BCBS UT BLACK PLAN / UT BLUE EDGE PPO", status: "Unaccepted" },
    { id: 108, name: "BCBS BLUE HIGH PERFORMANCE", status: "Unaccepted" },
    { id: 109, name: "BCBS PREMIERE ACCESS HMO PLAN CHIP PERINATE", status: "Unaccepted" },
    { id: 110, name: "MOLINA HEALTHCARE TEXAS", status: "Unaccepted" },
    { id: 111, name: "SCOTT AND WHITE PLAN MEDICAID", status: "Unaccepted" },
    { id: 112, name: "STAR KIDS o CHIP", status: "Unaccepted" },
    { id: 113, name: "TEXAS CHILDREN’S HEALTH PLAN", status: "Unaccepted" },
    { id: 114, name: "UHC COMMUNITY PLAN (MCR/MCD HMO)", status: "Unaccepted" },
    { id: 115, name: "UHC COMMUNITY PLAN MEDICAID", status: "Unaccepted" },
  { id: 116, name: "CENTENE AMBETER SUPERIOR HEALTH PLAN HMO", status: "Unaccepted" }
];

// Scope helpers inside an initializer function; the actual data lives in
// appState.insurancePlans so it's persisted and reachable by global search
// even before this tab has ever been opened
function initInsuranceChecker(container) {
  const searchInput = container.querySelector('#search-input');
  const acceptedList = container.querySelector('#accepted-list');
  const unacceptedList = container.querySelector('#unaccepted-list');
  const statusText = container.querySelector('#status-text');
  const btnSave = container.querySelector('#btn-save-plan');
  const btnClear = container.querySelector('#btn-clear-form');

  function renderPlans() {
    if (!searchInput || !acceptedList || !unacceptedList) return;
    const searchTerm = searchInput.value.toLowerCase();
    acceptedList.innerHTML = '';
    unacceptedList.innerHTML = '';

    appState.insurancePlans.forEach(plan => {
      if (plan.name.toLowerCase().includes(searchTerm) || plan.status.toLowerCase().includes(searchTerm)) {
        const card = document.createElement('div');
        card.className = 'plan-card';

        const isAccepted = plan.status === 'Accepted';
        const toggleBtnText = isAccepted ? '➡️ Unaccepted' : '⬅️ Accepted';
        const toggleBtnClass = isAccepted ? 'btn-toggle-unaccepted' : 'btn-toggle-accepted';

        card.innerHTML = `
          <div class="plan-title">${plan.name}</div>
          <div class="plan-actions">
            <button class="action-btn btn-edit" data-id="${plan.id}" data-action="edit">✏️ Edit</button>
            <button class="action-btn ${toggleBtnClass}" data-id="${plan.id}" data-action="toggle">${toggleBtnText}</button>
            <button class="action-btn btn-delete" data-id="${plan.id}" data-action="delete">🗑️</button>
          </div>
        `;

        if (isAccepted) {
          acceptedList.appendChild(card);
        } else {
          unacceptedList.appendChild(card);
        }
      }
    });
  }

  function updateStatusTracker(msg) {
    if (statusText) statusText.innerText = msg;
  }

  function clearForm() {
    const nameInp = container.querySelector('#new-plan-name');
    const catSel = container.querySelector('#new-plan-category');
    if (nameInp) nameInp.value = '';
    if (catSel) catSel.value = 'Accepted';
  }

  // Event Listeners
  if (searchInput) searchInput.addEventListener('input', renderPlans);

  if (btnSave) {
    btnSave.addEventListener('click', () => {
      const nameInput = container.querySelector('#new-plan-name');
      const categorySelect = container.querySelector('#new-plan-category');

      if (!nameInput.value.trim()) {
        alert('Please enter a plan name.');
        return;
      }

      const newPlan = {
        id: Date.now(),
        name: nameInput.value.trim(),
        status: categorySelect.value
      };

      appState.insurancePlans.unshift(newPlan);
      saveInsurancePlans();
      updateStatusTracker(`Added new plan "${newPlan.name}"`);
      clearForm();
      renderPlans();
    });
  }

  if (btnClear) btnClear.addEventListener('click', clearForm);

  // Delegated events for Edit, Toggle, and Delete actions
  container.addEventListener('click', (e) => {
    const target = e.target.closest('button[data-action]');
    if (!target) return;

    const id = Number(target.dataset.id);
    const action = target.dataset.action;
    const plan = appState.insurancePlans.find(p => p.id === id);

    if (!plan) return;

    if (action === 'toggle') {
      plan.status = plan.status === 'Accepted' ? 'Unaccepted' : 'Accepted';
      saveInsurancePlans();
      updateStatusTracker(`Moved "${plan.name}" to ${plan.status}`);
      renderPlans();
    } else if (action === 'edit') {
      const newName = prompt('Edit Plan Name:', plan.name);
      if (newName !== null && newName.trim() !== '') {
        plan.name = newName.trim();
        saveInsurancePlans();
        updateStatusTracker(`Updated plan name to "${plan.name}"`);
        renderPlans();
      }
    } else if (action === 'delete') {
      if (confirm(`Are you sure you want to delete "${plan.name}"?`)) {
        appState.insurancePlans = appState.insurancePlans.filter(p => p.id !== id);
        saveInsurancePlans();
        updateStatusTracker(`Deleted "${plan.name}"`);
        renderPlans();
      }
    }
  });

  // Initial render
  renderPlans();
}

// Central state initialized directly from browser memory
const appState = {
  theme: localStorage.getItem('ksf_theme') || 'dark',
  noteBank: JSON.parse(localStorage.getItem('ksf_note_bank')) || [],
  activityLogs: JSON.parse(localStorage.getItem('ksf_activity_logs')) || [],
  providers: JSON.parse(localStorage.getItem('ksf_providers')) || null,
  insurancePlans: JSON.parse(localStorage.getItem('ksf_insurance_plans')) || null,
  reviewSheet: JSON.parse(localStorage.getItem('ksf_review_sheet')) || { schedule: [], reschedule: [], cancellation: [] }
};

function saveInsurancePlans() {
  localStorage.setItem('ksf_insurance_plans', JSON.stringify(appState.insurancePlans));
}

// ==========================================
// GLOBAL SEARCH — index builder
// ==========================================

// Strips copy buttons out of a cloned node before reading its text, so
// "📋 Copy" doesn't pollute every location/contact search result
function gsCleanText(el) {
  if (!el) return '';
  const clone = el.cloneNode(true);
  clone.querySelectorAll('.lc-copy-btn').forEach(btn => btn.remove());
  return clone.textContent.replace(/\s+/g, ' ').trim();
}

// Builds the full searchable index fresh on every keystroke. Cheap enough
// (a few hundred items at most) that there's no need to cache it, and this
// way it always reflects the latest Note Bank / Review Sheet / Provider /
// Insurance edits without any invalidation logic to get wrong.
function buildGlobalSearchIndex() {
  const index = [];

  // --- Menu items (Call Workflows / Quick Notes / Tools dropdowns) ---
  document.querySelectorAll('.tab-trigger').forEach(trigger => {
    const dropdownLabel = trigger.closest('.nav-dropdown')?.querySelector('.dropdown-btn')?.textContent.replace('▼', '').trim() || '';
    index.push({
      type: 'menu',
      label: trigger.dataset.title || trigger.textContent.trim(),
      sublabel: dropdownLabel,
      data: { side: trigger.dataset.side, tabId: trigger.dataset.tabId, title: trigger.dataset.title }
    });
  });

  // --- Provider Directory (every field is searchable: name, title, NPI, MA,
  //     Staff Login, Workman's Comp, Self Pay, body parts, procedures, and
  //     clinical rules/notes) ---
  (appState.providers || []).forEach(p => {
    const covered = (p.bodyPartsCovered || []).join(', ');
    const excluded = (p.bodyPartsExcluded || []).join(', ');
    const procedures = (p.specialtiesProcedures || []).join(', ');
    const rules = (p.clinicalRules || []).join(', ');
    index.push({
      type: 'provider',
      label: p.name,
      sublabel: [p.title, p.npi ? `NPI: ${p.npi}` : '', covered ? `Covers: ${covered}` : ''].filter(Boolean).join(' • '),
      searchText: [
        p.name, p.title, p.npi, p.ma, p.staffLogin,
        p.workmansComp ? `Workman's Comp: ${p.workmansComp}` : '',
        p.selfPay ? `Self Pay: ${p.selfPay}` : '',
        covered, excluded, procedures, rules
      ].filter(Boolean).join(' '),
      data: { id: p.id }
    });
  });

  // --- Insurance Checker ---
  (appState.insurancePlans || []).forEach(plan => {
    index.push({
      type: 'insurance',
      label: plan.name,
      sublabel: plan.status,
      data: { id: plan.id }
    });
  });

  // --- Locations, Contacts & Schedulers (parsed from the template, works
  //     even if that tab has never been opened) ---
  const lcTemplate = document.getElementById('tpl-tool-locations-contacts');
  if (lcTemplate) {
    const frag = lcTemplate.content;

    frag.querySelectorAll('.lc-location-item').forEach(item => {
      const name = gsCleanText(item.querySelector('.lc-location-name'));
      const address = gsCleanText(item.querySelector('.lc-location-address'));
      const directions = gsCleanText(item.querySelector('.lc-location-directions'));
      const phone = gsCleanText(item.querySelector('.lc-location-phone'));
      index.push({
        type: 'location',
        label: name,
        sublabel: [address, directions, phone].filter(Boolean).join(' • '),
        data: { matchText: name }
      });
    });

    frag.querySelectorAll('.lc-contact-row').forEach(row => {
      const label = gsCleanText(row.querySelector('strong')) || gsCleanText(row);
      const fullText = gsCleanText(row);
      index.push({
        type: 'contact',
        label: label.replace(/:$/, ''),
        sublabel: fullText,
        data: { matchText: fullText }
      });
    });

    frag.querySelectorAll('.lc-table tbody tr').forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length < 3) return;
      const physician = gsCleanText(cells[0]);
      const scheduler = gsCleanText(cells[1]);
      const phone = gsCleanText(cells[2]);
      index.push({
        type: 'scheduler',
        label: physician,
        sublabel: `${scheduler} • ${phone}`,
        data: { matchText: `${physician} ${scheduler} ${phone}` }
      });
    });
  }

  // --- Note Bank (search full content, not just what's visible on the card) ---
  (appState.noteBank || []).forEach(note => {
    const snippet = note.content.replace(/\s+/g, ' ').trim().slice(0, 70);
    index.push({
      type: 'note',
      label: snippet + (note.content.length > 70 ? '…' : ''),
      sublabel: `${note.category} • ${note.timestamp}`,
      searchText: `${note.content} ${note.category}`,
      data: { id: note.id }
    });
  });

  // --- Daily Review Sheet ---
  RS_CATEGORIES.forEach(cat => {
    (appState.reviewSheet[cat] || []).forEach(entry => {
      index.push({
        type: 'review',
        label: entry.name || '(no name)',
        sublabel: `${RS_CATEGORY_LABELS[cat]} • DOB: ${entry.dob || '—'} • Chart#: ${entry.chart || '—'}`,
        data: { id: entry.id, category: cat }
      });
    });
  });

  return index;
}

const GS_TYPE_LABELS = {
  menu: 'Menu',
  provider: 'Providers',
  insurance: 'Insurance Plans',
  location: 'Locations',
  contact: 'Contacts',
  scheduler: 'Surgery Schedulers',
  note: 'Note Bank',
  review: 'Daily Review Sheet'
};
const GS_TYPE_ORDER = ['menu', 'provider', 'insurance', 'location', 'contact', 'scheduler', 'note', 'review'];
const GS_MAX_PER_TYPE = 5;

// Filters the index against a query, grouped by type and capped per group
// so one huge category (e.g. Insurance Plans) can't crowd out everything else
function runGlobalSearch(query) {
  const q = query.trim().toLowerCase();
  if (!q) return {};

  const index = buildGlobalSearchIndex();
  const grouped = {};

  index.forEach(item => {
    const haystack = (item.searchText || `${item.label} ${item.sublabel}`).toLowerCase();
    if (!haystack.includes(q)) return;
    if (!grouped[item.type]) grouped[item.type] = [];
    if (grouped[item.type].length < GS_MAX_PER_TYPE) grouped[item.type].push(item);
  });

  return grouped;
}

function gsEscapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

// Wraps the matched substring in a <mark>-style span for visual scanning
function gsHighlightMatch(text, query) {
  const safe = gsEscapeHtml(text);
  const q = query.trim();
  if (!q) return safe;
  const idx = safe.toLowerCase().indexOf(gsEscapeHtml(q).toLowerCase());
  if (idx === -1) return safe;
  return safe.slice(0, idx) + '<span class="gs-highlight">' + safe.slice(idx, idx + q.length) + '</span>' + safe.slice(idx + q.length);
}

function saveReviewSheet() {
  localStorage.setItem('ksf_review_sheet', JSON.stringify(appState.reviewSheet));
}

// Adds a structured entry (Name/DOB/Chart#/Agent Note) to one column of the Daily Review Sheet.
// Returns the new entry's id so callers (like Note Bank) can keep a link to it.
function addToReviewSheet(category, { name, dob, chart, agentNote }) {
  if (!appState.reviewSheet[category]) return null;
  const entry = {
    id: 'rs_' + Date.now() + '_' + Math.random().toString(36).slice(2, 7),
    dateAdded: new Date().toISOString(),
    name: name || '',
    dob: dob || '',
    chart: chart || '',
    agentNote: agentNote || '',
    reviewerNote: ''
  };
  appState.reviewSheet[category].push(entry);
  saveReviewSheet();
  return entry.id;
}

// Removes a linked entry from wherever it lives in the review sheet
function removeFromReviewSheet(category, entryId) {
  if (!category || !entryId || !appState.reviewSheet[category]) return;
  appState.reviewSheet[category] = appState.reviewSheet[category].filter(e => e.id !== entryId);
  saveReviewSheet();
}

// Pulls Name/DOB/Chart# out of a Note Bank entry's free-text content so we
// can keep the linked Daily Review Sheet entry's details in sync
function parseNameDobChartFromNote(text) {
  const getField = (label) => {
    const re = new RegExp(label + '\\s*:[ \\t]*(.*)', 'i');
    const m = text.match(re);
    return m ? m[1].trim() : '';
  };
  return {
    name: getField('Name'),
    dob: getField('DOB'),
    chart: getField('Chart\\s*#?')
  };
}

// Default provider directory data (seeded once, then editable/persisted in localStorage)
const defaultProviders = [
  {
    id: 'dr-dean',
    name: 'Dr. Stewart Dean',
    title: 'General Orthopedics / Sports Medicine',
    npi: '1912988312',
    ma: 'Claudia Zepeda',
    staffLogin: 'sdean61STAFF',
    workmansComp: 'No',
    selfPay: 'Yes',
    bodyPartsCovered: ['Shoulder', 'Knee'],
    bodyPartsExcluded: ['Arm', 'Foot', 'Ankle'],
    clinicalRules: ['Will see KNEES and SHOULDERS (not seeing patients who had surgery, regardless of how long ago)', 'Not seeing Workers Compensation'],
    specialtiesProcedures: ['Shoulder Injuries', 'Knee Injuries', 'Ankle & Foot Surgery (only if Miller unavailable / must be approved by Dr. Dean)', 'Sports Injuries', 'Clavicle Surgery', 'General Orthopedics']
  },
  {
    id: 'dr-george',
    name: 'Dr. Michael S. George',
    title: 'Orthopedic Sports Medicine / Arthroscopic Surgery',
    npi: '1235110222',
    ma: 'Anisha Malik',
    staffLogin: 'mgeorge97STAFF',
    workmansComp: 'No',
    selfPay: 'Yes',
    bodyPartsCovered: ['Shoulder', 'Knee'],
    bodyPartsExcluded: ['Arm'],
    clinicalRules: ['Will see KNEES and SHOULDERS', 'Does NOT go to Red Oak location', 'Does NOT see Workers Compensation', 'Does NOT see painful total knee/shoulder replacement unless he performed the surgery'],
    specialtiesProcedures: ['Orthopedic Sports Medicine', 'Arthroscopic Shoulder & Knee Surgery', 'Arthroscopic Rotator Cuff Repair', 'Arthroscopic Shoulder Stabilization', 'Distal Biceps Tendon Repair', 'Clavicle Surgery', 'ACL Reconstruction', 'Multi-ligament Knee Reconstruction', 'Total Shoulder Replacement', 'Total Knee Replacement']
  },
  {
    id: 'dr-miller',
    name: 'Dr. Timothy Miller',
    title: 'Foot & Ankle Surgery / General Orthopedics',
    npi: '1013175900',
    ma: 'Princessa',
    staffLogin: 'tmiller443STAFF',
    workmansComp: 'Conditional',
    selfPay: 'Yes',
    bodyPartsCovered: ['Foot', 'Ankle'],
    bodyPartsExcluded: ['Shoulder', 'Arm', 'Neck', 'Spine', 'Upper back', 'Lower back', 'Hip'],
    clinicalRules: ['Will see FEET/ANKLE', 'Will see Workers Comp for feet/ankles only — injury date must be within 90 days of call; after 90 days needs doctor approval', 'Will see patients who request him specifically for any body part', 'Does NOT see shoulders/neck/back/hips unless being seen with foot or ankle same day', 'No age limit'],
    specialtiesProcedures: ['Foot & Ankle Surgery', 'General Orthopedics', 'Minimally Invasive Bunion Surgery', 'Sports Injuries', 'Fractures', 'Clavicle Surgery', 'Arthritis', 'Ankle Stability', 'Flatfoot Reconstruction', 'Cartilage, Ligament & Tendon Injuries', 'Achilles Tendon Ruptures']
  },
  {
    id: 'dr-hulen',
    name: 'Dr. Christopher Hulen',
    title: 'Spine Surgery',
    npi: '1356559744',
    ma: 'Manuela',
    staffLogin: 'chulen1STAFF',
    workmansComp: 'Yes',
    selfPay: 'Upfront Required',
    bodyPartsCovered: ['Spine', 'Upper back', 'Lower back', 'Neck'],
    bodyPartsExcluded: [],
    clinicalRules: ['Will see BACK/NECK', 'Does NOT go to Red Oak location', 'Will not see patients with Scoliosis', 'Will see self-pay patients (payment collected upfront before being seen)', 'For patients who had back surgery, consult first with the MA about the surgery and the year it occurred', '[NEEDS REVIEW] Source PDF had a block of pain-management/injection items (RFA, spinal cord stimulator, cancer pain, TMJ, etc.) formatted ambiguously alongside this doctor\'s section — heavily overlaps Dr. Lewis\'s own listed scope, so it was not attributed here. Please verify against the original document.'],
    specialtiesProcedures: ['Cervical Stenosis', 'Cervical Radiculopathy', 'Cervical Herniated Disc', 'Cervical Myelopathy', 'Cervical Spondylolisthesis', 'Cervical Kyphosis', 'Lumbar Spinal Stenosis', 'Lumbar Radiculopathy', 'Degenerative Spondylolisthesis', 'Degenerative Scoliosis', 'Degenerative Disc Disease', 'Synovial Facet Joint Cyst', 'Herniated Discs', 'Scoliosis', 'Spinal Compression Fracture', 'Sciatica', 'Pinched Nerve in Neck or Back']
  },
  {
    id: 'dr-shar',
    name: 'Dr. Adam Shar',
    title: 'Orthopedic Surgery / Hand & Upper Extremity Surgery',
    npi: '1912291006',
    ma: 'Kim Violante',
    staffLogin: 'asharSTAFF',
    workmansComp: 'Yes',
    selfPay: 'Yes',
    bodyPartsCovered: ['Hand', 'Wrist', 'Elbow', 'Arm'],
    bodyPartsExcluded: [],
    clinicalRules: ['Accepts fracture/serious injuries as young as 7 years old but with approval', 'Will see Workers Compensation', 'Will accept self-pay patients', 'Sees patients who had surgery with a different doctor as long as it\'s outside the global period (90 days)'],
    specialtiesProcedures: ['Hand, Wrist, Forearm & Elbow Issues/Injuries', 'Carpal & Cubital Tunnel Surgery', 'Ruptured Bicep/Triceps Repair/Reconstruction', 'Work Related Injuries', 'Fractures (arm-related unless otherwise approved by Dr. Shar)', 'Clavicle Surgery', 'Trigger Finger Release Surgery']
  },
  {
    id: 'dr-kong',
    name: 'Dr. Qingwu Kong',
    title: 'Orthopedic Total Joint Replacement Surgeon',
    npi: '1760912372',
    ma: 'Nadine Jean Charles',
    staffLogin: 'qkongSTAFF',
    workmansComp: 'Yes',
    selfPay: 'Yes',
    bodyPartsCovered: ['Hip', 'Knee'],
    bodyPartsExcluded: ['Hand', 'Wrist', 'Neck', 'Spine', 'Upper back', 'Lower back'],
    clinicalRules: ['Will see HIPS and KNEES', 'Will see patients who\'ve had previous surgery — must bring records to the appointment', 'Will do knee revisions', 'Will see Workers Comp for respective body parts only — injury date must be within 90 days of call; after 90 days needs doctor approval', 'Will see any body part until he builds his practice, but only as a last resort; will NOT see hands/neck/back'],
    specialtiesProcedures: ['Total Knee Replacement', 'Total Hip Replacement', 'Partial Knee Replacement', 'Direct Anterior Total Hip Replacement', 'Robotic Total Joint Replacement', 'Total Knee Revision Surgery', 'Total Hip Revision Surgery', 'Fracture Care', 'Knee Arthroscopy']
  },
  {
    id: 'dr-kanjia',
    name: 'Dr. Mayur Kanjia',
    title: 'Pain Management / Anesthesiology',
    npi: '1932424751',
    ma: 'Flora Rodriguez',
    staffLogin: 'mkanjia3STAFF',
    workmansComp: 'Conditional',
    selfPay: 'No',
    bodyPartsCovered: ['Upper back', 'Lower back', 'Spine', 'Neck', 'Hip', 'Shoulder', 'Hand', 'Wrist', 'Knee', 'Foot', 'Ankle', 'Legs', 'Head', 'Arm'],
    bodyPartsExcluded: [],
    clinicalRules: ['Will see Workers Comp ONLY for a consult for a procedure (not for chronic pain management)', 'Follow-up slots are the bright neon green "FOLLOW UP / FU" slots — for Dr. Kanjia specifically', 'Lighter green "ESTABLISHED / EST" slots are for the Nurse Practitioner (NP) — schedule per what is noted', 'No cash pay or self-pay patients', 'No patients under 18 years old'],
    specialtiesProcedures: ['Pain Management — Back', 'Neck', 'Hip', 'Shoulders', 'Hands', 'Knees', 'Feet', 'Legs', 'Headaches', 'Migraines', 'Stroke Victims']
  },
  {
    id: 'dr-lewis',
    name: 'Dr. Taylor Lewis',
    title: 'Pain Management / Anesthesiology / Cancer Associated Pain',
    npi: '1083001028',
    ma: 'Napreyia Angel',
    staffLogin: 'tlewis257STAFF',
    workmansComp: 'No',
    selfPay: 'No',
    bodyPartsCovered: ['Spine', 'Neck', 'Hip', 'Shoulder', 'Knee', 'Legs', 'Upper back', 'Lower back', 'Arm'],
    bodyPartsExcluded: ['Hand', 'Wrist', 'Foot', 'Ankle'],
    clinicalRules: ['Will see PAIN MANAGEMENT — will NOT see feet/hands', 'Will see back/neck/hips/shoulders/knees/legs', 'Will see patients who ask for him specifically for any body part', 'Will NOT see Workers Compensation', 'Will see HIPS ONLY at Red Oak or Willowbrook (only 2 locations with ultrasound-guided equipment)', 'No cash pay or self-pay patients', 'No patients under 18 years old'],
    specialtiesProcedures: ['Cancer Related Pain', 'Chemotherapy Induced Neuropathic Pain', 'Post Mastectomy Pain', 'Post-Thoracotomy Pain', 'Neuropathic Pain', 'Failed Back Surgery Pain', 'Complex Regional Pain Syndrome / Lower Back Pain', 'Spinal Stenosis', 'Joint Pain', 'Work Related Injuries', 'Hypogastric Plexus Injection', 'Stellate Ganglion Injection', 'Kyphoplasty', 'Vertebroplasty', 'Spinal Cord Stimulation', 'Epidural Steroid Injection', 'Facet Joint Injection', 'Medial Branch Injection', 'Radiofrequency Ablation (RFA)', 'Selective Nerve Root Injection', 'Peripheral Nerve Injection', 'Major Joint Injection', 'Botox Injections', 'Trigger Point Injections']
  }
];

if (!appState.providers) {
  appState.providers = JSON.parse(JSON.stringify(defaultProviders));
  localStorage.setItem('ksf_providers', JSON.stringify(appState.providers));
}

if (!appState.insurancePlans) {
  appState.insurancePlans = JSON.parse(JSON.stringify(defaultInsurancePlans));
  saveInsurancePlans();
}

document.addEventListener('DOMContentLoaded', () => {
  // Restore theme & run initial state updates
  document.body.className = appState.theme;
  updateFavicon(appState.theme);
  document.documentElement.classList.add(`font-${localStorage.getItem('ksf_font_size') || 'medium'}`);
  cleanupOldLogs();
  renderNoteBankUI();
  logActivity('KSF Agent Assistant initialized');
  
  // 1. Draggable Middle Splitter Implementation
  const splitter = document.getElementById('dragSplitter');
  const leftPane = document.getElementById('leftPane');
  const container = document.querySelector('.main-container');
  let isDragging = false;

  if (splitter && leftPane && container) {
    splitter.addEventListener('mousedown', () => { isDragging = true; });
    document.addEventListener('mouseup', () => { isDragging = false; });
    
    document.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      const containerRect = container.getBoundingClientRect();
      const newLeftWidth = e.clientX - containerRect.left;
      const minWidth = 150;
      
      if (newLeftWidth > minWidth && newLeftWidth < (containerRect.width - minWidth)) {
        leftPane.style.width = `${newLeftWidth}px`;
      }
    });
  }

  // 2. Help Drawer (slide-in panel, mirrors Settings drawer behavior)
  const helpBtn = document.getElementById('helpBtn');
  const helpDrawerOverlay = document.getElementById('helpDrawerOverlay');
  const helpDrawer = document.getElementById('helpDrawer');
  const helpDrawerClose = document.getElementById('helpDrawerClose');

  function openHelpDrawer() {
    if (!helpDrawerOverlay) return;
    helpDrawerOverlay.style.display = 'block';
    void helpDrawerOverlay.offsetWidth; // force reflow so the transition triggers
    helpDrawerOverlay.classList.add('open');
  }

  function closeHelpDrawer() {
    if (!helpDrawerOverlay || !helpDrawer) return;
    helpDrawerOverlay.classList.remove('open');
    const onTransitionEnd = (e) => {
      if (e.target !== helpDrawer) return;
      helpDrawerOverlay.style.display = 'none';
      helpDrawer.removeEventListener('transitionend', onTransitionEnd);
    };
    helpDrawer.addEventListener('transitionend', onTransitionEnd);
  }

  if (helpBtn) helpBtn.addEventListener('click', openHelpDrawer);
  if (helpDrawerClose) helpDrawerClose.addEventListener('click', closeHelpDrawer);
  if (helpDrawerOverlay) {
    helpDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === helpDrawerOverlay) closeHelpDrawer();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && helpDrawerOverlay && helpDrawerOverlay.classList.contains('open')) {
      closeHelpDrawer();
    }
  });

  // Guide / FAQ tab switcher inside the Help drawer
  const helpTabBtns = document.querySelectorAll('.help-tab-btn');
  const helpTabPanels = document.querySelectorAll('.help-tab-panel');
  helpTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.helpTab;
      helpTabBtns.forEach(b => b.classList.toggle('active', b === btn));
      helpTabPanels.forEach(p => p.classList.toggle('active', p.dataset.helpPanel === target));
    });
  });

  // 2b. Settings Drawer (slide-in panel, fully torn down on close)
  const settingsBtn = document.getElementById('settingsBtn');
  const settingsDrawerOverlay = document.getElementById('settingsDrawerOverlay');
  const settingsDrawer = document.getElementById('settingsDrawer');
  const settingsDrawerBody = document.getElementById('settingsDrawerBody');
  const settingsDrawerClose = document.getElementById('settingsDrawerClose');

  function openSettingsDrawer() {
    if (!settingsDrawerOverlay || !settingsDrawerBody) return;

    // Build fresh content from the template each time it opens
    const template = document.getElementById('tpl-settings');
    if (template) {
      settingsDrawerBody.innerHTML = '';
      const content = template.content.cloneNode(true);
      settingsDrawerBody.appendChild(content);
      if (typeof initSettings === 'function') {
        initSettings(settingsDrawerBody);
      }
      if (typeof renderSettingsActivityLog === 'function') {
        renderSettingsActivityLog();
      }
    }

    settingsDrawerOverlay.style.display = 'block';
    // Force reflow so the transition triggers reliably
    void settingsDrawerOverlay.offsetWidth;
    settingsDrawerOverlay.classList.add('open');
  }

  function closeSettingsDrawer() {
    if (!settingsDrawerOverlay) return;
    settingsDrawerOverlay.classList.remove('open');

    // Wait for the slide-out transition to finish, then vanish completely
    const onTransitionEnd = (e) => {
      if (e.target !== settingsDrawer) return;
      settingsDrawerOverlay.style.display = 'none';
      if (settingsDrawerBody) settingsDrawerBody.innerHTML = '';
      settingsDrawer.removeEventListener('transitionend', onTransitionEnd);
    };
    settingsDrawer.addEventListener('transitionend', onTransitionEnd);
  }

  if (settingsBtn) {
    settingsBtn.addEventListener('click', openSettingsDrawer);
  }
  if (settingsDrawerClose) {
    settingsDrawerClose.addEventListener('click', closeSettingsDrawer);
  }
  if (settingsDrawerOverlay) {
    // Click outside the drawer (on the backdrop) closes it
    settingsDrawerOverlay.addEventListener('click', (e) => {
      if (e.target === settingsDrawerOverlay) closeSettingsDrawer();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && settingsDrawerOverlay && settingsDrawerOverlay.classList.contains('open')) {
      closeSettingsDrawer();
    }
  });

  // 2c. Nav Dropdowns (Tools & References, Call Workflows, Quick Notes)
  // Driven entirely by JS/click state rather than CSS :hover, so it behaves
  // consistently on both mouse and touch and never gets "stuck" reopening.
  const navDropdowns = document.querySelectorAll('.nav-dropdown');

  function closeAllDropdowns(except) {
    navDropdowns.forEach(dd => {
      if (dd !== except) dd.classList.remove('open');
    });
  }

  navDropdowns.forEach(dropdown => {
    const btn = dropdown.querySelector('.dropdown-btn');
    if (!btn) return;
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.contains('open');
      closeAllDropdowns();
      dropdown.classList.toggle('open', !isOpen);
    });
  });

  // Click anywhere outside an open dropdown closes it
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      closeAllDropdowns();
    }
  });

  // Escape closes any open dropdown
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllDropdowns();
  });

  // 3. Tab Management Engine
  const openTabs = { left: new Map(), right: new Map() };

  // --- Drag-to-reorder open tabs ---
  let draggedTab = null;

  function makeTabDraggable(tabEl, side) {
    tabEl.draggable = true;
    tabEl.addEventListener('dragstart', (e) => {
      draggedTab = { el: tabEl, side };
      tabEl.classList.add('dragging');
      e.dataTransfer.effectAllowed = 'move';
    });
    tabEl.addEventListener('dragend', () => {
      tabEl.classList.remove('dragging');
      draggedTab = null;
    });
  }

  function getTabDragAfterElement(tabBar, x) {
    const candidates = [...tabBar.querySelectorAll('.tab:not(.dragging)')];
    return candidates.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = x - box.left - box.width / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      }
      return closest;
    }, { offset: Number.NEGATIVE_INFINITY, element: null }).element;
  }

  // Keeps the openTabs Map's order in sync with the visual tab order, since
  // closeTab() picks its "activate the next tab" fallback from Map order
  function syncTabOrderToMap(side) {
    const tabBar = document.getElementById(`${side}TabBar`);
    const sideMap = openTabs[side];
    if (!tabBar || !sideMap) return;
    const orderedIds = [...tabBar.querySelectorAll('.tab')].map(t => t.dataset.id);
    const reordered = new Map();
    orderedIds.forEach(id => {
      if (sideMap.has(id)) reordered.set(id, sideMap.get(id));
    });
    openTabs[side] = reordered;
  }

  function initTabBarDragDrop(side) {
    const tabBar = document.getElementById(`${side}TabBar`);
    if (!tabBar) return;
    tabBar.addEventListener('dragover', (e) => {
      if (!draggedTab || draggedTab.side !== side) return;
      e.preventDefault();
      const afterEl = getTabDragAfterElement(tabBar, e.clientX);
      if (afterEl == null) {
        tabBar.appendChild(draggedTab.el);
      } else {
        tabBar.insertBefore(draggedTab.el, afterEl);
      }
    });
    tabBar.addEventListener('drop', (e) => {
      if (!draggedTab || draggedTab.side !== side) return;
      e.preventDefault();
      syncTabOrderToMap(side);
    });
  }

  initTabBarDragDrop('left');
  initTabBarDragDrop('right');

  document.querySelectorAll('.tab-trigger').forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const side = trigger.dataset.side; // 'left' or 'right'
      const id = trigger.dataset.tabId;
      const title = trigger.dataset.title;

      openTab(side, id, title);

      // Close the dropdown immediately after a selection is made
      const dropdown = trigger.closest('.nav-dropdown');
      if (dropdown) dropdown.classList.remove('open');
    });
  });

  // --- Global Search ---
  const gsInput = document.getElementById('global-search-input');
  const gsResults = document.getElementById('global-search-results');

  function gsRenderResults(query) {
    if (!gsResults) return;
    const grouped = runGlobalSearch(query);
    const hasResults = Object.keys(grouped).length > 0;

    if (!query.trim()) {
      gsResults.classList.remove('open');
      gsResults.innerHTML = '';
      return;
    }

    if (!hasResults) {
      gsResults.innerHTML = `<div class="gs-no-results">No matches for "${gsEscapeHtml(query)}"</div>`;
      gsResults.classList.add('open');
      return;
    }

    gsResults.innerHTML = GS_TYPE_ORDER
      .filter(type => grouped[type]?.length)
      .map(type => `
        <div class="gs-group-label">${GS_TYPE_LABELS[type]}</div>
        ${grouped[type].map((item, i) => `
          <div class="gs-result-item" data-type="${item.type}" data-index="${i}" data-group="${type}">
            <span class="gs-result-label">${gsHighlightMatch(item.label, query)}</span>
            ${item.sublabel ? `<span class="gs-result-sublabel">${gsHighlightMatch(item.sublabel, query)}</span>` : ''}
          </div>
        `).join('')}
      `).join('');

    // Stash the grouped data on the element so the click handler can read it back
    gsResults._gsGrouped = grouped;
    gsResults.classList.add('open');
  }

  if (gsInput) {
    gsInput.addEventListener('input', () => gsRenderResults(gsInput.value));
    gsInput.addEventListener('focus', () => { if (gsInput.value.trim()) gsRenderResults(gsInput.value); });

    // Arrow keys move through results, Enter jumps to the active one, Escape closes
    gsInput.addEventListener('keydown', (e) => {
      if (!gsResults || !gsResults.classList.contains('open')) return;
      const items = [...gsResults.querySelectorAll('.gs-result-item')];
      if (items.length === 0) return;

      let activeIdx = items.findIndex(el => el.classList.contains('active'));

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        activeIdx = (activeIdx + 1) % items.length;
        items.forEach(el => el.classList.remove('active'));
        items[activeIdx].classList.add('active');
        items[activeIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        activeIdx = activeIdx <= 0 ? items.length - 1 : activeIdx - 1;
        items.forEach(el => el.classList.remove('active'));
        items[activeIdx].classList.add('active');
        items[activeIdx].scrollIntoView({ block: 'nearest' });
      } else if (e.key === 'Enter') {
        e.preventDefault();
        const target = activeIdx >= 0 ? items[activeIdx] : items[0];
        target.click();
      } else if (e.key === 'Escape') {
        gsResults.classList.remove('open');
      }
    });
  }

  document.addEventListener('click', (e) => {
    if (gsResults && !e.target.closest('.search-container')) {
      gsResults.classList.remove('open');
    }
  });

  if (gsResults) {
    gsResults.addEventListener('click', (e) => {
      const item = e.target.closest('.gs-result-item');
      if (!item || !gsResults._gsGrouped) return;

      const group = gsResults._gsGrouped[item.dataset.group];
      const entry = group?.[Number(item.dataset.index)];
      if (!entry) return;

      gsJumpToResult(entry);
      gsResults.classList.remove('open');
      if (gsInput) gsInput.value = '';
    });
  }

  // Opens the right tab for a search result, then lands precisely on the
  // matched item — filters the Insurance list to just that plan, opens the
  // matched Provider's detail view, or scrolls to and flashes the matched
  // Location/Contact/Scheduler row.
  function gsJumpToResult(entry) {
    if (entry.type === 'menu') {
      openTab(entry.data.side, entry.data.tabId, entry.data.title);
      return;
    }

    if (entry.type === 'provider') {
      openTab('left', 'tool-provider-dir', 'Provider Directory');
      const panelEl = openTabs.left.get('tool-provider-dir')?.panelEl;
      const card = panelEl?.querySelector(`.provider-grid-card[data-id="${entry.data.id}"]`);
      if (card) card.click();
      return;
    }

    if (entry.type === 'insurance') {
      openTab('left', 'tool-insurance-check', 'Insurance Checker');
      const panelEl = openTabs.left.get('tool-insurance-check')?.panelEl;
      const searchInput = panelEl?.querySelector('#search-input');
      if (searchInput) {
        searchInput.value = entry.label;
        searchInput.dispatchEvent(new Event('input', { bubbles: true }));
      }
      return;
    }

    if (['location', 'contact', 'scheduler'].includes(entry.type)) {
      openTab('left', 'tool-locations-contacts', 'Locations & Contacts');
      const panelEl = openTabs.left.get('tool-locations-contacts')?.panelEl;
      if (!panelEl) return;

      const selector = entry.type === 'location' ? '.lc-location-item'
        : entry.type === 'contact' ? '.lc-contact-row'
        : '.lc-table tbody tr';

      const target = [...panelEl.querySelectorAll(selector)].find(el =>
        gsCleanText(el).includes(entry.label.replace(/:$/, ''))
      );

      if (target) {
        // Give the tab-switch a beat to finish before scrolling/measuring
        setTimeout(() => {
          target.scrollIntoView({ behavior: 'smooth', block: 'center' });
          target.classList.add('gs-flash');
          setTimeout(() => target.classList.remove('gs-flash'), 1800);
        }, 50);
      }
      return;
    }

    if (entry.type === 'note') {
      // Note Bank lives in the right pane
      openTab('right', 'quick-note-bank', 'Note Bank');
      const panelEl = openTabs.right.get('quick-note-bank')?.panelEl;
      const card = panelEl?.querySelector(`#${CSS.escape(entry.data.id)}`);
      if (card) {
        setTimeout(() => {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('gs-flash');
          setTimeout(() => card.classList.remove('gs-flash'), 1800);
        }, 50);
      }
      return;
    }

    if (entry.type === 'review') {
      openTab('right', 'quick-review-sheet', 'Daily Review Sheet');
      const panelEl = openTabs.right.get('quick-review-sheet')?.panelEl;
      const card = panelEl?.querySelector(`.rs-card[data-id="${entry.data.id}"][data-category="${entry.data.category}"]`);
      if (card) {
        setTimeout(() => {
          card.scrollIntoView({ behavior: 'smooth', block: 'center' });
          card.classList.add('gs-flash');
          setTimeout(() => card.classList.remove('gs-flash'), 1800);
        }, 50);
      }
    }
  }

  function emptyStateMarkup(side) {
    const promptText = side === 'right'
      ? 'Select an item from Quick Notes to open a tab.'
      : 'Select an item from Tools, Workflows, or Settings to open a tab.';
    return `
      <div class="empty-state">
        <img src="logo-ani-2-light.svg" alt="Logo" class="empty-state-logo logo-light">
        <img src="logo-ani-2-dark.svg" alt="Logo" class="empty-state-logo logo-dark">
        <p>${promptText}</p>
      </div>
    `;
  }

  function openTab(side, id, title) {
    const tabBar = document.getElementById(`${side}TabBar`);
    const contentArea = document.getElementById(`${side}ContentArea`);

    if (!tabBar || !contentArea) return;

    // Remove empty placeholder if present
    const emptyState = contentArea.querySelector('.empty-state');
    if (emptyState) emptyState.remove();

    // If tab doesn't exist, build it
    if (!openTabs[side].has(id)) {
      // Tab Element
      const tabEl = document.createElement('div');
      tabEl.className = 'tab';
      tabEl.dataset.id = id;
      tabEl.innerHTML = `
        <span>${title}</span>
        <span class="close-tab">&times;</span>
      `;

      // Tab Content Panel Element
      const panelEl = document.createElement('div');
      panelEl.className = 'tab-panel';
      panelEl.dataset.id = id;

      // Check Template or Inject
      const template = document.getElementById(`tpl-${id}`);

      if (template) {
        const content = template.content.cloneNode(true);
        panelEl.appendChild(content);

        if (id === 'wf-sched-appt' && typeof initScheduleWizard === 'function') {
          initScheduleWizard(panelEl);
        }
        if (id === 'wf-resched-appt' && typeof initRescheduleWizard === 'function') {
          initRescheduleWizard(panelEl);
        }
        if (id === 'wf-cancel-appt' && typeof initCancelWizard === 'function') {
          initCancelWizard(panelEl);
        }
        if (id === 'wf-confirm-appt' && typeof initConfirmWizard === 'function') {
          initConfirmWizard(panelEl);
        }
        if (id === 'wf-med-request' && typeof initMedRequestWizard === 'function') {
          initMedRequestWizard(panelEl);
        }
        if (id === 'wf-referral-inquiry' && typeof initReferralWizard === 'function') {
          initReferralWizard(panelEl);
        }
        if (id === 'tool-provider-dir' && typeof initProviderDirectory === 'function') {
          initProviderDirectory(panelEl);
        }
        if (id === 'tool-insurance-check' && typeof initInsuranceChecker === 'function') {
          initInsuranceChecker(panelEl);
        }
        if (id === 'tool-locations-contacts' && typeof initLocationsContacts === 'function') {
          initLocationsContacts(panelEl);
        }
        if (id === 'settings' && typeof initSettings === 'function') {
          initSettings(panelEl);
        }
        if (id === 'quick-note-bank') {
          renderNoteBankUI();
        }
      } 
      // --- EOD REPORT DOC TEMPLATE ---
      else if (id === 'note-eod-report') {
        panelEl.innerHTML = `
          <div class="eod-container" style="display: flex; flex-direction: column; gap: 15px; padding: 10px; color: #f8fafc;">
            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Phone Number:</label>
              <input type="text" id="eod-phone" class="search-input" style="width: 100%; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;" placeholder="(281) 740-4372">
            </div>

            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Patient Info:</label>
              <textarea id="eod-raw-text" class="search-input" style="width: 100%; height: 60px; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;" placeholder="Paste patient info here..."></textarea>
            </div>

            <div class="input-group" style="background: #1e293b; padding: 12px; border-radius: 6px; border: 1px solid #334155;">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 8px;">Caller Concern / Call Disposition (Hover for details):</label>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 8px; font-size: 12px;">
                <label title="Call reached an answering machine or voicemail.">
                  <input type="checkbox" class="eod-dispo" value="A - Answering Machine"> A - Answering Machine
                </label>
                <label title="Line was busy when called.">
                  <input type="checkbox" class="eod-dispo" value="B - Busy"> B - Busy
                </label>
                <label title="Patient/caller requested a callback.">
                  <input type="checkbox" class="eod-dispo" value="CALLBK - Call Back"> CALLBK - Call Back
                </label>
                <label title="Call connected but no audio or response on the line.">
                  <input type="checkbox" class="eod-dispo" value="DAIR - Dead Air"> DAIR - Dead Air
                </label>
                <label title="Number reached is disconnected or no longer in service.">
                  <input type="checkbox" class="eod-dispo" value="DC - Disconnected Number"> DC - Disconnected Number
                </label>
                <label title="Patient is on the Do Not Call list.">
                  <input type="checkbox" class="eod-dispo" value="DNC - DO NOT CALL"> DNC - DO NOT CALL
                </label>
                <label title="Call was placed but not answered.">
                  <input type="checkbox" class="eod-dispo" value="N - No Answer"> N - No Answer
                </label>
                <label title="Patient/caller was not interested.">
                  <input type="checkbox" class="eod-dispo" value="NI - Not Interested"> NI - Not Interested
                </label>
                <label title="Call resulted in a completed sale / appointment booked as a sale.">
                  <input type="checkbox" class="eod-dispo" value="SALE - Sale Made"> SALE - Sale Made
                </label>
                <label title="Internal test call for IT purposes.">
                  <input type="checkbox" class="eod-dispo" value="TCIT - Test Call IT"> TCIT - Test Call IT
                </label>
                <label title="Call was transferred to another department or line.">
                  <input type="checkbox" class="eod-dispo" value="XFER - Call Transferred"> XFER - Call Transferred
                </label>
                <label title="Calls from Patients inquiring about Self Pay range, Billing, Account Balance, or wanting to pay bill">
                  <input type="checkbox" class="eod-dispo" value="BILL - Billing Inquiry/Payment"> BILL - Billing Inquiry/Payment
                </label>
                <label title="Calls from Patients who wants to cancel appointments">
                  <input type="checkbox" class="eod-dispo" value="Can - Inbound - Cancellation"> Can - Inbound - Cancellation
                </label>
                <label title="Any calls received but PT disconnected onset of the call">
                  <input type="checkbox" class="eod-dispo" value="CH - Customer Hang-up"> CH - Customer Hang-up
                </label>
                <label title="Any Calls received without response from the Patients on the other line">
                  <input type="checkbox" class="eod-dispo" value="GC - Ghost Call"> GC - Ghost Call
                </label>
                <label title="Any Inquiries about Tenet KSF Clinics/Providers/Resources">
                  <input type="checkbox" class="eod-dispo" value="INQ - General Inquiries"> INQ - General Inquiries
                </label>
                <label title="Calls from Patients who are inquiring about Insurance or if Insurance is accepted">
                  <input type="checkbox" class="eod-dispo" value="INS - Insurance Inquiry"> INS - Insurance Inquiry
                </label>
                <label title="Caller could not be assisted due to a language barrier (non-English/Spanish).">
                  <input type="checkbox" class="eod-dispo" value="LangBa - Language Barrier"> LangBa - Language Barrier
                </label>
                <label title="Any Inquiries about Admin, Medical Records, RX and refill, and referral.">
                  <input type="checkbox" class="eod-dispo" value="OI - Other Inquiries"> OI - Other Inquiries
                </label>
                <label title="Calls from Patients who wants to reschedule appointments">
                  <input type="checkbox" class="eod-dispo" value="RA - Inbound - Reschedule"> RA - Inbound - Reschedule
                </label>
                <label title="Calling out Patients to re-schedule / cancel appointment">
                  <input type="checkbox" class="eod-dispo" value="RES - Outbound - Reschedule/Cancel"> RES - Outbound - Reschedule/Cancel
                </label>
                <label title="Calls from Patients who wants to set up a clinic appointment (Sick, ff up, annual, lab reading, etc.)">
                  <input type="checkbox" class="eod-dispo" value="SA - Scheduled Appointment"> SA - Scheduled Appointment
                </label>
                <label title="Any Calls confirming scheduled Appointment">
                  <input type="checkbox" class="eod-dispo" value="SC - Schedule Confirmation"> SC - Schedule Confirmation
                </label>
                <label title="Any Spanish PTs who cannot converse in English">
                  <input type="checkbox" class="eod-dispo" value="SPAN - Transfer - Spanish"> SPAN - Transfer - Spanish
                </label>
                <label title="A call made not intended to our number.">
                  <input type="checkbox" class="eod-dispo" value="WN - Wrong Number"> WN - Wrong Number
                </label>
              </div>
            </div>

            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Agent Notes:</label>
              <textarea id="eod-custom-note" class="search-input" style="width: 100%; height: 60px; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;" placeholder="Type custom notes here..."></textarea>
            </div>

            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Add to Daily Review Sheet:</label>
              <div style="display: flex; gap: 14px; flex-wrap: wrap; background: #0f172a; border: 1px solid #334155; border-radius: 4px; padding: 8px 10px; font-size: 12.5px;">
                <label style="display: flex; align-items: center; gap: 5px; cursor: pointer;">
                  <input type="radio" name="eod-review-category" class="eod-review-category" value=""> None
                </label>
                <label style="display: flex; align-items: center; gap: 5px; cursor: pointer;">
                  <input type="radio" name="eod-review-category" class="eod-review-category" value="schedule"> Schedule
                </label>
                <label style="display: flex; align-items: center; gap: 5px; cursor: pointer;">
                  <input type="radio" name="eod-review-category" class="eod-review-category" value="reschedule"> Reschedule
                </label>
                <label style="display: flex; align-items: center; gap: 5px; cursor: pointer;">
                  <input type="radio" name="eod-review-category" class="eod-review-category" value="cancellation"> Cancellation
                </label>
              </div>
              <p style="margin: 5px 0 0 0; font-size: 11px; color: #94a3b8;">Categorize by the caller's original intent, even if the call resolved differently.</p>
            </div>

            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Formatted Details:</label>
              <div style="display: flex; gap: 8px;">
                <textarea id="eod-output-details" readonly style="width: 100%; height: 80px; background: #0f172a; color: #38bdf8; border: 1px solid #334155; padding: 8px; border-radius: 4px; font-family: monospace;" placeholder="Name:\nDOB:\nChart #:\nPhone #:"></textarea>
                <button onclick="navigator.clipboard.writeText(document.getElementById('eod-output-details').value)" style="background: #2563eb; color: white; border: none; padding: 0 15px; border-radius: 4px; cursor: pointer; font-weight: bold;">📋 Copy</button>
              </div>
            </div>

            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Agent Notes Output:</label>
              <div style="display: flex; gap: 8px;">
                <textarea id="eod-output-agent-notes" readonly style="width: 100%; height: 60px; background: #0f172a; color: #38bdf8; border: 1px solid #334155; padding: 8px; border-radius: 4px; font-family: monospace;" placeholder="(Caller Concern) | (Agent Notes) | (Date & Time)"></textarea>
                <button onclick="navigator.clipboard.writeText(document.getElementById('eod-output-agent-notes').value)" style="background: #2563eb; color: white; border: none; padding: 0 15px; border-radius: 4px; cursor: pointer; font-weight: bold;">📋 Copy</button>
              </div>
            </div>

            <div style="display: flex; gap: 10px; margin-top: 5px;">
              <button id="eod-btn-submit" style="background: #10b981; color: white; border: none; padding: 10px 15px; border-radius: 4px; font-weight: bold; cursor: pointer; flex: 1;">Submit to Note Bank</button>
              <button id="eod-btn-copy-both" style="background: #6366f1; color: white; border: none; padding: 10px 15px; border-radius: 4px; font-weight: bold; cursor: pointer;">Copy Both</button>
              <button id="eod-btn-clear" style="background: #ef4444; color: white; border: none; padding: 10px 15px; border-radius: 4px; font-weight: bold; cursor: pointer;">Clear</button>
            </div>
          </div>
        `;
      } 
      // --- DYNAMIC NOTE BANK TEMPLATE ---
      else if (id === 'quick-note-bank') {
        panelEl.innerHTML = `
          <div class="note-bank-container" style="padding: 15px; color: #f8fafc; font-family: sans-serif;">
            <div style="background: #1e293b; padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; border: 1px solid #334155; margin-bottom: 15px;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
                <h3 style="margin: 0; font-size: 16px;">Temporary Note Bank ( <span id="note-count" style="color: #38bdf8;">0</span> )</h3>
                <div style="display: flex; gap: 8px;">
                  <button id="nb-copy-all" style="background: #2563eb; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">Copy All Notes</button>
                  <button id="nb-copy-formatted" style="background: #475569; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">Copy Formatted Only</button>
                  <button id="nb-clear-all" style="background: #ef4444; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 12px;">Clear Bank</button>
                </div>
              </div>
              <p style="margin: 5px 0 0 0; font-size: 12px; color: #94a3b8;">Submitted notes are held here during your active session.</p>
            </div>

            <div class="date-filter" style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px; flex-wrap: wrap; background: #1e293b; padding: 10px 12px; border-radius: 6px; border: 1px solid #334155;">
              <label style="font-size: 12px; color: #94a3b8; font-weight: bold;">FILTER BY DATE:</label>
              <input type="date" id="nb-filter-from" style="background: #0f172a; color: #e2e8f0; border: 1px solid #334155; border-radius: 4px; padding: 4px 8px; font-size: 12px;">
              <span style="color: #94a3b8; font-size: 12px;">to</span>
              <input type="date" id="nb-filter-to" style="background: #0f172a; color: #e2e8f0; border: 1px solid #334155; border-radius: 4px; padding: 4px 8px; font-size: 12px;">
              <button id="nb-filter-apply" style="background: #0284c7; color: white; border: none; border-radius: 4px; padding: 4px 12px; font-size: 12px; cursor: pointer; font-weight: bold;">Apply</button>
              <button id="nb-filter-clear" style="background: #475569; color: white; border: none; border-radius: 4px; padding: 4px 12px; font-size: 12px; cursor: pointer; font-weight: bold;">Reset</button>
            </div>

            <div class="export-actions" style="display: flex; align-items: center; gap: 8px; margin-bottom: 15px;">
              <label for="exportFormatSelect" style="font-size: 12px; color: #94a3b8; font-weight: bold;">EXPORT FORMAT:</label>
              <select id="exportFormatSelect" style="background: #0f172a; color: #e2e8f0; border: 1px solid #334155; border-radius: 4px; padding: 4px 8px; font-size: 12px;">
                <option value="txt">Text File (.txt)</option>
                <option value="json">JSON Backup (.json)</option>
              </select>
              <button type="button" class="btn-export" onclick="exportNotes(document.getElementById('exportFormatSelect').value)" style="background: #0284c7; color: white; border: none; border-radius: 4px; padding: 4px 12px; font-size: 12px; cursor: pointer; font-weight: bold;">
                Download Notes
              </button>
            </div>

            <div id="noteBankContainer" style="display: flex; flex-direction: column; gap: 12px;">
              <div id="nb-empty-state" style="color: #64748b; font-size: 13px; font-style: italic; text-align: center; padding: 20px;">No notes in bank.</div>
            </div>
          </div>
        `;
      } 
      // --- DAILY REVIEW SHEET TEMPLATE ---
      else if (id === 'quick-review-sheet') {
        panelEl.innerHTML = `
          <div class="review-sheet-container">
            <div class="rs-header">
              <h2>Daily Review Sheet</h2>
              <p>Entries you've tagged from the EOD Report, grouped to match the spreadsheet's Schedule / Reschedule / Cancellation columns.</p>
            </div>

            <div class="rs-date-filter">
              <label>FILTER BY DATE:</label>
              <input type="date" id="rs-filter-from">
              <span>to</span>
              <input type="date" id="rs-filter-to">
              <button type="button" class="btn btn-secondary" id="rs-filter-apply">Apply</button>
              <button type="button" class="btn btn-secondary" id="rs-filter-clear">Reset</button>
            </div>

            <div class="rs-toolbar">
              <button type="button" class="btn btn-primary" id="rs-export-excel">Export All to Excel (.xlsx)</button>
              <button type="button" class="btn rs-clear-all-btn" id="rs-clear-all">Clear All</button>
            </div>

            <div class="rs-columns" id="rs-columns"></div>
          </div>
        `;
      }
      // --- CLINICAL HISTORY INQUIRY TEMPLATE ---
      else if (id === 'note-clinical-history') {
        panelEl.innerHTML = `
          <div class="chi-container" style="display: flex; flex-direction: column; gap: 15px; padding: 15px; color: #f8fafc; font-family: sans-serif;">
            <div class="input-group">
              <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Inquiry Mode:</label>
              <select id="chi-mode" style="width: 100%; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;">
                <option value="schedule" selected>Schedule</option>
                <option value="reschedule">Reschedule</option>
                <option value="cancel">Cancel</option>
              </select>
            </div>

            <div id="chi-form-schedule" class="chi-variant-form" style="display: flex; flex-direction: column; gap: 12px;">
              <div class="input-group">
                <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Visit Type:</label>
                <select id="chi-visit-type" style="width: 100%; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;">
                  <option value="NP">New Patient</option>
                  <option value="FU">Follow Up</option>
                  <option value="NProb">New Problem</option>
                </select>
              </div>

              <div class="input-group">
                <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Affected Body Part:</label>
                <select id="chi-body-part" style="width: 100%; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;">
                  <option value="Affected Area">-- Select Body Part --</option>
                  <option value="Neck">Neck</option>
                  <option value="Spine">Spine</option>
                  <option value="Upper Back">Upper Back</option>
                  <option value="Lower Back">Lower Back</option>
                  <option value="Left Shoulder">Left Shoulder</option>
                  <option value="Right Shoulder">Right Shoulder</option>
                  <option value="Left Elbow">Left Elbow</option>
                  <option value="Right Elbow">Right Elbow</option>
                  <option value="Left Hand">Left Hand</option>
                  <option value="Right Hand">Right Hand</option>
                  <option value="Left Wrist">Left Wrist</option>
                  <option value="Right Wrist">Right Wrist</option>
                  <option value="Hip">Hip</option>
                  <option value="Upper Left Leg">Upper Left Leg</option>
                  <option value="Lower Left Leg">Lower Left Leg</option>
                  <option value="Upper Right Leg">Upper Right Leg</option>
                  <option value="Lower Right Leg">Lower Right Leg</option>
                  <option value="Left Knee">Left Knee</option>
                  <option value="Right Knee">Right Knee</option>
                  <option value="Left Foot">Left Foot</option>
                  <option value="Right Foot">Right Foot</option>
                  <option value="Left Ankle">Left Ankle</option>
                  <option value="Right Ankle">Right Ankle</option>
                </select>
              </div>

              <div class="input-group" style="background: #1e293b; padding: 10px; border-radius: 6px; border: 1px solid #334155; display: flex; gap: 15px; font-size: 12px;">
                <label><input type="checkbox" id="chi-xray"> X-Ray Available</label>
                <label><input type="checkbox" id="chi-mri"> MRI Available</label>
                <label><input type="checkbox" id="chi-sx"> Prior Surgery to Area</label>
              </div>

              <div class="input-group" style="background: #1e293b; padding: 10px; border-radius: 6px; border: 1px solid #334155; display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
                <label><input type="checkbox" id="chi-dr-shar"> Seeing Dr. Shar?</label>
                <label id="chi-emg-wrapper" style="display: none; margin-left: 20px; color: #38bdf8;"><input type="checkbox" id="chi-emg"> EMG Available</label>
              </div>

              <div class="input-group" style="background: #1e293b; padding: 10px; border-radius: 6px; border: 1px solid #334155; display: flex; gap: 15px; font-size: 12px;">
                <span style="font-weight: 600;">Is Injury:</span>
                <label><input type="checkbox" id="chi-work-injury"> Work Related</label>
                <label><input type="checkbox" id="chi-auto-injury"> Vehicular Accident</label>
              </div>

              <div class="input-group">
                <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Assistive Devices:</label>
                <div style="display: flex; gap: 12px; font-size: 12px;">
                  <label><input type="checkbox" class="chi-device" value="Glasses"> Glasses</label>
                  <label><input type="checkbox" class="chi-device" value="Contact Lens"> Contact Lens</label>
                  <label><input type="checkbox" class="chi-device" value="Hearing Aid"> Hearing Aid</label>
                </div>
              </div>
            </div>

            <div id="chi-form-resched-cancel" class="chi-variant-form" style="display: none; flex-direction: column; gap: 12px;">
              <div class="input-group">
                <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Reason:</label>
                <input type="text" id="chi-reason" style="width: 100%; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;" placeholder="e.g. Schedule conflict">
              </div>

              <div class="input-group">
                <label style="font-weight: 600; font-size: 13px; display: block; margin-bottom: 5px;">Provider:</label>
                <select id="chi-provider" style="width: 100%; background: #0f172a; color: #fff; border: 1px solid #334155; padding: 8px; border-radius: 4px;">
                  <option value="Dr. George">Dr. George</option>
                  <option value="Dr. Dean">Dr. Dean</option>
                  <option value="Dr. Miller">Dr. Miller</option>
                  <option value="Dr. Shar">Dr. Shar</option>
                  <option value="Dr. Kong">Dr. Kong</option>
                  <option value="Dr. Hulen">Dr. Hulen</option>
                  <option value="Dr. Kanjia">Dr. Kanjia</option>
                  <option value="Dr. Lewis">Dr. Lewis</option>
                </select>
              </div>
            </div>

            <div class="input-group" style="background: #1e293b; padding: 12px; border-radius: 6px; border: 1px solid #334155;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <label style="font-weight: 600; font-size: 12px; color: #94a3b8; text-transform: uppercase;">Clinical History Summary</label>
                <button id="chi-btn-copy" style="background: #2563eb; color: white; border: none; padding: 4px 10px; border-radius: 4px; font-weight: bold; cursor: pointer; font-size: 11px;">📋 Copy Code</button>
              </div>
              <textarea id="chi-summary-output" readonly style="width: 100%; height: 50px; background: #0f172a; color: #38bdf8; border: 1px solid #334155; padding: 8px; border-radius: 4px; font-family: monospace; font-size: 12px;"></textarea>
            </div>

          </div>
        `;
      }
      else {
        panelEl.innerHTML = `<h3>${title}</h3><p>Content area for ${title}. Replace this template later.</p>`;
      }

      tabEl.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-tab')) {
          closeTab(side, id);
        } else {
          setActiveTab(side, id);
        }
      });

      makeTabDraggable(tabEl, side);

      tabBar.appendChild(tabEl);
      contentArea.appendChild(panelEl);
      openTabs[side].set(id, { tabEl, panelEl });
    }

    setActiveTab(side, id);

    if (id === 'quick-note-bank') {
      renderNoteBankUI();
    }
    if (id === 'quick-review-sheet') {
      renderReviewSheetUI();
    }
    if (id === 'settings') {
      renderSettingsActivityLog();
    }
  }

  function setActiveTab(side, id) {
    const sideMap = openTabs[side];
    if (!sideMap) return;

    sideMap.forEach(({ tabEl, panelEl }) => {
      tabEl.classList.remove('active');
      panelEl.classList.remove('active');
    });

    const active = sideMap.get(id);
    if (active) {
      active.tabEl.classList.add('active');
      active.panelEl.classList.add('active');
    }
  }

  function closeTab(side, id) {
    const sideMap = openTabs[side];
    if (!sideMap) return;

    const item = sideMap.get(id);
    if (!item) return;

    item.tabEl.remove();
    item.panelEl.remove();
    sideMap.delete(id);

    if (sideMap.size > 0) {
      const lastKey = Array.from(sideMap.keys()).pop();
      setActiveTab(side, lastKey);
    } else {
      const contentArea = document.getElementById(`${side}ContentArea`);
      if (contentArea) {
        contentArea.innerHTML = emptyStateMarkup(side);
      }
    }
  }

  // 4. EOD Parser & Action Handlers
  let lastEODParsed = { name: '', dob: '', chart: '' };

  document.addEventListener('input', (e) => {
    if (e.target.matches('#eod-raw-text, #eod-phone, #eod-custom-note, .eod-dispo')) {
      updateEODOutputs();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && e.target.closest('.eod-container')) {
      e.preventDefault();
      submitEODToNoteBank();
    }
  });

  document.addEventListener('click', (e) => {
    if (e.target.id === 'eod-btn-submit') submitEODToNoteBank();
    if (e.target.id === 'eod-btn-clear') clearEODForm();
    if (e.target.id === 'eod-btn-copy-both') copyBothEODOutputs();
  });

  function updateEODOutputs() {
    const rawText = document.getElementById('eod-raw-text')?.value || '';
    const rawPhone = document.getElementById('eod-phone')?.value || '';
    const customNote = document.getElementById('eod-custom-note')?.value || '';

    const cleanPhone = rawPhone.replace(/\D/g, '');
    let name = '', dob = '', chart = '';

    if (rawText.trim()) {
      const dobMatch = rawText.match(/\d{2}[-\/]\d{2}[-\/]\d{4}/);
      if (dobMatch) dob = dobMatch[0];

      const chartMatch = rawText.match(/(?<!E)#(\d+)/i) || rawText.match(/#(\d+)/);
      if (chartMatch) chart = chartMatch[1];

      const nameSplit = rawText.split(/\d+\s*yo/i);
      if (nameSplit.length > 1) {
        name = nameSplit[0].replace(/^[A-Z]{1,2}\s+/, '').trim();
      } else {
        name = rawText.split(/\d{2}[-\/]\d{2}[-\/]\d{4}/)[0].replace(/[MF]$/i, '').trim();
      }
    }

    const detailsField = document.getElementById('eod-output-details');
    if (detailsField) {
      detailsField.value = `Name: ${name}\nDOB: ${dob}\nChart #: ${chart}\nPhone #: ${cleanPhone}`;
    }

    lastEODParsed = { name, dob, chart };

    const selectedDispos = Array.from(document.querySelectorAll('.eod-dispo:checked'))
                                .map(cb => cb.value)
                                .join(', ');

    const now = new Date();
    const dateTimeStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const notesField = document.getElementById('eod-output-agent-notes');
    if (notesField) {
      notesField.value = `${selectedDispos || 'N/A'} | ${customNote || 'N/A'} | ${dateTimeStr}`;
    }
  }

  function copyBothEODOutputs() {
    const details = document.getElementById('eod-output-details')?.value || '';
    const notes = document.getElementById('eod-output-agent-notes')?.value || '';
    
    const formattedCombinedText = `${details}\nAgent Notes Output: ${notes}`;
    navigator.clipboard.writeText(formattedCombinedText);
  }

  function clearEODForm() {
    document.querySelectorAll('.eod-container input[type="text"], .eod-container textarea').forEach(el => el.value = '');
    document.querySelectorAll('.eod-dispo').forEach(cb => cb.checked = false);
    document.querySelectorAll('.eod-review-category').forEach(rb => rb.checked = false);
    lastEODParsed = { name: '', dob: '', chart: '' };
    updateEODOutputs();
  }

  // 5. Global Note Bank Operations
  function submitEODToNoteBank() {
    const details = document.getElementById('eod-output-details')?.value || '';
    const notes = document.getElementById('eod-output-agent-notes')?.value || '';

    if (!details && !notes) return;

    const noteContent = `${details}\nAgent Notes Output: ${notes}`;

    const selectedCategory = document.querySelector('.eod-review-category:checked')?.value || '';
    let reviewLink = null;
    if (selectedCategory) {
      const entryId = addToReviewSheet(selectedCategory, {
        name: lastEODParsed.name,
        dob: lastEODParsed.dob,
        chart: lastEODParsed.chart,
        agentNote: ''
      });
      reviewLink = { category: selectedCategory, entryId };
      if (typeof renderReviewSheetUI === 'function') renderReviewSheetUI();
    }

    saveNoteToBank(noteContent, 'EOD Report', reviewLink);

    clearEODForm();

    const submitBtn = document.getElementById('eod-btn-submit');
    if (submitBtn) {
      const originalText = submitBtn.textContent;
      const originalBg = submitBtn.style.backgroundColor;

      submitBtn.textContent = 'Submitted!';
      submitBtn.style.backgroundColor = '#059669';
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = originalBg;
        submitBtn.disabled = false;
      }, 2000);
    }
  }

  // Delegation Event Handler for Note Bank Operations
  document.addEventListener('click', (e) => {
    // Copy Single Card
    if (e.target.classList.contains('nb-card-copy')) {
      const card = e.target.closest('.note-card');
      const id = card.id;
      const entry = appState.noteBank.find(item => item.id === id);
      if (entry) {
        navigator.clipboard.writeText(entry.content);
      }
    }

    // Delete Single Card
    if (e.target.classList.contains('nb-card-delete')) {
      const card = e.target.closest('.note-card');
      const id = card.id;
      const entry = appState.noteBank.find(item => item.id === id);
      if (entry?.reviewEntryId) {
        removeFromReviewSheet(entry.reviewCategory, entry.reviewEntryId);
        if (typeof renderReviewSheetUI === 'function') renderReviewSheetUI();
      }
      appState.noteBank = appState.noteBank.filter(item => item.id !== id);
      localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
      renderNoteBankUI();
    }

    // Toggle Edit Mode
    if (e.target.classList.contains('nb-card-edit')) {
      const card = e.target.closest('.note-card');
      const displayMode = card.querySelector('.card-display-mode');
      const editMode = card.querySelector('.card-edit-mode');
      const isEditing = editMode.style.display === 'flex';

      displayMode.style.display = isEditing ? 'block' : 'none';
      editMode.style.display = isEditing ? 'none' : 'flex';
      e.target.textContent = isEditing ? 'Edit' : 'Cancel';
    }

    // Save Card Changes
    if (e.target.classList.contains('nb-card-save')) {
      const card = e.target.closest('.note-card');
      const id = card.id;
      const newText = card.querySelector('.edit-content').value;
      const newCategory = card.querySelector('.nb-review-category:checked')?.value || '';

      const entry = appState.noteBank.find(item => item.id === id);
      if (entry) {
        entry.content = newText;

        const oldCategory = entry.reviewCategory || '';
        const oldEntryId = entry.reviewEntryId || null;
        const parsed = parseNameDobChartFromNote(newText);

        if (!newCategory) {
          // Category cleared — remove the linked Daily Review Sheet entry, if any
          if (oldEntryId) removeFromReviewSheet(oldCategory, oldEntryId);
          entry.reviewCategory = '';
          entry.reviewEntryId = null;
        } else if (oldEntryId && oldCategory === newCategory) {
          // Same column — just refresh Name/DOB/Chart# in place
          const linked = (appState.reviewSheet[newCategory] || []).find(r => r.id === oldEntryId);
          if (linked) {
            linked.name = parsed.name;
            linked.dob = parsed.dob;
            linked.chart = parsed.chart;
            saveReviewSheet();
          }
        } else {
          // New link, or moved to a different column — drop the old one, create a fresh one
          if (oldEntryId) removeFromReviewSheet(oldCategory, oldEntryId);
          const newEntryId = addToReviewSheet(newCategory, {
            name: parsed.name,
            dob: parsed.dob,
            chart: parsed.chart,
            agentNote: ''
          });
          entry.reviewCategory = newCategory;
          entry.reviewEntryId = newEntryId;
        }

        localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
        if (typeof renderReviewSheetUI === 'function') renderReviewSheetUI();
      }
      renderNoteBankUI();
    }

    // Global Action: Copy All (uses the same formatted layout as file export, respects date filter)
    if (e.target.id === 'nb-copy-all') {
      const notes = getFilteredNotes();
      if (notes.length === 0) return;
      navigator.clipboard.writeText(buildNoteBankText(notes));
    }

    // Global Action: Copy Formatted (content only, respects date filter)
    if (e.target.id === 'nb-copy-formatted') {
      const notes = getFilteredNotes();
      if (notes.length === 0) return;
      const formattedOnlyText = notes.map(n => n.content).join('\n\n');
      navigator.clipboard.writeText(formattedOnlyText);
    }

    // Global Action: Clear (clears only the notes currently in view if a date filter is applied)
    if (e.target.id === 'nb-clear-all') {
      const notes = getFilteredNotes();
      const isFiltered = notes.length !== appState.noteBank.length;
      const confirmMsg = isFiltered
        ? `Clear ${notes.length} filtered note(s) from the bank? Notes outside the selected date range will be kept.`
        : 'Clear all stored notes from the bank?';

      if (confirm(confirmMsg)) {
        const idsToRemove = new Set(notes.map(n => n.id));
        appState.noteBank = appState.noteBank.filter(n => !idsToRemove.has(n.id));
        localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
        renderNoteBankUI();
      }
    }

    // Date Filter: Apply
    if (e.target.id === 'nb-filter-apply') {
      renderNoteBankUI();
    }

    // Date Filter: Reset
    if (e.target.id === 'nb-filter-clear') {
      const fromInput = document.getElementById('nb-filter-from');
      const toInput = document.getElementById('nb-filter-to');
      if (fromInput) fromInput.value = '';
      if (toInput) toInput.value = '';
      renderNoteBankUI();
    }

    if (e.target.id === 'chi-btn-copy') {
      const output = document.getElementById('chi-summary-output')?.value || '';
      if (output) navigator.clipboard.writeText(output);
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'chi-mode') {
      const mode = e.target.value;
      const schedForm = document.getElementById('chi-form-schedule');
      const reschedForm = document.getElementById('chi-form-resched-cancel');

      if (schedForm && reschedForm) {
        if (mode === 'schedule') {
          schedForm.style.display = 'flex';
          reschedForm.style.display = 'none';
        } else {
          schedForm.style.display = 'none';
          reschedForm.style.display = 'flex';
        }
      }
      updateCHISummary();
    }

    if (e.target.id === 'chi-dr-shar') {
      const emgWrapper = document.getElementById('chi-emg-wrapper');
      if (emgWrapper) emgWrapper.style.display = e.target.checked ? 'block' : 'none';
      updateCHISummary();
    }

    if (e.target.closest('.chi-container')) {
      updateCHISummary();
    }
  });

  document.addEventListener('input', (e) => {
    if (e.target.closest('.chi-container')) {
      updateCHISummary();
    }
  });

  function updateCHISummary() {
    const mode = document.getElementById('chi-mode')?.value || 'schedule';
    const outputEl = document.getElementById('chi-summary-output');
    if (!outputEl) return;

    const agentId = document.getElementById('agentIdInput')?.value.trim() || 'icaores';

    if (mode === 'schedule') {
      const visitType = document.getElementById('chi-visit-type')?.value || 'NP';
      const bodyPart = document.getElementById('chi-body-part')?.value || 'Affected Area';
      const xray = document.getElementById('chi-xray')?.checked ? 'yxray' : 'nxray';
      const mri = document.getElementById('chi-mri')?.checked ? 'ymri' : 'nmri';
      const sx = document.getElementById('chi-sx')?.checked ? 'ysx' : 'nsx';
      
      let sharEmgOutput = '';
      const isShar = document.getElementById('chi-dr-shar')?.checked;
      if (isShar) {
        const isEmg = document.getElementById('chi-emg')?.checked;
        sharEmgOutput = isEmg ? ' / yemg' : ' / nemg';
      }

      const nwr = document.getElementById('chi-work-injury')?.checked ? 'ywr' : 'nwr';
      const ncr = document.getElementById('chi-auto-injury')?.checked ? 'ycr' : 'ncr';

      outputEl.value = `${visitType} / ${bodyPart} / ${xray} / ${mri} / ${sx}${sharEmgOutput} / ${nwr} / ${ncr} / ${agentId}`;
    } else {
      const reason = document.getElementById('chi-reason')?.value || 'Reason';
      const provider = document.getElementById('chi-provider')?.value || 'Dr. Provider';

      outputEl.value = `${reason} / ${provider} / ${agentId}`;
    }
  }

  // --- AGENT ID PERSISTENCE ---
  const agentInput = document.getElementById('agentIdInput');

  if (agentInput) {
    const savedId = localStorage.getItem('ksf_agent_id');
    if (savedId) {
      agentInput.value = savedId;
    }

    agentInput.addEventListener('input', () => {
      localStorage.setItem('ksf_agent_id', agentInput.value.trim());
      updateCHISummary();
    });
  }

}); // End of DOMContentLoaded

// =========================================================
// WIZARD ENGINE FUNCTION
// =========================================================
function initScheduleWizard(container) {
  if (!container) return;
  const navButtons = container.querySelectorAll('.wizard-step-btn');
  const panels = container.querySelectorAll('.wizard-panel');

  function goToStep(stepNum) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepNum));
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === String(stepNum));
    });
    updateRecap();
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(btn.getAttribute('data-step'));
    });
  });

  container.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep < 6) goToStep(currentStep + 1);
    });
  });

  container.querySelectorAll('.wiz-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  container.querySelectorAll('.btn-group-options').forEach(group => {
    const optionBtns = group.querySelectorAll('.btn-option');
    optionBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        optionBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        handleOptionAlerts();
        updateRecap();
      });
    });
  });

  function handleOptionAlerts() {
    const injuryActive = container.querySelector('[data-injury].active')?.getAttribute('data-injury');
    const injuryAlert = container.querySelector('#wiz-injury-alert');
    
    if (injuryAlert) {
      if (injuryActive === 'work') {
        injuryAlert.style.display = 'block';
        injuryAlert.className = 'alert-box warning';
        injuryAlert.innerHTML = '<strong>Action Required: Connect to Worker\'s Comp</strong><br>"Okay, right now I can only set up appointments for patients with commercial insurance or self-pay. Let me connect you to my colleague who handles patients with worker\'s comp. Stay on the line please."';
      } else if (injuryActive === 'auto') {
        injuryAlert.style.display = 'block';
        injuryAlert.className = 'alert-box danger';
        injuryAlert.innerHTML = '<strong>Action Required: Decline Service</strong><br>"I apologize, but we do not handle vehicular accident cases here at KSF."';
      } else {
        injuryAlert.style.display = 'none';
      }
    }

    const insType = container.querySelector('#wiz-insurance-type')?.value;
    const insAlert = container.querySelector('#wiz-insurance-alert');
    if (insAlert) {
      if (insType === 'hmo') {
        insAlert.style.display = 'block';
        insAlert.innerHTML = '<strong>athenaOne Action: Check for referral.</strong><br>"Since you have an HMO Plan and there is no referral on file, you need to call your PCP and ask them to send us a referral."';
      } else {
        insAlert.style.display = 'none';
      }
    }
  }

  container.querySelector('#wiz-insurance-type')?.addEventListener('change', handleOptionAlerts);

  function generateClinicalCode() {
    const xray = container.querySelector('#wiz-xray')?.checked ? 'yxray' : 'nxray';
    const mri = container.querySelector('#wiz-mri')?.checked ? 'ymri' : 'nmri';
    const sx = container.querySelector('#wiz-sx')?.checked ? 'ysx' : 'nsx';
    const isShar = container.querySelector('#wiz-dr-shar')?.checked;
    const sharOutput = isShar ? ' / yemg' : '';
    
    const bodyPart = container.querySelector('#wiz-body-part')?.value || 'Affected Area';
    const injuryType = container.querySelector('[data-injury].active')?.getAttribute('data-injury');
    const nwr = injuryType === 'work' ? 'ywr' : 'nwr';
    const ncr = injuryType === 'auto' ? 'ycr' : 'ncr';
    
    const agentId = document.getElementById('agentIdInput')?.value.trim() || 'agent';

    return `NP / ${bodyPart} / ${xray} / ${mri} / ${sx}${sharOutput} / ${nwr} / ${ncr} / ${agentId}`;
  }

  function updateRecap() {
    const bodyPart = container.querySelector('#wiz-body-part')?.value || 'Affected Area';
    const physician = container.querySelector('#wiz-physician')?.value || '[Assigned Physician]';
    const summaryCode = generateClinicalCode();

    const summaryInput = container.querySelector('#wiz-clinical-summary-output');
    if (summaryInput) summaryInput.value = summaryCode;

    const recapBody = container.querySelector('#recap-body-part');
    const recapDoc = container.querySelector('#recap-doctor');
    const recapCode = container.querySelector('#recap-summary-code');
    const scriptDoc = container.querySelector('#recap-script-doctor');
    const scriptBody = container.querySelector('#recap-script-body-part');

    if (recapBody) recapBody.textContent = bodyPart;
    if (recapDoc) recapDoc.textContent = physician;
    if (recapCode) recapCode.textContent = summaryCode;
    if (scriptDoc) scriptDoc.textContent = physician;
    if (scriptBody) scriptBody.textContent = bodyPart;
  }

  container.querySelectorAll('.wiz-input, .wiz-checkbox input').forEach(input => {
    input.addEventListener('change', updateRecap);
  });

  container.querySelector('#wiz-copy-summary')?.addEventListener('click', () => {
    const summaryInput = container.querySelector('#wiz-clinical-summary-output');
    if (summaryInput && summaryInput.value) {
      navigator.clipboard.writeText(summaryInput.value);
    }
  });

  container.querySelector('#wiz-reset-call')?.addEventListener('click', () => {
    container.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
    container.querySelectorAll('select').forEach(sel => sel.selectedIndex = 0);
    goToStep(1);
  });
}

function initRescheduleWizard(container) {
  if (!container) return;
  const navButtons = container.querySelectorAll('.wizard-step-btn');
  const panels = container.querySelectorAll('.wizard-panel');
  const totalSteps = panels.length;

  function goToStep(stepNum) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepNum));
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === String(stepNum));
    });
    updateRecap();
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(btn.getAttribute('data-step'));
    });
  });

  container.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep < totalSteps) goToStep(currentStep + 1);
    });
  });

  container.querySelectorAll('.wiz-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  function updateRecap() {
    const existingAppt = container.querySelector('#rwiz-existing-appt')?.value.trim() || 'Not specified';
    const reason = container.querySelector('#rwiz-reason')?.value.trim() || 'Not specified';
    const physician = container.querySelector('#rwiz-physician')?.value || '';

    const recapExisting = container.querySelector('#recap-existing-appt');
    const recapReason = container.querySelector('#recap-reason');
    const recapDoc = container.querySelector('#recap-resched-doctor');
    const scriptDoc = container.querySelector('#recap-resched-script-doctor');

    if (recapExisting) recapExisting.textContent = existingAppt;
    if (recapReason) recapReason.textContent = reason;
    if (recapDoc) recapDoc.textContent = physician || 'Assigned Physician';
    if (scriptDoc) scriptDoc.textContent = physician || 'your physician';
  }

  container.querySelectorAll('.wiz-input').forEach(input => {
    input.addEventListener('input', updateRecap);
    input.addEventListener('change', updateRecap);
  });

  container.querySelector('#rwiz-reset-call')?.addEventListener('click', () => {
    container.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    container.querySelectorAll('select').forEach(sel => sel.selectedIndex = 0);
    goToStep(1);
  });

  updateRecap();
}

function initCancelWizard(container) {
  if (!container) return;
  const navButtons = container.querySelectorAll('.wizard-step-btn');
  const panels = container.querySelectorAll('.wizard-panel');
  const totalSteps = panels.length;

  function goToStep(stepNum) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepNum));
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === String(stepNum));
    });
    updateRecap();
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(btn.getAttribute('data-step'));
    });
  });

  container.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep < totalSteps) goToStep(currentStep + 1);
    });
  });

  container.querySelectorAll('.wiz-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  function updateRecap() {
    const existingAppt = container.querySelector('#cwiz-existing-appt')?.value.trim() || 'Not specified';
    const reason = container.querySelector('#cwiz-reason')?.value.trim() || 'Not specified';

    const recapAppt = container.querySelector('#recap-cancel-appt');
    const recapReason = container.querySelector('#recap-cancel-reason');

    if (recapAppt) recapAppt.textContent = existingAppt;
    if (recapReason) recapReason.textContent = reason;
  }

  container.querySelectorAll('.wiz-input').forEach(input => {
    input.addEventListener('input', updateRecap);
    input.addEventListener('change', updateRecap);
  });

  container.querySelector('#cwiz-reset-call')?.addEventListener('click', () => {
    container.querySelectorAll('input[type="text"]').forEach(inp => inp.value = '');
    goToStep(1);
  });

  updateRecap();
}

function initConfirmWizard(container) {
  if (!container) return;
  const navButtons = container.querySelectorAll('.wizard-step-btn');
  const panels = container.querySelectorAll('.wizard-panel');
  const totalSteps = panels.length;

  function goToStep(stepNum) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepNum));
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === String(stepNum));
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(btn.getAttribute('data-step'));
    });
  });

  container.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep < totalSteps) goToStep(currentStep + 1);
    });
  });

  container.querySelectorAll('.wiz-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  container.querySelector('#cfwiz-reset-call')?.addEventListener('click', () => {
    goToStep(1);
  });
}

function initMedRequestWizard(container) {
  if (!container) return;
  const navButtons = container.querySelectorAll('.wizard-step-btn');
  const panels = container.querySelectorAll('.wizard-panel');
  const totalSteps = panels.length;

  function goToStep(stepNum) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepNum));
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === String(stepNum));
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(btn.getAttribute('data-step'));
    });
  });

  container.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep < totalSteps) goToStep(currentStep + 1);
    });
  });

  container.querySelectorAll('.wiz-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  container.querySelector('#mwiz-reset-call')?.addEventListener('click', () => {
    goToStep(1);
  });
}

function initReferralWizard(container) {
  if (!container) return;
  const navButtons = container.querySelectorAll('.wizard-step-btn');
  const panels = container.querySelectorAll('.wizard-panel');
  const totalSteps = panels.length;

  function goToStep(stepNum) {
    navButtons.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-step') === String(stepNum));
    });
    panels.forEach(panel => {
      panel.classList.toggle('active', panel.getAttribute('data-panel') === String(stepNum));
    });
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      goToStep(btn.getAttribute('data-step'));
    });
  });

  container.querySelectorAll('.wiz-next').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep < totalSteps) goToStep(currentStep + 1);
    });
  });

  container.querySelectorAll('.wiz-prev').forEach(btn => {
    btn.addEventListener('click', () => {
      const activePanel = container.querySelector('.wizard-panel.active');
      const currentStep = parseInt(activePanel?.getAttribute('data-panel') || '1', 10);
      if (currentStep > 1) goToStep(currentStep - 1);
    });
  });

  // Referral status selector: clicking a status shows its script and updates the recap
  const statusButtons = container.querySelectorAll('.referral-status-btn');
  const scriptBox = container.querySelector('#refwiz-status-script');
  const recapStatus = container.querySelector('#recap-referral-status');

  statusButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      statusButtons.forEach(b => b.style.border = '2px solid transparent');
      btn.style.border = '2px solid #f8fafc';

      if (scriptBox) {
        scriptBox.textContent = `"${btn.getAttribute('data-script')}"`;
        scriptBox.style.display = 'block';
      }
      if (recapStatus) {
        recapStatus.textContent = btn.getAttribute('data-status');
      }
    });
  });

  container.querySelector('#refwiz-reset-call')?.addEventListener('click', () => {
    statusButtons.forEach(b => b.style.border = '2px solid transparent');
    if (scriptBox) {
      scriptBox.textContent = '';
      scriptBox.style.display = 'none';
    }
    if (recapStatus) recapStatus.textContent = 'Not checked';
    goToStep(1);
  });
}

// ==========================================
// STORAGE & APP STATE HELPER FUNCTIONS
// ==========================================

function saveNoteToBank(noteContent, category = 'General Note', reviewLink = null) {
  const now = new Date();
  const newEntry = {
    id: 'note_' + Date.now(),
    timestamp: now.toLocaleString(),
    dateObj: now.toISOString(),
    category: category,
    content: noteContent,
    reviewCategory: reviewLink?.category || '',
    reviewEntryId: reviewLink?.entryId || null
  };

  appState.noteBank.push(newEntry);
  localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
  
  logActivity(`Added new ${category} to Note Bank`);
  renderNoteBankUI();
  return newEntry;
}

function logActivity(actionMessage) {
  const logEntry = {
    id: 'log_' + Date.now(),
    timestamp: new Date().toLocaleString(),
    dateObj: new Date().toISOString(),
    action: actionMessage
  };

  appState.activityLogs.push(logEntry);
  localStorage.setItem('ksf_activity_logs', JSON.stringify(appState.activityLogs));
}

function toggleTheme(themeName) {
  appState.theme = themeName;
  document.body.className = themeName;
  localStorage.setItem('ksf_theme', themeName);
  updateFavicon(themeName);

  logActivity(`Switched UI theme to ${themeName}`);
}

// Swaps the browser tab favicon to match the active theme, reusing the
// same PrismDesk logo assets already used for the header/empty-state logos.
// Light theme -> dark-colored logo (visible on a light browser tab), and
// vice versa, matching how the header logo pair already behaves.
function updateFavicon(themeName) {
  const favicon = document.getElementById('app-favicon');
  if (!favicon) return;
  favicon.href = themeName === 'dark' || themeName === 'night'
    ? 'prismdesk-logo-light.svg'
    : 'prismdesk-logo-dark.svg';
}

function cleanupOldLogs() {
  const thirtyDaysInMs = 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();

  appState.activityLogs = appState.activityLogs.filter(log => {
    const logTime = new Date(log.dateObj || log.timestamp).getTime();
    return (now - logTime) < thirtyDaysInMs;
  });

  localStorage.setItem('ksf_activity_logs', JSON.stringify(appState.activityLogs));
}

function getFilteredNotes() {
  const fromVal = document.getElementById('nb-filter-from')?.value;
  const toVal = document.getElementById('nb-filter-to')?.value;

  if (!fromVal && !toVal) return appState.noteBank;

  const fromTime = fromVal ? new Date(`${fromVal}T00:00:00`).getTime() : null;
  const toTime = toVal ? new Date(`${toVal}T23:59:59`).getTime() : null;

  return appState.noteBank.filter(note => {
    const noteTime = new Date(note.dateObj || note.timestamp).getTime();
    if (fromTime !== null && noteTime < fromTime) return false;
    if (toTime !== null && noteTime > toTime) return false;
    return true;
  });
}

function renderNoteBankUI() {
  const container = document.getElementById('noteBankContainer');
  const countEl = document.getElementById('note-count');
  if (!container) return;

  const filteredNotes = getFilteredNotes();

  if (countEl) {
    countEl.textContent = filteredNotes.length === appState.noteBank.length
      ? appState.noteBank.length
      : `${filteredNotes.length} / ${appState.noteBank.length}`;
  }

  if (filteredNotes.length === 0) {
    container.innerHTML = appState.noteBank.length === 0
      ? '<div id="nb-empty-state" style="color: #64748b; font-size: 13px; font-style: italic; text-align: center; padding: 20px;">No notes in bank.</div>'
      : '<div id="nb-empty-state" style="color: #64748b; font-size: 13px; font-style: italic; text-align: center; padding: 20px;">No notes match the selected date range.</div>';
    return;
  }

  container.innerHTML = filteredNotes.map((note, index) => `
    <div class="note-card" id="${note.id}" style="background: #0f172a; border: 1px solid #334155; border-radius: 6px; padding: 12px; display: flex; flex-direction: column; gap: 8px;">
      <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #1e293b; padding-bottom: 6px;">
        <span style="font-size: 11px; font-weight: bold; color: #38bdf8;">Entry #${index + 1} (${note.timestamp})${note.reviewCategory ? ` &bull; <span style="color: #4ade80;">${RS_CATEGORY_LABELS[note.reviewCategory] || note.reviewCategory}</span>` : ''}</span>
        <div style="display: flex; gap: 6px;">
          <button class="nb-card-edit" style="background: #334155; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">Edit</button>
          <button class="nb-card-copy" style="background: #2563eb; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">Copy</button>
          <button class="nb-card-delete" style="background: #ef4444; color: #fff; border: none; padding: 3px 8px; border-radius: 3px; font-size: 11px; cursor: pointer;">Delete</button>
        </div>
      </div>

      <div class="card-display-mode" style="font-family: monospace; font-size: 12px; color: #f1f5f9; white-space: pre-wrap;">${note.content}</div>

      <div class="card-edit-mode" style="display: none; flex-direction: column; gap: 8px;">
        <textarea class="edit-content" style="background: #1e293b; color: #fff; border: 1px solid #475569; padding: 6px; border-radius: 4px; font-family: monospace; font-size: 11px; height: 80px;">${note.content}</textarea>
        <div>
          <label style="font-size: 11px; font-weight: 600; color: #cbd5e1; display: block; margin-bottom: 4px;">Daily Review Sheet Category:</label>
          <div style="display: flex; gap: 12px; flex-wrap: wrap; font-size: 11px; color: #e2e8f0;">
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
              <input type="radio" name="nb-review-category-${note.id}" class="nb-review-category" value="" ${!note.reviewCategory ? 'checked' : ''}> None
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
              <input type="radio" name="nb-review-category-${note.id}" class="nb-review-category" value="schedule" ${note.reviewCategory === 'schedule' ? 'checked' : ''}> Schedule
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
              <input type="radio" name="nb-review-category-${note.id}" class="nb-review-category" value="reschedule" ${note.reviewCategory === 'reschedule' ? 'checked' : ''}> Reschedule
            </label>
            <label style="display: flex; align-items: center; gap: 4px; cursor: pointer;">
              <input type="radio" name="nb-review-category-${note.id}" class="nb-review-category" value="cancellation" ${note.reviewCategory === 'cancellation' ? 'checked' : ''}> Cancellation
            </label>
          </div>
        </div>
        <button class="nb-card-save" style="background: #10b981; color: white; border: none; padding: 4px; border-radius: 3px; font-size: 11px; cursor: pointer; font-weight: bold;">Save Changes</button>
      </div>
    </div>
  `).join('');
}

// ==========================================
// DAILY REVIEW SHEET (My Entries)
// ==========================================

const RS_CATEGORY_LABELS = {
  schedule: 'Schedule Appointments',
  reschedule: 'Rescheduled Appointment',
  cancellation: 'Cancellations'
};
const RS_CATEGORIES = ['schedule', 'reschedule', 'cancellation'];

function rsEscapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, ch => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[ch]));
}

// Builds the exact multi-line block that goes in one spreadsheet cell
function formatReviewEntryBlock(entry) {
  return `Name: ${entry.name}\nDOB: ${entry.dob}\nChart#: ${entry.chart}\nAgents Note: ${entry.agentNote || ''}\nReviewers Note: ${entry.reviewerNote || ''}`;
}

// Returns entries for one category, narrowed to the active date filter (if
// any). Entries saved before the date-filter feature existed have no
// dateAdded — they're always included rather than silently disappearing.
function getFilteredReviewEntries(category) {
  const all = appState.reviewSheet[category] || [];
  const fromVal = document.getElementById('rs-filter-from')?.value;
  const toVal = document.getElementById('rs-filter-to')?.value;

  if (!fromVal && !toVal) return all;

  const fromTime = fromVal ? new Date(`${fromVal}T00:00:00`).getTime() : null;
  const toTime = toVal ? new Date(`${toVal}T23:59:59`).getTime() : null;

  return all.filter(entry => {
    if (!entry.dateAdded) return true;
    const t = new Date(entry.dateAdded).getTime();
    if (fromTime !== null && t < fromTime) return false;
    if (toTime !== null && t > toTime) return false;
    return true;
  });
}

// Builds a real .xlsx file — one sheet per category, one row per entry,
// each row's single cell containing the full multi-line block. This
// sidesteps clipboard/paste-mode limitations entirely (see copyAsSpreadsheetRows
// below): a downloaded file always has correct real spreadsheet cells,
// regardless of how the browser or target app handles pasted data.
// Follows whatever date filter is currently active on the Daily Review
// Sheet tab; if no filter is set, exports everything.
function exportReviewSheetToExcel() {
  if (typeof XLSX === 'undefined') {
    alert('Excel export library failed to load (check your internet connection) — try again in a moment.');
    return;
  }

  const wb = XLSX.utils.book_new();

  RS_CATEGORIES.forEach(cat => {
    const entries = getFilteredReviewEntries(cat);
    const rows = entries.length
      ? entries.map(entry => [formatReviewEntryBlock(entry)])
      : [['No entries yet']];
    const ws = XLSX.utils.aoa_to_sheet(rows);
    ws['!cols'] = [{ wch: 45 }];
    XLSX.utils.book_append_sheet(wb, ws, RS_CATEGORY_LABELS[cat]);
  });

  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `Daily_Review_Sheet_${dateStr}.xlsx`);
}

// Copies text to the clipboard as BOTH plain text and an HTML table.
// Plain-text clipboard data has no concept of "this newline stays inside
// one cell" — Excel/Sheets just splits on every \n into a new row, no
// matter how the text is formatted (quotes included). Pasting an HTML
// <table> instead is the format spreadsheet apps actually respect: each
// <td> becomes one cell, and <br> inside a <td> becomes a line break
// WITHIN that cell instead of a new row.
async function copyAsSpreadsheetRows(rowsOfText) {
  const escapeForHtml = (str) => String(str)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const plainText = rowsOfText.join('\n');
  const html = `<table><tbody>${
    rowsOfText.map(row => `<tr><td>${escapeForHtml(row).replace(/\n/g, '<br>')}</td></tr>`).join('')
  }</tbody></table>`;

  try {
    if (window.ClipboardItem) {
      await navigator.clipboard.write([
        new ClipboardItem({
          'text/html': new Blob([html], { type: 'text/html' }),
          'text/plain': new Blob([plainText], { type: 'text/plain' })
        })
      ]);
      return;
    }
  } catch (err) {
    // Fall through to plain-text copy below if the rich clipboard write fails
  }
  await navigator.clipboard.writeText(plainText);
}

function renderReviewSheetUI() {
  const columnsEl = document.getElementById('rs-columns');
  if (!columnsEl) return;

  columnsEl.innerHTML = RS_CATEGORIES.map(cat => {
    const entries = getFilteredReviewEntries(cat);
    const totalCount = (appState.reviewSheet[cat] || []).length;
    const cards = entries.length === 0
      ? `<div class="rs-empty">No entries ${totalCount > 0 ? 'in this date range' : 'yet'}.</div>`
      : entries.map((entry, idx) => `
        <div class="rs-card" data-id="${entry.id}" data-category="${cat}">
          <div class="rs-card-header">
            <span class="rs-card-index">#${idx + 1}</span>
            <div class="rs-card-actions">
              <button type="button" class="btn btn-secondary rs-card-edit">Edit</button>
              <button type="button" class="btn btn-secondary rs-card-copy">Copy</button>
              <button type="button" class="btn rs-card-delete">Delete</button>
            </div>
          </div>
          <div class="rs-card-display">
            <div class="rs-card-body">${rsEscapeHtml(formatReviewEntryBlock(entry))}</div>
          </div>
          <div class="rs-card-edit-form" style="display: none;">
            <label class="rs-edit-label">Name</label>
            <input type="text" class="rs-edit-name" value="${rsEscapeHtml(entry.name)}">
            <label class="rs-edit-label">DOB</label>
            <input type="text" class="rs-edit-dob" value="${rsEscapeHtml(entry.dob)}">
            <label class="rs-edit-label">Chart#</label>
            <input type="text" class="rs-edit-chart" value="${rsEscapeHtml(entry.chart)}">
            <label class="rs-edit-label">Agents Note</label>
            <textarea class="rs-edit-agent-note">${rsEscapeHtml(entry.agentNote)}</textarea>
            <button type="button" class="btn btn-success rs-card-save">Save Changes</button>
          </div>
        </div>
      `).join('');

    return `
      <div class="rs-column">
        <div class="rs-column-header">
          <span class="rs-column-title">${RS_CATEGORY_LABELS[cat]}</span>
          <span class="rs-column-count">${entries.length}</span>
        </div>
        <button type="button" class="btn btn-primary rs-copy-all" data-category="${cat}" ${entries.length === 0 ? 'disabled' : ''}>Copy All</button>
        <div class="rs-entries">${cards}</div>
      </div>
    `;
  }).join('');
}

// Delegation Event Handler for Daily Review Sheet Operations
document.addEventListener('click', (e) => {
  if (e.target.id === 'rs-export-excel') {
    exportReviewSheetToExcel();
  }

  if (e.target.id === 'rs-filter-apply') {
    renderReviewSheetUI();
  }

  if (e.target.id === 'rs-filter-clear') {
    const fromInput = document.getElementById('rs-filter-from');
    const toInput = document.getElementById('rs-filter-to');
    if (fromInput) fromInput.value = '';
    if (toInput) toInput.value = '';
    renderReviewSheetUI();
  }

  if (e.target.id === 'rs-clear-all') {
    const totalEntries = RS_CATEGORIES.reduce((sum, cat) => sum + (appState.reviewSheet[cat]?.length || 0), 0);
    if (totalEntries === 0) return;
    if (!confirm('Clear ALL entries from the Daily Review Sheet? This cannot be undone.')) return;

    // Unlink any Note Bank entries pointing at what's about to be cleared
    const clearedIds = new Set();
    RS_CATEGORIES.forEach(cat => (appState.reviewSheet[cat] || []).forEach(entry => clearedIds.add(entry.id)));
    let noteBankChanged = false;
    appState.noteBank.forEach(note => {
      if (note.reviewEntryId && clearedIds.has(note.reviewEntryId)) {
        note.reviewCategory = '';
        note.reviewEntryId = null;
        noteBankChanged = true;
      }
    });
    if (noteBankChanged) {
      localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
      renderNoteBankUI();
    }

    RS_CATEGORIES.forEach(cat => { appState.reviewSheet[cat] = []; });
    saveReviewSheet();
    renderReviewSheetUI();
  }

  // Copy a single entry — still one row/cell, just using the same
  // HTML-table technique so a lone paste behaves identically to Copy All
  if (e.target.classList.contains('rs-card-copy')) {
    const card = e.target.closest('.rs-card');
    const cat = card.dataset.category;
    const entry = (appState.reviewSheet[cat] || []).find(item => item.id === card.dataset.id);
    if (entry) copyAsSpreadsheetRows([formatReviewEntryBlock(entry)]);
  }

  // Toggle Edit Mode
  if (e.target.classList.contains('rs-card-edit')) {
    const card = e.target.closest('.rs-card');
    const displayMode = card.querySelector('.rs-card-display');
    const editMode = card.querySelector('.rs-card-edit-form');
    const isEditing = editMode.style.display === 'block';

    displayMode.style.display = isEditing ? 'block' : 'none';
    editMode.style.display = isEditing ? 'none' : 'block';
    e.target.textContent = isEditing ? 'Edit' : 'Cancel';
  }

  // Save edited entry fields
  if (e.target.classList.contains('rs-card-save')) {
    const card = e.target.closest('.rs-card');
    const cat = card.dataset.category;
    const entry = (appState.reviewSheet[cat] || []).find(item => item.id === card.dataset.id);
    if (entry) {
      entry.name = card.querySelector('.rs-edit-name').value.trim();
      entry.dob = card.querySelector('.rs-edit-dob').value.trim();
      entry.chart = card.querySelector('.rs-edit-chart').value.trim();
      entry.agentNote = card.querySelector('.rs-edit-agent-note').value;
      saveReviewSheet();
    }
    renderReviewSheetUI();
  }

  // Delete a single entry
  if (e.target.classList.contains('rs-card-delete')) {
    const card = e.target.closest('.rs-card');
    const cat = card.dataset.category;
    const removedEntry = (appState.reviewSheet[cat] || []).find(item => item.id === card.dataset.id);
    appState.reviewSheet[cat] = (appState.reviewSheet[cat] || []).filter(item => item.id !== card.dataset.id);
    saveReviewSheet();

    // Keep the Note Bank in sync if this entry was linked back to a note
    if (removedEntry) {
      const linkedNote = appState.noteBank.find(n => n.reviewEntryId === removedEntry.id);
      if (linkedNote) {
        linkedNote.reviewCategory = '';
        linkedNote.reviewEntryId = null;
        localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
        renderNoteBankUI();
      }
    }

    renderReviewSheetUI();
  }

  // Copy all entries in a column, one spreadsheet row per entry
  // (respects the active date filter, same as Export to Excel)
  if (e.target.classList.contains('rs-copy-all')) {
    const cat = e.target.dataset.category;
    const entries = getFilteredReviewEntries(cat);
    if (entries.length === 0) return;
    copyAsSpreadsheetRows(entries.map(entry => formatReviewEntryBlock(entry)));

    const originalText = e.target.textContent;
    e.target.textContent = 'Copied!';
    setTimeout(() => { e.target.textContent = originalText; }, 1200);
  }
});

// ==========================================
// SHARED TEXT FORMATTING (used by TXT export + Copy All)
// ==========================================

function buildNoteBankText(notes) {
  let textContent = `=== KSF AGENT ASSISTANT - NOTE BANK EXPORT ===\n`;
  textContent += `Exported On: ${new Date().toLocaleString()}\n`;
  textContent += `Total Entries: ${notes.length}\n`;
  textContent += `==================================================\n\n`;

  textContent += notes.map(note => note.content).join('\n\n');

  return textContent;
}

// ==========================================
// EXPORT UTILITY FUNCTIONS
// ==========================================

function exportNotes(format = 'txt') {
  const notes = getFilteredNotes();

  if (notes.length === 0) {
    alert("No notes available to export.");
    return;
  }

  if (format === 'json') {
    exportNotesToJSON(notes);
  } else {
    exportNotesToTXT(notes);
  }
}

function exportNotesToTXT(notes) {
  triggerFileDownload(buildNoteBankText(notes), `NoteBank_Export_${getDateStamp()}.txt`, 'text/plain');
  logActivity("Exported Note Bank entries as .txt");
}

function exportNotesToJSON(notes) {
  const jsonString = JSON.stringify(notes, null, 2);
  triggerFileDownload(jsonString, `NoteBank_Backup_${getDateStamp()}.json`, 'application/json');
  logActivity("Exported Note Bank entries as .json backup");
}

function triggerFileDownload(content, filename, contentType) {
  const blob = new Blob([content], { type: contentType });
  const url = URL.createObjectURL(blob);
  const downloadAnchor = document.createElement('a');

  downloadAnchor.href = url;
  downloadAnchor.download = filename;
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();

  document.body.removeChild(downloadAnchor);
  URL.revokeObjectURL(url);
}

function getDateStamp() {
  return new Date().toISOString().split('T')[0];
}

// ==========================================
// PROVIDER DIRECTORY
// ==========================================

function initProviderDirectory(container) {
  if (!container) return;

  const gridView = container.querySelector('#pd-grid-view');
  const detailView = container.querySelector('#pd-detail-view');
  const gridEl = container.querySelector('#pd-grid');
  const specialtyFilter = container.querySelector('#pd-specialty-filter');
  const addBtn = container.querySelector('#pd-add-provider');
  const countEl = container.querySelector('#pd-results-count');

  let selectedId = null;   // id of provider being viewed/edited in detail view, or '__new__'
  let editingId = null;    // id currently in edit mode within the detail view

  function saveProviders() {
    localStorage.setItem('ksf_providers', JSON.stringify(appState.providers));
  }

  function escapeHtml(str) {
    return String(str ?? '').replace(/[&<>"']/g, ch => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    }[ch]));
  }

  function listOrDash(items) {
    if (!items || items.length === 0) return '<span class="pgc-cov-empty">None listed</span>';
    return escapeHtml(items.join(', '));
  }

  function tagList(items, variant) {
    if (!items || items.length === 0) return '<span style="color:#64748b; font-size:12px; font-style:italic;">None listed</span>';
    return `<div class="provider-tag-list">${items.map(t => `<span class="provider-tag ${variant}">${escapeHtml(t)}</span>`).join('')}</div>`;
  }

  function populateSpecialtyFilter() {
    if (!specialtyFilter) return;
    const currentValue = specialtyFilter.value;
    const titles = [...new Set(appState.providers.map(p => p.title).filter(Boolean))].sort();
    specialtyFilter.innerHTML = '<option value="">All Specialties</option>' +
      titles.map(t => `<option value="${escapeHtml(t)}">${escapeHtml(t)}</option>`).join('');
    if (titles.includes(currentValue)) specialtyFilter.value = currentValue;
  }

  function getFilteredProviders() {
    const specialty = specialtyFilter?.value || '';
    return appState.providers.filter(p => !specialty || p.title === specialty);
  }

  // ---------- GRID VIEW ----------

  function renderGrid() {
    populateSpecialtyFilter();
    const filtered = getFilteredProviders();

    if (countEl) countEl.textContent = `${filtered.length} provider${filtered.length === 1 ? '' : 's'}`;

    const cards = filtered.map(p => `
      <div class="provider-grid-card" data-id="${p.id}">
        <div class="pgc-header">
          <div class="provider-grid-name">${escapeHtml(p.name)}</div>
          <div class="provider-grid-title">${escapeHtml(p.title)}</div>
          <div class="pgc-npi">NPI: ${escapeHtml(p.npi) || '—'}</div>
        </div>
        <div class="pgc-divider"></div>
        <div class="pgc-facts">
          <div class="pgc-fact"><span class="pgc-fact-label">MA</span><span class="pgc-fact-value">${escapeHtml(p.ma) || '—'}</span></div>
          <div class="pgc-fact"><span class="pgc-fact-label">Workman's Comp</span><span class="pgc-fact-value">${escapeHtml(p.workmansComp) || '—'}</span></div>
          <div class="pgc-fact"><span class="pgc-fact-label">Self Pay</span><span class="pgc-fact-value">${escapeHtml(p.selfPay) || '—'}</span></div>
          <div class="pgc-fact"><span class="pgc-fact-label">Staff Login</span><span class="pgc-fact-value">${escapeHtml(p.staffLogin) || '—'}</span></div>
        </div>
        <div class="pgc-divider"></div>
        <div class="pgc-coverage">
          <div class="pgc-cov-label">Body parts covered:</div>
          <div class="pgc-cov-text">${listOrDash(p.bodyPartsCovered)}</div>
          <div class="pgc-cov-label">Exclusions/restrictions:</div>
          <div class="pgc-cov-text">${listOrDash(p.bodyPartsExcluded)}</div>
        </div>
      </div>
    `).join('');

    const addCard = `
      <div class="provider-grid-card provider-add-card" id="pd-add-card">+</div>
    `;

    gridEl.innerHTML = cards + addCard;
  }

  // ---------- DETAIL VIEW ----------

  function renderReadOnlyDetail(p) {
    return `
      <button type="button" class="provider-back-btn" id="pd-back-btn">&larr; Back to Directory</button>
      <div class="provider-detail-card">
        <div class="provider-name">${escapeHtml(p.name)}</div>
        <div class="provider-specialty-title">${escapeHtml(p.title)}</div>

        <div class="provider-quick-facts">
          <div><strong>MA:</strong> ${escapeHtml(p.ma) || '—'}</div>
          <div><strong>NPI:</strong> ${escapeHtml(p.npi) || '—'}</div>
          <div><strong>Workman's Comp:</strong> ${escapeHtml(p.workmansComp) || '—'}</div>
          <div><strong>Self Pay:</strong> ${escapeHtml(p.selfPay) || '—'}</div>
          <div style="grid-column: 1 / -1;"><strong>Staff Login:</strong> ${escapeHtml(p.staffLogin) || '—'}</div>
        </div>

        <div class="provider-section-label" style="margin-top:0;">Body Parts Covered</div>
        ${tagList(p.bodyPartsCovered, 'covered')}
        <div class="provider-section-label">Exclusions / Restrictions</div>
        ${tagList(p.bodyPartsExcluded, 'excluded')}

        <div class="provider-section-label">Clinical Rules</div>
        <div class="provider-rules-box">
          <ul>${(p.clinicalRules || []).map(r => `<li>${escapeHtml(r)}</li>`).join('')}</ul>
        </div>

        <div class="provider-section-label">Specialties & Procedures</div>
        ${tagList(p.specialtiesProcedures, '')}

        <div class="provider-card-actions">
          <button type="button" class="btn btn-secondary" id="pd-edit-btn" data-id="${p.id}">Edit</button>
          <button type="button" class="btn btn-secondary" id="pd-delete-btn" data-id="${p.id}" style="background:#7f1d1d;">Delete</button>
        </div>
      </div>
    `;
  }

  function renderEditDetail(p) {
    const isNew = p.__isNew;
    return `
      <button type="button" class="provider-back-btn" id="pd-back-btn">&larr; ${isNew ? 'Cancel & Back to Directory' : 'Cancel & Back to Directory'}</button>
      <div class="provider-detail-card">
        <div class="form-group"><label>Name</label>
          <input type="text" class="wiz-input" id="pd-edit-name" value="${escapeHtml(p.name)}" placeholder="e.g. Dr. Jane Smith"></div>
        <div class="form-group" style="margin-top:8px;"><label>Title / Specialty</label>
          <input type="text" class="wiz-input" id="pd-edit-title" value="${escapeHtml(p.title)}" placeholder="e.g. General Orthopedics"></div>
        <div class="form-group" style="margin-top:8px;"><label>NPI</label>
          <input type="text" class="wiz-input" id="pd-edit-npi" value="${escapeHtml(p.npi)}"></div>
        <div class="form-group" style="margin-top:8px;"><label>Medical Assistant (MA)</label>
          <input type="text" class="wiz-input" id="pd-edit-ma" value="${escapeHtml(p.ma)}"></div>
        <div class="form-group" style="margin-top:8px;"><label>Patient Case Clinical Questions (staff login)</label>
          <input type="text" class="wiz-input" id="pd-edit-staff" value="${escapeHtml(p.staffLogin)}"></div>
        <div class="form-group" style="margin-top:8px;"><label>Workman's Comp</label>
          <input type="text" class="wiz-input" id="pd-edit-wc" value="${escapeHtml(p.workmansComp)}" placeholder="Yes / No / Conditional"></div>
        <div class="form-group" style="margin-top:8px;"><label>Self Pay Policy</label>
          <input type="text" class="wiz-input" id="pd-edit-selfpay" value="${escapeHtml(p.selfPay)}" placeholder="Yes / No / Upfront Required"></div>
        <div class="form-group" style="margin-top:8px;"><label>Body Parts Covered (comma-separated)</label>
          <input type="text" class="wiz-input" id="pd-edit-covered" value="${escapeHtml((p.bodyPartsCovered || []).join(', '))}"></div>
        <div class="form-group" style="margin-top:8px;"><label>Body Parts Excluded / Restricted (comma-separated)</label>
          <input type="text" class="wiz-input" id="pd-edit-excluded" value="${escapeHtml((p.bodyPartsExcluded || []).join(', '))}"></div>
        <div class="form-group" style="margin-top:8px;"><label>Clinical Rules (one per line)</label>
          <textarea class="wiz-input" id="pd-edit-rules" style="height:90px;">${escapeHtml((p.clinicalRules || []).join('\n'))}</textarea></div>
        <div class="form-group" style="margin-top:8px;"><label>Specialties & Procedures (one per line)</label>
          <textarea class="wiz-input" id="pd-edit-specialties" style="height:90px;">${escapeHtml((p.specialtiesProcedures || []).join('\n'))}</textarea></div>
        <div class="provider-card-actions">
          <button type="button" class="btn btn-success" id="pd-save-btn" data-id="${p.id}">${isNew ? 'Add Provider' : 'Save Changes'}</button>
        </div>
      </div>
    `;
  }

  function renderDetail() {
    let provider;
    if (selectedId === '__new__') {
      provider = { id: '__new__', __isNew: true, name: '', title: '', npi: '', ma: '', staffLogin: '', workmansComp: '', selfPay: '', bodyPartsCovered: [], bodyPartsExcluded: [], clinicalRules: [], specialtiesProcedures: [] };
    } else {
      provider = appState.providers.find(p => p.id === selectedId);
    }
    if (!provider) { showGrid(); return; }

    detailView.innerHTML = (editingId === provider.id) ? renderEditDetail(provider) : renderReadOnlyDetail(provider);
  }

  function readFormValues() {
    const splitLines = (val) => val.split('\n').map(s => s.trim()).filter(Boolean);
    const splitCommas = (val) => val.split(',').map(s => s.trim()).filter(Boolean);
    return {
      name: detailView.querySelector('#pd-edit-name')?.value.trim() || 'Unnamed Provider',
      title: detailView.querySelector('#pd-edit-title')?.value.trim() || '',
      npi: detailView.querySelector('#pd-edit-npi')?.value.trim() || '',
      ma: detailView.querySelector('#pd-edit-ma')?.value.trim() || '',
      staffLogin: detailView.querySelector('#pd-edit-staff')?.value.trim() || '',
      workmansComp: detailView.querySelector('#pd-edit-wc')?.value.trim() || '',
      selfPay: detailView.querySelector('#pd-edit-selfpay')?.value.trim() || '',
      bodyPartsCovered: splitCommas(detailView.querySelector('#pd-edit-covered')?.value || ''),
      bodyPartsExcluded: splitCommas(detailView.querySelector('#pd-edit-excluded')?.value || ''),
      clinicalRules: splitLines(detailView.querySelector('#pd-edit-rules')?.value || ''),
      specialtiesProcedures: splitLines(detailView.querySelector('#pd-edit-specialties')?.value || '')
    };
  }

  // ---------- VIEW SWITCHING ----------

  function showGrid() {
    selectedId = null;
    editingId = null;
    gridView.style.display = 'block';
    detailView.style.display = 'none';
    renderGrid();
  }

  function showDetail(id, startInEdit) {
    selectedId = id;
    editingId = startInEdit ? id : null;
    gridView.style.display = 'none';
    detailView.style.display = 'block';
    renderDetail();
  }

  // ---------- EVENTS ----------

  gridEl.addEventListener('click', (e) => {
    const addCard = e.target.closest('#pd-add-card');
    if (addCard) {
      showDetail('__new__', true);
      return;
    }
    const card = e.target.closest('.provider-grid-card');
    if (card) {
      const id = card.getAttribute('data-id');
      if (id) showDetail(id, false);
    }
  });

  detailView.addEventListener('click', (e) => {
    if (e.target.closest('#pd-back-btn')) {
      showGrid();
      return;
    }

    const editBtn = e.target.closest('#pd-edit-btn');
    if (editBtn) {
      editingId = editBtn.getAttribute('data-id');
      renderDetail();
      return;
    }

    const deleteBtn = e.target.closest('#pd-delete-btn');
    if (deleteBtn) {
      const id = deleteBtn.getAttribute('data-id');
      const provider = appState.providers.find(p => p.id === id);
      if (provider && confirm(`Remove ${provider.name} from the directory?`)) {
        appState.providers = appState.providers.filter(p => p.id !== id);
        saveProviders();
        showGrid();
      }
      return;
    }

    const saveBtn = e.target.closest('#pd-save-btn');
    if (saveBtn) {
      const id = saveBtn.getAttribute('data-id');
      const values = readFormValues();

      if (id === '__new__') {
        const newId = 'dr-' + Date.now();
        appState.providers.push({ id: newId, ...values });
        saveProviders();
        showGrid();
      } else {
        const idx = appState.providers.findIndex(p => p.id === id);
        if (idx !== -1) appState.providers[idx] = { id, ...values };
        saveProviders();
        showDetail(id, false);
      }
      return;
    }
  });

  specialtyFilter?.addEventListener('change', renderGrid);
  addBtn?.addEventListener('click', () => showDetail('__new__', true));

  showGrid();
}

/* --- LOCATIONS & CONTACTS TOOL --- */
function initLocationsContacts(container) {
  function showLcToast(message) {
    let toast = container.querySelector('.lc-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'lc-toast';
      container.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => toast.classList.remove('show'), 2000);
  }

  function copyLcText(text) {
    const done = () => showLcToast('Copied to clipboard!');
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => fallbackCopy(text, done));
    } else {
      fallbackCopy(text, done);
    }
  }

  function fallbackCopy(text, done) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    try { document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(textarea);
    done();
  }

  container.querySelectorAll('.lc-copy-btn').forEach(btn => {
    btn.addEventListener('click', () => copyLcText(btn.dataset.copy || ''));
  });

  const extraTitle = container.querySelector('[data-toggle-extra]');
  const extraContent = container.querySelector('.lc-extra-content');
  const toggleIcon = container.querySelector('.lc-toggle-icon');
  if (extraTitle && extraContent) {
    extraTitle.addEventListener('click', () => {
      const isHidden = extraContent.style.display === 'none';
      extraContent.style.display = isHidden ? 'grid' : 'none';
      if (toggleIcon) toggleIcon.textContent = isHidden ? '▲' : '▼';
    });
  }
}

/* --- SETTINGS TOOL --- */
function initSettings(container) {
  // Theme controls
  const themeButtons = container.querySelectorAll('#settings-theme-group .settings-toggle-btn');
  function syncThemeButtons() {
    themeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === appState.theme);
    });
  }
  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleTheme(btn.dataset.theme);
      syncThemeButtons();
    });
  });
  syncThemeButtons();

  // Font size controls
  const fontButtons = container.querySelectorAll('#settings-font-group .settings-toggle-btn');
  const currentFontSize = localStorage.getItem('ksf_font_size') || 'medium';
  function syncFontButtons(size) {
    fontButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.font === size);
    });
  }
  fontButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const size = btn.dataset.font;
      document.documentElement.classList.remove('font-small', 'font-medium', 'font-large');
      document.documentElement.classList.add(`font-${size}`);
      localStorage.setItem('ksf_font_size', size);
      logActivity(`Changed text size to ${size}`);
      syncFontButtons(size);
    });
  });
  syncFontButtons(currentFontSize);

  // Agent Name/ID (shared with EOD Report tab)
  const agentIdField = container.querySelector('#settings-agent-id');
  if (agentIdField) {
    agentIdField.value = localStorage.getItem('ksf_agent_id') || '';
    agentIdField.addEventListener('input', () => {
      localStorage.setItem('ksf_agent_id', agentIdField.value.trim());
      const eodAgentField = document.getElementById('agentIdInput');
      if (eodAgentField) eodAgentField.value = agentIdField.value.trim();
    });
  }

  // Export activity log
  const exportBtn = container.querySelector('#settings-export-log');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      if (appState.activityLogs.length === 0) {
        alert('No activity logged yet.');
        return;
      }
      let textContent = `=== KSF AGENT ASSISTANT - ACTIVITY LOG EXPORT ===\n`;
      textContent += `Exported On: ${new Date().toLocaleString()}\n`;
      textContent += `Total Entries: ${appState.activityLogs.length}\n`;
      textContent += `==================================================\n\n`;
      textContent += appState.activityLogs
        .slice()
        .reverse()
        .map(log => `[${log.timestamp}] ${log.action}`)
        .join('\n');

      triggerFileDownload(textContent, `ActivityLog_Export_${getDateStamp()}.txt`, 'text/plain');
      logActivity('Exported activity log as .txt');
      renderSettingsActivityLog();
    });
  }

  // Clear activity log
  const clearLogsBtn = container.querySelector('#settings-clear-logs');
  if (clearLogsBtn) {
    clearLogsBtn.addEventListener('click', () => {
      if (appState.activityLogs.length === 0) return;
      if (confirm('Clear all activity log entries? This cannot be undone.')) {
        appState.activityLogs = [];
        localStorage.setItem('ksf_activity_logs', JSON.stringify(appState.activityLogs));
        logActivity('Cleared activity log');
        renderSettingsActivityLog();
      }
    });
  }

  // Clear note bank
  const clearNotesBtn = container.querySelector('#settings-clear-notebank');
  if (clearNotesBtn) {
    clearNotesBtn.addEventListener('click', () => {
      if (appState.noteBank.length === 0) {
        alert('Note Bank is already empty.');
        return;
      }
      if (confirm('Clear all Note Bank entries? This cannot be undone.')) {
        appState.noteBank = [];
        localStorage.setItem('ksf_note_bank', JSON.stringify(appState.noteBank));
        logActivity('Cleared Note Bank from Settings');
        renderNoteBankUI();
        renderSettingsActivityLog();
      }
    });
  }

  renderSettingsActivityLog();
}

function renderSettingsActivityLog() {
  const listEl = document.getElementById('settings-log-list');
  const countEl = document.getElementById('settings-log-count');
  if (!listEl) return;

  const logs = appState.activityLogs.slice().reverse();

  if (countEl) countEl.textContent = `${appState.activityLogs.length} ${appState.activityLogs.length === 1 ? 'entry' : 'entries'}`;

  if (logs.length === 0) {
    listEl.innerHTML = '<div class="settings-log-empty">No activity logged yet.</div>';
    return;
  }

  listEl.innerHTML = logs.map(log => `
    <div class="settings-log-entry">
      <span class="settings-log-time">${log.timestamp}</span>
      <span class="settings-log-action">${log.action}</span>
    </div>
  `).join('');
}
