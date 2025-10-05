import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, TrendingUp, Cog, BarChart, Target } from 'lucide-react';

const ProcessOptimization = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary-foreground mb-6">
              Process Optimization Services
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Streamline operations and eliminate inefficiencies through systematic process improvement, 
              performance optimization, and data-driven methodologies that drive sustainable productivity 
              gains and operational excellence across your organization.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Optimize Your Processes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Operational Excellence Through Process Optimization</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  Inefficient processes cost organizations an average of 30% of their revenue annually. 
                  Companies that invest in systematic process optimization achieve 25% higher productivity, 
                  40% faster cycle times, and 60% reduction in operational costs within the first year.
                </p>
                <p>
                  Our process optimization services combine Lean Six Sigma methodologies with modern 
                  data analytics to identify bottlenecks, eliminate waste, and design efficient workflows 
                  that scale with your business growth while maintaining quality and compliance standards.
                </p>
                <p>
                  We work collaboratively with your teams to analyze current processes, identify improvement 
                  opportunities, and implement sustainable changes that deliver measurable results and 
                  create a culture of continuous improvement throughout your organization.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">25%</div>
                  <div className="text-sm text-muted-foreground">Productivity Increase</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">40%</div>
                  <div className="text-sm text-muted-foreground">Faster Cycle Times</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">60%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground">Quality Improvement</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Optimization Services */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Process Optimization Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive process improvement services that address every aspect 
              of your operational efficiency and performance optimization needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Process Analysis & Mapping</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive analysis of current processes to identify inefficiencies, bottlenecks, 
                  and improvement opportunities through detailed process mapping and data analysis.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Current state process mapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Value stream analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Bottleneck identification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Root cause analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Lean Six Sigma Implementation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Apply proven Lean Six Sigma methodologies to eliminate waste, reduce variation, 
                  and improve quality while building internal capabilities for continuous improvement.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>DMAIC methodology implementation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Waste elimination programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Quality control systems</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Green Belt and Black Belt training</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Cog className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Workflow Automation</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Design and implement automated workflows that reduce manual effort, minimize errors, 
                  and accelerate process execution while maintaining quality and compliance.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Robotic Process Automation (RPA)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Business process management (BPM)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Integration and API development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Workflow orchestration platforms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Performance Management</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Implement comprehensive performance monitoring and management systems that provide 
                  real-time insights and enable data-driven decision making for continuous improvement.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>KPI development and tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Real-time dashboards and reporting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Operational analytics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Continuous improvement programs</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Optimization Methodologies */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Proven Optimization Methodologies</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage industry-leading methodologies and frameworks to ensure 
              systematic and sustainable process improvements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                methodology: "Lean Manufacturing",
                description: "Eliminate waste and optimize value creation through systematic process improvement"
              },
              {
                methodology: "Six Sigma",
                description: "Reduce defects and variation using data-driven statistical analysis methods"
              },
              {
                methodology: "Kaizen",
                description: "Continuous improvement culture with small, incremental changes over time"
              },
              {
                methodology: "Theory of Constraints",
                description: "Identify and optimize system bottlenecks to maximize overall throughput"
              },
              {
                methodology: "Business Process Reengineering",
                description: "Fundamental redesign of processes to achieve dramatic performance improvements"
              },
              {
                methodology: "Agile Operations",
                description: "Flexible, iterative approach to process improvement and change management"
              }
            ].map((item, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.methodology}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Phases */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Optimization Process</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a structured approach that ensures successful process optimization 
              with sustainable results and organizational buy-in.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              {
                phase: "Assess",
                description: "Current state analysis, process mapping, and opportunity identification"
              },
              {
                phase: "Design",
                description: "Future state design, solution development, and improvement planning"
              },
              {
                phase: "Implement",
                description: "Process changes, system implementation, and team training"
              },
              {
                phase: "Monitor",
                description: "Performance tracking, results measurement, and adjustment"
              },
              {
                phase: "Sustain",
                description: "Continuous improvement culture and ongoing optimization"
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

      {/* Success Metrics */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Optimization Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our process optimization initiatives have delivered significant 
              improvements across various industries and business functions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Manufacturing Operations</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Optimized production processes for automotive supplier, achieving 45% 
                  reduction in cycle time and 30% improvement in quality metrics.
                </p>
                <div className="text-primary font-semibold text-sm">45% Faster Cycle Time</div>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Streamlined customer support processes, reducing response time by 70% 
                  and increasing customer satisfaction scores by 40%.
                </p>
                <div className="text-primary font-semibold text-sm">70% Faster Response</div>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Financial Processing</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Automated accounts payable process, reducing processing time by 80% 
                  and eliminating manual errors by 95%.
                </p>
                <div className="text-primary font-semibold text-sm">80% Time Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6">Ready to Optimize Your Operations?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Transform your operations through systematic process optimization that delivers 
              measurable improvements in efficiency, quality, and customer satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Start Process Assessment</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/resources/frameworks">View Methodologies</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessOptimization;