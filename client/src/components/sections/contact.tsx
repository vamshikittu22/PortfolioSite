import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Instagram, Twitter } from "lucide-react";

export function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  const socialLinks = [
    { icon: Github, href: "https://github.com/vamshikittu22", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/vamshi-krishna-pullaiahgari/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/vamshi._.ki22u/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ki22u__", label: "Twitter" }
  ];

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="section-padding bg-gradient-to-r from-purple to-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={ref}
            className={`text-center text-white fade-in ${isVisible ? 'visible' : ''}`}
            data-testid="contact-content"
          >
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Amazing Together</h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Ready to collaborate on your next project? I'd love to hear about your ideas and discuss how we can bring them to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button 
                asChild
                className="bg-white text-teal px-8 py-4 text-lg font-bold hover-scale shadow-lg hover:bg-gray-100"
                data-testid="button-email"
              >
                <a href="mailto:vamshikrishna2297@gmail.com">
                  <Mail className="mr-3 w-5 h-5" />
                  Send Email
                </a>
              </Button>
              <Button 
                asChild
                className="bg-coral text-white px-8 py-4 text-lg font-bold hover-scale shadow-lg hover:bg-coral/90"
                data-testid="button-call"
              >
                <a href="tel:+19133267373">
                  <Phone className="mr-3 w-5 h-5" />
                  Call Me
                </a>
              </Button>
            </div>
            
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white hover:text-yellow text-3xl transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center" data-testid="footer">
            <p className="text-lg">&copy; 2025 Built by Vamshi Krishna Pullaiahgari</p>
            <p className="text-gray-400 mt-2">Crafted with passion, code, and a love for adventure</p>
          </div>
        </div>
      </footer>
    </>
  );
}
