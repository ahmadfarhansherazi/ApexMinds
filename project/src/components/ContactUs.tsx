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
    <section id="contactUs" className="py-16 bg-neutral-900 scroll-mt-20 pb-32">
      <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-12 text-white pt-20">
            Contact <span className="text-yellow-400">Us</span>
          </h2> 
        <div className="flex flex-col justify-center">
          {/* Contact Form */}
          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="max-w-min px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  placeholder="Your message"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black px-6 py-3 rounded-lg hover:bg-yellow-700 hover:text-white transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
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

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-white mr-4" />
              <a href="mailto:ai.apexminds@gmail.com" className="text-white hover:text-yellow-600">
                ai.apexminds@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-white mr-4" />
              <a href="tel:+923065258252" className="text-white hover:text-yellow-600">
                +92 306 5258252
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-yellow-500 hover:text-yellow-600">
                <X className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
