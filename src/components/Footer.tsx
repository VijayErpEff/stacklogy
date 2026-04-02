import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5">
      {/* Desktop: single row. Mobile: stacked. */}
      <div className="mx-auto flex flex-col gap-4 px-8 py-6 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo + Copyright */}
        <div className="flex items-center gap-3">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Stacklogy"
              width={80}
              height={20}
              className="h-5 w-auto opacity-50"
            />
          </Link>
          <span className="font-mono text-xs text-white/20">
            &copy; 2026
          </span>
        </div>

        {/* Center: Links separated by / */}
        <nav className="flex flex-wrap items-center gap-0">
          {footerLinks.map((link, i) => (
            <span key={link.href} className="flex items-center">
              <Link
                href={link.href}
                className="text-xs text-white/20 transition-colors duration-200 hover:text-[#6EE714]"
              >
                {link.label}
              </Link>
              {i < footerLinks.length - 1 && (
                <span className="mx-2 text-xs text-white/10">/</span>
              )}
            </span>
          ))}
        </nav>

        {/* Right: Location + Minority-Owned */}
        <div className="flex items-center gap-3 font-mono text-xs text-white/20">
          <span>Fremont, CA</span>
          <span className="text-white/10">|</span>
          <span>Minority-Owned</span>
        </div>
      </div>
    </footer>
  );
}
