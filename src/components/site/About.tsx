import { motion } from "framer-motion";
import workers from "@/assets/workers.jpg.asset.json";
import { Reveal, SectionHeading } from "./Reveal";

const paragraphs = [
  "VAJRA Alloys Private Limited is a manufacturer of high-performance superalloys and special steels for critical applications across Aerospace, Defence, Power Generation, Oil & Gas, Railways and advanced engineering industries.",
  "VAJRA is a subsidiary of Krishca Strapping Solutions Limited (KSSL), a publicly listed company on NSE Emerge and an established manufacturer of high-tensile steel strapping, industrial packaging products and integrated packaging solutions. Krishca brings strong manufacturing capabilities, quality systems, customer relationships and execution expertise to VAJRA.",
  "Our product portfolio includes nickel-based, cobalt-based and iron-based superalloys, along with specialty steels engineered for applications requiring high strength, heat resistance, corrosion resistance and long-term reliability.",
  "Supported by state-of-the-art manufacturing facilities and an experienced technical team, VAJRA is committed to precision, metallurgical consistency and dependable delivery.",
  "Our products are manufactured and tested in line with applicable ASTM, ASME, DIN and other international standards.",
  "With a focus on quality, innovation and customised solutions, VAJRA aims to build a globally competitive advanced-materials platform from India for demanding strategic and industrial applications.",
];

const sectors = ["Aerospace", "Defence", "Power Generation", "Oil & Gas", "Railways", "Advanced Engineering"];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="mx-auto grid max-w-[88rem] gap-14 px-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-10">
        <div className="relative">
          <Reveal>
            <div className="relative">
              <div className="absolute -top-5 -left-5 h-24 w-24 border-t-4 border-l-4 border-accent" />
              <img
                src={workers.url}
                alt="Engineers reviewing operations on the VAJRA plant floor"
                className="relative aspect-[4/3] w-full object-cover"
              />
              <div className="absolute -right-4 -bottom-6 bg-primary px-7 py-6 text-primary-foreground">
                <span className="text-display block text-4xl leading-none font-bold text-accent">01</span>
                <span className="eyebrow mt-2 block text-primary-foreground/70">About Vajra</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <div className="grid grid-cols-2 gap-px bg-border">
              {sectors.map((s) => (
                <div key={s} className="bg-background px-5 py-6">
                  <span className="text-display text-lg font-semibold text-primary">{s}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <div>
          <SectionHeading eyebrow="Who we are" title="About Vajra Alloys" />
          <div className="mt-8 space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="text-[0.98rem] leading-relaxed text-muted-foreground"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10">
            <div className="flex flex-wrap gap-3">
              {["ASTM", "ASME", "DIN", "International Standards"].map((s) => (
                <span key={s} className="eyebrow border border-primary/20 px-4 py-2 text-primary">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
