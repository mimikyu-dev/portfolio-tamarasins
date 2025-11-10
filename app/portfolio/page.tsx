import ProjectCard from '../components/ProjectCard';

export default function PortfolioPage() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Meine Projekte</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard title="NGO Website Redesign" year={2023} slug="ngo-redesign" />
        <ProjectCard title="Event Portal UX Concept" year={2024} slug="event-portal" />
        {/* Später UI/UX Projekte hinzufügen */}
      </div>
    </section>
  );
}