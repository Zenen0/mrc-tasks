const dialog = document.getElementById('lightbox');
const imageEl = document.getElementById('lightbox-image');
const timestampEl = document.getElementById('lightbox-timestamp');
const captionEl = document.getElementById('lightbox-caption');

let thumbs = [];
let currentIndex = -1;

function refreshThumbs() {
  thumbs = Array.from(document.querySelectorAll('.thumb'));
}

function openAt(index) {
  const thumb = thumbs[index];
  if (!thumb || !dialog || !(imageEl instanceof HTMLImageElement)) return;
  currentIndex = index;
  imageEl.src = thumb.dataset.fullSrc ?? '';
  imageEl.alt = thumb.dataset.label ?? '';
  if (timestampEl) timestampEl.textContent = thumb.dataset.timestamp ?? '';
  if (captionEl) captionEl.textContent = thumb.dataset.caption || thumb.dataset.label || '';
  if (!dialog.open) dialog.showModal();
}

function step(delta) {
  if (currentIndex < 0 || thumbs.length === 0) return;
  const next = (currentIndex + delta + thumbs.length) % thumbs.length;
  openAt(next);
}

document.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target.closest('.thumb') : null;
  if (!target) return;
  refreshThumbs();
  const index = thumbs.indexOf(target);
  if (index >= 0) openAt(index);
});

dialog?.addEventListener('click', (event) => {
  if (event.target instanceof Element && event.target.closest('[data-lightbox-close]')) {
    dialog.close();
  }
});

dialog?.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowRight') step(1);
  if (event.key === 'ArrowLeft') step(-1);
});

document.querySelector('[data-lightbox-prev]')?.addEventListener('click', () => step(-1));
document.querySelector('[data-lightbox-next]')?.addEventListener('click', () => step(1));
