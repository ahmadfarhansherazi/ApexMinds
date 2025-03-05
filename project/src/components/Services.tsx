import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white scroll-mt-28">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            "Data Collection & Labeling",
            "Data Annotation",
            "Data Transcription",
            "Data Validation & QA",
            "Customized Data Services",
            "Content Review",
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-gray-200 rounded-lg hover:border-yellow-400 transition-colors"
            >
              <CheckCircle2 className="w-8 h-8 text-yellow-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service}</h3>
              <p className="text-gray-600">
                Professional {service.toLowerCase()} services with high accuracy and quick turnaround.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
