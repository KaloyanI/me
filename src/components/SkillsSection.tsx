import { useState, useRef, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

// Skill data organized by categories
const skillsData = {
  "Frontend": [
    { name: "HTML5", level: 95, icon: "🔶" },
    { name: "CSS", level: 90, icon: "🔷" },
    { name: "Scss", level: 80, icon: "🔷" },
    { name: "JavaScript", level: 92, icon: "🟡" },
    { name: "jQuery", level: 88, icon: "🔵" },
    { name: "React", level: 85, icon: "🔵" },
    { name: "Tailwind CSS", level: 90, icon: "🔵" },
    { name: "Website Optimization", level: 85, icon: "🚀" },
    { name: "Debugging", level: 88, icon: "🔍" }
  ],
  "Backend": [
    { name: "PHP", level: 95, icon: "🐘" },
    { name: "Laravel", level: 92, icon: "🔴" },
    { name: "MySQL", level: 90, icon: "🐬" },
    { name: "PostgreSQL", level: 90, icon: "🐬" },
    { name: "MongoDB", level: 85, icon: "🍃" },
    { name: "SQL Server", level: 80, icon: "🔵" },
    { name: "Node.js", level: 75, icon: "🟢" },
    { name: "WordPress", level: 88, icon: "🔤" },
    { name: "Data Import/Export", level: 85, icon: "📊" },
    { name: "Backend Integration", level: 87, icon: "🔄" }
  ],
  "DevOps / Workflow": [
    { name: "Git / GitHub", level: 90, icon: "🐙" },
    { name: "Full-Stack Development", level: 88, icon: "🔄" },
    { name: "Project Management", level: 85, icon: "📋" },
    { name: "Data Automation", level: 80, icon: "⚙️" },
    { name: "DevOps", level: 78, icon: "🔧" },
    { name: "Debugging", level: 90, icon: "🐞" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "Figma", level: 80, icon: "🎨" },
    { name: "DigitalOcean", level: 75, icon: "🐳" },
    { name: "Redis", level: 75, icon: "🟢" },
    { name: "ElasticSearch", level: 75, icon: "🟢" },
    { name: "Cloudflare", level: 75, icon: "🟢" },
    { name: "AI Master - ChatGPT, Gemini, Claude, Cursor, Copilot", level: 90, icon: "🤖" }
  ]
};

const animationDelay = 50; // ms between each skill animation

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, Set<number>>>({
    "Frontend": new Set(),
    "Backend": new Set(),
    "DevOps / Workflow": new Set()
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useRef(false);
  
  useEffect(() => {
    // Observer to detect when section is visible
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      isVisible.current = entry.isIntersecting;
      
      if (entry.isIntersecting) {
        animateSkills(activeTab);
      }
    }, { threshold: 0.1 });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  // Animate skills when tab changes
  useEffect(() => {
    if (isVisible.current) {
      animateSkills(activeTab);
    }
  }, [activeTab]);
  
  const animateSkills = (category: string) => {
    const skills = skillsData[category as keyof typeof skillsData];
    let delay = 0;
    
    skills.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedSkills((prev) => {
          const updated = { ...prev };
          updated[category] = new Set(prev[category]).add(index);
          return updated;
        });
      }, delay);
      delay += animationDelay;
    });
  };
  
  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to build modern web applications.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="Frontend" onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="Frontend">Frontend</TabsTrigger>
              <TabsTrigger value="Backend">Backend</TabsTrigger>
              <TabsTrigger value="DevOps / Workflow">DevOps / Workflow</TabsTrigger>
            </TabsList>
            
            {Object.entries(skillsData).map(([category, skills]) => (
              <TabsContent key={category} value={category} className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <span className="mr-2">{skill.icon}</span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={animatedSkills[category].has(index) ? skill.level : 0} 
                      className={cn("h-2 transition-all duration-1000 ease-out")}
                    />
                  </div>
                ))}
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        {/* Tech logos cloud 
        <div className="mt-16 text-center">
          <h3 className="text-xl font-medium mb-6">Technologies I've worked with</h3>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 opacity-70">
            {[
              "Laravel", "PHP", "MySQL", "WordPress", "MongoDB", 
              "React", "JavaScript", "jQuery", "HTML5", "CSS",
              "Tailwind CSS", "TypeScript", "Git", "SCRUM", "Docker"
            ].map((tech) => (
              <div key={tech} className="px-4 py-2 bg-muted rounded-lg text-sm">
                {tech}
              </div>
            ))}
          </div>
        </div>
        */}
      </div>
    </section>
  );
};

export default SkillsSection;