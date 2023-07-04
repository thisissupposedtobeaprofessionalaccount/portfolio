
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'Portfolio Hugo Marin',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/icon.ico',
    },
  ],
}
//className={inter.className}
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {children}
    </html>
  )
}
