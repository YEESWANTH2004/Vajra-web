import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, AnimatePresence } from "framer-motion";
import { facilities } from "@/data/vajra";
import { SectionHeading } from "./Reveal";

export function Facilities() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = useState(0);
  const [activeHeight, setActiveHeight] = useState<number>();
  const slideRefs = useRef<Array<HTMLDivElement | null>>([]);

  const updateActiveHeight = useCallback((index: number) => {
    const slide = slideRefs.current[index];
    if (slide) setActiveHeight(slide.offsetHeight);
  }, []);

  const onSelect = useCallback(() => {
    if (!embla) return;
    const index = embla.selectedScrollSnap();
    setSelected(index);
    updateActiveHeight(index);
  }, [embla, updateActiveHeight]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("resize", onSelect);
    embla.on("select", onSelect);
    return () => {
      embla.off("resize", onSelect);
      embla.off("select", onSelect);
    };
  }, [embla, onSelect]);

  return (
    <section id="facilities" className="bg-navy-deep py-24 text-primary-foreground lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading eyebrow="Manufacturing" title="Our Facilities" invert />
          <div className="flex gap-3">
            <button
              aria-label="Previous facility"
              onClick={() => embla?.scrollPrev()}
              className="h-12 w-12 border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              aria-label="Next facility"
              onClick={() => embla?.scrollNext()}
              className="h-12 w-12 border border-primary-foreground/25 text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-b border-primary-foreground/15 pb-4">
          {facilities.map((f, i) => (
            <button
              key={f.id}
              onClick={() => embla?.scrollTo(i)}
              className={`eyebrow transition-colors ${
                selected === i ? "text-accent" : "text-primary-foreground/45 hover:text-primary-foreground"
              }`}
            >
              {f.name}
            </button>
          ))}
        </div>

        <div
          className="mt-10 overflow-hidden transition-[height] duration-500 ease-out"
          ref={emblaRef}
          style={activeHeight ? { height: activeHeight } : undefined}
        >
          <div className="flex items-start">
            {facilities.map((f, i) => (
              <div
                key={f.id}
                aria-hidden={selected !== i}
                ref={(node) => {
                  slideRefs.current[i] = node;
                }}
                className="min-w-0 flex-[0_0_100%] pr-0 lg:pr-6"
              >
                <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                  <div className="group relative self-start overflow-hidden">
                    <img
                      src={f.image}
                      alt={f.title}
                      className="aspect-[4/3] w-full object-cover transition duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/70 to-transparent" />
                    <span className="absolute top-5 left-5 h-12 w-12 border-t-2 border-l-2 border-accent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute right-5 bottom-5 h-12 w-12 border-r-2 border-b-2 border-accent opacity-0 transition duration-500 group-hover:opacity-100" />
                    <span className="absolute bottom-0 left-0 h-1 w-32 bg-accent" />
                  </div>
                  <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-semibold text-primary-foreground lg:text-4xl">{f.title}</h3>
                    <div className="mt-5 space-y-4">
                      {f.paragraphs.map((p, i) => (
                        <p key={i} className="text-sm leading-relaxed text-primary-foreground/70">
                          {p}
                        </p>
                      ))}
                    </div>

                    {f.specs.length > 0 && (
                      <dl className="mt-8 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">
                        {f.specs.map((s) => (
                          <motion.div
                            key={s.label}
                            initial={{ opacity: 0, x: 14 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.45 }}
                            className="flex flex-wrap justify-between gap-3 py-3"
                          >
                            <dt className="eyebrow text-primary-foreground/50">{s.label}</dt>
                            <dd className="text-display text-lg font-semibold text-accent">{s.value}</dd>
                          </motion.div>
                        ))}
                      </dl>
                    )}

                    {f.table && (
                      <table className="mt-8 w-full border-collapse text-left text-sm">
                        <thead>
                          <tr>
                            {f.table.head.map((h) => (
                              <th
                                key={h}
                                className="eyebrow border-b border-primary-foreground/25 py-3 text-primary-foreground/50"
                              >
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {f.table.rows.map((r) => (
                            <tr key={r[0]} className="border-b border-primary-foreground/10">
                              {r.map((c, i) => (
                                <td
                                  key={i}
                                  className={i === 0 ? "py-3 text-primary-foreground/70" : "py-3 text-accent"}
                                >
                                  {c}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-10 h-px origin-left bg-accent/60"
          />
        </AnimatePresence>
      </div>
    </section>
  );
}
