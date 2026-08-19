"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { toast } from "sonner";
import { Globe } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import imgAppLogo from "@/imports/1920WLight/c2352550d6ca2dfe89f6ffd7c61da1e1734903b9.png";

const NEXT_LOCALE: Record<string, string> = {
  en: "ar",
  ar: "en",
};

export default function FloatingNav() {
  const t = useTranslations("Nav");
  const tFooter = useTranslations("Footer");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const { scrollY } = useScroll();
  const maxWidth = useTransform(scrollY, [0, 160], [560, 440], { clamp: true });

  const handleLanguageToggle = () => {
    router.replace(pathname, { locale: NEXT_LOCALE[locale] });
  };

  return (
    <motion.nav
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)]"
      style={{ maxWidth }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.1 }}
    >
      <div
        className="flex items-center justify-center overflow-clip ps-[20px] pe-[10px] py-[10px] relative rounded-[72px] w-full"
        style={{ background: "#171717", backdropFilter: "blur(6px)" }}
      >
        <div className="flex flex-1 isolate items-center justify-between relative">
          <div className="flex flex-1 gap-[36px] items-center pe-[20px] relative z-[2]">
            <Link href="/">
              <img src={imgAppLogo.src} alt="Logo" className="size-[26px] rounded-[6px] shrink-0 object-cover" />
            </Link>
            <div className="flex flex-1 items-center justify-end gap-5">
              <Link href="/waitlist" className="text-[15px] font-medium tracking-[-0.15px] whitespace-nowrap hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>
                {t("waitlist")}
              </Link>
              <Link href="/support" className="text-[15px] font-medium tracking-[-0.15px] whitespace-nowrap hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.65)" }}>
                {t("support")}
              </Link>
            </div>
          </div>
          <div className="relative shrink-0 z-[1] flex items-center gap-2">
            <button
              type="button"
              onClick={handleLanguageToggle}
              aria-label={tFooter("language")}
              className="flex items-center justify-center w-[34px] h-[34px] rounded-full transition-colors hover:bg-white/10"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              <Globe className="w-[16px] h-[16px]" />
            </button>

            <button
              onClick={() => toast(t("comingSoon"), { icon: <img src={imgAppLogo.src} alt="Logo" className="w-[18px] h-[18px] rounded-[4px] object-cover" /> })}
              className="flex items-center justify-center overflow-clip px-[12px] py-[6px] relative rounded-[120px]"
              style={{ background: "#292929" }}
            >
              <span className="text-white text-[15px] font-medium tracking-[-0.15px] whitespace-nowrap">{t("downloadApp")}</span>
              <div className="absolute border border-[#292b2b] border-solid inset-0 rounded-[120px] pointer-events-none" />
              <div className="absolute inset-0 pointer-events-none rounded-[120px]" style={{ boxShadow: "inset 0px -0.482px 0.482px -1.25px rgba(0,0,0,0.68), inset 0px -1.831px 1.831px -2.5px rgba(0,0,0,0.6), inset 0px -8px 8px -3.75px rgba(0,0,0,0.24)" }} />
            </button>
          </div>
        </div>
        <div className="absolute border border-[#404040] border-solid inset-0 pointer-events-none rounded-[72px]" />
      </div>
    </motion.nav>
  );
}
