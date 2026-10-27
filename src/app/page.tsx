// Borrow the Link component from Next.js (switches page without reloading)
import Link from "next/link";
// Borrow the list of 4 projects from data/projects.ts (@/ = project root)
import { projects } from "@/data/projects";

// Create the HomePage component; "export default" = Next.js shows this on "/"
export default function HomePage() {
  // Take only items 0 and 1 from the projects list (stops BEFORE index 2)
  const featured = projects.slice(0, 2);

  // Everything inside return ( ) is what appears on screen
  return (
    // <main> = the page's main content box; p-6 = 24px padding all round
    <main className="p-6">
      {/* ===== HERO ===== */}

      {/* h1 = main heading; text-5xl = very large text; font-bold = bold */}
      <h1 className="text-5xl font-bold">Balqis Najiha.</h1>

      {/* p = paragraph; mt-2 = small space above */}
      <p className="mt-2">I measure, price and document buildings before they’re built.</p>

      {/* ===== FEATURED WORK ===== */}

      {/* section = a group of content; mt-12 = big space above */}
      <section className="mt-12">
        {/* h2 = section heading; text-3xl = large text */}
        <h2 className="text-3xl font-bold">Featured work</h2>

        {/* ul = a list; mt-4 = space above; space-y-2 = gap between items */}
        <ul className="mt-4 space-y-2">
          {/* { } = run JavaScript; .map() = loop, one <li> per project */}
          {featured.map((project) => (
            // li = one item in the list; key = unique name React uses to track it
            <li key={project.slug}>
              {/* Link to /projects/<slug>; `${ }` joins text with a variable */}
              <Link href={`/projects/${project.slug}`} className="underline">
                {/* Show the code and title, e.g. "A-01 · Tender Document & BOQ" */}
                {project.code} · {project.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Link to the page with all projects; inline-block lets mt-4 work */}
        <Link href="/projects" className="mt-4 inline-block font-semibold">
          View all projects →
        </Link>
      </section>

      {/* ===== CONTACT (built in Step 2) ===== */}

      {/* id="contact" = a name the Navbar's /#contact link scrolls to */}
      <section id="contact" className="mt-12">
        <h2 className="text-3xl font-bold">Send a message</h2>
        <p>Form coming in Step 2.</p>
      </section>
    </main>
  );
}