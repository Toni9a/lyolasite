/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-pink': '#E91E63',
        'primary-pink-light': '#FCE4EC',
        'primary-pink-dark': '#C2185B',
        'accent-gold': '#D4AF37',
        'accent-gold-light': '#F4E5B8',
        'neutral-cream': '#FDFBF7',
        'neutral-cream-dark': '#F5F1E8',
        'neutral-charcoal': '#2C2C2C',
        'neutral-charcoal-light': '#4A4A4A',
      },
    },
  },
  plugins: [],
}
