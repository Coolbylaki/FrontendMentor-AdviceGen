/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				// Primary
				lightCyan: "hsl(193, 38%, 86%)",
				neonGreen: "hsl(150, 100%, 66%)",
				// Neutral
				grayishBlue: "hsl(217, 19%, 38%)",
				darkGrayishBlue: "hsl(217, 19%, 24%)",
				darkBlue: "hsl(218, 23%, 16%)",
			},
			screens: {
				pc: "1440px",
				mob: "376px",
			},
			boxShadow: {
				glow: "0 0 1.5rem 1px hsl(150, 100%, 66%)",
			},
		},
	},
	plugins: [],
};
