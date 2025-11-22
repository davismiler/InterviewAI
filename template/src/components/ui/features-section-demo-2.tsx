import React from 'react';

export default function FeaturesSectionDemo() {
  const features = [
    {
      title: "Full Stack Development",
      description: "Building complete web applications with React, Node.js, and TypeScript for modern, scalable solutions.",
    },
    {
      title: "AI & Machine Learning",
      description: "Creating AI-powered applications and automation workflows using OpenAI, Python, and advanced ML techniques.",
    },
    {
      title: "Cloud Architecture",
      description: "Designing scalable cloud solutions with AWS, Docker, and microservices for high-performance applications.",
    },
    {
      title: "Database Design",
      description: "Expert in SQL and NoSQL databases, data modeling, and building robust data-driven applications.",
    },
    {
      title: "Responsive Design",
      description: "Creating beautiful, accessible user interfaces that work seamlessly across all devices and platforms.",
    },
    {
      title: "Performance Optimization",
      description: "Optimizing applications for speed, efficiency, and exceptional user experience through advanced techniques.",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-8 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index: number;
}) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="glass">
          <div className="content">
            <span className="title">{title}</span>
            <span className="text">{description}</span>
          </div>
        </div>
        
        <div className="logo">
          <div className="circle circle1"></div>
          <div className="circle circle2"></div>
          <div className="circle circle3"></div>
          <div className="circle circle4"></div>
          <div className="circle circle5">
            <svg className="svg" viewBox="0 0 24 24">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" fill="currentColor"/>
              <path d="M2 12L12 17L22 12" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}; 