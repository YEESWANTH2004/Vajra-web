import { motion } from "framer-motion";
import { coldRollingFlow, finishes, formsAndSizes, superalloyFlow, esrDiagramImage } from "@/data/vajra";
import { Reveal, SectionHeading } from "./Reveal";

export function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <SectionHeading eyebrow="How it is made" title="Cold Rolling Process" />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {coldRollingFlow.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="clip-chevron group relative border border-border bg-surface px-6 py-7 transition-colors hover:border-accent"
            >
              <span className="text-display text-sm font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-display mt-2 text-lg leading-tight font-semibold text-primary">{step}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="text-2xl font-semibold text-primary">Surface Finishes</h3>
            <span className="mt-4 block h-1 w-12 bg-accent" />
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {finishes.map(([name, desc]) => (
                <div key={name} className="py-4">
                  <dt className="text-display text-lg font-semibold text-primary">{name}</dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{desc}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.1}>
            <h3 className="text-2xl font-semibold text-primary">Forms &amp; Sizes</h3>
            <span className="mt-4 block h-1 w-12 bg-accent" />
            <dl className="mt-6 divide-y divide-border border-y border-border">
              {formsAndSizes.map(([name, size]) => (
                <div key={name} className="flex flex-wrap items-baseline justify-between gap-3 py-4">
                  <dt className="text-display text-lg font-semibold text-primary">{name}</dt>
                  <dd className="text-sm text-muted-foreground">{size}</dd>
                </div>
              ))}
            </dl>
            <img
              src={esrDiagramImage}
              alt="Electroslag remelting process diagram"
              className="mt-10 w-full border border-border bg-surface object-contain p-6"
            />
          </Reveal>
        </div>
      </div>

      <div className="mt-24 bg-surface py-20 lg:mt-32">
        <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
          <SectionHeading eyebrow="End to end" title="Superalloy Manufacturing Process" />
          <div className="mt-12 space-y-8">
            {superalloyFlow.map((row, ri) => (
              <div key={ri} className="relative">
                <div className="flex flex-wrap gap-3">
                  {row.map((node, ni) => (
                    <motion.span
                      key={node}
                      initial={{ opacity: 0, scale: 0.94 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.45, delay: ni * 0.06 }}
                      className={`text-display px-5 py-4 text-base font-semibold tracking-wide ${
                        ri === 0
                          ? "bg-primary text-primary-foreground"
                          : ri === superalloyFlow.length - 1
                            ? "bg-accent text-accent-foreground"
                            : "border border-primary/20 bg-background text-primary"
                      }`}
                    >
                      {node}
                    </motion.span>
                  ))}
                </div>
                {ri < superalloyFlow.length - 1 && (
                  <motion.span
                    initial={{ height: 0 }}
                    whileInView={{ height: 24 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 ml-6 block w-px bg-accent"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
