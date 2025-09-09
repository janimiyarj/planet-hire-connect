import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Award, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-6xl font-bold heading-corporate mb-6">
                About <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Planet Hire Services</span>
              </h1>
              <p className="text-xl text-corporate leading-relaxed">
                Incorporated in 2022 with a vision to revolutionize staffing solutions across India
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold heading-corporate">
                    Our Journey
                  </h2>
                  <p className="text-corporate leading-relaxed">
                    Planet Hire Services Pvt. Ltd. was incorporated in 2022 with a clear mission: 
                    to bridge the gap between exceptional talent and forward-thinking organizations 
                    across India. Registered under CIN: U74999TG2022PTC167543, we have quickly 
                    established ourselves as a trusted partner in the staffing and workforce solutions industry.
                  </p>
                  <p className="text-corporate leading-relaxed">
                    With our pan-India presence, we understand the unique challenges and opportunities 
                    in different markets, enabling us to provide localized solutions with national-scale 
                    expertise and consistency.
                  </p>
                </div>
                <div className="card-elevated p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">2022</div>
                      <div className="text-sm text-muted-foreground">Year Incorporated</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success mb-2">500+</div>
                      <div className="text-sm text-muted-foreground">Successful Placements</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-sm text-muted-foreground">Partner Companies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-success mb-2">10+</div>
                      <div className="text-sm text-muted-foreground">Industries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-20 section-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mission */}
                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Target className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold heading-corporate mb-4">Our Mission</h3>
                  <p className="text-corporate leading-relaxed">
                    To connect exceptional talent with outstanding opportunities, enabling 
                    businesses to thrive and professionals to achieve their career aspirations 
                    through innovative staffing solutions.
                  </p>
                </div>

                {/* Vision */}
                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-success/10 flex items-center justify-center group-hover:bg-success/20 transition-colors">
                      <Award className="w-8 h-8 text-success" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold heading-corporate mb-4">Our Vision</h3>
                  <p className="text-corporate leading-relaxed">
                    To be India's most trusted and innovative staffing partner, recognized 
                    for our commitment to excellence, integrity, and transformative workforce 
                    solutions that drive sustainable growth.
                  </p>
                </div>

                {/* Values */}
                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Heart className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold heading-corporate mb-4">Our Values</h3>
                  <p className="text-corporate leading-relaxed">
                    <strong>Integrity:</strong> Honest and transparent relationships<br/>
                    <strong>Excellence:</strong> Uncompromising quality standards<br/>
                    <strong>Innovation:</strong> Forward-thinking solutions<br/>
                    <strong>People-First:</strong> Human-centered approach
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl lg:text-5xl font-bold heading-corporate mb-4">
                  Leadership <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Team</span>
                </h2>
                <p className="text-lg text-corporate max-w-2xl mx-auto">
                  Meet the visionary leaders driving Planet Hire Services forward
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Managing Director */}
                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-success/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold heading-corporate mb-2">Mr. Lalsaheb Shaik</h3>
                  <p className="text-primary font-semibold mb-4">Managing Director</p>
                  <p className="text-corporate leading-relaxed">
                    Visionary leader with extensive experience in workforce solutions and business development, 
                    driving strategic growth and operational excellence across all divisions.
                  </p>
                </div>

                {/* Director */}
                <div className="card-elevated text-center group">
                  <div className="mb-6 flex justify-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-success/20 to-primary/20 flex items-center justify-center">
                      <Users className="w-12 h-12 text-success" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold heading-corporate mb-2">Mr. Sitaramireddy Shabadu</h3>
                  <p className="text-success font-semibold mb-4">Director</p>
                  <p className="text-corporate leading-relaxed">
                    Strategic thought leader focused on innovation and client relationships, 
                    ensuring highest standards of service delivery and sustainable business growth.
                  </p>
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

export default About;