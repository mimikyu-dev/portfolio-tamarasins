import { useParams } from 'next/navigation';

export default function CaseStudyPage() {
  const { slug } = useParams();

  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{slug}</h1>
      <p>Hier kannst du Details zum Projekt / UI/UX Case Study beschreiben.</p>
    </section>
  );
}