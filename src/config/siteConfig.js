// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONFIGURATION  –  Edit this file to update info across the entire site
// ─────────────────────────────────────────────────────────────────────────────

export const siteConfig = {
  // Company
  companyName: "Glow & Grace Beauty Parlor",
  tagline: "A friendly neighborhood beauty parlor helping you look and feel your best, every single day.",

  // Contact
  phone: "+919876543210",
  phoneDisplay: "+91 98765 43210",
  email: "hello@glowandgrace.in",

  // WhatsApp
  whatsappDisplay: "+91 98765 43210",
  whatsappNumber: "919876543210",
  whatsappMessage: "Hello Glow & Grace Beauty Parlor, I would like to enquire about booking an appointment.",

  // Address & Map
  address: "12 MG Road, Bengaluru 560001",
  addressShort: "12 MG Road, Bengaluru 560001",

  mapUrl: "https://www.google.com/maps/search/?api=1&query=12%2C+Rose+Lane%2C+Model+Town%2C+New+Delhi+110009",
  mapEmbed: "https://www.google.com/maps?q=12%2C+Rose+Lane%2C+Model+Town%2C+New+Delhi+110009&output=embed",

  // Social Media
  facebook: "https://www.facebook.com/glowandgrace",
  instagram: "https://www.instagram.com/glowandgrace",

  // SEO / Browser Tab
  siteTitle: "Glow & Grace Beauty Parlor — Bridal, Makeup & Salon Care",
  metaDescription:
    "Glow & Grace is a friendly Indian beauty parlor offering bridal makeup, hair, facials, waxing, mehendi and more in a hygienic, welcoming salon.",
};

// Derived helpers (auto-computed – do NOT edit these)
siteConfig.whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  siteConfig.whatsappMessage
)}`;

siteConfig.phoneUrl = `tel:${siteConfig.phone}`;
siteConfig.emailUrl = `mailto:${siteConfig.email}`;
