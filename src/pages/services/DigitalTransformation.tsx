import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Cloud, Database, Shield, Smartphone } from 'lucide-react';

const DigitalTransformation = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary-foreground mb-6">
              Digital Transformation Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Accelerate your digital journey with comprehensive transformation strategies that leverage 
              cutting-edge technologies, modernize operations, and create sustainable competitive advantages 
              in today's digital-first economy.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Start Your Transformation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Transform Your Business for the Digital Age</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Digital transformation is no longer optional—it's essential for business survival and growth. 
                  Organizations that embrace digital transformation achieve 23% higher revenue growth, 12% 
                  greater market valuation, and 26% higher profitability than their competitors.
                </p>
                <p>
                  Our comprehensive digital transformation services help you modernize legacy systems, 
                  optimize business processes, enhance customer experiences, and build data-driven 
                  decision-making capabilities that drive sustainable competitive advantage.
                </p>
                <p>
                  We work with your team to develop and execute a customized transformation roadmap 
                  that aligns with your business objectives, minimizes disruption, and maximizes ROI 
                  through strategic technology adoption and organizational change management.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Process Efficiency Gain</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Faster Time-to-Market</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">92%</div>
                  <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Digital Transformation Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide end-to-end digital transformation solutions that address every aspect 
              of your technology and business modernization journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Cloud className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Cloud Migration & Modernization</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Migrate your infrastructure and applications to the cloud with minimal disruption 
                  while optimizing for performance, security, and cost-effectiveness.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cloud strategy and architecture design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Application modernization and containerization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Multi-cloud and hybrid cloud solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>DevOps and CI/CD pipeline implementation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Data & Analytics Platform</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Build comprehensive data platforms that enable real-time analytics, machine learning, 
                  and data-driven decision making across your organization.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Data warehouse and lake architecture</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Business intelligence and visualization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Machine learning and AI implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Data governance and quality management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Digital Customer Experience</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Create seamless, personalized customer experiences across all digital touchpoints 
                  to drive engagement, satisfaction, and loyalty.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Omnichannel customer journey design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mobile and web application development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Customer data platform integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Personalization and recommendation engines</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Cybersecurity & Compliance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implement robust security frameworks and compliance measures to protect your 
                  digital assets and maintain regulatory compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Security architecture and risk assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Identity and access management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Compliance framework implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Security monitoring and incident response</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Process */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Transformation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful digital transformation 
              with minimal business disruption and maximum value realization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                phase: "Assessment",
                description: "Current state analysis, digital maturity assessment, and opportunity identification"
              },
              {
                phase: "Strategy",
                description: "Digital roadmap development, technology selection, and business case creation"
              },
              {
                phase: "Design",
                description: "Solution architecture, user experience design, and implementation planning"
              },
              {
                phase: "Implementation",
                description: "Agile development, testing, deployment, and change management"
              },
              {
                phase: "Optimization",
                description: "Performance monitoring, continuous improvement, and value realization"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-lg font-bold text-primary-foreground">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.phase}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with leading technology platforms and frameworks to deliver 
              enterprise-grade digital transformation solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cloud Platforms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Amazon Web Services (AWS)</li>
                <li>• Microsoft Azure</li>
                <li>• Google Cloud Platform</li>
                <li>• IBM Cloud</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Data & Analytics</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Snowflake</li>
                <li>• Databricks</li>
                <li>• Tableau</li>
                <li>• Power BI</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Integration</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• MuleSoft</li>
                <li>• Azure Logic Apps</li>
                <li>• Apache Kafka</li>
                <li>• REST/GraphQL APIs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• React/Angular/Vue.js</li>
                <li>• Node.js/.NET/Java</li>
                <li>• Docker/Kubernetes</li>
                <li>• GitHub/Azure DevOps</li>
              </ul>
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
              Start your digital transformation journey today. Our experts will work with you 
              to develop a customized roadmap that drives measurable business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/insights/case-studies">View Success Stories</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalTransformation;