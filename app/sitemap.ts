import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const siteUrl = "https://www.healedapp.net";

const pages: { path: string; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; priority: number }[] = [
  { path: "", changeFrequency: "weekly", priority: 1 },
  { path: "/support", changeFrequency: "monthly", priority: 0.6 },
  { path: "/waitlist", changeFrequency: "weekly", priority: 0.8 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pages.flatMap(({ path, changeFrequency, priority }) => {
    const languages = Object.fromEntries(
      routing.locales.map((locale) => [
        locale,
        locale === routing.defaultLocale
          ? `${siteUrl}${path}`
          : `${siteUrl}/${locale}${path}`,
      ])
    );

    return routing.locales.map((locale) => ({
      url: languages[locale],
      lastModified,
      changeFrequency,
      priority,
      alternates: { languages },
    }));
  });
}
