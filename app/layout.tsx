import './globals.css'
import { ReactNode } from 'react'
import { Inter, Quicksand } from "next/font/google";
import Header from './components/Header'
import Footer from './components/Footer'
import Doodles from './components/Doodles'

// Fonts laden
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: 'Tamara Sins',
  description: 'Tamara Sins - Webentwicklerin & UI/UX-Designerin',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className="bg-[#FDE8C4] font-inter text-sm leading-[25px] m-0 p-4 flex flex-col items-center sm:justify-center min-h-screen">
        <Header />
        <main className="bg-white/70 rounded-xl shadow-md max-w-[1000px] w-full h-[80vh] sm:h-[50vh] overflow-y-auto flex flex-col justify-start gap-4 p-4 sm:gap-6 sm:p-8 z-10">
          {children}
        </main>
        <Footer />
        <Doodles />
      </body>
    </html>
  )
}

