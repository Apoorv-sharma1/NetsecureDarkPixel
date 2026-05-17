import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, ArrowUpRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

interface Campaign {
  title: string;
  venue: string;
  date: string;
  initiative: string;
  slug?: string;
  image?: string;
}

export function Carousel3D({ items }: { items: Campaign[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  return (
    <div className="relative flex min-h-[500px] w-full flex-col items-center justify-center overflow-hidden py-10">
      {/* 3D Coverflow Container */}
      <div className="relative flex h-[400px] w-full max-w-5xl items-center justify-center perspective-[1000px]">
        <AnimatePresence initial={false} mode="popLayout">
          {items.map((item, index) => {
            // Determine relative position
            let offset = index - currentIndex;
            // Handle wrap around
            if (offset < -Math.floor(items.length / 2)) offset += items.length;
            if (offset > Math.floor(items.length / 2)) offset -= items.length;

            const isCenter = offset === 0;
            
            // Limit visible cards
            if (Math.abs(offset) > 2) return null;

            return (
              <motion.div
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.8, x: offset * 200, z: -Math.abs(offset) * 150 }}
                animate={{
                  opacity: Math.abs(offset) >= 2 ? 0 : 1,
                  scale: isCenter ? 1 : 0.85,
                  x: offset * 180, // Horizontal spread
                  z: -Math.abs(offset) * 100, // Depth
                  rotateY: offset * -15, // Slight tilt towards center
                  filter: isCenter ? "blur(0px)" : "blur(4px)",
                }}
                exit={{ opacity: 0, scale: 0.8, z: -200 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className={cn(
                  "absolute h-[350px] w-[300px] origin-center cursor-pointer rounded-2xl md:h-[400px] md:w-[350px]",
                  isCenter ? "z-30 shadow-card-hover" : "z-10 shadow-card"
                )}
                onClick={() => setCurrentIndex(index)}
              >
                {/* Progressive Blue Background Card */}
                <div className="h-full w-full overflow-hidden rounded-2xl bg-gradient-to-br from-primary via-primary/90 to-teal/40 p-1 relative border border-white/10 group">
                  <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" />
                  
                  {/* Card Content Wrapper */}
                  <div className="relative h-full w-full rounded-xl bg-card p-4 flex flex-col justify-between z-10 overflow-hidden">
                    {item.image && (
                      <div className="absolute inset-0 z-[-1] opacity-70 transition-opacity duration-300 group-hover:opacity-100">
                        <img src={item.image} alt={item.title} referrerPolicy="no-referrer" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-card/20" />
                      </div>
                    )}
                    <div>
                      <div className="mb-4 inline-flex items-center rounded-full bg-teal/10 px-3 py-1 text-[11px] font-semibold text-teal backdrop-blur-md">
                        <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-teal" />
                        {item.initiative}
                      </div>
                      
                      <h3 className="font-display text-xl font-bold text-foreground transition-colors group-hover:text-primary">
                        {item.title}
                      </h3>
                      
                      <p className="mt-3 text-sm text-muted-foreground line-clamp-3">
                        Cyber awareness drive at {item.venue} focusing on digital safety and ethics.
                      </p>
                    </div>

                    <div className="mt-auto">
                      <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground mb-4">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" /> {item.venue}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" /> {item.date}
                        </span>
                      </div>
                      
                      <Link 
                        to="/initiatives/$slug"
                        params={{ slug: item.slug || 'cyber-shiksha-abhiyan' }}
                        className="flex w-full items-center justify-between rounded-lg bg-primary/5 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                      >
                        Explore Campaign
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Navigation Controls */}
      <div className="mt-8 flex gap-4">
        <button
          onClick={handlePrev}
          className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-muted focus:outline-none"
          aria-label="Previous campaign"
        >
          <svg className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        <button
          onClick={handleNext}
          className="grid h-12 w-12 place-items-center rounded-full border border-border bg-background transition-colors hover:bg-muted focus:outline-none"
          aria-label="Next campaign"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
