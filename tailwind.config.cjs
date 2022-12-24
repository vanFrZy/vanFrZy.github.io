const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				polarnight: '#434C5E',
				polarnightdark: '#2E3440',
				snowbright: '#ECEFF4',
				snow: 'E5E9F0',
				snowdark: '#D8DEE9'
			},
			fontFamily: {
				sans: ['Gemunu Libre', 'sans-serif']
			},
			fontSize: {
				'10xl': '12vh'
			}
		}
	},

	plugins: [require('flowbite/plugin')],
	darkMode: 'class'
};

module.exports = config;
