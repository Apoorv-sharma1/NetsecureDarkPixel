import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface CountingNumberProps {
  value: number;
  suffix?: string;
  className?: string;
}

export function CountingNumber({ value, suffix = "", className }: CountingNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, isInView, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className={className}>
      {Intl.NumberFormat("en-US").format(displayValue)}
      {suffix}
    </span>
  );
}
