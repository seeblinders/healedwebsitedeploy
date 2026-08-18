import { useState } from "react";
import imgHeroBg from "@/imports/1920WLight/51e418b44a0dea07f84c79b546b0d0d2188704e2.png";
import imgNoise from "@/imports/1920WLight/8f539e6ccebe2552fe1286f6b59b4981ff5176f3.png";
import imgPhoneScreen from "@/imports/1920WLight/e8e0690cb90cf5d4048081ec5e35b0d8829065af.png";
import imgPhoneFrame from "@/imports/1920WLight/72769d50a3e3404e03b312d5d72f93d2322926f8.png";
import imgDarkBg from "@/imports/1920WLight/1c5d1870b74fe181d24a03be5ace052f8fbff062.png";
import imgAppLogo from "@/imports/1920WLight/c2352550d6ca2dfe89f6ffd7c61da1e1734903b9.png";
import svgPaths from "@/imports/1920WLight/svg-2vi05esx8g";
import { imgBgImage, imgBgImage1, imgLogo, imgText } from "@/imports/1920WLight/svg-2qa5s";

const STARS = Array.from({ length: 46 }, (_, i) => ({
  left: `${((i * 73 + 13) % 1000) / 10}%`,
  top: `${((i * 117 + 5) % 600) / 10}%`,
  size: (i % 3) + 1,
  opacity: 0.3 + (i % 7) / 10,
}));

