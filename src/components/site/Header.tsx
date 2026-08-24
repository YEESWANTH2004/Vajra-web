import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png.asset.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#principles", label: "Mission" },
  { href: "#facilities", label: "Facilities" },
  { href: "#process", label: "Process" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#testing", label: "Testing" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-5 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src={logo.url} alt="Vajra Alloys" className="h-9 w-auto lg:h-11" />
        </a>
        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow relative transition-colors ${
                solid
                  ? "text-primary/70 hover:text-primary"
                  : "text-primary-foreground/75 hover:text-accent"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-accent transition-all duration-300 hover:w-full" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="eyebrow clip-chevron bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-navy-deep"
        >
          Enquire
        </a>
      </div>
      <motion.div style={{ width }} className="h-0.5 origin-left bg-accent" />
    </header>
  );
}
