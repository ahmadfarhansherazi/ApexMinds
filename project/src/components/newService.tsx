import { cn } from "../lib/utils";

import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Data Collection & Labeling",
      description:
        "We provide data collection and labeling solutions tailored for AI applications, ensuring diverse, high-quality datasets. With precise annotations, we enhance model accuracy and reliability. Our streamlined process guarantees optimal performance for AI-driven systems.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Data Annotation (Audios, Videos, Images)",
      description:
        "Our data annotation service converts raw data into AI-ready, structured datasets with precision. Specializing in image, video, text, and audio annotation using LoFT 2.0, we ensure high-quality labels for optimal model training.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Data Transcription (Audio & Videos)",
      description:
        "Transform audio and video into searchable, actionable text with our professional transcription services. We provide accurate, timely transcriptions to enhance AI systems, improving voice recognition, content analysis, and customer insights. With expertise in 150+ languages and dialects, our transcribers ensure every detail is captured with precision.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Data Validation & QA",
      description: "Empower your AI development with our customized data collection services, delivering high-quality datasets tailored to your project's needs. Through web scraping, targeted acquisition, and meticulous validation, we ensure diverse, real-world data.",
      icon: <IconCloud />,
    },
    {
      title: "Crowdsourcing",
      description: "Leverage the power of crowdsourcing to gather diverse, high-quality data at scale. Our global workforce provides rapid, accurate annotations and insights for AI training. Ensure efficiency, scalability, and precision with our expertly managed crowdsourced solutions.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Data Generation",
      description:
        "Generate high-quality synthetic and real-world data tailored for AI training. Our data generation services ensure diversity, accuracy, and scalability for machine learning models. Enhance AI performance with custom datasets designed to meet your specific needs.",
      icon: <IconHelp />,
    },
    {
      title: "Human evaluation of machine generated responses",
      description:
        "Ensure high-quality, accurate AI responses with our human evaluation services. Expert reviewers assess relevance, coherence, and accuracy, offering critical insights. Refine and optimize your AI models with precise, data-driven feedback.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Customized Data Services",
      description: "Get tailored data solutions designed to meet your unique AI needs. From collection to annotation and validation, we ensure high-quality, structured datasets. Power your AI models with precise, customized data services for optimal performance.",
      icon: <IconHeart />,
    },
    
  ];
  return (
    <div id="newservice" className="relative z-10 py-20 px-4 w-full bg-neutral-900 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-6xl font-bold text-center mb-12 text-white">
          Our <span className="text-yellow-400">Services</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-600 bg-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-600",
        index < 4 && "lg:border-b border-neutral-600"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-yellow-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-yellow-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-yellow-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-yellow-700 group-hover/feature:bg-yellow-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};