export default function App() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen" style={{ fontFamily: '"Figtree", sans-serif', background: "#fffaf5" }}>

      {/* ── Floating Nav ── */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[440px]">
        <div
          className="flex items-center justify-center overflow-clip pl-[20px] pr-[10px] py-[10px] relative rounded-[72px] w-full"
          style={{ background: "#171717", backdropFilter: "blur(6px)" }}
        >
          {/* Logo + nav link + CTA */}
          <div className="flex flex-1 isolate items-center justify-between relative">
            {/* Left: logo + Support */}
            <div className="flex flex-1 gap-[36px] items-center pr-[20px] relative z-[2]">
              <img src={imgAppLogo} alt="Logo" className="size-[26px] rounded-[6px] shrink-0 object-cover" />
              <div className="flex flex-1 items-center justify-end">
                <span className="text-[15px] font-medium tracking-[-0.15px] whitespace-nowrap" style={{ color: "rgba(255,255,255,0.65)" }}>
                  Support
                </span>
              </div>
            </div>
            {/* Right: Download App */}
            <div className="relative shrink-0 z-[1]">
              <button className="flex items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[120px]" style={{ background: "#292929" }}>
                <span className="text-white text-[15px] font-medium tracking-[-0.15px] whitespace-nowrap">Download App</span>
                <div className="absolute border border-[#292b2b] border-solid inset-0 rounded-[120px] pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none rounded-[120px]" style={{ boxShadow: "inset 0px -0.482px 0.482px -1.25px rgba(0,0,0,0.68), inset 0px -1.831px 1.831px -2.5px rgba(0,0,0,0.6), inset 0px -8px 8px -3.75px rgba(0,0,0,0.24)" }} />
              </button>
            </div>
          </div>
          {/* Border overlay (matches Figma's absolute border layer) */}
          <div className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[72px]" />
        </div>
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative flex flex-col items-center justify-center min-h-[800px] pt-40 pb-24 px-11 overflow-hidden">

        {/* Hero photo – multiply masked with radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            maskImage: `url("${imgBgImage}")`,
            maskSize: "100% 566px",
            maskRepeat: "no-repeat",
            maskPosition: "top",
            mixBlendMode: "multiply",
          }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={imgHeroBg}
              alt=""
              className="absolute left-0 w-full max-w-none"
              style={{ height: "212%", top: "-56%" }}
            />
          </div>
        </div>

        {/* Noise texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("${imgNoise}")`,
            backgroundSize: "128px 128px",
            mixBlendMode: "screen",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center gap-8 max-w-[800px] w-full">

          {/* Hero title */}
          <h2
            className="font-medium text-center"
            style={{ color: "#121111", fontSize: "44px", letterSpacing: "-1.76px", lineHeight: "48.4px" }}
          >
            Connect with verified sobriety<br />squad on your recovery journey
          </h2>

          {/* Phone mockup */}
          <div className="relative w-[400px] shrink-0" style={{ height: "806px" }}>
            <div className="absolute left-[34px] top-[24px] w-[334px] h-[724px] rounded-[36px] overflow-hidden">
              <img src={imgPhoneScreen} alt="App screenshot" className="w-full h-full object-cover" />
            </div>
            <img
              src={imgPhoneFrame}
              alt="Phone"
              className="absolute top-0 max-w-none h-full"
              style={{ zIndex: 1, left: "2.17%", width: "95.65%" }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-[20px] font-medium text-center tracking-[-0.4px] leading-[29px] max-w-[440px]"
            style={{ color: "rgba(18,17,17,0.75)" }}
          >
            {"We're here to help you get the most out of your recovery journey"}
          </p>

          {/* Download buttons */}
          <div className="flex items-center gap-[26px]">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-[14px] text-white text-[18px] font-medium tracking-[-0.18px]"
              style={{
                background: "#ff2f00",
                border: "1px solid #ff2f01",
                boxShadow: "0px 14px 6px -8px rgba(255,47,0,0.2), inset 0px 2px 1px 0px rgba(255,255,255,0.5)",
              }}
            >
              <svg width="20" height="17" viewBox="0 0 17.5 15.0035" fill="white" className="shrink-0">
                <path d={svgPaths.p1297f300} />
              </svg>
              Download IOS
            </button>
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-[14px] text-white text-[18px] font-medium tracking-[-0.18px]"
              style={{
                background: "#24635a",
                boxShadow: "inset 0px 2px 1px 0px rgba(255,255,255,0.5)",
              }}
            >
              <svg width="18" height="20" viewBox="0 0 15.6248 17.4998" fill="white" className="shrink-0">
                <path d={svgPaths.p2b285c00} />
              </svg>
              Download Android
            </button>
          </div>
        </div>
      </section>

      {/* ── Dark CTA + Footer ── */}
      <div className="px-2 pb-2">
        <div
          className="relative rounded-[32px] overflow-hidden flex flex-col items-center justify-center"
          style={{ background: "#0f0f0f", paddingTop: "237px", paddingBottom: "328px", paddingLeft: "48px", paddingRight: "48px" }}
        >
          {/* Bottom background image – lighten blend */}
          <div
            className="absolute left-[-8px] right-[-8px] bottom-[-1px] pointer-events-none overflow-hidden"
            style={{
              height: "507px",
              maskImage: `url("${imgBgImage1}")`,
              maskSize: "100% 507px",
              maskRepeat: "no-repeat",
              maskPosition: "bottom",
              mixBlendMode: "lighten",
            }}
          >
            <img
              src={imgDarkBg}
              alt=""
              className="absolute left-0 w-full max-w-none"
              style={{ height: "252%", top: "-76%" }}
            />
          </div>

          {/* Stars */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-50">
            {STARS.map((s, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white"
                style={{ width: s.size, height: s.size, left: s.left, top: s.top, opacity: s.opacity }}
              />
            ))}
          </div>

          {/* Main heading */}
          <div className="relative z-10 max-w-[560px] text-center">
            <h1
              className="font-medium text-white"
              style={{ fontSize: "44px", letterSpacing: "-1.76px", lineHeight: "48.4px" }}
            >
              Connect with verified sobriety squad on your recovery journey
            </h1>
          </div>

          {/* Footer bar */}
          <div
            className="absolute bottom-0 px-6"
            style={{ left: "16.91%", right: "16.91%", maxWidth: "1260px" }}
          >
            <div className="absolute top-0 left-0 right-0" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }} />
            <div
              className="flex items-start justify-between h-[178px]"
              style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.12)" }}
            >
              {/* Nav links */}
              <div className="flex flex-col gap-3.5 py-8">
                <span className="text-white text-[15px] font-medium tracking-[-0.15px] cursor-pointer">Home</span>
                <span className="text-white text-[15px] font-medium tracking-[-0.15px] cursor-pointer">Support</span>
              </div>

              {/* Newsletter */}
              <div
                className="flex flex-col gap-3 h-full pt-8 pl-6 overflow-hidden"
                style={{
                  width: "384px",
                  maxWidth: "384px",
                  borderLeft: "1px dashed rgba(255,255,255,0.12)",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-white text-[16px] font-medium tracking-[-0.16px]">Stay in touch</span>
                  <div className="flex items-center gap-3">
                    <svg width="22" height="22" viewBox="0 0 17.875 17.875" fill="none">
                      <path d={svgPaths.p3d3db280} fill="white" fillOpacity="0.6" />
                    </svg>
                    <svg width="22" height="22" viewBox="0 0 17.875 17.875" fill="none">
                      <path d={svgPaths.p33540d00} fill="white" fillOpacity="0.6" />
                    </svg>
                  </div>
                </div>
                <div
                  className="relative flex items-stretch rounded-[12px] overflow-hidden"
                  style={{ background: "rgba(18,17,17,0.75)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <input
                    type="email"
                    placeholder="name@email.com"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="flex-1 bg-transparent text-[16px] pl-4 py-3.5 outline-none text-[rgba(255,255,255,0.65)] placeholder:text-[rgba(255,255,255,0.65)]"
                    style={{ paddingRight: "138px" }}
                  />
                  <div className="absolute right-1 top-1 bottom-1">
                    <button
                      className="h-full text-white text-[16px] px-4 rounded-[8px] whitespace-nowrap"
                      style={{ background: "#292929" }}
                    >
                      ↵  Subscribe
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Made in Framer badge ── */}
      <div className="fixed bottom-5 right-5 z-50">
        <div className="relative h-[38px] w-[140px] bg-white rounded-[11px] flex items-center justify-center gap-2.5 px-3"
          style={{ boxShadow: "0px 0.6px 1.6px -1.5px rgba(0,0,0,0.17), 0px 2.3px 6px -3px rgba(0,0,0,0.14), 0px 10px 26px -4.5px rgba(0,0,0,0.02)" }}
        >
          <div
            className="shrink-0"
            style={{
              width: 12, height: 20, background: "black",
              maskImage: `url("${imgLogo}")`,
              maskSize: "12px 20px",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
          <div
            className="shrink-0"
            style={{
              width: 97, height: 10, background: "black",
              maskImage: `url("${imgText}")`,
              maskSize: "97px 10px",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
        </div>
      </div>

    </div>
  );
}
