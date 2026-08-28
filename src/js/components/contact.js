// ==========================================================================
// Contact Component — Direct Channels (Verified from CV)
// ==========================================================================

import { profileData } from '../data.js';

export function renderContact() {
  return `
    <section class="contact-section" id="contact">
      <div class="section-header">
        <h2 class="section-title">Let’s connect & build.</h2>
      </div>

      <div class="outside-ide-layout" style="align-items: flex-start;">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <p style="font-size: 0.95rem; line-height: 1.75; color: var(--text-secondary); max-width: 28rem; text-align: left; text-indent: 0;">
            Whether you have a strategic business challenge, an enterprise system or ERP to model, or an AI/web product to build — I’m always open to discussing new opportunities and collaborations.
          </p>

          <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;">
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
              PHONE / WA: <span style="color: var(--text-primary); font-weight: 500;">${profileData.phone}</span>
            </div>
            <div style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono);">
              EMAIL: <span style="color: var(--text-primary); font-weight: 500;">${profileData.email}</span>
            </div>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <!-- LinkedIn Card -->
          <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-linkedin" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
            <div style="display: flex; align-items: center; gap: 0.875rem;">
              <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem;">LinkedIn</span>
                <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">David Antono</p>
              </div>
            </div>
            <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>

          <!-- WhatsApp Card -->
          <a href="https://wa.me/${profileData.phoneRaw}?text=Hi%20Vidd%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you." target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-whatsapp" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
            <div style="display: flex; align-items: center; gap: 0.875rem;">
              <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                <i class="fa-brands fa-whatsapp" style="font-size: 1.15rem;"></i>
              </div>
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem;">WhatsApp</span>
                <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">${profileData.phone}</p>
              </div>
            </div>
            <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>

          <!-- Direct Email Card -->
          <a href="mailto:${profileData.email}" class="card-spotlight contact-item contact-card-email" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
            <div style="display: flex; align-items: center; gap: 0.875rem;">
              <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                <i class="fa-solid fa-envelope"></i>
              </div>
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem;">Direct Email</span>
                <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">${profileData.email}</p>
              </div>
            </div>
            <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>

          <!-- Instagram Card -->
          <a href="${profileData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-instagram" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
            <div style="display: flex; align-items: center; gap: 0.875rem;">
              <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem;">Instagram</span>
                <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">@david.antonoo</p>
              </div>
            </div>
            <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>

          <!-- GitHub Card -->
          <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="card-spotlight contact-item contact-card-github" style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; text-decoration: none;">
            <div style="display: flex; align-items: center; gap: 0.875rem;">
              <div class="contact-icon-box" style="width: 2.25rem; height: 2.25rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); display: flex; align-items: center; justify-content: center; color: var(--text-primary); transition: color 0.25s ease, transform 0.25s ease;">
                <i class="fa-brands fa-github"></i>
              </div>
              <div>
                <span class="eyebrow-mono" style="font-size: 0.65rem;">GitHub</span>
                <p style="font-size: 0.875rem; font-weight: 500; color: var(--text-primary); margin: 0;">@Piddooow</p>
              </div>
            </div>
            <svg style="width: 0.9rem; height: 0.9rem; color: var(--text-muted);" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  `;
}
