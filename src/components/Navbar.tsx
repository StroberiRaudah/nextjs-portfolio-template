import Link from "next/link";

// The list of menu links; easy to add more later
const links = [
  { href: "/projects", label: "Projects" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-6">
      {/* Logo / brand: goes to home */}
      <Link href="/" className="font-mono text-sm">
        BN / QS — 2026
      </Link>

      {/* Menu: one Link per item in the list */}
      <nav className="flex gap-6 font-mono text-sm">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}