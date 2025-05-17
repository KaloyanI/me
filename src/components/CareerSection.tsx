import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

const CareerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const careerStages = [
    {
      title: "CMS Development",
      period: "Early Career",
      description: "Built and customized e-commerce sites, business pages, and content-driven platforms using OpenCart, WordPress, and Joomla. Gained solid foundation in PHP, templating systems, and CMS customization."
    },
    {
      title: "Custom CMS Solutions",
      period: "Mid Career",
      description: "Transitioned into building custom CMS solutions for complex and scalable needs, delivering intuitive content management tools tailored to unique client workflows. Architected modular systems and integrated advanced permission controls."
    },
    {
      title: "Team Leadership",
      period: "Advanced Career",
      description: "Expanded into team leadership, mentoring developers and overseeing full project lifecycles. Built a revenue-generating system, led multi-site platform development with shared user access, created a custom auction platform, and engineered automation bots."
    },
    {
      title: "Current Focus",
      period: "Present",
      description: "Combine deep technical expertise with product-driven thinking and a strategic use of AI to build systems that are scalable, resilient, and aligned with real business outcomes. I integrate AI tools across the development lifecycle — from rapid prototyping and automation to intelligent debugging and optimization — to accelerate delivery, reduce overhead, and build smarter, future-ready solutions."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="career" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Career Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional evolution as a developer and team leader in the web development industry.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-card border-none shadow-lg">
            <CardContent className="p-6 md:p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Career Summary</h3>
                <p className="text-muted-foreground">
                  I began my career as a web developer working with well-known CMS platforms such as OpenCart, WordPress, and Joomla, where I built and customized e-commerce sites, business pages, and content-driven platforms. This phase gave me a solid foundation in PHP, templating systems, and CMS customization — from developing themes and templates to extending functionality with custom plugins and modules.
                </p>
                <p className="text-muted-foreground mt-4">
                  As my skills matured, I transitioned into building custom CMS solutions for more complex and scalable needs, delivering intuitive content management tools tailored to unique client workflows. I played a key role in architecting modular systems, integrating advanced permission controls, and ensuring maintainability across a broad set of projects.
                </p>
                <p className="text-muted-foreground mt-4">
                  Over time, I expanded into team leadership, mentoring developers and overseeing full project lifecycles. I built a revenue-generating system, led the development of a multi-site platform with shared user access, created a custom auction platform for the automotive sector, and engineered automation bots to solve operational bottlenecks in real time.
                </p>
                <p className="text-muted-foreground mt-4">
                  Today, I combine my deep technical experience with product-focused thinking to build systems that are not only functional but also scalable, reliable, and business-driven.
                </p>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold mb-4">Career Progression</h3>
                {careerStages.map((stage, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="border-l-4 border-primary pl-4 pb-2"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-1">
                      <h4 className="text-lg font-medium">{stage.title}</h4>
                      <span className="text-sm text-muted-foreground">{stage.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{stage.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareerSection; 