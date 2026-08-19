import type { Metadata } from "next";
import WaitlistPageClient from "./WaitlistPageClient";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Get early access to Healed — join the waitlist to connect with a verified sobriety squad on your recovery journey.",
  alternates: {
    canonical: "/waitlist",
  },
  openGraph: {
    title: "Join the Waitlist | Healed",
    description:
      "Get early access to Healed — join the waitlist to connect with a verified sobriety squad on your recovery journey.",
    url: "/waitlist",
  },
  twitter: {
    title: "Join the Waitlist | Healed",
    description:
      "Get early access to Healed — join the waitlist to connect with a verified sobriety squad on your recovery journey.",
  },
};

export default function WaitlistPage() {
  return <WaitlistPageClient />;
}
