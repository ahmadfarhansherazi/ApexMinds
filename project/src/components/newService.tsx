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
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Data Annotation (Audios, Videos, Images)",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Data Transcription (Audio & Videos)",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Data Validation & QA",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Crowdsourcing",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Data Generation",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Human evaluation of machine generated responses",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Customized Data Services",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
    
  ];
  return (
    <div id="newservice" className="relative z-10 py-20 px-4 w-full dark:bg-neutral-900 scroll-mt-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-yellow-100 dark:from-yellow-900 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-yellow-100 dark:from-yellow-900 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-yellow-600 dark:text-yellow-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-yellow-300 dark:bg-yellow-700 group-hover/feature:bg-yellow-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-black dark:text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};