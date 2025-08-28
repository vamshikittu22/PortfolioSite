import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import { Trophy, Umbrella } from "lucide-react";

export function EducationSection() {
  const { ref, isVisible } = useScrollAnimation();

  const education = [
    {
      degree: "M.Sc. in Information Technology",
      institution: "University of Central Missouri",
      description: "Advanced studies in software engineering, AI, and cloud computing",
      gradient: "from-teal to-coral"
    },
    {
      degree: "B.Tech in Computer Science", 
      institution: "JNTUH, Hyderabad",
      description: "Foundation in computer science fundamentals and programming",
      gradient: "from-purple to-yellow"
    }
  ];

  const awards = [
    {
      title: "Top Performer",
      organization: "Mphasis • 2022",
      description: "Recognized for outstanding contributions to microservices architecture and performance optimization",
      icon: Trophy,
      borderColor: "border-coral",
      bgColor: "bg-yellow"
    },
    {
      title: "Adventure Achievement",
      organization: "Jumpin Heights • 2018", 
      description: "Completed the highest bungee jump in India, showcasing courage and determination",
      icon: Umbrella,
      borderColor: "border-teal",
      bgColor: "bg-yellow"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Education */}
          <div 
            ref={ref}
            className={`fade-in ${isVisible ? 'visible' : ''}`}
            data-testid="education-section"
          >
            <h2 className="text-3xl font-bold mb-8 text-teal">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className={`bg-gradient-to-r ${edu.gradient} p-6 text-white`}
                  data-testid={`education-${index}`}
                >
                  <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                  <p className="text-lg mb-2">{edu.institution}</p>
                  <p className="opacity-90">{edu.description}</p>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Awards & Highlights */}
          <div 
            className={`fade-in ${isVisible ? 'visible' : ''}`}
            data-testid="awards-section"
          >
            <h2 className="text-3xl font-bold mb-8 text-coral">Awards & Highlights</h2>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <Card 
                  key={index}
                  className={`bg-white border-l-4 ${award.borderColor} p-6 shadow-lg hover:shadow-xl transition-shadow`}
                  data-testid={`award-${index}`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${award.bgColor} rounded-full flex items-center justify-center mr-4`}>
                      <award.icon className="text-2xl text-gray-800 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{award.title}</h3>
                      <p className="text-gray-600">{award.organization}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{award.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
