import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 628,
};

export const contentType = "image/png";

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "52px",
          background: "linear-gradient(140deg, rgb(15, 23, 42), rgb(15, 118, 110))",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: "0.08em", opacity: 0.95 }}>
          GLP-1 COMPARE INDIA 2026
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px", maxWidth: "940px" }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.1 }}>
            GLP-1 Decisions With Trial-Stage Context
          </div>
          <div style={{ fontSize: 29, opacity: 0.95, lineHeight: 1.35 }}>
            Compare semaglutide, liraglutide, tirzepatide, and retatrutide in one place.
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
