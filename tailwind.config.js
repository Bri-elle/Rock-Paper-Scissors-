/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
				Philosopher: ["Philosopher", "sans-serif"],
				Quicksand: ["Quicksand", "sans-serif"],
			},
		},
	},
	plugins: [],
};
