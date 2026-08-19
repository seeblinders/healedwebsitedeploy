import type { Metadata } from "next";
import SupportPageClient from "./SupportPageClient";

export const metadata: Metadata = {
  title: "Support & Feedback",
  description:
    "Get help or share feedback about Healed — your recovery journey companion. We're here to support your sobriety squad experience.",
  alternates: {
    canonical: "/support",
  },
  openGraph: {
    title: "Support & Feedback | Healed",
    description:
      "Get help or share feedback about Healed — your recovery journey companion.",
    url: "/support",
  },
  twitter: {
    title: "Support & Feedback | Healed",
    description:
      "Get help or share feedback about Healed — your recovery journey companion.",
  },
};

export default function SupportPage() {
  return <SupportPageClient />;
}
