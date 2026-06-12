import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '600', '700', '800'],
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-opensans',
  weight: ['400', '500', '600'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | ANSPL – Electrical & Automation',
    default: 'ANSPL – One Stop Solution for Electrical & Automation Projects',
  },
  description:
    'Automation Network & Services Pvt. Ltd. — Turnkey electrical & industrial automation solutions: VFD drives, PLC/SCADA, panel manufacturing, energy audit and AMC services across India.',
  keywords: ['VFD drives', 'PLC automation', 'SCADA', 'panel manufacturing', 'electrical automation', 'Kolkata', 'East India'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/919830505000"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg shadow-black/30 flex items-center justify-center bg-[#25D366] hover:bg-[#1ebe5d] transition-colors"
        >
          <svg viewBox="0 0 32 32" fill="white" className="w-7 h-7" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.003 3C9.376 3 4 8.373 4 14.997c0 2.17.586 4.2 1.604 5.95L4 29l8.267-1.578A12.916 12.916 0 0 0 16.003 28C22.627 28 28 22.627 28 16.003 28 9.376 22.627 3 16.003 3zm0 2c6.068 0 11 4.932 11 10.997C27.003 22.065 22.07 27 16.003 27a10.91 10.91 0 0 1-5.672-1.578l-.397-.238-4.906.937.977-4.777-.258-.41A10.927 10.927 0 0 1 5 14.997C5 8.93 9.936 5 16.003 5zm-3.27 5.5c-.22 0-.578.082-.882.41-.303.33-1.157 1.13-1.157 2.754s1.184 3.194 1.35 3.415c.165.22 2.315 3.538 5.62 4.823 2.784 1.08 3.35.866 3.955.812.606-.055 1.956-.8 2.232-1.572.275-.77.275-1.432.193-1.57-.083-.138-.303-.22-.633-.386-.33-.165-1.956-.966-2.26-1.075-.303-.11-.524-.165-.744.165-.22.33-.854 1.075-1.047 1.295-.192.22-.385.247-.715.083-.33-.165-1.393-.514-2.654-1.637-.98-.875-1.642-1.954-1.834-2.285-.193-.33-.02-.508.144-.672.148-.147.33-.385.495-.577.165-.193.22-.33.33-.55.11-.22.055-.413-.027-.578-.083-.165-.73-1.795-.998-2.455-.26-.633-.53-.55-.744-.56-.193-.01-.413-.013-.633-.013z"/>
          </svg>
        </a>
      </body>
    </html>
  )
}
