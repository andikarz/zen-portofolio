import './globals.css'
import { Inter, Noto_Serif_JP } from 'next/font/google'
import Navbar from '@/components/Navbar'


const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const notoSerifJP = Noto_Serif_JP({
  weight: ['400', '500', '600', '700', '900'],
  subsets: ['latin'],
  variable: '--font-noto-serif',
})


export const metadata = {
  title: 'Andika R | AI Engineer',
  description: 'AI Engineer specializing in Computer Vision and NLP',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${notoSerifJP.variable} font-sans antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}