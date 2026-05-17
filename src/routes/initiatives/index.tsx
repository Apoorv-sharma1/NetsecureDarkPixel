import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeading, CTAButton } from "@/components/ui-blocks";
import { INITIATIVES } from "@/lib/site";
import { ShieldCheck, ArrowRight, Users, GraduationCap, Heart } from "lucide-react";

export const Route = createFileRoute("/initiatives/")({
  head: () => ({
    meta: [
      { title: "Our Cyber Awareness Initiatives | NetSecure Foundation Rajasthan" },
      { name: "description", content: "Explore NetSecure Foundation's 4 free cyber awareness initiatives — Cyber Shiksha Abhiyan, Digital Immunity Drive, TechSHEcurity & Cyber Vaccine — across Rajasthan." },
      { property: "og:title", content: "Our Cyber Awareness Initiatives" },
      { property: "og:description", content: "Four free, community-first cyber safety programmes across Rajasthan." },
      { property: "og:url", content: "/initiatives" },
    ],
    links: [{ rel: "canonical", href: "/initiatives" }],
  }),
  component: InitiativesHub,
});

function InitiativesHub() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Initiatives"
        title="Four programmes built for the communities that need them most."
        subtitle="All sessions are free, delivered in Hindi, and built around the real digital threats Indians face every day."
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {INITIATIVES.map((i) => (
            <Link
              key={i.slug}
              to="/initiatives/$slug"
              params={{ slug: i.slug }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className={`mb-5 grid h-14 w-14 place-items-center rounded-2xl ${i.color === "teal" ? "bg-teal/15 text-teal" : "bg-saffron/15 text-saffron"}`}>
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h3 className="font-display text-2xl font-bold">{i.name}</h3>
              <p className="mt-2 text-base text-muted-foreground">{i.tagline}</p>
              <div className="mt-6 text-xs font-semibold uppercase tracking-wider text-muted-foreground">For {i.audience}</div>
              <div className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-teal">
                Learn more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-surface-alt">
        <SectionHeading center eyebrow="Combined Reach" title="Our work, in numbers." />
        <div className="grid grid-cols-3 gap-4 text-center">
          {[
            { v: "1,000+", l: "Citizens reached", i: Users },
            { v: "15+", l: "Institutes engaged", i: GraduationCap },
            { v: "20+", l: "Sessions delivered", i: Heart },
          ].map((s) => (
            <div key={s.l} className="rounded-2xl bg-card p-6 shadow-card">
              <s.i className="mx-auto h-6 w-6 text-teal" />
              <div className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">{s.v}</div>
              <div className="text-xs text-muted-foreground md:text-sm">{s.l}</div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton to="/contact" variant="primary">Partner with us for a session</CTAButton>
        </div>
      </Section>
    </SiteLayout>
  );
}
