"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface WorkItem {
  src: string;
  name: string;
}

function isVideo(src: string) {
  return /\.(mp4|mov|webm)$/i.test(src);
}

export function OurWorkGallery({ items }: { items: WorkItem[] }) {
  const [idx, setIdx] = useState(0);
  const touchX = useRef<number | null>(null);

  const go = useCallback(
    (d: number) =>
      setIdx((i) => (items.length ? (i + d + items.length) % items.length : 0)),
    [items.length]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (items.length === 0) {
    return (
      <p className="py-10 text-center text-base text-ink/60">
        New project photos and videos are on the way — check back soon.
      </p>
    );
  }

  const cur = items[idx];

  return (
    <div className="mx-auto max-w-4xl">
      <div
        className="relative overflow-hidden rounded-2xl border-2 border-forest/15 bg-forest"
        onTouchStart={(e) => {
          touchX.current = e.changedTouches[0].clientX;
        }}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
          touchX.current = null;
        }}
      >
        <div className="flex aspect-[4/3] items-center justify-center sm:aspect-[16/10]">
          {isVideo(cur.src) ? (
            <video
              key={cur.src}
              src={cur.src}
              controls
              playsInline
              className="max-h-full max-w-full"
            />
          ) : (
            <img
              key={cur.src}
              src={cur.src}
              alt={cur.name}
              className="max-h-full max-w-full object-contain"
            />
          )}
        </div>
        {items.length > 1 && (
          <>
            <button
              onClick={() => go(-1)}
              aria-label="Previous photo"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-4 py-3 text-xl leading-none text-white transition hover:bg-black/80"
            >
              &#8249;
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next photo"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/55 px-4 py-3 text-xl leading-none text-white transition hover:bg-black/80"
            >
              &#8250;
            </button>
          </>
        )}
      </div>
      <div className="mt-3 flex items-center justify-between gap-4">
        <p className="truncate text-sm font-bold text-forest">{cur.name}</p>
        <p className="shrink-0 text-sm text-ink/60">
          {idx + 1} of {items.length}
        </p>
      </div>
    </div>
  );
}
