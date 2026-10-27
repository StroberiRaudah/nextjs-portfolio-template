import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-6">
      <p className="text-sm">ERROR 404</p>
      <h1 className="text-4xl font-bold">This sheet isn’t in the drawing set.</h1>
      <p className="mt-2">The page you’re looking for doesn’t exist.</p>
      <div className="mt-6 flex gap-4">
        <Link href="/" className="underline">← Home</Link>
        <Link href="/projects" className="underline">All projects</Link>
      </div>
    </main>
  );
}