import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHero, Section, CTAButton } from "@/components/ui-blocks";
import { POSTS } from "./index";
import { Calendar, User } from "lucide-react";

const BODIES: Record<string, string[]> = {
  "upi-fraud-rajasthan-2026": [
    "UPI has transformed how India transacts — but it has also created an entirely new class of fraud. In Rajasthan alone, cyber cells reported a 4× rise in UPI-related complaints between 2024 and 2026. Here are the five patterns hitting our state hardest.",
    "1. The 'wrong transfer' refund trap. A scammer sends you ₹1 and immediately calls claiming it was a mistake — please send it back. The 'refund' link they share is a collect request, not a payment. The moment you approve it, money leaves your account.",
    "2. QR-code scams at markets. A printed QR pasted over the legitimate shopkeeper's QR redirects payments to a fraudster. Always confirm the receiver name before paying.",
    "3. Fake delivery agent OTP. A 'delivery person' asks you to share an OTP to 'confirm' a parcel. That OTP is your UPI PIN reset.",
    "4. KYC expiry messages. SMS or WhatsApp messages claiming your bank or UPI app KYC has expired, with a link to 're-verify'. The link is a credential harvester.",
    "5. Investment & job UPI scams. Telegram groups promising guaranteed returns or 'easy work-from-home' tasks that begin with a small UPI payment to 'unlock' your task list.",
    "What to do if you've been scammed: call 1930 immediately — the sooner you report, the higher the chance of recovering funds. File at cybercrime.gov.in within 24 hours.",
  ],
  "cyberstalking-report-india": [
    "Cyberstalking is repeated, unwanted contact or surveillance using digital means — calls, messages, social media, location tracking. In India it is a recognised offence under Section 354D of the IPC and Section 67 of the IT Act.",
    "Recognise the patterns. Persistent messages from unknown numbers after blocking. Fake profiles tracking your activity. Threats — explicit or implied — based on personal information the stalker shouldn't have.",
    "Document everything. Screenshots with date and time visible, full URLs, sender IDs, and call logs. Do not delete the messages even if disturbing — they are evidence.",
    "Report through three channels: dial 1930 (national cybercrime helpline), file at cybercrime.gov.in, and visit your nearest cyber cell with copies of evidence and an FIR draft.",
    "Tell someone you trust. Cyberstalking thrives on isolation; sharing the situation immediately reduces the stalker's psychological hold.",
    "If you are in immediate danger or threats are escalating, dial 181 (women's helpline) or 112 alongside cyber reporting.",
  ],
  "school-cyber-safety-guide": [
    "Schools today are cyber environments. Class WhatsApp groups, online attendance, learning apps, and student social media all create exposure. Here's a field-tested guide for parents and teachers in India.",
    "Audit the WhatsApp groups. Use admin-only message permissions in class groups. Remove ex-students and parents who've withdrawn. Disable 'add to group' from non-contacts on your own number.",
    "Train students on the basics, early. Classes 6 onwards must know: never share OTPs, never pay anyone via UPI based on instructions from an online stranger, never share home photos with location metadata.",
    "Make reporting safe. Students must know that telling a teacher about an online incident — even an embarrassing one — will not result in punishment. The shame barrier is the largest enabler of cyberbullying.",
    "Verify before forwarding. Train staff to verify any school-related message claiming to be from the principal or admin via voice call before acting.",
    "Schedule one cyber awareness session per academic year. We deliver this free across Rajasthan — request one at /initiatives/cyber-shiksha-abhiyan.",
  ],
  "dpdp-act-2023-ngos": [
    "India's Digital Personal Data Protection Act 2023 (DPDP Act) is now in force, and NGOs are not exempt. If your NGO collects donor names, beneficiary phone numbers, photos of children, or volunteer data — you are a 'Data Fiduciary' under the law.",
    "What changed. Penalties for non-compliance go up to ₹250 crore. Consent must be specific, informed and revocable. Children's data (under 18) requires verified parental consent. Beneficiary photos in your annual report? You need explicit consent.",
    "A 5-step starter plan: (1) map every place you collect personal data — Google Forms, WhatsApp, paper registers; (2) write a simple privacy notice in Hindi and English; (3) capture consent in writing or recorded audio for beneficiaries; (4) appoint a data point-of-contact even if part-time; (5) review who has access to your spreadsheets and remove ex-volunteers.",
    "What we recommend immediately: stop sharing beneficiary photos on social media without written consent; restrict access to donor databases; encrypt laptops used for field data.",
    "We deliver free DPDP awareness sessions for NGOs through our Cyber Vaccine programme. Request one at /initiatives/cyber-vaccine.",
  ],
  "phishing-emails-7-signs": [
    "Phishing emails are the most common entry point for cyberattacks in India. Here are seven signs that should make you stop and verify before clicking.",
    "1. Urgency in the subject line. 'Your account will be suspended', 'Final notice', 'Action required within 24 hours'. Real institutions rarely create artificial urgency.",
    "2. Mismatched sender domain. 'support@hdfc-bank-secure.com' is not HDFC. Hover (don't click) to inspect the real domain.",
    "3. Generic greeting. 'Dear Customer' from a service that knows your name is suspicious.",
    "4. Suspicious links. Hover to preview; the visible text and the real URL should match. Shortened links (bit.ly) in financial mail are a red flag.",
    "5. Unexpected attachments. Especially .zip, .exe, .scr or password-protected documents you weren't expecting.",
    "6. Requests for credentials. Banks, government and reputable companies will never ask you to 'verify' your password via email link.",
    "7. Subtle spelling or formatting issues. AI-generated phishing is improving, but logos pixelated by re-saving, off-brand colours, or formatting that breaks across email clients are still common.",
    "When in doubt, do not click. Open a new browser tab and visit the service directly. Forward suspected phishing to your IT team or to report@cybercrime.gov.in.",
  ],
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS.find((p) => p.slug === params.slug);
    const body = BODIES[params.slug];
    if (!post || !body) throw notFound();
    return { post, body };
  },
  head: ({ loaderData }) =>
    loaderData
      ? {
          meta: [
            { title: `${loaderData.post.title} | NetSecure Foundation` },
            { name: "description", content: loaderData.post.excerpt },
            { property: "og:title", content: loaderData.post.title },
            { property: "og:description", content: loaderData.post.excerpt },
            { property: "og:type", content: "article" },
            { property: "og:url", content: `/blog/${loaderData.post.slug}` },
          ],
          links: [{ rel: "canonical", href: `/blog/${loaderData.post.slug}` }],
          scripts: [{
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.post.title,
              author: { "@type": "Person", name: "Mohit Sharma" },
              publisher: { "@type": "Organization", name: "NetSecure Foundation" },
              datePublished: loaderData.post.date,
            }),
          }],
        }
      : {},
  component: Post,
  notFoundComponent: () => (
    <SiteLayout>
      <Section><h1 className="font-display text-3xl font-bold">Post not found</h1></Section>
    </SiteLayout>
  ),
});

function Post() {
  const { post, body } = Route.useLoaderData() as { post: typeof POSTS[number]; body: string[] };
  return (
    <SiteLayout>
      <PageHero eyebrow={post.category} title={post.title} subtitle={post.excerpt} />
      <Section>
        <article className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><User className="h-4 w-4" />Mohit Sharma</span>
            <span className="inline-flex items-center gap-1.5"><Calendar className="h-4 w-4" />{post.date}</span>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-foreground/85">
            {body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-12 rounded-2xl border border-teal/30 bg-teal/5 p-8 text-center">
            <h3 className="font-display text-xl font-bold">Want a free cyber session at your school or org?</h3>
            <p className="mt-2 text-sm text-muted-foreground">We deliver free sessions across Rajasthan.</p>
            <div className="mt-5">
              <CTAButton to="/contact" variant="primary">Request a session</CTAButton>
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link to="/blog" className="text-sm font-semibold text-teal hover:underline">← Back to all posts</Link>
          </div>
        </article>
      </Section>
    </SiteLayout>
  );
}
