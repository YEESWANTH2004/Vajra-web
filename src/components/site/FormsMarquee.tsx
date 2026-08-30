import { productForms } from "@/data/vajra";
import { Reveal, SectionHeading } from "./Reveal";

const formDetails: Record<string, string> = {
  Ingot: "Primary melted stock for forging, rolling and critical downstream conversion.",
  Bars: "Round and forged bars for aerospace, defence, power and precision engineering.",
  Plates: "Special steel and superalloy plates processed for demanding fabrication needs.",
  Rods: "Controlled diameter rods for machining, drawing and high-strength applications.",
  Coil: "Rolled coil stock prepared for strip, sheet and precision slitting workflows.",
  Sheet: "Cold rolled sheet forms with tight thickness control and refined surface finish.",
  Wire: "Fine wire forms for welding, medical, energy and advanced industrial uses.",
};

export function FormsMarquee() {
  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-y border-border bg-surface py-24 lg:py-32"
    >
      <div className="grid-blueprint absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[88rem] px-5 lg:px-10">
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Superalloy & Special Steel"
            title="Engineered Forms for Critical Applications"
          />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            VAJRA manufactures high-performance alloys across melt, rolled, drawn and finished forms
            for industries where strength, heat resistance and reliability matter.
          </p>
        </div>

        {/*
          Option 1 equal grid design. Kept here for quick comparison/rollback.
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {productForms.map((form, index) => (
              <Reveal key={form.label} delay={index * 0.04}>
                <figure className="group relative flex min-h-[25.5rem] flex-col overflow-hidden border border-primary/15 bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/70 hover:shadow-[0_20px_50px_rgba(31,42,90,0.12)]">
                  <div className="absolute inset-x-6 bottom-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between gap-4">
                    <figcaption className="font-display text-4xl leading-none font-bold tracking-[0.01em] text-primary uppercase">
                      {form.label}
                    </figcaption>
                    <span className="eyebrow text-primary/35">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="mt-7 flex h-40 items-center justify-center sm:h-44">
                    <img
                      src={form.url}
                      alt={`${form.label} product form`}
                      className="max-h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(31,42,90,0.14)] transition duration-500 group-hover:scale-110"
                    />
                  </div>
                  <p className="mt-auto pt-7 text-base leading-relaxed text-muted-foreground">
                    {formDetails[form.label]}
                  </p>
                </figure>
              </Reveal>
            ))}
          </div>
        */}

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {productForms.map((form, index) => (
            <Reveal key={form.label} delay={index * 0.04}>
              <figure className="group relative overflow-hidden border border-primary/15 bg-transparent transition duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary hover:shadow-[0_22px_55px_rgba(31,42,90,0.16)]">
                <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
                <div className="grid min-h-[17rem] items-center gap-5 p-5 sm:grid-cols-[0.9fr_1fr] sm:p-6">
                  <div className="product-copy">
                    <div className="flex items-start justify-between gap-4">
                      <span className="eyebrow text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="hidden h-px flex-1 bg-primary/15 transition-colors duration-300 group-hover:bg-primary-foreground/20 sm:mt-2 sm:block" />
                    </div>
                    <figcaption className="mt-5 font-display text-4xl leading-none font-bold tracking-[0.01em] text-primary uppercase transition-colors duration-300 group-hover:text-primary-foreground sm:text-5xl">
                      {form.label}
                    </figcaption>
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/75 sm:text-base">
                      {formDetails[form.label]}
                    </p>
                  </div>
                  <div className="product-image relative flex h-44 items-center justify-center bg-surface/70 p-3 transition-colors duration-300 group-hover:bg-primary-foreground sm:h-52 sm:p-5">
                    <div className="absolute top-4 right-4 bottom-4 left-4 border border-accent/0 transition-colors duration-300 group-hover:border-accent/50" />
                    <img
                      src={form.url}
                      alt={`${form.label} product form`}
                      className="relative max-h-full w-full object-contain drop-shadow-[0_18px_28px_rgba(31,42,90,0.16)] transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
