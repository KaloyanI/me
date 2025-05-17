import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'MegaParts',
    description: 'E-commerce platform for auto parts with extensive inventory management, user accounts, and online purchasing capabilities.',
    image: '/sites/megaparts.bg.png',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://megaparts.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 2,
    title: 'MegaBitak',
    description: 'Online marketplace for used items with user listings, search functionality, and messaging system.',
    image: '/sites/megabitak.bg.png',
    tags: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    liveUrl: 'https://megabitak.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 3,
    title: 'MegaCars',
    description: 'Vehicle marketplace with advanced search filters, listing management, and dealer integration.',
    image: '/sites/megacars.bg.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'REST API'],
    liveUrl: 'https://megacars.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 4,
    title: 'Accounts MegaParts',
    description: 'User account management system for MegaParts with authentication, profiles, and order history.',
    image: '/sites/accounts.megaparts.bg.png',
    tags: ['PHP', 'MySQL', 'JavaScript', 'JWT'],
    liveUrl: 'https://accounts.megaparts.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 5,
    title: 'Godzila',
    description: 'E-commerce website for electronics and tech gadgets with advanced filtering and recommendation system.',
    image: '/sites/godzila.bg.png',
    tags: ['Laravel', 'Vue.js', 'MySQL', 'Redis'],
    liveUrl: 'https://godzila.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 6,
    title: 'MyFlat',
    description: 'Real estate platform for listing, searching, and booking properties with interactive maps and filters.',
    image: '/sites/myflat.bg.png',
    tags: ['PHP', 'MySQL', 'JavaScript', 'Google Maps API'],
    liveUrl: 'https://myflat.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 7,
    title: 'KeyBind',
    description: 'Gaming platform with user profiles, game integration, and performance tracking features.',
    image: '/sites/keybind.gg.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://keybind.gg',
    repoUrl: 'https://github.com',
  },
  {
    id: 8,
    title: 'LabCoin App',
    description: 'Digital wallet and cryptocurrency management application with secure transactions and real-time updates.',
    image: '/sites/app.labcoin.bg.png',
    tags: ['React', 'Node.js', 'Blockchain', 'API Integration'],
    liveUrl: 'https://app.labcoin.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 9,
    title: 'JUP',
    description: 'Educational platform for schools and universities with course management and student tracking capabilities.',
    image: '/sites/jup.bg.png',
    tags: ['Laravel', 'MySQL', 'JavaScript', 'WebSockets'],
    liveUrl: 'https://jup.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 10,
    title: 'Catering CCC',
    description: 'Food ordering and catering management system with menu customization and event planning features.',
    image: '/sites/catering.ccc.bg.png',
    tags: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
    liveUrl: 'https://catering.ccc.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 11,
    title: 'P2Prevention',
    description: 'Healthcare platform focused on preventive medicine with patient records and appointment scheduling.',
    image: '/sites/p2prevention.bg.png',
    tags: ['Laravel', 'MySQL', 'Vue.js', 'API Integration'],
    liveUrl: 'https://p2prevention.bg',
    repoUrl: 'https://github.com',
  },
  {
    id: 12,
    title: 'BGDetailing',
    description: 'Automotive detailing service website with booking system, gallery, and service management.',
    image: '/sites/bgdetailing.com.png',
    tags: ['WordPress', 'PHP', 'JavaScript', 'WooCommerce'],
    liveUrl: 'https://bgdetailing.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 13,
    title: 'Ideogen',
    description: 'Creative agency website showcasing portfolio, services, and client testimonials with modern design.',
    image: '/sites/ideogen.com.png',
    tags: ['React', 'Next.js', 'GSAP', 'Tailwind CSS'],
    liveUrl: 'https://ideogen.com',
    repoUrl: 'https://github.com',
  },
];

// Website list data
const websites = [
  { id: 1, name: 'megaparts.bg', url: 'https://megaparts.bg' },
  { id: 2, name: 'megabitak.bg', url: 'https://megabitak.bg' },
  { id: 3, name: 'accounts.megaparts.bg', url: 'https://accounts.megaparts.bg' },
  { id: 4, name: 'app.labcoin.bg', url: 'https://app.labcoin.bg' },
  { id: 5, name: 'catering.ccc.bg', url: 'https://catering.ccc.bg' },
  { id: 6, name: 'godzila.bg', url: 'https://godzila.bg' },
  { id: 7, name: 'keybind.gg', url: 'https://keybind.gg' },
  { id: 8, name: 'myflat.bg', url: 'https://myflat.bg' },
  { id: 9, name: 'megacars.bg', url: 'https://megacars.bg' },
  { id: 10, name: 'p2prevention.bg', url: 'https://p2prevention.bg' },
  { id: 11, name: 'ideogen.com', url: 'https://ideogen.com' },
  { id: 12, name: 'jup.bg', url: 'https://jup.bg' },
  { id: 13, name: 'bgdetailing.com', url: 'https://bgdetailing.com' },
];

// Project filter categories
const categories = ['All', 'React', 'JavaScript', 'TypeScript', 'Next.js', 'Tailwind CSS'];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my recent work and discover the projects I've built using various technologies and frameworks.
          </p>
        </div>
        
        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeFilter === category 
                  ? "bg-primary text-primary-foreground" 
                  : "bg-secondary/50 text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:shadow-primary/5 hover:translate-y-[-5px]"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  {/*
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
                  */}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="rounded-full">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {/*}
              <CardFooter className="flex justify-between gap-4">
                <a 
                  href={project.repoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4 mr-1" /> Code
                </a>
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-1" /> Live Demo
                </a>
              </CardFooter> */}
            </Card>
          ))}
        </div>

        {/* Websites List Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">Websites I've Contributed To</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4 max-w-4xl mx-auto">
            {websites.map((site) => (
              <li key={site.id} className="text-center">
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-muted-foreground hover:text-primary hover:underline transition-colors"
                >
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground max-w-3xl mx-auto mt-8 text-sm md:text-base">
            In addition to these public-facing websites, I have developed numerous private CRM and client business management systems, focusing on tailored solutions to enhance operational efficiency and data management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;