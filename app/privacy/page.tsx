import type { Metadata } from "next";
import LegalPage, { LegalSection } from "@/components/LegalPage";

const updated = "August 19, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Healed collects, uses, and protects your information, including data from our waitlist, support, and subscription forms.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Healed",
    description:
      "Learn how Healed collects, uses, and protects your information.",
    url: "/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Healed",
    description:
      "Learn how Healed collects, uses, and protects your information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage badge="Legal" title="Privacy Policy" updated={updated}>
      <LegalSection heading="1. Overview">
        <p>
          Healed (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the healedapp.net
          website and the Healed mobile application (together, the &quot;Service&quot;). This
          Privacy Policy explains what information we collect, how we use it, and the choices you
          have. By using the Service, you agree to the collection and use of information as
          described here.
        </p>
      </LegalSection>

      <LegalSection heading="2. Information We Collect">
        <p>We currently collect information you voluntarily provide to us, including:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>
            <strong className="text-white/85">Email address</strong> — when you join our
            waitlist or subscribe to updates via the website.
          </li>
          <li>
            <strong className="text-white/85">Name, email address, and message content</strong> —
            when you submit the support and feedback form.
          </li>
        </ul>
        <p>
          We do not currently require account creation, and we do not collect payment
          information, health records, or sensitive personal data through this website.
        </p>
      </LegalSection>

      <LegalSection heading="3. How We Use Your Information">
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>To notify you when early access to the Healed app becomes available.</li>
          <li>To respond to support requests and feedback you submit.</li>
          <li>To send occasional product updates related to Healed.</li>
          <li>To improve and monitor the performance of our website.</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </LegalSection>

      <LegalSection heading="4. Third-Party Services">
        <p>We use the following third-party services to operate the Service:</p>
        <ul className="list-disc pl-5 flex flex-col gap-1.5">
          <li>
            <strong className="text-white/85">Resend</strong> — to deliver support and feedback
            notifications to our team.
          </li>
          <li>
            <strong className="text-white/85">Google Sheets / Google Apps Script</strong> — to
            store waitlist and subscription email addresses.
          </li>
          <li>
            <strong className="text-white/85">Vercel</strong> — to host this website.
          </li>
        </ul>
        <p>
          These providers process data on our behalf and are bound by their own privacy and
          security practices.
        </p>
      </LegalSection>

      <LegalSection heading="5. Data Retention">
        <p>
          We retain the information you provide for as long as necessary to fulfill the purposes
          described in this policy, or until you request deletion.
        </p>
      </LegalSection>

      <LegalSection heading="6. Your Rights">
        <p>
          You may request access to, correction of, or deletion of your personal information at
          any time by contacting us at{" "}
          <a href="mailto:info@healedapp.net" className="text-white underline underline-offset-2">
            info@healedapp.net
          </a>
          . You may also unsubscribe from email updates at any time.
        </p>
      </LegalSection>

      <LegalSection heading="7. Children's Privacy">
        <p>
          The Service is not directed to individuals under the age of 18. We do not knowingly
          collect personal information from children.
        </p>
      </LegalSection>

      <LegalSection heading="8. Changes to This Policy">
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page
          with an updated &quot;Last updated&quot; date.
        </p>
      </LegalSection>

      <LegalSection heading="9. Contact Us">
        <p>
          If you have questions about this Privacy Policy, contact us at{" "}
          <a href="mailto:info@healedapp.net" className="text-white underline underline-offset-2">
            info@healedapp.net
          </a>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
