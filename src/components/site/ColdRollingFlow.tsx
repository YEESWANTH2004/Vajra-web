import { motion } from "framer-motion";
import annealingLine from "@/assets/coldrolling-crops/annealing-line.png";
import coiler from "@/assets/coldrolling-crops/coiler.png";
import coldRolledSlitter from "@/assets/coldrolling-crops/cold-rolled-slitter.png";
import hrCoil from "@/assets/coldrolling-crops/hr-coil.png";
import leveller from "@/assets/coldrolling-crops/leveller.png";
import looper from "@/assets/coldrolling-crops/looper.png";
import rollingMill from "@/assets/coldrolling-crops/rolling-mill.png";
import slitting from "@/assets/coldrolling-crops/slitting.png";
import uncoiler from "@/assets/coldrolling-crops/uncoiler.png";
import width1250 from "@/assets/coldrolling-crops/width-1250.png";
import width600 from "@/assets/coldrolling-crops/width-600.png";
import coldRollingProcess from "@/assets/coldrolling-process.png";
import { finishes } from "@/data/vajra";
import { SectionHeading } from "./Reveal";

const processCards = [
  { no: "01", title: "HR COIL", body: "Hot Rolled Coil", image: hrCoil },
  { no: "02", title: "WIDTH 1250MM", body: "Coil width 1250mm", image: width1250, accent: true },
  { no: "03", title: "UNCOILER", body: "Unwinds the coil", image: uncoiler, imageOffset: "translate-x-5" },
  { no: "04", title: "LEVELLER", body: "Levels the strip", image: leveller, imageOffset: "-translate-y-3" },
  { no: "05", title: "SLITTING", body: "Slits to required width", image: slitting, imageOffset: "-translate-y-2" },
  {
    no: "06",
    title: "WIDTH 600MM X 2NOS",
    body: "Width 600mm x 2Nos",
    image: width600,
    accent: true,
    imageOffset: "-translate-y-2",
  },
  { no: "07", title: "LOOPER", body: "Maintains strip tension", image: looper, imageOffset: "-translate-y-2" },
  {
    no: "08",
    title: "6HI ROLLING MILL",
    body: "Reduces thickness in passes",
    image: rollingMill,
    imageOffset: "-translate-y-2",
  },
  {
    no: "09",
    title: "CONTINUOUS BRIGHT ANNEALING LINE",
    body: "Heat treatment for softness & brightness",
    image: annealingLine,
    wide: true,
  },
  { no: "10", title: "COLD ROLLED SLITTER", body: "Slits to final coil widths", image: coldRolledSlitter },
  { no: "11", title: "COILER", body: "Final coiled products", image: coiler },
];

