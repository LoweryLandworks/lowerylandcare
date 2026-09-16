import { GALLERY } from "@/lib/gallery";
import { CallAndQuoteButtons } from "@/components/Trust";

/**
 * Before/after gallery. Renders NOTHING while lib/gallery.ts is empty —
 * no placeholder gallery on the live site. Add real job photos to show it.
 */
export function BeforeAfterGallery() {
  if (GALLERY.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 className="display text-3xl text-forest sm:text-4xl">
        Real yards, real results
      </h2>
      <p className="mt-2 max-w-xl text-base text-ink/75">
        Before-and-after photos from actual jobs across the DFW metroplex.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {GALLERY.map((g) => (
          <figure
            key={g.before}
            className="overflow-hidden rounded-2xl border-2 border-forest/15 bg-white"
          >
            <div className="grid grid-cols-2">
              <div>
                <img
                  src={g.before}
                  alt={`Before: ${g.caption}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <p className="bg-ink py-1.5 text-center text-xs font-bold uppercase tracking-widest text-paper">
                  Before
                </p>
              </div>
              <div>
                <img
                  src={g.after}
                  alt={`After: ${g.caption}`}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <p className="bg-lake py-1.5 text-center text-xs font-bold uppercase tracking-widest text-white">
                  After
                </p>
              </div>
            </div>
            <figcaption className="px-5 py-4">
              <p className="text-base font-bold text-forest">{g.caption}</p>
              <p className="text-sm text-ink/60">{g.service}</p>
            </figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <CallAndQuoteButtons />
      </div>
    </section>
  );
}
