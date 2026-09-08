/**
 * Bookshelf (#tools): the note panel beside the shelf follows whichever book
 * the pointer or keyboard is on. Copy lives in data-book-* attributes on each
 * spine, so adding a tool means adding one <a> — no changes here.
 *
 * The panel is already filled in for the first book in the markup, so without
 * JS the section still reads correctly; the spines are plain links either way.
 */

const CHIP_CLASS = 'chip chip--cyan';

export function initShelf() {
    const books = Array.from(document.querySelectorAll('[data-book]'));
    if (books.length < 2) return;

    const out = {};
    document.querySelectorAll('[data-book-out]').forEach((el) => {
        out[el.dataset.bookOut] = el;
    });
    if (!out.title) return;

    const show = (book) => {
        if (book.classList.contains('is-current')) return;

        books.forEach((item) => item.classList.toggle('is-current', item === book));

        const { bookKind, bookTitle, bookDesc, bookTags, bookSource } = book.dataset;

        if (out.kind) out.kind.textContent = bookKind || '';
        out.title.textContent = bookTitle || '';
        if (out.desc) out.desc.textContent = bookDesc || '';
        if (out.launch) out.launch.href = book.href;
        if (out.source) out.source.href = bookSource || book.href;

        if (out.tags) {
            out.tags.replaceChildren(
                ...(bookTags || '')
                    .split(',')
                    .map((tag) => tag.trim())
                    .filter(Boolean)
                    .map((tag) => {
                        const li = document.createElement('li');
                        li.className = CHIP_CLASS;
                        li.textContent = tag;
                        return li;
                    })
            );
        }
    };

    books.forEach((book) => {
        book.addEventListener('pointerenter', () => show(book));
        book.addEventListener('focus', () => show(book));
    });
}
