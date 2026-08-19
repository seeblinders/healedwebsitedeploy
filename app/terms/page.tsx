import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

const updated = "August 19, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions for using the Healed website and waitlist.",
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    title: "Terms of Service | Healed",
    description: "Read the terms and conditions for using the Healed website and waitlist.",
    url: "/terms",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service | Healed",
    description: "Read the terms and conditions for using the Healed website and waitlist.",
  },
};

export default function TermsPage() {
  return (
    <LegalPage badge="Legal" title="Terms of Service" updated={updated}>
      <LegalSection heading="1. Agreement to Terms">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your access to and use of the
          healedapp.net website and any related services (together, the &quot;Service&quot;)
          operated by Healed (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By accessing or
          using the Service, you agree to be bound by these Terms. If you do not agree, please do
          not use the Service.
        </p>
      </LegalSection>

      <LegalSection heading="2. Description of Service">
        <p>
          Healed is a mobile application currently in development, designed to help users connect
          with a verified sobriety squad on their recovery journey. This website provides
          information about Healed, a waitlist for early access, and a way to contact us for
          support or feedback. The Healed mobile application is not yet publicly available.
        </p>
      </LegalSection>

      <LegalSection heading="3. Waitlist &amp; Early Access">
        <p>
          Joining the waitlist does not guarantee access to the Healed application, a specific
          release date, or any particular features. We may contact you by email regarding early
          access, product updates, or related announcements.
        </p>
      </LegalSection>

      <LegalSection heading="4. Not Medical Advice">
        <p>
          Healed is intended to support community and accountability during recovery. It is not a
          substitute for professional medical advice, diagnosis, treatment, or emergency services.
          If you are experiencing a medical or mental health emergency, contact emergency services
          or a qualified healthcare provider immediately.
        </p>
      </LegalSection>

      <LegalSection heading="5. Acceptable Use">
        <p>When using the Service, you agree not to:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>Submit false, misleading, or fraudulent information through our forms.</li>
          <li>Attempt to disrupt, overload, or gain unauthorized access to the Service.</li>
          <li>Use the Service for any unlawful purpose.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="6. Intellectual Property">
        <p>
          All content on this website, including text, graphics, logos, and images, is the
          property of Healed or its licensors and is protected by applicable intellectual property
          laws. You may not reproduce or distribute this content without our prior written
          consent.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-Party Links">
        <p>
          Our website may contain links to third-party sites, such as our social media profiles.
          We are not responsible for the content or practices of third-party sites.
        </p>
      </LegalSection>

      <LegalSection heading="8. Disclaimer of Warranties">
        <p>
          The Service is provided &quot;as is&quot; and &quot;as available&quot; without
          warranties of any kind, express or implied. We do not guarantee that the Service will be
          uninterrupted, error-free, or secure.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of Liability">
        <p>
          To the fullest extent permitted by law, Healed shall not be liable for any indirect,
          incidental, special, or consequential damages arising from your use of the Service.
        </p>
      </LegalSection>

      <LegalSection heading="10. Changes to These Terms">
        <p>
          We may revise these Terms from time to time. Continued use of the Service after changes
          are posted constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="11. Contact Us">
        <p>
          If you have questions about these Terms, contact us at{" "}
          <a href="mailto:info@healedapp.net" className="text-white underline underline-offset-2">
            info@healedapp.net
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
