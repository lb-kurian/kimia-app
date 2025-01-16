import type { Config } from "tailwindcss";

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3ECF8E',
        'primary-dark': '#173154',
        'text-dark': '#1a202c',

        // primary: '#0070f3',
        // 'primary-dark': '#0050a3',
        'kmia-blue': '#038BAF',
        'kmia-dark-blue': '#173154',
        'kmia-orange': '#F57618',
      },
      fontFamily: {
        'gugi': ['var(--font-gugi)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
