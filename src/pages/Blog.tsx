
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import BlogPostCard from "@/components/BlogPostCard";
import { useState } from "react";

const blogCategories = [
  "All",
  "Product Design",
  "UX Research",
  "UI Design",
  "Branding",
  "Development",
  "Industry Insights"
];

const blogPosts = [
  {
    id: 1,
    title: "The Future of Product Design in 2025",
    excerpt: "Exploring emerging trends that will shape product design in the coming years.",
    category: "Industry Insights",
    date: "May 12, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?design",
    slug: "future-of-product-design"
  },
  {
    id: 2,
    title: "UX Research Methods Every Designer Should Know",
    excerpt: "A guide to essential research techniques to improve your design process.",
    category: "UX Research",
    date: "May 5, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?ux",
    slug: "ux-research-methods"
  },
  {
    id: 3,
    title: "How Great Design Drives Business Growth",
    excerpt: "Case studies on how investing in design leads to measurable business outcomes.",
    category: "Industry Insights",
    date: "April 28, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?business",
    slug: "design-drives-growth"
  },
  {
    id: 4,
    title: "Color Psychology in UI Design",
    excerpt: "How your color choices affect user perception and behavior in your products.",
    category: "UI Design",
    date: "April 15, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?color",
    slug: "color-psychology-ui-design"
  },
  {
    id: 5,
    title: "The Art of User Interviews",
    excerpt: "How to conduct effective user interviews that yield valuable insights.",
    category: "UX Research",
    date: "April 8, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?interview",
    slug: "art-of-user-interviews"
  },
  {
    id: 6,
    title: "Design Systems: Build Once, Use Everywhere",
    excerpt: "A comprehensive guide to creating and maintaining effective design systems.",
    category: "UI Design",
    date: "March 25, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?system",
    slug: "design-systems-guide"
  },
  {
    id: 7,
    title: "Building a Strong Brand Identity",
    excerpt: "Steps to create a cohesive brand that resonates with your target audience.",
    category: "Branding",
    date: "March 12, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?brand",
    slug: "strong-brand-identity"
  },
  {
    id: 8,
    title: "Accessible Design Practices",
    excerpt: "How to ensure your digital products are accessible to all users.",
    category: "Product Design",
    date: "March 1, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?accessibility",
    slug: "accessible-design-practices"
  },
  {
    id: 9,
    title: "From Wireframes to High-Fidelity Prototypes",
    excerpt: "A step-by-step process for taking your designs from concept to completion.",
    category: "Product Design",
    date: "February 20, 2025",
    imageUrl: "https://source.unsplash.com/random/800x600?wireframe",
    slug: "wireframes-to-prototypes"
  }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen">
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
            <Link to="/about" className="transition-colors hover:text-foreground/80 text-foreground/60">About</Link>
            <Link to="/blog" className="transition-colors hover:text-foreground/80 text-foreground">Blog</Link>
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

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-[#FEF7CD] to-amber-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Blog</h1>
              <p className="mt-4 text-muted-foreground text-lg">
                Insights, tips, and trends from our team of product design experts
              </p>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            {/* Categories */}
            <div className="mb-12 overflow-x-auto">
              <div className="flex flex-nowrap min-w-full pb-4 gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary/50 hover:bg-secondary text-foreground"
                    }`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Featured Post */}
            {activeCategory === "All" && (
              <div className="mb-16">
                <div className="relative overflow-hidden rounded-xl">
                  <div className="bg-black aspect-[21/9]">
                    <img
                      src="https://source.unsplash.com/random/1200x600?design-conference"
                      alt="Featured post"
                      className="object-cover w-full h-full opacity-80"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                    <span className="text-sm font-medium bg-primary text-primary-foreground px-3 py-1 rounded-full w-fit mb-4">Featured</span>
                    <h2 className="text-3xl font-bold text-white mb-2">Innovations Shaping the Future of Digital Product Design</h2>
                    <p className="text-white/80 max-w-2xl mb-4">
                      An in-depth exploration of the technological and design trends that are revolutionizing how users interact with digital products.
                    </p>
                    <div className="flex items-center text-white/60 text-sm">
                      <span>May 15, 2025</span>
                      <span className="mx-2">•</span>
                      <span>10 min read</span>
                    </div>
                    <Button asChild variant="default" className="mt-4 w-fit">
                      <Link to="/blog/innovations-shaping-design">
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Blog Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogPostCard key={post.id} post={post} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
              <p className="mt-4 text-muted-foreground">
                Get the latest insights and articles delivered straight to your inbox.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1"
                />
                <Button>Subscribe</Button>
              </div>
              <p className="mt-3 text-xs text-muted-foreground">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-muted-foreground">hello@gluonlabs.ai</span>
                </li>
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

export default Blog;

// Missing component reference - need to add
function Input(props: any) {
  return <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" {...props} />;
}
