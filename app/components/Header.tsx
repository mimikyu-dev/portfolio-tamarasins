'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  return (
    <header className="bg-[#fedfaa]/70 rounded-[28px] shadow-md w-full max-w-[800px] px-4 py-4 sm:px-5 sm:py-3 flex justify-between items-center text-[#E56D6A] mb-4 z-10">
        <nav className="flex gap-6 sm:gap-12 ml-auto text-sm sm:text-base leading-[1.7rem]">
          <a href="/" className="hover:underline whitespace-nowrap">home</a>
          <a href="/about" className="hover:underline whitespace-nowrap">über mich</a>
          <a href="/portfolio" className="hover:underline whitespace-nowrap">portfolio</a>
          <a href="/contact" className="hover:underline whitespace-nowrap">kontakt</a>
        </nav>
    </header>
  )
}
