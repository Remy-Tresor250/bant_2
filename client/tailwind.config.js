/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#3775ea",
        moderateBlue: "#064dd1",
        modDarkBlue: "#082e75",
        darkBlue: "#0b1f45",
        veryDarkBlue: "#081223",
        verlightBlack: "#25282c",
        lightBlack: "#1e1f1f",
        black: "#0c0d0d",
        veryLightBlue: "#0ae4e4",
        lightGreen: "#07c05a",
        moderateGreen: "#09c285",
        lightGray: "#dcdcdc",
        modGray: "#747679",
        darkGray: "#a8a8a8",
        modRed: "#d63030",
        modDarkBlue: "#313f51",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
    },
    screens: {
      xs: { max: "480px" },
      xsss: { max: "548px" },
      ss: { max: "620px" },
      sm: { max: "768px" },
      mdsm: { max: "1000px" },
      md: { max: "1060px" },
      lg: { max: "1200px" },
      xl: { max: "1700px" },
    },
  },
  plugins: [],
};
