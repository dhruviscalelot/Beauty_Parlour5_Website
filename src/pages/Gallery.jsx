import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { IMG } from "@/lib/site-data";

const cats = ["All", "Bridal", "Hair", "Skin", "Nails", "Mehendi", "Spa"];

const items = [
  { img: IMG.bridal, cat: "Bridal", label: "Royal Bride" },
  { img: IMG.hair, cat: "Hair", label: "Hair Spa" },
  { img: IMG.skin, cat: "Skin", label: "Gold Facial" },
  { img: IMG.makeup, cat: "Bridal", label: "HD Makeup" },
  { img: IMG.mehendi, cat: "Mehendi", label: "Bridal Mehendi" },
  { img: IMG.spa, cat: "Spa", label: "Serenity Suite" },
  { img: IMG.nails, cat: "Nails", label: "Signature Manicure" },
  { img: IMG.salon, cat: "Bridal", label: "Bridal Suite" },
  { img: IMG.bridal, cat: "Bridal", label: "Reception Look" },
  { img: IMG.hair, cat: "Hair", label: "Keratin Finish" },
  { img: IMG.skin, cat: "Skin", label: "Radiance Ritual" },
  { img: IMG.mehendi, cat: "Mehendi", label: "Bridal Henna" },
  { img: IMG.nails, cat: "Nails", label: "Nude Elegance" },
  { img: IMG.makeup, cat: "Bridal", label: "Airbrush Bride" },
  { img: IMG.spa, cat: "Spa", label: "Ayurveda Room" },
  { img: IMG.hair, cat: "Hair", label: "Blow Dry" },
];

export function Gallery() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A gallery of quiet luxury."
        subtitle="Real work from real Luxé guests — no filters, no fuss."
      />

      <section className="py-14">
        <div className="container-lux">
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-5 py-2 rounded-full border text-sm transition-colors ${active === c ? "bg-rose text-ivory border-rose" : "border-border text-muted-foreground hover:border-gold"}`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {filtered.map((it, i) => (
              <button
                key={i}
                onClick={() => setLightbox(i)}
                className="group relative aspect-[3/4] rounded-xl overflow-hidden"
              >
                <img
                  src={it.img}
                  alt={it.label}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-ivory text-sm text-left opacity-0 group-hover:opacity-100 transition-opacity font-serif">
                  {it.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-cocoa/90 z-[70] grid place-items-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={filtered[lightbox].img}
            alt={filtered[lightbox].label}
            className="max-h-[85vh] max-w-[90vw] rounded-lg"
          />
          <button className="absolute top-6 right-6 text-ivory text-2xl">×</button>
        </div>
      )}
    </>
  );
}

export default Gallery;
