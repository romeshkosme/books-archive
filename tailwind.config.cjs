/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"custom-red": "#E63946",
				"custom-off-white": "#F1FAEE",
				"custom-light-blue": "#A8DADC",
				"custom-blue": "#457B9D",
				"custom-dark-blue": "#1D3557",
			},
		},
	},
	plugins: [],
};
