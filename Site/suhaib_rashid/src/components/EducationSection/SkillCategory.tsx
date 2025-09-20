import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../lightswind/card.tsx";
import { Badge } from "../lightswind/badge";
import { Progress } from "../lightswind/progress";
import { motion, AnimatePresence } from "framer-motion";
import { CountUp } from "../lightswind/count-up";

export default function ProfessionalProfile() {
  return (
    <motion.section
      id="skills"
      className="space-y-12"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
          delayChildren: 0.3,
        },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="your-child-class"
      >
        {" "}
        <h3 className="text-3xl font-bold mb-6">Core Skills</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: "Advanced" },
                  { name: "SQL", icon: "https://img.icons8.com/color/48/sql.png", level: "Advanced" },
                  { name: "SAP", icon: "https://img.icons8.com/color/48/sap.png", level: "Intermediate" },
                  { name: "AWS", icon: "https://img.icons8.com/color/48/amazon-web-services.png", level: "Intermediate" },
                  { name: "Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", level: "Advanced" },
                  { name: "Tableau", icon: "https://img.icons8.com/color/48/tableau-software.png", level: "Advanced" },
                  { name: "PowerBI", icon: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/power-bi-icon.png", level: "Advanced" },
                  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: "Intermediate" },
                  { name: "Snowflake", icon: "https://leadsbridge.com/wp-content/themes/leadsbridge/img/integration-lg-logos/logo1011.png", level: "Intermediate" },
                  { name: "Salesforce", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg", level: "Intermediate" },
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    className="group flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700 hover:border-primary/30"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative mb-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{skill.name}</p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Generative AI & API Development</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "OpenAI API", icon: "https://www.svgrepo.com/show/306500/openai.svg", level: "Advanced" },
                  { name: "Claude API", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Claude_AI_symbol.svg/2048px-Claude_AI_symbol.svg.png", level: "Advanced" },
                  { name: "Gemini API", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/gemini-color.png", level: "Advanced" },
                  { name: "Cursor", icon: "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/light/cursor.png", level: "Advanced" },
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    className="group flex flex-col items-center text-center p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-700 dark:to-gray-800 hover:from-primary/10 hover:to-primary/20 transition-all duration-300 shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-600 hover:border-primary/30"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="relative mb-3">
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        className="h-10 w-10 transition-transform duration-300 group-hover:scale-110" 
                      />
                      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{skill.name}</p>
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      skill.level === 'Advanced' 
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' 
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <AnimatePresence>
                {[
                  "Leadership",
                  "Problem Solving",
                  "Agile Methodologies",
                  "Mentorship",
                  "Strategic Thinking",
                  "Cross-Team Collaboration",
                  "Stakeholder Consultation",
                  "Project Management",
                  "Data Analysis",
                  "Time Management",
                ].map((skill, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    viewport={{ once: true }}
                  >
                    <Badge className="bg-pink-500">{skill}</Badge>
                  </motion.div>
                ))}
              </AnimatePresence>
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Rest of your component remains unchanged */}
    </motion.section>
  );
}