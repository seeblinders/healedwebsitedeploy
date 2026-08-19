import { NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";
import NotFoundContent from "@/components/NotFoundContent";

export default async function RootNotFound() {
  const locale = routing.defaultLocale;
  const messages = (await import(`../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir="ltr" style={{ height: "100%" }}>
      <body style={{ height: "100%", margin: 0 }}>
        <div id="root" style={{ height: "100%" }}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div
              className="min-h-screen flex flex-col"
              style={{ fontFamily: '"Figtree", sans-serif', background: "#0f0f0f" }}
            >
              <NotFoundContent />
            </div>
          </NextIntlClientProvider>
        </div>
      </body>
    </html>
  );
}
