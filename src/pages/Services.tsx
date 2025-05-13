
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";
import ServiceCard from "@/components/ServiceCard";

const Services = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-2xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Gluon Labs</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium flex-1 justify-center">
            <Link to="/" className="transition-colors hover:text-foreground/80 text-foreground/60">Home</Link>
            <Link to="/services" className="transition-colors hover:text-foreground/80 text-foreground">Services</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link to="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button asChild variant="default">
              <Link to="/book">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Call
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Services Hero */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-amber-50/80 to-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">Our Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We transform ideas into exceptional digital experiences through strategic design.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Services */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="inline-block p-3 bg-amber-100/50 rounded-lg">
                  <span className="text-3xl">✏️</span>
                </div>
                <h2 className="text-3xl font-bold">Product Design</h2>
                <p className="text-muted-foreground">
                  From concept to final product, we guide you through the entire design process to create intuitive, 
                  user-centered products that delight your customers and achieve your business goals.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>User Experience Design</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interface Design</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Interactive Prototyping</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-6">
                <div className="inline-block p-3 bg-amber-100/50 rounded-lg">
                  <span className="text-3xl">🔍</span>
                </div>
                <h2 className="text-3xl font-bold">UX Research</h2>
                <p className="text-muted-foreground">
                  Understand your users better with our comprehensive research methods. We'll help you identify user needs,
                  validate concepts, and make data-driven decisions for your product.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>User Interviews & Testing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Competitive Analysis</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 text-amber-500 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Usability Testing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="py-16 px-4 md:px-6 bg-secondary/30">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ServiceCard 
                title="Branding" 
                description="Create a strong identity that resonates with your target audience and sets you apart from competitors." 
                icon="✨" 
              />
              <ServiceCard 
                title="Development" 
                description="Turn designs into functional, high-performing digital products with our expert development team." 
                icon="💻" 
              />
              <ServiceCard 
                title="Consultation" 
                description="Get expert advice on how to improve your product design strategy and achieve your business goals." 
                icon="💬" 
              />
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section id="process" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Process</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A proven methodology that delivers results
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center space-y-2 p-6 bg-secondary/50 rounded-lg border border-border/50">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <span className="text-xl font-bold">01</span>
                </div>
                <h3 className="text-xl font-bold">Discovery</h3>
                <p className="text-center text-muted-foreground">Understanding your business, users, and challenges</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-secondary/50 rounded-lg border border-border/50">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <span className="text-xl font-bold">02</span>
                </div>
                <h3 className="text-xl font-bold">Strategy</h3>
                <p className="text-center text-muted-foreground">Planning the best approach to achieve your goals</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-secondary/50 rounded-lg border border-border/50">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <span className="text-xl font-bold">03</span>
                </div>
                <h3 className="text-xl font-bold">Design</h3>
                <p className="text-center text-muted-foreground">Creating intuitive and engaging experiences</p>
              </div>
              <div className="flex flex-col items-center space-y-2 p-6 bg-secondary/50 rounded-lg border border-border/50">
                <div className="rounded-full bg-primary/10 p-3 text-primary">
                  <span className="text-xl font-bold">04</span>
                </div>
                <h3 className="text-xl font-bold">Delivery</h3>
                <p className="text-center text-muted-foreground">Implementing and launching your product</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-amber-50/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to transform your product?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's work together to create exceptional experiences that delight your users and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/book">
                  Book a Consultation
                </Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer - Same as in Index.tsx */}
      <footer className="border-t py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">Gluon Labs</span>
              </Link>
              <p className="text-sm text-muted-foreground">
                Transforming ideas into exceptional products through strategic design.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-medium text-base mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/about" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
                <li><Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link></li>
                <li><Link to="/portfolio" className="text-muted-foreground hover:text-foreground">Portfolio</Link></li>
                <li><Link to="/careers" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-base mb-4">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/blog" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
                <li><Link to="/resources" className="text-muted-foreground hover:text-foreground">Design Resources</Link></li>
                <li><Link to="/case-studies" className="text-muted-foreground hover:text-foreground">Case Studies</Link></li>
                <li><Link to="/testimonials" className="text-muted-foreground hover:text-foreground">Testimonials</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium text-base mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.11 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span className="text-muted-foreground">hello@gluonlabs.ai</span>
                </li>
                <li className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-muted-foreground">
                    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
                  </svg>
                  <span className="text-muted-foreground">+1 (555) 123-4567</span>
                </li>
                <li><Link to="/contact" className="text-muted-foreground hover:text-foreground underline">Contact Form</Link></li>
                <li><Link to="/book" className="text-muted-foreground hover:text-foreground underline">Book a Call</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 Gluon Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
