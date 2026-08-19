import { ImageResponse } from "next/og";

export const alt = "Join the Healed waitlist — early access to your sobriety squad";
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
            "radial-gradient(circle at 50% 0%, rgba(255,47,0,0.28), transparent 60%), radial-gradient(circle at 100% 100%, rgba(36,99,90,0.18), transparent 55%)",
          fontFamily: '"Figtree", sans-serif',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 20px",
            borderRadius: 999,
            background: "#292929",
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#ff2f00",
              display: "flex",
            }}
          />
          <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 24, fontWeight: 500 }}>
            Early access opening soon
          </span>
        </div>
        <div
          style={{
            display: "flex",
            color: "white",
            fontSize: 64,
            fontWeight: 600,
            textAlign: "center",
            maxWidth: 920,
            lineHeight: 1.1,
            letterSpacing: -2,
            marginBottom: 24,
          }}
        >
          Be first on your sobriety squad
        </div>
        <div
          style={{
            display: "flex",
            color: "rgba(255,255,255,0.6)",
            fontSize: 28,
            fontWeight: 500,
            textAlign: "center",
            maxWidth: 760,
          }}
        >
          Join the Healed waitlist for early access
        </div>
      </div>
    ),
    { ...size }
  );
}
