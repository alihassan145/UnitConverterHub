import type { DefaultSeoProps } from 'next-seo';

const config: DefaultSeoProps = {
  titleTemplate: '%s | Unit Converter Hub',
  defaultTitle: 'Unit Converter Hub',
  description:
    'Convert length, weight, temperature, speed, volume, and more with a fast, user-friendly unit converter website.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'http://localhost:3000',
    siteName: 'Unit Converter Hub',
  },
  twitter: { cardType: 'summary_large_image' },
};

export default config;