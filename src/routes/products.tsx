import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Portfolio } from "@/components/site/Portfolio";
import { Footer } from "@/components/site/Footer";

const title = "Products | VAJRA Alloys";
const description =
  "Explore VAJRA Alloys' superalloy, stainless steel and high speed steel product portfolio.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Products"
          title="Materials"
          highlight="Portfolio"
          description="A focused product range covering nickel, cobalt and iron-based superalloys, stainless steels and high speed steels."
        />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}
