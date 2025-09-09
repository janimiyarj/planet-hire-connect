import { Users, Search, UserCheck, FileText, DollarSign, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Permanent Staffing",
    description: "Find the right full-time professionals for your organization's long-term growth and success.",
    color: "text-primary"
  },
  {
    icon: UserCheck,
    title: "Temporary & Contract Staffing",
    description: "Flexible workforce solutions for project-based requirements and seasonal demands.",
    color: "text-success"
  },
  {
    icon: Search,
    title: "Executive Search",
    description: "Specialized recruitment for leadership and senior management positions across industries.",
    color: "text-primary"
  },
  {
    icon: FileText,
    title: "Recruitment Process Outsourcing (RPO)",
    description: "Complete end-to-end recruitment solutions tailored to your business needs.",
    color: "text-success"
  },
  {
    icon: DollarSign,
    title: "Payroll & Compliance Services",
    description: "Comprehensive payroll management and regulatory compliance support.",
    color: "text-primary"
  },
  {
    icon: GraduationCap,
    title: "Training & Development",
    description: "Skill enhancement programs to upskill your workforce and improve productivity.",
    color: "text-success"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold heading-corporate mb-4">
              Our <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-lg text-corporate max-w-2xl mx-auto">
              Comprehensive staffing and workforce solutions designed to meet your business objectives
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="card-elevated group hover:border-primary/20 transition-all duration-300"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <IconComponent className={`w-6 h-6 ${service.color}`} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold heading-corporate mb-3">
                    {service.title}
                  </h3>
                  <p className="text-corporate leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;