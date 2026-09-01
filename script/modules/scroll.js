/**
 * Single passive scroll listener shared by every feature that reacts to
 * scrolling, batched into one requestAnimationFrame per frame.
 */

const subscribers = new Set();
let ticking = false;

function flush() {
    ticking = false;
    const y = window.scrollY || 0;
    const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.min(1, Math.max(0, y / max));
    subscribers.forEach((fn) => fn({ y, progress, max }));
}

function schedule() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(flush);
}

/**
 * @param {(state: {y:number, progress:number, max:number}) => void} fn
 * @returns {() => void} unsubscribe
 */
export function onScroll(fn) {
    subscribers.add(fn);
    if (subscribers.size === 1) {
        window.addEventListener('scroll', schedule, { passive: true });
        window.addEventListener('resize', schedule, { passive: true });
    }
    schedule();
    return () => subscribers.delete(fn);
}

export const prefersReducedMotion = () =>
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
