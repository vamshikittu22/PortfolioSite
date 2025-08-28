import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import { TrendingUp, Rocket, Shield, Brain, Settings, Gauge, Bot, Search, Plug, MessageCircle } from "lucide-react";

export function ExperienceSection() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences = [
    {
      company: "AI Labs Web LLC",
      position: "Full Stack Developer",
      period: "Aug 2024 – Present",
      color: "border-teal",
      dotColor: "bg-teal",
      side: "right",
      achievements: [
        { icon: TrendingUp, text: "Reduced compliance audit time by 40% via secure REST APIs" },
        { icon: Rocket, text: "Improved dashboard response times by 60% using React optimizations" },
        { icon: Shield, text: "Cut deployment errors by 50% and downtime by 75%" },
        { icon: Brain, text: "Built AI fraud detection models with TensorFlow – 35% more accurate" }
      ]
    },
    {
      company: "Mphasis",
      position: "Software Engineer", 
      period: "Feb 2020 – Aug 2023",
      color: "border-coral",
      dotColor: "bg-coral",
      side: "left",
      achievements: [
        { icon: Settings, text: "Built microservices for banking systems" },
        { icon: Gauge, text: "Improved frontend load times by 30%" },
        { icon: Bot, text: "Automated workflows – saved 20-40% effort" },
        { icon: Search, text: "Improved anomaly detection accuracy by 35-40%" }
      ]
    },
    {
      company: "Cognizant",
      position: "Software Developer Intern",
      period: "Aug 2019 – Feb 2020", 
      color: "border-purple",
      dotColor: "bg-purple",
      side: "right",
      achievements: [
        { icon: Plug, text: "Developed REST APIs with Spring Boot" },
        { icon: MessageCircle, text: "Built real-time messaging with WebSocket + Redis" }
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="experience-header"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal">Professional Experience</h2>
          <p className="text-xl text-gray-600">My journey in software development</p>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-1 bg-gradient-to-b from-teal to-coral"></div>
          
          {/* Experience Items */}
          <div className="space-y-20">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`timeline-card flex items-center fade-in ${isVisible ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
                data-testid={`experience-${index}`}
              >
                {exp.side === "right" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <Card className={`bg-white p-8 shadow-lg border-l-4 ${exp.color}`}>
                        <h3 className="text-2xl font-bold mb-2 text-teal">{exp.company}</h3>
                        <p className="text-gray-600 mb-4 font-medium">{exp.position} | {exp.period}</p>
                        <ul className="space-y-3 text-gray-700">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center justify-end">
                              <span>{achievement.text}</span>
                              <achievement.icon className="ml-3 text-coral w-5 h-5" />
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${exp.dotColor} rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="w-1/2 pl-8"></div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8"></div>
                    <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${exp.dotColor} rounded-full border-4 border-white shadow-lg`}></div>
                    <div className="w-1/2 pl-8">
                      <Card className={`bg-white p-8 shadow-lg border-l-4 ${exp.color}`}>
                        <h3 className="text-2xl font-bold mb-2 text-coral">{exp.company}</h3>
                        <p className="text-gray-600 mb-4 font-medium">{exp.position} | {exp.period}</p>
                        <ul className="space-y-3 text-gray-700">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-center">
                              <achievement.icon className="mr-3 text-teal w-5 h-5" />
                              <span>{achievement.text}</span>
                            </li>
                          ))}
                        </ul>
                      </Card>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
