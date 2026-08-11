import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { IMG, team, stats } from "@/lib/site-data";
import founderImg from "@/assets/founder.jpg";
import { Sparkles, Heart, ShieldCheck, Award, Leaf, Users } from "lucide-react";

const values = [
  { icon: Sparkles, title: "Luxury", text: "Refined ambience and premium products." },
  { icon: ShieldCheck, title: "Trust", text: "Transparent pricing and safe practices." },
  { icon: Award, title: "Quality", text: "Certified experts, world-class techniques." },
  { icon: Heart, title: "Safety", text: "Strict hygiene, sanitized single-use tools." },
  { icon: Leaf, title: "Innovation", text: "Latest global beauty methods." },
  { icon: Users, title: "Happiness", text: "Every guest leaves feeling their best." },
];

export function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A house built on care, craft & confidence."
        subtitle="Since 2009, Luxé has quietly redefined what a modern Indian beauty parlor can be — a place of ritual, expertise and genuine warmth."
      />

      {/* STORY */}
      <section className="py-24">
        <div className="container-lux grid md:grid-cols-2 gap-14 items-center">
          <img
            src={IMG.salon}
            alt="Luxé salon"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl aspect-[4/3] object-cover w-full"
          />
          <div>
            <span className="eyebrow">The Beginning</span>
            <h2 className="font-serif text-4xl mt-3 leading-tight">
              From a home studio to Mumbai's most-loved salon.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              What began as Priya Malhotra's tiny studio in Bandra has grown into a 3-floor boutique
              salon serving over 7,000 clients. Our philosophy has never changed — treat every guest
              like family, and every service like art.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-4xl text-rose">{s.value}</div>
                  <div className="eyebrow mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="py-24 bg-blush/40">
        <div className="container-lux grid md:grid-cols-2 gap-14 items-center">
          <div className="order-2 md:order-1">
            <span className="eyebrow">Meet the Founder</span>
            <h2 className="font-serif text-4xl mt-3">Priya Malhotra</h2>
            <p className="italic text-muted-foreground mt-2">
              Master Stylist &amp; Creative Director
            </p>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              "I opened Luxé because I wanted a place I would trust with my own daughter's wedding
              day. Every product, every technique, every stylist — chosen with that standard."
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              With 18 years of experience, L'Oréal Paris certifications and 400+ brides styled,
              Priya leads a team that redefines what luxury means in an Indian salon.
            </p>
          </div>
          <img
            src={founderImg}
            alt="Priya Malhotra, Founder"
            width={1008}
            height={1200}
            loading="lazy"
            className="order-1 md:order-2 rounded-2xl aspect-[4/5] object-cover w-full max-w-md mx-auto"
          />
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24">
        <div className="container-lux">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="eyebrow">Our Team</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">
              Certified artists, personally chosen
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <div key={m.name} className="card-lux">
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="p-6">
                  <h3 className="font-serif text-2xl">{m.name}</h3>
                  <div className="eyebrow mt-1">{m.role}</div>
                  <p className="mt-3 text-sm text-muted-foreground">{m.bio}</p>
                  <div className="mt-4 flex justify-between text-xs">
                    <span className="text-muted-foreground">{m.exp} experience</span>
                    <Link to="/book" className="text-rose font-medium">
                      Book →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-blush/30">
        <div className="container-lux">
          <div className="text-center mb-14">
            <span className="eyebrow">Our Values</span>
            <h2 className="font-serif text-4xl md:text-5xl mt-3">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((v) => (
              <div key={v.title} className="p-8 bg-card rounded-2xl border border-border">
                <v.icon className="w-6 h-6 text-rose mb-4" />
                <h3 className="font-serif text-2xl">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
