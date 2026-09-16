/*
 * Before/after gallery photos.
 *
 * EMPTY ON PURPOSE — the homepage gallery section only renders when this
 * array has entries, so there's no placeholder gallery on the live site.
 *
 * To add real photos: drop the files in public/gallery/ and add entries:
 *   { before: "/gallery/job1-before.jpg", after: "/gallery/job1-after.jpg",
 *     caption: "Lawn reset in Flower Mound", service: "Yard Cleanup" }
 */
export interface GalleryPhoto {
  before: string;
  after: string;
  caption: string;
  service: string;
}

export const GALLERY: GalleryPhoto[] = [];
