import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section } from "@/components/ui-blocks";
import { LeadForm } from "@/components/LeadForm";
import { Calendar, User, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Cyber Safety Blog | Tips, Alerts & Guides | NetSecure Foundation" },
      { name: "description", content: "Free cyber safety tips, fraud alerts, and digital literacy guides from NetSecure Foundation — Rajasthan's cybercrime awareness NGO." },
      { property: "og:title", content: "Cyber Safety Blog | NetSecure Foundation" },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

export const POSTS = [
  { slug: "upi-fraud-rajasthan-2026", title: "5 types of UPI fraud every Rajasthan resident must know in 2026", excerpt: "From QR-code scams to fake refund calls — the five UPI fraud patterns hitting Rajasthan hardest, and how to defend against them.", category: "Fraud Alerts", date: "May 2026" },
  { slug: "cyberstalking-report-india", title: "What is cyberstalking and how to report it in India", excerpt: "A practical guide to recognising cyberstalking, documenting evidence, and reporting it via the 1930 helpline and cybercrime.gov.in.", category: "Women's Safety", date: "Apr 2026" },
  { slug: "school-cyber-safety-guide", title: "How to protect your school from cyber fraud — a guide for parents and teachers", excerpt: "A field-tested checklist for educators and parents to harden student safety online — from social media to school WhatsApp groups.", category: "Student Safety", date: "Apr 2026" },
  { slug: "dpdp-act-2023-ngos", title: "What is the DPDP Act 2023 and why every NGO must know it", excerpt: "India's Digital Personal Data Protection Act explained for NGO leaders — obligations, penalties, and a 5-step compliance starter plan.", category: "Digital Literacy", date: "Mar 2026" },
  { slug: "phishing-emails-7-signs", title: "Phishing emails: 7 warning signs every Indian professional must know", excerpt: "Seven concrete tell-tale signs that an email is phishing — with real Indian examples and a copy-paste checklist for your team.", category: "Cyber Safety Tips", date: "Mar 2026" },
];

const CATEGORIES = ["All", "Fraud Alerts", "Cyber Safety Tips", "Women's Safety", "Student Safety", "Digital Literacy"];

function Blog() {
  const [cat, setCat] = useState("All");
  const filtered = cat === "All" ? POSTS : POSTS.filter((p) => p.category === cat);
  return (
    <SiteLayout>
      <PageHero eyebrow="Blog" title="Cyber safety, in plain language." subtitle="Tips, fraud alerts and guides from the NetSecure Foundation team." />
      <Section>
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${cat === c ? "bg-primary text-primary-foreground" : "border border-border bg-card hover:bg-muted"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <Link key={p.slug} to="/blog/$slug" params={{ slug: p.slug }} className="group overflow-hidden rounded-2xl border border-border bg-card shadow-card transition hover:-translate-y-1 hover:shadow-card-hover">
              <div className="aspect-[16/10] bg-gradient-to-br from-primary via-primary/80 to-teal/40 relative">
                <div className="absolute inset-0 grid-fade opacity-40" aria-hidden />
                <div className="absolute left-3 top-3 inline-flex items-center rounded-full bg-saffron px-3 py-1 text-[11px] font-bold text-saffron-foreground">{p.category}</div>
              </div>
              <div className="p-6">
                <h2 className="font-display text-lg font-bold leading-snug">{p.title}</h2>
                <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><User className="h-3 w-3" />Mohit Sharma</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3 w-3" />{p.date}</span>
                </div>
                <div className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-teal">
                  Read more <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
      <Section className="bg-surface-alt">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 shadow-card md:p-10">
          <h2 className="font-display text-2xl font-bold">Cyber safety alerts in your inbox</h2>
          <p className="mt-2 text-sm text-muted-foreground">Monthly updates. No spam. Unsubscribe anytime.</p>
          <div className="mt-6">
            <LeadForm fields={[{ name: "email", label: "Email", type: "email", required: true, span: 2 }]} submitLabel="Subscribe" successMessage="You're subscribed. Watch your inbox." />
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}
