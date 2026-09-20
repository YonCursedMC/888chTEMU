/**
 * OVERTHREAD - Overseas Forum Curated Archive
 * Client Renderer & Interactions (Config-driven)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render content from THREAD_CONFIG if available
  if (window.THREAD_CONFIG) {
    renderThreadApp(window.THREAD_CONFIG);
  }

  // 2. Initialize interactive UI controls
  initLightbox();
  initCommentCollapse();
  initFontSizeToggle();
  initShareButton();
});

/* ==========================================================================
   DOM Renderer (Built from config.js)
   ========================================================================== */
function renderThreadApp(config) {
  // Page Title
  if (config.site?.pageTitle) {
    document.title = config.site.pageTitle;
  }

  // Header Brand
  const siteBadge = document.getElementById('render-site-badge');
  if (siteBadge && config.site?.archiveBadge) {
    siteBadge.textContent = config.site.archiveBadge;
  }
  const threadId = document.getElementById('render-thread-id');
  if (threadId && config.site?.threadId) {
    threadId.textContent = config.site.threadId;
  }
  const subTitle = document.getElementById('render-sub-title');
  if (subTitle && config.site?.subTitle) {
    subTitle.textContent = `• ${config.site.subTitle}`;
  }

  // Notice Banner
  const noticeBanner = document.getElementById('render-notice-banner');
  if (noticeBanner && config.site?.noticeBanner) {
    noticeBanner.textContent = config.site.noticeBanner;
  }

  // OP Card Rendering
  const opContainer = document.getElementById('render-op-card');
  if (opContainer && config.thread) {
    opContainer.innerHTML = buildOpCardHtml(config.thread);
  }

  // Comments Stream Rendering
  const commentsContainer = document.getElementById('render-comments-stream');
  if (commentsContainer && config.comments) {
    commentsContainer.innerHTML = buildCommentsTreeHtml(config.comments);
  }

  // Footer Rendering
  const footerStatus = document.getElementById('render-footer-status');
  if (footerStatus && config.site?.footerStatus) {
    footerStatus.textContent = config.site.footerStatus;
  }
  const footerSub = document.getElementById('render-footer-sub');
  if (footerSub && config.site?.footerSub) {
    footerSub.textContent = config.site.footerSub;
  }
}

