// ==========================================================================
// GitHub Graph Component — 52-Week Activity Heatmap & Telemetry
// ==========================================================================

export function renderGitHubGraph() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const monthsHtml = months
    .map((m) => `<span style="font-family: var(--font-mono); font-size: 0.65rem; color: var(--text-muted);">${m}</span>`)
    .join('');

  // Generate 52 weeks x 7 days = 364 cells with realistic weighted intensity
  const totalDays = 52 * 7;
  let totalContributions = 0;
  let cellsHtml = '';

  for (let i = 0; i < totalDays; i++) {
    // Generate pseudo-random distribution biased toward active coding streaks
    const rand = Math.random();
    let level = 0;
    let count = 0;

    if (rand > 0.85) {
      level = 4;
      count = Math.floor(Math.random() * 6) + 10;
    } else if (rand > 0.65) {
      level = 3;
      count = Math.floor(Math.random() * 4) + 6;
    } else if (rand > 0.45) {
      level = 2;
      count = Math.floor(Math.random() * 3) + 3;
    } else if (rand > 0.25) {
      level = 1;
      count = Math.floor(Math.random() * 2) + 1;
    } else {
      level = 0;
      count = 0;
    }

    totalContributions += count;
    cellsHtml += `<div class="github-cell gh-lvl-${level}" data-count="${count}" data-day="${i}" title="${count} commits"></div>`;
  }

  return `
    <section class="github-section" id="activity">
      <div class="section-header">
        <h2 class="section-title">Latest Activity</h2>
        <span class="pill-badge" style="font-family: var(--font-mono); font-size: 0.7rem;">
          ${totalContributions.toLocaleString()} Commits in 2025
        </span>
      </div>

      <div class="github-card">
        <div class="github-header">
          <div class="github-title">
            <i class="fa-brands fa-github"></i>
            <span>GitHub Contribution Heatmap</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.35rem; font-size: 0.7rem; color: var(--text-muted);">
            <span>Less</span>
            <div style="display: flex; gap: 2px;">
              <span class="github-cell gh-lvl-0" style="width: 8px; height: 8px;"></span>
              <span class="github-cell gh-lvl-1" style="width: 8px; height: 8px;"></span>
              <span class="github-cell gh-lvl-2" style="width: 8px; height: 8px;"></span>
              <span class="github-cell gh-lvl-3" style="width: 8px; height: 8px;"></span>
              <span class="github-cell gh-lvl-4" style="width: 8px; height: 8px;"></span>
            </div>
            <span>More</span>
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; margin-bottom: 0.35rem; padding-left: 0.25rem;">
          ${monthsHtml}
        </div>

        <div class="github-grid-scroll">
          <div class="github-grid">
            ${cellsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
