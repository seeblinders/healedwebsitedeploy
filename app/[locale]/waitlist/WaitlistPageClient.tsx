"use client";

import { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

const STARS = Array.from({ length: 70 }, (_, i) => ({
  left: `${((i * 73 + 13) % 1000) / 10}%`,
  top: `${((i * 117 + 5) % 900) / 10}%`,
  size: (i % 3) + 1,
  opacity: 0.25 + (i % 7) / 10,
}));

const AVATAR_COLORS = ["#ff2f00", "#24635a", "#8b5cf6", "#e5a54b"];

export default function WaitlistPageClient() {
  const t = useTranslations("Waitlist");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [joined, setJoined] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error(t("invalidEmail"));
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setJoined(true);
      toast.success(t("joinSuccess"));
      setEmail("");
    } catch {
      toast.error(t("joinError"));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[900px] pt-40 md:pt-48 pb-24 px-4 md:px-11 w-full flex-1 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "700px",
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(255,47,0,0.16) 0%, rgba(36,99,90,0.10) 45%, transparent 75%)",
        }}
      />

      {/* Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60 z-0">
        {STARS.map((s, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{ width: s.size, height: s.size, left: s.left, top: s.top, opacity: s.opacity }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center w-full max-w-[720px] mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ background: "#292929", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#ff2f00" }} />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5" style={{ background: "#ff2f00" }} />
          </span>
          <span className="text-white/80 text-[13px] font-medium tracking-wide">{t("badge")}</span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="text-white text-center font-medium mb-5 text-[36px] md:text-[52px] tracking-[-1.6px] leading-[1.05]"
        >
          {t.rich("heading", { br: () => <br /> })}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="text-[18px] md:text-[20px] font-medium text-center tracking-[-0.3px] leading-[28px] max-w-[460px] mb-10"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          {t("subtitle")}
        </motion.p>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="w-full max-w-[480px] rounded-[24px] p-6 md:p-7 relative overflow-hidden"
          style={{
            background: "linear-gradient(180deg, #171717 0%, #121212 100%)",
            border: "1px solid rgba(255,255,255,0.06)",
            boxShadow: "0px 20px 60px -20px rgba(0,0,0,0.6)",
          }}
        >
          {joined ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center gap-3 py-6"
            >
              <div
                className="flex items-center justify-center w-14 h-14 rounded-full"
                style={{ background: "rgba(36,99,90,0.2)", border: "1px solid rgba(36,99,90,0.4)" }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke="#3fae9e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="text-white text-[20px] font-medium tracking-[-0.2px]">{t("joinedTitle")}</h3>
              <p className="text-[15px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                {t("joinedSubtitle")}
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-white/60 text-[13px] font-medium ms-1">{t("emailLabel")}</label>
                <input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-[#202020] text-white px-4 py-3.5 rounded-[12px] outline-none border border-transparent focus:border-[#404040] transition-colors placeholder:text-white/30"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full flex items-center justify-center gap-2 text-white font-medium py-3.5 rounded-[12px] mt-1 transition-transform active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  background: "#ff2f00",
                  border: "1px solid #ff2f01",
                  boxShadow: "0px 14px 6px -8px rgba(255,47,0,0.2), inset 0px 2px 1px 0px rgba(255,255,255,0.5)",
                }}
              >
                {submitting ? t("joining") : t("join")}
              </button>

              <p className="text-center text-[13px]" style={{ color: "rgba(255,255,255,0.4)" }}>
                {t("noSpam")}
              </p>
            </form>
          )}
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="flex items-center gap-3 mt-8"
        >
          <div className="flex -space-x-2.5">
            {AVATAR_COLORS.map((color, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full flex items-center justify-center"
                style={{ background: color, border: "2px solid #0f0f0f" }}
              />
            ))}
          </div>
          <span className="text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.55)" }}>
            {t("socialProof")}
          </span>
        </motion.div>

        {/* App preview */}
        <motion.div
          className="relative w-full max-w-[340px] md:max-w-[400px] shrink-0 mt-14 rounded-[28px] overflow-hidden"
          initial={{ opacity: 0, y: 60, scale: 0.96, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
          style={{ boxShadow: "0px 30px 80px -20px rgba(255,47,0,0.25)" }}
        >
          <img src="/soon.jpg" alt={t("appPreviewAlt")} className="relative w-full h-auto object-contain" />
        </motion.div>
      </div>
    </div>
  );
}
