import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { ExternalLink, Calendar, User } from "lucide-react";
import { SiInstagram, SiX, SiLinkedin } from "react-icons/si";

export function HighlightsSection() {
  const { ref, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      title: "Coorg – 3-Year-Old Dream",
      excerpt: "A journey to Coorg, fulfilling a long-held dream filled with adventure and unforgettable experiences.",
      link: "https://travelsofvk.blogspot.com/2020/04/coorg-3-year-old-dream.html",
      date: "April 2020"
    },
    {
      title: "My Travel Story – Rishikesh", 
      excerpt: "A solo trip to Rishikesh, exploring the spiritual and adventurous facets of the city.",
      link: "https://travelsofvk.blogspot.com/2019/09/my-travel-story-rishikesh.html",
      date: "September 2019"
    }
  ];

  const socialHighlights = [
    {
      platform: "Instagram",
      icon: SiInstagram,
      color: "from-pink-500 to-purple-600",
      content: "Completed India's highest bungee jump at Jumpin Heights! 🎯 Sometimes you need to take the leap to see how high you can soar.",
      engagement: "142 likes",
      handle: "@vamshi._.ki22u"
    },
    {
      platform: "Twitter", 
      icon: SiX,
      color: "from-blue-400 to-blue-600",
      content: "Just optimized our microservices architecture - reduced response time by 40%! Love when performance improvements directly impact user experience 🚀 #SpringBoot #Performance",
      engagement: "28 likes • 5 retweets",
      handle: "@ki22u__"
    },
    {
      platform: "LinkedIn",
      icon: SiLinkedin, 
      color: "from-blue-600 to-blue-800",
      content: "Reflecting on 4+ years in enterprise development: from debugging legacy systems to architecting cloud solutions. The journey of continuous learning never stops.",
      engagement: "85 reactions • 12 comments",
      handle: "Vamshi Krishna Pullaiahgari"
    }
  ];

  return (
    <section id="highlights" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="highlights-content"
        >
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Journey & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stories from my travels, thoughts on technology, and moments that shape my perspective
            </p>
          </div>

          {/* Blog Highlights - Swiss Grid Layout */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
              Latest from My Blog
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                  data-testid={`blog-card-${index}`}
                >
                  <div className="flex items-center gap-3 text-gray-500 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-teal font-semibold hover:text-teal/80 transition-colors"
                    data-testid={`link-blog-${index}`}
                  >
                    Read Full Story
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Highlights - Modular Cards */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-12 text-center">
              Social Moments
            </h3>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {socialHighlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl p-6 text-white hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
                    data-testid={`social-card-${index}`}
                  >
                    {/* Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                    
                    {/* Content */}
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className="w-6 h-6" />
                        <div>
                          <div className="font-semibold">{item.platform}</div>
                          <div className="text-sm opacity-90">{item.handle}</div>
                        </div>
                      </div>
                      
                      <p className="text-sm leading-relaxed mb-4 opacity-95">
                        {item.content}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs opacity-80">
                        <User className="w-3 h-3" />
                        <span>{item.engagement}</span>
                      </div>
                    </div>
                    
                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}