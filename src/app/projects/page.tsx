import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="p-6">
      <Link href="/projects" className="underline">← All projects</Link>

      <p className="mt-4 text-sm">SHEET {project.code}</p>
      <h1 className="text-4xl font-bold">{project.title}</h1>
      <p className="text-sm">
        {project.type} · {project.period}
      </p>

      {/* ① SUMMARY */}
      <p className="mt-4">{project.summary}</p>

      {/* ② POINTS (answer to the exercise) */}
      <ul className="mt-4 list-disc pl-5">
        {project.points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>

      {/* ③ PDF: put it HERE, under the summary and points */}
      {project.pdf && (
        <div className="mt-6">
          <a
            href={project.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-black px-5 py-3 text-white"
          >
            View PDF ↗
          </a>

          <iframe
            src={project.pdf}
            title={`${project.title} PDF`}
            className="mt-4 h-[600px] w-full rounded-lg border"
          />
        </div>
      )}
    </main>
  );
}