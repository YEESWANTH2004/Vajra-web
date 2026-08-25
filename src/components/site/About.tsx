import { motion } from "framer-motion";
import workers from "@/assets/workers.jpg.asset.json";
import { aboutParagraphs, aboutPreview, aboutSectors, aboutStandards, aboutTitle } from "@/content/about";
import { Reveal, SectionHeading } from "./Reveal";

export function About({ compact = true }: { compact?: boolean }) {
  const paragraphs = compact ? aboutPreview : aboutParagraphs;

  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10">
        <div className="relative">
          <Reveal>
            <>
              <div className="relative">
                <div className="absolute -top-3 -left-3 h-14 w-14 border-t-3 border-l-3 border-accent sm:-top-5 sm:-left-5 sm:h-24 sm:w-24 sm:border-t-4 sm:border-l-4" />
                <img
                  src={workers.url}
                  alt="Engineers reviewing operations on the VAJRA plant floor"
                  className="relative aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -right-3 -bottom-3 h-16 w-16 border-r-3 border-b-3 border-accent sm:-right-4 sm:-bottom-5 sm:h-28 sm:w-28 sm:border-r-4 sm:border-b-4" />
                <div className="absolute right-3 bottom-3 h-px w-14 bg-accent sm:right-5 sm:bottom-5 sm:w-24" />
                <div className="absolute right-3 bottom-3 h-14 w-px bg-accent sm:right-5 sm:bottom-5 sm:h-24" />
              </div>

              {!compact ? (
                <div className="mt-8 grid grid-cols-1 border-y border-primary/15 text-primary sm:mt-12 sm:grid-cols-2">
                  {aboutSectors.map((sector, index) => (
                    <div
                      key={sector}
                      className={[
                        "eyebrow flex min-h-16 items-center px-4 text-sm tracking-normal sm:min-h-24 sm:px-6 sm:text-lg",
                        index % 2 === 0 ? "sm:border-r sm:border-primary/15" : "",
                        index < aboutSectors.length - 1 ? "border-b border-primary/15" : "",
                        index === aboutSectors.length - 2 ? "sm:border-b-0" : "",
                      ].join(" ")}
                    >
                      {sector}
                    </div>
                  ))}
                </div>
              ) : null}
            </>
          </Reveal>
        </div>

        <div>
          <SectionHeading title={aboutTitle} />
          <div className="mt-8 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={paragraph}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                className="text-[0.98rem] leading-relaxed text-muted-foreground"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <div className="flex flex-wrap gap-3">
              {aboutStandards.map((standard) => (
                <span key={standard} className="eyebrow border border-primary/20 px-4 py-2 text-primary">
                  {standard}
                </span>
              ))}
            </div>
          </Reveal>

          {compact ? (
            <Reveal delay={0.28} className="mt-10">
              <a
                href="/about"
                className="eyebrow clip-chevron inline-flex bg-primary px-7 py-4 text-primary-foreground transition-transform duration-300 hover:translate-x-1"
              >
                Know More
              </a>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