export function ColdRollingFlow() {
  return (
    <section className="bg-surface py-24 lg:py-32">
      <div className="mx-auto max-w-[88rem] px-5 lg:px-10">
        <SectionHeading title="COLD ROLLING MILL PROCESS FLOW" />

        <div className="mt-10 lg:hidden">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative space-y-5"
          >
            <span className="absolute top-8 bottom-8 left-5 w-0.5 bg-accent/80" />
            {processCards.map((card, index) => (
              <MobileFlowCard key={card.no} card={card} index={index} />
            ))}
          </motion.div>
        </div>

        <div className="mt-12 hidden overflow-x-auto table-scroll-blue pb-4 lg:block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="relative min-w-[78rem] overflow-hidden rounded-[8px] border border-border bg-white px-7 py-9 shadow-[0_28px_80px_-56px_rgba(31,42,90,0.45)]"
          >
            <div className="absolute top-8 right-8 grid grid-cols-5 gap-2 opacity-30">
              {Array.from({ length: 25 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-primary/20" />
              ))}
            </div>
            <div className="absolute bottom-8 left-8 grid grid-cols-5 gap-2 opacity-30">
              {Array.from({ length: 25 }).map((_, index) => (
                <span key={index} className="h-1 w-1 rounded-full bg-primary/20" />
              ))}
            </div>

            <div className="relative">
              <span className="absolute top-[7.9rem] right-0 z-0 h-[10.45rem] w-0.5 bg-accent" />
              <span className="absolute top-[18.35rem] right-0 left-0 z-0 h-0.5 bg-accent" />
              <span className="absolute top-[18.35rem] left-0 z-0 h-[10.05rem] w-0.5 bg-accent" />

              <div className="grid grid-cols-6 gap-6">
                {processCards.slice(0, 6).map((card, index) => (
                  <PremiumFlowCard key={card.no} card={card} index={index} />
                ))}
              </div>

              <div className="relative h-14">
              </div>

              <div className="grid grid-cols-5 gap-6 px-0">
                {processCards.slice(6).map((card, index) => (
                  <PremiumFlowCard key={card.no} card={card} index={index + 6} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid gap-6 lg:mt-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center lg:gap-8"
        >
          <div>
            <span className="eyebrow text-accent-foreground/60">Reference Diagram</span>
            <h3 className="mt-3 text-2xl font-semibold text-primary sm:text-3xl">Complete line overview</h3>
            <span className="mt-4 block h-1 w-12 bg-accent" />
          </div>

          <div className="overflow-hidden border border-border bg-white p-3 shadow-[0_28px_70px_-48px_rgba(31,42,90,0.45)] sm:p-5">
            <div className="overflow-x-auto table-scroll-blue">
              <img
                src={coldRollingProcess}
                alt="Cold rolling process flow showing coil preparation, rolling mill, annealing line and cold rolled slitter stages"
                className="min-w-[34rem] w-full max-w-none object-contain sm:min-w-[42rem] lg:min-w-0"
              />
            </div>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div>
            <span className="eyebrow text-accent-foreground/60">Finish Description</span>
            <h3 className="mt-3 text-3xl font-semibold text-primary">Surface finishes</h3>
            <span className="mt-4 block h-1 w-12 bg-accent" />
          </div>
          <div className="overflow-hidden border border-border bg-background">
            <table className="w-full border-collapse text-left text-sm">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="eyebrow w-48 px-5 py-4 text-primary-foreground/80">Finish</th>
                  <th className="eyebrow px-5 py-4 text-primary-foreground/80">Description</th>
                </tr>
              </thead>
              <tbody>
                {finishes.map(([finish, description], index) => (
                  <motion.tr
                    key={finish}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="border-b border-border last:border-b-0"
                  >
                    <td className="text-display px-5 py-4 text-lg font-semibold text-primary">{finish}</td>
                    <td className="px-5 py-4 leading-relaxed text-muted-foreground">{description}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

function MobileFlowCard({
  card,
  index,
}: {
  card: (typeof processCards)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.42, delay: index * 0.035, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-12"
    >
      <span
        className={`absolute top-6 left-0 z-10 grid h-10 w-10 place-items-center rounded-full text-display text-xl font-semibold text-white shadow-[0_14px_30px_-18px_rgba(31,42,90,0.8)] ${
          card.accent ? "bg-accent" : "bg-primary"
        }`}
      >
        {card.no}
      </span>
      <div
        className={`grid grid-cols-[5.75rem_1fr] items-center gap-3 rounded-[8px] border bg-white p-3 shadow-[0_18px_44px_-38px_rgba(31,42,90,0.55)] sm:grid-cols-[6.5rem_1fr] sm:gap-4 sm:p-4 ${
          card.accent ? "border-accent bg-accent/5" : "border-primary/15"
        }`}
      >
        <div className="grid h-24 place-items-center overflow-hidden bg-white">
          <img
            src={card.image}
            alt=""
            className="max-h-[74%] max-w-[86%] object-contain sm:max-h-[78%] sm:max-w-[88%]"
          />
        </div>
        <div>
          <h4
            className={`text-display text-lg leading-[1.05] font-semibold sm:text-xl ${
              card.accent ? "text-accent" : "text-primary"
            }`}
          >
            {card.title}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-primary/70">{card.body}</p>
        </div>
      </div>
    </motion.div>
  );
}

function PremiumFlowCard({
  card,
  index,
}: {
  card: (typeof processCards)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.48, delay: index * 0.045, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className={`group relative flex h-[16.75rem] flex-col items-center rounded-[8px] border bg-white px-4 pt-8 pb-5 text-center shadow-[0_18px_44px_-34px_rgba(31,42,90,0.55)] transition duration-300 hover:-translate-y-1 ${
          card.accent ? "border-accent bg-accent/5" : "border-primary/15"
        }`}
      >
        <span
          className={`absolute -top-4 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full text-display text-xl font-semibold text-white shadow-[0_12px_28px_-16px_rgba(31,42,90,0.7)] ${
            card.accent ? "bg-accent" : "bg-primary"
          }`}
        >
          {card.no}
        </span>

        <div className={`${card.wide ? "h-24 w-48" : "h-24 w-40"} mt-3 grid place-items-center overflow-hidden`}>
          <img
            src={card.image}
            alt=""
            className={`max-h-[82%] max-w-[82%] object-contain ${card.imageOffset ?? ""}`}
          />
        </div>

        <h4
          className={`mt-5 flex min-h-11 items-center justify-center text-display text-lg leading-[1.05] font-semibold ${
            card.accent ? "text-accent" : "text-primary"
          }`}
        >
          {card.title}
        </h4>
        <p className="mt-2 max-w-[10rem] text-sm leading-snug text-primary/70">{card.body}</p>
      </div>

      {index !== 5 && index !== 10 ? (
        <span className="absolute top-[7.9rem] -right-[1.9rem] z-20 hidden h-8 w-8 rounded-full border-2 border-accent bg-white lg:block">
          <span className="absolute top-1/2 left-1/2 h-3 w-3 -translate-x-[60%] -translate-y-1/2 rotate-45 border-t-2 border-r-2 border-accent" />
        </span>
      ) : null}
    </motion.div>
  );
}
