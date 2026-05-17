import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube, ShieldCheck, Mail, Phone, MapPin } from "lucide-react";
import { SITE, INITIATIVES } from "@/lib/site";
import logoImg from "@/assets/netsecure-logo.webp";

export function Footer() {
  return (
    <footer className="mt-auto bg-primary text-primary-foreground">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center">
            <img src={logoImg} alt="NetSecure Foundation" className="h-12 w-auto brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/70">
            Rajasthan's registered Section 8 non-profit for free cybercrime awareness
            education — protecting students, women, professionals & communities, one click at a time.
          </p>
          <div className="mt-6 flex flex-wrap gap-2 text-xs">
            <Badge>Section 8 Non-Profit</Badge>
            <Badge>12A Registered</Badge>
            <Badge>80G Registered</Badge>
          </div>
          <div className="mt-6 flex gap-3">
            <Social href={SITE.social.instagram} icon={Instagram} label="Instagram" />
            <Social href={SITE.social.facebook} icon={Facebook} label="Facebook" />
            <Social href={SITE.social.linkedin} icon={Linkedin} label="LinkedIn" />
            <Social href={SITE.social.youtube} icon={Youtube} label="YouTube" />
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-teal">Initiatives</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {INITIATIVES.map((i) => (
              <li key={i.slug}>
                <Link to="/initiatives/$slug" params={{ slug: i.slug }} className="text-primary-foreground/80 hover:text-teal">
                  {i.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/engage" className="text-primary-foreground/80 hover:text-teal">Volunteer</Link>
            </li>
            <li>
              <Link to="/donate" className="text-primary-foreground/80 hover:text-teal">Donate</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-teal">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-teal" /><a href={`tel:${SITE.phoneTel}`} className="hover:text-teal">{SITE.phone}</a></li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-teal" /><a href={`mailto:${SITE.email}`} className="hover:text-teal">{SITE.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-teal" /><span>{SITE.address}</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-primary-foreground/60 md:flex-row md:items-center">
          <div>
            CIN: {SITE.cin} · © {new Date().getFullYear()} NetSecure Foundation. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-teal">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-teal">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 font-medium text-teal">
      {children}
    </span>
  );
}

function Social({ href, icon: Icon, label }: { href: string; icon: React.ComponentType<{ className?: string }>; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="grid h-10 w-10 place-items-center rounded-lg border border-primary-foreground/20 text-primary-foreground/80 transition hover:border-teal hover:bg-teal hover:text-teal-foreground"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}
