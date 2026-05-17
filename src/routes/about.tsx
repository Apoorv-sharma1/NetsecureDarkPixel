import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeading, CTAButton } from "@/components/ui-blocks";
import { SITE } from "@/lib/site";
import { ShieldCheck, FileCheck2, Award, Heart, Sparkles, Users, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About NetSecure Foundation | Cyber Awareness NGO Registered in Jaipur" },
      { name: "description", content: "Learn about NetSecure Foundation — Rajasthan's registered Section 8 non-profit for cybercrime awareness. Founded 2025. CIN: U88900RJ2025NPL099499. 12A & 80G registered." },
      { property: "og:title", content: "About NetSecure Foundation" },
      { property: "og:description", content: "Rajasthan's registered Section 8 cyber awareness non-profit. CIN U88900RJ2025NPL099499." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const REGISTRATIONS = [
  { icon: ShieldCheck, label: "Section 8 Non-Profit Company", detail: "Incorporated under the Companies Act, 2013" },
  { icon: FileCheck2, label: "CIN", detail: SITE.cin },
  { icon: Award, label: "12A Registered", detail: "Income Tax exemption certified" },
  { icon: Award, label: "80G Registered", detail: "Donors receive tax benefits" },
];

const VALUES = [
  { icon: Users, label: "Community First", desc: "Every programme is co-designed with the people it serves." },
  { icon: Sparkles, label: "Education for All", desc: "Free, accessible, and delivered in Hindi and English." },
  { icon: Heart, label: "Empowerment", desc: "We don't lecture — we build digital confidence." },
  { icon: ShieldCheck, label: "Transparency", desc: "Open about our work, our funding and our impact." },
];

const TEAM = [
  { name: "Mohit Sharma", role: "Director & President", bio: "Founder of NetSecure Foundation. Cybersecurity educator with a mission to make safe internet use a basic literacy across India.", linkedin: SITE.social.linkedin },
  { name: "Roopesh Sharma", role: "Vice President & Program Lead", bio: "Designs the foundation's field curriculum and leads training of volunteer cyber educators across Rajasthan.", linkedin: SITE.social.linkedin },
  { name: "Mohit Sankhla", role: "General Secretary", bio: "Heads operations, compliance and institutional partnerships with schools, universities and government bodies.", linkedin: SITE.social.linkedin },
];

function About() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About Us"
        title="Empowering Rajasthan to stay safe online."
        subtitle="Founded in 2025 in Jaipur, NetSecure Foundation is Rajasthan's registered Section 8 non-profit organisation dedicated to free cybercrime awareness education."
      />

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <SectionHeading eyebrow="Our Story" title="How NetSecure began." />
          <div className="space-y-4 text-base leading-relaxed text-foreground/85 lg:col-span-2">
            <p>
              In 2025, a handful of cybersecurity professionals and educators in Jaipur watched too many
              avoidable cyber incidents unfold around them — students losing money to UPI scams, women
              targeted by online harassment, elderly parents falling for OTP fraud. The pattern was always the same:
              the technology had outpaced the education.
            </p>
            <p>
              NetSecure Foundation was born to close that gap. We're a registered Section 8 non-profit headquartered
              in Mansarovar, Jaipur, with a single focus: free, on-the-ground cyber awareness education for
              everyone — regardless of age, background or income.
            </p>
            <p>
              In our first year we've reached over 1,000 people across 15+ institutions through 20+ sessions,
              and we're just getting started.
            </p>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="bg-surface-alt">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-teal/30 bg-card p-10 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-wider text-teal">Our Mission</div>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
              Free cyber safety education for every Indian — no matter where they live, work or study.
            </h2>
          </div>
          <div className="rounded-3xl border border-saffron/30 bg-card p-10 shadow-card">
            <div className="text-xs font-semibold uppercase tracking-wider text-saffron">Our Vision</div>
            <h2 className="mt-3 font-display text-2xl font-bold md:text-3xl">
              An India where every citizen is digitally aware, financially protected and online-confident by 2030.
            </h2>
          </div>
        </div>
      </Section>

      {/* Registration */}
      <Section>
        <SectionHeading
          eyebrow="Registered & Compliant"
          title="A fully registered, transparent non-profit."
          subtitle="Your trust matters. Here are our credentials."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {REGISTRATIONS.map((r) => (
            <div key={r.label} className="rounded-2xl border-2 border-dashed border-teal/40 bg-teal/5 p-6">
              <r.icon className="h-8 w-8 text-teal" />
              <div className="mt-4 text-sm font-bold text-foreground">{r.label}</div>
              <div className="mt-1 break-words text-sm text-muted-foreground">{r.detail}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Leadership */}
      <Section className="bg-surface-alt">
        <SectionHeading eyebrow="Leadership" title="Meet the team." />
        <div className="grid gap-6 md:grid-cols-3">
          {TEAM.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-7 shadow-card">
              <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-teal to-primary text-3xl font-bold text-primary-foreground">
                {t.name.charAt(0)}
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{t.name}</h3>
              <div className="text-sm font-semibold text-teal">{t.role}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
              <a href={t.linkedin} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-teal">
                <Linkedin className="h-3.5 w-3.5" /> LinkedIn
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Values */}
      <Section>
        <SectionHeading eyebrow="Our Values" title="The principles that guide us." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((v) => (
            <div key={v.label} className="rounded-2xl bg-card p-6 shadow-card">
              <v.icon className="h-7 w-7 text-saffron" />
              <h3 className="mt-4 font-display text-lg font-bold">{v.label}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Get involved with our mission.</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <CTAButton to="/engage" variant="primary">Get Involved</CTAButton>
            <CTAButton to="/donate" variant="secondary">Donate to our mission</CTAButton>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
