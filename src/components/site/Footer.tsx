import { motion } from "framer-motion";
import { contactDetails } from "@/content/contact";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-navy-deep text-primary-foreground">
      <div className="grid-blueprint absolute inset-0 opacity-[0.12]" />
      <div className="relative mx-auto max-w-[88rem] px-5 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <span className="eyebrow text-accent">Get in touch</span>
          <h2 className="mt-4 max-w-3xl text-4xl leading-[0.95] font-semibold text-primary-foreground sm:text-5xl lg:text-6xl">
            Let&apos;s engineer your next critical component
          </h2>
          <span className="mt-6 block h-1 w-16 bg-accent" />
        </Reveal>

        <div className="mt-16 grid gap-12 border-t border-primary-foreground/15 pt-12 lg:grid-cols-3">
          <Reveal>
            <span className="eyebrow text-primary-foreground/50">Corporate Office</span>
            <address className="mt-4 text-sm leading-relaxed text-primary-foreground/80 not-italic">
              {contactDetails.corporateOffice.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow text-primary-foreground/50">Plant</span>
            <address className="mt-4 text-sm leading-relaxed text-primary-foreground/80 not-italic">
              {contactDetails.plant.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={0.2}>
            <span className="eyebrow text-primary-foreground/50">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href={`mailto:${contactDetails.email}`} className="transition-colors hover:text-accent">
                  {contactDetails.email}
                </a>
              </li>
              <li>
                <a href={`https://${contactDetails.website}`} className="transition-colors hover:text-accent">
                  {contactDetails.website}
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8">
          <motion.img
            src="/assets/vajra-logo.webp"
            alt="Vajra Alloys"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-12 w-auto brightness-0 invert"
          />
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs tracking-[0.18em] text-primary-foreground/45 uppercase"
          >
            A subsidiary of Krishca Strapping Solutions Limited
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
