import { Brain } from "lucide-react";

const platforms = [
  { name: "TensorFlow" },
  { name: "PyTorch" },
  { name: "Scikit-Learn" },
  { name: "Hugging Face" },
  { name: "OpenAI GPT" },
  { name: "Google Cloud AI" },
  { name: "AWS AI" },
  { name: "IBM Watson" },
];

export default function Platform() {
  return (
    <section id="platforms" className="py-16 bg-gray-900 scroll-mt-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Platforms & Tools</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:scale-105 hover:border-blue-200 transition-all duration-300 ease-in-out"
            >
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Brain className="h-8 w-8 text-blue-500/30 mb-3 mx-auto transform group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold text-gray-800 text-center tracking-wide">
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
