import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/page/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Notice — FAN FAM",
  description: "How and why FAN FAM uses cookies and similar technologies.",
};

const sections: LegalSection[] = [
  {
    id: "what-are-cookies",
    heading: "1. What are cookies?",
    body: (
      <p>
        Cookies are small text files stored on your device when you visit a
        website. They help the site remember your actions and preferences, and let
        us understand how the Service is used.
      </p>
    ),
  },
  {
    id: "types",
    heading: "2. Types of cookies we use",
    body: (
      <ul>
        <li><strong>Essential:</strong> required to run the Service, sign you in, and keep it secure.</li>
        <li><strong>Preferences:</strong> remember your settings, like language and theme.</li>
        <li><strong>Analytics:</strong> help us understand usage so we can improve FAN FAM.</li>
        <li><strong>Marketing:</strong> measure campaigns and show relevant promotions (only with consent).</li>
      </ul>
    ),
  },
  {
    id: "managing",
    heading: "3. Managing your preferences",
    body: (
      <p>
        You can accept or reject non-essential cookies through our cookie banner and
        preferences centre. You can also control cookies in your browser settings —
        though blocking some may affect how the Service works.
      </p>
    ),
  },
  {
    id: "third-parties",
    heading: "4. Third-party cookies",
    body: (
      <p>
        Some cookies are set by third parties we work with, such as analytics and
        payment providers. Their use of cookies is governed by their own privacy
        policies.
      </p>
    ),
  },
  {
    id: "updates",
    heading: "5. Updates & contact",
    body: (
      <p>
        We may update this notice as our use of cookies changes. For questions,
        email <a href="mailto:privacy@fanfam.app">privacy@fanfam.app</a> or see our{" "}
        <a href="/legal/privacy">Privacy Policy</a>.
      </p>
    ),
  },
];

export default function CookiesPage() {
  return (
    <LegalLayout
      title="Cookie Notice"
      intro="This notice explains how FAN FAM uses cookies and similar technologies, and how you can control them."
      updated="1 June 2026"
      sections={sections}
    />
  );
}
