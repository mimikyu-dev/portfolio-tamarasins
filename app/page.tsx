"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="bg-[#FFFDFB] text-[#3B2E2A]">
        {/* 🌸 Hero Section */}
        <section className="flex flex-col items-center justify-center text-center py-40 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Hallo, ich bin{" "}
            <span className="text-[#FFB6C1]">Tamara Sins</span> 🌷
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-2xl max-w-2xl leading-relaxed text-[#3B2E2A]/80"
          >
            Webentwicklerin & angehende UI/UX Designerin.  
            Ich liebe es, digitale Erlebnisse zu gestalten,  
            die Emotion und Funktion vereinen.
          </motion.p>
        </section>

        {/* 💻 Featured Projects */}
        <section className="py-24 px-6 max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Ausgewählte Projekte
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: "JGA Buddies Redesign",
                desc: "UX-Optimierung und Soft-UI Redesign.",
                slug: "jga-buddies",
                image: "/portfolio/jga-buddies-cover.jpg",
              },
              {
                title: "Adventure Buddies",
                desc: "Reiseplattform mit Fokus auf Emotion und Storytelling.",
                slug: "adventure-buddies",
                image: "/portfolio/adventure-buddies-cover.jpg",
              },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
              >
                <Link href={`/portfolio/${p.slug}`}>
                  <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all bg-[#FFEFF2] hover:-translate-y-1">
                    <div className="relative w-full h-64">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {p.title}
                      </h3>
                      <p className="text-sm opacity-80">{p.desc}</p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🧡 About Section */}
        <section className="py-24 px-6 bg-[#FFEAC2]/40">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 shadow-lg">
                <Image
                  src="/tamara-portrait.jpg"
                  alt="Tamara Sins"
                  fill
                  className="object-cover"
                />
              </div>

              <h2 className="text-3xl font-bold mb-4">Über mich</h2>
              <p className="max-w-2xl text-lg leading-relaxed text-[#3B2E2A]/80">
                Ich verbinde technisches Verständnis mit Designgefühl, um
                Websites zu schaffen, die funktional, emotional und
                benutzerfreundlich sind.  
                Design bedeutet für mich: Persönlichkeit zeigen – digital.
              </p>
            </div>
          </div>
        </section>
        </main>
    </>
  );
}
