import { Mail, Phone, Linkedin, Facebook} from "lucide-react";
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
              <a href="https://www.linkedin.com/company/apexminds-ai/" target="_blank" className="text-yellow-500 hover:text-yellow-600">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="https://www.facebook.com/share/1BghEckM6r/?mibextid=wwXIfr" target="_blank" className="text-yellow-500 hover:text-yellow-600">
                <Facebook className="h-7 w-7" />
              </a>
              <a href="https://www.upwork.com/freelancers/~01b69a5d257cb069a8" target="_blank" className="text-yellow-500 hover:text-yellow-600">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0,0,256,256 ">
              <g fill="#eab308" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M1,9c-0.55226,0.00006 -0.99994,0.44774 -1,1v14.5c0,6.33231 5.16769,11.5 11.5,11.5c5.7227,0 10.28472,-4.29277 11.15039,-9.7793c0.61656,0.85415 1.20247,1.72649 1.89844,2.50781c-1.24354,5.26909 -2.79448,11.85771 -3.54492,15.04297c-0.06971,0.29717 0.0001,0.6099 0.18957,0.84921c0.18947,0.23931 0.47785,0.37899 0.78309,0.3793h6.16406c0.46464,0.00046 0.8684,-0.31915 0.97461,-0.77148c0.68155,-2.89323 1.54613,-6.56487 2.35938,-10.01562c1.85098,0.96918 3.99238,1.78711 6.52539,1.78711c6.60746,0 12,-5.39254 12,-12c0,-6.60746 -5.39254,-12 -12,-12c-4.6484,0 -8.67051,2.73649 -10.65039,6.78711c-2.09924,-3.63406 -3.67007,-7.46585 -4.24219,-9.11523c-0.13983,-0.40245 -0.51926,-0.67213 -0.94531,-0.67187h-6.16211c-0.55226,0.00006 -0.99994,0.44774 -1,1v14.5c0,1.93848 -1.56152,3.5 -3.5,3.5c-1.93848,0 -3.5,-1.56152 -3.5,-3.5v-14.5c-0.00006,-0.55226 -0.44774,-0.99994 -1,-1zM2,11h4v13.5c0,3.02352 2.47648,5.5 5.5,5.5c3.02352,0 5.5,-2.47648 5.5,-5.5v-13.5h4.48242c0.79098,2.21544 2.46253,6.53764 5.08398,10.54688c0.21457,0.32886 0.60173,0.50172 0.98981,0.44195c0.38809,-0.05977 0.70529,-0.34112 0.81097,-0.71929c1.20332,-4.31485 5.12351,-7.26953 9.63281,-7.26953c5.52254,0 10,4.47746 10,10c0,5.52254 -4.47746,10 -10,10c-2.58443,0 -4.86063,-0.93988 -6.69336,-2.06641c-0.27356,-0.1677 -0.61097,-0.19397 -0.90719,-0.07061c-0.29621,0.12336 -0.51525,0.38135 -0.58891,0.69366c-0.83346,3.53593 -1.72348,7.31271 -2.46094,10.44336h-4.10937c0.82804,-3.51531 2.20044,-9.34383 3.36133,-14.26172c0.07681,-0.32541 -0.01407,-0.66767 -0.24219,-0.91211c-1.29188,-1.38778 -2.46927,-2.99204 -3.51367,-4.65234c-0.23768,-0.37638 -0.69552,-0.55036 -1.12317,-0.42681c-0.42766,0.12354 -0.72218,0.51487 -0.72253,0.96001v0.79297c0,5.24769 -4.25231,9.5 -9.5,9.5c-5.24769,0 -9.5,-4.25231 -9.5,-9.5zM38,18c-2.73299,0 -5.13101,1.85494 -5.81055,4.5c-0.07149,0.27836 -0.39152,1.63658 -0.89258,3.75781c-0.08865,0.37408 0.04499,0.76587 0.34375,1.00781c1.51484,1.22739 3.73146,2.73438 6.35938,2.73438c3.29938,0 6,-2.70062 6,-6c0,-3.29938 -2.70062,-6 -6,-6zM38,20c2.21462,0 4,1.78538 4,4c0,2.21462 -1.78538,4 -4,4c-1.63116,0 -3.2736,-0.9644 -4.5957,-1.95898c0.36244,-1.53153 0.70425,-2.97323 0.72266,-3.04492c0.45446,-1.76894 2.04004,-2.99609 3.87305,-2.99609z"></path></g></g>
              </svg>
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
