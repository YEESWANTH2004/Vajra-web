import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const industries = [
  "Aerospace",
  "Defence",
  "Power Generation",
  "Oil & Gas",
  "Railways",
  "Advanced Engineering",
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <motion.div style={{ y, scale }} className="absolute inset-0 origin-center">
        <img
          src="/assets/hero.jpg"
          alt="Vajra Alloys ESR furnace on the plant floor"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-navy-deep/60" />
      </motion.div>

      <div className="grid-blueprint absolute inset-0 opacity-[0.18]" />

      <motion.div
        initial={{ x: "-120%" }}
        animate={{ x: "130%" }}
        transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="pointer-events-none absolute top-0 bottom-0 left-0 w-[38%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-accent/20 to-transparent"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-center px-5 pt-32 pb-20 sm:pt-36 sm:pb-24 lg:px-10 lg:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="eyebrow text-accent"
        >
          Superalloy &amp; Special Steel
        </motion.span>
        <motion.span
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 block h-px w-40 origin-left bg-accent/80"
        />

        <h1 className="mt-6 max-w-4xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="block text-xl font-light tracking-[0.18em] text-primary-foreground/80 sm:text-2xl lg:text-3xl"
          >
            Powering the future with
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mt-2 block text-5xl leading-[0.9] font-bold text-primary-foreground sm:text-6xl lg:text-[7rem]"
          >
            Superalloy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="block text-5xl leading-[0.9] font-bold text-accent sm:text-6xl lg:text-[7rem]"
          >
            Strength
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/75"
        >
          High-performance superalloys and special steels engineered for critical applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#portfolio"
            className="eyebrow clip-chevron bg-accent px-8 py-4 text-accent-foreground transition-transform duration-300 hover:translate-x-1"
          >
            Product Portfolio
          </a>
          <a
            href="#facilities"
            className="eyebrow border border-primary-foreground/30 px-8 py-4 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
          >
            Our Facilities
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-7 max-w-full overflow-hidden border-y border-primary-foreground/15 py-3 sm:max-w-2xl sm:py-4"
        >
          <div className="marquee-track flex w-max items-center gap-4">
            {[...industries, ...industries].map((industry, index) => (
              <span
                key={`${industry}-${index}`}
                className="relative overflow-hidden border border-primary-foreground/18 bg-navy-deep/75 px-4 py-2.5 text-xs font-extrabold tracking-[0.14em] text-primary-foreground/85 uppercase shadow-[0_12px_30px_rgba(5,10,32,0.16)] transition-colors hover:border-accent/70 hover:text-accent sm:px-5 sm:py-3 sm:text-sm sm:tracking-[0.16em]"
              >
                <span className="absolute top-0 left-0 h-full w-1 bg-accent" />
                {industry}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
