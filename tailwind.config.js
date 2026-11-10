/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#133E68',
          'blue-dark': '#0E2D4C',
          'blue-light': '#1C5B96',
          orange: '#EE7B30',
          'orange-hover': '#D9671E',
          'orange-light': '#FDB87E',
          cream: '#FFF7ED',
          'warm-bg': '#FEF6EE',
          peach: '#FDEEE0',
        },
        category: {
          charla: '#F87171',
          'charla-bg': '#FCE7DF',
          exposicion: '#FBBF24',
          'exposicion-bg': '#FEF3C7',
          taller: '#A78BFA',
          'taller-bg': '#EDE9FE',
          grupal: '#4ADE80',
          'grupal-bg': '#DCFCE7',
          recreacion: '#60A5FA',
          'recreacion-bg': '#DBEAFE',
          permanencia: '#86EFAC',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        handwriting: ['Caveat', 'cursive'],
      },
      boxShadow: {
        'soft': '0 8px 30px rgba(19, 62, 104, 0.08)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'btn': '0 4px 14px 0 rgba(238, 123, 48, 0.39)',
        'btn-hover': '0 6px 20px rgba(19, 62, 104, 0.35)',
      }
    },
  },
  plugins: [],
}
