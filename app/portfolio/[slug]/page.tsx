import { useParams } from 'next/navigation';

export default function CaseStudyPage() {
  const { slug } = useParams();

  return (
    <section className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{slug}</h1>
      <p>Hier kannst du Details zum Projekt / UI/UX Case Study beschreiben.</p>
      <div className="mt-6 grid md:grid-cols-2 gap-6">
        <div className="border p-4 rounded">Screenshot / Figma Link 1</div>
        <div className="border p-4 rounded">Screenshot / Figma Link 2</div>
      </div>
    </section>
  );
}