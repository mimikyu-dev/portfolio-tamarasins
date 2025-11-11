"use client";

export default function Footer() {
  return (
    <footer className="text-center py-10 bg-[#FFD6E0]/60 text-[#3B2E2A] border-t border-[#EAD9D3]/60 mt-16">
      <p>© {new Date().getFullYear()} Tamara Sins — Designed & Built with 💖</p>
      <div className="flex justify-center gap-4 mt-3 text-sm">
        <a
          href="https://github.com/mimikyu-dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <a
          href="mailto:hallo@tamarasins.de"
          className="hover:underline"
        >
          E-Mail
        </a>
        <a
          href="https://www.linkedin.com/in/tamara-sins-62a8a9368"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
