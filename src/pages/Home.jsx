import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-salon.jpg";
import { IMG, services, stats, testimonials, packages } from "@/lib/site-data";
import {
  Sparkles,
  Award,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Gem,
  Star,
  ArrowRight,
  MessageCircle,
  Phone,
} from "lucide-react";

const why = [
  { icon: Award, title: "Certified Experts", text: "L'Oréal, Lakmé & Paris-trained stylists." },
  { icon: Gem, title: "Premium Products", text: "Only Kérastase, Olaplex, MAC & organics." },
  { icon: Sparkles, title: "Latest Techniques", text: "HD, airbrush, keratin, gold-leaf facials." },
  {
    icon: ShieldCheck,
    title: "100% Hygiene",
    text: "Sanitized tools, single-use kits, safe rooms.",
  },
  { icon: Leaf, title: "Affordable Luxury", text: "Transparent pricing with festival offers." },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    text: "Every service tailored to your beauty story.",
  },
];

export function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-center overflow-hidden pt-24">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Luxé salon interior"
            className="w-full h-full object-cover"
            width={1600}
            height={1200}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-ivory/95 via-ivory/70 to-ivory/20" />
        </div>
        <div className="container-lux grid md:grid-cols-2 gap-10 items-center py-20">
          <div className="anim-fadeup">
            <div className="gold-divider mb-6">
              <span className="eyebrow">Est. 2009 · Mumbai</span>
            </div>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.02] text-cocoa">
              Where beauty,
              <br />
              <span className="italic text-rose">wellness</span> &amp; confidence meet.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              A boutique Indian beauty parlor crafting radiant brides, glowing skin and effortless
              hair with the care and precision of a private atelier.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/book" className="btn-primary">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/services" className="btn-ghost">
                Explore Services
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 fill-gold text-gold" />
                <span className="font-medium text-cocoa">4.9</span> · 2,100+ Google reviews
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="hidden sm:block">
                Featured in <em className="font-serif not-italic text-cocoa">Vogue India</em>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-24 md:py-32">
        <div className="container-lux grid md:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <img
              src={IMG.spa}
              alt="Salon interior"
              width={800}
              height={900}
              loading="lazy"
              className="rounded-2xl w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-ivory border border-border rounded-2xl p-6 max-w-[220px] shadow-xl">
              <div className="font-serif text-4xl text-rose">15+</div>
              <div className="eyebrow mt-1">Years crafting beauty</div>
            </div>
          </div>
          <div>
            <span className="eyebrow">Our Story</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 leading-tight">
              A sanctuary for the modern Indian woman.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Founded in 2009 by master stylist Priya Malhotra, Luxé is more than a parlor — it is a
              home for the ritual of self-care. We blend celebrated Indian beauty traditions with
              world-class techniques from Paris, Seoul and New York.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Every service, from a threading appointment to a full bridal package, is delivered
              with unhurried attention, transparent pricing and premium products you can trust.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-rose font-medium border-b border-rose pb-1"
            >
              More about Luxé <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-blush/40">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Featured Services</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Signature rituals, thoughtfully crafted
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.slice(0, 6).map((s) => (
              <div key={s.slug} className="card-lux group">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.name}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start gap-3">
                    <h3 className="font-serif text-2xl leading-tight">{s.name}</h3>
                    <span className="text-rose font-medium whitespace-nowrap">{s.price}</span>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {s.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <Link
                      to="/services"
                      className="text-xs uppercase tracking-widest text-cocoa/70 hover:text-rose"
                    >
                      Learn more
                    </Link>
                    <Link
                      to="/book"
                      className="text-xs uppercase tracking-widest text-rose font-medium"
                    >
                      Book →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link to="/services" className="btn-ghost">
              View all services
            </Link>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow">Why Choose Luxé</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">The luxury is in every detail</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {why.map((w) => (
              <div
                key={w.title}
                className="p-8 rounded-2xl border border-border bg-card hover:border-gold transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-blush grid place-items-center text-rose mb-5">
                  <w.icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-2xl">{w.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-24 bg-cocoa text-ivory">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow !text-gold-soft">Beauty Memberships</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3 text-ivory">
              Care that keeps you glowing
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {packages.map((p) => (
              <div
                key={p.name}
                className={`p-8 rounded-2xl border relative ${p.highlight ? "bg-ivory text-cocoa border-gold shadow-2xl scale-[1.02]" : "border-ivory/15"}`}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-cocoa text-[0.65rem] uppercase tracking-widest px-3 py-1 rounded-full font-medium">
                    Most Popular
                  </span>
                )}
                <div className="eyebrow">{p.tagline}</div>
                <div className="mt-2 font-serif text-4xl">{p.name}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-serif text-5xl">{p.price}</span>
                  <span className="opacity-60 text-sm">{p.period}</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-gold">◆</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/packages"
                  className={`mt-8 block text-center py-3 rounded-full text-xs uppercase tracking-widest ${p.highlight ? "bg-rose text-ivory" : "border border-ivory/40 hover:bg-ivory hover:text-cocoa transition-colors"}`}
                >
                  View details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 border-y border-border">
        <div className="container-lux grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-5xl md:text-6xl text-rose">{s.value}</div>
              <div className="eyebrow mt-2">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 md:py-32">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Kind Words</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Loved by 7,000+ women across Mumbai
            </h2>
            <div className="mt-6 inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 fill-gold text-gold" />
              <span className="font-medium">4.9</span> on Google ·{" "}
              <span className="text-muted-foreground">2,148 reviews</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.name} className="p-8 rounded-2xl bg-blush/40 border border-border">
                <div className="flex text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold" />
                  ))}
                </div>
                <p className="font-serif text-xl italic leading-relaxed text-cocoa">"{t.text}"</p>
                <div className="mt-6 text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-muted-foreground text-xs">{t.service}</div>
                </div>
              </blockquote>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/testimonials" className="btn-ghost">
              Read all reviews
            </Link>
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 bg-blush/30">
        <div className="container-lux">
          <div className="text-center mb-14">
            <span className="eyebrow">@luxesalon.mumbai</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">On the gram</h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-3">
            {[IMG.bridal, IMG.hair, IMG.skin, IMG.makeup, IMG.nails, IMG.mehendi].map((img, i) => (
              <a
                key={i}
                href="#"
                className="block aspect-square overflow-hidden rounded-lg group relative"
              >
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-rose/0 group-hover:bg-rose/40 transition-colors" />
              </a>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#" className="btn-ghost">
              Follow @luxesalon.mumbai
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-28 ornament-bg">
        <div className="container-lux text-center max-w-3xl mx-auto">
          <span className="eyebrow">Your Beauty Journey</span>
          <h2 className="font-serif text-5xl md:text-6xl mt-3 leading-tight">
            Your beauty journey <em className="text-rose">starts here.</em>
          </h2>
          <p className="mt-6 text-muted-foreground">
            Reserve a private consultation and discover what personalized luxury feels like.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link to="/book" className="btn-primary">
              Book Appointment
            </Link>
            <a href="https://wa.me/919876543210" className="btn-ghost">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="tel:+919876543210" className="btn-ghost">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
