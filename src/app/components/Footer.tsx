import { useState } from "react";
import { toast } from "sonner";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router";
import imgDarkBg from "@/imports/1920WLight/1c5d1870b74fe181d24a03be5ace052f8fbff062.png";
import imgAppLogo from "@/imports/1920WLight/c2352550d6ca2dfe89f6ffd7c61da1e1734903b9.png";
import { imgBgImage1 } from "@/imports/1920WLight/svg-2qa5s";

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
  </svg>
);

const STARS = Array.from({ length: 46 }, (_, i) => ({
  left: `${((i * 73 + 13) % 1000) / 10}%`,
  top: `${((i * 117 + 5) % 600) / 10}%`,
  size: (i % 3) + 1,
  opacity: 0.3 + (i % 7) / 10,
}));

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="px-2 pb-2 mt-auto">
      <div
        className="relative rounded-[32px] overflow-hidden flex flex-col items-center justify-center bg-[#0f0f0f] pt-[150px] md:pt-[237px] pb-[400px] md:pb-[328px] px-6 md:px-12"
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
        <div className="relative z-10 max-w-[560px] text-center px-4">
          <h1
            className="font-medium text-white text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] tracking-[-1.12px] md:tracking-[-1.44px]"
          >
            Connect with verified sobriety squad on your recovery journey
          </h1>
        </div>

        {/* Footer bar */}
        <div
          className="absolute bottom-0 px-4 md:px-6 w-full max-w-[1260px]"
        >
          <div className="absolute top-0 left-0 right-0" style={{ borderTop: "1px dashed rgba(255,255,255,0.12)" }} />
          <div
            className="flex flex-col md:flex-row items-center md:items-start justify-between py-6 md:py-0 md:h-[178px]"
            style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.12)" }}
          >
            {/* Nav links */}
            <div className="flex flex-row md:flex-col gap-6 md:gap-3.5 py-4 md:py-8">
              <Link to="/" className="text-white text-[15px] font-medium tracking-[-0.15px] hover:opacity-80 transition-opacity">Home</Link>
              <Link to="/support" className="text-white text-[15px] font-medium tracking-[-0.15px] hover:opacity-80 transition-opacity">Support</Link>
            </div>

            {/* Newsletter */}
            <div
              className="flex flex-col gap-3 h-full pt-6 md:pt-8 md:pl-6 overflow-hidden w-full md:w-[384px] md:border-l border-dashed border-white/12 mt-6 md:mt-0"
            >
              <div className="flex items-center justify-between">
                <span className="text-white text-[16px] font-medium tracking-[-0.16px]">Stay in touch</span>
                <div className="flex items-center gap-4">
                  <a href="https://www.instagram.com/healed.app/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Instagram className="w-[20px] h-[20px]" />
                  </a>
                  <a href="https://www.tiktok.com/@healed.app" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <TiktokIcon className="w-[18px] h-[18px]" />
                  </a>
                  <a href="https://www.linkedin.com/company/healedapp" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-[20px] h-[20px]" />
                  </a>
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
                    onClick={() => {
                      if (email) {
                        toast("Thanks for joining! The app is coming soon.", { icon: <img src={imgAppLogo} alt="Logo" className="w-[18px] h-[18px] rounded-[4px] object-cover" /> });
                        setEmail("");
                      } else {
                        toast.error("Please enter your email address first.");
                      }
                    }}
                    className="h-full text-white text-[16px] px-4 rounded-[8px] whitespace-nowrap transition-colors hover:bg-black active:scale-95"
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
  );
}
