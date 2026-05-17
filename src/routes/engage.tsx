import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeading } from "@/components/ui-blocks";
import { LeadForm } from "@/components/LeadForm";
import { Award, Heart, Briefcase, Network, BookOpen, Mail, IdCard, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/engage")({
  head: () => ({
    meta: [
      { title: "Volunteer with NetSecure Foundation | Cyber Awareness NGO Jaipur" },
      { name: "description", content: "Join NetSecure Foundation as a volunteer cyber educator in Rajasthan. Help students, women & communities stay safe online. Apply now — free training provided." },
      { property: "og:title", content: "Volunteer with NetSecure Foundation" },
      { property: "og:url", content: "/engage" },
    ],
    links: [{ rel: "canonical", href: "/engage" }],
  }),
  component: Engage,
});

const VALUE = [
  { icon: Heart, t: "Real Impact", d: "Directly protect Rajasthan's youth, women and elderly online." },
  { icon: BookOpen, t: "Skill Building", d: "Become a trained cyber awareness educator." },
  { icon: Award, t: "Certificate", d: "Receive an experience letter & verifiable certificate." },
  { icon: Network, t: "Network", d: "Meet cybersecurity professionals, educators & changemakers." },
];

const TIERS = [
  { name: "Cyber Sahayak", role: "Support sessions in your city — 2 hrs/week." },
  { name: "Cyber Shikshak", role: "Deliver workshops independently after training." },
  { name: "Cyber Pracharak", role: "Lead public drives & community outreach." },
  { name: "Cyber Ambassador", role: "Represent NetSecure in your district." },
  { name: "Cyber Champion", role: "Senior volunteer leading multi-district programmes." },
];

const FAQ = [
  { q: "Is volunteering paid?", a: "No — but every volunteer receives a verifiable experience letter, a certificate, and a NetSecure volunteer ID." },
  { q: "What's the time commitment?", a: "Minimum 2 hours per week. Most volunteers contribute 4–6 hours weekly during sessions." },
  { q: "What training is provided?", a: "Full cyber awareness curriculum, session delivery techniques, and content kits — all free." },
  { q: "Can I volunteer while studying?", a: "Yes, absolutely. Students are some of our most effective educators." },
];

function Engage() {
  return (
    <SiteLayout>
      <PageHero eyebrow="Engage" title="Be a Cyber Champion for Rajasthan." subtitle="Free training. Real impact. A community of educators and technologists working to make India safer online." />

      <Section>
        <SectionHeading eyebrow="Why Volunteer" title="What you get in return." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {VALUE.map((v) => (
            <div key={v.t} className="rounded-2xl bg-card p-6 shadow-card">
              <v.icon className="h-7 w-7 text-teal" />
              <h3 className="mt-4 font-display text-lg font-bold">{v.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-alt">
        <SectionHeading eyebrow="Volunteer Tiers" title="Grow into the role you want." />
        <div className="space-y-3">
          {TIERS.map((t, idx) => (
            <div key={t.name} className="flex items-center gap-5 rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-saffron text-saffron-foreground font-display text-lg font-bold">{idx + 1}</div>
              <div>
                <h3 className="font-display text-lg font-bold">{t.name}</h3>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What We Provide" title="Everything you need to succeed." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { i: BookOpen, t: "Free training" },
            { i: Briefcase, t: "Content kits" },
            { i: IdCard, t: "Volunteer ID card" },
            { i: Mail, t: "Experience letter" },
          ].map((b) => (
            <div key={b.t} className="rounded-2xl border border-teal/30 bg-teal/5 p-6 text-center">
              <b.i className="mx-auto h-7 w-7 text-teal" />
              <div className="mt-3 font-semibold">{b.t}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-3xl">
          <SectionHeading center eyebrow="Apply" title="Volunteer Application" subtitle="We'll respond within 3 working days." />
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
            <LeadForm
              fields={[
                { name: "name", label: "Full name", required: true },
                { name: "email", label: "Email", type: "email", required: true },
                { name: "phone", label: "Phone", type: "tel", required: true },
                { name: "city", label: "City", required: true },
                { name: "skills", label: "Skills / background", type: "textarea", span: 2 },
                { name: "hours", label: "Availability (hours/week)", type: "select", options: ["2–4 hrs", "4–6 hrs", "6+ hrs"], required: true },
                { name: "initiative", label: "Interested in", type: "select", required: true, options: ["Cyber Shiksha Abhiyan", "Digital Immunity Drive", "TechSHEcurity", "Cyber Vaccine", "Student Internship", "All / Wherever needed"] },
              ]}
              submitLabel="Submit application"
              successMessage="Thank you! Our team will contact you within 3 working days."
            />
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="FAQs" title="Common questions." />
        <div className="mx-auto max-w-3xl space-y-3">
          {FAQ.map((f) => <FaqItem key={f.q} {...f} />)}
        </div>
      </Section>
    </SiteLayout>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
        <span className="font-display text-base font-bold">{q}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-teal transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground">{a}</div>}
    </div>
  );
}
