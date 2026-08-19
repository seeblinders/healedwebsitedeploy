import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WaitlistPageClient from "./WaitlistPageClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("waitlistTitle");
  const description = t("waitlistDescription");

  return {
    title,
    description,
    alternates: {
      canonical: "/waitlist",
    },
    openGraph: {
      title: `${title} | Healed`,
      description,
      url: "/waitlist",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Healed`,
      description,
    },
  };
}

export default function WaitlistPage() {
  return <WaitlistPageClient />;
}
