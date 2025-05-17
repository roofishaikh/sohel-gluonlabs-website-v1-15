
import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-[#FEF7CD] to-amber-50">
      <div className="container px-4 md:px-6 flex flex-col items-center space-y-10">
        <div className="space-y-6 text-center max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Design That Brings Your 
            <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent"> Product Vision </span>
            To Life
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            Gluon Labs is a premier product design studio helping small and medium businesses create exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/book">
                <Calendar className="mr-2 h-4 w-4" />
                Book a Consultation
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-5xl h-[400px] overflow-hidden rounded-lg shadow-xl">
          <img 
            src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80" 
            alt="Design team working together" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent mix-blend-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
