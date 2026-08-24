import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "./Reveal";

const cards = [
  {
    no: "01",
    title: "Our Mission",
    body: "To manufacture superalloys and special steels of consistent metallurgical quality that meet the performance demands of critical industries, while building trusted, long-term partnerships through reliability, technical capability and disciplined execution.",
  },
  {
    no: "02",
    title: "Our Vision",
    body: "To be a globally recognised Indian manufacturer of advanced superalloys and special steels, supporting strategic and industrial sectors with materials engineered for performance, precision and dependability.",
  },
  {
    no: "03",
    title: "Quality Policy",
    body: "We are committed to delivering superalloys and special steels that consistently meet customer, statutory and international standard requirements — through robust process control, qualified people, continual improvement and an uncompromising focus on metallurgical integrity.",
  },
];

function Card({ card, index, progress }: { card: (typeof cards)[number]; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const start = index / cards.length;
  const scale = useTransform(progress, [start, 1], [1, 1 - (cards.length - index) * 0.04]);

  return (
    <motion.article
      style={{ scale, top: `calc(6rem + ${index * 2.2}rem)` }}
      className="sticky origin-top border-t-4 border-accent bg-primary px-7 py-10 text-primary-foreground shadow-[0_24px_60px_-30px_rgba(10,16,40,0.7)] lg:px-12 lg:py-14"
    >
      <div className="grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-12">
        <span className="text-display text-6xl leading-none font-bold text-accent lg:text-8xl">{card.no}</span>
        <div>
          <h3 className="text-3xl font-semibold lg:text-4xl">{card.title}</h3>
          <p className="mt-5 max-w-2xl leading-relaxed text-primary-foreground/75">{card.body}</p>
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
          {cards.map((c, i) => (
            <Card key={c.no} card={c} index={i} progress={scrollYProgress} />
          ))}
        </div>
      </div>
    </section>
  );
}
