import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import NewService from "../components/newService";
import { Platform } from "../components/Platform";
import { Testimonials } from "../components/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <NewService />
      <Platform />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
