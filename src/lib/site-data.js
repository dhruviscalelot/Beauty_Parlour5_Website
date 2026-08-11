import bridal from "@/assets/bridal.jpg";
import hair from "@/assets/hair.jpg";
import skin from "@/assets/skin.jpg";
import makeup from "@/assets/makeup.jpg";
import mehendi from "@/assets/mehendi.jpg";
import spa from "@/assets/spa.jpg";
import nails from "@/assets/nails.jpg";
import salon from "@/assets/hero-salon.jpg";

export const IMG = { bridal, hair, skin, makeup, mehendi, spa, nails, salon };

export const services = [
  { slug: "bridal-makeup", name: "Signature Bridal Makeup", category: "Bridal", price: "₹25,000", duration: "3 hrs", description: "HD & airbrush bridal artistry with pre-wedding consultation, trial session and on-day styling.", image: bridal },
  { slug: "hair-spa", name: "Luxury Hair Spa", category: "Hair", price: "₹2,499", duration: "75 min", description: "Deep-conditioning ritual with keratin-rich masque, scalp massage and steam therapy.", image: hair },
  { slug: "gold-facial", name: "24k Gold Radiance Facial", category: "Skin", price: "₹3,999", duration: "90 min", description: "Anti-ageing gold leaf facial that restores glow and evens skin tone.", image: skin },
  { slug: "hd-makeup", name: "HD Party Makeup", category: "Makeup", price: "₹4,500", duration: "60 min", description: "Flawless camera-ready makeup for parties, receptions and events.", image: makeup },
  { slug: "mehendi", name: "Bridal Mehendi Artistry", category: "Mehendi", price: "₹5,000", duration: "2 hrs", description: "Intricate bridal henna by award-winning artists, full hands & feet.", image: mehendi },
  { slug: "spa-therapy", name: "Ayurvedic Body Therapy", category: "Spa", price: "₹4,200", duration: "90 min", description: "Warm oil abhyanga, aromatic steam and stress-melting massage.", image: spa },
  { slug: "gel-manicure", name: "Signature Gel Manicure", category: "Nails", price: "₹1,500", duration: "45 min", description: "Long-lasting gel finish with cuticle care and hand massage.", image: nails },
  { slug: "keratin", name: "Keratin Smoothening", category: "Hair", price: "₹8,999", duration: "3 hrs", description: "Frizz-free, salon-smooth hair for up to 6 months.", image: hair },
];

export const stats = [
  { value: "15+", label: "Years of Expertise" },
  { value: "7,000+", label: "Happy Clients" },
  { value: "40+", label: "Beauty Treatments" },
  { value: "4.9★", label: "Google Rating" },
];

export const team = [
  { name: "Priya Malhotra", role: "Founder · Master Stylist", exp: "18 years", image: bridal, bio: "L'Oréal certified colourist and celebrity bridal artist." },
  { name: "Anaya Kapoor", role: "Senior Beautician", exp: "12 years", image: skin, bio: "Skin science specialist trained in Paris and Seoul." },
  { name: "Rhea Sharma", role: "Bridal Artist", exp: "10 years", image: makeup, bio: "Airbrush expert with 400+ brides styled." },
  { name: "Meera Iyer", role: "Spa Therapist", exp: "8 years", image: spa, bio: "Certified Ayurveda & aromatherapy practitioner." },
  { name: "Sana Qureshi", role: "Nail Artist", exp: "6 years", image: nails, bio: "Trained in Tokyo gel and 3D nail art." },
  { name: "Farah Khan", role: "Mehendi Artist", exp: "9 years", image: mehendi, bio: "Award-winning Rajasthani & Arabic henna specialist." },
];

export const testimonials = [
  { name: "Ananya S.", service: "Bridal Makeup", rating: 5, text: "Priya made me feel like royalty. My HD makeup lasted 14 hours through the entire wedding — flawless." },
  { name: "Kavya M.", service: "Hair Keratin", rating: 5, text: "Six months later my hair still feels silky. The team is meticulous and the ambience is pure luxury." },
  { name: "Rukmini P.", service: "Gold Facial", rating: 5, text: "My skin has never looked this radiant. The consultation felt personal — not a factory experience." },
  { name: "Isha D.", service: "Spa Therapy", rating: 5, text: "The abhyanga is transcendent. I leave every session feeling like a brand new person." },
  { name: "Neha R.", service: "Bridal Package", rating: 5, text: "From mehendi to reception, they handled everything. Zero stress, absolute perfection." },
  { name: "Sana T.", service: "Nail Art", rating: 5, text: "Gorgeous nail art and hygiene standards you can trust. My go-to for every occasion." },
];

export const packages = [
  {
    name: "Silver",
    price: "₹9,999",
    period: "/quarter",
    tagline: "For everyday radiance",
    highlight: false,
    features: [
      "2 signature facials",
      "2 hair spas",
      "1 manicure + pedicure",
      "10% off à-la-carte services",
      "Priority weekday booking",
    ],
  },
  {
    name: "Gold",
    price: "₹19,999",
    period: "/half-year",
    tagline: "Our most-loved plan",
    highlight: true,
    features: [
      "6 signature facials",
      "6 hair spas · 2 keratin touch-ups",
      "4 mani + pedi",
      "1 full-body spa therapy",
      "20% off à-la-carte + birthday reward",
    ],
  },
  {
    name: "Platinum",
    price: "₹39,999",
    period: "/year",
    tagline: "The complete luxury",
    highlight: false,
    features: [
      "Unlimited facials & hair spas",
      "Bridal trial + party makeup credits",
      "Monthly spa therapy",
      "30% off à-la-carte",
      "Complimentary anniversary gift",
    ],
  },
];

export const posts = [
  { slug: "bridal-trends-2026", title: "Bridal Makeup Trends for 2026", author: "Priya Malhotra", date: "May 12, 2026", category: "Bridal", read: "6 min", excerpt: "From dewy skin to statement kajal — the looks defining next season's brides.", image: bridal },
  { slug: "monsoon-hair-care", title: "Monsoon Hair Care Rituals", author: "Anaya Kapoor", date: "Apr 28, 2026", category: "Hair", read: "5 min", excerpt: "Simple daily habits and salon treatments that protect your strands through humid months.", image: hair },
  { slug: "skincare-routine", title: "Building the Perfect Skincare Routine", author: "Rhea Sharma", date: "Apr 10, 2026", category: "Skin", read: "8 min", excerpt: "Your derm-approved five-step routine — plus the ingredients actually worth your money.", image: skin },
  { slug: "hair-spa-benefits", title: "Why Hair Spa Deserves a Monthly Slot", author: "Meera Iyer", date: "Mar 22, 2026", category: "Hair", read: "4 min", excerpt: "The science behind scalp health and the long-term benefits of regular hair spas.", image: hair },
  { slug: "choosing-facial", title: "Choosing the Right Facial for You", author: "Priya Malhotra", date: "Mar 05, 2026", category: "Skin", read: "7 min", excerpt: "Gold, hydra, oxygen or brightening — a guide to what suits your skin best.", image: skin },
];
