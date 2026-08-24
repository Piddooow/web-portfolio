// ==========================================================================
// LogoLoop Component — 3-Tier Categorized Tech Stack Marquee
// Track 1 (Top): Languages & Web Core (Right to Left / Kanan ke Kiri)
// Track 2 (Middle): Frameworks, Full-Stack & UI/UX (Left to Right / Kiri ke Kanan)
// Track 3 (Bottom): Databases, DevOps & Systems Modeling (Left to Right / Kiri ke Kanan)
// Dashed border styling & dynamic authentic brand colors on hover
// ==========================================================================

export function renderLogoLoop() {
  // Category 1: Languages & Web Core (Stream Right-to-Left)
  const category1Languages = [
    { title: "JavaScript", icon: "fa-brands fa-js", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" },
    { title: "TypeScript", icon: "fa-solid fa-code", href: "https://www.typescriptlang.org", color: "#3178C6" },
    { title: "Python", icon: "fa-brands fa-python", href: "https://www.python.org", color: "#3776AB" },
    { title: "PHP", icon: "fa-brands fa-php", href: "https://www.php.net", color: "#777BB4" },
    { title: "HTML5", icon: "fa-brands fa-html5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", color: "#E34F26" },
    { title: "CSS3", icon: "fa-brands fa-css3-alt", href: "https://developer.mozilla.org/en-US/docs/Web/CSS", color: "#1572B6" },
    { title: "SQL", icon: "fa-solid fa-table-cells", href: "#capabilities", color: "#336791" },
    { title: "Bash / Shell", icon: "fa-solid fa-terminal", href: "https://www.gnu.org/software/bash/", color: "#4EAA25" }
  ];

  // Category 2: Frameworks, Full-Stack & UI/UX (Stream Left-to-Right)
  const category2Frameworks = [
    { title: "React", icon: "fa-brands fa-react", href: "https://react.dev", color: "#61DAFB" },
    { title: "Next.js", icon: "fa-solid fa-n", href: "https://nextjs.org", color: "#E2E8F0" },
    { title: "Node.js", icon: "fa-brands fa-node-js", href: "https://nodejs.org", color: "#339933" },
    { title: "Tailwind CSS", icon: "fa-solid fa-wind", href: "https://tailwindcss.com", color: "#38BDF8" },
    { title: "Figma", icon: "fa-brands fa-figma", href: "https://www.figma.com", color: "#F24E1E" },
    { title: "Express.js", icon: "fa-solid fa-server", href: "https://expressjs.com", color: "#A1A1AA" },
    { title: "REST APIs", icon: "fa-solid fa-network-wired", href: "#capabilities", color: "#009688" },
    { title: "Bootstrap", icon: "fa-brands fa-bootstrap", href: "https://getbootstrap.com", color: "#7952B3" }
  ];

  // Category 3: Databases, DevOps & Systems Modeling (Stream Left-to-Right)
  const category3DatabasesSystems = [
    { title: "PostgreSQL", icon: "fa-solid fa-database", href: "https://www.postgresql.org", color: "#4169E1" },
    { title: "MySQL", icon: "fa-solid fa-server", href: "https://www.mysql.com", color: "#4479A1" },
    { title: "Docker", icon: "fa-brands fa-docker", href: "https://www.docker.com", color: "#2496ED" },
    { title: "Git & GitHub", icon: "fa-brands fa-github", href: "https://github.com/Piddooow", color: "#F05032" },
    { title: "Visual Paradigm", icon: "fa-solid fa-diagram-project", href: "#capabilities", color: "#0080FF" },
    { title: "Postman", icon: "fa-solid fa-paper-plane", href: "https://www.postman.com", color: "#FF6C37" },
    { title: "ERD & Use Cases", icon: "fa-solid fa-sitemap", href: "#capabilities", color: "#A855F7" },
    { title: "Vercel", icon: "fa-solid fa-triangle", href: "https://vercel.com", color: "#E2E8F0" }
  ];

  const renderTrackGroup = (logos) =>
    logos
      .map(
        (logo) => `
      <div class="logo-loop-item">
        <a href="${logo.href}" target="_blank" rel="noopener noreferrer" class="logo-loop-link" title="${logo.title}" style="--brand-color: ${logo.color}; --brand-glow: ${logo.color}33;">
          <i class="${logo.icon}"></i>
          <span class="logo-loop-title">${logo.title}</span>
        </a>
      </div>
    `
      )
      .join('');

  const row1Html = renderTrackGroup(category1Languages);
  const row2Html = renderTrackGroup(category2Frameworks);
  const row3Html = renderTrackGroup(category3DatabasesSystems);

  return `
    <section class="logo-loop-section" id="tech-loop" style="margin-top: 1.5rem;">
      <div class="tech-stack-dashed-wrapper" style="padding: 1.5rem 1.25rem; border-radius: 0.85rem; border: 1px dashed var(--border-dashed); background-color: var(--bg-surface-card); position: relative; overflow: hidden;">
        
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; padding: 0 0.25rem;">
          <div style="display: flex; flex-direction: column; gap: 0.2rem;">
            <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.18em;">Core Engineering & Tech Stack</span>
            <span style="font-size: 0.84rem; color: var(--text-secondary);">Languages • Frameworks • Systems & DevOps</span>
          </div>
          <span class="pill-badge" style="font-family: var(--font-mono); font-size: 0.65rem; padding: 0.25rem 0.6rem; border: 1px dashed var(--border-dashed);">
            3 Categories
          </span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          
          <!-- Category 1: Languages & Core (Right to Left stream / Kanan ke Kiri) -->
          <div class="tech-stream-row">
            <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 34s;">
              <div class="logo-loop-track left scale-on-hover">
                <div class="logo-loop-group">
                  ${row1Html}
                </div>
                <div class="logo-loop-group" aria-hidden="true">
                  ${row1Html}
                </div>
              </div>
            </div>
          </div>

          <!-- Category 2: Frameworks & UI/UX (Left to Right stream / Kiri ke Kanan) -->
          <div class="tech-stream-row">
            <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 32s;">
              <div class="logo-loop-track right scale-on-hover">
                <div class="logo-loop-group">
                  ${row2Html}
                </div>
                <div class="logo-loop-group" aria-hidden="true">
                  ${row2Html}
                </div>
              </div>
            </div>
          </div>

          <!-- Category 3: Databases & Systems (Left to Right stream / Kiri ke Kanan) -->
          <div class="tech-stream-row">
            <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 36s;">
              <div class="logo-loop-track right scale-on-hover">
                <div class="logo-loop-group">
                  ${row3Html}
                </div>
                <div class="logo-loop-group" aria-hidden="true">
                  ${row3Html}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
