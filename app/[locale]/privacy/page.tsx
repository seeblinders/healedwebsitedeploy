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
  const title = t("privacyTitle");
  const description = t("privacyDescription");

  return {
    title,
    description,
    alternates: {
      canonical: "/privacy",
    },
    openGraph: {
      title: `${title} | Healed`,
      description,
      url: "/privacy",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Healed`,
      description,
    },
  };
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Privacy" });

  return (
    <LegalPage badge={t("badge")} title={t("title")} updated={t("updated")}>
      <LegalSection heading={t("s1Heading")}>
        <p>{t("s1Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s2Heading")}>
        <p>{t("s2Intro")}</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>
            <strong className="text-white/85">{t("s2Item1Bold")}</strong> {t("s2Item1Rest")}
          </li>
          <li>
            <strong className="text-white/85">{t("s2Item2Bold")}</strong> {t("s2Item2Rest")}
          </li>
        </ul>
        <p>{t("s2Outro")}</p>
      </LegalSection>

      <LegalSection heading={t("s3Heading")}>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>{t("s3Item1")}</li>
          <li>{t("s3Item2")}</li>
          <li>{t("s3Item3")}</li>
          <li>{t("s3Item4")}</li>
        </ul>
        <p>{t("s3Outro")}</p>
      </LegalSection>

      <LegalSection heading={t("s4Heading")}>
        <p>{t("s4Intro")}</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>
            <strong className="text-white/85">{t("s4Item1Bold")}</strong> {t("s4Item1Rest")}
          </li>
          <li>
            <strong className="text-white/85">{t("s4Item2Bold")}</strong> {t("s4Item2Rest")}
          </li>
          <li>
            <strong className="text-white/85">{t("s4Item3Bold")}</strong> {t("s4Item3Rest")}
          </li>
        </ul>
        <p>{t("s4Outro")}</p>
      </LegalSection>

      <LegalSection heading={t("s5Heading")}>
        <p>{t("s5Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s6Heading")}>
        <p>
          {t("s6BodyBefore")}{" "}
          <a href="mailto:info@healedapp.net" className="text-white underline underline-offset-2">
            info@healedapp.net
          </a>
          {t("s6BodyAfter")}
        </p>
      </LegalSection>

      <LegalSection heading={t("s7Heading")}>
        <p>{t("s7Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s8Heading")}>
        <p>{t("s8Body")}</p>
      </LegalSection>

      <LegalSection heading={t("s9Heading")}>
        <p>
          {t("s9BodyBefore")}{" "}
          <a href="mailto:info@healedapp.net" className="text-white underline underline-offset-2">
            info@healedapp.net
          </a>
          {t("s9BodyAfter")}
        </p>
      </LegalSection>
    </LegalPage>
  );
}
