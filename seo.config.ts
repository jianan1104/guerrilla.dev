import type { Metadata } from 'next'

const defineMetadata = <T extends Metadata>(metadata: T) => metadata

const seoConfig = defineMetadata({
  metadataBase: new URL('https://guerrilla.dev'),
  title: {
    template: '%s - Guerrilla SDK',
    default:
      'Guerrilla SDK - Build automation testing with ease using Guerrilla SDK'
  },
  description: 'Build automation testing with ease using Guerrilla SDK',
  themeColor: '#00878a',
  openGraph: {
    images: '/og-image.png',
    url: 'https://guerrilla.dev'
  },
  manifest: '/site.webmanifest',
  icons: [
    { rel: 'icon', url: '/favicon.ico' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
    { rel: 'mask-icon', url: '/favicon.ico' },
    { rel: 'image/x-icon', url: '/favicon.ico' }
  ],
  twitter: {
    site: '@panda__css',
    creator: '@thesegunadebayo'
  }
})

export default seoConfig
