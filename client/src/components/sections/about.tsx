import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, User } from "lucide-react";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vamshikrishna2297@gmail.com",
      link: "mailto:vamshikrishna2297@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 913-326-7373",
      link: "tel:+19133267373"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Overland Park, Kansas",
      link: null
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/vamshikittu22",
      link: "https://github.com/vamshikittu22"
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            ref={ref}
            className={`fade-in ${isVisible ? 'visible' : ''}`}
            data-testid="about-content"
          >
            <h2 className="text-4xl font-bold mb-8 text-teal">About Me</h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Full Stack Java Developer with 4.5+ years building scalable, cloud-native apps using Java, Spring Boot, React, AI-driven solutions, microservices, cloud infrastructure, and agile practices.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gray-50 p-6 hover:shadow-md transition-shadow">
                  <info.icon className="text-2xl mb-3 text-coral w-8 h-8" />
                  <h4 className="font-semibold mb-2" data-testid={`contact-${info.title.toLowerCase()}-title`}>
                    {info.title}
                  </h4>
                  {info.link ? (
                    <a
                      href={info.link}
                      className="text-gray-600 hover:text-teal transition-colors"
                      data-testid={`contact-${info.title.toLowerCase()}-link`}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-gray-600" data-testid={`contact-${info.title.toLowerCase()}-value`}>
                      {info.value}
                    </p>
                  )}
                </Card>
              ))}
            </div>
          </div>
          
          <div className={`fade-in ${isVisible ? 'visible' : ''}`} data-testid="about-visual">
            <Card className="bg-gradient-to-br from-teal to-coral p-8 text-center text-white">
              <div className="w-48 h-48 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <User className="text-6xl text-white/80 w-24 h-24" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Ready to Create Amazing Things</h3>
              <p className="text-lg opacity-90">Let's build the future together</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
