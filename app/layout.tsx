import type { Metadata } from "next";
import "@/styles/index.css";
import AppShell from "@/components/AppShell";

const siteUrl = "https://www.healedapp.net";
const title = "Healed — Connect with a Verified Sobriety Squad";
const description =
  "Healed connects you with a verified sobriety squad on your recovery journey. Find accountability, community, and support — anytime, anywhere.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Healed",
  },
  description,
  keywords: [
    "sobriety app",
    "recovery journey",
    "addiction recovery",
    "sober community",
    "accountability app",
    "sobriety support",
    "recovery support group",
  ],
  applicationName: "Healed",
  authors: [{ name: "Healed" }],
  creator: "Healed",
  publisher: "Healed",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Healed",
    title,
    description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Healed",
  url: siteUrl,
  description,
  applicationCategory: "HealthApplication",
  operatingSystem: "iOS, Android",
  publisher: {
    "@type": "Organization",
    name: "Healed",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://www.instagram.com/healed.app/",
      "https://www.tiktok.com/@healed.app",
      "https://www.linkedin.com/company/healedapp",
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" style={{ height: "100%" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ height: "100%", margin: 0 }}>
        <div id="root" style={{ height: "100%" }}>
          <AppShell>{children}</AppShell>
        </div>
      </body>
    </html>
  );
}
