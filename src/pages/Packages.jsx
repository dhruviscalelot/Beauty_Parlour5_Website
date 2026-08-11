import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { packages } from "@/lib/site-data";
import { Sparkles, Gift, Calendar, Heart } from "lucide-react";

const offers = [
  { name: "Diwali Beauty Package", off: "25% off", period: "Oct 15 – Nov 5", icon: Sparkles },
  { name: "Karwa Chauth Special", off: "20% off", period: "Oct 20 – Oct 31", icon: Heart },
  { name: "Wedding Season Bundle", off: "Save ₹8,000", period: "Nov – Feb", icon: Gift },
  { name: "Bride's Best Friend", off: "Complimentary trial", period: "Year-round", icon: Calendar },
];

export function Packages() {
  return (
    <>
      <PageHero
        eyebrow="Memberships & Offers"
        title="Beauty, ritualised."
        subtitle="Curated plans and festival bundles for guests who make Luxé part of their routine."
      />

      <section className="py-20">
        <div className="container-lux">
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`p-10 rounded-3xl border relative ${p.highlight ? "bg-cocoa text-ivory border-gold shadow-2xl" : "bg-card border-border"}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-cocoa text-[0.65rem] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
                    Best Value
                  </span>
                )}
                <div className={`eyebrow ${p.highlight ? "!text-gold-soft" : ""}`}>{p.tagline}</div>
                <div className={`mt-2 font-serif text-5xl ${p.highlight ? "text-ivory" : ""}`}>
                  {p.name}
                </div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span
                    className={`font-serif text-5xl ${p.highlight ? "text-gold-soft" : "text-rose"}`}
                  >
                    {p.price}
                  </span>
                  <span className="opacity-60 text-sm">{p.period}</span>
                </div>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className={p.highlight ? "text-gold" : "text-rose"}>◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className={`mt-10 block text-center py-3.5 rounded-full text-xs uppercase tracking-widest ${p.highlight ? "bg-gold text-cocoa" : "bg-rose text-ivory hover:opacity-90"}`}
                >
                  Choose {p.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blush/40">
        <div className="container-lux">
          <div className="text-center mb-14">
            <span className="eyebrow">Festival Offers</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">Celebrations, glowing</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {offers.map((o) => (
              <div key={o.name} className="p-7 bg-card rounded-2xl border border-border">
                <o.icon className="w-6 h-6 text-rose" />
                <h3 className="font-serif text-2xl mt-4">{o.name}</h3>
                <div className="mt-3 text-3xl font-serif text-rose">{o.off}</div>
                <div className="mt-1 text-xs text-muted-foreground">{o.period}</div>
                <Link
                  to="/book"
                  className="mt-5 inline-block text-xs uppercase tracking-widest text-rose font-medium"
                >
                  Book now →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
