import Navbar from "../layout/Navbar";
import CTA from "./CTA";
import Footer from "./Footer";
import Hero from "./Hero";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <CTA />
      <Footer />
    </>
  );
}