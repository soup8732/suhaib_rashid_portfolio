import { Card, CardHeader, CardTitle, CardContent } from "../lightswind/card";
import ProfessionalProfile from "./SkillCategory";
import { motion } from "framer-motion";
import { AuroraTextEffect } from "../AuroraTextEffect";

export const EducationSection = () => {
  return (
    <motion.section
      id="education"
      className="space-y-10 py-10 px-6"
      initial={{ opacity: 0, y: 50, filter: "blur(5px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Education */}
      <div>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AuroraTextEffect
            text="Education"
            fontSize="clamp(2rem, 5vw, 3rem)"
            colors={{
              first: "bg-indigo-400",
              second: "bg-purple-400",
              third: "bg-blue-400",
              fourth: "bg-cyan-400",
            }}
          />
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-1 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >

        <Card>
          <CardHeader>
            <CardTitle>B.B.A. in Management Information Systems</CardTitle>
            <p className="text-base text-muted-foreground">
              The University of Texas at Austin — Aug 2021 – May 2025
            </p>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground space-y-2">
            <p>
              Minor in <strong>Supply Chain Management</strong> | GPA: <strong>3.64</strong>  
              <br />
              Honors: <strong>University Honors</strong> (Spring 2022, Fall 2023, Spring 2024)
            </p>

            <p>Key Coursework:</p>
            <ul className="grid grid-cols-2 gap-x-6 list-disc list-inside space-y-1">
              <li><strong>Database Management</strong> — relational schema design, SQL optimization</li>
              <li><strong>Enterprise Cloud Computing</strong> — deployed apps on Google Cloud Platform</li>
              <li><strong>Analytics Programming</strong> — Python for data wrangling & visualization</li>
              <li><strong>Strategic IT Management</strong> — IT alignment with business strategy</li>
              <li><strong>Predictive Analytics & Data Mining</strong> — ML models in Python</li>
              <li><strong>Web App Development</strong> — built responsive apps with HTML, C#, Azure</li>
              <li><strong>Business System Development</strong> — system design, SDLC, project delivery</li>
              <li><strong>IT for Supply Chains</strong> — integrated ERP systems & SAP applications</li>
              <li><strong>Project Management</strong> — Agile sprints, PM tools, stakeholder coordination</li>
              <li><strong>Supply Chain Analytics</strong> — optimization & forecasting using data models</li>
            </ul>
          </CardContent>
        </Card>
        </motion.div>
      </div>

      <ProfessionalProfile />
    </motion.section>
  );
};
