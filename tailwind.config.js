/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'gray-200': '#E6EBEF',
				'gray-300': '#CCCDD8',
				'gray-400': '#8A99A5',
				'teal-600': '#1CBCC3',
				'blue-800': '#005AD2',
				'blue-950': '#001965',
				'indigo-950': '#292C4D',
				'amber-500': '#F5C84E',
				'cyan-600': '#89E4D5',
				'pink-600': '#D6226C'
			}
		}
	},
	plugins: []
};
