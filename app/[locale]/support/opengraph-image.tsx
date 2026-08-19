import { ImageResponse } from "next/og";

export const alt = "Support & Feedback — Healed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
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
          background: "#0f0f0f",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(255,47,0,0.25), transparent 60%)",
          fontFamily: '"Figtree", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#ff2f00",
              display: "flex",
            }}
          />
          <span style={{ color: "white", fontSize: 40, fontWeight: 600 }}>
            Healed
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 60,
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 900,
            lineHeight: 1.15,
            letterSpacing: -1.5,
          }}
        >
          Get support or share your feedback
        </div>
      </div>
    ),
    { ...size }
  );
}
