import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { PageHero } from "@/components/site/PageHero";
import { Footer } from "@/components/site/Footer";
import { contactDetails, contactFormFields } from "@/content/contact";
import { Reveal, SectionHeading } from "@/components/site/Reveal";

const title = "Contact Us | VAJRA Alloys";
const description =
  "Contact VAJRA Alloys for superalloy and special steel requirements, plant details and technical enquiries.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="bg-background">
      <Header />
      <main>
        <PageHero
          eyebrow="Contact Us"
          title="Discuss Your"
          highlight="Requirement"
          description="Share your grade, form, size range and application details so our team can guide the next step."
        />

        <section className="py-24 lg:py-32">
          <div className="mx-auto grid max-w-[88rem] gap-12 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-10">
            <div>
              <SectionHeading eyebrow="Reach us" title="Contact Vajra" />
              <div className="mt-10 grid gap-6">
                <Reveal>
                  <div className="border border-border bg-surface p-6">
                    <span className="eyebrow text-accent-foreground/60">Corporate Office</span>
                    <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
                      {contactDetails.corporateOffice.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </Reveal>

                <Reveal delay={0.1}>
                  <div className="border border-border bg-surface p-6">
                    <span className="eyebrow text-accent-foreground/60">Plant</span>
                    <address className="mt-4 text-sm leading-relaxed text-muted-foreground not-italic">
                      {contactDetails.plant.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </address>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="border border-border bg-primary p-6 text-primary-foreground">
                    <span className="eyebrow text-primary-foreground/50">Direct</span>
                    <div className="mt-4 space-y-2 text-sm">
                      <a href={`mailto:${contactDetails.email}`} className="block transition-colors hover:text-accent">
                        {contactDetails.email}
                      </a>
                      <a href={`https://${contactDetails.website}`} className="block transition-colors hover:text-accent">
                        {contactDetails.website}
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <Reveal delay={0.1}>
              <form
                action={`mailto:${contactDetails.email}`}
                method="post"
                encType="text/plain"
                className="grid gap-4 border border-border bg-background p-6 shadow-[0_28px_70px_-46px_rgba(31,42,90,0.45)] sm:grid-cols-2 lg:p-8"
              >
                <input
                  name="Name"
                  type="text"
                  placeholder="Name"
                  className="h-12 border border-border bg-surface px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
                <input
                  name="Company"
                  type="text"
                  placeholder="Company"
                  className="h-12 border border-border bg-surface px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
                <input
                  name="Email"
                  type="email"
                  placeholder="Email"
                  className="h-12 border border-border bg-surface px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
                <input
                  name="Phone"
                  type="tel"
                  placeholder="Phone"
                  className="h-12 border border-border bg-surface px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent"
                />
                <textarea
                  name="Requirement"
                  placeholder={contactFormFields.requirementPlaceholder}
                  rows={7}
                  className="border border-border bg-surface px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-accent sm:col-span-2"
                />
                <button
                  type="submit"
                  className="eyebrow bg-primary px-6 py-4 text-primary-foreground transition-transform duration-300 hover:translate-x-1 sm:col-span-2 sm:w-max"
                >
                  Submit Requirement
                </button>
              </form>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
