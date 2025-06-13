import { Code2, Github, LinkedinIcon, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 text-xl font-bold mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span>aveKOKO</span>
            </div>
            <p className="text-muted-foreground max-w-md">
              A passionate frontend developer crafting beautiful and functional web experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="font-semibold mb-4">Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://github.com/KaloyanI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    GitHub <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/kaloyan-ivanov-b17833194/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    LinkedIn <ArrowUpRight className="h-3 w-3" />
                  </a>
                </li>
               
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {currentYear} aveKOKO Dev. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/KaloyanI" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/kaloyan-ivanov-b17833194/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;