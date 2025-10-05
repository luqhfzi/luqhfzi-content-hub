import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    role: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      role: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="mb-6">Get in Touch</h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business? Let's discuss how we can help you achieve your goals. 
              Our team of experts is here to provide personalized solutions tailored to your unique challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="soft-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input
                          id="company"
                          type="text"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input
                          id="role"
                          type="text"
                          value={formData.role}
                          onChange={(e) => handleInputChange('role', e.target.value)}
                          placeholder="e.g., CEO, CTO, Director"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="digital-transformation">Digital Transformation</SelectItem>
                          <SelectItem value="business-strategy">Business Strategy</SelectItem>
                          <SelectItem value="technology-consulting">Technology Consulting</SelectItem>
                          <SelectItem value="process-optimization">Process Optimization</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Tell us about your project, challenges, or questions..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Headquarters</div>
                        <div className="text-muted-foreground text-sm">
                          123 Business District<br />
                          New York, NY 10001<br />
                          United States
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Phone</div>
                        <div className="text-muted-foreground text-sm">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-muted-foreground text-sm">contact@luqhfzi.com</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1" />
                      <div>
                        <div className="font-medium">Business Hours</div>
                        <div className="text-muted-foreground text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                          Saturday: 10:00 AM - 2:00 PM EST
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Schedule a Consultation</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Prefer to speak directly with our team? Schedule a 30-minute consultation 
                    to discuss your specific needs and explore how we can help.
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Book Consultation
                  </Button>
                </CardContent>
              </Card>

              <Card className="soft-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Global Offices</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium">London</div>
                      <div className="text-muted-foreground">25 Canary Wharf, London E14 4QA</div>
                    </div>
                    <div>
                      <div className="font-medium">Singapore</div>
                      <div className="text-muted-foreground">Marina Bay Financial Centre, Singapore 018989</div>
                    </div>
                    <div>
                      <div className="font-medium">Toronto</div>
                      <div className="text-muted-foreground">200 Bay Street, Toronto, ON M5J 2J1</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get quick answers to common questions about our services and engagement process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">What is your typical engagement timeline?</h3>
                  <p className="text-muted-foreground">
                    Most strategic consulting engagements range from 3-6 months, while digital transformation 
                    projects typically take 6-12 months. We provide detailed timelines during our initial consultation.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Do you work with small and medium businesses?</h3>
                  <p className="text-muted-foreground">
                    Yes, we work with organizations of all sizes. Our flexible approach allows us to tailor 
                    our services to meet the specific needs and budgets of SMBs as well as large enterprises.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">What industries do you specialize in?</h3>
                  <p className="text-muted-foreground">
                    We serve clients across 15+ industries including financial services, healthcare, technology, 
                    manufacturing, retail, and professional services.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How do you measure success?</h3>
                  <p className="text-muted-foreground">
                    We establish clear KPIs and success metrics at the beginning of each engagement. These typically 
                    include ROI, efficiency gains, revenue growth, and other business-specific outcomes.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Do you provide ongoing support after implementation?</h3>
                  <p className="text-muted-foreground">
                    Yes, we offer various post-implementation support options including training, monitoring, 
                    optimization, and ongoing strategic advisory services.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">How do you ensure confidentiality?</h3>
                  <p className="text-muted-foreground">
                    We maintain strict confidentiality agreements and follow industry-standard security protocols. 
                    All client information is protected and never shared without explicit permission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;