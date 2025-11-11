"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#FFF7F5]/80 backdrop-blur-md z-50 border-b border-[#EAD9D3]/60">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-[#3B2E2A] hover:opacity-80 transition"
        >
          Tamara Sins
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`px-3 py-1 rounded-2xl transition-all ${
                pathname === item.href
                  ? "bg-[#FFD6E0] shadow-md font-semibold"
                  : "hover:bg-[#FFD6E0]/50"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-full bg-[#FFD6E0]/50 hover:bg-[#FFD6E0]/70 transition-all"
        >
          <span className="block w-6 h-0.5 bg-[#3B2E2A] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#3B2E2A] mb-1"></span>
          <span className="block w-6 h-0.5 bg-[#3B2E2A]"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#FFF7F5]/95 shadow-md border-t border-[#EAD9D3]/60"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navItems.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-2xl transition-all ${
                    pathname === item.href
                      ? "bg-[#FFD6E0] shadow-md font-semibold"
                      : "hover:bg-[#FFD6E0]/50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
