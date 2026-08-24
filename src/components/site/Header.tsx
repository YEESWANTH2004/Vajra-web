import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo/vajra-logo.webp";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid || open ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-5 lg:px-10">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Vajra Alloys" className="h-10 w-auto lg:h-12" />
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
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="eyebrow clip-chevron hidden bg-primary px-5 py-3 text-primary-foreground transition-colors hover:bg-navy-deep sm:inline-flex"
          >
            Enquire
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden ${
              solid || open
                ? "border-primary/15 text-primary hover:border-primary/35"
                : "border-primary-foreground/30 text-primary-foreground hover:border-accent hover:text-accent"
            }`}
          >
            {open ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-border bg-background px-5 py-5 shadow-[0_18px_50px_rgba(31,42,90,0.16)] lg:hidden"
          >
            <div className="mx-auto flex max-w-[88rem] flex-col">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="eyebrow border-b border-border py-4 text-primary/75 transition-colors last:border-b-0 hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="eyebrow mt-4 bg-primary px-5 py-4 text-center text-primary-foreground transition-colors hover:bg-navy-deep sm:hidden"
              >
                Enquire
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div style={{ width }} className="h-0.5 origin-left bg-accent" />
    </header>
  );
}
