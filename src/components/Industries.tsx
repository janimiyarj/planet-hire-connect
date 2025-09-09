import { Heart, Monitor, DollarSign, Cog, ShoppingBag, Coffee, Building } from "lucide-react";

const industries = [
  {
    icon: Heart,
    title: "Healthcare",
    description: "Medical professionals, nurses, healthcare administrators, and specialized support staff.",
    color: "text-red-500"
  },
  {
    icon: Monitor,
    title: "Information Technology",
    description: "Software developers, system administrators, data analysts, and IT specialists.",
    color: "text-blue-500"
  },
  {
    icon: DollarSign,
    title: "Finance & Banking",
    description: "Financial analysts, investment professionals, banking specialists, and accounting experts.",
    color: "text-green-500"
  },
  {
    icon: Cog,
    title: "Engineering & Manufacturing",
    description: "Mechanical engineers, production managers, quality specialists, and technical experts.",
    color: "text-orange-500"
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description: "Sales professionals, inventory managers, customer service, and digital marketing specialists.",
    color: "text-purple-500"
  },
  {
    icon: Coffee,
    title: "Hospitality & Services",
    description: "Hotel management, food service professionals, event coordinators, and customer experience specialists.",
    color: "text-amber-500"
  },
  {
    icon: Building,
    title: "Other Sectors",
    description: "Legal services, education, construction, logistics, and various specialized industries.",
    color: "text-gray-500"
  }
];

const Industries = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold heading-corporate mb-4">
              Industries We <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">Serve</span>
            </h2>
            <p className="text-lg text-corporate max-w-2xl mx-auto">
              Specialized talent solutions across diverse sectors and industries
            </p>
          </div>

          {/* Industries Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className="card-elevated group text-center hover:border-primary/20 transition-all duration-300"
                >
                  <div className="mb-4 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <IconComponent className={`w-8 h-8 ${industry.color}`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold heading-corporate mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-corporate leading-relaxed">
                    {industry.description}
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

export default Industries;