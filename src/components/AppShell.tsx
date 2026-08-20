"use client";

import { Suspense } from "react";
import { Toaster } from "sonner";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";
import { usePathname } from "@/i18n/navigation";
import FloatingNav from "./FloatingNav";
import Footer from "./Footer";

function EmbedGate({ children }: { children: (isEmbed: boolean) => React.ReactNode }) {
  const searchParams = useSearchParams();
  const isEmbed = searchParams.get("embed") === "1";
  return <>{children(isEmbed)}</>;
}

const EMBEDDABLE_PATHS = ["/privacy", "/terms"];

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const locale = useLocale();
  const isLight = pathname === "/";
  const isDark = !isLight;
  const isEmbeddablePath = EMBEDDABLE_PATHS.includes(pathname);

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500"
      style={{
        fontFamily: locale === "ar" ? '"IBM Plex Sans Arabic", sans-serif' : '"Figtree", sans-serif',
        background: isDark ? "#0f0f0f" : "#fffaf5",
      }}
    >
      <Toaster
        position="bottom-center"
        theme="dark"
        toastOptions={{
          style: {
            borderRadius: "9999px",
            width: "max-content",
            margin: "0 auto",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
      />

      {isEmbeddablePath ? (
        <Suspense fallback={null}>
          <EmbedGate>{(isEmbed) => !isEmbed && <FloatingNav />}</EmbedGate>
        </Suspense>
      ) : (
        <FloatingNav />
      )}

      <main className="flex-1 flex flex-col">{children}</main>

      {isEmbeddablePath ? (
        <Suspense fallback={null}>
          <EmbedGate>{(isEmbed) => !isEmbed && <Footer />}</EmbedGate>
        </Suspense>
      ) : (
        <Footer />
      )}
    </div>
  );
}
