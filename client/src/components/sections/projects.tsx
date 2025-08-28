import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Calendar, MapPin, Github } from "lucide-react";

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "Movie Booking System",
      description: "PHP, JavaScript, MySQL system with real-time seat selection and age-based pricing algorithms.",
      icon: Film,
      gradient: "from-teal to-coral",
      technologies: [
        { name: "PHP", color: "bg-teal text-white" },
        { name: "JavaScript", color: "bg-coral text-white" },
        { name: "MySQL", color: "bg-purple text-white" }
      ],
      buttonClass: "btn-primary"
    },
    {
      title: "Event Management System", 
      description: "Full-featured event planning platform built with .NET Core MVC and C# with comprehensive management tools.",
      icon: Calendar,
      gradient: "from-coral to-yellow",
      technologies: [
        { name: ".NET Core", color: "bg-coral text-white" },
        { name: "C#", color: "bg-purple text-white" },
        { name: "MVC", color: "bg-teal text-white" }
      ],
      buttonClass: "btn-secondary"
    },
    {
      title: "Travel Planning App",
      description: "React.js frontend with PHP/MySQL backend for comprehensive travel planning and itinerary management.",
      icon: MapPin,
      gradient: "from-purple to-teal",
      technologies: [
        { name: "React.js", color: "bg-teal text-white" },
        { name: "PHP", color: "bg-coral text-white" },
        { name: "MySQL", color: "bg-purple text-white" }
      ],
      buttonClass: "btn-primary"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="projects-header"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal">Featured Projects</h2>
          <p className="text-xl text-gray-600">Some of my recent work and contributions</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`project-${index}`}
            >
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden hover-scale cursor-pointer">
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                  <project.icon className="text-6xl text-white w-16 h-16" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-teal">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`${tech.color} px-3 py-1 rounded-full text-sm font-medium`}
                        data-testid={`project-${index}-tech-${techIndex}`}
                      >
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <Button 
                    className={`${project.buttonClass} text-sm`}
                    data-testid={`project-${index}-button`}
                  >
                    View Project
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 fade-in ${isVisible ? 'visible' : ''}`}>
          <Button 
            asChild
            className="btn-primary hover-scale text-lg px-8 py-4"
            data-testid="button-github-projects"
          >
            <a href="https://github.com/vamshikittu22" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 w-5 h-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
