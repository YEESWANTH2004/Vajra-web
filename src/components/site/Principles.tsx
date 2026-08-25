import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { principles } from "@/content/about";
import esrFurnace from "@/assets/esr-furnace.jpg.asset.json";
import rollingMill from "@/assets/rolling-mill.jpg.asset.json";
import testOes from "@/assets/test-oes.jpg.asset.json";
import { SectionHeading } from "./Reveal";

const cardImages = [esrFurnace.url, rollingMill.url, testOes.url];

function Card({
  card,
  index,
  progress,
}: {
  card: (typeof principles)[number];
  index: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / principles.length;
  const scale = useTransform(progress, [start, 1], [1, 1 - (principles.length - index) * 0.04]);

  return (
    <motion.article
      style={{ scale, top: `calc(6rem + ${index * 2.2}rem)` }}
      className="group sticky origin-top overflow-hidden border-t-4 border-accent bg-primary px-7 py-8 text-primary-foreground shadow-[0_24px_60px_-30px_rgba(10,16,40,0.7)] lg:px-12 lg:py-10"
    >
      <div className="grid gap-7 lg:grid-cols-[auto_1fr_minmax(18rem,0.45fr)] lg:items-center lg:gap-12">
        <span className="text-display text-6xl leading-none font-bold text-accent lg:text-8xl">{card.no}</span>
        <div>
          <h3 className="text-3xl font-semibold lg:text-4xl">{card.title}</h3>
          <p className="mt-5 max-w-3xl leading-relaxed text-primary-foreground/75">{card.body}</p>
        </div>
        <div className="relative min-h-44 overflow-hidden border border-primary-foreground/10 bg-navy-deep lg:min-h-48">
          <img
            src={cardImages[index]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/45 to-transparent" />
          <div className="absolute inset-0 bg-navy-deep/20" />
          <span className="absolute top-4 left-4 h-10 w-10 border-t-2 border-l-2 border-accent" />
          <span className="absolute right-4 bottom-4 h-10 w-10 border-r-2 border-b-2 border-accent" />
        </div>
      </div>
    </motion.article>
  );
}

export function Principles() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  return (
    <section id="principles" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <SectionHeading eyebrow="What drives us" title="Mission, Vision & Quality" />
        <div ref={ref} className="mt-14 space-y-6">
          {principles.map((card, index) => (
            <Card key={card.no} card={card} index={index} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
