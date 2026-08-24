import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import hero from "@/assets/hero.jpg.asset.json";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden bg-navy-deep">
      <motion.div style={{ y, scale }} className="absolute inset-0 origin-center">
        <img src={hero.url} alt="Vajra Alloys ESR furnace on the plant floor" className="h-full w-full object-cover" />
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

      <div className="relative mx-auto flex min-h-[100svh] max-w-[88rem] flex-col justify-center px-5 pt-28 pb-24 lg:px-10">
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
            className="mt-2 block text-6xl leading-[0.88] font-bold text-primary-foreground sm:text-7xl lg:text-[8.5rem]"
          >
            Superalloy
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="block text-6xl leading-[0.88] font-bold text-accent sm:text-7xl lg:text-[8.5rem]"
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
          High-performance superalloys and special steels for Aerospace, Defence, Power Generation, Oil &amp; Gas,
          Railways and advanced engineering industries.
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
          style={{ opacity: fade }}
          className="absolute inset-x-5 bottom-8 flex items-center justify-between lg:inset-x-10"
        >
          <div className="flex flex-wrap gap-x-8 gap-y-1 text-[0.7rem] tracking-[0.2em] text-primary-foreground/50 uppercase">
            <span>ASTM</span>
            <span>ASME</span>
            <span>DIN</span>
            <span className="hidden sm:inline">www.vajraalloys.com</span>
          </div>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-px bg-accent"
          />
        </motion.div>
      </div>
    </section>
  );
}
