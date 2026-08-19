import type { ReactNode } from "react";

const STARS = Array.from({ length: 46 }, (_, i) => ({
  left: `${((i * 73 + 13) % 1000) / 10}%`,
  top: `${((i * 117 + 5) % 600) / 10}%`,
  size: (i % 3) + 1,
  opacity: 0.3 + (i % 7) / 10,
}));

export default function LegalPage({
  badge,
  title,
  updated,
  children,
}: {
  badge: string;
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center min-h-[800px] pt-48 pb-24 px-4 md:px-11 w-full flex-1">
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 z-0">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: s.size, height: s.size, left: s.left, top: s.top, opacity: s.opacity }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[760px] mx-auto">
        <div
          className="px-4 py-1.5 rounded-full mb-6"
          style={{ background: "#292929" }}
        >
          <span className="text-white/80 text-[13px] font-medium tracking-wide">{badge}</span>
        </div>

        <h1 className="text-white text-center font-medium mb-3 text-[32px] md:text-[40px] tracking-tight leading-[1.1]">
          {title}
        </h1>

        <p className="text-[14px] mb-12" style={{ color: "rgba(255,255,255,0.4)" }}>
          Last updated {updated}
        </p>

        <div
          className="w-full rounded-[24px] p-6 md:p-10 flex flex-col gap-8"
          style={{ background: "#151515", border: "1px solid rgba(255,255,255,0.04)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-white text-[18px] md:text-[20px] font-medium tracking-[-0.2px]">
        {heading}
      </h2>
      <div
        className="text-[15px] leading-[26px] flex flex-col gap-3"
        style={{ color: "rgba(255,255,255,0.65)" }}
      >
        {children}
      </div>
    </section>
  );
}
