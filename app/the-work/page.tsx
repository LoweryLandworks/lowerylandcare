import type { Metadata } from "next";
import { OurWorkGallery } from "@/components/OurWorkGallery";
import galleryData from "@/public/the-work.json";
import { CallAndQuoteButtons } from "@/components/Trust";

export const metadata: Metadata = {
  title: "The Work | Lowery Landworks",
  description:
    "A running look at recent Lowery Landworks projects — lawns, cleanups, mulch, trimming and more across the Dallas–Fort Worth metroplex.",
};

export default function TheWorkPage() {
  const items = Array.isArray(galleryData.items) ? galleryData.items : [];
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="display text-4xl text-forest sm:text-5xl">The Work</h1>
      <p className="mt-3 max-w-xl text-base text-ink/75">
        Recent projects across the Dallas–Fort Worth metroplex, straight from
        the crew. Use the arrows to browse every photo and video.
      </p>
      <div className="mt-8">
        <OurWorkGallery items={items} />
      </div>
      <div className="mt-12 flex justify-center">
        <CallAndQuoteButtons />
      </div>
    </main>
  );
}
