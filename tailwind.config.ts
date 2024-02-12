import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/containers/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#CBF34D',
        orange: '#F3894D',
        aqua: '#4DD5F3',
        blue: '#4D5EF3',
        purple: '#BE4DF3',
        black: '#212121',
        gray: {
          900: '#333333',
          800: '#666666',
          700: '#999999',
          600: '#CCCCCC',
        },
        white: '#FDFDFD',
      },
      fontSize: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.75rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
        '7xl': '3.5rem',
        '8xl': '4rem',
        '9xl': '5rem',
      },
      backgroundImage: {
        banner: "url('/images/Banner.jpg')",
        'banner-mobile': "url('/images/MobileBanner.jpg')",
        contact: "url('/images/Contact.jpg')",
        'contact-mobile': "url('/images/MobileContact.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
