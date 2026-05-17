import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui-blocks";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | NetSecure Foundation" },
      { name: "description", content: "Privacy policy for NetSecure Foundation — how we collect, use and protect your personal data." },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: May 2026" />
      <Section>
        <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85">
          <p>NetSecure Foundation ("we", "our", "us") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and protect information you share with us when interacting with our website, programmes, or donation channels.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Information we collect</h2>
          <p>We collect information you voluntarily provide through forms — including your name, email, phone, organisation, city and any message content — to respond to enquiries, schedule sessions, process donations, and onboard volunteers.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">How we use your information</h2>
          <p>We use your data solely to deliver the service you requested (session scheduling, volunteer onboarding, donation receipts, blog newsletter) and to keep you informed about NetSecure Foundation programmes. We do not sell, rent or share your information with any third party for marketing.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Data security</h2>
          <p>All data is transmitted over HTTPS and stored in access-controlled systems. We comply with the Digital Personal Data Protection Act, 2023 (DPDP Act).</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Your rights</h2>
          <p>You can request access to, correction of, or deletion of your personal data at any time by writing to <a href={`mailto:${SITE.email}`} className="text-teal hover:underline">{SITE.email}</a>.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Cookies & analytics</h2>
          <p>We use Google Analytics 4 and Google Tag Manager to understand how visitors use the site. These cookies do not personally identify you.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Contact</h2>
          <p>For any privacy concern, email <a href={`mailto:${SITE.email}`} className="text-teal hover:underline">{SITE.email}</a> or write to {SITE.address}.</p>
        </article>
      </Section>
    </SiteLayout>
  );
}
