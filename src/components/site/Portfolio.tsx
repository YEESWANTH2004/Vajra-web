import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/vajra";
import { SectionHeading } from "./Reveal";

const categories = ["All", ...Array.from(new Set(products.map((product) => product.category)))];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const categoryStats = useMemo(
    () =>
      categories.map((category) => ({
        name: category,
        count:
          category === "All"
            ? products.length
            : products.filter((product) => product.category === category).length,
      })),
    [],
  );
  const rows = useMemo(
    () => (active === "All" ? products : products.filter((product) => product.category === active)),
    [active],
  );

  return (
    <section id="portfolio" className="min-h-screen pt-32 pb-16 lg:pt-36 lg:pb-20">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Grades we make" title="Product Portfolio" />
          <p className="text-sm font-semibold text-muted-foreground">
            Showing <span className="text-primary">{rows.length}</span> of {products.length} grades
          </p>
        </div>

        <div className="table-scroll-blue mt-10 flex gap-3 overflow-x-auto pb-3">
          {categoryStats.map((category) => (
            <button
              key={category.name}
              onClick={() => setActive(category.name)}
              className={`group relative min-w-48 overflow-hidden border px-5 py-4 text-left transition duration-300 ${
                active === category.name
                  ? "border-primary bg-primary text-primary-foreground shadow-[0_16px_38px_rgba(31,42,90,0.18)]"
                  : "border-border bg-background text-primary hover:-translate-y-0.5 hover:border-accent hover:shadow-[0_14px_34px_rgba(31,42,90,0.1)]"
              }`}
            >
              <span
                className={`absolute inset-x-0 top-0 h-1 origin-left transition-transform duration-300 ${
                  active === category.name
                    ? "scale-x-100 bg-accent"
                    : "scale-x-0 bg-accent group-hover:scale-x-100"
                }`}
              />
              <span
                className={`eyebrow block transition-colors ${
                  active === category.name ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                Category
              </span>
              <span className="mt-2 block text-sm font-extrabold leading-snug tracking-[0.08em] uppercase">
                {category.name}
              </span>
              <span
                className={`mt-3 inline-flex text-xs font-semibold ${
                  active === category.name ? "text-accent" : "text-primary/60"
                }`}
              >
                {category.count} grades
              </span>
            </button>
          ))}
        </div>

        <div className="table-scroll-blue mt-10 max-h-[calc(100vh-23rem)] min-h-[28rem] overflow-auto border border-border bg-background">
          <table className="w-full min-w-[72rem] border-collapse text-left text-sm">
            <thead className="sticky top-0 z-10">
              <tr className="bg-primary text-primary-foreground">
                {["S.no", "Category", "Grade/Trade Name", "Chemistry", "Form", "Application"].map(
                  (h) => (
                    <th key={h} className="eyebrow px-4 py-4 text-primary-foreground/80">
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              <AnimatePresence initial={false} mode="popLayout">
                {rows.map((p, i) => (
                  <motion.tr
                    key={`${active}-${p.no}`}
                    layout
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.22, delay: Math.min(i * 0.012, 0.18) }}
                    className="group border-b border-border transition-colors hover:bg-surface"
                  >
                    <td className="px-4 py-4 text-muted-foreground">{i + 1}</td>
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
