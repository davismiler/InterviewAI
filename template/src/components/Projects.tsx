import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard, { Project } from './ProjectCard';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import GlowingEffectDemo from "./ui/glowing-effect-demo";

// Sample projects data
const projectsData: Project[] = [
  {
    id: 1,
    title: "Portfolio with Admin Dashboard",
    description: "Full-stack portfolio with <span class='gradient-highlight'>integrated admin dashboard</span> for <span class='gradient-highlight'>seamless content management</span>.",
    caseStudy: {
      problem: "Maintaining content across multiple static pages required manual edits and slowed updates.",
      solution: "Built an admin dashboard with Next-Auth and a content API enabling non-technical edits and deploy previews.",
      result: "Reduced content update time from hours to <strong>minutes</strong> and empowered stakeholders to self-manage portfolio content."
    },
    image: "/lovable-uploads/Portfolio.png",
    tags: ["React", "Next.js", "Tailwind CSS", "JS", "Node.js", "Express.js", "Next-Auth", "Context API", "Mongo"],
    demoUrl: "https://kalpsenghani1.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/portfolio-admin-dashboard"
  },
  {
    id: 2,
    title: "Employee Management System",
    description: "Comprehensive <span class='gradient-highlight'>Angular & GraphQL</span> solution with <span class='gradient-highlight'>complete CRUD operations</span>.",
    caseStudy: {
      problem: "Manual HR workflows led to lost requests and bloated spreadsheets.",
      solution: "Delivered an Angular frontend with GraphQL endpoints and secure file uploads to centralize employee data.",
      result: "Improved processing time by <strong>40%</strong> and provided audit-ready records for HR."
    },
    image: "/lovable-uploads/Ems.png",
    tags: ["Angular", "Node.js", "GraphQL", "Authentication", "Apollo Client","Express.js"],
    demoUrl: "https://emp-hub.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/Employee-Management-System"
  },
  {
    id: 3,
    title: "SpaceX Launch Tracker",
    description: "Real-time <span class='gradient-highlight'>SpaceX API integration</span> with <span class='gradient-highlight'>advanced filtering</span>.",
    caseStudy: {
      problem: "SpaceX launch data was scattered across endpoints making comparisons difficult.",
      solution: "Built a unified dashboard with normalized data, advanced filters and client-side caching.",
      result: "Enabled analysts to query and compare missions with <strong>sub-second</strong> UX for common filters."
    },
    image: "/lovable-uploads/Space-X.png",
    tags: ["Angular", "SpaceX API", "TypeScript", "Tailwind"],
    demoUrl: "https://spacexlabtest2.netlify.app/",
    githubUrl: "https://github.com/kalpsenghani/SpaceX_API"
  },
  {
    id: 4,
    title: "Crypto Analytics Dashboard",
    description: "Full-stack <span class='gradient-highlight'>real-time crypto tracking</span> with <span class='gradient-highlight'>portfolio management</span>.",
    caseStudy: {
      problem: "Users struggled to track portfolio health across exchanges.",
      solution: "Implemented real-time price feeds, aggregated holdings, and alerting with WebSockets.",
      result: "Users retained better portfolio visibility and reported faster decision-making."
    },
    image: "/lovable-uploads/crypto.png",
    tags: ["React.js", "Tailwind CSS", "Recharts", "Axios", "SWR", "Zustand", "FastAPI", "MongoDB", "Python"],
    demoUrl: "https://crypto-analytics-frontend.onrender.com/",
    githubUrl: "https://github.com/kalpsenghani/crypto-analytics-dashboard"
  },
  {
    id: 5,
    title: "Pomodoro Timer",
    description: "Feature-rich <span class='gradient-highlight'>Pomodoro productivity suite</span> with <span class='gradient-highlight'>analytics dashboard</span>, <span class='gradient-highlight'>cross-device sync</span>, and <span class='gradient-highlight'>team focus modes</span>—built as a full project with persistence and insights.",
    image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Analytics", "Socket.IO"],
    demoUrl: "https://pomo-focus-eta.vercel.app/",
    githubUrl: "https://github.com/kalpsenghani/PomoFocus"
  },
  {
    id: 6,
    title: "YouTube Short VS Long Analyzer",
    description: "Advanced <span class='gradient-highlight'>analytics platform</span> comparing <span class='gradient-highlight'>YouTube performance metrics</span> with <span class='gradient-highlight'>interactive visualizations</span> and <span class='gradient-highlight'>actionable insights</span>.",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Radix UI", "React Query", "React Router", "Framer Motion", "Recharts"],
    demoUrl: "https://yt-analyzer-kappa.vercel.app/",
    githubUrl: "https://github.com/kalpsenghani/YT_Analyzer",
    status: "In Progress",
    statusColor: "",
    statusGlow: "in-progress"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      <h2 className="section-title mb-8">Projects</h2>
      
      {/* Project Description */}
      <motion.div 
        className="text-center mb-12 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className="text-lg text-gray-300 leading-relaxed">
          Explore my collection of innovative projects that showcase my expertise in AI, web development, and software engineering. 
          Each project represents a unique solution to real-world challenges, combining cutting-edge technologies with practical applications.
        </p>
      </motion.div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Micro Projects Section */}
      <div className="mt-16">
        <h3 className="section-title mb-8">Micro Projects</h3>
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default Projects;
