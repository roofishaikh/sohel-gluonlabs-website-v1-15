
import { useRef, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Working with Gluon Labs transformed our product. Their design expertise and attention to detail resulted in a user experience that our customers love.",
    author: "Sarah Johnson",
    position: "CEO, TechStart",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    quote: "The team at Gluon Labs understood our vision from day one. They delivered a design that perfectly balances aesthetics and functionality.",
    author: "Michael Chen",
    position: "Product Manager, InnovateCo",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    quote: "Their collaborative approach made the design process smooth and enjoyable. The end result exceeded our expectations in every way.",
    author: "Emma Rodriguez",
    position: "Founder, CreativeFlow",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    quote: "Gluon Labs doesn't just create beautiful designs—they create meaningful experiences that drive business results.",
    author: "David Lee",
    position: "Director of Digital, GrowthBrand",
    avatar: "https://i.pravatar.cc/150?img=4"
  }
];

const TestimonialSlider = () => {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto"
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="bg-card border border-border/40">
                <CardContent className="flex flex-col p-6 gap-4">
                  <div className="text-xl text-muted-foreground">"</div>
                  <p className="text-sm">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4 mt-2">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author} 
                      className="rounded-full w-10 h-10 object-cover"
                    />
                    <div>
                      <p className="font-medium text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.position}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center mt-8">
        <CarouselPrevious className="static transform-none mx-2" />
        <CarouselNext className="static transform-none mx-2" />
      </div>
    </Carousel>
  );
};

export default TestimonialSlider;
