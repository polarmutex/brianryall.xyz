const typography = require('windicss/plugin/typography');

module.exports = {
    darkMode: 'class',
	theme: {
        colors: {
            dark: {
                '0-h': '#1d2021',
                '0':   '#282828',
                '0-s': '#32302f',
                '1':   '#3c3836',
                '2':   '#504945',
                '3':   '#665c54',
                '4':   '#7c6f64',
            },
            light: {
                '0-h': '#f9f5d7',
                '0':   '#fbf1c7',
                '0-s': '#f2e5bc',
                '1':   '#ebdbb2',
                '2':   '#d5c4a1',
                '3':   '#bdae93',
                '4':   '#a89984',
            },
            gray: '#928374',
            red: {
                'bright':  '#fb4934',
                'neutral': '#cc241d',
                'faded':   '#9d0006',
            },
            green: {
                'bright':  '#b8bb26',
                'neutral': '#98971a',
                'faded':   '#79740e',
            },
            yellow: {
                'bright':  '#fabd2f',
                'neutral': '#d79921',
                'faded':   '#b57614',
            },
            blue: {
                'bright':  '#83a598',
                'neutral': '#458588',
                'faded':   '#076678',
            },
            purple: {
                'bright':  '#d3869b',
                'neutral': '#b16286',
                'faded':   '#8f3f71',
            },
            aqua: {
                'bright':  '#8ec07c',
                'neutral': '#689d6a',
                'faded':   '#427b58',
            },
            orange: {
                'bright':  '#fe8019',
                'neutral': '#d65d0e',
                'faded':   '#af3a03',
            },
        },
        extend: {
        }
    },
	variants: {},
	plugins: [
        typography,
    ],
};
