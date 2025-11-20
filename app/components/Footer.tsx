export default function Footer() {
  return (
    <footer className="fixed bottom-4 left-1/2 -translate-x-1/2 text-center text-[#E56D6A] text-sm sm:text-base">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://github.com/tamarasinsE" className="hover:text-highlight transition">GitHub</a>
        <a href="https://www.linkedin.com/in/tamara-sins-62a8a9368" className="hover:text-highlight transition">LinkedIn</a>
        <a href="mailto:hallo@tamarasins.de" className="hover:text-highlight transition">Email</a>
      </div>
      <div className="text-gray-600 text-xs sm:text-sm">
        &copy; {new Date().getFullYear()} © Tamara Sins
      </div>
    </footer>
  )
}
