/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        'px-1.25': '0.32rem', // Custom padding for whole body
      },
      fontSize: {
        '11px': '11.73px',
        '11.5px': '12.23px',
        '12px': '12.8px',
        '13px': '13.86px',
        '13.5px': '14.55px',
        '14px': '14.93px',
        '15px': '15.67px',
        '16px': '16px',
        '16.5px': '16.64px',
        '17px': '17.0668px',
        '18px': '18.01px',
        '19px': '19.2px',
        '20px': '20.54px',
        '22px': '22.4px',
      },
      backgroundImage: {
        'crown-text-gradient':
          'linear-gradient(180deg, #fffba9 0%, #fff670 56.13%, #ffd180 100%)',
        'custom-gradient': 'linear-gradient(90deg, #f95959 0%, #ff9a8e 100%)',
        'pupular-button': 'linear-gradient(180deg, #FFBD40 0%, #FF7F3D 100%)',
        'gray-l3': '#cdcfdd',
        'button-gray': 'linear-gradient(90deg, #CCCEDC 15.38%, #CDCFDD 98.73%)',
        invitationBg:
          ' linear-gradient(94deg, #f99937 2.72%, #ff6922 43.54%, #ff8039 98.54%)',
      },
      fontFamily: {
        custom: ['Roboto', 'Inter', 'sans-serif'], // Define your custom font family
        custom2: ['Inter', 'sans-serif'], // Define your custom font family
        bahnschrift: ['Bahnschrift'],
        applebahnschrift: ['Bahnschrift', '-apple-system'],
        inter: ['Inter'],
        Poppins: ['Poppins'],
        roboto: ['Roboto'],
        blinkMacSystemFont: ['BlinkMacSystemFont'],
        appleSystem: ['-apple-system'],
        helveticaNeue: ['Helvetica Neue'],
        helvetica: ['Helvetica'],
        segoeUI: ['Segoe UI'],
        arial: ['Arial'],
        pingFangSC: ['PingFang SC'],
        miui: ['miui'],
        hiraginoSansGB: ['Hiragino Sans GB'],
        microsoftYahei: ['Microsoft Yahei'],
        sansSerif: ['sans-serif'],
        CircularXXWeb: ['CircularXXWeb', 'sans-serif'],
        futura: ['futura'],
      },
      colors: {
        primary: '#3DF3F9',
        orange: '#CE5A3E',
      },
      spacing: {
        8: '2rem', // 8px to rem equivalent
      },
      backgroundColor: {
        primary: '#090F1B',
        secondary: '#3DF3F9',
        neon_light: '#1E3B47',
      },
      borderColor: {
        neon: '#3DF3F9',
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.clip-arrow-left': {
          clipPath: 'polygon(0 0, 100% 50%, 0 100%)',
        },
        '.clip-arrow-right': {
          clipPath: 'polygon(0 50%, 100% 0, 100% 100%)',
        },
      });
    },
  ],
};
