const production = !process.env.ROLLUP_WATCH;

module.exports = {
    purge: [],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'current',
            darkgrey:   '#282828',
            red:        '#cc241d',
            green:      '#98971a',
            yellow:     '#d79921',
            blue:       '#458588',
            purple:     '#b16286',
            aqua:       '#689d6a',
            grey:       '#928374',
            orange:     '#d65d0e',
        },
    },
    purge: {
        content: [
            "./src/**/*.svelte",
            // may also want to include base index.html
        ],
        options: {
            keyframes: true,
        },
        enabled: production // disable purge in dev
    },
}
