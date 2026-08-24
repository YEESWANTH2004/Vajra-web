import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  invert?: boolean;
}) {
  return (
    <Reveal>
      {eyebrow ? (
        <span className={invert ? "eyebrow block text-accent" : "eyebrow block text-accent-foreground/60"}>
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`mt-3 text-4xl leading-[0.95] font-semibold sm:text-5xl lg:text-6xl ${
          invert ? "text-primary-foreground" : "text-primary"
        }`}
      >
        {title}
      </h2>
      <span className="mt-5 block h-1 w-16 bg-accent" />
    </Reveal>
  );
}
