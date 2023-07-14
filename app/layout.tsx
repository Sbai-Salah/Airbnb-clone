import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Modal from './components/modals/Modal'
import RegistreModal from './components/modals/RegisterModal'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Airbnb',
  description: 'Airbnb Clone',
}

const font = Nunito({
  subsets : ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* we can wrap these components with the ClientOnly component */}
        {/* <Modal actionLabel="Submit" title="Hellloooo" isOpen/> */}
        <RegistreModal/>
        <Navbar/>
        {children}</body>
    </html>
  )
}
