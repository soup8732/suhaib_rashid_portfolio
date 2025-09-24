"use client";

import { useState } from "react";
import { DragOrderList } from "../lightswind/DragOrderList";
import { motion } from "framer-motion";
import { AuroraTextEffect } from "../AuroraTextEffect";

export const ProjectsSection = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Solutions Architect (Pro Bono Consulting Project)",
      subtitle:
        "Integrated Salesforce with Flipcause CRM to unify donor data and automate fundraising engagement workflows. Led stakeholder consultations and Agile sprints to deliver functional architecture, custom workflows, and nonprofit-tailored reporting.",
      date: "Jan 2025 – May 2025",
      link: "https://www.thebakarifoundation.org/",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
    },
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.1 }}
    >
      <section className="max-w-7xl mx-auto px-6 py-12">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <AuroraTextEffect
            text="Projects"
            fontSize="clamp(2rem, 5vw, 3rem)"
            colors={{
              first: "bg-orange-400",
              second: "bg-red-400",
              third: "bg-yellow-400",
              fourth: "bg-pink-400",
            }}
          />
        </motion.div>
        <DragOrderList items={projects} />
      </section>
    </motion.div>
  );
};
