
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import ContactSection from "@/components/ContactSection";

const About = () => {
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
            <Link to="/services" className="transition-colors hover:text-foreground/80 text-foreground/60">Services</Link>
            <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground">About</Link>
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
        {/* About Hero */}
        <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-amber-50/80 to-white">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-6">About Gluon Labs</h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're a team of passionate designers and developers creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://source.unsplash.com/random/800x600?office" 
                  alt="Our team" 
                  className="rounded-lg shadow-lg" 
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Our Story</h2>
                <p className="text-muted-foreground">
                  Gluon Labs was founded in 2020 with a simple mission: to help businesses transform their ideas into 
                  exceptional products that users love. We believe that great design is not just about aesthetics—it's 
                  about solving real problems for real people.
                </p>
                <p className="text-muted-foreground">
                  Named after the elementary particle that binds quarks together, Gluon Labs is built on the principle that 
                  strong bonds—between design and functionality, between our team and clients, between products and their users—create 
                  the most impactful results.
                </p>
                <p className="text-muted-foreground">
                  Today, we work with innovative companies across industries to create digital products that drive growth and deliver 
                  memorable user experiences.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values */}
        <section className="py-16 px-4 md:px-6 bg-secondary/30">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                These are the principles that guide our work and our relationships.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🌱</span>
                </div>
                <h3 className="text-xl font-bold mb-2">User-Centered</h3>
                <p className="text-muted-foreground">
                  We put users at the heart of everything we design, focusing on their needs, goals, and contexts.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Research-Driven</h3>
                <p className="text-muted-foreground">
                  We believe in making decisions based on evidence, not assumptions, through thorough research and testing.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Collaborative</h3>
                <p className="text-muted-foreground">
                  We work closely with our clients, seeing them as partners in the design process rather than just customers.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovative</h3>
                <p className="text-muted-foreground">
                  We're not afraid to challenge conventions and explore new approaches to solve complex problems.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Results-Focused</h3>
                <p className="text-muted-foreground">
                  We measure our success by the tangible results our work delivers for our clients and their users.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl">♻️</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Iterative</h3>
                <p className="text-muted-foreground">
                  We believe in continuous improvement through rapid prototyping, testing, and refinement.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground">
                A diverse group of designers, developers, and strategists passionate about creating exceptional digital experiences.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://source.unsplash.com/random/300x300?portrait=1" 
                    alt="Team member" 
                    className="w-full h-auto object-cover aspect-square" 
                  />
                </div>
                <h3 className="font-bold text-xl">Alex Morgan</h3>
                <p className="text-muted-foreground">Founder & Design Director</p>
              </div>
              {/* Team Member 2 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://source.unsplash.com/random/300x300?portrait=2" 
                    alt="Team member" 
                    className="w-full h-auto object-cover aspect-square" 
                  />
                </div>
                <h3 className="font-bold text-xl">Jamie Chen</h3>
                <p className="text-muted-foreground">UX Research Lead</p>
              </div>
              {/* Team Member 3 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://source.unsplash.com/random/300x300?portrait=3" 
                    alt="Team member" 
                    className="w-full h-auto object-cover aspect-square" 
                  />
                </div>
                <h3 className="font-bold text-xl">Taylor Reed</h3>
                <p className="text-muted-foreground">UI Design Lead</p>
              </div>
              {/* Team Member 4 */}
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-lg">
                  <img 
                    src="https://source.unsplash.com/random/300x300?portrait=4" 
                    alt="Team member" 
                    className="w-full h-auto object-cover aspect-square" 
                  />
                </div>
                <h3 className="font-bold text-xl">Jordan Smith</h3>
                <p className="text-muted-foreground">Development Lead</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-white to-amber-50/50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Want to work with us?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team or partner with on exciting projects.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/careers">
                  Join Our Team
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Get in Touch
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

export default About;