/* Helper to build OP Card HTML */
function buildOpCardHtml(thread) {
  const paragraphsHtml = (thread.bodyParagraphs || [])
    .map(p => `<p>${p}</p>`)
    .join('');

  // Main Image
  let mainImageHtml = '';
  if (thread.mainImage && thread.mainImage.url) {
    mainImageHtml = `
      <div class="thread-media">
        <div class="media-frame" title="Click to view full resolution">
          <img src="${escapeHtml(thread.mainImage.url)}" alt="${escapeHtml(thread.mainImage.alt || '')}">
          <div class="media-zoom-hint">
            <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"/>
            </svg>
            <span>Click to expand</span>
          </div>
        </div>
        ${thread.mainImage.caption ? `
          <div class="media-caption">
            <svg fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 7.828 2H5.172a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 2.172 4H2zm0 1h1.172a3 3 0 0 0 2.122-.879l.828-.828A1 1 0 0 1 6.828 3h2.344a1 1 0 0 1 .706.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></svg>
            <span>${escapeHtml(thread.mainImage.caption)}</span>
          </div>
        ` : ''}
      </div>
    `;
  }

  // Quote
  const quoteHtml = thread.quote ? `<blockquote>"${escapeHtml(thread.quote)}"</blockquote>` : '';

  // Gallery Images Grid
  let galleryHtml = '';
  if (thread.galleryImages && thread.galleryImages.length > 0) {
    galleryHtml = `
      <div class="media-grid">
        ${thread.galleryImages.map(img => `
          <div class="media-unit">
            <div class="media-frame" title="Click to view full resolution">
              <img src="${escapeHtml(img.url)}" alt="${escapeHtml(img.alt || '')}">
            </div>
            ${img.caption ? `<div class="media-caption"><span>${escapeHtml(img.caption)}</span></div>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Conclusion Paragraph
  const conclusionHtml = thread.conclusion ? `<p>${thread.conclusion}</p>` : '';

  return `
    <div class="thread-header-meta">
      <span class="community-pill">
        <svg width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0V9.707l-4.146 4.147a.5.5 0 0 1-.708-.708L10.293 9H8.5a.5.5 0 0 1 0-1h3z"/>
        </svg>
        ${escapeHtml(thread.subreddit || 'r/Forum')}
      </span>
      ${thread.flair ? `<span class="post-flair">${escapeHtml(thread.flair)}</span>` : ''}
      <span class="meta-separator">&bull;</span>
      <span>Posted by <strong class="user-author">${escapeHtml(thread.author || 'Anonymous')}</strong></span>
      <span class="post-time">${escapeHtml(thread.timeAgo || '')}</span>
    </div>

    <h1 class="thread-title">${escapeHtml(thread.title || '')}</h1>

    <div class="thread-body">
      ${paragraphsHtml}
      ${mainImageHtml}
      ${quoteHtml}
      ${galleryHtml}
      ${conclusionHtml}
    </div>

    <div class="thread-footer-stats">
      <div class="stats-left">
        <div class="score-badge">
          <span>&blacktriangle;</span>
          <span>${escapeHtml(thread.score || '0')}</span>
          <span>&blacktriangledown;</span>
        </div>
        <div class="comment-count-badge">
          <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <span>${escapeHtml(thread.commentCount || 'Comments')}</span>
        </div>
      </div>
      <div class="stats-right">
        <span class="readonly-pill">
          <svg width="13" height="13" fill="currentColor" viewBox="0 0 16 16"><path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/></svg>
          Archive Mode
        </span>
      </div>
    </div>
  `;
}

/* Helper to build Recursive Comments Tree */
function buildCommentsTreeHtml(comments) {
  if (!comments || comments.length === 0) return '';

  return comments.map(comment => {
    const isPinnedClass = comment.isPinned ? 'pinned' : '';
    const isOpClass = comment.role === 'op' ? 'op-reply' : '';

    // Role badge
    let roleBadgeHtml = '';
    if (comment.role === 'mod') {
      roleBadgeHtml = `<span class="author-role-badge mod">${escapeHtml(comment.roleBadgeText || 'MOD')}</span>`;
    } else if (comment.role === 'op') {
      roleBadgeHtml = `<span class="author-role-badge op">${escapeHtml(comment.roleBadgeText || 'OP')}</span>`;
    }

    // Avatar style
    const avatarStyle = comment.avatarBg ? `style="background:${escapeHtml(comment.avatarBg)};"` : '';

    // Inline Image in comment
    let imageHtml = '';
    if (comment.image && comment.image.url) {
      imageHtml = `
        <div class="comment-inline-media">
          <div class="media-frame" title="Click to view full resolution">
            <img src="${escapeHtml(comment.image.url)}" alt="${escapeHtml(comment.image.alt || '')}">
          </div>
          ${comment.image.caption ? `<div class="media-caption"><span>${escapeHtml(comment.image.caption)}</span></div>` : ''}
        </div>
      `;
    }

    // Recursive replies
    let repliesHtml = '';
    if (comment.replies && comment.replies.length > 0) {
      repliesHtml = `
        <div class="comment-replies">
          ${buildCommentsTreeHtml(comment.replies)}
        </div>
      `;
    }

    return `
      <article class="comment-item ${isPinnedClass} ${isOpClass}">
        <div class="comment-body-wrapper">
          <div class="comment-header">
            <div class="comment-author-info">
              <div class="user-avatar" ${avatarStyle}>${escapeHtml(comment.avatar || 'U')}</div>
              <span class="comment-author">${escapeHtml(comment.author || 'Anonymous')}</span>
              ${roleBadgeHtml}
              <span class="meta-separator">&bull;</span>
              <span class="comment-score">${escapeHtml(comment.score || '')}</span>
              <span class="comment-time">${escapeHtml(comment.timeAgo || '')}</span>
            </div>
            <button type="button" class="collapse-btn" title="Collapse comment">[-]</button>
          </div>
          <div class="comment-content">
            ${comment.content || ''}
          </div>
          ${imageHtml}
        </div>
        ${repliesHtml}
      </article>
    `;
  }).join('');
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/* ==========================================================================
   1. Lightbox Image Viewer
   ========================================================================== */
function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  // Open on clicking any media frame (delegated)
  document.addEventListener('click', (e) => {
    const frame = e.target.closest('.media-frame');
    if (!frame) return;

    const img = frame.querySelector('img');
    if (!img) return;

    modalImg.src = img.src;
    modalImg.alt = img.alt || 'Forum media view';

    // Look for caption
    const parentContainer = frame.parentElement;
    const captionElem = parentContainer.querySelector('.media-caption');
    if (captionElem) {
      modalCaption.textContent = captionElem.textContent.trim();
      modalCaption.style.display = 'block';
    } else if (img.alt) {
      modalCaption.textContent = img.alt;
      modalCaption.style.display = 'block';
    } else {
      modalCaption.style.display = 'none';
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  // Close handlers
  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('lightbox-content')) {
      closeModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   2. Comment Thread Collapse / Expand (Delegated)
   ========================================================================== */
function initCommentCollapse() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.collapse-btn');
    if (!btn) return;

    e.stopPropagation();
    const commentItem = btn.closest('.comment-item');
    if (!commentItem) return;

    const isCollapsed = commentItem.classList.toggle('collapsed');
    
    if (isCollapsed) {
      const replies = commentItem.querySelectorAll('.comment-replies .comment-item');
      const countText = replies.length > 0 ? ` (+${replies.length})` : '';
      btn.textContent = `[+]${countText}`;
      btn.title = 'Expand discussion';
    } else {
      btn.textContent = '[-]';
      btn.title = 'Collapse discussion';
    }
  });
}

/* ==========================================================================
   3. Font Size Toggle (Reader Comfort)
   ========================================================================== */
function initFontSizeToggle() {
  const fontBtn = document.getElementById('btn-font-size');
  if (!fontBtn) return;

  const fontScales = [1, 1.12, 0.92];
  const fontLabels = ['Default font', 'Large font', 'Compact font'];
  let currentIdx = 0;

  fontBtn.addEventListener('click', () => {
    currentIdx = (currentIdx + 1) % fontScales.length;
    document.documentElement.style.setProperty('--font-scale', fontScales[currentIdx]);
    showToast(`Reading size: ${fontLabels[currentIdx]}`);
  });
}

/* ==========================================================================
   4. Share Link & Toast Notification
   ========================================================================== */
function initShareButton() {
  const shareBtn = document.getElementById('btn-share-link');
  if (!shareBtn) return;

  shareBtn.addEventListener('click', async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      }
      showToast('Thread link copied to clipboard!');
    } catch (err) {
      showToast('Copied thread URL');
    }
  });
}

function showToast(message) {
  let toast = document.getElementById('toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-msg';
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
    </svg>
    <span>${message}</span>
  `;
  
  toast.classList.add('show');
  
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}
