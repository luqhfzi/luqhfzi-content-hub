import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Award, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">About luqhfzi</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We are a premier business consulting firm dedicated to transforming organizations through 
              strategic excellence, digital innovation, and operational optimization. Founded on the 
              principle that every business has untapped potential, we partner with forward-thinking 
              leaders to unlock sustainable growth and competitive advantage.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Founded in 2018, luqhfzi emerged from a simple observation: businesses across all industries 
                  were struggling to navigate the complexities of digital transformation while maintaining 
                  operational excellence. Traditional consulting approaches were falling short, offering 
                  generic solutions that failed to address the unique challenges each organization faced.
                </p>
                <p>
                  Our founders, veterans of McKinsey, Bain, and leading technology companies, recognized the 
                  need for a new kind of consulting firm—one that combined strategic thinking with hands-on 
                  implementation, deep industry expertise with cutting-edge technology insights, and global 
                  best practices with local market understanding.
                </p>
                <p>
                  Today, we serve over 200 clients across North America, Europe, and Asia, from Fortune 500 
                  enterprises to high-growth startups. Our approach remains unchanged: deliver measurable 
                  results through strategic excellence, innovative thinking, and relentless execution.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">250+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Client Retention</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
                  <div className="text-sm text-muted-foreground">Value Created</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Industries Served</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Results-Driven</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We measure success by the tangible impact we create for our clients. Every engagement 
                  is designed to deliver measurable, sustainable results that drive long-term value.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Collaborative</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We believe the best solutions emerge from true partnership. We work alongside your 
                  team, sharing knowledge and building capabilities that last beyond our engagement.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Excellence</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We set the highest standards for ourselves and our work. From strategy development to 
                  implementation, we strive for excellence in every aspect of our service delivery.
                </p>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Innovation</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We embrace cutting-edge methodologies and technologies to solve complex business 
                  challenges. Innovation isn't just what we deliver—it's how we think and operate.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the experienced professionals who guide our strategic vision and deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Chief Executive Officer",
                background: "Former McKinsey Partner with 15+ years in strategy consulting"
              },
              {
                name: "Michael Rodriguez",
                role: "Chief Technology Officer", 
                background: "Ex-Google executive specializing in digital transformation"
              },
              {
                name: "Dr. Emily Johnson",
                role: "Chief Strategy Officer",
                background: "Former Bain Principal with expertise in organizational change"
              },
              {
                name: "David Kim",
                role: "Managing Director, Operations",
                background: "Former BCG Managing Director focused on process optimization"
              },
              {
                name: "Lisa Thompson",
                role: "Head of Client Success",
                background: "20+ years in enterprise consulting and client relationship management"
              },
              {
                name: "James Wilson",
                role: "Head of Analytics",
                background: "Former Head of Data Science at leading fintech company"
              }
            ].map((leader, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{leader.name}</h3>
                  <div className="text-primary text-sm font-medium mb-3">{leader.role}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{leader.background}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-primary-foreground mb-6">Our Approach</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              We combine proven methodologies with innovative thinking to deliver solutions that drive 
              sustainable transformation. Our approach is built on three foundational pillars: strategic 
              clarity, operational excellence, and continuous innovation.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="text-primary-foreground font-semibold mb-3">Strategic Clarity</h3>
                <p className="text-primary-foreground/80 text-sm">
                  We start by understanding your vision, challenges, and market position to develop 
                  clear, actionable strategies that align with your long-term objectives.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="text-primary-foreground font-semibold mb-3">Operational Excellence</h3>
                <p className="text-primary-foreground/80 text-sm">
                  We optimize processes, systems, and capabilities to ensure your organization can 
                  execute strategy effectively and efficiently at scale.
                </p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                <h3 className="text-primary-foreground font-semibold mb-3">Continuous Innovation</h3>
                <p className="text-primary-foreground/80 text-sm">
                  We embed innovation into your culture and operations, ensuring your organization 
                  remains adaptable and competitive in an ever-changing landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;