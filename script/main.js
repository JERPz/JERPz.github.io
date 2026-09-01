/**
 * Entry point. Each feature lives in its own module under script/modules/
 * and fails independently, so a broken piece never takes the page down.
 */

import { mountSprites } from './modules/pixel-art.js';
import { initReveal } from './modules/reveal.js';
import { initHud } from './modules/hud.js';
import { initNav } from './modules/nav.js';
import { initParallax } from './modules/parallax.js';
import { initKonami } from './modules/konami.js';

const features = [
    ['sprites', () => mountSprites()],
    ['reveal', initReveal],
    ['hud', initHud],
    ['nav', initNav],
    ['parallax', initParallax],
    ['konami', initKonami]
];

function boot() {
    features.forEach(([name, init]) => {
        try {
            init();
        } catch (error) {
            console.error(`[jerpz] "${name}" failed to start`, error);
        }
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, { once: true });
} else {
    boot();
}
