import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeading } from "@/components/ui-blocks";
import { LeadForm } from "@/components/LeadForm";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact NetSecure Foundation | Jaipur, Rajasthan" },
      { name: "description", content: "Contact NetSecure Foundation for cyber awareness sessions, partnerships, media, or donations. Jaipur, Rajasthan. +91-7851006262." },
      { property: "og:title", content: "Contact NetSecure Foundation" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Contact" title="Let's work together." subtitle="Request a session, partner with us, or just say hello." />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading title="Reach us directly." />
            <div className="space-y-4">
              <InfoCard icon={Phone}><a href={`tel:${SITE.phoneTel}`} className="font-display text-xl font-bold hover:text-teal">{SITE.phone}</a><p className="text-xs text-muted-foreground">Mon–Sat, 10am–6pm IST</p></InfoCard>
              <InfoCard icon={Mail}><a href={`mailto:${SITE.email}`} className="font-display text-xl font-bold hover:text-teal break-all">{SITE.email}</a><p className="text-xs text-muted-foreground">Replies within 48 hours</p></InfoCard>
              <InfoCard icon={MapPin}><div className="font-medium">{SITE.address}</div></InfoCard>
              <InfoCard icon={Clock}><div className="font-medium">Monday – Saturday</div><p className="text-xs text-muted-foreground">10:00 AM – 6:00 PM IST</p></InfoCard>
            </div>
            <div className="mt-6 flex gap-2">
              {[
                { i: Instagram, h: SITE.social.instagram, l: "Instagram" },
                { i: Facebook, h: SITE.social.facebook, l: "Facebook" },
                { i: Linkedin, h: SITE.social.linkedin, l: "LinkedIn" },
                { i: Youtube, h: SITE.social.youtube, l: "YouTube" },
              ].map((s) => (
                <a key={s.l} href={s.h} target="_blank" rel="noreferrer" aria-label={s.l} className="grid h-11 w-11 place-items-center rounded-lg border border-border hover:bg-muted">
                  <s.i className="h-4 w-4" />
                </a>
              ))}
            </div>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="NetSecure Foundation Office, Mansarovar Jaipur"
                src="https://www.google.com/maps?q=Mansarovar+Jaipur+Rajasthan&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
            <h2 className="font-display text-2xl font-bold">Send us a message</h2>
            <p className="mt-2 text-sm text-muted-foreground">We respond within 48 hours.</p>
            <div className="mt-6">
              <LeadForm
                fields={[
                  { name: "name", label: "Name", required: true },
                  { name: "email", label: "Email", type: "email", required: true },
                  { name: "phone", label: "Phone", type: "tel" },
                  { name: "subject", label: "Subject", type: "select", required: true, options: ["Session Request", "Partnership", "Media", "Donation", "Other"] },
                  { name: "message", label: "Message", type: "textarea", required: true, span: 2 },
                ]}
                submitLabel="Send message"
                successMessage="Thank you! We'll respond within 48 hours."
              />
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function InfoCard({ icon: Icon, children }: { icon: React.ComponentType<{ className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-teal/15 text-teal"><Icon className="h-5 w-5" /></span>
      <div>{children}</div>
    </div>
  );
}
