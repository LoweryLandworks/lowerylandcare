import Link from "next/link";
import { SITE } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export function Footer() {
  return (
    <footer className="bg-forest-deep text-olive-pale">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          <p className="display text-2xl text-olive">Lowery</p>
          <p className="display text-base tracking-widest">Landworks</p>
          <p className="mt-3 text-sm text-olive-pale/70">
            Locally owned lawn care serving {SITE.areaLabel}.
          </p>
          <a
            href={`tel:${SITE.phoneTel}`}
            className="mt-4 inline-block text-lg font-bold text-olive"
          >
            {SITE.phoneDisplay}
          </a>
        </div>

        <div>
          <p className="display mb-3 text-sm tracking-widest text-olive">
            Services
          </p>
          <ul className="space-y-2 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="text-olive-pale/80 hover:text-olive"
                >
                  {s.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display mb-3 text-sm tracking-widest text-olive">
            Service Area
          </p>
          <ul className="space-y-2 text-sm text-olive-pale/80">
            {SITE.cities.map((c) => (
              <li key={c}>{c}, TX</li>
            ))}
          </ul>
        </div>

        <div>
          <p className="display mb-3 text-sm tracking-widest text-olive">
            Company
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="text-olive-pale/80 hover:text-olive">
                About
              </Link>
            </li>
            <li>
              <Link href="/quote" className="text-olive-pale/80 hover:text-olive">
                Get a Quote
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="text-olive-pale/80 hover:text-olive">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-olive-pale/80 hover:text-olive">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-olive/15 py-5 text-center text-xs text-olive-pale/50">
        © {new Date().getFullYear()} {SITE.name}. All rights reserved. ·{" "}
        {SITE.areaLabel}
      </div>
      {/* Spacer so the sticky mobile bar never covers footer content */}
      <div className="h-16 md:hidden" />
    </footer>
  );
}
