import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const skillCategories = [
    {
      title: "Backend Development",
      color: "bg-teal text-white",
      skills: ["Java", "Spring Boot", "Microservices", "REST APIs", "MySQL"]
    },
    {
      title: "Frontend Development", 
      color: "bg-coral text-white",
      skills: ["React.js", "JavaScript", "HTML/CSS", "TypeScript", "Redux"]
    },
    {
      title: "Cloud & DevOps",
      color: "bg-purple text-white", 
      skills: ["AWS", "Docker", "Jenkins", "Kubernetes", "CI/CD"]
    },
    {
      title: "AI & Machine Learning",
      color: "bg-yellow text-gray-800",
      skills: ["TensorFlow", "Python", "Machine Learning", "Data Analytics", "AI Models"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="skills-header"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal">Technical Skills</h2>
          <p className="text-xl text-gray-600">Technologies I work with to bring ideas to life</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              data-testid={`skill-category-${categoryIndex}`}
            >
              <h3 className={`text-xl font-bold mb-6 text-center ${
                category.color.includes('yellow') ? 'text-gray-800' : 'text-teal'
              }`}>
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`skill-badge ${category.color} p-3 rounded-lg text-center font-medium cursor-pointer`}
                    data-testid={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
