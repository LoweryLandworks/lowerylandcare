import Link from "next/link";
import { SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="bg-forest text-olive-pale">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="min-w-0">
          <span className="display block text-xl leading-none text-olive sm:text-2xl">
            Lowery&apos;s
          </span>
          <span className="display block text-sm leading-none tracking-widest text-olive-pale sm:text-base">
            Landscaping
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
          <Link href="/services" className="hover:text-olive">
            Services
          </Link>
          <Link href="/about" className="hover:text-olive">
            About
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
        <Link href="/about" className="py-1">
          About
        </Link>
        <Link href="/quote" className="py-1">
          Quote
        </Link>
      </nav>
    </header>
  );
}
