"use client";

import { useCallback, useEffect, useState } from "react";

export interface WorkItem {
  src: string;
  name: string;
}

function isVideo(src: string) {
  return /\.(mp4|mov|webm)$/i.test(src);
}

export function OurWorkGallery({ items }: { items: WorkItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback(
    (d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close, step]);

  if (items.length === 0) {
    return (
      <p className="py-10 text-center text-base text-ink/60">
        New project photos and videos are on the way — check back soon.
      </p>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {items.map((it, i) => (
          <button
            key={it.src + i}
            onClick={() => setOpen(i)}
            className="group overflow-hidden rounded-2xl border-2 border-forest/15 bg-white text-left"
          >
            <div className="relative">
              {isVideo(it.src) ? (
                <video src={it.src} muted playsInline preload="metadata" className="aspect-square w-full object-cover" />
              ) : (
                <img src={it.src} alt={it.name} loading="lazy" className="aspect-square w-full object-cover" />
              )}
              {isVideo(it.src) && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-black/60 text-2xl text-white">
                    ▶
                  </span>
                </span>
              )}
            </div>
            <p className="truncate px-4 py-3 text-sm font-bold text-forest">{it.name}</p>
          </button>
        ))}
      </div>

      {open !== null && items[open] && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-black/95"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-4 py-3 text-white">
            <p className="truncate text-sm font-bold">{items[open].name}</p>
            <button onClick={close} aria-label="Close" className="px-3 py-2 text-2xl leading-none">
              ✕
            </button>
          </div>
          <div
            className="relative flex flex-1 items-center justify-center overflow-hidden px-12"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo(items[open].src) ? (
              <video
                key={items[open].src}
                src={items[open].src}
                controls
                autoPlay
                playsInline
                className="max-h-full max-w-full rounded-lg"
              />
            ) : (
              <img
                src={items[open].src}
                alt={items[open].name}
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            )}
            {items.length > 1 && (
              <>
                <button
                  onClick={() => step(-1)}
                  aria-label="Previous"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-2xl text-white"
                >
                  ◀
                </button>
                <button
                  onClick={() => step(1)}
                  aria-label="Next"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/20 px-4 py-3 text-2xl text-white"
                >
                  ▶
                </button>
              </>
            )}
          </div>
          <p className="py-4 text-center text-sm text-white/70">
            {open + 1} of {items.length}
          </p>
        </div>
      )}
    </>
  );
}
