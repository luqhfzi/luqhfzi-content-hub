import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Zap, Target, Cog, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Digital Transformation",
      description: "Accelerate your digital journey with comprehensive transformation strategies that leverage cutting-edge technologies and data-driven insights.",
      benefits: ["Cloud Migration", "Process Automation", "Data Analytics", "Digital Culture"],
      href: "/services/digital-transformation"
    },
    {
      icon: Target,
      title: "Business Strategy",
      description: "Develop winning strategies that align with market opportunities, competitive positioning, and organizational capabilities for sustainable growth.",
      benefits: ["Strategic Planning", "Market Analysis", "Competitive Intelligence", "Growth Strategy"],
      href: "/services/business-strategy"
    },
    {
      icon: Cog,
      title: "Technology Consulting",
      description: "Optimize your technology infrastructure and implement scalable solutions that support business objectives and drive innovation.",
      benefits: ["Architecture Design", "Technology Stack", "Security Framework", "Scalability Planning"],
      href: "/services/technology-consulting"
    },
    {
      icon: TrendingUp,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies through systematic process improvement and performance optimization.",
      benefits: ["Lean Implementation", "Workflow Design", "Performance Metrics", "Quality Improvement"],
      href: "/services/process-optimization"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary-foreground mb-6">
              Comprehensive Business Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              From strategic planning to digital transformation, we provide end-to-end solutions 
              that drive sustainable growth and competitive advantage. Our proven methodologies 
              and expert team ensure successful outcomes for every engagement.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Service Portfolio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We offer specialized consulting services designed to address your most critical 
              business challenges and unlock new opportunities for growth.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold mb-3 text-sm uppercase text-primary">Key Areas</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="text-sm text-muted-foreground">
                                • {benefit}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <Link 
                          to={service.href}
                          className="inline-flex items-center text-primary hover:text-primary-light smooth-transition font-medium"
                        >
                          Learn More <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Proven Methodology</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a systematic approach that ensures consistent, high-quality results 
              across all our service offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Discover</h3>
              <p className="text-muted-foreground text-sm">
                We begin by understanding your business, challenges, and objectives through 
                comprehensive analysis and stakeholder interviews.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Design</h3>
              <p className="text-muted-foreground text-sm">
                We develop customized solutions and strategies tailored to your specific 
                needs, industry context, and organizational culture.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Deploy</h3>
              <p className="text-muted-foreground text-sm">
                We implement solutions with your team, ensuring smooth execution and 
                knowledge transfer for sustainable results.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">Optimize</h3>
              <p className="text-muted-foreground text-sm">
                We monitor performance, gather feedback, and continuously optimize 
                solutions to maximize long-term value and impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Industry Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our deep industry knowledge allows us to deliver solutions that address 
              sector-specific challenges and opportunities.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Financial Services",
              "Healthcare & Life Sciences", 
              "Technology & Software",
              "Manufacturing",
              "Retail & E-commerce",
              "Energy & Utilities",
              "Professional Services",
              "Education",
              "Government & Public Sector"
            ].map((industry, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold">{industry}</h3>
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
            <h2 className="text-primary-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your business objectives. 
              Our team is ready to develop a customized solution for your unique challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/insights/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;