import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { Section, SectionHeading } from "@/components/ui-blocks";
import { INITIATIVES, SITE } from "@/lib/site";
import {
  ShieldCheck, Users, GraduationCap, Building2, ArrowRight,
  Sparkles, HeartHandshake, Quote, MapPin, Calendar,
  Briefcase, MessageSquare, ShieldAlert, FileWarning, Fingerprint, Lock, Globe
} from "lucide-react";
import heroShield from "@/assets/hero-shield.png";
import { Marquee } from "@/components/ui/Marquee";
import { CountingNumber } from "@/components/ui/CountingNumber";
import { Carousel3D } from "@/components/ui/Carousel3D";
import { Tilt } from "@/components/ui/Tilt";
import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NetSecure Foundation | Free Cyber Awareness NGO Jaipur, Rajasthan" },
      { name: "description", content: "NetSecure Foundation is Rajasthan's leading cybercrime awareness NGO. Free cyber safety education for students, women & professionals across Rajasthan. Join the movement." },
      { property: "og:title", content: "NetSecure Foundation | Free Cyber Awareness NGO Jaipur, Rajasthan" },
      { property: "og:description", content: "Free cyber safety education for students, women & professionals across Rajasthan. Join the movement." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const STATS = [
  { num: 1000, suffix: "+", label: "People reached", icon: Users },
  { num: 15, suffix: "+", label: "Institutes covered", icon: GraduationCap },
  { num: 20, suffix: "+", label: "Sessions delivered", icon: Sparkles },
  { num: 4, suffix: "", label: "Active initiatives", icon: ShieldCheck },
];

const MARQUEE_ITEMS = [
  { text: "Online Harassment", icon: ShieldAlert },
  { text: "Online Fraud", icon: Briefcase },
  { text: "Phishing", icon: FileWarning },
  { text: "Ransomware", icon: Lock },
  { text: "Social Engineering", icon: MessageSquare },
  { text: "Job Fraud", icon: Globe },
  { text: "Social Media Crimes", icon: Users },
  { text: "Smishing", icon: Fingerprint },
  { text: "Malwares", icon: ShieldCheck },
  { text: "Revenge Porn", icon: HeartHandshake },
];

const CAMPAIGNS = [
  { title: "Cyber Awareness — MBN School", venue: "Jaipur", date: "Apr 2026", initiative: "Cyber Shiksha Abhiyan", slug: "cyber-shiksha-abhiyan", image: "https://lh3.googleusercontent.com/d/1S7LgOaMFCj9xiwKrHC5p3d0cF_p2r5mU" },
  { title: "Digital Immunity Drive", venue: "Amity University, Jaipur", date: "Mar 2026", initiative: "Digital Immunity Drive", slug: "digital-immunity-drive", image: "https://lh3.googleusercontent.com/d/1szj-HTn_IbSi89oHmoD1vPK1h3Mo9-uA" },
  { title: "Women's Safety Workshop", venue: "RU Law University", date: "Feb 2026", initiative: "TechSHEcurity", slug: "techshecurity", image: "https://lh3.googleusercontent.com/d/1tfh1K8RnjHUV2JsIf0unR-hYHT87sQKB" },
  { title: "TechSHEcurity Workshop", venue: "Ibtada Foundation", date: "Jan 2026", initiative: "TechSHEcurity", slug: "techshecurity", image: "https://lh3.googleusercontent.com/d/1IeVvbEeyKap5GEmC_czNZmfYpkKHdebt" },
  { title: "Women's Safety Drive", venue: "RU Law College", date: "Jan 2026", initiative: "TechSHEcurity", slug: "techshecurity", image: "https://lh3.googleusercontent.com/d/1pPDTlSQrhpbvvIXv50miEFfKIZys4Bml" },
  { title: "Public Drive", venue: "Patrika Gate, Jaipur", date: "Feb 2026", initiative: "Digital Immunity Drive", slug: "digital-immunity-drive", image: "https://lh3.googleusercontent.com/d/1ibSugT5wBxTYOoWNiYagsCjQRzLSnN-y" },
  { title: "Govt. School Cyber Drive", venue: "Varun Path, Jaipur", date: "Jan 2026", initiative: "Cyber Shiksha Abhiyan", slug: "cyber-shiksha-abhiyan", image: "https://lh3.googleusercontent.com/d/1Lh2YcHvM5OGAkwJDUFlDE2DVJFdPF4ox" },
  { title: "Cyber Vaccine Session", venue: "Ibtada NGO", date: "Jan 2026", initiative: "Cyber Vaccine", slug: "cyber-vaccine", image: "https://lh3.googleusercontent.com/d/1vwSNbbzyrFnvp-razrkuACYGq6eZQ6l2" },
  { title: "Blood Donation Drive", venue: "Jaipur", date: "Dec 2025", initiative: "TechSHEcurity", slug: "techshecurity", image: "https://lh3.googleusercontent.com/d/1NrZRkbullyntToECB3X-9V6XA1Y32G3J" }
];

const TEAM = [
  { name: "Mohit Sharma", role: "Director & President", bio: "Cybersecurity educator and founder of NetSecure Foundation. Leads programme strategy across Rajasthan." },
  { name: "Roopesh Sharma", role: "Vice President & Program Lead", bio: "Designs and delivers field workshops; oversees volunteer training and partnerships." },
  { name: "Mohit Sankhla", role: "General Secretary", bio: "Drives operations, compliance, and outreach to schools, colleges and NGOs." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="gradient-hero relative overflow-hidden text-primary-foreground">
        <div className="absolute inset-0 grid-fade" aria-hidden />
        <div className="container-prose relative grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal">
              <ShieldCheck className="h-3.5 w-3.5" />
              Section 8 Non-Profit · 12A & 80G Registered
            </div>
            <h1 className="text-balance text-4xl font-bold leading-[1.05] md:text-5xl lg:text-6xl">
              Protecting India,<br />
              <span className="text-teal">one click</span> at a time.
            </h1>
            <p className="mt-6 max-w-xl text-balance text-base text-primary-foreground/75 md:text-lg">
              Free cybercrime awareness education for students, women, professionals and
              communities across Rajasthan — delivered in Hindi, on the ground, by trained volunteers.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/engage"
                className="inline-flex items-center gap-2 rounded-lg bg-saffron px-6 py-3.5 text-base font-bold text-saffron-foreground shadow-lg shadow-saffron/20 transition hover:brightness-110"
              >
                Join the Movement <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/donate"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-teal px-6 py-3.5 text-base font-bold text-teal transition hover:bg-teal hover:text-teal-foreground"
              >
                Donate Now
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-6 rounded-3xl bg-teal/20 blur-3xl" aria-hidden />
            <Tilt>
              <img
                src={heroShield}
                alt="Illustration of a digital shield protecting Indian students and women from cyber threats"
                width={1600}
                height={1024}
                className="relative rounded-2xl border border-white/10 shadow-2xl"
              />
            </Tilt>
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="bg-primary pb-16 pt-8 overflow-hidden border-t border-white/10">
        <div className="flex flex-col gap-4">
          <Marquee speed={40} direction="left">
            {MARQUEE_ITEMS.map((item, idx) => (
              <div key={`row1-${idx}`} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/10">
                <item.icon className="h-4 w-4 text-teal" />
                {item.text}
              </div>
            ))}
          </Marquee>
          <Marquee speed={35} direction="right">
            {MARQUEE_ITEMS.reverse().map((item, idx) => (
              <div key={`row2-${idx}`} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur-md transition-colors hover:bg-white/10">
                <item.icon className="h-4 w-4 text-teal" />
                {item.text}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* MISSION */}
      <Section className="bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-teal">Our Mission</div>
          <p className="text-balance font-display text-2xl font-semibold leading-snug text-foreground md:text-3xl">
            We educate, equip and empower every Indian — from a Class 6 student in Tonk to a
            healthcare worker in Sikar — to recognise, prevent and respond to cybercrime.
            Because digital safety is a right, not a privilege.
          </p>
        </div>
      </Section>

      {/* STATS */}
      <section className="bg-surface-alt">
        <div className="container-prose grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-border md:grid-cols-4">
          {STATS.map((s, idx) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="bg-background p-8 text-center group"
            >
              <s.icon className="mx-auto h-6 w-6 text-teal transition-transform group-hover:scale-125" />
              <div className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">
                <CountingNumber value={s.num} suffix={s.suffix} />
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INITIATIVES */}
      <Section>
        <SectionHeading
          eyebrow="What We Do"
          title="Four programmes. One mission."
          subtitle="Tailored, free cyber awareness workshops for the communities that need them most."
        />
        <Tabs.Root defaultValue={INITIATIVES[0].slug} className="mt-8 flex flex-col w-full">
          <Tabs.List className="flex overflow-x-auto border-b border-border mb-8 scrollbar-hide">
            {INITIATIVES.map((i) => (
              <Tabs.Trigger
                key={i.slug}
                value={i.slug}
                className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:text-primary"
              >
                {i.name}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          
          {INITIATIVES.map((i) => (
            <Tabs.Content key={i.slug} value={i.slug} className="focus:outline-none">
              <div className="grid gap-8 lg:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-primary via-primary/95 to-teal/20 p-8 text-primary-foreground md:p-12 shadow-card-hover group"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-xl bg-white/10 text-white transition-transform group-hover:scale-110">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-3xl font-bold mb-4 md:text-4xl">{i.name}</h3>
                  <p className="text-primary-foreground/80 mb-6 text-lg">{i.tagline}</p>
                  <p className="mb-8 text-sm leading-relaxed text-primary-foreground/70">
                    This initiative is aimed at {i.audience}. Our volunteers conduct in-depth sessions to build digital resilience.
                  </p>
                  <Link
                    to="/initiatives/$slug"
                    params={{ slug: i.slug }}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10 w-fit"
                  >
                    Explore More <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative overflow-hidden rounded-3xl bg-surface-alt p-6 md:p-10 shadow-card"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 to-primary/5" />
                  <div className="relative h-full w-full rounded-2xl border border-white/40 bg-white/50 p-4 shadow-sm backdrop-blur-sm grid grid-cols-2 md:grid-cols-3 gap-2">
                    {/* Placeholder images mapped from the specific initiative's gallery */}
                    {i.images?.map((imageId, idx) => (
                      <div key={idx} className="aspect-[4/3] rounded-lg bg-black/10 overflow-hidden relative">
                         <img 
                           src={`https://lh3.googleusercontent.com/d/${imageId}`} 
                           alt={`${i.name} Activity`} 
                           referrerPolicy="no-referrer"
                           className="h-full w-full object-cover transition-transform duration-300 hover:scale-110" 
                         />
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Tabs.Content>
          ))}
          
          <div className="mt-12 text-center">
            <Link
              to="/initiatives"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-8 py-4 text-sm font-bold shadow-sm transition hover:bg-muted"
            >
              Explore All Our Initiatives & Campaigns
            </Link>
          </div>
        </Tabs.Root>
      </Section>

      {/* CAMPAIGNS */}
      <Section className="bg-surface-alt">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Recent Campaigns</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Carousel3D items={CAMPAIGNS} />
        </motion.div>
      </Section>

      {/* TEAM */}
      <Section>
        <SectionHeading
          eyebrow="Leadership"
          title="The team behind the mission"
          subtitle="Educators, technologists and community organisers — based in Jaipur, working across Rajasthan."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {TEAM.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              className="rounded-2xl border border-border bg-card p-7 shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-teal to-primary text-2xl font-bold text-primary-foreground">
                {t.name.charAt(0)}
              </div>
              <h3 className="mt-5 font-display text-lg font-bold">{t.name}</h3>
              <div className="text-sm font-medium text-teal">{t.role}</div>
              <p className="mt-3 text-sm text-muted-foreground">{t.bio}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* TESTIMONIAL */}
      <Section className="bg-surface-alt">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-card md:p-12"
        >
          <Quote className="h-8 w-8 text-teal" />
          <p className="mt-5 font-display text-xl leading-snug md:text-2xl">
            "Our students learned things in two hours that we couldn't have taught in a semester.
            The NetSecure team made online safety practical, local and unforgettable."
          </p>
          <div className="mt-6 text-sm font-medium">
            — Principal, Govt. School Mansarovar · <span className="text-muted-foreground">Cyber Shiksha Abhiyan</span>
          </div>
        </motion.div>
      </Section>

      {/* CTA ROW */}
      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container-prose text-center">
          <HeartHandshake className="mx-auto h-10 w-10 text-teal" />
          <h2 className="mx-auto mt-5 max-w-2xl text-balance font-display text-3xl font-bold md:text-4xl">
            Help us protect the next million Indians online.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/engage" className="rounded-lg bg-saffron px-6 py-3 text-sm font-bold text-saffron-foreground transition hover:brightness-110">
              Join the Movement
            </Link>
            <Link to="/engage" className="rounded-lg border-2 border-teal px-6 py-3 text-sm font-bold text-teal transition hover:bg-teal hover:text-teal-foreground">
              Become a Volunteer
            </Link>
            <Link to="/donate" className="rounded-lg bg-background px-6 py-3 text-sm font-bold text-primary transition hover:brightness-95">
              Donate Now
            </Link>
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">
            All donations are 80G tax-exempt · CIN {SITE.cin}
          </p>
        </div>
      </section>
      <Building2 className="hidden" />
    </SiteLayout>
  );
}
