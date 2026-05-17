import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui-blocks";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | NetSecure Foundation" },
      { name: "description", content: "Terms and conditions for using the NetSecure Foundation website and services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: May 2026" />
      <Section>
        <article className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-foreground/85">
          <p>By accessing or using netsecurefdn.org and the services of NetSecure Foundation (CIN {SITE.cin}), you agree to be bound by these Terms & Conditions.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Use of the website</h2>
          <p>You agree to use the website for lawful purposes only. You may not use the site in any way that causes, or may cause, damage to the site or impairment of its availability.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Intellectual property</h2>
          <p>All content — text, images, logos, graphics — is owned by NetSecure Foundation or used with permission. You may share content for non-commercial educational purposes with attribution.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Donations</h2>
          <p>All donations made to NetSecure Foundation are voluntary and non-refundable. Donors will receive an 80G tax receipt within 48 hours of confirmed payment.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Volunteer programme</h2>
          <p>Volunteers are not employees of NetSecure Foundation. Volunteer activities are unpaid. Conduct must remain professional and aligned with the Foundation's values.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Limitation of liability</h2>
          <p>The information on this site is for general awareness only. NetSecure Foundation is not liable for any loss arising from reliance on the information provided.</p>
          <h2 className="font-display text-2xl font-bold text-foreground">Governing law</h2>
          <p>These terms are governed by the laws of India, with exclusive jurisdiction of the courts at Jaipur, Rajasthan.</p>
        </article>
      </Section>
    </SiteLayout>
  );
}
