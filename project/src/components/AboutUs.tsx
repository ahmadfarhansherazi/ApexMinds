import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/Upwork_Profile.png";


const achievements = [
  { text: "3+ Years of Experience", icon: () => <span className="text-4xl">🏆</span> },
  { text: "1000+ Contributors", icon: () => <span className="text-4xl">👥</span> },
  { text: "150+ Supported Languages", icon: () => <span className="text-4xl">🌍</span> },
  { text: "98%+ Accuracy Rate", icon: () => <span className="text-4xl">✅</span> },
];

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 200);
  }, []);

  return (
    <section id="about" className="py-20 dark:bg-neutral-800 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className={`transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
        <h2 className="text-3xl font-bold text-center mb-12 text-white pt-20">
            About <span className="text-yellow-400">ApexMinds AI</span>
          </h2>   
          <motion.img 
            src={profileImage} 
            alt="ApexMinds Top Rated Plus Profile" 
            className="w-[500px] h-[200px] object-contain mx-auto mb-8 border-2 rounded-3xl bg-charcoal" 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut",
            }}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.2 }
            }}
          />

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-white leading-relaxed mb-8">
              At ApexMinds AI, we are focused on bridging the gap between human expertise and AI. We deliver comprehensive data solutions, including Data Collection, Data Annotation, Quality Review, and Transcription services utilizing the LoFT 2.0 platform.
            </p>
            <p className="text-lg text-white leading-relaxed mb-12">
              With a proven track record of transcribing over 150 languages and locales at an accuracy rate exceeding 98%, we have successfully delivered more than 70,000 hours of high-quality work to clients worldwide in the past two years. Our commitment to excellence has earned us the Top Rated Plus status on Upwork, reflecting our dedication to client satisfaction and superior service delivery.
            </p>
            <h3 className="text-2xl font-semibold text-yellow-600 mb-8">
              Maximize your AI Model's power with ApexMinds AI
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`bg-neutral-900 p-6 rounded-xl shadow-lg transform transition-all duration-500 hover:scale-105 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <achievement.icon />
                  <p className="text-white font-medium mt-2">{achievement.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
