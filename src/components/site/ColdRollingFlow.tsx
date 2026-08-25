import { motion } from "framer-motion";
import coldRollingProcess from "@/assets/coldrolling-process.png";
import { finishes } from "@/data/vajra";
import { SectionHeading } from "./Reveal";

export function ColdRollingFlow() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <SectionHeading title="COLD ROLLING MILL PROCESS FLOW" />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-8"
        >
          <div>
            <span className="eyebrow text-accent-foreground/60">Reference Diagram</span>
            <h3 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl">Complete line overview</h3>
            <span className="mt-4 block h-1 w-12 bg-accent" />
          </div>

          <div className="overflow-hidden border border-border bg-white p-3 shadow-[0_28px_70px_-48px_rgba(31,42,90,0.45)] sm:p-5">
            <div className="overflow-x-auto table-scroll-blue">
              <img
                src={coldRollingProcess}
                alt="Cold rolling process flow showing coil preparation, rolling mill, annealing line and cold rolled slitter stages"
                className="min-w-[34rem] w-full max-w-none object-contain sm:min-w-[42rem] lg:min-w-0"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span className="eyebrow text-accent-foreground/60">Finish Description</span>
            <h3 className="mt-3 text-3xl font-semibold text-primary">Surface finishes</h3>
            <span className="mt-4 block h-1 w-12 bg-accent" />
          </div>
          <div className="overflow-hidden border border-border bg-background">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="eyebrow w-48 px-5 py-4 text-primary-foreground/80">Finish</th>
                  <th className="eyebrow px-5 py-4 text-primary-foreground/80">Description</th>
                </tr>
              </thead>
              <tbody>
                {finishes.map(([finish, description], index) => (
                  <motion.tr
                    key={finish}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="text-display px-5 py-4 text-lg font-semibold text-primary">{finish}</td>
                    <td className="px-5 py-4 leading-relaxed text-muted-foreground">{description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
