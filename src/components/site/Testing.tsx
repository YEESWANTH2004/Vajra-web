import { motion } from "framer-motion";
import { testingFacilities } from "@/data/vajra";
import { SectionHeading } from "./Reveal";

export function Testing() {
  return (
    <section id="testing" className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <SectionHeading eyebrow="Assured quality" title="Testing Facilities" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testingFacilities.map((t, i) => (
            <motion.figure
              key={t.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden bg-primary"
            >
              <img
                src={t.image}
                alt={t.title}
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/25 to-transparent" />
              <figcaption className="absolute inset-x-0 bottom-0 flex items-center gap-3 p-6">
                <span className="h-px w-8 bg-accent transition-all duration-500 group-hover:w-14" />
                <span className="text-display text-lg font-semibold text-primary-foreground">{t.title}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
