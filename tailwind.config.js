/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'gray-300': '#CCCDD8',
				'blue-800': '#005AD2',
				'blue-950': '#001965',
				'indigo-950': '#292C4D',
				'amber-500': '#F5C84E',
			},
		}
	},
	plugins: []
};
