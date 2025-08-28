import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 bg-white rounded-lg rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-white rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
        <div
          ref={ref}
          className={`fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="hero-content"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="block">Vamshi Krishna</span>
            <span className="block">Pullaiahgari</span>
          </h1>
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </div>
          <p className="text-xl md:text-2xl mb-8 font-light max-w-4xl mx-auto leading-relaxed">
            Full Stack Java Developer | AI & Cloud Enthusiast | Storytelling through Code & Travel
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => scrollToSection("#projects")}
              className="btn-primary hover-scale text-lg px-8 py-4"
              data-testid="button-view-work"
            >
              View My Work
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="btn-secondary hover-scale text-lg px-8 py-4"
              data-testid="button-contact"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
