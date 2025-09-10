import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: 64,
          background: "linear-gradient(135deg,#0b0b0b,#111827)",
          color: "white",
          fontSize: 48,
        }}
      >
        <div style={{ opacity: 0.7, fontSize: 20, marginBottom: 16 }}>Ajay Patil</div>
        <div style={{ fontWeight: 700 }}>AI-first Full-Stack Developer</div>
        <div style={{ opacity: 0.8, fontSize: 24, marginTop: 8 }}>Portfolio</div>
      </div>
    ),
    { ...size }
  );
}


