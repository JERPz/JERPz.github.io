/**
 * Mobile nav panel: toggle button, close on link click / Escape / outside
 * click, and reset when the viewport grows back to the desktop layout.
 */

const DESKTOP_QUERY = '(min-width: 901px)';

export function initNav() {
    const toggle = document.querySelector('[data-nav-toggle]');
    const nav = document.getElementById('primary-nav');
    if (!toggle || !nav) return;

    const setOpen = (open) => {
        nav.classList.toggle('is-open', open);
        toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', () => {
        setOpen(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', (event) => {
        if (event.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && nav.classList.contains('is-open')) {
            setOpen(false);
            toggle.focus();
        }
    });

    document.addEventListener('click', (event) => {
        if (!nav.classList.contains('is-open')) return;
        if (nav.contains(event.target) || toggle.contains(event.target)) return;
        setOpen(false);
    });

    const desktop = window.matchMedia(DESKTOP_QUERY);
    const sync = (event) => {
        if (event.matches) setOpen(false);
    };
    desktop.addEventListener?.('change', sync);
}
