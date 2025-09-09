import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Globe, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    // For now, we'll show a success message
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold heading-corporate mb-6">
                Get In <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="text-xl text-corporate leading-relaxed">
                Ready to transform your workforce? We're here to help you find the perfect staffing solution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold heading-corporate mb-6">
                      Contact Information
                    </h2>
                    <p className="text-corporate leading-relaxed mb-8">
                      Reach out to us through any of the following channels. Our team is ready to assist you with your staffing needs.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold heading-corporate mb-1">Email Address</h3>
                        <p className="text-corporate">dummy@planethireservices.com</p>
                        <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h3 className="font-semibold heading-corporate mb-1">Phone Number</h3>
                        <p className="text-corporate">+91-9876543210</p>
                        <p className="text-sm text-muted-foreground">Available Monday to Friday, 9 AM - 6 PM</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Globe className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold heading-corporate mb-1">Service Area</h3>
                        <p className="text-corporate">Pan-India Presence</p>
                        <p className="text-sm text-muted-foreground">Serving all major cities and regions</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-success" />
                      </div>
                      <div>
                        <h3 className="font-semibold heading-corporate mb-1">Business Hours</h3>
                        <p className="text-corporate">Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Company Details */}
                  <div className="card-corporate">
                    <h3 className="font-semibold heading-corporate mb-4">Company Details</h3>
                    <div className="space-y-2 text-sm text-corporate">
                      <p><strong>Company:</strong> Planet Hire Services Pvt. Ltd.</p>
                      <p><strong>CIN:</strong> U74999TG2022PTC167543</p>
                      <p><strong>Incorporated:</strong> 2022</p>
                      <p><strong>Industry:</strong> Staffing & Workforce Solutions</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="card-elevated">
                  <div className="mb-8">
                    <h2 className="text-3xl font-bold heading-corporate mb-4">
                      Send Us a Message
                    </h2>
                    <p className="text-corporate">
                      Fill out the form below and we'll get back to you as soon as possible.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-corporate"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-corporate"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-corporate"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe your staffing requirements or any questions you have..."
                        className="form-corporate min-h-[120px] resize-none"
                        required
                      />
                    </div>

                    <Button type="submit" className="btn-hero w-full text-lg py-4">
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="card-corporate">
                <h2 className="text-3xl font-bold heading-corporate mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-corporate mb-8 leading-relaxed">
                  Whether you're looking to hire talent or seeking new opportunities, 
                  Planet Hire Services is here to help you succeed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="btn-hero">
                    Schedule Consultation
                  </Button>
                  <Button className="btn-success">
                    Explore Our Services
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;