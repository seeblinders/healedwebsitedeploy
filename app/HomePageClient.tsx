"use client";

import { motion } from "motion/react";
import { toast } from "sonner";
import imgHeroBg from "@/imports/1920WLight/51e418b44a0dea07f84c79b546b0d0d2188704e2.png";
import imgNoise from "@/imports/1920WLight/8f539e6ccebe2552fe1286f6b59b4981ff5176f3.png";
import imgMockup from "@/imports/1920WLight/iphone mockup screen.png";
import svgPaths from "@/imports/1920WLight/svg-2vi05esx8g";
import { imgBgImage } from "@/imports/1920WLight/svg-2qa5s";
import imgAppLogo from "@/imports/1920WLight/c2352550d6ca2dfe89f6ffd7c61da1e1734903b9.png";

export default function HomePageClient() {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-[800px] pt-40 pb-24 px-4 md:px-11 overflow-hidden">
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
              src={imgHeroBg.src}
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
            backgroundImage: `url("${imgNoise.src}")`,
            backgroundSize: "128px 128px",
            mixBlendMode: "screen",
          }}
        />

        {/* Content */}
        <div className="relative flex flex-col items-center gap-8 max-w-[800px] w-full">
          {/* Hero title */}
          <motion.h2
            className="font-medium text-center text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] tracking-[-1.12px] md:tracking-[-1.44px]"
            style={{ color: "#121111" }}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Connect with verified sobriety<br />squad on your recovery journey
          </motion.h2>

          {/* Phone mockup */}
          <motion.div 
            className="relative w-full max-w-[350px] md:max-w-[400px] shrink-0 px-2 md:px-0"
            initial={{ opacity: 0, y: 80, scale: 0.98, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <img src={imgMockup.src} alt="App Mockup" className="w-full h-auto object-contain" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            className="text-[20px] font-medium text-center tracking-[-0.4px] leading-[29px] max-w-[440px]"
            style={{ color: "rgba(18,17,17,0.75)" }}
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            {"We're here to help you get the most out of your recovery journey"}
          </motion.p>

          {/* Download buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-[16px] sm:gap-[26px] w-full sm:w-auto px-4 sm:px-0"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
          >
            <button
              onClick={() => toast("iOS app is coming soon!", { icon: <img src={imgAppLogo.src} alt="Logo" className="w-[18px] h-[18px] rounded-[4px] object-cover" /> })}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-[14px] text-white text-[18px] font-medium tracking-[-0.18px] transition-transform active:scale-95"
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
              onClick={() => toast("Android app is coming soon!", { icon: <img src={imgAppLogo.src} alt="Logo" className="w-[18px] h-[18px] rounded-[4px] object-cover" /> })}
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-3 sm:py-2 rounded-[14px] text-white text-[18px] font-medium tracking-[-0.18px] transition-transform active:scale-95"
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
          </motion.div>
        </div>
      </section>
    </>
  );
}
