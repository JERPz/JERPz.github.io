/**
 * Pixel-art sprite definitions.
 *
 * Each sprite is a grid of characters mapped to a palette. `.` is transparent.
 * Keeping the art as text makes it editable without an image editor and keeps
 * the rendered output as crisp SVG rectangles.
 */

const OUTLINE = '#05061a';

/** Shared palette for the hero turnaround frames. */
const HERO_PALETTE = {
    K: OUTLINE,
    H: '#3a2416', // hair
    S: '#f4b183', // skin
    M: '#b3312f', // mouth
    W: '#1b1c33', // band tee
    R: '#ff2d55', // tee print (red)
    I: '#f6f7ff', // tee print (white)
    J: '#5a79c9', // baggy jeans
    N: '#3f5aa0', // jeans shade / pockets
    V: '#22243f', // sneaker canvas
    A: '#f0f2ff'  // sneaker sole + side stripe
};

/** Flips a sprite horizontally — used for the fourth turnaround frame. */
const mirrorSprite = (sprite) => ({
    palette: sprite.palette,
    rows: sprite.rows.map((row) => [...row].reverse().join(''))
});

/** 16x20 — facing the camera */
const heroFront = {
    palette: HERO_PALETTE,
    rows: [
        '.....KKKKKK.....',
        '....KHHHHHHK....',
        '...KHHHHHHHHK...',
        '...KHHHHHHHHK...',
        '...KHSSSSSSHK...',
        '...KSSKSSKSSK...',
        '...KSSSSSSSSK...',
        '...KSSSMMSSSK...',
        '....KSSSSSSK....',
        '....KKSSSSKK....',
        '..KWWWWWWWWWWK..',
        '..KWWRRIIRRWWK..',
        '..KWWRIIIIRWWK..',
        '.KSKWWWWWWWWKSK.',
        '..KJJJJJJJJJJK..',
        '..KJJJJJJJJJJK..',
        '..KJJJJKKJJJJK..',
        '.KJJJJJKKJJJJJK.',
        '.KAVVVK..KVVVAK.',
        '.KAAAAK..KAAAAK.'
    ]
};

/** 16x20 — profile, facing right (mirrored for the fourth frame) */
const heroSide = {
    palette: HERO_PALETTE,
    rows: [
        '.....KKKKKK.....',
        '....KHHHHHHK....',
        '...KHHHHHHHHK...',
        '...KHHHHHHHHK...',
        '...KHHHSSSSHK...',
        '...KHHSSKSSSK...',
        '...KHHSSSSSSK...',
        '...KHHSSSMMSK...',
        '....KHSSSSSK....',
        '....KKSSSKK.....',
        '...KWWWWWWWWK...',
        '...KWWRRWWWWK...',
        '...KWWWWWWWWK...',
        '...KWWWWWWKSK...',
        '...KJJJJJJJJK...',
        '...KJJJJJJJJK...',
        '...KJJJJJJJJK...',
        '..KJJJJJJJJJK...',
        '..KAVVVVVVK.....',
        '..KAAAAAAAK.....'
    ]
};

/** 16x20 — back view, band print across the shoulders */
const heroBack = {
    palette: HERO_PALETTE,
    rows: [
        '.....KKKKKK.....',
        '....KHHHHHHK....',
        '...KHHHHHHHHK...',
        '...KHHHHHHHHK...',
        '...KHHHHHHHHK...',
        '...KHHHHHHHHK...',
        '...KHHHHHHHHK...',
        '....KHHHHHHK....',
        '.....KSSSSK.....',
        '....KKSSSSKK....',
        '..KWWWWWWWWWWK..',
        '..KWWIIIIIIWWK..',
        '..KWWWRRRRWWWK..',
        '.KSKWWWWWWWWKSK.',
        '..KJNJJJJJJNJK..',
        '..KJJJJJJJJJJK..',
        '..KJJJJKKJJJJK..',
        '.KJJJJJKKJJJJJK.',
        '.KVVVVK..KVVVVK.',
        '.KAAAAK..KAAAAK.'
    ]
};

export const SPRITES = {
    /** turnaround frames, in loop order: front → right → back → left */
    heroFront,
    heroSide,
    heroBack,
    heroSideFlip: mirrorSprite(heroSide),

    /** kept as the single-frame fallback */
    hero: heroFront,

    /** 10x10 coin */
    coin: {
        palette: {
            K: OUTLINE,
            G: '#c88a00',
            Y: '#ffcc00',
            W: '#fff3a8'
        },
        rows: [
            '...KKKK...',
            '.KKGGGGKK.',
            'KGGYYYYGGK',
            'KGYYWWYYGK',
            'KGYWWWWYGK',
            'KGYWWWWYGK',
            'KGYYWWYYGK',
            'KGGYYYYGGK',
            '.KKGGGGKK.',
            '...KKKK...'
        ]
    },

    /** 8x7 life heart */
    heart: {
        palette: {
            K: OUTLINE,
            R: '#ff2d55',
            W: '#ff9db0'
        },
        rows: [
            '.KK..KK.',
            'KWRKKRRK',
            'KWRRRRRK',
            'KRRRRRRK',
            '.KRRRRK.',
            '..KRRK..',
            '...KK...'
        ]
    },

    /** 7x7 gem */
    gem: {
        palette: {
            K: OUTLINE,
            Y: '#3ee9ff'
        },
        rows: [
            '...K...',
            '..KYK..',
            '.KYYYK.',
            'KYYYYYK',
            '.KYYYK.',
            '..KYK..',
            '...K...'
        ]
    }
};
