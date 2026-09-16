import { ImageResponse } from "next/og";

// OG image placeholder — generated at build time in brand colors.
// Swap for a real photo-based OG image when one exists.
export const alt = "Lowery Landworks — Lawn Care in DFW, TX";
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
          background: "#242338",
          color: "#f6f4ec",
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
          Lowery
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
          Landworks
        </div>
        <div
          style={{
            marginTop: 36,
            fontSize: 30,
            fontWeight: 700,
            background: "#B88D18",
            color: "#242338",
            padding: "14px 34px",
            borderRadius: 12,
          }}
        >
          Lawn Care · DFW, TX · (469) 301-1977
        </div>
      </div>
    ),
    { ...size }
  );
}
