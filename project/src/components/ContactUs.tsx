import { Mail, Phone, Linkedin, Facebook, X } from "lucide-react";
import { useState } from "react";
const apiUrl = import.meta.env.VITE_API_URL;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitStatus, setSubmitStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("Error sending message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contactUs" className="py-16 bg-zinc-800 scroll-mt-20 pb-32">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold text-center mb-2 text-white pt-10">
          Contact <span className="text-yellow-400">Us</span>
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12">Have questions or need assistance? We're here to help!</p>
        
        {/* Contact Info */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <div className="flex items-center justify-center">
              <Mail className="h-6 w-6 text-yellow-500 mr-4" />
              <a href="mailto:ai.apexminds@gmail.com" className="text-white hover:text-yellow-600 text-lg">
                ai.apexminds@gmail.com
              </a>
            </div>
            <div className="flex items-center justify-center">
              <Phone className="h-6 w-6 text-yellow-500 mr-4" />
              <a href="tel:+923065258252" className="text-white hover:text-yellow-600 text-lg">
                +92 306 5258252
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                <Facebook className="h-7 w-7" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                <X className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-6xl mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="border border-yellow-500/30 rounded-2xl p-12 bg-neutral-800/50 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-3">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg text-white border-zinc-700 hover:border-yellow-600 focus:outline-none bg-zinc-900 focus:ring-2 focus:ring-yellow-700"
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label className="block text-white mb-3">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg text-white border-zinc-700 hover:border-yellow-600  bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-700"
                    placeholder="your@email.com"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div className="mt-8">
                <label className="block text-white mb-3">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-white bg-zinc-900 border border-zinc-700 hover:border-yellow-600 rounded-lg focus:outline-none  focus:ring-2 focus:ring-yellow-700 resize-none"
                  rows={6}
                  placeholder="Your message"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mt-8  bg-zinc-900 text-gray-200 px-6 py-4 rounded-lg hover:bg-yellow-700 hover:text-white transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
            {submitStatus && (
              <div 
                className={`text-center mt-4 p-3 rounded-lg ${
                  submitStatus.includes("successfully") 
                    ? "text-green-700 bg-green-100" 
                    : "text-red-700 bg-red-100"
                }`}
              >
                {submitStatus}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
