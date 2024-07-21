module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        function ({ addUtilities }) {
            const newUtilities = {
                '.blur-light': {
                    filter: 'blur(0.5px)',
                },
            };
            addUtilities(newUtilities, ['responsive']);
        },
    ],
}
