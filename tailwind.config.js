/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ['Inter', 'sans-serif'],
                asdfgfgrdfrtvu: ['Tilt Prism', 'sans-serif'],
                play: ['Play', 'sans-serif'],
                golos: ['Golos Text', 'sans-serif'],
            },
            keyframes: {
                bounceIn: {
                    '0%': { transform: 'scale(0.8)', opacity: '0' },
                    '50%': { transform: 'scale(1.1)', opacity: '0.7' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                zoomIn: {
                    '0%': { transform: 'scale(0.5)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                zoomOut: {
                    '0%': { transform: 'scale(1)', opacity: '1' },
                    '100%': { transform: 'scale(0.5)', opacity: '0' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
            },
            animation: {
                bounceIn: 'bounceIn 1s ease-in-out',
                zoomIn: 'zoomIn 1s ease-in-out',
                zoomOut: 'zoomOut 1s ease-in-out',
                fadeIn: 'fadeIn 1s ease-in-out',
            },
        },
    },
};

export default tailwindConfig;