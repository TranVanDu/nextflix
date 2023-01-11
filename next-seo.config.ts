import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  defaultTitle:
    'Nextflix - A Simple Movie App Built With ReactJs, NextJs and using TMDB Api',
  description:
    'The ultimate destination for movie lovers. Built with ReactJs, NextJs and using the TMDB API, our app offers an extensive collection of the latest films, top-rated movies, and newest releases. Intuitive navigation, fast loading speeds and a user-friendly interface.',
  openGraph: {
    type: 'website',
    siteName: 'NextFlix',
    url: 'https://nextflix-app.vercel.app/',
    images: [
      {
        url: 'https://nextflix-app.vercel.app/assets/open-graph/nextflix-app-desktop.png',
        alt: 'disney+ page',
        width: 1200,
        height: 630
      }
    ],
    title: 'A Simple Movie App Built With ReactJs, NextJs and using TMDB Api',
    description:
      'The ultimate destination for movie lovers. Built with ReactJs, NextJs and using the TMDB API, our app offers an extensive collection of the latest films, top-rated movies, and newest releases. Intuitive navigation, fast loading speeds and a user-friendly interface.'
  },
  twitter: {
    handle: '@devMiqueias',
    cardType: 'summary_large_image'
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/assets/favicon/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/assets/favicon/apple-touch-icon.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/assets/favicon/favicon-32x32.png'
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/assets/favicon/favicon-16x16.png'
    }
  ],
  themeColor: 'dark'
}

export default config
