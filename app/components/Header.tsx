import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-100 p-4 shadow-md">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">Tamara Sins</Link>
        <div className="space-x-4">
          <Link href="/about">Über mich</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Kontakt</Link>
        </div>
      </nav>
    </header>
  );
}