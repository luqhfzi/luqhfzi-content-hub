import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Lightbulb, Users, Award } from 'lucide-react';

const Insights = () => {
  const insightCategories = [
    {
      icon: TrendingUp,
      title: "Industry Trends",
      description: "Stay ahead with insights into emerging trends, market shifts, and technological disruptions shaping the business landscape.",
      articles: 15,
      href: "/insights/industry-trends"
    },
    {
      icon: Lightbulb,
      title: "Best Practices",
      description: "Learn from proven methodologies and best practices that drive operational excellence and business transformation.",
      articles: 12,
      href: "/insights/best-practices"
    },
    {
      icon: Users,
      title: "Case Studies",
      description: "Explore real-world success stories and learn how organizations achieved breakthrough results through strategic initiatives.",
      articles: 18,
      href: "/insights/case-studies"
    },
    {
      icon: Award,
      title: "Thought Leadership",
      description: "Access expert perspectives on strategic topics from our team of experienced consultants and industry leaders.",
      articles: 10,
      href: "/insights/thought-leadership"
    }
  ];

  const featuredInsights = [
    {
      category: "Digital Transformation",
      title: "The Future of Work: How Digital Transformation is Reshaping Business Operations",
      excerpt: "Explore how organizations are leveraging digital technologies to create more efficient, resilient, and innovative business models.",
      readTime: "8 min read",
      date: "September 15, 2024"
    },
    {
      category: "Business Strategy", 
      title: "Building Sustainable Competitive Advantage in the Age of Disruption",
      excerpt: "Discover strategies for maintaining market leadership when traditional business models are being challenged by innovation.",
      readTime: "12 min read",
      date: "September 10, 2024"
    },
    {
      category: "Technology",
      title: "AI and Machine Learning: Practical Applications for Business Growth",
      excerpt: "Learn how artificial intelligence and machine learning are creating new opportunities for operational efficiency and customer value.",
      readTime: "10 min read",
      date: "September 5, 2024"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary-foreground mb-6">
              Business Insights & Intelligence
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Stay informed with expert analysis, industry trends, and actionable insights 
              that help you make better strategic decisions and drive business growth. 
              Explore our comprehensive library of thought leadership content.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="#featured">Explore Latest Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Insight Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Insight Categories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Browse our curated content across key business areas and stay updated 
              with the latest trends and best practices in your industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {insightCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{category.title}</h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">
                            {category.articles} articles available
                          </span>
                          <Link 
                            to={category.href}
                            className="inline-flex items-center text-primary hover:text-primary-light smooth-transition font-medium"
                          >
                            Explore <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Insights */}
      <section id="featured" className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Featured Insights</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our latest thought leadership content covering the most 
              important trends and strategies shaping business today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {featuredInsights.map((insight, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {insight.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3 leading-tight">{insight.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{insight.readTime}</span>
                    <span>{insight.date}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-4">Stay Informed</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our insights newsletter and receive the latest business intelligence, 
              industry analysis, and strategic recommendations delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Topics & Tags */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Popular Topics</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore insights by topic to find content most relevant to your business challenges and interests.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Digital Transformation",
              "Business Strategy",
              "Operational Excellence", 
              "Technology Innovation",
              "Change Management",
              "Data Analytics",
              "Customer Experience",
              "Process Automation",
              "Cloud Computing",
              "Artificial Intelligence",
              "Market Analysis",
              "Competitive Intelligence",
              "Performance Management",
              "Organizational Design",
              "Supply Chain Optimization"
            ].map((topic, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-background border border-border rounded-full text-sm text-muted-foreground hover:text-primary hover:border-primary smooth-transition cursor-pointer"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Reports */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Research & Reports</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive research reports and industry studies that provide 
              deep insights into market trends and business transformation strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "2024 Digital Transformation Report",
                description: "Comprehensive analysis of digital transformation trends across industries",
                type: "Industry Report",
                pages: "45 pages"
              },
              {
                title: "The Future of Business Strategy",
                description: "Strategic planning methodologies for the next decade of business",
                type: "Research Study", 
                pages: "32 pages"
              },
              {
                title: "Operational Excellence Benchmark",
                description: "Performance benchmarks and best practices across key industries",
                type: "Benchmark Report",
                pages: "28 pages"
              }
            ].map((report, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                      {report.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{report.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{report.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{report.pages}</span>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6">Need Custom Research?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Looking for specific industry insights or custom research for your organization? 
              Our research team can provide tailored analysis and strategic recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Request Custom Research</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/resources">Explore Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Insights;