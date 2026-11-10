// 本文は通常表示のままにしておき、画面に入った時点で動きを付けます。
// JSが使えない場合やAPI非対応の場合にも、内容は隠れません。
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const groups = [
  '.about > .container > .section-label, .about-heading',
  '.about-copy > *',
  '.feature-intro > div',
  '.feature-photo',
  '.feature-types > article',
  '.services .section-top',
  '.service-item',
  '.events',
  '.access .section-top',
  '.shop-information, .map-area',
  '.instagram-inner > *',
];
const revealed = new WeakSet<HTMLElement>();
const delays = new WeakMap<HTMLElement, number>();
const activeAnimations = new Map<HTMLElement, Animation>();
let observer: IntersectionObserver | undefined;

function stopMotion() {
  observer?.disconnect();
  activeAnimations.forEach((animation) => animation.cancel());
  activeAnimations.clear();
}

function startMotion() {
  if (reducedMotion.matches || !('IntersectionObserver' in window) || !('animate' in Element.prototype)) return;

  observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      const element = entry.target as HTMLElement;
      observer?.unobserve(element);
      if (revealed.has(element)) continue;
      revealed.add(element);

      // キーボード操作中のリンク・ボタンは、待たずに表示します。
      if (reducedMotion.matches || element.contains(document.activeElement)) continue;
      const distance = window.matchMedia('(max-width: 700px)').matches ? 16 : 25;
      const animation = element.animate(
        [
          { opacity: 0, translate: `0 ${distance}px` },
          { opacity: 1, translate: '0 0' },
        ],
        {
          duration: 750,
          delay: delays.get(element) ?? 0,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'backwards',
        },
      );
      // translateを使い、写真や装飾の既存の回転は維持します。
      activeAnimations.set(element, animation);
      animation.onfinish = () => {
        activeAnimations.delete(element);
        animation.cancel();
      };
    }
  }, { rootMargin: '0px 0px 40px 0px', threshold: 0 });

  for (const selector of groups) {
    document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
      if (revealed.has(element)) return;
      // ページ途中へのリンク・スクロール位置の復元時は、見えている本文を再び隠しません。
      const bounds = element.getBoundingClientRect();
      if (bounds.top < window.innerHeight && bounds.bottom > 0) {
        revealed.add(element);
        return;
      }
      delays.set(element, Math.min(index, 2) * 90);
      observer?.observe(element);
    });
  }
}

document.addEventListener('focusin', (event) => {
  if (!(event.target instanceof Node)) return;
  const target = event.target;
  activeAnimations.forEach((animation, element) => {
    if (!element.contains(target)) return;
    animation.cancel();
    activeAnimations.delete(element);
  });
});
reducedMotion.addEventListener('change', () => {
  stopMotion();
  startMotion();
});
window.addEventListener('pagehide', stopMotion);
window.addEventListener('pageshow', (event) => {
  if (event.persisted) startMotion();
});
startMotion();
