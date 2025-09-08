import { Separator } from "../lightswind/separator";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.div
      id="about"
      className="text-foreground max-w-7xl mx-auto w-full px-6 py-12 space-y-4"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <h2 className="text-3xl font-bold">About Me</h2>
      <p className="text-muted-foreground text-sm max-w-3xl">
          Hi, I’m Suhaib Rashid, a Management Information Systems graduate from the University of Texas at Austin 
          with a passion for leveraging technology to solve real-world challenges. I have hands-on experience with 
          Python, SQL, cloud platforms, and AI-driven solutions, including developing a GPT-4-based research summarization 
          tool and optimizing supply chain operations at Aramco. I thrive on solving complex business problems that drive 
          tangible value and am motivated by a continuous curiosity to learn and contribute meaningfully to any organization I join.
      </p>
      <Separator />
    </motion.div>
  );
};
