// Borrow Link (page navigation) and the project data
import Link from "next/link";
import { projects } from "@/data/projects";

// The component for the /projects page (the list of ALL projects)
export default function ProjectsPage() {
  return (
    <main className="p-6">
      {/* Back to home */}
      <Link href="/" className="underline">← Home</Link>

      {/* Page title */}
      <h1 className="mt-4 text-4xl font-bold">Projects</h1>

      {/* Number of projects; .length = how many items */}
      <p className="text-sm">DRAWING SET · {projects.length} SHEETS</p>

      {/* List ALL projects (no .slice) */}
      <ul className="mt-6 space-y-4">
        {projects.map((project) => (
          <li key={project.slug}>
            {/* Link to this project's detail page */}
            <Link href={`/projects/${project.slug}`} className="text-xl font-semibold underline">
              {project.code} · {project.title}
            </Link>
            {/* Type and period */}
            <p className="text-sm">
              {project.type} · {project.period}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}