import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import SupportPageClient from "./SupportPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("supportTitle");
  const description = t("supportDescription");

  return {
    title,
    description,
    alternates: {
      canonical: "/support",
    },
    openGraph: {
      title: `${title} | Healed`,
      description,
      url: "/support",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Healed`,
      description,
    },
  };
}

export default function SupportPage() {
  return <SupportPageClient />;
}
