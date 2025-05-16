import { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

// Sample project data
const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with cart functionality, user authentication, and payment processing.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: 'June 2024',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and deadlines with a drag-and-drop interface.',
    image: 'https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Laravel', 'Redis', 'GraphQL', 'React', 'AWS'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: 'April 2024',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A weather application showing current conditions and forecasts using data from multiple APIs.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['JavaScript', 'API Integration', 'Chart.js', 'CSS Grid'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: 'March 2024',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'An analytics dashboard for social media managers to track engagement across multiple platforms.',
    image: 'https://images.pexels.com/photos/3861959/pexels-photo-3861959.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Next.js', 'TypeScript', 'GraphQL', 'Material UI'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: 'January 2024',
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'A mobile-responsive application for tracking workouts, nutrition, and health metrics.',
    image: 'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React Native', 'Expo', 'AWS Amplify', 'DynamoDB'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: 'December 2023',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing my work, skills, and experiences with a modern design.',
    image: 'https://images.pexels.com/photos/2173508/pexels-photo-2173508.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    date: 'October 2023',
  },
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
                  <Calendar className="h-4 w-4 mr-1" />
                  {project.date}
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;