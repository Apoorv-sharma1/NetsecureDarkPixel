import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { INITIATIVES } from "@/lib/site";
import { motion } from "framer-motion";
import logoImg from "@/assets/netsecure-logo.webp";
import { AnnouncementStrip } from "./AnnouncementStrip";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/gallery", label: "Gallery" },
  { to: "/engage", label: "Engage" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [initOpen, setInitOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <AnnouncementStrip />
      <div className="container-prose flex h-16 items-center justify-between gap-4 md:h-20">
        <Link to="/" className="flex items-center transition hover:opacity-90">
          <img src={logoImg} alt="NetSecure Foundation" className="h-10 w-auto md:h-12" />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.slice(0, 2).map((l) => (
            <NavItem key={l.to} {...l} />
          ))}
          <div className="relative" onMouseLeave={() => setInitOpen(false)}>
            <button
              onClick={() => setInitOpen((v) => !v)}
              onMouseEnter={() => setInitOpen(true)}
              className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
            >
              Initiatives <ChevronDown className="h-4 w-4" />
            </button>
            {initOpen && (
              <div className="absolute left-0 top-full w-72 rounded-xl border border-border bg-popover p-2 shadow-card-hover">
                <Link
                  to="/initiatives"
                  className="block rounded-lg px-3 py-2 text-sm font-semibold text-primary hover:bg-muted"
                  onClick={() => setInitOpen(false)}
                >
                  All Initiatives →
                </Link>
                <div className="my-1 h-px bg-border" />
                {INITIATIVES.map((i) => (
                  <Link
                    key={i.slug}
                    to="/initiatives/$slug"
                    params={{ slug: i.slug }}
                    onClick={() => setInitOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm hover:bg-muted"
                  >
                    <div className="font-medium text-foreground">{i.name}</div>
                    <div className="text-xs text-muted-foreground">{i.audience}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navLinks.slice(2).map((l) => (
            <NavItem key={l.to} {...l} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Link
            to="/donate"
            className="hidden rounded-lg bg-saffron px-5 py-2.5 text-sm font-bold text-saffron-foreground shadow-sm transition hover:brightness-110 sm:inline-flex"
          >
            Donate
          </Link>
          <button
            className="grid h-10 w-10 place-items-center rounded-lg border border-border lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background lg:hidden">
          <div className="container-prose flex h-16 items-center justify-between">
            <span className="font-display font-bold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-lg border border-border"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="container-prose flex flex-col gap-1 pb-12 pt-4">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-3 pt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Initiatives
            </div>
            <Link
              to="/initiatives"
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2 text-base font-medium hover:bg-muted"
            >
              All Initiatives
            </Link>
            {INITIATIVES.map((i) => (
              <Link
                key={i.slug}
                to="/initiatives/$slug"
                params={{ slug: i.slug }}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base hover:bg-muted"
              >
                {i.name}
              </Link>
            ))}
            <div className="mt-4 px-3">
              <ThemeToggle />
            </div>
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex justify-center rounded-lg bg-saffron px-5 py-3 text-base font-bold text-saffron-foreground"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavItem({ to, label }: { to: string; label: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className="group relative rounded-md px-3 py-2 text-sm font-medium text-foreground/80 transition hover:text-foreground"
      activeProps={{ className: "text-primary" }}
      activeOptions={{ exact: to === "/" }}
    >
      {label}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-teal transition-all duration-300 group-hover:w-full" />
      {isActive && (
        <motion.span
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 h-0.5 w-full bg-primary"
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </Link>
  );
}
