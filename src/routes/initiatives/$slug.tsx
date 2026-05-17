import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeading } from "@/components/ui-blocks";
import { LeadForm, type Field } from "@/components/LeadForm";
import { INITIATIVES } from "@/lib/site";
import { CheckCircle2, Users, AlertTriangle, Phone, ShieldCheck, Calendar, MapPin } from "lucide-react";

type Content = {
  seoTitle: string;
  seoDesc: string;
  intro: string[];
  audience: { label: string; desc: string }[];
  topics: string[];
  past: { name: string; venue: string; date: string }[];
  formTitle: string;
  formFields: Field[];
  extra?: React.ReactNode;
};

const CONTENT: Record<string, Content> = {
  "cyber-shiksha-abhiyan": {
    seoTitle: "Cyber Shiksha Abhiyan | Free School Cyber Awareness Programme Rajasthan",
    seoDesc: "NetSecure Foundation's Cyber Shiksha Abhiyan delivers free cybercrime awareness to schools across Jaipur, Tonk, Sikar & Dausa. Request a session for your school.",
    intro: [
      "Cyber Shiksha Abhiyan is our flagship in-school programme — a free, curriculum-aligned cyber awareness session designed for students in Classes 6 to 12.",
      "Our trained volunteer educators travel to your school and deliver a 90-minute interactive workshop covering the real online threats students face: scams, social media risks, cyberbullying and identity theft.",
      "We've delivered this programme in government schools, private schools and rural institutes across Rajasthan — completely free, in Hindi.",
    ],
    audience: [
      { label: "Students (Classes 6–12)", desc: "Age-appropriate cyber safety content." },
      { label: "Teachers", desc: "Training kit to continue conversations year-round." },
      { label: "Parents", desc: "Parallel parent session available on request." },
    ],
    topics: ["Phishing & OTP fraud", "Online fraud & UPI scams", "Social media safety", "Cyberbullying", "Password hygiene", "Reporting cybercrime (1930)"],
    past: [
      { name: "MBN School", venue: "Jaipur", date: "Apr 2026" },
      { name: "Govt. School Mansarovar", venue: "Jaipur", date: "Jan 2026" },
      { name: "Vidya Mandir", venue: "Tonk", date: "Dec 2025" },
    ],
    formTitle: "Request a session for your school",
    formFields: [
      { name: "school", label: "School name", required: true },
      { name: "contact", label: "Contact person name", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "district", label: "District", required: true, type: "select", options: ["Jaipur", "Tonk", "Sikar", "Dausa", "Ajmer", "Jodhpur", "Udaipur", "Other"] },
      { name: "date", label: "Preferred date", type: "date" },
    ],
  },
  "digital-immunity-drive": {
    seoTitle: "Digital Immunity Drive | Free Cyber Hygiene Workshops Rajasthan",
    seoDesc: "The Digital Immunity Drive by NetSecure Foundation delivers free cyber hygiene education for professionals, youth & businesses in Rajasthan. Book a session.",
    intro: [
      "India lost over ₹11,000 crore to cyber fraud in 2024. The Digital Immunity Drive is our response — a free cyber hygiene workshop for the professionals, entrepreneurs and youth who are most often targeted.",
      "We bring practical, scam-by-scam education to corporates, universities, public spaces and small businesses. No jargon. Just the tactics scammers use today, and exactly how to defend against them.",
    ],
    audience: [
      { label: "Professionals", desc: "Workplace cyber hygiene & DPDP compliance." },
      { label: "Young Adults", desc: "UPI fraud, dating scams, deepfakes." },
      { label: "Entrepreneurs", desc: "Securing customer data & payments." },
      { label: "Small Businesses", desc: "Ransomware & phishing protection." },
    ],
    topics: ["UPI & payment fraud", "DPDP Act 2023 basics", "Phishing recognition", "Password & 2FA hygiene", "Recognising AI-powered scams"],
    past: [
      { name: "World Trade Park", venue: "Jaipur", date: "Mar 2026" },
      { name: "Patrika Gate Public Drive", venue: "Jaipur", date: "Feb 2026" },
      { name: "Amity University", venue: "Jaipur", date: "Jan 2026" },
      { name: "RU Law University", venue: "Jaipur", date: "Dec 2025" },
    ],
    formTitle: "Book a session for your organisation",
    formFields: [
      { name: "name", label: "Your name", required: true },
      { name: "org", label: "Organisation", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "session", label: "Session type", required: true, type: "select", options: ["Corporate workshop", "University talk", "Public drive", "Small business session"] },
    ],
  },
  "techshecurity": {
    seoTitle: "TechSHEcurity | Women's Cyber Safety Programme | NetSecure Foundation",
    seoDesc: "TechSHEcurity by NetSecure Foundation educates and protects women from cyberstalking, online harassment & fraud in Rajasthan. Free sessions available.",
    intro: [
      "TechSHEcurity is a women-first cyber safety programme. We exist because the cyber threats women face — stalking, harassment, deepfakes, matrimonial fraud, image-based abuse — are too often invisible until they become emergencies.",
      "Our sessions are delivered by women educators wherever possible, in safe spaces, with confidential reporting channels. We don't lecture — we equip women with the practical tools and language to protect themselves and each other online.",
    ],
    audience: [
      { label: "Women students", desc: "Schools, colleges & universities." },
      { label: "Homemakers", desc: "Community centres & local groups." },
      { label: "Working Professionals", desc: "Workplaces & corporate forums." },
      { label: "SHG Members", desc: "Self-help groups across Rajasthan." },
    ],
    topics: ["Online harassment & stalking", "Deepfake & image-based abuse", "Matrimonial fraud", "Social media impersonation", "Privacy hygiene"],
    past: [
      { name: "RU Law University", venue: "Jaipur", date: "Feb 2026" },
      { name: "Mahila Mandal", venue: "Mansarovar, Jaipur", date: "Jan 2026" },
    ],
    formTitle: "Request a women's safety session",
    formFields: [
      { name: "org", label: "Organisation / College / SHG", required: true },
      { name: "contact", label: "Contact person", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "location", label: "Location", required: true },
      { name: "attendees", label: "Expected attendees", type: "text" },
    ],
    extra: (
      <div className="grid gap-4 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-2xl border-2 border-destructive/30 bg-destructive/5 p-6">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-destructive text-destructive-foreground">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-destructive">Cybercrime Helpline</div>
            <a href="tel:1930" className="font-display text-3xl font-bold text-foreground">1930</a>
            <p className="text-xs text-muted-foreground">Report any cyber fraud immediately.</p>
          </div>
        </div>
        <div className="flex items-start gap-4 rounded-2xl border-2 border-saffron/40 bg-saffron/5 p-6">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-saffron text-saffron-foreground">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-saffron">Women's Helpline</div>
            <a href="tel:181" className="font-display text-3xl font-bold text-foreground">181</a>
            <p className="text-xs text-muted-foreground">24×7 support for women in distress.</p>
          </div>
        </div>
      </div>
    ),
  },
  "cyber-vaccine": {
    seoTitle: "Cyber Vaccine | Cybersecurity Awareness for Healthcare Workers & NGOs",
    seoDesc: "NetSecure Foundation's Cyber Vaccine programme delivers free cybersecurity training for healthcare professionals & NGO staff in Rajasthan. Protect your organisation's data.",
    intro: [
      "Cyber Vaccine immunises your organisation against cyber threats. Hospitals, primary health centres and NGOs hold some of the most sensitive personal data in India — and they are increasingly targeted by ransomware, phishing and DPDP-related risks.",
      "Our Cyber Vaccine workshop is a free, role-specific training designed for healthcare professionals, NGO staff and frontline health workers. We focus on the practical defences your team needs, not abstract theory.",
    ],
    audience: [
      { label: "Hospitals", desc: "Clinical & admin staff training." },
      { label: "Primary Health Centres", desc: "Rural-focused, Hindi-medium." },
      { label: "NGOs", desc: "Donor data & beneficiary privacy." },
      { label: "Health Volunteers", desc: "Field-level cyber hygiene." },
    ],
    topics: ["Phishing recognition", "Ransomware defence", "DPDP Act 2023 for healthcare", "Social engineering", "Patient data hygiene"],
    past: [
      { name: "PHC Tonk", venue: "Tonk", date: "Jan 2026" },
      { name: "Local NGO Network", venue: "Jaipur", date: "Dec 2025" },
    ],
    formTitle: "Request a Cyber Vaccine session",
    formFields: [
      { name: "org", label: "Organisation name", required: true },
      { name: "type", label: "Organisation type", required: true, type: "select", options: ["Hospital", "Primary Health Centre", "NGO", "Other"] },
      { name: "contact", label: "Contact person", required: true },
      { name: "phone", label: "Phone", type: "tel", required: true },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "location", label: "Location / District", required: true },
    ],
  },
};

