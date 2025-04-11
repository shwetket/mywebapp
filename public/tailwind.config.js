const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}', // Adjust the paths to match your project structure
    ],
    theme: {
        extend: {
            colors: {
                // Core Brand Colors
                'brand-primary': 'var(--brand-primary)',
                'brand-secondary': 'var(--brand-secondary)',
                'brand-accent': 'var(--brand-accent)',

                // Light Mode Colors
                background: 'var(--background)',
                surface: 'var(--surface)',
                'surface-alt': 'var(--surface-alt)',
                'text-primary': 'var(--text-primary)',
                'text-secondary': 'var(--text-secondary)',
                'text-muted': 'var(--text-muted)',
                border: 'var(--border)',
                'border-light': 'var(--border-light)',

                // Interactive Elements - Light Mode
                'primary-button': 'var(--primary-button)',
                'primary-button-hover': 'var(--primary-button-hover)',
                'primary-button-text': 'var(--primary-button-text)',
                'secondary-button': 'var(--secondary-button)',
                'secondary-button-hover': 'var(--secondary-button-hover)',
                'secondary-button-text': 'var(--secondary-button-text)',
                'accent-button': 'var(--accent-button)',
                'accent-button-hover': 'var(--accent-button-hover)',
                'accent-button-text': 'var(--accent-button-text)',
                link: 'var(--link)',
                'link-hover': 'var(--link-hover)',

                // Feedback Colors
                success: 'var(--success)',
                warning: 'var(--warning)',
                error: 'var(--error)',
                info: 'var(--info)',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                ':root': {
                    '--brand-primary': theme('colors.brand-primary'),
                    '--brand-secondary': theme('colors.brand-secondary'),
                    '--brand-accent': theme('colors.brand-accent'),
                },
            });
        }),
    ],
};