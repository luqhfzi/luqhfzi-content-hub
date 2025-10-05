import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', submenu: [
    { name: 'Digital Transformation', href: '/services/digital-transformation' },
    { name: 'Business Strategy', href: '/services/business-strategy' },
    { name: 'Technology Consulting', href: '/services/technology-consulting' },
    { name: 'Process Optimization', href: '/services/process-optimization' }
  ]},
  { name: 'Insights', href: '/insights', submenu: [
    { name: 'Industry Trends', href: '/insights/industry-trends' },
    { name: 'Best Practices', href: '/insights/best-practices' },
    { name: 'Case Studies', href: '/insights/case-studies' },
    { name: 'Thought Leadership', href: '/insights/thought-leadership' }
  ]},
  { name: 'Resources', href: '/resources', submenu: [
    { name: 'White Papers', href: '/resources/white-papers' },
    { name: 'Frameworks', href: '/resources/frameworks' },
    { name: 'Tools & Templates', href: '/resources/tools-templates' },
    { name: 'ROI Calculators', href: '/resources/roi-calculators' }
  ]},
  { name: 'Contact', href: '/contact' },
];

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">L</span>
              </div>
              <span className="text-xl font-bold text-foreground">luqhfzi</span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={cn(
                      "text-sm font-medium smooth-transition hover:text-primary",
                      location.pathname === item.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 w-64 bg-card border border-border rounded-lg shadow-medium opacity-0 invisible group-hover:opacity-100 group-hover:visible smooth-transition mt-2">
                      <div className="p-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-muted rounded-md smooth-transition"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <Button variant="default" asChild className="hidden md:inline-flex">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-muted border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold">luqhfzi</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Transforming businesses through strategic consulting and digital innovation.
              </p>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/services/digital-transformation" className="text-muted-foreground hover:text-primary smooth-transition">Digital Transformation</Link></li>
                <li><Link to="/services/business-strategy" className="text-muted-foreground hover:text-primary smooth-transition">Business Strategy</Link></li>
                <li><Link to="/services/technology-consulting" className="text-muted-foreground hover:text-primary smooth-transition">Technology Consulting</Link></li>
                <li><Link to="/services/process-optimization" className="text-muted-foreground hover:text-primary smooth-transition">Process Optimization</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/insights" className="text-muted-foreground hover:text-primary smooth-transition">Insights</Link></li>
                <li><Link to="/resources/white-papers" className="text-muted-foreground hover:text-primary smooth-transition">White Papers</Link></li>
                <li><Link to="/resources/frameworks" className="text-muted-foreground hover:text-primary smooth-transition">Frameworks</Link></li>
                <li><Link to="/resources/tools-templates" className="text-muted-foreground hover:text-primary smooth-transition">Tools & Templates</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-primary smooth-transition">About Us</Link></li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-primary smooth-transition">Contact</Link></li>
                <li><Link to="/privacy-policy" className="text-muted-foreground hover:text-primary smooth-transition">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions" className="text-muted-foreground hover:text-primary smooth-transition">Terms & Conditions</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 luqhfzi.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};