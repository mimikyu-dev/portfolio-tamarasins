import ProjectCard from '../components/ProjectCard';

export default function PortfolioPage() {
  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Meine Projekte</h1>

      <h2 className="text-2xl font-semibold mb-4">Webentwicklungsprojekte</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <ProjectCard title="NGO Website Redesign" year={2023} slug="ngo-redesign" />
        <ProjectCard title="Event Portal UX Concept" year={2024} slug="event-portal" />
      </div>

      <h2 className="text-2xl font-semibold mb-4">UI/UX Design Beispiele</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <ProjectCard title="Mobile App Redesign (Platzhalter)" year={2025} />
        <ProjectCard title="Dashboard UI Konzept (Platzhalter)" year={2025} />
        <ProjectCard title="Website UX Studie (Platzhalter)" year={2025} />
      </div>
    </section>
  );
}