import { PageHero } from "@/components/PageHero";
import { testimonials, IMG } from "@/lib/site-data";
import { Star } from "lucide-react";

export function Review() {
  const extended = [
    ...testimonials,
    {
      name: "Divya A.",
      service: "Keratin",
      rating: 5,
      text: "My hair looks salon-fresh months later. Genuinely worth every rupee.",
    },
    {
      name: "Priti V.",
      service: "Bridal",
      rating: 5,
      text: "They handled all four events — mehendi to reception — without a hitch. Family for life.",
    },
    {
      name: "Simran K.",
      service: "Skin",
      rating: 5,
      text: "The consult before my facial felt like seeing a dermatologist. Real results.",
    },
    {
      name: "Fatima N.",
      service: "Mehendi",
      rating: 5,
      text: "Farah's mehendi is a work of art. Every guest asked who did it.",
    },
    {
      name: "Aanya G.",
      service: "Spa",
      rating: 5,
      text: "The abhyanga transported me. This is what wellness should feel like.",
    },
    {
      name: "Riya J.",
      service: "Nails",
      rating: 5,
      text: "Beautiful nail art and immaculate hygiene. My monthly ritual.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="What Guests Say"
        title="7,000 women. One quiet promise."
        subtitle="4.9 stars across 2,148 Google reviews and counting."
      >
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-2 text-sm bg-ivory">
          <Star className="w-4 h-4 fill-gold text-gold" /> <b>4.9</b> · 2,148 Google reviews
        </div>
      </PageHero>

      <section className="py-20">
        <div className="container-lux grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extended.map((t, i) => (
            <blockquote key={i} className="p-8 rounded-2xl bg-card border border-border">
              <div className="flex text-gold mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold" />
                ))}
              </div>
              <p className="font-serif text-lg italic leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-blush grid place-items-center font-serif text-lg text-rose">
                  {t.name[0]}
                </div>
                <div className="text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.service}</div>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="py-20 bg-blush/40">
        <div className="container-lux">
          <div className="text-center mb-10">
            <span className="eyebrow">Featured Bride</span>
            <h2 className="font-serif text-4xl mt-3">Ananya's story</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-10 items-center bg-card p-8 md:p-12 rounded-3xl border border-border">
            <img
              src={IMG.bridal}
              alt="Featured bride"
              loading="lazy"
              className="rounded-2xl aspect-[4/5] object-cover"
            />
            <div>
              <div className="flex text-gold mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold" />
                ))}
              </div>
              <p className="font-serif text-2xl italic leading-relaxed">
                "From my first trial to the reception touch-up, Priya's team turned my wedding week
                into pure joy. I was myself — just the most radiant version."
              </p>
              <div className="mt-6">
                <div className="font-medium">Ananya Sharma</div>
                <div className="text-sm text-muted-foreground">Signature Bride · Feb 2026</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Review;
