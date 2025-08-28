import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Card } from "@/components/ui/card";
import { Instagram, Twitter, Linkedin } from "lucide-react";

export function SocialSection() {
  const { ref, isVisible } = useScrollAnimation();

  const socialPlatforms = [
    {
      platform: "Instagram",
      handle: "@vamshi._.ki22u",
      description: "Travel & Life Moments",
      icon: Instagram,
      iconBg: "bg-gradient-to-r from-purple-500 to-pink-500",
      link: "https://instagram.com/vamshi._.ki22u",
      images: [
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
        "https://images.unsplash.com/photo-1585866741682-0e1d3e97abaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200", 
        "https://images.unsplash.com/photo-1563349937-2c82dea72b53?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200"
      ],
      posts: [
        {
          caption: "Just completed the highest bungee jump in India at Jumpin Heights! Sometimes you need to leap to see how far you can soar 🪂 #BungeeJump #Adventure",
          likes: "127 likes",
          time: "3 days ago"
        },
        {
          caption: "Coorg memories flooding back - a 3-year-old dream finally came true! The journey was worth every moment ☕🌄 #Coorg #TravelDiaries",
          likes: "89 likes", 
          time: "1 week ago"
        }
      ]
    },
    {
      platform: "Twitter",
      handle: "@ki22u__",
      description: "Tech Thoughts & Updates", 
      icon: Twitter,
      iconBg: "bg-blue-500",
      link: "https://x.com/ki22u__",
      tweets: [
        {
          text: "Just deployed a new microservice with 50% faster response times! Love optimizing performance 🚀 #SpringBoot #Performance",
          time: "2 days ago"
        },
        {
          text: "Working with AI fraud detection models - 35% accuracy improvement using TensorFlow. The future of fintech is here! 🤖 #AI #ML #Fintech",
          time: "5 days ago"
        },
        {
          text: "From Hyderabad to Kansas - the coding journey continues. Grateful for every challenge that makes me grow as a developer 💻 #FullStack #JavaDeveloper",
          time: "1 week ago"
        }
      ]
    },
    {
      platform: "LinkedIn",
      handle: "Vamshi Krishna Pullaiahgari",
      description: "Professional Network",
      icon: Linkedin,
      iconBg: "bg-blue-700", 
      link: "https://www.linkedin.com/in/vamshi-krishna-pullaiahgari/",
      article: {
        title: "Building Scalable Microservices: Lessons from 4+ Years in Enterprise Development",
        stats: "Published 3 days ago • 150 reactions"
      },
      recentPosts: [
        {
          title: "Top Performer Award at Mphasis",
          excerpt: "Grateful to receive recognition for outstanding contributions to microservices architecture and performance optimization projects.",
          time: "2 weeks ago"
        }
      ]
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}
          data-testid="social-header"
        >
          <h2 className="text-4xl font-bold mb-4 text-teal">From My World</h2>
          <p className="text-xl text-gray-600">Connect with me across social platforms</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {socialPlatforms.map((platform, index) => (
            <div
              key={index}
              className={`fade-in ${isVisible ? 'visible' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`social-${platform.platform.toLowerCase()}`}
            >
              <Card className="social-card bg-white shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${platform.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                    <platform.icon className="text-white text-xl w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{platform.handle}</h3>
                    <p className="text-gray-600 text-sm">{platform.description}</p>
                  </div>
                </div>
                
                {platform.posts && (
                  <div className="space-y-4 mb-6">
                    {platform.posts.map((post, postIndex) => (
                      <div key={postIndex} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-2 text-sm">{post.caption}</p>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>{post.likes}</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                
                {platform.tweets && (
                  <div className="space-y-4 mb-6">
                    {platform.tweets.map((tweet, tweetIndex) => (
                      <div key={tweetIndex} className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-gray-700 mb-2">{tweet.text}</p>
                        <span className="text-gray-500 text-sm">{tweet.time}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                {platform.article && (
                  <div className="space-y-4 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Latest Article</h4>
                      <p className="text-gray-700 mb-2">{platform.article.title}</p>
                      <span className="text-gray-500 text-sm">{platform.article.stats}</span>
                    </div>
                  </div>
                )}
                
                {platform.recentPosts && (
                  <div className="space-y-4 mb-6">
                    {platform.recentPosts.map((post, postIdx) => (
                      <div key={postIdx} className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-1 text-sm">{post.title}</h4>
                        <p className="text-gray-700 mb-2 text-sm">{post.excerpt}</p>
                        <span className="text-gray-500 text-xs">{post.time}</span>
                      </div>
                    ))}
                  </div>
                )}
                
                <a 
                  href={platform.link}
                  className={`${platform.platform === 'Instagram' ? 'text-coral' : platform.platform === 'Twitter' ? 'text-teal' : 'text-purple'} font-medium hover:underline`}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid={`social-${platform.platform.toLowerCase()}-link`}
                >
                  {platform.platform === 'Instagram' ? 'View Profile' : 
                   platform.platform === 'Twitter' ? 'Follow on Twitter' : 
                   'Connect on LinkedIn'} →
                </a>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
