import { motion } from "framer-motion";
import { facilities } from "@/data/vajra";
import { Reveal, SectionHeading } from "./Reveal";

export function FacilitiesDetail() {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-28">
      <div className="grid-blueprint absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="max-w-3xl">
          <SectionHeading eyebrow="Manufacturing" title="Facility Capabilities" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A complete view of VAJRA's production facilities, process capabilities, equipment
            details and operating strengths.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {facilities.map((facility, index) => (
            <Reveal key={facility.id} y={42} delay={index * 0.04}>
              <article
                id={facility.id}
                className="group flex h-full min-h-[40rem] scroll-mt-28 flex-col overflow-hidden border border-primary/15 bg-surface shadow-[0_18px_55px_rgba(31,42,90,0.08)] transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:bg-background hover:shadow-[0_24px_70px_rgba(31,42,90,0.13)]"
              >
                <div className="p-5 pb-0 sm:p-6 sm:pb-0">
                  <div className="relative flex h-56 items-center justify-center overflow-hidden bg-background sm:h-64">
                    <img
                      src={facility.image}
                      alt={facility.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/55 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-accent px-3 py-1.5 text-xs font-black tracking-[0.16em] text-accent-foreground">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute right-4 bottom-4 left-4 font-display text-3xl leading-none font-bold tracking-[0.01em] text-primary-foreground uppercase sm:text-4xl">
                      {facility.name}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5 sm:p-6">
                  <div className="min-h-[15rem]">
                    <span className="eyebrow text-accent">Facility</span>
                    <h3 className="mt-3 text-2xl font-semibold text-primary">{facility.title}</h3>
                    <div
                      className={[
                        "mt-4 space-y-3 border-l-3 border-accent pl-4",
                        facility.paragraphs.length === 1 ? "bg-background/75 py-4 pr-4" : "",
                      ].join(" ")}
                    >
                      {facility.paragraphs.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-sm leading-relaxed text-muted-foreground"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-5">
                    {facility.specs.length > 0 ? (
                      <dl className="grid gap-px overflow-hidden border border-primary/15 bg-primary/15 sm:grid-cols-2">
                        {facility.specs.map((spec, specIndex) => (
                          <motion.div
                            key={spec.label}
                            initial={{ opacity: 0, y: 12 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: specIndex * 0.04 }}
                            className="bg-surface p-3 transition-colors duration-300 group-hover:bg-background"
                          >
                            <dt className="eyebrow text-primary/50">{spec.label}</dt>
                            <dd className="mt-1.5 text-base font-semibold text-primary">
                              {spec.value}
                            </dd>
                          </motion.div>
                        ))}
                      </dl>
                    ) : null}

                    {facility.table ? (
                      <div className="overflow-x-auto border border-primary/15 bg-background">
                        <table className="w-full border-collapse text-left text-xs">
                          <thead>
                            <tr>
                              {facility.table.head.map((head) => (
                                <th
                                  key={head}
                                  className="eyebrow border-b border-primary/15 px-3 py-3 text-primary/60"
                                >
                                  {head}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {facility.table.rows.map((row) => (
                              <tr
                                key={row[0]}
                                className="border-b border-primary/10 last:border-b-0"
                              >
                                {row.map((cell, cellIndex) => (
                                  <td
                                    key={cell}
                                    className={
                                      cellIndex === 0
                                        ? "px-3 py-3 text-muted-foreground"
                                        : "px-3 py-3 font-semibold text-primary"
                                    }
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
