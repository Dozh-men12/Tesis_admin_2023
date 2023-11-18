/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        times: ['"Times New Roman"'],
        'primary': ['Quicksand', 'sans-serif'],
      },
      colors: {
        'blue-dark': '#384c97',
        'blue-light': '#1bb0ec',
        'gray-light': '#7b868a',
        'gray-dark': '#5c6264',
        'aquamarine': '#C1F6ED',
        'primary': '#2EAF7D',
        // 'gradient-blue': 'rgb(56,76,151) to rgb(27,176,236)'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1.15rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}