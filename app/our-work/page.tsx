import type { Metadata } from "next";
import { OurWorkGallery } from "@/components/OurWorkGallery";
import galleryData from "@/public/our-work.json";
import { CallAndQuoteButtons } from "@/components/Trust";

export const metadata: Metadata = {
  title: "Our Work | Lowery Landworks",
  description:
    "Photos and videos of real outdoor projects across the Dallas–Fort Worth metroplex by Lowery Landworks.",
};

export default function OurWorkPage() {
  const items = Array.isArray(galleryData.items) ? galleryData.items : [];
  return (
    <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <h1 className="display text-4xl text-forest sm:text-5xl">Our Work</h1>
      <p className="mt-3 max-w-xl text-base text-ink/75">
        Real projects across the Dallas–Fort Worth metroplex. Tap any photo or
        video to view it full-screen.
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
