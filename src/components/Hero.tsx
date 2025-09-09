import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Globe, Award } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center section-gradient">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold heading-corporate leading-tight">
                  Connecting Talent with{" "}
                  <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                    Opportunity
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-corporate max-w-2xl">
                  Across Industries, Across Boundaries
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-lg text-corporate leading-relaxed">
                  We are a trusted pan-India staffing and workforce solutions partner, 
                  bridging the gap between businesses and skilled professionals.
                </p>
                
                {/* Key Highlights */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <Globe className="w-4 h-4 text-primary" />
                    <span>Trusted Staffing Partner Across India</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4 text-success" />
                    <span>Scalable Workforce Solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span>Pre-screened, Quality Talent Pool</span>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="btn-hero text-lg px-8 py-4">
                  Hire Talent
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="btn-corporate text-lg px-8 py-4">
                  Explore Jobs
                </Button>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="card-elevated hero-glow p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h3 className="text-2xl font-bold text-primary">500+</h3>
                    <p className="text-sm text-muted-foreground">Successful Placements</p>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-xl">
                    <h3 className="text-2xl font-bold text-success">50+</h3>
                    <p className="text-sm text-muted-foreground">Partner Companies</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-xl">
                    <h3 className="text-2xl font-bold text-primary">10+</h3>
                    <p className="text-sm text-muted-foreground">Industries Served</p>
                  </div>
                  <div className="text-center p-4 bg-success/10 rounded-xl">
                    <h3 className="text-2xl font-bold text-success">24/7</h3>
                    <p className="text-sm text-muted-foreground">Support Available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;