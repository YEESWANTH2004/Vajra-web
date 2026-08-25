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
                <div className="absolute -top-5 -left-5 h-24 w-24 border-t-4 border-l-4 border-accent" />
                <img
                  src={workers.url}
                  alt="Engineers reviewing operations on the VAJRA plant floor"
                  className="relative aspect-[4/3] w-full object-cover"
                />
                <div className="absolute -right-4 -bottom-5 h-28 w-28 border-r-4 border-b-4 border-accent" />
                <div className="absolute right-5 bottom-5 h-px w-24 bg-accent" />
                <div className="absolute right-5 bottom-5 h-24 w-px bg-accent" />
              </div>

              {!compact ? (
                <div className="mt-12 grid grid-cols-2 border-y border-primary/15 text-primary">
                  {aboutSectors.map((sector, index) => (
                    <div
                      key={sector}
                      className={[
                        "eyebrow flex min-h-24 items-center px-6 text-base tracking-normal sm:text-lg",
                        index % 2 === 0 ? "border-r border-primary/15" : "",
                        index < aboutSectors.length - 2 ? "border-b border-primary/15" : "",
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
                More About Us
              </a>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}
