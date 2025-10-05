import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-primary-foreground mb-6">
              Transform Your Business with Strategic Excellence
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We partner with forward-thinking organizations to drive digital transformation, 
              optimize operations, and unlock sustainable growth through proven methodologies and innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Start Your Transformation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Leading Companies Choose luqhfzi</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We deliver measurable results through our proven approach to business transformation, 
              combining strategic thinking with practical execution.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Proven Results</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our clients achieve an average 35% increase in operational efficiency and 28% revenue growth 
                  within the first 12 months of implementation.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Expert Team</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our consultants bring 15+ years of experience across industries, with specialized expertise 
                  in digital transformation and strategic planning.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Rapid Implementation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our agile methodology ensures quick wins while building sustainable long-term solutions, 
                  with initial results visible within 30 days.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Comprehensive Business Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end solutions that drive sustainable business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Digital Transformation",
                description: "Modernize operations with cutting-edge technology and data-driven insights.",
                href: "/services/digital-transformation"
              },
              {
                title: "Business Strategy",
                description: "Develop winning strategies that align with market opportunities and capabilities.",
                href: "/services/business-strategy"
              },
              {
                title: "Technology Consulting",
                description: "Optimize tech infrastructure and implement scalable solutions for growth.",
                href: "/services/technology-consulting"
              },
              {
                title: "Process Optimization",
                description: "Streamline operations and eliminate inefficiencies for maximum productivity.",
                href: "/services/process-optimization"
              }
            ].map((service, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  <Link 
                    to={service.href}
                    className="inline-flex items-center text-primary hover:text-primary-light smooth-transition text-sm font-medium"
                  >
                    Learn More <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Delivering Measurable Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our track record speaks for itself. Here's what our clients achieve when they partner with us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">35%</div>
              <div className="text-muted-foreground">Avg. Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$50M+</div>
              <div className="text-muted-foreground">Client Value Created</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Join hundreds of successful companies that have partnered with us to unlock their full potential. 
              Let's discuss how we can accelerate your growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/insights">Read Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;