// ==========================================================================
// About Component — Academic Background & Profile Summary (from CV)
// ==========================================================================

import { profileData, educationData, languageData } from '../data.js';

export function renderAbout() {
  const bioParagraphsHtml = profileData.aboutBio
    .map((p) => `<p style="font-size: 0.95rem; line-height: 1.75; color: var(--text-secondary); text-align: left;">${p}</p>`)
    .join('');

  const languagesHtml = languageData
    .map(
      (l) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.4rem 0; border-bottom: 1px dashed var(--border-dashed); font-size: 0.84rem;">
        <span style="font-weight: 500; color: var(--text-primary);">${l.name}</span>
        <span style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted);">${l.level}</span>
      </div>
    `
    )
    .join('');

  return `
    <section class="about-section" id="about">
      <div class="section-header">
        <h2 class="section-title">About & Background</h2>
        <span class="eyebrow-mono" style="font-size: 0.65rem;">${profileData.location}</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 1.75rem;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          ${bioParagraphsHtml}
        </div>

        <!-- Academic & Education Card -->
        <div class="card-spotlight" style="padding: 1.5rem; display: flex; flex-direction: column; gap: 0.85rem;">
          <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 0.5rem;">
            <div>
              <span class="eyebrow-mono" style="font-size: 0.65rem;">Education • ${educationData.status}</span>
              <h3 style="font-size: 1.25rem; font-weight: 500; color: var(--text-primary); margin-top: 0.25rem;">${educationData.institution}</h3>
            </div>
            <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">${educationData.period}</span>
          </div>

          <div style="display: flex; align-items: center; gap: 0.75rem; flex-wrap: wrap;">
            <p style="font-size: 0.95rem; font-weight: 500; color: var(--text-primary); margin: 0;">
              ${educationData.degree}
            </p>
            <span class="pill-badge" style="font-size: 0.72rem; background: var(--bg-surface-elevated); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
              GPA: ${educationData.gpa}
            </span>
          </div>

          <ul class="exp-desc-list" style="margin-top: 0.5rem;">
            ${educationData.highlights.map((h) => `<li>${h}</li>`).join('')}
          </ul>
        </div>

        <!-- Languages & Metadata Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.25rem;">
          <!-- Languages -->
          <div class="card-spotlight" style="padding: 1.25rem;">
            <span class="eyebrow-mono" style="font-size: 0.65rem; margin-bottom: 0.5rem; display: block;">Languages</span>
            <div style="display: flex; flex-direction: column; gap: 0.2rem;">
              ${languagesHtml}
            </div>
          </div>

          <!-- Verified Information Reference -->
          <div class="card-spotlight" style="padding: 1.25rem; display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
            <div>
              <span class="eyebrow-mono" style="font-size: 0.65rem; margin-bottom: 0.25rem; display: block;">Official Documents</span>
              <h4 style="font-size: 1rem; font-weight: 500; color: var(--text-primary); margin-bottom: 0.35rem;">Verified Personal Record</h4>
              <p style="font-size: 0.84rem; color: var(--text-secondary); line-height: 1.5; margin: 0;">
                All credentials, academic achievements, and project documentation are verified and accessible via Google Drive.
              </p>
            </div>

            <div style="display: flex; gap: 0.6rem; flex-wrap: wrap;">
              <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="font-size: 0.78rem; padding: 0.45rem 0.9rem;">
                <i class="fa-solid fa-file-pdf" style="font-size: 0.8rem;"></i>
                <span>View CV (PDF)</span>
              </a>
              <a href="${profileData.driveFolderUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary" style="font-size: 0.78rem; padding: 0.45rem 0.9rem;">
                <i class="fa-brands fa-google-drive" style="font-size: 0.8rem;"></i>
                <span>Drive Folder</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
