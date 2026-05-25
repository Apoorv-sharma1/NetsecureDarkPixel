import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const ANNOUNCEMENTS = [
  "Cyber safety is a public good. Help us keep every session free.",
  "One donation can put practical cyber safety tools in a student's hands.",
  "Support Hindi-first cyber awareness workshops across Rajasthan.",
  "Your contribution helps train volunteers who protect families online.",
];

export function AnnouncementStrip() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % ANNOUNCEMENTS.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden border-b border-border/60 bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,oklch(0.78_0.13_185_/_0.2),transparent_24rem)]" />
      <div className="container-prose relative flex min-h-11 items-center justify-between gap-3 py-2">
        <div className="flex min-w-0 items-center gap-2 text-xs font-semibold md:text-sm">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-teal/40 bg-teal/10 text-teal">
            <HeartHandshake className="h-3.5 w-3.5" />
          </span>
          <div className="relative min-h-5 min-w-0 flex-1 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="truncate text-primary-foreground/85"
              >
                {ANNOUNCEMENTS[active]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <Link
          to="/donate"
          className="inline-flex shrink-0 items-center gap-1 rounded-full bg-saffron px-3 py-1.5 text-[11px] font-bold text-saffron-foreground shadow-sm transition hover:brightness-110 md:px-4 md:text-xs"
        >
          Donate <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
