import { Inter } from 'next/font/google'
import '@/app/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'StayNgalam',
  description: 'Porperty Website Of Malang Raya',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          <main className='container mx-auto'>
            <div className='flex items-start justify-center min-h-screen'>
              <div className='mt-24'>{children}</div>
            </div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
}
