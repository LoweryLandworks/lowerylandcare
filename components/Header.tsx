import Link from "next/link";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="bg-forest text-olive-pale">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <span className="display block text-xl leading-none text-olive sm:text-2xl">
            Lowery
          </span>
          <span className="display block text-sm leading-none tracking-widest text-olive-pale sm:text-base">
            Landworks
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <Link href="/services" className="hover:text-olive">
            Services
          </Link>
          <Link href="/locations" className="hover:text-olive">
            Areas
          </Link>
          <Link href="/guides" className="hover:text-olive">
            Guides
          </Link>
          <Link href="/faq" className="hover:text-olive">
            FAQ
          </Link>
          <Link href="/about" className="hover:text-olive">
            About
          </Link>
          <Link href="/our-work" className="hover:text-olive">
            Our Work
          </Link>
          <a href={`tel:${SITE.phoneTel}`} className="hover:text-olive">
            {SITE.phoneDisplay}
          </a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="flex h-12 items-center rounded-lg border-2 border-olive px-4 text-sm font-bold text-olive md:hidden"
          >
            Call
          </a>
          <Link
            href="/quote"
            className="flex h-12 items-center rounded-lg bg-olive px-4 text-sm font-bold text-forest hover:bg-olive-bright sm:px-5"
          >
            Get a Free Quote
          </Link>
        </div>
      </div>
      {/* Secondary nav for mobile since there's no hamburger */}
      <nav className="flex justify-center gap-8 border-t border-olive/20 py-2.5 text-sm font-semibold md:hidden">
        <Link href="/services" className="py-1">
          Services
        </Link>
        <Link href="/locations" className="py-1">
          Areas
        </Link>
        <Link href="/guides" className="py-1">
          Guides
        </Link>
        <Link href="/faq" className="py-1">
          FAQ
        </Link>
        <Link href="/about" className="py-1">
          About
        </Link>
        <Link href="/our-work" className="py-1">
          Our Work
        </Link>
        <Link href="/quote" className="py-1">
          Quote
        </Link>
      </nav>
    </header>
  );
}
