import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg transition-transform hover:scale-110",
        !isVisible && "pointer-events-none"
      )}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5 text-primary" />
      <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-border"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          className="text-teal"
          style={{ pathLength: scaleY }}
        />
      </svg>
    </motion.button>
  );
}
