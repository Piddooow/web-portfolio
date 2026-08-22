// ==========================================================================
// Personal Chat Interface Component — Vidd
// Dynamic Inquiry & Seamless WhatsApp Routing
// ==========================================================================

import { profileData, personalChatCategories } from '../data.js';

let isChatOpen = false;
let selectedCategory = personalChatCategories[0];
let customMessage = selectedCategory.whatsappMessage;

export function renderChatWidget() {
  const categoryChipsHtml = personalChatCategories
    .map(
      (cat) => `
      <button type="button" class="chat-category-btn ${cat.id === selectedCategory.id ? 'active' : ''}" data-cat-id="${cat.id}">
        <i class="${cat.icon}" style="font-size: 0.75rem;"></i>
        <span>${cat.label}</span>
      </button>
    `
    )
    .join('');

  return `
    <div class="chat-dock" id="chat-dock">
      <!-- Personal Chat Window -->
      <div class="chat-window" id="chat-window" style="display: ${isChatOpen ? 'flex' : 'none'};">
        <!-- Clean Header -->
        <div class="chat-header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <div style="width: 2.25rem; height: 2.25rem; border-radius: 9999px; overflow: hidden; border: 1px solid var(--border-subtle); flex-shrink: 0;">
              <img src="${profileData.pfpImage}" alt="${profileData.name}" style="width: 100%; height: 100%; object-fit: cover;" />
            </div>
            <div style="display: flex; flex-direction: column; gap: 0.15rem;">
              <div style="display: flex; align-items: center; gap: 0.45rem;">
                <h4 style="font-size: 0.84rem; font-weight: 600; color: var(--text-primary); margin: 0; display: inline-flex; align-items: center; gap: 0.3rem;">
                  <span>${profileData.name}</span>
                  <span class="verified-badge" style="width: 0.95rem; height: 0.95rem;">
                    <svg viewBox="0 0 24 24" class="verified-icon">
                      <path fill="#1D9BF0" d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.67-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                      <path fill="#ffffff" d="M10.54 16.2L6.8 12.46l1.41-1.42 2.33 2.33 4.99-4.99 1.42 1.42-6.41 6.4z"/>
                    </svg>
                  </span>
                </h4>
                <span class="beacon-dot" style="width: 0.45rem; height: 0.45rem; background-color: #10b981; flex-shrink: 0;" title="Online"></span>
              </div>
              <span style="font-size: 0.68rem; color: var(--text-muted); font-family: var(--font-mono);">Direct WhatsApp & Email Gateway</span>
            </div>
          </div>

          <button type="button" id="close-chat-btn" style="color: var(--text-muted); cursor: pointer; padding: 0.25rem;" aria-label="Close chat">
            <svg style="width: 1.125rem; height: 1.125rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Chat Body -->
        <div class="chat-messages" style="height: auto; max-height: 22rem; gap: 1rem;">
          <div class="chat-bubble chat-bubble-bot">
            Hello! What kind of project or system are you looking to build with Vidd? Select an area below to generate your direct message:
          </div>

          <!-- Need Selection Grid -->
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <span class="eyebrow-mono" style="font-size: 0.62rem; color: var(--text-muted);">Select Project Scope</span>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;" id="chat-categories-wrap">
              ${categoryChipsHtml}
            </div>
          </div>

          <!-- Dynamic Message Preview Area -->
          <div style="display: flex; flex-direction: column; gap: 0.4rem;">
            <span class="eyebrow-mono" style="font-size: 0.62rem; color: var(--text-muted);">Message Preview (Editable)</span>
            <textarea id="dynamic-whatsapp-text" rows="3" style="width: 100%; font-family: inherit; font-size: 0.82rem; line-height: 1.45; padding: 0.6rem 0.75rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); color: var(--text-primary); border: 1px solid var(--border-subtle); resize: none;">${customMessage}</textarea>
          </div>

          <!-- Direct Action Buttons -->
          <div style="display: flex; flex-direction: column; gap: 0.5rem; padding-top: 0.25rem;">
            <a href="https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(customMessage)}" target="_blank" rel="noopener noreferrer" id="launch-whatsapp-btn" class="btn-primary" style="justify-content: center; background-color: #25D366; color: #ffffff; border-color: #25D366; font-weight: 500;">
              <i class="fa-brands fa-whatsapp" style="font-size: 1rem;"></i>
              <span>Continue on WhatsApp</span>
              <svg style="width: 0.85rem; height: 0.85rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <a href="mailto:${profileData.email}?subject=Project%20Inquiry%20from%20Portfolio&body=${encodeURIComponent(customMessage)}" id="launch-email-btn" class="btn-secondary" style="justify-content: center; font-size: 0.78rem;">
              <i class="fa-solid fa-envelope" style="font-size: 0.8rem;"></i>
              <span>Send as Email Instead</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Floating Trigger Button -->
      <button type="button" class="chat-trigger-btn" id="open-chat-btn" aria-label="Chat with Vidd">
        <i class="fa-brands fa-whatsapp" style="font-size: 1.1rem; color: #25D366;"></i>
        <span>Chat with ${profileData.name}</span>
      </button>
    </div>
  `;
}

export function initChatEvents() {
  const openBtn = document.getElementById('open-chat-btn');
  const closeBtn = document.getElementById('close-chat-btn');
  const chatWindow = document.getElementById('chat-window');
  const textarea = document.getElementById('dynamic-whatsapp-text');
  const waBtn = document.getElementById('launch-whatsapp-btn');
  const emailBtn = document.getElementById('launch-email-btn');

  function updateLinks(text) {
    if (waBtn) {
      waBtn.href = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(text)}`;
    }
    if (emailBtn) {
      emailBtn.href = `mailto:${profileData.email}?subject=Project%20Inquiry&body=${encodeURIComponent(text)}`;
    }
  }

  if (openBtn) {
    openBtn.addEventListener('click', () => {
      isChatOpen = !isChatOpen;
      if (chatWindow) chatWindow.style.display = isChatOpen ? 'flex' : 'none';
    });
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      isChatOpen = false;
      if (chatWindow) chatWindow.style.display = 'none';
    });
  }

  if (textarea) {
    textarea.addEventListener('input', (e) => {
      customMessage = e.target.value;
      updateLinks(customMessage);
    });
  }

  const categoryButtons = document.querySelectorAll('.chat-category-btn');
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-cat-id');
      const found = personalChatCategories.find((c) => c.id === catId);
      if (found) {
        selectedCategory = found;
        customMessage = found.whatsappMessage;
        if (textarea) textarea.value = customMessage;
        updateLinks(customMessage);

        categoryButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}
