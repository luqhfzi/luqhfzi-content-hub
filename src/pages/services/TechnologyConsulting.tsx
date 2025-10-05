import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Server, Shield, Code, Database } from 'lucide-react';

const TechnologyConsulting = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary-foreground mb-6">
              Technology Consulting Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Optimize your technology infrastructure and implement scalable solutions that support 
              business objectives, drive innovation, and ensure competitive advantage through 
              strategic technology adoption and modern architecture design.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Optimize Your Technology</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Strategic Technology Solutions</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Technology is the backbone of modern business success. Organizations with well-architected 
                  technology infrastructure experience 40% faster time-to-market, 35% lower operational costs, 
                  and 50% fewer security incidents compared to those with outdated or poorly designed systems.
                </p>
                <p>
                  Our technology consulting services help you design, implement, and optimize technology 
                  solutions that align with your business strategy, scale with your growth, and adapt to 
                  changing market demands while maintaining security, performance, and cost-effectiveness.
                </p>
                <p>
                  We work with your team to assess current capabilities, identify opportunities for improvement, 
                  and develop comprehensive technology roadmaps that balance innovation with practical business 
                  requirements and budget constraints.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Time-to-Market</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">35%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50%</div>
                  <div className="text-sm text-muted-foreground">Security Improvement</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Services */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Technology Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive technology consulting services that address every aspect 
              of your technology landscape and business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Server className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Infrastructure Architecture</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Design and implement scalable, reliable infrastructure that supports your business 
                  growth while optimizing performance, security, and cost-effectiveness.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Cloud architecture design and migration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Network design and optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Disaster recovery and business continuity</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Performance monitoring and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Application Development</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Build modern, scalable applications that deliver exceptional user experiences 
                  while maintaining security, performance, and maintainability standards.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Custom software development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>API design and integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mobile and web application development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Legacy system modernization</span>
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
                  <h3 className="text-xl font-semibold">Data Management</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implement comprehensive data strategies that enable analytics, improve decision-making, 
                  and ensure data quality, security, and compliance across your organization.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Database design and optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Data warehouse and analytics platforms</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Data integration and ETL processes</span>
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
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Security & Compliance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implement robust security frameworks that protect your digital assets, ensure regulatory 
                  compliance, and maintain customer trust through comprehensive security measures.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Security assessment and auditing</span>
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
                    <span>Incident response and monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Technology Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with industry-leading technologies and platforms to deliver 
              enterprise-grade solutions that meet your specific requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Cloud Platforms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Amazon Web Services</li>
                <li>• Microsoft Azure</li>
                <li>• Google Cloud Platform</li>
                <li>• IBM Cloud</li>
                <li>• Oracle Cloud</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Development</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• JavaScript/TypeScript</li>
                <li>• Python</li>
                <li>• Java/.NET</li>
                <li>• React/Angular</li>
                <li>• Node.js</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Databases</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• PostgreSQL/MySQL</li>
                <li>• MongoDB</li>
                <li>• Redis</li>
                <li>• Elasticsearch</li>
                <li>• Snowflake</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">DevOps</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Docker/Kubernetes</li>
                <li>• Terraform</li>
                <li>• Jenkins/GitHub Actions</li>
                <li>• Prometheus/Grafana</li>
                <li>• ELK Stack</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Implementation Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach that ensures successful technology implementations 
              with minimal business disruption and maximum value realization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                phase: "Discovery",
                description: "Technology assessment, requirements gathering, and stakeholder interviews"
              },
              {
                phase: "Architecture",
                description: "Solution design, technology selection, and implementation planning"
              },
              {
                phase: "Development",
                description: "Agile development, testing, and iterative delivery of solutions"
              },
              {
                phase: "Deployment",
                description: "Production deployment, monitoring setup, and user training"
              },
              {
                phase: "Support",
                description: "Ongoing maintenance, optimization, and continuous improvement"
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

      {/* Success Stories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Technology Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our technology consulting has helped organizations achieve 
              significant improvements in performance, scalability, and innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Healthcare Platform</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Modernized legacy healthcare platform serving 2M+ patients, achieving 
                  99.9% uptime and 60% performance improvement.
                </p>
                <div className="text-primary font-semibold text-sm">99.9% Uptime</div>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">E-commerce Solution</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Built scalable e-commerce platform handling 50K+ concurrent users 
                  with 40% faster page load times and 25% higher conversion rates.
                </p>
                <div className="text-primary font-semibold text-sm">25% Higher Conversions</div>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Financial Services</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Implemented secure, compliant trading platform processing $1B+ daily 
                  transactions with zero security incidents.
                </p>
                <div className="text-primary font-semibold text-sm">Zero Security Incidents</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6">Ready to Modernize Your Technology?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Transform your technology landscape with strategic consulting that aligns technology 
              investments with business objectives and drives measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Tech Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/resources/tools-templates">Explore Tools</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyConsulting;