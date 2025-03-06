import { motion } from "framer-motion";
import { Clock, Users, Brain, BarChart } from "lucide-react";

export default function Stats() {
  return (
    <section className="py-20 dark:bg-neutral-800	">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: Clock, value: "3+", label: "Years Experience" },
            { icon: Users, value: "1000+", label: "Contributors" },
            { icon: Brain, value: "150+", label: "Languages" },
            { icon: BarChart, value: "98%", label: "Accuracy Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center text-white"
            >
              <stat.icon className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
