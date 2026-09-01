/**
 * Pixel-art sprite definitions.
 *
 * Each sprite is a grid of characters mapped to a palette. `.` is transparent.
 * Keeping the art as text makes it editable without an image editor and keeps
 * the rendered output as crisp SVG rectangles.
 */

const OUTLINE = '#05061a';

export const SPRITES = {
    /** 16x16 developer character */
    hero: {
        palette: {
            K: OUTLINE,
            H: '#4b2b12', // hair
            S: '#f4b183', // skin
            M: '#b3312f', // mouth
            T: '#3ee9ff', // shirt
            P: '#2a3ba0', // trousers
            B: '#7a3b18'  // boots
        },
        rows: [
            '......KKKK......',
            '.....KHHHHK.....',
            '....KHHHHHHK....',
            '....KHSSSSHK....',
            '....KSSSSSSK....',
            '....KSKSSKSK....',
            '....KSSSSSSK....',
            '....KSSMMSSK....',
            '.....KSSSSK.....',
            '...KKKTTTTKKK...',
            '..KSKTTTTTTKSK..',
            '..KSKTTTTTTKSK..',
            '..KKKTTTTTTKKK..',
            '....KPPPPPPK....',
            '....KPPKKPPK....',
            '...KBBK..KBBK...'
        ]
    },

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
