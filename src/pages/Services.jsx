import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { services } from "@/lib/site-data";

const categories = ["All", "Bridal", "Hair", "Skin", "Makeup", "Spa", "Nails", "Mehendi"];

export function Services() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="A studio of specialists, one destination."
        subtitle="From daily grooming to once-in-a-lifetime bridal artistry — every service delivered with unhurried precision."
      />

      <section className="py-16">
        <div className="container-lux">
          <div className="flex flex-wrap justify-center gap-2 mb-14">
            {categories.map((c) => (
              <span
                key={c}
                className="px-5 py-2 rounded-full border border-border text-sm text-muted-foreground hover:border-gold hover:text-rose cursor-pointer transition-colors"
              >
                {c}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.slug} className="card-lux flex flex-col sm:flex-row">
                <img
                  src={s.image}
                  alt={s.name}
                  loading="lazy"
                  className="sm:w-56 aspect-[4/3] sm:aspect-auto object-cover"
                />
                <div className="p-6 flex-1">
                  <div className="eyebrow">{s.category}</div>
                  <h3 className="font-serif text-2xl mt-1">{s.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="text-rose font-medium">{s.price}</div>
                      <div className="text-xs text-muted-foreground">{s.duration}</div>
                    </div>
                    <Link to="/book" className="btn-primary !py-2 !px-5 text-[0.7rem]">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-blush/40">
        <div className="container-lux">
          <div className="text-center mb-12">
            <span className="eyebrow">Popular Add-ons</span>
            <h2 className="font-serif text-4xl mt-3">Quick treatments</h2>
          </div>
          <div className="bg-card rounded-2xl border border-border overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-blush/60 text-cocoa">
                <tr>
                  <th className="text-left p-4 font-medium">Service</th>
                  <th className="text-left p-4 font-medium hidden sm:table-cell">Duration</th>
                  <th className="text-left p-4 font-medium">Price</th>
                  <th className="p-4"></th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Threading (full face)", "20 min", "₹350"],
                  ["Classic Pedicure", "45 min", "₹1,200"],
                  ["Hair Cut & Styling", "45 min", "₹1,800"],
                  ["Global Hair Colour", "2 hrs", "₹4,500"],
                  ["Eyelash Extensions", "90 min", "₹3,999"],
                  ["Waxing (full body)", "75 min", "₹2,800"],
                ].map(([name, dur, price]) => (
                  <tr key={name} className="border-t border-border">
                    <td className="p-4 font-medium">{name}</td>
                    <td className="p-4 hidden sm:table-cell text-muted-foreground">{dur}</td>
                    <td className="p-4 text-rose font-medium">{price}</td>
                    <td className="p-4 text-right">
                      <Link to="/book" className="text-xs uppercase tracking-widest text-rose">
                        Book →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
