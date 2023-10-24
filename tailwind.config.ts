import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'lare-media': '#3B82F6',
        'lare-media-cover': '#3B82F6',
      },
    }
  },
  plugins: [],
} satisfies Config