import { Link } from "react-router-dom";
import { PageHero } from "@/components/PageHero";
import { posts } from "@/lib/site-data";

export function Blog() {
  const [featured, ...rest] = posts;
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Edits, rituals & expert notes."
        subtitle="Beauty stories written by the Luxé team."
      />

      <section className="py-20">
        <div className="container-lux grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2 space-y-14">
            <article className="card-lux">
              <img
                src={featured.image}
                alt={featured.title}
                loading="lazy"
                className="w-full aspect-[16/9] object-cover"
              />
              <div className="p-8">
                <div className="flex gap-3 text-xs eyebrow">
                  <span>{featured.category}</span>
                  <span>·</span>
                  <span>{featured.read} read</span>
                </div>
                <h2 className="font-serif text-4xl mt-3">{featured.title}</h2>
                <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">
                    By {featured.author} · {featured.date}
                  </span>
                  <Link
                    to="/blog"
                    className="text-rose text-xs uppercase tracking-widest font-medium"
                  >
                    Read →
                  </Link>
                </div>
              </div>
            </article>

            <div className="grid sm:grid-cols-2 gap-6">
              {rest.map((p) => (
                <article key={p.slug} className="card-lux">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <div className="p-6">
                    <div className="eyebrow">
                      {p.category} · {p.read}
                    </div>
                    <h3 className="font-serif text-2xl mt-2 leading-tight">{p.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.excerpt}</p>
                    <div className="mt-4 text-xs text-muted-foreground">
                      {p.author} · {p.date}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-10">
            <div className="p-6 rounded-2xl border border-border bg-blush/40">
              <div className="eyebrow">Newsletter</div>
              <h3 className="font-serif text-2xl mt-2">Weekly beauty edits</h3>
              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full px-4 py-3 rounded-full bg-ivory border border-border text-sm focus:outline-none focus:border-gold"
                />
                <button className="w-full btn-primary !py-2.5 text-xs">Subscribe</button>
              </form>
            </div>
            <div>
              <div className="eyebrow mb-3">Categories</div>
              <ul className="space-y-2 text-sm">
                {["Bridal", "Hair", "Skin", "Makeup", "Wellness", "Trends"].map((c) => (
                  <li key={c} className="flex justify-between border-b border-border py-2">
                    <span>{c}</span>
                    <span className="text-muted-foreground">
                      {Math.floor(Math.random() * 20) + 3}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

export default Blog;
