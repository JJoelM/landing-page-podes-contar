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
          blue: '#0660AE',
          'blue-dark': '#022848',
          'blue-light': '#2A7BC4',
          orange: '#F38739',
          'orange-hover': '#D97226',
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
        'soft': '0 8px 30px rgba(6, 96, 174, 0.08)',
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
        'btn': '0 4px 14px 0 rgba(243, 135, 57, 0.39)',
        'btn-hover': '0 6px 20px rgba(6, 96, 174, 0.35)',
      }
    },
  },
  plugins: [],
}
