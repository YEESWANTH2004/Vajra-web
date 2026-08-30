import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function PageHero({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative min-h-[72svh] overflow-hidden bg-navy-deep">
      <motion.div style={{ y, scale }} className="absolute inset-0 origin-center">
        <img src="/assets/hero.jpg" alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/88 to-navy-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/65" />
      </motion.div>

      <div className="grid-blueprint absolute inset-0 opacity-[0.16]" />

      <div className="relative mx-auto flex min-h-[72svh] max-w-[88rem] flex-col justify-center px-5 pt-28 pb-20 lg:px-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow text-accent"
        >
          {eyebrow}
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 block h-px w-40 origin-left bg-accent/80"
        />
        <h1 className="mt-6 max-w-5xl text-6xl leading-[0.9] font-bold text-primary-foreground sm:text-7xl lg:text-[7.5rem]">
          <motion.span
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            {title}
          </motion.span>
          {highlight ? (
            <motion.span
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="block text-accent"
            >
              {highlight}
            </motion.span>
          ) : null}
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.78 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-primary-foreground/75"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}
