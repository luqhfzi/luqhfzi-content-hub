import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, TrendingUp, Users, Globe } from 'lucide-react';

const BusinessStrategy = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-primary-foreground mb-6">
              Business Strategy Consulting
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Develop winning strategies that align with market opportunities, competitive positioning, 
              and organizational capabilities. Our strategic planning services help you navigate 
              complexity, make informed decisions, and achieve sustainable competitive advantage.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Develop Your Strategy</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Strategic Excellence That Drives Results</h2>
              <div className="space-y-6 text-muted-foreground">
                <p>
                  In today's rapidly evolving business landscape, strategic clarity is more critical than ever. 
                  Organizations with well-defined strategies are 67% more likely to achieve their growth 
                  objectives and 45% more profitable than those without clear strategic direction.
                </p>
                <p>
                  Our business strategy consulting combines rigorous analytical frameworks with creative 
                  problem-solving to help you identify new opportunities, optimize resource allocation, 
                  and build sustainable competitive advantages that drive long-term value creation.
                </p>
                <p>
                  We work collaboratively with your leadership team to develop actionable strategies 
                  that are grounded in market reality, aligned with organizational capabilities, and 
                  designed for successful implementation across your entire organization.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">67%</div>
                  <div className="text-sm text-muted-foreground">Higher Success Rate</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">45%</div>
                  <div className="text-sm text-muted-foreground">Profit Improvement</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-sm text-muted-foreground">Faster Growth</div>
                </CardContent>
              </Card>
              <Card className="soft-shadow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">85%</div>
                  <div className="text-sm text-muted-foreground">Implementation Success</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Services */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Strategic Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide comprehensive strategic consulting services that address every aspect 
              of business planning and competitive positioning.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Corporate Strategy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Develop comprehensive corporate strategies that define your long-term vision, 
                  strategic priorities, and resource allocation framework for sustainable growth.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Vision and mission development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Strategic planning and roadmapping</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Portfolio optimization and rationalization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Mergers, acquisitions, and partnerships</span>
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
                  <h3 className="text-xl font-semibold">Growth Strategy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Identify and capitalize on growth opportunities through market expansion, 
                  product innovation, and strategic initiatives that drive revenue and market share.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Market opportunity assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>New product and service development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Geographic expansion planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Innovation and R&D strategy</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Market Analysis & Intelligence</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Gain deep insights into market dynamics, competitive landscape, and customer 
                  behavior to inform strategic decision-making and competitive positioning.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Market sizing and segmentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Competitive intelligence and benchmarking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Customer needs and behavior analysis</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Industry trend and disruption analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Organizational Strategy</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Align organizational structure, capabilities, and culture with strategic objectives 
                  to ensure effective strategy execution and sustainable performance improvement.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Organizational design and restructuring</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Capability building and development</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Change management and transformation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Performance management systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Frameworks */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Proven Strategic Frameworks</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage world-class analytical frameworks and methodologies to ensure 
              rigorous analysis and actionable insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                framework: "Porter's Five Forces",
                description: "Analyze competitive dynamics and industry attractiveness"
              },
              {
                framework: "SWOT Analysis",
                description: "Assess strengths, weaknesses, opportunities, and threats"
              },
              {
                framework: "Blue Ocean Strategy",
                description: "Identify uncontested market spaces and value innovation"
              },
              {
                framework: "BCG Growth-Share Matrix",
                description: "Optimize portfolio allocation and investment priorities"
              },
              {
                framework: "Ansoff Matrix",
                description: "Evaluate growth strategies and market expansion options"
              },
              {
                framework: "Value Chain Analysis",
                description: "Identify sources of competitive advantage and optimization"
              }
            ].map((item, index) => (
              <Card key={index} className="soft-shadow hover:shadow-medium smooth-transition">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{item.framework}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Strategic Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how our strategic consulting has helped organizations achieve 
              breakthrough results and sustainable competitive advantage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Technology Startup</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Helped a B2B SaaS startup develop go-to-market strategy that resulted in 
                  400% revenue growth and successful Series B funding.
                </p>
                <div className="text-primary font-semibold text-sm">400% Revenue Growth</div>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Manufacturing Company</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Developed market expansion strategy for a manufacturing company entering 
                  Asian markets, achieving 60% market share within 18 months.
                </p>
                <div className="text-primary font-semibold text-sm">60% Market Share</div>
              </CardContent>
            </Card>

            <Card className="soft-shadow hover:shadow-medium smooth-transition">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Financial Services</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Created digital transformation strategy for a regional bank, leading to 
                  35% cost reduction and 50% improvement in customer satisfaction.
                </p>
                <div className="text-primary font-semibold text-sm">35% Cost Reduction</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-primary-foreground mb-6">Ready to Define Your Winning Strategy?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Let's work together to develop a strategic roadmap that positions your organization 
              for sustained success and competitive advantage in your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Schedule Strategy Session</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Link to="/resources/frameworks">Explore Frameworks</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessStrategy;