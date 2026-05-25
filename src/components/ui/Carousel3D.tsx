import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Campaign {
  title: string;
  venue: string;
  date: string;
  initiative: string;
  slug?: string;
  image?: string;
}

const CARD_WIDTH_REM = 25;
const GAP_REM = 2;

export function Carousel3D({ items }: { items: Campaign[] }) {
  const [activeIndex, setActiveIndex] = useState(Math.min(1, items.length - 1));
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const focusedIndex = hoveredIndex ?? activeIndex;

  useEffect(() => {
    if (hoveredIndex !== null) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % items.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [hoveredIndex, items.length]);

  return (
    <div className="campaign-strip relative mt-10 overflow-hidden py-12">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-20 bg-gradient-to-r from-surface-alt to-transparent md:w-36" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-surface-alt to-transparent md:w-36" />

      <motion.div
        className="campaign-strip-track flex items-stretch gap-8 will-change-transform"
        animate={{
          x: `calc(50% - ${CARD_WIDTH_REM / 2}rem - ${
            activeIndex * (CARD_WIDTH_REM + GAP_REM)
          }rem)`,
        }}
        transition={{ type: "spring", stiffness: 90, damping: 24 }}
      >
        {items.map((item, index) => {
          const distance = Math.abs(index - focusedIndex);
          const isFocused = distance === 0;
          const blur =
            hoveredIndex === index ? "blur(0px)" : `blur(${Math.min(distance * 2.6, 7)}px)`;

          return (
            <motion.article
              key={`${item.title}-${index}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onFocus={() => setHoveredIndex(index)}
              onBlur={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
              animate={{
                scale: isFocused ? 1.06 : 0.94,
                opacity: isFocused ? 1 : Math.max(0.42, 0.82 - distance * 0.16),
                filter: blur,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className={cn(
                "group relative flex h-[27rem] w-[min(78vw,25rem)] shrink-0 flex-col overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-card transition-shadow duration-300 hover:shadow-card-hover md:w-[25rem]",
                isFocused && "z-10 shadow-card-hover",
              )}
            >
              <div className="relative h-56 overflow-hidden rounded-b-[1.4rem] bg-muted">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card/20 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/35 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                  {item.initiative}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-bold leading-snug text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Cyber awareness drive at {item.venue} focused on practical digital safety.
                </p>

                <div className="mt-5 flex flex-wrap gap-3 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-teal" /> {item.venue}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-teal" /> {item.date}
                  </span>
                </div>

                <Link
                  to="/initiatives/$slug"
                  params={{ slug: item.slug || "cyber-shiksha-abhiyan" }}
                  className="mt-auto inline-flex items-center justify-between rounded-xl border border-border bg-background/70 px-4 py-3 text-sm font-bold text-primary transition hover:border-teal hover:text-teal"
                >
                  Explore Campaign
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          );
        })}
      </motion.div>

      <div className="mt-8 flex justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={item.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === activeIndex ? "w-8 bg-teal" : "w-2 bg-muted-foreground/40 hover:bg-teal/70",
            )}
            aria-label={`Show campaign ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
