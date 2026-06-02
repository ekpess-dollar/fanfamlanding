import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/page/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — FAN FAM",
  description: "How FAN FAM collects, uses and protects your personal data.",
};

const sections: LegalSection[] = [
  {
    id: "overview",
    heading: "1. Overview",
    body: (
      <p>
        This Privacy Policy explains what information FAN FAM collects, how we use
        it, and the choices you have. We aim to collect only what we need to run
        the Service and to keep your data secure.
      </p>
    ),
  },
  {
    id: "data-we-collect",
    heading: "2. Information we collect",
    body: (
      <ul>
        <li><strong>Account data:</strong> name, email, username, and profile details you provide.</li>
        <li><strong>Content:</strong> posts, messages, media and live streams you create or share.</li>
        <li><strong>Payment data:</strong> processed by our payment partners; we store limited transaction records.</li>
        <li><strong>Usage data:</strong> device, log, and analytics data about how you use the Service.</li>
      </ul>
    ),
  },
  {
    id: "how-we-use",
    heading: "3. How we use your information",
    body: (
      <ul>
        <li>To provide, maintain and improve the Service.</li>
        <li>To process payments, subscriptions and creator payouts.</li>
        <li>To keep FAN FAM safe and prevent fraud and abuse.</li>
        <li>To communicate with you about your account and updates.</li>
      </ul>
    ),
  },
  {
    id: "sharing",
    heading: "4. How we share information",
    body: (
      <p>
        We do not sell your personal data. We share information with service
        providers who help us operate (such as payment processors and hosting
        providers), and where required by law. Public profile content is visible to
        other users as part of the Service.
      </p>
    ),
  },
  {
    id: "your-rights",
    heading: "5. Your rights and choices",
    body: (
      <>
        <p>
          Depending on where you live, you may have rights to access, correct,
          export, or delete your personal data, and to object to certain
          processing.
        </p>
        <p>
          You can manage most data from your account settings, or contact us to
          exercise your rights.
        </p>
      </>
    ),
  },
  {
    id: "security",
    heading: "6. Data security & retention",
    body: (
      <p>
        We use technical and organisational measures to protect your data, and we
        retain it only as long as needed to provide the Service or meet legal
        obligations. No system is perfectly secure, but we work hard to protect you.
      </p>
    ),
  },
  {
    id: "cookies",
    heading: "7. Cookies",
    body: (
      <p>
        We use cookies and similar technologies as described in our{" "}
        <a href="/legal/cookies">Cookie Notice</a>. You can control cookies through
        your browser and our preferences tools.
      </p>
    ),
  },
  {
    id: "contact",
    heading: "8. Contact us",
    body: (
      <p>
        For privacy questions or requests, email{" "}
        <a href="mailto:privacy@fanfam.app">privacy@fanfam.app</a> or visit our{" "}
        <a href="/contact">Contact</a> page.
      </p>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro="Your privacy matters. Here's how we handle your personal data on FAN FAM."
      updated="1 June 2026"
      sections={sections}
    />
  );
}
