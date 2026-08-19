import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

const STARS = Array.from({ length: 50 }, (_, i) => ({
  left: `${((i * 73 + 13) % 1000) / 10}%`,
  top: `${((i * 117 + 5) % 700) / 10}%`,
  size: (i % 3) + 1,
  opacity: 0.25 + (i % 7) / 10,
}));

export default function NotFound() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-[800px] pt-40 pb-24 px-4 md:px-11 w-full flex-1 overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "600px",
          background:
            "radial-gradient(55% 50% at 50% 0%, rgba(255,47,0,0.14) 0%, rgba(36,99,90,0.08) 45%, transparent 75%)",
        }}
      />

      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-0">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: s.size, height: s.size, left: s.left, top: s.top, opacity: s.opacity }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[560px] mx-auto text-center">
        <div
          className="px-4 py-1.5 rounded-full mb-6"
          style={{ background: "#292929" }}
        >
          <span className="text-white/80 text-[13px] font-medium tracking-wide">404 error</span>
        </div>

        <h1 className="text-white font-medium mb-4 text-[64px] md:text-[88px] tracking-[-2px] leading-none">
          404
        </h1>

        <h2 className="text-white font-medium mb-3 text-[24px] md:text-[28px] tracking-[-0.3px] leading-[1.2]">
          This page took a different path
        </h2>

        <p className="text-[16px] mb-10 max-w-[420px]" style={{ color: "rgba(255,255,255,0.55)" }}>
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you
          back on track.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto px-4 sm:px-0">
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] text-white text-[16px] font-medium tracking-[-0.16px] transition-transform active:scale-95"
            style={{
              background: "#ff2f00",
              border: "1px solid #ff2f01",
              boxShadow: "0px 14px 6px -8px rgba(255,47,0,0.2), inset 0px 2px 1px 0px rgba(255,255,255,0.5)",
            }}
          >
            Back to home
          </Link>
          <Link
            href="/waitlist"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-[14px] text-white text-[16px] font-medium tracking-[-0.16px] transition-colors hover:bg-white/5 active:scale-95"
            style={{ background: "#202020", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            Join the waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
