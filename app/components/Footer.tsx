"use client";

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-[#FFFDFB] text-[#3B2E2A] flex flex-col items-center gap-6 border-t border-[#EAD9D3]/40">
      {/* Name / Branding */}
      <h3 className="text-lg md:text-xl font-semibold tracking-wide">
        Tamara Sins
      </h3>

      {/* Links minimalistisch & soft */}
      <div className="flex gap-6 text-sm opacity-80">
        <a
          href="https://github.com/tamarasins"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
        >
          GitHub
        </a>
        <a
          href="mailto:hallo@tamarasins.de"
          className="hover:opacity-100 transition-opacity"
        >
          E-Mail
        </a>
        <a
          href="https://www.linkedin.com/in/tamara-sins-62a8a9368"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-100 transition-opacity"
        >
          LinkedIn
        </a>
      </div>

      {/* dezente Linie */}
      <div className="w-12 h-[1px] bg-[#EAD9D3]/60"></div>

      {/* Copy */}
      <p className="text-xs opacity-60 tracking-wide">
        © {new Date().getFullYear()} Tamara Sins — crafted with love 💖
      </p>
    </footer>
  );
}
