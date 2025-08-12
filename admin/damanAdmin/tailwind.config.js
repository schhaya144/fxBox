/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        
        darkSidebar: "#353a40",
        grayCustom: "#dde1e6",
        bodyCustom:"#495057",
        customBlue: '#037bfe',
        customOrange: '#e67f21',
        customRed: '#da3543',
        customPurple: '#8f42ac',
        customGreen:'#27a644',
      },

      boxShadow: {
        custom:
          "0 14px 28px rgba(0, 0, 0, .25), 0 10px 10px rgba(0, 0, 0, .22)",
      },
      
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
