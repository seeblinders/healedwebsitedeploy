import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import LegalPage, { LegalSection } from "@/components/LegalPage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("termsTitle");
  const description = t("termsDescription");

  return {
    title,
    description,
    alternates: {
      canonical: "/terms",
    },
    openGraph: {
      title: `${title} | Healed`,
      description,
      url: "/terms",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Healed`,
      description,
    },
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Terms" });

  return (
    <LegalPage badge={t("badge")} title={t("title")} updated={t("updated")}>
      <LegalSection heading={t("s1Heading")}>
        <p>{t("s1Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s2Heading")}>
        <p>{t("s2Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s3Heading")}>
        <p>{t("s3Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s4Heading")}>
        <p>{t("s4Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s5Heading")}>
        <p>{t("s5Intro")}</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>{t("s5Item1")}</li>
          <li>{t("s5Item2")}</li>
          <li>{t("s5Item3")}</li>
        </ul>
      </LegalSection>

      <LegalSection heading={t("s6Heading")}>
        <p>{t("s6Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s7Heading")}>
        <p>{t("s7Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s8Heading")}>
        <p>{t("s8Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s9Heading")}>
        <p>{t("s9Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s10Heading")}>
        <p>{t("s10Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s11Heading")}>
        <p>
          {t("s11BodyBefore")}{" "}
          <a href="mailto:info@healedapp.net" className="text-white underline underline-offset-2">
            info@healedapp.net
          </a>
          {t("s11BodyAfter")}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
