import './globals.css'
import { Inter, Niconne } from 'next/font/google'
import NavBar from './navbar'
import Footer from './footer'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const niconne = Niconne({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-niconne',
  display: 'swap',
})

export const metadata = {
  title: 'Rewriting Narratives',
  description: 'A place to learn about the power of rewriting narratives.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${niconne.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
