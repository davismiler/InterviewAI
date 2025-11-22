import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  year: string;
  title: string;
  description: string;
  type: 'education' | 'experience' | 'award';
}

const timelineData: TimelineItem[] = [
  {
    id: 1,
    year: "April 2025 – Present",
    title: "YouTube Analytics SaaS – Advanced Creator Intelligence Dashboard",
    description: `Will architect and launch a scalable SaaS platform for YouTube creators, targeting 10,000+ concurrent users with high-availability APIs. Will integrate YouTube Data API v3 to deliver real-time analytics and actionable insights with sub-200ms latency. Will enable modular, containerized deployments and interactive dashboards, aiming for a 40%+ increase in user engagement and robust multi-tier access control.`,
    type: "experience"
  },
  {
    id: 2,
    year: "Apr. 2023 – Apr. 2025",
    title: "Information Technology Support Specialist, George Brown College, Toronto, ON",
    description: `Provided Tier 1/2 support for 1,000+ students and staff, maintaining campus-wide Windows/macOS systems and networked devices. Achieved a 95% satisfaction rate by resolving complex technical issues and automating health checks, reducing printer downtime by 30%. Managed asset tracking, software deployment, and IT documentation to optimize workflow efficiency.`,
    type: "experience"
  },
  {
    id: 3,
    year: "2022 - 2025",
    title: "Advanced Diploma in Computer Programming & Analysis, George Brown College",
    description: "Focused on full stack development, AI, cloud computing, and mobile app development. Built multiple academic and personal projects using modern technologies.",
    type: "education"
  }
];

const About = () => {
  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tech Stack & Skills */}
        <div className="lg:col-span-1">
          <Card className="h-full glass-card rounded-xl border-muted">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Tech Arsenal</h3>
              
              {/* Skill Categories */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Mastery</h4>
                  <div className="space-y-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind CSS'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${85 + (index * 3)}%`,
                              animationDelay: `${index * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                  <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">Backend Expertise</h4>
                  <div className="space-y-2">
                    {['Node.js', 'Python', 'Java', 'GraphQL'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${80 + (index * 4)}%`,
                              animationDelay: `${(index + 4) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                  <div>
                  <h4 className="text-sm font-semibold text-blue-400 mb-3">AI & Cloud</h4>
                  <div className="space-y-2">
                    {['OpenAI GPT-4', 'AWS', 'Docker', 'MongoDB'].map((skill, index) => (
                      <div key={skill} className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{skill}</span>
                        <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all duration-1000 ease-out"
                            style={{ 
                              width: `${75 + (index * 5)}%`,
                              animationDelay: `${(index + 8) * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-semibold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text">Certifications</h3>
                <div className="flex flex-col gap-3">
                  <a href="https://www.coursera.org/account/accomplishments/specialization/LI5Q0UI157UD?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition group">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" alt="Google Data Analytics" className="w-6 h-6 group-hover:scale-110 transition" />
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">Google Data Analytics</div>
                      <div className="text-xs text-muted-foreground">Professional Certificate</div>
                    </div>
                  </a>
                  <a href="https://www.credly.com/badges/6366a28e-790a-4f83-9825-308fd4b1ed07/public_url" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg bg-black/30 border border-blue-500/20 hover:bg-blue-900/20 transition group">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ibm/ibm-original.svg" alt="IBM Data Science" className="w-6 h-6 group-hover:scale-110 transition" />
                    <div>
                      <div className="font-semibold text-blue-400 text-sm">IBM Data Science</div>
                      <div className="text-xs text-muted-foreground">Professional Certificate</div>
                  </div>
                </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Timeline */}
        <div className="lg:col-span-2">
          <div className="relative">
            <div className="absolute left-6 top-5 bottom-5 w-1 bg-gradient-to-b from-blue-400 to-purple-500 shadow-lg rounded-full"></div>
            
            <div className="space-y-16">
              {timelineData.map((item, idx) => (
                <div key={item.id} className="relative pl-16 flex items-start group">
                  <div className="absolute left-0 top-1 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center rounded-full border-4 border-background z-10 shadow-lg group-hover:scale-110 transition">
                    {item.type === 'education' ? (
                      <GraduationIcon />
                    ) : item.type === 'experience' ? (
                      <WorkIcon />
                    ) : (
                      <AwardIcon />
                    )}
                  </div>
                  <Card className="glass-card rounded-xl border-muted shadow-xl group-hover:border-blue-400 transition-all w-full">
                    <CardContent className="p-6">
                      <div className="text-sm font-medium text-muted-foreground mb-1">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WorkIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
    />
  </svg>
);

const GraduationIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M19.916 4.626a.75.75 0 01-.025 1.042l-7.25 6.5a.75.75 0 01-1 0l-7.25-6.5a.75.75 0 011.025-1.042L12 10.168l6.591-5.584a.75.75 0 01.975.042z" 
    />
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M3.75 5.25h1.5M20.25 5.25h-1.5M3.75 18.75h1.5M20.25 18.75h-1.5M9 18.75v-4.5M12 18.75v-4.5M15 18.75v-4.5M1.5 12.75h21" 
    />
  </svg>
);

const AwardIcon = () => (
  <svg 
    className="w-5 h-5 text-white" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
    />
  </svg>
);

export default About;
