import type { Metadata } from 'next'
import Head from 'next/head'
import './globals.css'
import { Navbar, Footer } from '@/components'


export const metadata: Metadata = {
  title: 'Car Hub',
  description: 'Discover the best car in the world',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <Head>
        {/* <title>{metadata.title}</title> */}
        {/* <meta name="description" content={metadata.description} /> */}
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>

      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
