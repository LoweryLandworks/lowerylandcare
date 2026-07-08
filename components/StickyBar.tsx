"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SITE } from "@/lib/site";

// Mobile-only sticky bottom bar: tap-to-call + quote CTA (48px tap targets).
export function StickyBar() {
  const pathname = usePathname();
  // On pages that have an inline quote form, anchor to it; otherwise go to /quote.
  const quoteHref = pathname === "/" || pathname === "/quote" ? "#quote" : "/quote";

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex gap-2 border-t-2 border-forest bg-forest-deep p-2 md:hidden">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex h-12 flex-1 items-center justify-center rounded-lg border-2 border-olive text-base font-bold text-olive"
      >
        Call Now
      </a>
      <Link
        href={quoteHref}
        className="flex h-12 flex-1 items-center justify-center rounded-lg bg-olive text-base font-bold text-forest"
      >
        Get a Quote
      </Link>
    </div>
  );
}
