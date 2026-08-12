import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/bridal", label: "Bridal" },
  { to: "/gallery", label: "Gallery" },
  { to: "/packages", label: "Packages" },
  { to: "/blog", label: "Blog" },
  { to: "/testimonials", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
   const pathname = location.pathname;


  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [pathname]);


  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-border shadow-[0_10px_40px_-30px_rgba(0,0,0,0.15)]"
          : "bg-transparent"
        }`}
    >
      <div className="container-lux flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl md:text-3xl tracking-tight text-cocoa">
            Luxé
          </span>
          <span className="eyebrow hidden sm:inline">Salon &amp; Spa</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-[0.82rem] tracking-[0.14em] uppercase hover:text-rose transition-colors relative ${isActive ? "text-rose font-medium" : "text-cocoa/80"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919876543210" className="btn-ghost !py-2 !px-4 text-[0.72rem]">
            <Phone className="w-3.5 h-3.5" /> Call
          </a>
          <Link to="/book" className="btn-primary !py-2.5 !px-5 text-[0.72rem]">
            Book Appointment
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-cocoa"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
      >
        <div
          className="absolute inset-0 bg-cocoa/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-ivory p-8 shadow-2xl transition-transform duration-500 overflow-y-auto ${open ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <div className="flex items-center justify-between mb-10">
            <span className="font-serif text-3xl">Luxé</span>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `font-serif text-xl sm:text-2xl hover:text-rose ${isActive ? "text-rose font-medium" : "text-cocoa"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8 flex flex-col gap-3 pb-8">
            <Link to="/book" onClick={() => setOpen(false)} className="btn-primary">
              Book Appointment
            </Link>
            <a href="tel:+919876543210" className="btn-ghost">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

export { Nav as Header };
export default Nav;
