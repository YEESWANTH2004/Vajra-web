import { productForms } from "@/data/vajra";

export function FormsMarquee() {
  const items = [...productForms, ...productForms];
  return (
    <section className="relative overflow-hidden border-y border-border bg-surface py-10">
      <div className="mb-8 flex items-center justify-center gap-6 px-5">
        <span className="hidden h-px w-24 bg-accent/50 sm:block" />
        <span className="eyebrow text-primary">Superalloy &amp; Special Steel</span>
        <span className="hidden h-px w-24 bg-accent/50 sm:block" />
      </div>
      <div className="relative">
        <div className="marquee-track flex w-max items-end gap-16 px-8">
          {items.map((f, i) => (
            <figure key={`${f.label}-${i}`} className="group flex w-36 shrink-0 flex-col items-center gap-3">
              <img
                src={f.url}
                alt={`${f.label} form`}
                className="h-20 w-auto object-contain grayscale transition duration-500 group-hover:scale-110 group-hover:grayscale-0"
              />
              <figcaption className="eyebrow text-muted-foreground">{f.label}</figcaption>
            </figure>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  );
}
