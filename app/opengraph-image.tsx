import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "56px",
          background:
            "linear-gradient(135deg, rgb(7, 89, 133) 0%, rgb(15, 118, 110) 45%, rgb(13, 148, 136) 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            padding: "10px 16px",
            borderRadius: "9999px",
            border: "1px solid rgba(255,255,255,0.45)",
            fontSize: 24,
            letterSpacing: "0.08em",
          }}
        >
          GLP-1 Compare India
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "920px" }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.08 }}>
            Semaglutide vs Tirzepatide vs Retatrutide
          </div>
          <div style={{ fontSize: 30, opacity: 0.95, lineHeight: 1.35 }}>
            Molecule data, India brand filters, live cost calculator, and trial-stage research context.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
