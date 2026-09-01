/**
 * Renders text-grid sprites (see sprites.js) into inline SVG.
 *
 * Consecutive pixels of the same colour on a row are merged into a single
 * <rect>, which keeps the markup small without losing the hard pixel edges.
 */

import { SPRITES } from './sprites.js';

const SVG_NS = 'http://www.w3.org/2000/svg';

/**
 * @param {string} name key in SPRITES
 * @param {number} scale rendered device pixels per art pixel
 * @returns {SVGElement|null}
 */
export function createSprite(name, scale = 4) {
    const sprite = SPRITES[name];
    if (!sprite) return null;

    const rows = sprite.rows;
    const height = rows.length;
    const width = rows[0].length;

    const svg = document.createElementNS(SVG_NS, 'svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', String(width * scale));
    svg.setAttribute('height', String(height * scale));
    svg.setAttribute('shape-rendering', 'crispEdges');
    svg.setAttribute('focusable', 'false');
    svg.setAttribute('aria-hidden', 'true');

    rows.forEach((row, y) => {
        let x = 0;
        while (x < row.length) {
            const char = row[x];
            let run = 1;
            while (row[x + run] === char) run += 1;

            const fill = sprite.palette[char];
            if (fill) {
                const rect = document.createElementNS(SVG_NS, 'rect');
                rect.setAttribute('x', String(x));
                rect.setAttribute('y', String(y));
                rect.setAttribute('width', String(run));
                rect.setAttribute('height', '1');
                rect.setAttribute('fill', fill);
                svg.appendChild(rect);
            }

            x += run;
        }
    });

    return svg;
}

/**
 * Mounts every `[data-sprite]` placeholder found in the document.
 * `data-scale` optionally overrides the pixel size.
 */
export function mountSprites(root = document) {
    root.querySelectorAll('[data-sprite]').forEach((host) => {
        const svg = createSprite(host.dataset.sprite, Number(host.dataset.scale) || 4);
        if (svg) {
            host.replaceChildren(svg);
        }
    });
}

/** Fills a container with `count` heart sprites (HUD lives display). */
export function mountLives(host, count = 3, scale = 2) {
    if (!host) return;
    const frag = document.createDocumentFragment();
    for (let i = 0; i < count; i += 1) {
        const svg = createSprite('heart', scale);
        if (svg) frag.appendChild(svg);
    }
    host.replaceChildren(frag);
}
