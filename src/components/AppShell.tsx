"use client";

import { Toaster } from "sonner";
import { usePathname } from "next/navigation";
import FloatingNav from "./FloatingNav";
import Footer from "./Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDark = pathname === "/support" || pathname === "/waitlist";

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500"
      style={{
        fontFamily: '"Figtree", sans-serif',
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

      <FloatingNav />

      <main className="flex-1 flex flex-col">{children}</main>

      <Footer />
    </div>
  );
}
