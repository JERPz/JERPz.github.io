/**
 * Drifts the starfield layer slower than the page for a subtle depth effect.
 * Skipped entirely when the user prefers reduced motion.
 */

import { onScroll, prefersReducedMotion } from './scroll.js';

export function initParallax() {
    const sky = document.querySelector('[data-parallax]');
    if (!sky || prefersReducedMotion()) return;

    onScroll(({ y }) => {
        sky.style.setProperty('--sky-y', `${(-y * 0.12).toFixed(1)}px`);
    });
}
