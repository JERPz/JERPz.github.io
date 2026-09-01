/**
 * HUD behaviour: scroll progress bar, arcade score counter and the
 * "current level" highlight in the nav.
 */

import { onScroll } from './scroll.js';
import { mountLives } from './pixel-art.js';

const MAX_SCORE = 87650;

const pad = (n) => String(n).padStart(6, '0');

export function initHud() {
    const progressBar = document.querySelector('[data-progress]');
    const scoreEl = document.querySelector('[data-score]');
    const links = Array.from(document.querySelectorAll('[data-nav-link]'));

    mountLives(document.querySelector('[data-hearts]'), 3, 2);

    const targets = links
        .map((link) => {
            const id = link.getAttribute('href') || '';
            const section = id.startsWith('#') ? document.querySelector(id) : null;
            return section ? { link, section } : null;
        })
        .filter(Boolean);

    let lastActive = null;

    onScroll(({ y, progress }) => {
        if (progressBar) {
            progressBar.style.width = `${(progress * 100).toFixed(2)}%`;
        }

        if (scoreEl) {
            const score = Math.round((progress * MAX_SCORE) / 10) * 10;
            scoreEl.textContent = pad(score);
        }

        if (!targets.length) return;

        const line = y + (window.innerHeight * 0.35);
        let current = targets[0];
        targets.forEach((item) => {
            if (item.section.offsetTop <= line) current = item;
        });

        if (current !== lastActive) {
            targets.forEach(({ link }) => link.classList.remove('is-active'));
            current.link.classList.add('is-active');
            lastActive = current;
        }
    });
}
