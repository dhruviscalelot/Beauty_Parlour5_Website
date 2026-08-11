import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { IMG } from "@/lib/site-data";
import bridalImg from "@/assets/bridal.jpg";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    name: "Engagement Glow",
    price: "₹18,000",
    items: ["HD makeup", "Hair styling", "Draping", "Trial session"],
  },
  {
    name: "Signature Bride",
    price: "₹45,000",
    items: [
      "Airbrush bridal makeup",
      "Bridal hair",
      "Mehendi coordination",
      "Two trials",
      "On-site service",
    ],
    featured: true,
  },
  {
    name: "Reception Radiance",
    price: "₹22,000",
    items: ["HD makeup", "Second-look styling", "Hair styling", "Draping"],
  },
];

export function Bridal() {
  return (
    <>
      <PageHero
        eyebrow="Bridal Studio"
        title="For the most photographed day of your life."
        subtitle="A private bridal wing dedicated to your look — from mehendi to reception, styled to feel unmistakably you."
      >
        <Link to="/book" className="btn-primary">
          Book Bridal Consultation
        </Link>
      </PageHero>

      <section className="py-24">
        <div className="container-lux grid md:grid-cols-2 gap-12 items-center">
          <img
            src={bridalImg}
            alt="Bridal makeup"
            loading="lazy"
            className="rounded-2xl w-full aspect-[4/5] object-cover"
          />
          <div>
            <span className="eyebrow">The Bridal Journey</span>
            <h2 className="font-serif text-4xl mt-3">Your day, choreographed to perfection.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Every Luxé bride begins with a 90-minute private consultation where we build a bespoke
              plan — skin prep months in advance, mehendi and sangeet looks, and a signature bridal
              aesthetic tailored to your outfit, jewelry and personal style.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Personal consultation & skin plan",
                "Two complimentary trial sittings",
                "On-location bridal service",
                "Draping & jewelry styling",
                "Complimentary reception touch-up",
              ].map((f) => (
                <li key={f} className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-rose shrink-0 mt-0.5" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blush/40">
        <div className="container-lux">
          <div className="text-center mb-14">
            <span className="eyebrow">Bridal Packages</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Three ways to be radiant</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-2xl border ${p.featured ? "bg-cocoa text-ivory border-gold" : "bg-card border-border"}`}
              >
                <h3 className={`font-serif text-3xl ${p.featured ? "text-ivory" : ""}`}>
                  {p.name}
                </h3>
                <div
                  className={`mt-4 font-serif text-4xl ${p.featured ? "text-gold-soft" : "text-rose"}`}
                >
                  {p.price}
                </div>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.items.map((i) => (
                    <li key={i} className="flex gap-2">
                      <span className={p.featured ? "text-gold" : "text-rose"}>◆</span>
                      {i}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`mt-8 block text-center py-3 rounded-full text-xs uppercase tracking-widest ${p.featured ? "bg-gold text-cocoa" : "border border-rose text-rose hover:bg-rose hover:text-ivory transition-colors"}`}
                >
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-lux">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl">Bridal gallery</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              IMG.bridal,
              IMG.makeup,
              IMG.mehendi,
              IMG.hair,
              IMG.bridal,
              IMG.mehendi,
              IMG.makeup,
              IMG.skin,
            ].map((img, i) => (
              <img
                key={i}
                src={img}
                alt="Bridal work"
                loading="lazy"
                className="aspect-[3/4] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Bridal;
