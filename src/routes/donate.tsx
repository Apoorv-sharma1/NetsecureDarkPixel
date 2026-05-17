import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, SectionHeading } from "@/components/ui-blocks";
import { Copy, CheckCircle2, Building, Smartphone, Award, Share2, Heart, Shield, Lock } from "lucide-react";
import { SITE } from "@/lib/site";
import upiQr from "@/assets/UPI-QR.png";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate to NetSecure Foundation | Support Free Cyber Awareness in Rajasthan" },
      { name: "description", content: "Your donation funds free cyber safety sessions for students, women & rural communities in Rajasthan. 80G tax benefit. Support NetSecure Foundation today." },
      { property: "og:title", content: "Donate to NetSecure Foundation" },
      { property: "og:description", content: "Fund free cyber safety education across Rajasthan. 80G tax benefit." },
      { property: "og:url", content: "/donate" },
    ],
    links: [{ rel: "canonical", href: "/donate" }],
  }),
  component: Donate,
});

const IMPACT = [
  { amount: "₹500", does: "1 session certificate printed & delivered" },
  { amount: "₹2,500", does: "1 complete school session conducted" },
  { amount: "₹10,000", does: "1 district-wide awareness drive" },
];

const TIERS = [
  { name: "Cyber Mitra", amount: "₹500", funds: "Print certificates & study material for one session." },
  { name: "Cyber Rakshak", amount: "₹2,500", funds: "Fund a complete cyber awareness session at a school." },
  { name: "Cyber Surakshak", amount: "₹10,000", funds: "Power a district-wide community drive." },
  { name: "Cyber Guardian", amount: "₹25,000+", funds: "Underwrite an entire programme for a month." },
];

const UPI_ID = "netsecurefdn@upi";
const BANK = {
  account: "NetSecure Foundation",
  number: "XXXXXXXXXXXX",
  ifsc: "XXXX0000XXX",
  bank: "To be confirmed — please email support@netsecurefdn.org",
};

