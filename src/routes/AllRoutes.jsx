import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Bridal from "../pages/Bridal";
import Gallery from "../pages/Gallery";
import Packages from "../pages/Packages";
import Blog from "../pages/Blog";
import Review from "../pages/Review";
import Contact from "../pages/Contact";
import Book from "../pages/Book";
import Loader from "../components/Loader";

function AllRoutes() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader ONLY on initial site load
    const timer = setTimeout(() => setLoading(false), 1300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/bridal" element={<Bridal />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/testimonials" element={<Review />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AllRoutes;
