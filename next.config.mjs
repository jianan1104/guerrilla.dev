import nextra from 'nextra'

const withNextra = nextra({
  // Tell Nextra to use the custom theme as the layout
  theme: './src/index.tsx',
  themeConfig: './theme.config.tsx',
  defaultShowCopyCode: true,
  flexsearch: {
    codeblocks: true
  },
  codeHighlight: true
})

export default withNextra({
  async redirects() {
    return [
      {
        source: '/(docs|docs/getting-started)',
        destination: '/docs/overview/getting-started',
        permanent: true
      },
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com']
  },
  // i18n: {
  //   locales: ['en-US', 'zh-TW'],
  //   defaultLocale: 'en-US'
  // }
})

process.on('unhandledRejection', error => {
  console.log('unhandledRejection', error)
})