function Donate() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Donate"
        title="Your support keeps Rajasthan cyber-safe."
        subtitle="Every rupee funds a free workshop, a printed safety guide, or training for a volunteer educator. Donations are 80G tax-exempt."
      />

      {/* Impact */}
      <Section>
        <SectionHeading eyebrow="Your Impact" title="What your donation does." />
        <div className="grid gap-5 md:grid-cols-3">
          {IMPACT.map((i) => (
            <div key={i.amount} className="rounded-2xl border border-border bg-card p-7 text-center shadow-card">
              <div className="font-display text-4xl font-bold text-saffron">{i.amount}</div>
              <p className="mt-3 text-sm text-foreground/80">{i.does}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Tiers */}
      <Section className="bg-surface-alt">
        <SectionHeading eyebrow="Membership Tiers" title="Choose how you stand with us." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t, idx) => (
            <div
              key={t.name}
              className={`relative flex flex-col rounded-3xl border bg-card p-6 md:p-8 shadow-card transition-all duration-300 hover:-translate-y-2 hover:shadow-card-hover ${idx === 2 ? "border-saffron/60 ring-4 ring-saffron/10 bg-gradient-to-b from-saffron/5 to-transparent" : "border-border"}`}
            >
              {idx === 2 && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gradient-to-r from-saffron to-orange-500 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-lg">
                  Most Impact
                </div>
              )}
              <div className="flex items-center gap-3">
                <div className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${idx === 2 ? "bg-saffron/20 text-saffron" : "bg-teal/15 text-teal"}`}>
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold">{t.name}</h3>
              </div>
              <div className="mt-4 font-display text-4xl font-extrabold text-primary">{t.amount}</div>
              <div className="my-6 h-px w-full bg-border" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{t.funds}</p>
              
              <a
                href="#payment"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 px-5 py-3 text-sm font-bold transition ${idx === 2 ? "border-saffron bg-saffron text-saffron-foreground hover:brightness-110 shadow-md" : "border-teal bg-transparent text-teal hover:bg-teal hover:text-teal-foreground"}`}
              >
                <Lock className="h-4 w-4" /> Secure this tier
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Payment */}
      <Section id="payment">
        <SectionHeading eyebrow="Payment Options" title="Three Ways to make a difference." />
        <div className="grid gap-6 lg:grid-cols-3">
          <PaymentCard
            icon={Smartphone}
            title="UPI"
            badge="Fastest"
          >
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary to-teal/80 p-1 flex items-center justify-center overflow-hidden">
               <img src={upiQr} alt="NetSecure Foundation UPI QR Code" className="w-full h-full object-cover rounded-lg" />
            </div>
            <CopyRow label="UPI ID" value={UPI_ID} />
          </PaymentCard>

          <PaymentCard icon={Building} title="Bank Transfer" badge="80G receipt">
            <CopyRow label="Account Name" value={BANK.account} />
            <CopyRow label="Account Number" value={BANK.number} />
            <CopyRow label="IFSC" value={BANK.ifsc} />
            <p className="text-xs font-medium text-muted-foreground">{BANK.bank}</p>
          </PaymentCard>

          <PaymentCard icon={Heart} title="Razorpay" badge="Card / Wallet">
            <p className="text-sm text-muted-foreground">
              Donate securely via Razorpay using any debit card, credit card, net banking or wallet.
            </p>
            <button
              onClick={() => toast.info("Razorpay integration", { description: "Live payment link coming soon. Please use UPI or bank transfer." })}
              className="w-full rounded-lg bg-saffron px-5 py-3 text-sm font-bold text-saffron-foreground hover:brightness-110"
            >
              Donate via Razorpay
            </button>
          </PaymentCard>
        </div>

        {/* Payment Confirmation Section */}
        <div className="mt-8 rounded-2xl border border-teal/30 bg-teal/5 p-6 shadow-sm md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-bold text-xl text-teal">Made a donation? Let us know!</h3>
            <p className="text-sm text-foreground/80 mt-2 max-w-lg">
              To instantly claim your 80G tax receipt, please share a screenshot of your successful transaction with our team.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
             <a href={`https://wa.me/${SITE.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hello NetSecure Foundation! I have just made a donation. Here is my payment screenshot for the 80G receipt.")}`} target="_blank" rel="noreferrer" className="rounded-xl bg-[#25D366] text-white px-5 py-3 text-sm font-bold shadow-md hover:bg-[#20bd5a] transition flex items-center justify-center gap-2">
               Share on WhatsApp
             </a>
             <a href={`mailto:${SITE.email}?subject=Donation%20Proof&body=Hello,%20I%20have%20made%20a%20donation.%20Please%20find%20the%20attached%20screenshot%20for%20my%2080G%20receipt.`} className="rounded-xl bg-primary text-primary-foreground px-5 py-3 text-sm font-bold shadow-md hover:brightness-110 transition flex items-center justify-center gap-2">
               Share via Email
             </a>
          </div>
        </div>
      </Section>

      {/* 80G */}
      <Section className="bg-surface-alt">
        <div className="grid items-start gap-8 rounded-3xl border border-teal/30 bg-card p-8 shadow-card md:grid-cols-[auto_1fr] md:p-12">
          <div className="grid h-14 w-14 place-items-center rounded-2xl bg-teal/15 text-teal">
            <Award className="h-7 w-7" />
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold">80G Tax Benefit</h2>
            <p className="mt-3 text-foreground/80">
              NetSecure Foundation is 80G certified — all donations from Indian taxpayers
              qualify for tax exemption under Section 80G of the Income Tax Act.
              You will receive your donation receipt by email within 48 hours.
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              Registration: 80G Certified · CIN {SITE.cin}
            </p>
          </div>
        </div>
      </Section>

      {/* Transparency + Share */}
      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <h3 className="font-display text-xl font-bold text-primary">100% Transparency & Accountability</h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" /> 
                <span><strong className="text-foreground">Zero Administrative Overheads:</strong> All core operational and tech costs are borne by the founders. 100% of public donations go directly to the cause.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" /> 
                <span><strong className="text-foreground">Direct Impact:</strong> Your funds exclusively cover printing safety guides, school venues, and rural volunteer transport logistics.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-teal" /> 
                <span><strong className="text-foreground">Public Reporting:</strong> Detailed impact metrics and financial audits will be proactively published annually in our Transparency Report.</span>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-card p-8 shadow-card">
            <h3 className="font-display text-xl font-bold flex items-center gap-2">
              <Share2 className="h-5 w-5 text-teal" /> Share this page
            </h3>
            <p className="mt-3 text-sm text-muted-foreground">If you can't give today, share with someone who can.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {[
                { label: "WhatsApp", href: `https://wa.me/?text=${encodeURIComponent("Support NetSecure Foundation — free cyber awareness for Rajasthan: " + SITE.url + "/donate")}` },
                { label: "Twitter", href: `https://twitter.com/intent/tweet?text=${encodeURIComponent("Support @netsecurefdn — free cyber awareness across Rajasthan")}&url=${SITE.url}/donate` },
                { label: "Facebook", href: `https://www.facebook.com/sharer/sharer.php?u=${SITE.url}/donate` },
                { label: "LinkedIn", href: `https://www.linkedin.com/sharing/share-offsite/?url=${SITE.url}/donate` },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-muted">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
}

function PaymentCard({ icon: Icon, title, badge, children }: { icon: React.ComponentType<{ className?: string }>; title: string; badge?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-card">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-teal/15 text-teal"><Icon className="h-5 w-5" /></span>
          <h3 className="font-display text-lg font-bold">{title}</h3>
        </div>
        {badge && <span className="rounded-full bg-saffron/15 px-2.5 py-0.5 text-[11px] font-semibold text-saffron">{badge}</span>}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(value);
        setCopied(true);
        toast.success("Copied to clipboard");
        setTimeout(() => setCopied(false), 1500);
      }}
      className="flex w-full items-center justify-between gap-3 rounded-lg border border-dashed border-border bg-background p-3 text-left transition hover:border-teal"
    >
      <div className="min-w-0">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-mono font-medium text-foreground">{value}</div>
      </div>
      {copied ? <CheckCircle2 className="h-4 w-4 shrink-0 text-teal" /> : <Copy className="h-4 w-4 shrink-0 text-muted-foreground" />}
    </button>
  );
}
