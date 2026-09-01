/**
 * Konami code easter egg: ↑ ↑ ↓ ↓ ← → ← → B A toggles "cheat mode",
 * which shifts the palette through a hue cycle.
 */

const CODE = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
];

export function initKonami() {
    const toast = document.querySelector('[data-cheat-toast]');
    let index = 0;
    let timer = null;

    const announce = (text) => {
        if (!toast) return;
        toast.textContent = text;
        toast.hidden = false;
        window.clearTimeout(timer);
        timer = window.setTimeout(() => {
            toast.hidden = true;
        }, 2400);
    };

    document.addEventListener('keydown', (event) => {
        const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;

        if (key !== CODE[index]) {
            index = key === CODE[0] ? 1 : 0;
            return;
        }

        index += 1;
        if (index < CODE.length) return;

        index = 0;
        const on = document.body.classList.toggle('is-cheat');
        announce(on ? 'Cheat mode enabled' : 'Cheat mode disabled');
    });
}
