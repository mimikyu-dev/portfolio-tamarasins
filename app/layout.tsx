import type { Metadata } from "next";
import { ReactNode } from 'react'
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';

/*interface RootLayoutProps {
  children: ReactNode
}

export const metadata: Metadata = {
  title: "Tamara\'s Portfolio",
  description: "Portfolio von Tamara Sins – Webentwicklerin",
};*/

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={"antialiased bg-white text-black"}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
