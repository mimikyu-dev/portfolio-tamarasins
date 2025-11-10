import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900 p-8">
      <h1 className="text-4xl font-bold mb-2">Tamara Sins</h1>
      <h2 className="text-xl mb-6">UX/UI Design & Webkonzeption</h2>
      <p className="max-w-md text-center">
        Ich gestalte nutzerzentrierte digitale Erlebnisse – mit Fokus auf
        Ästhetik, Struktur und Usability. Sieh dir meine Projekte an ↓
      </p>
      <a
        href="/portfolio"
        className="mt-6 rounded-full bg-black text-white px-6 py-2 hover:bg-gray-800"
      >
        Zu den Projekten
      </a>
    </main>
  );
}
