import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import { UserContextProvider } from '../features/user/UserContextProvider';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import { ReactQueryClientProvider } from '@/features/user/query/QueryClientProvider';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryClientProvider>
      <UserContextProvider>
        <html lang="en">
          <HamburgerMenu />
          <body className={inter.className}>
            <div>
              {children}
            </div> 
            </body>
        </html>
      </UserContextProvider>
    </ReactQueryClientProvider>
  )
}
