import type { Metadata } from "next";
import { LegalLayout, type LegalSection } from "@/components/page/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Service — FAN FAM",
  description: "The terms and conditions governing your use of FAN FAM.",
};

const sections: LegalSection[] = [
  {
    id: "acceptance",
    heading: "1. Acceptance of terms",
    body: (
      <p>
        By creating an account or using FAN FAM (the “Service”), you agree to be
        bound by these Terms of Service and our{" "}
        <a href="/legal/privacy">Privacy Policy</a>. If you do not agree, please
        do not use the Service. You must be at least 18 years old to use FAN FAM.
      </p>
    ),
  },
  {
    id: "accounts",
    heading: "2. Your account",
    body: (
      <>
        <p>
          You are responsible for safeguarding your account credentials and for
          all activity that happens under your account. Tell us immediately if you
          suspect unauthorised use.
        </p>
        <ul>
          <li>Provide accurate, current information and keep it up to date.</li>
          <li>Do not share, sell, or transfer your account to anyone else.</li>
          <li>We may suspend accounts that violate these Terms.</li>
        </ul>
      </>
    ),
  },
  {
    id: "creators",
    heading: "3. Creators and content",
    body: (
      <>
        <p>
          Creators retain ownership of the content they post. By posting, you
          grant FAN FAM a non-exclusive, worldwide licence to host, display and
          distribute that content for the purpose of operating the Service.
        </p>
        <p>
          You are solely responsible for the content you publish and must have the
          rights to share it. Prohibited content includes anything unlawful,
          infringing, or that violates our community guidelines.
        </p>
      </>
    ),
  },
  {
    id: "payments",
    heading: "4. Payments, subscriptions and payouts",
    body: (
      <>
        <p>
          Fans may purchase subscriptions, coins, and gifts. Creators earn a share
          of revenue, less applicable platform fees disclosed on the{" "}
          <a href="/creators/payouts">Payouts</a> page. Taxes are your
          responsibility.
        </p>
        <p>
          Subscriptions renew automatically until cancelled. Refunds are handled in
          accordance with applicable law and our refund policy.
        </p>
      </>
    ),
  },
  {
    id: "conduct",
    heading: "5. Acceptable use",
    body: (
      <ul>
        <li>No harassment, hate speech, or threats toward other users.</li>
        <li>No spam, fraud, or attempts to manipulate the Service.</li>
        <li>No reverse engineering or unauthorised access to our systems.</li>
        <li>No content involving minors or non-consensual material.</li>
      </ul>
    ),
  },
  {
    id: "termination",
    heading: "6. Termination",
    body: (
      <p>
        You may stop using FAN FAM at any time. We may suspend or terminate your
        access if you breach these Terms or where required by law. Certain
        provisions survive termination, including payment obligations and
        liability limitations.
      </p>
    ),
  },
  {
    id: "liability",
    heading: "7. Disclaimers & limitation of liability",
    body: (
      <p>
        The Service is provided “as is” without warranties of any kind. To the
        fullest extent permitted by law, FAN FAM is not liable for indirect,
        incidental, or consequential damages arising from your use of the Service.
      </p>
    ),
  },
  {
    id: "changes",
    heading: "8. Changes and contact",
    body: (
      <p>
        We may update these Terms from time to time. We will notify you of material
        changes. Questions? Email{" "}
        <a href="mailto:legal@fanfam.app">legal@fanfam.app</a> or visit our{" "}
        <a href="/contact">Contact</a> page.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Service"
      intro="Please read these terms carefully — they govern your access to and use of FAN FAM."
      updated="1 June 2026"
      sections={sections}
    />
  );
}
