import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Aug 2022 – May 2025",
      title: "Lead Undergraduate Research Assistant",
      subtitle: "McCombs Behavioral Research Lab",
      description:
        "Spearheaded development of a GPT-4-powered summarization platform, reducing research processing time by 85%. Partnered with the Dean of Research to scale across 200+ faculty publications, coordinating 40+ behavioral studies and 1,500+ survey responses.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    
    {
      year: "May 2024 – Aug 2024",
      title: "Supply Chain Analyst Intern",
      subtitle: "Aramco – Houston, TX",
      description:
        "Automated SAP requisition data extraction using SQL and Python, improving KPI reporting accuracy by 99%. Managed 125+ requisitions and issued $320K+ in purchase orders, reducing backlog by 40%.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jul 2023 – Dec 2023",
      title: "Teaching Assistant – Database Management",
      subtitle: "McCombs School of Business",
      description:
        "Advised 100+ students in relational database design and SQL. Delivered live demos in Oracle SQL, MongoDB, Azure, and Snowflake to accelerate student proficiency with enterprise-grade platforms.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "Jan 2023 – Dec 2023",
      title: "Student Technical Consultant",
      subtitle: "Technology Consulting Group",
      description:
        "Developed a Hyperledger Fabric blockchain simulation to automate emissions tracking in LNG supply chains. Authored strategic research on emissions monitoring technologies, influencing executive roadmap decisions.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="A growing path in AI, consulting, and technology innovation"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
