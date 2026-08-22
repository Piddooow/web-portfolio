// ==========================================================================
// Outside the IDE Component — Interactive 3D Stacked Photo Deck
// ==========================================================================

import { outsideTheIdeData } from '../data.js';

let activeCardsOrder = [...outsideTheIdeData];

export function renderOutsideIde() {
  const tagsHtml = ['Travel', 'Coffee', 'Audio', 'Training']
    .map((t) => `<span class="tag-chip">${t}</span>`)
    .join('');

  return `
    <section class="outside-ide-section" id="outside-the-ide">
      <div class="section-header">
        <h2 class="section-title">Outside the IDE</h2>
      </div>

      <div class="outside-ide-layout">
        <div style="display: flex; flex-direction: column; gap: 1rem;">
          <p style="font-size: 0.95rem; line-height: 1.7; color: var(--text-secondary); max-width: 28rem;">
            When I step away from the terminal, I recharge through physical training, specialty coffee craft, modular analog synthesis, and urban travel — returning to my projects with fresh perspective and renewed energy.
          </p>

          <div style="display: flex; flex-wrap: wrap; gap: 0.4rem; padding-top: 0.25rem;">
            ${tagsHtml}
          </div>
        </div>

        <div class="stack-outer">
          <div class="stack-container" id="photo-card-stack" title="Click or drag cards to cycle">
            <!-- Rendered by initCardStack() -->
          </div>
        </div>
      </div>
    </section>
  `;
}

export function updateCardStackDOM() {
  const container = document.getElementById('photo-card-stack');
  if (!container) return;

  container.innerHTML = '';
  const total = activeCardsOrder.length;

  activeCardsOrder.forEach((card, index) => {
    // Top card is at index 0, back cards follow
    const layer = document.createElement('div');
    layer.className = 'card-layer';
    layer.dataset.id = card.id;

    // Perspective transformation: top card has 0 offset, deeper cards rotate & scale down
    const rotate = (total - index - 1) * 3.5 - 2;
    const scale = 1 - index * 0.05;
    const translateY = index * 4;

    layer.style.zIndex = `${total - index}`;
    layer.style.transform = `translateY(${translateY}px) rotateZ(${rotate}deg) scale(${scale})`;

    layer.innerHTML = `
      <img src="${card.image}" alt="${card.title}" class="card-layer-img" />
      <div class="card-layer-caption">
        <span style="font-weight: 500;">${card.title}</span>
        <span style="font-family: var(--font-mono); font-size: 0.65rem; color: #d4d4d8;">${card.tag}</span>
      </div>
    `;

    // Click on card to send top card to back
    layer.addEventListener('click', () => {
      cycleTopCard();
    });

    container.appendChild(layer);
  });
}

function cycleTopCard() {
  if (activeCardsOrder.length <= 1) return;
  const top = activeCardsOrder.shift();
  activeCardsOrder.push(top);
  updateCardStackDOM();
}

export function initCardStack() {
  updateCardStackDOM();
}
