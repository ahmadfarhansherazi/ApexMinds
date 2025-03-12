import male_avatar from "../assets/images/avatar-male.png";
import female_avatar from "../assets/images/avatar-female.png";
"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

const testimonialData = [
  {
    quote: "We partnered with ApexMinds AI for data annotation, and the precision they delivered was outstanding. Their expertise in image and video annotation significantly improved our AI model's accuracy. The attention to detail and commitment to quality make them a go-to choice for any AI-driven business.",
    name: "Ahmed Al-Farsi",
    designation: "AI Project Manager at NextGen Tech (Toronto, Canada)",
    src: male_avatar
  },
  {
    quote: "Their transcription services have been a game-changer for our NLP projects. The accuracy of their multilingual transcriptions, especially in niche dialects, exceeded our expectations. Their ability to handle large-scale data with consistency and speed is truly remarkable!",
    name: "Lisa Carter",
    designation: "Head of Data Science at InnovateAI Solutions (New York, USA)",
    src: female_avatar
  },
  {
    quote: "Outstanding service! The team's expertise in data validation saved us countless hours.",
    name: "Emily Rodriguez",
    designation: "Data Science Director",
    src: female_avatar
  },
  {
    quote: "We needed high-quality data for training our AI models, and their data collection and validation services were top-notch. They provided precisely curated datasets that aligned with our industry needs, ensuring our models performed optimally in real-world scenarios.",
    name: "Zain Ul Abideen",
    designation: "Machine Learning Engineer at Vertex AI Labs (Lahore, Pakistan)",
    src: male_avatar
  },
  {
    quote: "Evaluating machine-generated responses is crucial for our chatbot's success, and this team provided exceptional human evaluation services. Their expert reviewers helped fine-tune our NLP model, improving response accuracy and user engagement. Highly recommended!!",
    name: "Priya Mehta",
    designation: "AI Research Lead at Cogniva Technologies (Bangalore, India)",
    src: female_avatar
  }
];


export const Testimonials = () => {
  return <AnimatedTestimonials testimonials={testimonialData} autoplay={true} />;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };
  return (
    <section className="w-full bg-zinc-900">
      <div id="testimonials" className="relative max-w-sm md:max-w-4xl mx-auto antialiased font-sans px-4 md:px-8 lg:px-12 py-20">
        <h2 className="text-6xl font-bold text-center mb-12 text-white">
          Client <span className="text-yellow-400">Testimonials</span>
        </h2>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <div className="relative h-80 w-full">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(),
                      zIndex: isActive(index)
                        ? 10
                        : testimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          <div className="flex justify-between flex-col py-4">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
            >
              <h3 className="text-2xl font-bold text-gray-300">
                {testimonials[active].name}
              </h3>
              <p className="text-sm text-gray-200 ">
                {testimonials[active].designation}
              </p>
              <motion.p className="text-lg text-gray-200 mt-8 dark:text-neutral-300">
                {testimonials[active].quote.split(" ").map((word, index) => (
                  <motion.span
                    key={index}
                    initial={{
                      filter: "blur(10px)",
                      opacity: 0,
                      y: 5,
                    }}
                    animate={{
                      filter: "blur(0px)",
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                      delay: 0.02 * index,
                    }}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </motion.p>
            </motion.div>
            <div className="flex gap-4 pt-12 md:pt-0">
              <button
                onClick={handlePrev}
                className="h-7 w-7 rounded-full  bg-white hover:bg-yellow-500 flex items-center justify-center group/button"
              >
                <IconArrowLeft className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:rotate-12 transition-transform duration-300" />
              </button>
              <button
                onClick={handleNext}
                className="h-7 w-7 rounded-full bg-white hover:bg-yellow-500  flex items-center justify-center group/button"
              >
                <IconArrowRight className="h-5 w-5 text-black dark:text-neutral-400 group-hover/button:-rotate-12 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
