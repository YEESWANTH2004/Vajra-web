import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/vajra";
import { SectionHeading } from "./Reveal";

const groups = ["All", "Super Alloy", "Stainless Steel", "High Speed Steel"] as const;

export function Portfolio() {
  const [active, setActive] = useState<(typeof groups)[number]>("All");
  const rows = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.group === active)),
    [active],
  );

  return (
    <section id="portfolio" className="py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <SectionHeading eyebrow="Grades we make" title="Product Portfolio" />

        <div className="mt-10 flex flex-wrap gap-3">
          {groups.map((g) => (
            <button
              key={g}
              onClick={() => setActive(g)}
              className={`eyebrow border px-5 py-3 transition-colors ${
                active === g
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-accent hover:text-primary"
              }`}
            >
              {g}
            </button>
          ))}
        </div>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[54rem] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                {["#", "Category", "Grade", "Chemistry", "Form", "Application"].map((h) => (
                  <th key={h} className="eyebrow px-4 py-4 text-primary-foreground/80">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false}>
                {rows.map((p, i) => (
                  <motion.tr
                    key={p.no}
                    layout
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(i * 0.015, 0.3) }}
                    className="group border-b border-border transition-colors hover:bg-surface"
                  >
                    <td className="px-4 py-4 text-muted-foreground">{p.no}</td>
                    <td className="px-4 py-4 text-muted-foreground">{p.category}</td>
                    <td className="text-display px-4 py-4 text-base font-semibold text-primary transition-colors group-hover:text-accent-foreground">
                      {p.grade}
                    </td>
                    <td className="px-4 py-4 text-muted-foreground">{p.chemistry}</td>
                    <td className="px-4 py-4 text-muted-foreground">{p.form}</td>
                    <td className="px-4 py-4 text-primary">{p.application}</td>
                  </motion.tr>
                ))}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
