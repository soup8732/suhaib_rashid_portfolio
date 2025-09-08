import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "suhaibrashid@gmail.com",
      href: "mailto:suhaibrashid@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (512) 961-0729",
      href: "tel:+15129610729"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Houston, TX",
      href: "#"
    }
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const firstName = String(formData.get("firstName") || "");
    const lastName = String(formData.get("lastName") || "");
    const email = String(formData.get("email") || "");
    const message = String(formData.get("message") || "");

    const subject = encodeURIComponent(`Portfolio contact from ${firstName} ${lastName}`.trim());
    const body = encodeURIComponent(`From: ${firstName} ${lastName} <${email}>

${message}`);
    window.location.href = `mailto:suhaibrashid@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <motion.section
      id="contact"
      className="py-16 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, 
            interesting projects, or just want to say hello. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 rounded-lg 
                    bg-white dark:bg-gray-800 shadow-sm hover:shadow-md 
                    transition-all duration-300 hover:-translate-y-1"
                  whileHover={{ scale: 1.02 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-pink-100 
                    dark:bg-pink-900/30 flex items-center justify-center">
                    <info.icon size={24} className="text-pink-600 dark:text-pink-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {info.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    dark:border-gray-600 bg-white dark:bg-gray-800 
                    text-gray-900 dark:text-white placeholder-gray-500 
                    focus:ring-2 focus:ring-pink-500 focus:border-transparent 
                    transition-all duration-300"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 
                    dark:border-gray-600 bg-white dark:bg-gray-800 
                    text-gray-900 dark:text-white placeholder-gray-500 
                    focus:ring-2 focus:ring-pink-500 focus:border-transparent 
                    transition-all duration-300"
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  dark:border-gray-600 bg-white dark:bg-gray-800 
                  text-gray-900 dark:text-white placeholder-gray-500 
                  focus:ring-2 focus:ring-pink-500 focus:border-transparent 
                  transition-all duration-300"
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 
                  dark:border-gray-600 bg-white dark:bg-gray-800 
                  text-gray-900 dark:text-white placeholder-gray-500 
                  focus:ring-2 focus:ring-pink-500 focus:border-transparent 
                  transition-all duration-300 resize-none"
              />
              <motion.button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white 
                  font-medium py-3 px-6 rounded-lg transition-all duration-300 
                  hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
