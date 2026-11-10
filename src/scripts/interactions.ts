const toggle = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');

function closeMenu() {
  if (!toggle || !mobileNav) return;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'メニューを開く');
  mobileNav.hidden = true;
}

toggle?.addEventListener('click', () => {
  if (!mobileNav) return;
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  mobileNav.hidden = !open;
});
mobileNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && toggle?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });

const dialog = document.querySelector<HTMLDialogElement>('.photo-dialog');
const dialogImage = dialog?.querySelector('img');
const caption = dialog?.querySelector('figcaption');
if (dialog && dialogImage && caption && typeof dialog.showModal === 'function') {
  document.querySelectorAll<HTMLAnchorElement>('[data-photo]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dialogImage.src = link.href;
      dialogImage.alt = link.dataset.caption ?? '';
      caption.textContent = link.dataset.caption ?? '';
      dialog.showModal();
    });
  });
  dialog.querySelector('button')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
  });
}
