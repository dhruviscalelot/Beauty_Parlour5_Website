


import { Header } from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import AllRoutes from "../src/routes/AllRoutes";
import ErrorBoundary from "../src/components/ErrorBoundary";

import { MessageCircle, Phone } from "lucide-react";

function App() {

  return (
    <ErrorBoundary>
      <Header />
      <AllRoutes />
      <Footer />

      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp"
          className="group relative flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105"
          style={{ height: 52, width: 52 }}
        >
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <MessageCircle className="relative h-6 w-6" />
        </a>
        <a
          href="tel:+919876543210"
          aria-label="Call"
          className="flex items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
          style={{ height: 52, width: 52 }}
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </ErrorBoundary>
  );
}

export default App;
