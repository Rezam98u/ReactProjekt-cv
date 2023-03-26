/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    searchActive: "class",
    content: [
        "./public/**/*.{html,js,jsx}",
        "./src/**/*.{html,js,jsx}"
    ],
    theme: {
        extend: {},
        screens: {
            'xs': '0px',

            'sm': '600px',
            // => @media (min-width: 640px) { ... }

            'SM': { 'max': '600px' },
            // => @media (max-width: 640px) { ... }


            // 'between_md_sm': { 'max': '700px' },

            'md': '900px',
            // => @media (min-width: 768px) { ... }

            'MD': { 'max': '900px' },
            // => @media (max-width: 768px) { ... }


            'lg': '1200px',
            // => @media (min-width: 1024px) { ... }

            // 'LG': { 'max': '1200px' },
            // => @media (max-width: 1024px) { ... }


            'xl': '1536px',
            // => @media (min-width: 1280px) { ... }

            // 'XL': { max: '1536px'},
            // => @media (max-width: 1536px) { ... }



            '2xl': '1850px',
            // => @media (min-width: 1850px) { ... }
            // 'xs': '0px',

            // '2XL': { max: '1850px'},
            // => @media (max-width: 1850px) { ... }

        }

    },
    plugins: [],
}