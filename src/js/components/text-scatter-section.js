// ==========================================================================
// TextScatter Showcase Section — React Bits Pro Interactive Typography
// (@reactbits-starter/text-scatter-tw)
// Dedicated Interactive Showcase positioned directly above "The other side of Vidd"
// ==========================================================================

export function renderTextScatterSection() {
  return `
    <section class="text-scatter-showcase-section" id="who-is-piddooow" style="margin-top: 2rem; margin-bottom: 2rem;">
      <div class="text-scatter-showcase-card card-spotlight border-glow-card" style="padding: 3.5rem 2rem; text-align: center; border-radius: 1rem; border: 1px dashed var(--border-dashed); background: var(--bg-surface-card); position: relative; overflow: visible; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1rem;">
        
        <!-- Subtle Category Eyebrow -->
        <div style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.3rem 0.75rem; border-radius: 9999px; background: var(--bg-surface-elevated); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.72rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.15em;">
          <span style="width: 6px; height: 6px; border-radius: 9999px; background: var(--accent-gold, #c084fc); box-shadow: 0 0 8px var(--accent-gold, #c084fc);"></span>
          <span>Interactive Typography</span>
        </div>

        <!-- Prominent Giant Text Scatter Heading -->
        <div class="text-scatter-hero-wrap" style="position: relative; display: inline-block; cursor: pointer; user-select: none; padding: 0.5rem 1rem;">
          <span class="text-scatter-container text-scatter-giant text-scatter-gradient-text" data-text-scatter="Who's Piddooow?" style="font-size: clamp(2.2rem, 6vw, 3.75rem); font-weight: 800; letter-spacing: -0.035em; line-height: 1.1;">
            Who's Piddooow?
          </span>
        </div>

        <!-- Micro Interaction Prompt -->
        <p style="font-size: 0.85rem; color: var(--text-muted); font-family: var(--font-mono); display: inline-flex; align-items: center; gap: 0.45rem; margin: 0; opacity: 0.75;">
          <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 0.75rem; color: var(--accent-gold, #c084fc);"></i>
          <span>Hover, move cursor, or tap letters to scatter</span>
        </p>
      </div>
    </section>
  `;
}
