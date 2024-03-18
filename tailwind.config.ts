import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  darkMode: ['class'],
  content: ['components/**/*.{js,ts,jsx,tsx,mdx}', 'app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        text: 'var(--text)',
        title: 'var(--title)',
        link: 'var(--link)',
        bg: 'var(--bg)'
      },
      backgroundImage: {
        gradient: 'linear-gradient(45deg, var(--text), var(--text))',
        gradientActive: 'linear-gradient(45deg, var(--pink), var(--purple))'
      }
    }
  },
  plugins: [typography]
}
export default config
