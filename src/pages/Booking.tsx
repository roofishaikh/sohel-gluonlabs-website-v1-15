
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
  "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", 
  "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"
];

const Booking = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    consultationType: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !selectedTime) {
      toast({
        title: "Error",
        description: "Please select a date and time for your consultation.",
        variant: "destructive",
      });
      return;
    }

    // Here you would normally send the form data to your backend
    const bookingData = {
      ...formData,
      date: date ? format(date, "MMMM do, yyyy") : "",
      time: selectedTime
    };
    
    console.log("Booking submitted:", bookingData);
    
    toast({
      title: "Consultation booked!",
      description: `Your consultation is scheduled for ${bookingData.date} at ${bookingData.time}.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      consultationType: "",
      message: ""
    });
    setDate(undefined);
    setSelectedTime(null);
  };

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
            <Link to="/blog" className="transition-colors hover:text-foreground/80 text-foreground/60">Blog</Link>
            <Link to="/contact" className="transition-colors hover:text-foreground/80 text-foreground/60">Contact</Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Button asChild variant="default">
              <Link to="/book">
                <CalendarIcon className="mr-2 h-4 w-4" />
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
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Book a Consultation</h1>
              <p className="mt-4 text-muted-foreground text-lg">
                Schedule a call with our team to discuss your project and how we can help bring your vision to life.
              </p>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Information</CardTitle>
                      <CardDescription>Let us know a bit about you and your project</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">
                          Company
                        </label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="consultationType" className="block text-sm font-medium mb-2">
                          Consultation Type *
                        </label>
                        <select
                          id="consultationType"
                          name="consultationType"
                          value={formData.consultationType}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        >
                          <option value="">Select a type</option>
                          <option value="Product Design">Product Design</option>
                          <option value="UX Research">UX Research</option>
                          <option value="UI Design">UI Design</option>
                          <option value="Branding">Branding</option>
                          <option value="Development">Development</option>
                          <option value="General Consultation">General Consultation</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Project Details
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us briefly about your project or what you'd like to discuss..."
                          value={formData.message}
                          onChange={handleChange}
                          className="min-h-[120px]"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>Choose a Date & Time</CardTitle>
                      <CardDescription>Select your preferred consultation slot</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          className="mx-auto"
                          disabled={(date) => {
                            const day = date.getDay();
                            // Disable weekends
                            return day === 0 || day === 6;
                          }}
                          initialFocus
                        />
                      </div>
                      
                      {date && (
                        <div>
                          <h3 className="text-sm font-medium mb-3">Available Times for {format(date, "MMMM d, yyyy")}</h3>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            {timeSlots.map((time) => (
                              <button
                                key={time}
                                type="button"
                                className={`py-2 px-4 text-sm rounded-md border transition-colors ${
                                  selectedTime === time 
                                    ? "bg-primary text-primary-foreground border-primary" 
                                    : "border-input hover:bg-accent hover:text-accent-foreground"
                                }`}
                                onClick={() => handleTimeSelect(time)}
                              >
                                {time}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      <div className="mt-6">
                        <Button type="submit" size="lg" className="w-full">
                          Book Consultation
                        </Button>
                        <p className="text-xs text-muted-foreground text-center mt-3">
                          Consultations are typically 30 minutes. You'll receive a confirmation email with meeting details.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </form>
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
                  <CalendarIcon className="h-4 w-4 text-muted-foreground" />
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

export default Booking;
