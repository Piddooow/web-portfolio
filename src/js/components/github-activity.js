// ==========================================================================
// GitHub Activity & Real-Time Contribution Calendar Table Component
// Clean Single Source of Truth for @Piddooow — Starts January of Current Year
// Fully Responsive on Desktop Web & Mobile Phones
// ==========================================================================

import { profileData } from '../data.js';

// Month names list
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Baseline active days for David Antono (@Piddooow)
const KNOWN_2026_CONTRIBUTIONS = {
  '2026-07-28': { count: 1, level: 1 },
  '2026-08-10': { count: 7, level: 4 },
  '2026-08-22': { count: 2, level: 1 },
  '2026-08-23': { count: 8, level: 4 },
  '2026-08-24': { count: 2, level: 1 },
  '2026-08-25': { count: 4, level: 2 },
  '2026-08-26': { count: 1, level: 1 },
  '2026-08-28': { count: 1, level: 1 }
};

// In-memory cache for live contributions
let cachedContributionsData = null;
let isFetchingContributions = false;

/**
 * Format tooltip date string to readable format e.g. "Sunday, Aug 23, 2026"
 */
function formatTooltipDate(dateStr) {
  if (!dateStr) return '';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const y = parseInt(parts[0], 10);
  const m = parseInt(parts[1], 10) - 1;
  const d = parseInt(parts[2], 10);
  const dateObj = new Date(y, m, d);
  const dayName = DAY_NAMES[dateObj.getDay()] || '';
  const monthName = MONTH_NAMES[m] || '';
  return `${dayName}, ${monthName} ${d}, ${y}`;
}

/**
 * Generate full 365/366 days array starting January 1st in a timezone-safe manner
 */
function generateYearDaysArray(targetYear, contributionsMap = {}) {
  const days = [];
  for (let m = 0; m < 12; m++) {
    const daysInMonth = new Date(targetYear, m + 1, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      const mm = String(m + 1).padStart(2, '0');
      const dd = String(day).padStart(2, '0');
      const dateStr = `${targetYear}-${mm}-${dd}`;
      const record = contributionsMap[dateStr] || { count: 0, level: 0 };
      days.push({
        date: dateStr,
        count: record.count || 0,
        level: record.level || 0
      });
    }
  }
  return days;
}

/**
 * Build calendar grid structure and month column alignments
 */
function buildCalendarModel(daysArray, targetYear) {
  const startDayOfWeek = new Date(targetYear, 0, 1).getDay(); // 0 is Sunday

  const gridDays = [];
  // Pad leading days of the first week before Jan 1st
  for (let p = 0; p < startDayOfWeek; p++) {
    gridDays.push({ isPad: true, level: 0, count: 0, date: '' });
  }

  daysArray.forEach((d) => {
    gridDays.push({ ...d, isPad: false });
  });

  // Pad trailing days so every column in the 53-week grid has exactly 7 rows (88px uniform height)
  while (gridDays.length % 7 !== 0) {
    gridDays.push({ isPad: true, level: 0, count: 0, date: '' });
  }

  const columnsCount = Math.ceil(gridDays.length / 7);
  const monthHeaders = [];
  let lastMonth = -1;

  for (let c = 0; c < columnsCount; c++) {
    for (let r = 0; r < 7; r++) {
      const idx = c * 7 + r;
      if (idx < gridDays.length && !gridDays[idx].isPad) {
        const d = gridDays[idx];
        const parts = d.date.split('-');
        if (parts.length === 3) {
          const monthIdx = parseInt(parts[1], 10) - 1;
          if (monthIdx !== lastMonth) {
            monthHeaders.push({ monthIdx, colIndex: c });
            lastMonth = monthIdx;
          }
        }
      }
    }
  }

  return { gridDays, columnsCount, monthHeaders };
}

/**
 * Generate HTML string for month headers aligned above columns
 */
function renderMonthHeadersHtml(monthHeaders) {
  return monthHeaders
    .map((m) => `<span style="grid-column-start: ${m.colIndex + 1};">${MONTH_NAMES[m.monthIdx]}</span>`)
    .join('');
}

/**
 * Generate HTML string for week columns and day cells
 */
function renderWeeksHtml(gridDays, columnsCount) {
  let html = '';
  for (let c = 0; c < columnsCount; c++) {
    html += '<div class="github-cal-col">';
    for (let r = 0; r < 7; r++) {
      const idx = c * 7 + r;
      if (idx < gridDays.length) {
        const day = gridDays[idx];
        if (day.isPad) {
          html += '<div class="github-cal-cell" style="opacity: 0; pointer-events: none;"></div>';
        } else {
          const levelAttr = day.level > 0 ? ` data-level="${day.level}"` : '';
          const formattedDate = formatTooltipDate(day.date);
          const titleText = day.count === 0
            ? `No contributions on ${formattedDate}`
            : `${day.count} contribution${day.count === 1 ? '' : 's'} on ${formattedDate}`;
          html += `<div class="github-cal-cell"${levelAttr} title="${titleText}" data-date="${day.date}"></div>`;
        }
      } else {
        html += '<div class="github-cal-cell" style="opacity: 0; pointer-events: none;"></div>';
      }
    }
    html += '</div>';
  }
  return html;
}

