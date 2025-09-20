import { motion } from "framer-motion";
import resumePdf from "@/assets/Suhaib_Rashid_Resume.pdf";
import headshotImg from "@/assets/headshot.JPG";
import { AuroraTextEffect } from "../AuroraTextEffect";

export const HeroSection = () => {
  return (
    <motion.div
      id="hero"
      className="text-foreground bg-transparent flex flex-col md:flex-row 
      items-center justify-center max-w-7xl mx-auto w-full"
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          // acts like staggerChildren / delayChildren
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 space-y-4 p-6 text-left md:text-left"
        initial={false} // so it inherits parent animation
      >
        <motion.div
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <AuroraTextEffect
            text="Suhaib Rashid"
            fontSize="clamp(2.5rem, 6vw, 4rem)"
            className="mb-2"
            colors={{
              first: "bg-pink-400",
              second: "bg-purple-400",
              third: "bg-blue-400",
              fourth: "bg-cyan-400",
            }}
          />
          <motion.span
            className="text-sm text-pink-500 font-semibold block"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              transition: { duration: 0.8, ease: "easeOut" },
            }}
          >
            
          </motion.span>
        </motion.div>

        <motion.h2
          className="text-xl text-muted-foreground mt-1"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Emerging Data & AI Professional | Business Technology Solutions
        </motion.h2>

        <motion.p
          className="mt-4 text-sm text-muted-foreground"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          Transforming complex data and business challenges into impactful solutions. 
          Skilled in Python, SQL, cloud platforms, and AI-driven tools, I specialize in 
          building scalable systems that streamline processes, enhance decision-making, and 
          create lasting value. Passionate about leveraging technology to drive innovation 
          and meaningful impact.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4"
          initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: "easeOut" },
          }}
        >
          <motion.a
            href="mailto:suhaibrashid@gmail.com"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
              bg-pink-500 hover:bg-pink-600 text-white font-medium text-sm 
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
          <motion.a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
              border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white 
              font-medium text-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
          <motion.a
            href="#social"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg 
              bg-gray-800 hover:bg-gray-900 dark:bg-gray-200 dark:hover:bg-gray-300 
              text-white dark:text-gray-800 font-medium text-sm 
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Socials
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="flex-1 flex justify-center p-6"
        initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
        animate={{
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
        }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
      >
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img
            src={headshotImg}
            alt="Suhaib Rashid"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
