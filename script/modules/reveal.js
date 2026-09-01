/**
 * Reveals `.reveal` elements once they scroll into view.
 * Falls back to showing everything when IntersectionObserver is unavailable.
 */

import { prefersReducedMotion } from './scroll.js';

export function initReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    const showAll = () => targets.forEach((el) => el.classList.add('is-visible'));

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
        showAll();
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    targets.forEach((el) => observer.observe(el));
}
