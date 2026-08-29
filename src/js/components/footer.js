// ==========================================================================
// Footer Component — Vidd
// ==========================================================================

import { profileData } from '../data.js';

export function renderFooter() {
  const currentYear = new Date().getFullYear();

  return `
    <footer class="site-footer">
      <div class="site-container">
        <div class="footer-content">
          <div>
            <p class="footer-quote shiny-text">“${profileData.mainQuote}”</p>
            <div class="footer-metadata">
              <span style="font-weight: 500; color: var(--text-primary); display: inline-flex; align-items: center; gap: 0.25rem;">
                <span>${profileData.name}</span>
                <span class="verified-badge" style="width: 0.85rem; height: 0.85rem;">
                  <svg viewBox="0 0 24 24" class="verified-icon">
                    <path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                    <path fill="#ffffff" d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                  </svg>
                </span>
              </span>
              <span class="divider">/</span>
              <span>BINUS University (BBA & BSc)</span>
              <span class="divider">/</span>
              <span>${profileData.location}</span>
            </div>
          </div>

          <div class="footer-right">
            <div class="hero-social-links" style="gap: 1rem;">
              <a href="${profileData.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-linkedin" title="David Antono (LinkedIn)">
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="${profileData.instagramUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-instagram" title="Instagram">
                <i class="fa-brands fa-instagram"></i>
              </a>
              <a href="${profileData.githubUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-github" title="GitHub">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="mailto:${profileData.email}" class="hero-social-link social-email" title="Email">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="${profileData.resumeUrl}" target="_blank" rel="noopener noreferrer" class="hero-social-link social-resume" title="Resume">
                <i class="fa-solid fa-file-lines"></i>
              </a>
            </div>
          </div>
        </div>

        <!-- Professional Copyright & Credits Section -->
        <div class="footer-bottom-row">
          <div class="footer-copyright">
            <span>© ${currentYear} ${profileData.name}. All rights reserved.</span>
          </div>
          <div class="footer-credits">
            <span>Designed &amp; Built with precision</span>
            <span class="footer-credit-dot">•</span>
            <span class="footer-credit-mono">Jakarta, ID (GMT+7)</span>
          </div>
        </div>
      </div>
    </footer>

    <!-- Back to Top Button -->
    <button type="button" class="back-to-top-btn" id="back-to-top-btn" title="Back to top" aria-label="Scroll back to top">
      <svg style="width: 1rem; height: 1rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  `;
}

export function initBackToTopEvents() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
