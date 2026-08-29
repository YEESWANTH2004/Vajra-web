import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { FacilitiesDetail } from "@/components/site/FacilitiesDetail";
import { Footer } from "@/components/site/Footer";

const title = "Facilities | VAJRA Alloys";
const description =
  "Explore VAJRA Alloys' ESR furnace, coil slitter, 6Hi rolling mill, wire drawing and heat treatment facilities.";

export const Route = createFileRoute("/facilities")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: FacilitiesPage,
});

function FacilitiesPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Facilities"
          title="Manufacturing"
          highlight="Infrastructure"
          description="Integrated production facilities for remelting, rolling, slitting, wire drawing and heat treatment of superalloys and special steels."
        />
        <FacilitiesDetail />
      </main>
      <Footer />
    </div>
  );
}
