import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const msg = encodeURIComponent(
    "Hi Luxé Salon! I'd like to book an appointment. Please share available slots."
  );
  return (
    <a
      href={`https://wa.me/919876543210?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-40" />
      <span className="relative flex items-center gap-2 bg-emerald-500 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl hover:bg-emerald-600 transition-colors">
        <MessageCircle className="w-5 h-5" />
        <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
      </span>
    </a>
  );
}
