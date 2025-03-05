import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center bg-black text-white">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.4",
        }}
      />
      <div className="container mx-auto px-4 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Transforming Data into
            <span className="text-yellow-400"> Intelligent Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Your Partner in AI Data Mastery</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/#contactUs"
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center"
            >
              Get Started <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/#services"
              className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-black transition-colors"
            >
              Our Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
