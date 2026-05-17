import React, { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
  speed?: number; // duration in seconds for one loop
}

export function Marquee({
  children,
  direction = "left",
  pauseOnHover = true,
  className,
  speed = 20,
}: MarqueeProps) {
  const isLeft = direction === "left";

  return (
    <div
      className={cn(
        "group flex overflow-hidden p-2 [--gap:1rem] hover:[--play-state:paused]",
        className
      )}
    >
      <motion.div
        className="flex shrink-0 justify-around gap-[var(--gap)] min-w-full"
        initial={{ x: isLeft ? 0 : "-100%" }}
        animate={{ x: isLeft ? "-100%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          animationPlayState: pauseOnHover ? "var(--play-state, running)" : "running",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex shrink-0 justify-around gap-[var(--gap)] min-w-full ml-[var(--gap)]"
        initial={{ x: isLeft ? 0 : "-100%" }}
        animate={{ x: isLeft ? "-100%" : 0 }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        style={{
          animationPlayState: pauseOnHover ? "var(--play-state, running)" : "running",
        }}
        aria-hidden="true"
      >
        {children}
      </motion.div>
    </div>
  );
}