export function renderGitHubActivity() {
  const currentYear = new Date().getFullYear();
  const baselineDays = generateYearDaysArray(currentYear, KNOWN_2026_CONTRIBUTIONS);
  const { gridDays, columnsCount, monthHeaders } = buildCalendarModel(baselineDays, currentYear);
  const totalContributions = baselineDays.reduce((acc, d) => acc + d.count, 0);

  return `
    <section class="github-activity-section" id="github-activity" style="margin-top: 1.5rem;">
      <div class="section-header">
        <div>
          <h2 class="section-title">GitHub Activity</h2>
          <p style="font-size: 0.875rem; color: var(--text-secondary); margin-top: 0.25rem;">
            Real-time contribution calendar for <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" style="color: var(--text-primary); text-decoration: underline; font-weight: 500;">@${profileData.githubUsername}</a>.
          </p>
        </div>

        <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="section-link" style="gap: 0.4rem;">
          <span>View Profile</span>
          <svg class="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </a>
      </div>

      <!-- Real-Time GitHub Contribution Calendar Table Box -->
      <div class="github-calendar-box">
        <div class="github-cal-header">
          <span class="github-cal-title" id="github-total-contributions">
            ${totalContributions} contributions in ${currentYear}
          </span>
          <div class="github-cal-live-badge">
            <span class="beacon-dot"></span>
            <span>Live Sync</span>
          </div>
        </div>

        <div class="github-cal-overflow">
          <div class="github-cal-inner-wrapper">
            <!-- Months Row Starting January -->
            <div class="github-cal-months" id="github-months-container">
              ${renderMonthHeadersHtml(monthHeaders)}
            </div>

            <!-- Days & Grid Row -->
            <div class="github-cal-grid-body">
              <div class="github-cal-days-label">
                <span></span>
                <span>Mon</span>
                <span></span>
                <span>Wed</span>
                <span></span>
                <span>Fri</span>
                <span></span>
              </div>

              <!-- Week Columns starting from January 1st -->
              <div class="github-cal-weeks" id="github-weeks-container">
                ${renderWeeksHtml(gridDays, columnsCount)}
              </div>
            </div>
          </div>
        </div>

        <!-- Calendar Footer -->
        <div class="github-cal-footer">
          <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile" target="_blank" rel="noopener noreferrer" class="github-cal-learn-link">
            Learn how we count contributions
          </a>

          <div class="github-cal-legend">
            <span>Less</span>
            <span class="github-cal-cell"></span>
            <span class="github-cal-cell" data-level="1"></span>
            <span class="github-cal-cell" data-level="2"></span>
            <span class="github-cal-cell" data-level="3"></span>
            <span class="github-cal-cell" data-level="4"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initGitHubActivityEvents() {
  const weeksContainer = document.getElementById('github-weeks-container');
  const monthsContainer = document.getElementById('github-months-container');
  const totalCountEl = document.getElementById('github-total-contributions');
  const overflowEl = document.querySelector('.github-cal-overflow');
  if (!weeksContainer) return;

  const currentYear = new Date().getFullYear();

  function applyContributions(contributions, totalCount) {
    if (!weeksContainer || !weeksContainer.isConnected) return;

    if (totalCountEl && typeof totalCount !== 'undefined') {
      totalCountEl.textContent = `${totalCount} contributions in ${currentYear}`;
    }

    const map = {};
    contributions.forEach((c) => {
      if (c.date) {
        map[c.date] = { count: c.count || 0, level: c.level || 0 };
      }
    });

    const daysArray = generateYearDaysArray(currentYear, map);
    const { gridDays, columnsCount, monthHeaders } = buildCalendarModel(daysArray, currentYear);

    if (monthsContainer && monthsContainer.isConnected) {
      monthsContainer.innerHTML = renderMonthHeadersHtml(monthHeaders);
    }
    weeksContainer.innerHTML = renderWeeksHtml(gridDays, columnsCount);
  }

  // If already in memory cache, apply immediately
  if (cachedContributionsData) {
    applyContributions(cachedContributionsData.contributions, cachedContributionsData.total);
    return;
  }

  if (isFetchingContributions) return;
  isFetchingContributions = true;

  fetch(`https://github-contributions-api.jogruber.de/v4/${profileData.githubUsername}?y=${currentYear}`)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((data) => {
      isFetchingContributions = false;
      if (data && data.contributions && data.contributions.length > 0) {
        const yearContributions = data.contributions.filter((c) => c.date && c.date.startsWith(String(currentYear)));
        const total = (data.total && typeof data.total[currentYear] !== 'undefined')
          ? data.total[currentYear]
          : yearContributions.reduce((acc, c) => acc + (c.count || 0), 0);

        cachedContributionsData = {
          contributions: yearContributions,
          total
        };

        applyContributions(yearContributions, total);
      }
    })
    .catch((err) => {
      isFetchingContributions = false;
      console.warn('GitHub contributions live sync note:', err.message || err);
    });
}
