"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Work", href: "/work" },
  { label: "Solutions", href: "/solutions" },
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
      setPastHero(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Floating Bottom Bar (Desktop) ── */}
      <motion.header
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className={`fixed top-4 z-50 transition-all duration-500 ease-out ${
          isHome && !pastHero
            ? "right-4 left-auto translate-x-0 lg:left-1/2 lg:right-auto lg:-translate-x-1/2"
            : "left-1/2 -translate-x-1/2"
        } ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-white/5 shadow-lg shadow-black/50"
            : "bg-white/5 backdrop-blur-xl border-white/10"
        } rounded-full border hover:border-[#6EE714]/20 hover:shadow-[0_0_30px_#6EE71420]`}
      >
        <nav className="flex items-center px-4 py-2.5">
          {/* Logo — hidden on homepage until scrolled past hero */}
          <div
            className={`flex-shrink-0 transition-all duration-500 overflow-hidden ${
              isHome && !pastHero
                ? "w-0 opacity-0 mr-0"
                : "w-[116px] opacity-100 mr-1"
            }`}
          >
            <Link href="/" className="block">
              <Image
                src="/logo.png"
                alt="Stacklogy"
                width={100}
                height={24}
                className="h-6 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden items-center gap-1 lg:flex">
            <div className={`h-4 w-px bg-white/10 transition-all duration-500 ${isHome && !pastHero ? "mx-0 opacity-0 w-0" : "mx-2 opacity-100"}`} />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-white/50 transition-colors duration-200 hover:text-[#6EE714]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mx-2 h-4 w-px bg-white/10" />
          </div>

          {/* CTA (Desktop) */}
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#6EE714] px-4 py-2 text-xs font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_#6EE71440] lg:inline-flex"
          >
            Let&apos;s talk
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="ml-auto inline-flex items-center justify-center rounded-full p-2 text-white/50 transition-colors hover:text-[#6EE714] lg:hidden"
            aria-label="Open menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </nav>
      </motion.header>

      {/* ── Mobile Full-Screen Overlay ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-50 flex flex-col bg-black/95 backdrop-blur-2xl"
          >
            {/* Close Button */}
            <div className="flex items-center justify-end px-6 py-6">
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center rounded-full p-2 text-white/50 transition-colors hover:text-[#6EE714]"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Centered Nav Links */}
            <div className="flex flex-1 flex-col items-center justify-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 * i,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-5xl font-light text-white/80 transition-colors duration-200 hover:text-[#6EE714]"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * navLinks.length,
                  ease: [0.23, 1, 0.32, 1],
                }}
                className="mt-8"
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-full bg-[#6EE714] px-8 py-3 text-sm font-bold text-black transition-all duration-300 hover:shadow-[0_0_20px_#6EE71440]"
                >
                  Let&apos;s talk
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
