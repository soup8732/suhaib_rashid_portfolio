import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import resumePdf from "@/assets/Suhaib_Rashid_Resume.pdf";
import CodeHoverCards, { type CardData } from "../CodeHoverCards";

export const SocialSection = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/suhaib-rashid-65656a188/",
      color: "hover:text-blue-600",
      bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/soup8732",
      color: "hover:text-gray-800 dark:hover:text-gray-200",
      bgColor: "hover:bg-gray-50 dark:hover:bg-gray-800/20"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:suhaibrashid@gmail.com",
      color: "hover:text-red-600",
      bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20"
    },
    {
      name: "Resume",
      icon: FileText,
      href: resumePdf,
      color: "hover:text-green-600",
      bgColor: "hover:bg-green-50 dark:hover:bg-green-900/20"
    }
  ];

  return (
    <motion.section
      id="social"
      className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
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
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, and interesting conversations. 
            Feel free to reach out through any of these channels.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CodeHoverCards
            cards={[
              { id: "linkedin", icon: Linkedin, href: socialLinks[0].href, title: "LinkedIn", description: "Connect with me" } as CardData,
              { id: "github", icon: Github, href: socialLinks[1].href, title: "GitHub", description: "Browse my code" } as CardData,
              { id: "email", icon: Mail, href: socialLinks[2].href, title: "Email", description: "Send me a note" } as CardData,
              { id: "resume", icon: FileText, href: socialLinks[3].href, title: "Resume", description: "View my CV" } as CardData,
            ]}
            columns={4}
            iconSize={40}
            minHeight={0}
            cardClassName="bg-slate-800/40 dark:bg-gray-800/40 rounded-2xl"
            showBorder={false}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
