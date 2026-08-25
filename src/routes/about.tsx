import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { Principles } from "@/components/site/Principles";
import { Footer } from "@/components/site/Footer";
import { aboutParagraphs, aboutTitle } from "@/content/about";

const title = aboutTitle;
const description = aboutParagraphs[0];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="About Us"
          title="About"
          highlight="Vajra"
          description={aboutParagraphs[0]}
        />
        <About compact={false} />
        <Principles />
      </main>
      <Footer />
    </div>
  );
}
