import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MapPin, Phone, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-cocoa text-ivory">
      <div className="container-lux py-20 grid gap-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="font-serif text-4xl mb-3">Luxé</div>
          <div className="eyebrow !text-gold-soft mb-5">Salon &amp; Spa</div>
          <p className="text-ivory/70 text-sm leading-relaxed max-w-xs">
            A sanctuary of beauty and wellness — crafting confidence with expert care since 2009.
          </p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-ivory/20 grid place-items-center hover:bg-gold hover:border-gold transition-colors"
                aria-label="social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-soft mb-5">Explore</h4>
          <ul className="space-y-2.5 text-sm text-ivory/80">
            {[
              ["/about", "About"],
              ["/services", "Services"],
              ["/bridal", "Bridal"],
              ["/gallery", "Gallery"],
              ["/packages", "Packages"],
              ["/blog", "Journal"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="hover:text-gold-soft transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-soft mb-5">Visit Us</h4>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gold" />
              <span>12, Rose Avenue, Bandra West,<br />Mumbai 400050</span>
            </li>
            <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 shrink-0 text-gold" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail className="w-4 h-4 mt-0.5 shrink-0 text-gold" /> care@luxesalon.in</li>
            <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 shrink-0 text-gold" /> Mon–Sun · 10 AM – 9 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow !text-gold-soft mb-5">Newsletter</h4>
          <p className="text-sm text-ivory/70 mb-4">
            Receive beauty edits, festival offers &amp; expert tips.
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 px-4 py-2.5 rounded-full bg-ivory/10 border border-ivory/20 text-sm placeholder:text-ivory/40 focus:outline-none focus:border-gold"
            />
            <button className="px-5 py-2.5 rounded-full bg-gold text-cocoa text-xs uppercase tracking-widest font-medium hover:bg-gold-soft transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="container-lux py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-ivory/50">
          <span>© {new Date().getFullYear()} Luxé Salon &amp; Spa. All rights reserved.</span>
          <span>Handcrafted with elegance in Mumbai.</span>
        </div>
      </div>
    </footer>
  );
}
