import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Services from "../components/Services";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Platform from "../components/Platforms";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Platform />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
