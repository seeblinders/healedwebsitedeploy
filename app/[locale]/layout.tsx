import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import Script from "next/script";
import "@/styles/index.css";
import AppShell from "@/components/AppShell";
import { routing } from "@/i18n/routing";

const siteUrl = "https://www.healedapp.net";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("siteTitle");
  const description = t("siteDescription");

  return {
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
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        ar: "/ar",
      },
    },
    manifest: "/site.webmanifest",
    openGraph: {
      type: "website",
      url: locale === routing.defaultLocale ? "/" : `/${locale}`,
      siteName: "Healed",
      title,
      description,
      locale: locale === "ar" ? "ar_AR" : "en_US",
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
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: "Metadata" });
  const description = t("siteDescription");

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

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir} style={{ height: "100%" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body style={{ height: "100%", margin: 0 }}>
        <div id="root" style={{ height: "100%" }}>
          <NextIntlClientProvider>
            <AppShell>{children}</AppShell>
          </NextIntlClientProvider>
        </div>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NNJ4VMGB2Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NNJ4VMGB2Z');
          `}
        </Script>
      </body>
    </html>
  );
}
