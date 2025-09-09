import { Globe, Zap, Users, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Pan-India Presence",
    description: "Extensive network across all major cities and regions in India, ensuring local expertise with national reach."
  },
  {
    icon: Zap,
    title: "Speed & Reliability",
    description: "Quick turnaround times without compromising on quality, meeting your urgent staffing requirements."
  },
  {
    icon: Users,
    title: "Quality Talent Pool",
    description: "Pre-screened, verified professionals with proven track records in their respective fields."
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    description: "Customized solutions tailored to your specific business needs and organizational culture."
  },
  {
    icon: TrendingUp,
    title: "Future-Ready Hiring",
    description: "Innovative recruitment strategies that align with evolving market trends and technologies."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold heading-corporate mb-4">
              Why Choose <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Planet Hire</span>
            </h2>
            <p className="text-lg text-corporate max-w-2xl mx-auto">
              Your success is our mission. We deliver exceptional staffing solutions that drive business growth.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="card-elevated group text-center hover:border-primary/20 transition-all duration-300"
                >
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-success/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-success/20 transition-all">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold heading-corporate mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-corporate leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="card-corporate max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold heading-corporate mb-4">
                Ready to Transform Your Workforce?
              </h3>
              <p className="text-corporate mb-6">
                Partner with Planet Hire Services and experience the difference that quality staffing makes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  Get Started Today
                </button>
                <button className="btn-success">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;