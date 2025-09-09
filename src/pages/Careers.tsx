import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Upload, Users, TrendingUp, Award, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Careers = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: ""
  });
  const [resume, setResume] = useState<File | null>(null);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !resume) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields and upload your resume.",
        variant: "destructive"
      });
      return;
    }

    // Here you would normally send the data to your backend
    // For now, we'll show a success message
    toast({
      title: "Application Submitted!",
      description: "Thank you for your interest. We'll contact you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", coverLetter: "" });
    setResume(null);
    const fileInput = document.getElementById("resume") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
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
                Build Your <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Career</span> With Us
              </h1>
              <p className="text-xl text-corporate leading-relaxed mb-8">
                Access jobs across multiple industries, work with top employers, and get career guidance & training support
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold heading-corporate mb-4">
                  Why Work <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">With Us</span>
                </h2>
                <p className="text-lg text-corporate max-w-2xl mx-auto">
                  Join a network of professionals who are shaping the future of work
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold heading-corporate mb-3">
                    Top Employers
                  </h3>
                  <p className="text-corporate text-sm">
                    Access exclusive opportunities with leading companies across industries
                  </p>
                </div>

                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <TrendingUp className="w-8 h-8 text-success" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold heading-corporate mb-3">
                    Career Growth
                  </h3>
                  <p className="text-corporate text-sm">
                    Continuous learning and development opportunities to advance your career
                  </p>
                </div>

                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Award className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold heading-corporate mb-3">
                    Expert Guidance
                  </h3>
                  <p className="text-corporate text-sm">
                    Professional career counseling and interview preparation support
                  </p>
                </div>

                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <Globe className="w-8 h-8 text-success" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold heading-corporate mb-3">
                    Pan-India Reach
                  </h3>
                  <p className="text-corporate text-sm">
                    Opportunities available across all major cities and regions in India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl lg:text-5xl font-bold heading-corporate mb-4">
                  Apply <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Now</span>
                </h2>
                <p className="text-lg text-corporate">
                  Take the first step towards your dream career
                </p>
              </div>

              <div className="card-elevated max-w-2xl mx-auto">
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
                    <Label htmlFor="resume">Upload Resume *</Label>
                    <div className="relative">
                      <Input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeUpload}
                        className="form-corporate"
                        required
                      />
                      <Upload className="absolute right-3 top-3 w-4 h-4 text-muted-foreground" />
                    </div>
                    {resume && (
                      <p className="text-sm text-success">✓ {resume.name} uploaded</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="coverLetter">Cover Letter / Message</Label>
                    <Textarea
                      id="coverLetter"
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      placeholder="Tell us about yourself and why you're interested in working with us..."
                      className="form-corporate min-h-[120px] resize-none"
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full text-lg py-4">
                    Submit Application
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;