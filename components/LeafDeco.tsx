// Decorative fern/leaf silhouettes echoing the business card.
// Always aria-hidden, always low-contrast via the className passed in
// (e.g. "text-forest/10" on olive, "text-olive/10" on forest).

export function Fern({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="currentColor"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M100 320c-2-60-4-120-2-180C99 90 104 40 112 0c3 42 1 84-2 126-3 66-6 130-10 194Z" />
      <path d="M104 60c14-18 32-30 54-34-8 20-24 34-44 42l-10 4Z" />
      <path d="M98 96c-16-14-36-22-58-22 10 18 28 30 48 34l10 2Z" />
      <path d="M104 130c18-14 40-22 62-22-12 20-32 32-54 34l-8 2Z" />
      <path d="M98 166c-18-12-40-18-62-16 14 18 34 28 56 28h6Z" />
      <path d="M102 202c16-12 36-20 58-20-12 18-30 28-52 30l-6 2Z" />
      <path d="M98 238c-16-10-36-16-56-14 12 16 30 24 50 26l6 1Z" />
      <path d="M100 272c14-10 32-16 50-16-10 16-26 24-44 26l-6 1Z" />
    </svg>
  );
}

export function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="currentColor"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <path d="M20 140C60 100 100 60 140 20c-8 36-28 66-56 88-20 15-42 26-64 32Z" />
      <path d="M64 96c-2-22 4-44 18-62 6 20 2 42-10 58l-8 4Z" />
      <path d="M96 64c22-4 44 0 62 12-20 8-42 6-58-4l-4-8Z" />
    </svg>
  );
}
