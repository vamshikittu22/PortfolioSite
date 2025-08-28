import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink } from "lucide-react";

export function BlogSection() {
  const { ref, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      title: "Coorg – 3-Year-Old Dream",
      excerpt: "A trip is just a ride for some people, but for me, it is an emotional memory that can't be forgotten ever again. Finally, an old dream came true...",
      category: "Travel",
      categoryColor: "bg-yellow text-gray-800",
      date: "April 2020",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      link: "https://travelsofvk.blogspot.com/2020/04/coorg-3-year-old-dream.html"
    },
    {
      title: "My Travel Story – Rishikesh",
      excerpt: "When you look back in your life, all you see is memories, life goes on, but the memories never fade. A solo trip exploring the spiritual and adventurous facets of Rishikesh...",
      category: "Adventure", 
      categoryColor: "bg-teal text-white",
      date: "September 2019",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      link: "https://travelsofvk.blogspot.com/2019/09/my-travel-story-rishikesh.html"
    },
    {
      title: "More Travel Stories",
      excerpt: "Discover more adventures, insights, and memorable journeys from across different destinations and experiences...",
      category: "Explore",
      categoryColor: "bg-coral text-white", 
      date: "Ongoing",
      image: "https://images.unsplash.com/photo-1582721478779-0ae163c05a60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      link: "https://travelsofvk.blogspot.com"
    }
  ];

  return (
    <section id="blog" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="blog-header"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal">Journey & Insights</h2>
          <p className="text-xl text-gray-600">
            Stories from my travels and tech adventures at{" "}
            <a 
              href="https://travelsofvk.blogspot.com" 
              className="text-coral hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="blog-link"
            >
              travelsofvk.blogspot.com
            </a>
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`blog-post-${index}`}
            >
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                data-testid={`blog-post-${index}-link`}
              >
                <Card className="social-card bg-white shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <span className={`${post.categoryColor} px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block`}>
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mb-3 text-teal">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="mr-2 w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </Card>
              </a>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 fade-in ${isVisible ? 'visible' : ''}`}>
          <Button 
            asChild
            className="btn-secondary hover-scale text-lg px-8 py-4"
            data-testid="button-blog-more"
          >
            <a href="https://travelsofvk.blogspot.com" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 w-5 h-5" />
              Read More on My Blog
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
