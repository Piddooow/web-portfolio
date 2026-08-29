// ==========================================================================
// Personal Inquiry Interface Component — Vidd
// Direct Email Gateway & Interactive Message Composer
// ==========================================================================

import { profileData, personalChatCategories } from '../data.js';

let isChatOpen = false;
let selectedCategory = personalChatCategories[0];
let customMessage = selectedCategory.defaultMessage;
let customSubject = selectedCategory.subject;

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
      <!-- Personal Inquiry Window -->
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
              </div>
              <span style="font-size: 0.68rem; color: var(--text-muted); font-family: var(--font-mono);">${profileData.email}</span>
            </div>
          </div>

          <button type="button" id="close-chat-btn" style="color: var(--text-muted); background: none; border: none; cursor: pointer; padding: 0.25rem;" aria-label="Close message composer">
            <svg style="width: 1.125rem; height: 1.125rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Chat Body -->
        <div class="chat-messages" style="height: auto; max-height: 22rem; gap: 0.85rem;">
          <div class="chat-bubble chat-bubble-bot">
            Hello! Looking to discuss a website, system architecture, or consulting project? Select a scope below to generate your email draft:
          </div>

          <!-- Need Selection Grid -->
          <div style="display: flex; flex-direction: column; gap: 0.35rem;">
            <span class="eyebrow-mono" style="font-size: 0.62rem; color: var(--text-muted);">Select Project Scope</span>
            <div style="display: flex; flex-wrap: wrap; gap: 0.35rem;" id="chat-categories-wrap">
              ${categoryChipsHtml}
            </div>
          </div>

          <!-- Dynamic Message Preview Area -->
          <div style="display: flex; flex-direction: column; gap: 0.35rem;">
            <span class="eyebrow-mono" style="font-size: 0.62rem; color: var(--text-muted);">Message Draft (Editable)</span>
            <textarea id="dynamic-email-text" rows="3" style="width: 100%; font-family: inherit; font-size: 0.82rem; line-height: 1.45; padding: 0.6rem 0.75rem; border-radius: 0.5rem; background: var(--bg-surface-elevated); color: var(--text-primary); border: 1px solid var(--border-subtle); resize: none;">${customMessage}</textarea>
          </div>

          <!-- Direct Action Buttons -->
          <div style="display: flex; flex-direction: column; gap: 0.45rem; padding-top: 0.25rem;">
            <a href="mailto:${profileData.email}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(customMessage)}" id="launch-email-btn" class="btn-primary" style="justify-content: center; font-weight: 500; padding: 0.65rem 1rem;">
              <i class="fa-solid fa-paper-plane" style="font-size: 0.85rem;"></i>
              <span>Send Direct Email</span>
              <svg style="width: 0.85rem; height: 0.85rem;" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>

            <button type="button" id="copy-email-btn" class="btn-secondary" style="justify-content: center; font-size: 0.78rem; padding: 0.5rem 1rem;">
              <i class="fa-solid fa-copy" id="copy-email-icon" style="font-size: 0.8rem;"></i>
              <span id="copy-email-label">Copy Email Address</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Floating Trigger Button with Email Icon & Smooth Hover Color -->
      <button type="button" class="chat-trigger-btn" id="open-chat-btn" aria-label="Send message to Vidd">
        <i class="fa-solid fa-envelope chat-trigger-icon"></i>
        <span>Get in Touch</span>
      </button>
    </div>
  `;
}

export function initChatEvents() {
  const openBtn = document.getElementById('open-chat-btn');
  const closeBtn = document.getElementById('close-chat-btn');
  const chatWindow = document.getElementById('chat-window');
  const textarea = document.getElementById('dynamic-email-text');
  const emailBtn = document.getElementById('launch-email-btn');
  const copyBtn = document.getElementById('copy-email-btn');
  const copyLabel = document.getElementById('copy-email-label');
  const copyIcon = document.getElementById('copy-email-icon');

  function updateEmailLink(text) {
    if (emailBtn) {
      emailBtn.href = `mailto:${profileData.email}?subject=${encodeURIComponent(customSubject)}&body=${encodeURIComponent(text)}`;
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
      updateEmailLink(customMessage);
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(profileData.email).then(() => {
        if (copyLabel) copyLabel.textContent = 'Email Copied!';
        if (copyIcon) copyIcon.className = 'fa-solid fa-check';
        setTimeout(() => {
          if (copyLabel) copyLabel.textContent = 'Copy Email Address';
          if (copyIcon) copyIcon.className = 'fa-solid fa-copy';
        }, 2000);
      });
    });
  }

  const categoryButtons = document.querySelectorAll('.chat-category-btn');
  categoryButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const catId = btn.getAttribute('data-cat-id');
      const found = personalChatCategories.find((c) => c.id === catId);
      if (found) {
        selectedCategory = found;
        customSubject = found.subject;
        customMessage = found.defaultMessage;
        if (textarea) textarea.value = customMessage;
        updateEmailLink(customMessage);

        categoryButtons.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
      }
    });
  });
}
