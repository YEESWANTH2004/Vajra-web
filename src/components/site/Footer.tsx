import logo from "@/assets/logo/vajra-logo.webp";
import { motion } from "framer-motion";
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
              VAJRA Alloys Private Limited
              <br />
              No. 4, Sathyadev Avenue, MRC Nagar,
              <br />
              Raja Annamalai Puram, Chennai – 600 028,
              <br />
              Tamil Nadu, India
            </address>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow text-primary-foreground/50">Plant</span>
            <address className="mt-4 text-sm leading-relaxed text-primary-foreground/80 not-italic">
              Plot No. C-15 &amp; C-16, SIPCOT Industrial Park,
              <br />
              Gangaikondan, Tirunelveli – 627 352,
              <br />
              Tamil Nadu, India
            </address>
          </Reveal>

          <Reveal delay={0.2}>
            <span className="eyebrow text-primary-foreground/50">Contact</span>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li>
                <a href="mailto:info@vajraalloys.com" className="transition-colors hover:text-accent">
                  info@vajraalloys.com
                </a>
              </li>
              <li>
                <a href="https://www.vajraalloys.com" className="transition-colors hover:text-accent">
                  www.vajraalloys.com
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-primary-foreground/15 pt-8">
          <motion.img
            src={logo}
            alt="Vajra Alloys"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-12 w-auto"
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
