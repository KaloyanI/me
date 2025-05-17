import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, LinkedinIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Full Stack Developer';
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, fullText]);

  return (
    <section id="home" className="pt-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50 -z-10" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-[30%] -left-[10%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-[10%] right-[20%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center md:items-start">
        <div className="max-w-3xl text-center md:text-left mt-20 md:mt-10">
          <div className="inline-block px-3 py-1 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Welcome to my portfolio
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-primary">aveKOKO</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
            I'm a <span className="text-secondary relative">
              {typedText}
              <span className={cn(
                "inline-block w-0.5 h-6 ml-1 bg-secondary align-text-bottom",
                typedText.length === fullText.length ? "animate-pulse" : "animate-blink"
              )} />
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            I build responsive, accessible, and performant web applications with 
            modern technologies. Passionate about creating exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
            <Button size="lg">
              View Projects
            </Button>
            <Button size="lg" variant="outline">
              Download Resume
            </Button>
          </div>
          
          {/* Social links */}
          <div className="flex gap-4 justify-center md:justify-start mb-16">
            <a 
              href="https://github.com/kaloyanI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/10 p-2 rounded-full hover:bg-secondary/20 transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kaloyan-ivanov-b17833194/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-secondary/10 p-2 rounded-full hover:bg-secondary/20 transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
           
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#projects" aria-label="Scroll to projects">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;