export const Route = createFileRoute("/initiatives/$slug")({
  loader: ({ params }) => {
    const init = INITIATIVES.find((i) => i.slug === params.slug);
    const content = CONTENT[params.slug];
    if (!init || !content) throw notFound();
    return { init, content };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: loaderData.content.seoTitle },
            { name: "description", content: loaderData.content.seoDesc },
            { property: "og:title", content: loaderData.content.seoTitle },
            { property: "og:description", content: loaderData.content.seoDesc },
            { property: "og:url", content: `/initiatives/${loaderData.init.slug}` },
            { property: "og:type", content: "article" },
          ],
          links: [{ rel: "canonical", href: `/initiatives/${loaderData.init.slug}` }],
        }
      : {},
  component: InitiativeDetail,
  notFoundComponent: () => (
    <SiteLayout>
      <Section>
        <h1 className="font-display text-3xl font-bold">Initiative not found</h1>
      </Section>
    </SiteLayout>
  ),
});

function InitiativeDetail() {
  const data = Route.useLoaderData() as { init: (typeof INITIATIVES)[number]; content: Content };
  const { init, content } = data;
  return (
    <SiteLayout>
      <PageHero
        eyebrow={init.audience}
        title={init.name}
        subtitle={init.tagline}
      />

      {/* Intro */}
      <Section className="py-10 md:py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="About the Programme" title={`What is ${init.name}?`} />
          <div className="space-y-4 text-base leading-relaxed text-foreground/85 lg:col-span-2">
            {content.intro.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
      </Section>

      {/* Audience */}
      <Section className="bg-surface-alt py-10 md:py-16">
        <SectionHeading eyebrow="Who It's For" title="Built for these audiences." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {content.audience.map((a) => (
            <div key={a.label} className="rounded-2xl bg-card p-6 shadow-card">
              <Users className="h-7 w-7 text-teal" />
              <h3 className="mt-4 font-display text-base font-bold">{a.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Topics */}
      <Section className="py-10 md:py-16">
        <SectionHeading eyebrow="What We Cover" title="Topics in every session." />
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {content.topics.map((t) => (
            <div key={t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-teal" />
              <span className="text-sm font-medium">{t}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Extra (e.g. helplines for TechSHEcurity) */}
      {content.extra && <Section className="bg-surface-alt py-10 md:py-16">{content.extra}</Section>}

      {/* How it works */}
      <Section className="py-10 md:py-16">
        <SectionHeading eyebrow="How It Works" title="From request to delivery." />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { n: "01", t: "Reach out", d: "Fill the form below or email us." },
            { n: "02", t: "We schedule", d: "Our coordinator confirms a date within 48 hours." },
            { n: "03", t: "Session delivered", d: "Free, 60–90 minute interactive workshop." },
          ].map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-7">
              <div className="font-display text-4xl font-bold text-teal">{s.n}</div>
              <h3 className="mt-3 font-display text-lg font-bold">{s.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Past */}
      <Section className="bg-surface-alt py-10 md:py-16">
        <SectionHeading eyebrow="On the Ground" title="Sessions we've delivered." />
        <div className="grid gap-4 md:grid-cols-3">
          {content.past.map((p) => (
            <div key={p.name} className="rounded-2xl border border-border bg-card p-6">
              <ShieldCheck className="h-6 w-6 text-teal" />
              <h3 className="mt-3 font-display text-base font-bold">{p.name}</h3>
              <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{p.venue}</span>
                <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Form */}
      <Section className="py-10 md:py-16">
        <div className="mx-auto max-w-3xl">
          <SectionHeading center eyebrow="Request a Session" title={content.formTitle} subtitle="Free, anywhere in Rajasthan. We'll respond within 48 hours." />
          <div className="rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
            <LeadForm fields={content.formFields} submitLabel="Request session" />
          </div>
        </div>
      </Section>

      {/* Call to Actions */}
      <Section className="bg-primary py-12 md:py-16 text-primary-foreground">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6">Take Action With Us</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/gallery" className="rounded-lg bg-teal px-6 py-3 text-sm font-bold text-teal-foreground transition hover:brightness-110 shadow-lg">
              Session Highlights
            </Link>
            <Link to="/donate" className="rounded-lg bg-saffron px-6 py-3 text-sm font-bold text-saffron-foreground transition hover:brightness-110 shadow-lg">
              Support a Cause
            </Link>
            <Link to="/engage" className="rounded-lg border-2 border-teal bg-transparent px-6 py-3 text-sm font-bold text-teal transition hover:bg-teal hover:text-teal-foreground">
              Join Our Team
            </Link>
          </div>
        </div>
      </Section>
      <AlertTriangle className="hidden" />
    </SiteLayout>
  );
}
