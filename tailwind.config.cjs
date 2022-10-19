/* eslint-disable global-require */
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            width: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
            },
            maxWidth: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
            },
            minHeight: {
                95: '95%',
                90: '90%',
                85: '85%',
                80: '80%',
                70: '70%',
                60: '60%',
                40: '40%',
                '95v': '95vh',
                '90v': '90vh',
            },
        },
    },
    plugins: [require('@tailwindcss/forms')],
};
