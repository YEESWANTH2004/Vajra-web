import { motion } from "framer-motion";
import logo from "@/assets/logo/vajra-logo.webp";
import { contactDetails, contactFormFields } from "@/content/contact";
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

        <Reveal delay={0.1} className="mt-16 border-t border-primary-foreground/15 pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <span className="eyebrow text-accent">Send requirement</span>
              <h3 className="mt-3 text-3xl font-semibold text-primary-foreground lg:text-4xl">
                Request a technical quote
              </h3>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-primary-foreground/65">
                Share the grade, form, size range and application. Our team can respond with capability details and
                next steps.
              </p>
            </div>

            <form
              action={`mailto:${contactDetails.email}`}
              method="post"
              encType="text/plain"
              className="grid gap-4 sm:grid-cols-2"
            >
              <input
                name="Name"
                type="text"
                placeholder="Name"
                className="h-12 border border-primary-foreground/15 bg-primary-foreground/5 px-4 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/35 focus:border-accent"
              />
              <input
                name="Company"
                type="text"
                placeholder="Company"
                className="h-12 border border-primary-foreground/15 bg-primary-foreground/5 px-4 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/35 focus:border-accent"
              />
              <input
                name="Email"
                type="email"
                placeholder="Email"
                className="h-12 border border-primary-foreground/15 bg-primary-foreground/5 px-4 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/35 focus:border-accent"
              />
              <input
                name="Phone"
                type="tel"
                placeholder="Phone"
                className="h-12 border border-primary-foreground/15 bg-primary-foreground/5 px-4 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/35 focus:border-accent"
              />
              <textarea
                name="Requirement"
                placeholder={contactFormFields.requirementPlaceholder}
                rows={4}
                className="border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 text-sm text-primary-foreground outline-none transition-colors placeholder:text-primary-foreground/35 focus:border-accent sm:col-span-2"
              />
              <button
                type="submit"
                className="eyebrow bg-accent px-6 py-4 text-accent-foreground transition-transform duration-300 hover:translate-x-1 sm:col-span-2 sm:w-max"
              >
                Submit Requirement
              </button>
            </form>
          </div>
        </Reveal>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8">
          <motion.img
            src={logo}
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
