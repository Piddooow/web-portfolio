// ==========================================================================
// GitHub Activity & Real-Time Contribution Calendar Table Component
// Clean Single Source of Truth for @Piddooow
// ==========================================================================

import { profileData } from '../data.js';

export function renderGitHubActivity() {
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
          <span style="font-weight: 500; font-size: 0.88rem;" id="github-total-contributions">
            8 contributions in the last year
          </span>
          <div style="display: flex; align-items: center; gap: 0.4rem; font-family: var(--font-mono); font-size: 0.7rem; color: var(--text-muted);">
            <span class="beacon-dot" style="width: 0.4rem; height: 0.4rem;"></span>
            <span>Live Sync</span>
          </div>
        </div>

        <div class="github-cal-overflow">
          <!-- Months Row -->
          <div class="github-cal-months">
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
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

            <!-- 52-Week Grid Columns -->
            <div class="github-cal-weeks" id="github-weeks-container">
              <!-- Dynamically populated / Fallback pre-rendered -->
            </div>
          </div>
        </div>

        <!-- Calendar Footer -->
        <div class="github-cal-footer">
          <a href="https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/managing-contribution-settings-on-your-profile/why-are-my-contributions-not-showing-up-on-my-profile" target="_blank" rel="noopener noreferrer" style="color: var(--text-muted); text-decoration: underline; text-underline-offset: 2px;">
            Learn how we count contributions
          </a>

          <div style="display: flex; align-items: center; gap: 0.35rem;">
            <span>Less</span>
            <span class="github-cal-cell" style="cursor: default;"></span>
            <span class="github-cal-cell" data-level="1" style="cursor: default;"></span>
            <span class="github-cal-cell" data-level="2" style="cursor: default;"></span>
            <span class="github-cal-cell" data-level="3" style="cursor: default;"></span>
            <span class="github-cal-cell" data-level="4" style="cursor: default;"></span>
            <span>More</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initGitHubActivityEvents() {
  const weeksContainer = document.getElementById('github-weeks-container');
  const totalCountEl = document.getElementById('github-total-contributions');
  if (!weeksContainer) return;

  function renderCalendarGrid(daysArray) {
    weeksContainer.innerHTML = '';
    const columnsCount = Math.ceil(daysArray.length / 7);
    for (let c = 0; c < columnsCount; c++) {
      const colDiv = document.createElement('div');
      colDiv.className = 'github-cal-col';

      for (let r = 0; r < 7; r++) {
        const idx = c * 7 + r;
        if (idx < daysArray.length) {
          const day = daysArray[idx];
          const cell = document.createElement('div');
          cell.className = 'github-cal-cell';
          if (day.level > 0) {
            cell.setAttribute('data-level', day.level.toString());
          }
          cell.title = `${day.count || 0} contributions on ${day.date}`;
          colDiv.appendChild(cell);
        }
      }
      weeksContainer.appendChild(colDiv);
    }
  }

  function generateFallbackDays() {
    const days = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      
      let count = 0;
      let level = 0;

      if (dateStr === '2026-07-28' || dateStr.endsWith('07-28')) {
        count = 1;
        level = 4;
      } else if (dateStr === '2026-08-10' || dateStr.endsWith('08-10')) {
        count = 7;
        level = 4;
      }

      days.push({ date: dateStr, count, level });
    }
    return days;
  }

  renderCalendarGrid(generateFallbackDays());

  // Fetch live API for real-time update
  fetch(`https://github-contributions-api.jogruber.de/v4/${profileData.githubUsername}?y=last`)
    .then((res) => res.json())
    .then((data) => {
      if (data && data.contributions && data.contributions.length > 0) {
        if (totalCountEl && data.total && typeof data.total.lastYear !== 'undefined') {
          totalCountEl.textContent = `${data.total.lastYear} contributions in the last year`;
        }
        renderCalendarGrid(data.contributions);
      }
    })
    .catch((err) => {
      console.warn('Calendar API fallback in effect:', err);
    });
}
