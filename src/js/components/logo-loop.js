// ==========================================================================
// LogoLoop Component — Dual-Track Core Engineering & Tech Stack Marquee
// Row 1 (Top): Programming Languages & Frameworks (Left Stream)
// Row 2 (Bottom): Databases, Systems, DevOps & Design Tools (Right Stream)
// Dynamic colored glow on hover per brand
// ==========================================================================

export function renderLogoLoop() {
  // Row 1: Languages & Frameworks
  const languagesAndFrameworks = [
    { title: "React", icon: "fa-brands fa-react", href: "https://react.dev", color: "#61DAFB" },
    { title: "Next.js", icon: "fa-solid fa-n", href: "https://nextjs.org", color: "#E2E8F0" },
    { title: "TypeScript", icon: "fa-solid fa-code", href: "https://www.typescriptlang.org", color: "#3178C6" },
    { title: "JavaScript", icon: "fa-brands fa-js", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", color: "#F7DF1E" },
    { title: "Python", icon: "fa-brands fa-python", href: "https://www.python.org", color: "#3776AB" },
    { title: "PHP", icon: "fa-brands fa-php", href: "https://www.php.net", color: "#777BB4" },
    { title: "Tailwind CSS", icon: "fa-solid fa-wind", href: "https://tailwindcss.com", color: "#38BDF8" },
    { title: "HTML5", icon: "fa-brands fa-html5", href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5", color: "#E34F26" }
  ];

  // Row 2: Databases, DevOps, Systems Modeling & Tools
  const toolsAndDatabases = [
    { title: "Node.js", icon: "fa-brands fa-node-js", href: "https://nodejs.org", color: "#339933" },
    { title: "PostgreSQL", icon: "fa-solid fa-database", href: "https://www.postgresql.org", color: "#4169E1" },
    { title: "MySQL", icon: "fa-solid fa-server", href: "https://www.mysql.com", color: "#4479A1" },
    { title: "Docker", icon: "fa-brands fa-docker", href: "https://www.docker.com", color: "#2496ED" },
    { title: "Git & GitHub", icon: "fa-brands fa-github", href: "https://github.com/Piddooow", color: "#F05032" },
    { title: "Figma", icon: "fa-brands fa-figma", href: "https://www.figma.com", color: "#F24E1E" },
    { title: "Visual Paradigm", icon: "fa-solid fa-diagram-project", href: "#capabilities", color: "#0080FF" },
    { title: "Postman", icon: "fa-solid fa-paper-plane", href: "https://www.postman.com", color: "#FF6C37" },
    { title: "SQL & ERD", icon: "fa-solid fa-table-cells", href: "#capabilities", color: "#A855F7" }
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

  const row1Html = renderTrackGroup(languagesAndFrameworks);
  const row2Html = renderTrackGroup(toolsAndDatabases);

  return `
    <section class="logo-loop-section" id="tech-loop" style="padding: 1.5rem 0; overflow: hidden;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.85rem; padding: 0 0.25rem;">
        <span class="eyebrow-mono" style="font-size: 0.65rem; letter-spacing: 0.18em;">Core Engineering & Tech Stack</span>
        <span style="font-family: var(--font-mono); font-size: 0.68rem; color: var(--text-muted);">Languages • Tools • Systems</span>
      </div>

      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <!-- Track 1: Languages & Core Frameworks (Left to Right stream) -->
        <div class="logo-loop-container horizontal has-fade" style="--logo-height: 42px; --logo-gap: 16px; --loop-duration: 32s;">
          <div class="logo-loop-track left scale-on-hover">
            <div class="logo-loop-group">
              ${row1Html}
            </div>
            <div class="logo-loop-group" aria-hidden="true">
              ${row1Html}
            </div>
          </div>
        </div>

        <!-- Track 2: Databases, Tools & Architecture (Right to Left stream) -->
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
    </section>
  `;
}
