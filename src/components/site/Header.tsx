import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Globe, Mail, MapPin, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "@/assets/logo/vajra-logo.webp";
import { contactDetails } from "@/content/contact";
import { navigationLinks } from "@/content/navigation";

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
        solid || open
          ? "bg-background/95 shadow-[0_1px_0_0_var(--border)] backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="hidden border-b border-primary-foreground/15 bg-navy-deep text-xs text-primary-foreground/80 lg:block">
        <div className="mx-auto flex h-9 max-w-[88rem] items-center justify-between gap-6 px-5 lg:px-10">
          <div className="flex min-w-0 items-center gap-2">
            <MapPin size={14} strokeWidth={1.8} className="shrink-0 text-accent" />
            <span className="truncate">
              {contactDetails.plant[0]} {contactDetails.plant[1]}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-6">
            <a
              href={`mailto:${contactDetails.email}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Mail size={14} strokeWidth={1.8} />
              <span>{contactDetails.email}</span>
            </a>
            <a
              href={`https://${contactDetails.website}`}
              className="flex items-center gap-2 transition-colors hover:text-accent"
            >
              <Globe size={14} strokeWidth={1.8} />
              <span>{contactDetails.website}</span>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-20 max-w-[88rem] items-center justify-between px-5 lg:px-10">
        <a href="/" className="flex items-center">
          <img
            src={logo}
            alt="Vajra Alloys"
            className={`h-10 w-auto transition duration-300 lg:h-12 ${
              solid || open ? "" : "brightness-0 invert"
            }`}
          />
        </a>
        <nav className="hidden items-center gap-6 xl:flex 2xl:gap-8">
          {navigationLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`eyebrow group relative pb-2 text-[0.95rem] font-extrabold tracking-[0.12em] transition-colors ${
                solid
                  ? "text-primary/90 hover:text-primary"
                  : "text-primary-foreground/95 hover:text-accent"
              }`}
            >
              {l.label}
              <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/contact"
            className="eyebrow clip-chevron hidden min-w-44 justify-center bg-primary px-8 py-3.5 text-primary-foreground transition-colors hover:bg-navy-deep xl:inline-flex"
          >
            Enquire
          </a>
          <button
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
            className={`inline-flex h-11 w-11 items-center justify-center border transition-colors xl:hidden ${
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
            className="border-t border-border bg-background px-5 py-5 shadow-[0_18px_50px_rgba(31,42,90,0.16)] xl:hidden"
          >
            <div className="mx-auto flex max-w-[88rem] flex-col">
              {navigationLinks.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.22, delay: navigationLinks.indexOf(l) * 0.035 }}
                  className="eyebrow border-b border-border py-4 text-base font-extrabold tracking-[0.14em] text-primary/90 transition-colors last:border-b-0 hover:text-primary"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.a
                href="/contact"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.22, delay: 0.24 }}
                className="eyebrow mt-4 bg-primary px-5 py-4 text-center text-primary-foreground transition-colors hover:bg-navy-deep"
              >
                Enquire
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
      <motion.div style={{ width }} className="h-0.5 origin-left bg-accent" />
    </header>
  );
}
