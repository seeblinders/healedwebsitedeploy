import type { Metadata } from "next";
import HomePageClient from "./HomePageClient";
import { routing } from "@/i18n/routing";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return <HomePageClient />;
}
