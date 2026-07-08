import { ImageResponse } from "next/og";

// OG image placeholder — generated at build time in brand colors.
// Swap for a real photo-based OG image when one exists.
export const alt = "Lowery's Landscaping — Lawn Care in Denton County, TX";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#b7c14e",
          color: "#1e3315",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 110,
            fontWeight: 900,
            letterSpacing: -2,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          Lowery&apos;s
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: 14,
            textTransform: "uppercase",
            marginTop: 10,
          }}
        >
          Landscaping
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            fontWeight: 700,
            background: "#1e3315",
            color: "#c9d360",
            padding: "14px 34px",
            borderRadius: 12,
          }}
        >
          Lawn Care · Denton County, TX · (682) 390-5608
        </div>
      </div>
    ),
    { ...size }
  );
}
