'use client'

import { useState } from 'react'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function PortfolioDetailPage() {
  const { slug } = useParams()

  // Lightbox
  const [modalImage, setModalImage] = useState<string | null>(null)
  const open = (src: string) => setModalImage(src)
  const close = () => setModalImage(null)

  // Inhalte pro Slug definieren
  const projectContent: Record<string, any> = {
    "jga-buddies": {
      title: "JGA Buddies",
      description: "JGA Buddies ist eine Plattform für individuelle Stadtrallyes und Junggesellenabschiede, die Teams durch spielerische Aufgaben, interaktive Karten und abwechslungsreiche Challenges führt. Seit meinem Einstieg 2019 habe ich die bestehende Website weiterentwickelt, modernisiert und kontinuierlich an neue Anforderungen angepasst.",
      category: "Web-Entwicklung · UI/UX-Optimierung · Technische Betreuung",
      time: "2019–2025",
      tasks: "Redesign einzelner Seiten, kontinuierliche Funktions- und Strukturupdates, Performance-Optimierung, SEO-Verbesserungen, Content-Pflege",
      tools: "WordPress, PHP-Anpassungen, HTML/CSS, JavaScript, SEO-Tools, Figma für kleinere UI-Skizzen",
      problem: "Die ursprüngliche Website war bereits funktionsfähig, jedoch in der Nutzerführung unübersichtlich und nicht mehr zeitgemäß. Viele Inhalte waren schwer auffindbar, mehrere Seiten wirkten visuell uneinheitlich und einige technische Funktionen waren nicht für mobile Geräte optimiert. Die Seite musste in einem laufenden Produktbetrieb weiterentwickelt werden – ohne große Ausfallzeiten oder eine komplette Neuentwicklung.",
      solution: "Durch die Iterationen entstand eine deutlich klarere Informationsarchitektur, modernere visuelle Gestaltung und ein besser abgestimmtes User-Erlebnis. Die Seite fühlt sich heute strukturierter, schneller und zugänglicher an – sowohl für neue Interessenten als auch für bestehende Nutzer. Neue Features, Landingpages und Layouts konnten problemlos integriert werden.",
      learnings: 
      <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
        <li>Iteratives Arbeiten an einem live betriebenen Produkt braucht klare Priorisierung und saubere Kommunikation</li>
        <li>Auch kleine UI-Anpassungen können große Wirkung auf Nutzerfluss und Conversion haben</li>
        <li>WordPress bleibt flexibel, wenn man es mit Bedacht erweitert statt überlädt</li>
        <li>Konsistente Gestaltung verbessert das gesamte Erlebnis, auch wenn nur Teilbereiche überarbeitet werden</li></ul>
        ,
      website: ["https://jga-buddies.de"],
      },

    "myweinwanderung": {
      title: "MyWeinwanderung",
      description: "MyWeinwanderung ist ein neues Erlebnis-Format, das 2024 entstanden ist und geführte Wein-Erlebnisse mit einer modernen, jungen Marke verbindet. Von der Farbwelt bis zur Typografie wurde das gesamte Design von mir entwickelt und anschließend als WordPress-Website umgesetzt.",
      category: "Markenentwicklung · UI/UX Design · Web-Entwicklung",
      time: "2024-2025",
      tasks: "Visuelles Grundkonzept erstellen, Corporate Design definieren, Website planen und umsetzen, WordPress-Backend strukturieren, Inhalte einpflegen",
      tools: "Figma, WordPress, HTML/CSS, JavaScript, Plugins für Buchungs- und Inhaltsverwaltung",
      problem: "Für das neue Projekt gab es zu Beginn noch keine visuelle Richtung und keine technische Basis. Es brauchte ein Erscheinungsbild, das zugleich seriös, modern und nahbar wirkt – passend zu einem Freizeit-Erlebnis, das sowohl Genuss als auch Aktivität verbindet. Außerdem sollte die Seite ohne technische Vorkenntnisse im Team pflegbar bleiben.",
      solution: "Es entstand ein komplett neues Corporate Design inklusive Farbpalette, Typografie-System und modularer UI-Elemente. Die Website wurde strukturiert aufgebaut und mit einem klaren, ruhigen Look versehen, der den Erlebnis-Charakter der Marke unterstützt. Alle Inhalte – Touren, Beschreibungstexte, Bilder und Module – wurden im WordPress-Backend sauber angelegt, sodass die Seite langfristig leicht erweiterbar ist.",
      learnings: <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
        <li>Ein eigenes Design-System spart im späteren Aufbau enorm viel Zeit</li>
        <li>Klare Struktur im Backend ist ebenso wichtig wie Design auf der Oberfläche</li>
        <li>Bereits kleine stilistische Entscheidungen prägen, wie hochwertig Nutzer ein Erlebnis wahrnehmen</li>
        <li>Frühzeitiger Austausch mit fotografisch Verantwortlichen verhindert Stilbrüche im Gesamtauftritt</li></ul>
        ,
      website: ["https://myweinwanderung.de"],
    },
      "tsv-loechgau": {
        title: "TSV Löchgau",
        description: "Für den TSV Löchgau entstand 2024 eine komplette Neuauflage der Vereinswebsite. Die alte Seite war technisch überholt, optisch nicht mehr zeitgemäß und für Mitglieder schwer zu pflegen. Ziel war ein frischer, klarer und moderner Webauftritt – weiterhin auf WordPress, damit der Verein Inhalte später selbst verwalten kann.",
        category: "Web-Redesign · UI/UX · Informationsarchitektur",
        time: "2025",
        tasks: "Komplette Neustrukturierung, Umsetzung im bestehenden Farbkonzept, Integration eines neuen Logos, Content-Aufbereitung, Übergabe eines pflegbaren Backends",
        tools: "WordPress, Gutenberg/Block-System, Figma, HTML/CSS, Plugins zur Vereins- und Blog-Verwaltung",
        problem: "Die alte Website war visuell unruhig, technisch unübersichtlich und kaum noch erweiterbar. Viele Inhalte waren schlecht zugänglich oder versteckt, was für Vereinsmitglieder sowie Interessierte frustrierend war. Zusätzlich sollte der Verein nach der Abnahme in der Lage sein, selbstständig Blogbeiträge und Updates zu verwalten.",
        solution: "Die neue Seite präsentiert sich modern, klar strukturiert und deutlich leichter navigierbar. Inhalte wie Mannschaften, News und Ansprechpartner wurden sauber organisiert und optisch einheitlich dargestellt. Dank eines intuitiv eingerichteten WordPress-Backends können Vereinsmitglieder neue Beiträge ohne externe Hilfe erstellen.",
        learnings: <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
        <li>Klare Struktur und einfache Pflege sind für Vereine wichtiger als komplexe Designs</li>
        <li>Selbst ein bestehendes Farbkonzept kann in modernem UI gut wirken</li>
        <li>Gute Content-Vorarbeit spart beim Aufbau der Seiten enorm Zeit</li>
        <li>Übergabe und Schulung sind essenziell, damit der Kunde das System nachhaltig nutzen kann</li></ul>
        , 
        website: ["https://tsv-loechgau.de"]
      },
      "sins-portfolio": {
        title: "Meine Portfolio Website",
        description: "Meine Portfolio-Website ist ein komplett neu entwickeltes Projekt, das ich von Grund auf gestaltet und technisch umgesetzt habe. Ziel war es, meine Arbeiten strukturiert, modern und authentisch darzustellen – mit Fokus auf Performance, Klarheit und einer angenehmen User Experience. Das Layout, die Animationen und das Designsystem wurden in Figma geplant und anschließend mit Next.js, TailwindCSS und Framer Motion realisiert.",
        category: "Web Development · UI/UX Design · Branding · Frontend Engineering",
        time: "2025",
        tasks: <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
        <li>Konzeption & Moodboard</li>
        <li>UI/UX Design, Wireframes, Komponenten-System</li>
        <li>Entwicklung in Next.js (App Router)</li>
        <li>Responsive Layouts & Animationen</li>
        <li>Content-Struktur, Slug-basierte Projektseiten, Image-Handling</li>
        <li>Git-Versionierung & Deployment</li>
        </ul>
        ,
        tools: <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
        <li>Next.js · React · TailwindCSS · Framer Motion</li>
        <li>GitHub (Repository & Version Control)</li>
        <li>Figma (Design, Prototyping)</li>
        <li>Milanote (Moodboard, Strukturierung)</li>
        </ul>,
        problem: "Ich wollte eine Portfolio-Website, die sowohl technisch als auch gestalterisch meinen aktuellen Fähigkeiten entspricht. Alte Projekte von mir waren teilweise unübersichtlich oder zu statisch aufgebaut und boten keine flexible Möglichkeit, Arbeiten sauber zu präsentieren. Zudem brauchte ich ein System, in dem ich Projekte jederzeit erweitern oder neu strukturieren kann – ohne mich durch WordPress-Limitierungen zu kämpfen.",
        solution: "Das Ergebnis ist ein schlankes, modernes Portfolio, das schnell lädt, klar strukturiert ist und sich angenehm bedienen lässt. Die flexible Architektur mit dynamischen Slugs ermöglicht es, neue Projekte in wenigen Minuten anzulegen. Das Design ist reduziert, aber charakterstark, unterstützt durch gezielte Animationen und ein konsistentes Farb- & Typografiesystem. Durch TailwindCSS konnte ich sauber und effizient entwickeln, während Next.js für Performance und Ordnung im Code sorgt.",
        learnings: <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight mb-4">
        <li>Ein eigenes Designsystem erspart extrem viel Aufwand beim Bau einer skalierbaren Website</li>
        <li>Gute Vorbereitung (Milanote, Moodboard, Struktur) beschleunigt spätere Entscheidungen</li>
        <li>Animationen sollten sparsam eingesetzt werden – kleine Microinteractions haben die größte Wirkung</li>
        <li>Git-Versionierung macht Änderungen nachvollziehbar und sorgt dafür, dass Ideen risikofrei ausprobiert werden können</li>
        <li>Der App Router von Next.js ist mächtig, aber verlangt gute Strukturierung, besonders bei dynamischen Projektseiten</li>
        </ul>,
        website: ["https://tamarasins.de"]
      },
  }

  // Content richtig auslesen
  const content = projectContent[slug as string] || {
    title: 'Projekt nicht gefunden',
    description: 'Leider gibt es für diesen Slug keinen Inhalt.',
    category: '',
    time: '',
    tasks: [],
    tools: [],
    problem: [],
    solution: [],
    learnings: [],
    website: ["https://tamarasins.de"]
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4 max-w-5xl mx-auto space-y-12"
    >

      {/* Lightbox Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-9999"
          onClick={close}
        >
          <img
            src={modalImage}
            alt="Fullscreen"
            className="max-h-[90vh] max-w-[90vw] rounded-lg"
          />
        </div>
      )}

      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-heading text-[#E56D6A] mb-4">{content.title}</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">{content.description}</p>
        <div className="mt-6">
          <Link href="/portfolio">
            <button className="button">&larr; Zu allen Projekten</button>
          </Link>
        </div>
      </div>

      {/* Screenshot Section */}
      <div className="mx-auto overflow-hidden border rounded-lg border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
        <img
          src={`/${slug}-1.webp`}
          alt={`${slug} Cover`}
          className="w-full max-h-[400px] object-cover rounded-lg cursor-pointer"
          onClick={() => open(`/${slug}-1.webp`)}
        />
      </div>

      {/* Übersicht */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Übersicht</h2>
        <ul className="list-disc list-inside space-y-1 text-[15px] leading-tight">
          <li>Kategorie: {content.category}</li>
          <li>Zeitraum: {content.time}</li>
          <li>Aufgaben: {content.tasks}</li>
          <li>Tools & Technologien: {content.tools}</li>
        </ul>
      </section>

      {/* Problemstellung */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Problemstellung</h2>
        <p className="text-[15px] leading-tight mb-6">{content.problem}</p>

        {/* Drei viereckige Projekt-Images */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { img: `/${slug}-2.webp`, label: "Konzeption" },
            { img: `/${slug}-3.webp`, label: "Design" },
            { img: `/${slug}-4.webp`, label: "Implementierung" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={item.img}
                alt={item.label}
                className="h-64 w-full object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => open(item.img)}
              />
              <p className="mt-4 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ergebnis */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Ergebnis</h2>
        <p className="text-[15px] leading-tight mb-4">{content.solution}</p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { img: `/${slug}-5.webp`, label: "Desktop" },
            { img: `/${slug}-6.webp`, label: "Laptop" },
            { img: `/${slug}-7.webp`, label: "Mobile" },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center rounded-lg overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={item.img}
                alt={item.label}
                className="h-64 w-full object-cover rounded-lg shadow-md cursor-pointer"
                onClick={() => open(item.img)}
              />
              <p className="mt-4 text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learnings */}
      <section>
        <h2 className="text-2xl font-semibold text-[#E56D6A] mb-2">Learnings</h2>
        {content.learnings}

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <a
            href={content.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E56D6A] text-white px-6 py-3 rounded-xl font-medium shadow-sm hover:shadow-md hover:bg-[#d85f5d] transition w-full sm:w-auto text-center"
          >
            Zur Live Website
          </a>

          <Link
            href="/portfolio"
            className="px-6 py-3 rounded-xl font-medium border border-gray-400 text-gray-700 hover:bg-gray-100 transition w-full sm:w-auto text-center"
          >
            &larr; Zu allen Projekten
          </Link>
        </div>
      </section>
    </motion.section>
  )
}
