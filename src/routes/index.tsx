import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { FormsMarquee } from "@/components/site/FormsMarquee";
import { About } from "@/components/site/About";
import { Principles } from "@/components/site/Principles";
import { Facilities } from "@/components/site/Facilities";
import { Process } from "@/components/site/Process";
import { Portfolio } from "@/components/site/Portfolio";
import { Testing } from "@/components/site/Testing";
import { Footer } from "@/components/site/Footer";

const title = "VAJRA Alloys — Superalloy & Special Steel Manufacturer";
const description =
  "VAJRA Alloys manufactures nickel, cobalt and iron-based superalloys, stainless and high speed steels for Aerospace, Defence, Power Generation, Oil & Gas and Railways.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <Hero />
        <FormsMarquee />
        <About />
        <Principles />
        <Facilities />
        <Process />
        <Portfolio />
        <Testing />
      </main>
      <Footer />
    </div>
  );
}
