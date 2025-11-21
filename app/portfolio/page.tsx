'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Project = {
  id: string;
  title: string;
  img: string;
  slug: string;
};

const businessProjects = [
  { id: 'business-1', title: 'JGA Buddies', img: '/jga-buddies-1.webp', slug: 'jga-buddies' },
  { id: 'business-2', title: 'MyWeinwanderung', img: '/myweinwanderung-1.webp', slug: 'myweinwanderung' },
  { id: 'business-3', title: 'TSV Löchgau', img: '/tsv-loechgau-1.webp', slug: 'tsv-loechgau' },
]

const privateProjects = [
  { id: 'private-1', title: 'Portfolio Website', img: '/portfolio-1.webp', slug: 'sins-portfolio' },
  { id: 'private-2', title: 'COMING SOON', img: '/weiterbildung-1.webp', slug: 'weiterbildung' },
]

export default function PortfolioPage() {
  const renderProjects = (projects: Project[]) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
        >
          <Link href={`/portfolio/${project.slug}`}>
            <img src={project.img} alt={project.title} className="w-full h-72 object-cover" />
            <h3 className="text-xl font-heading p-4 text-[#E56D6A]">{project.title}</h3>
          </Link>
        </motion.div>
      ))}
    </div>
  )

  return (
    <section className="px-4">
      <h1 className="text-4xl font-heading mb-8 text-[#E56D6A]">Portfolio</h1>

      <h2 className="text-2xl font-semibold text-[#E56D6A] mb-4">Unternehmensprojekte</h2>
      {renderProjects(businessProjects)}

      <h2 className="text-2xl font-semibold text-[#E56D6A] mt-12 mb-4">Private & Lernprojekte</h2>
      {renderProjects(privateProjects)}
    </section>
  )
}