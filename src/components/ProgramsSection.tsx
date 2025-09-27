import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Users, User, Heart } from "lucide-react";

const ProgramsSection = () => {
  const programs = [
    {
      title: "1:1 Elite Coaching",
      subtitle: "Complete Transformation",
      icon: User,
      price: "Custom Pricing",
      popular: true,
      description: "Fully personalized coaching with Jas including custom workouts, nutrition plans, weekly calls, and unlimited support.",
      features: [
        "Weekly 1:1 coaching calls",
        "Custom workout & nutrition plans",
        "Unlimited messaging support",
        "Habit & lifestyle coaching",
        "Monthly progress reviews",
        "Access to coaching app"
      ],
      cta: "Apply for Elite Coaching"
    },
    {
      title: "Group Coaching",
      subtitle: "Community + Results",
      icon: Users,
      price: "$297/month",
      popular: false,
      description: "Join a supportive community of women with group coaching sessions, shared accountability, and personalized plans.",
      features: [
        "Bi-weekly group coaching calls",
        "Personalized workout plans",
        "Group nutrition challenges",
        "Private community access",
        "Monthly individual check-ins",
        "Access to coaching app"
      ],
      cta: "Join Group Coaching"
    },
    {
      title: "Self-Guided Plans",
      subtitle: "DIY with Support",
      icon: Heart,
      price: "$97/month",
      popular: false,
      description: "Get Jas's proven workout and nutrition templates with monthly group Q&A sessions for guidance and support.",
      features: [
        "Library of workout plans",
        "Nutrition guides & templates",
        "Monthly group Q&A calls",
        "Access to private community",
        "Email support",
        "Access to coaching app"
      ],
      cta: "Start Self-Guided Plan"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Coaching Programs</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Choose Your <span className="text-gradient">Transformation Path</span>
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
              Whether you thrive with personal attention, love community support, or prefer to go at your own pace — there's a perfect program for you.
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card
                key={index}
                className={`relative p-8 card-wellness hover:shadow-primary/10 transition-all duration-300 animate-slide-up ${
                  program.popular ? 'ring-2 ring-primary' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {program.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}

                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <program.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-1">
                    {program.title}
                  </h3>
                  <p className="text-accent font-serif italic">
                    {program.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <div className="text-3xl font-heading font-bold text-primary">
                    {program.price}
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {program.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button className={program.popular ? "btn-hero w-full" : "btn-outline w-full"}>
                  {program.cta}
                </Button>
              </Card>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center card-wellness max-w-2xl mx-auto">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
              Not sure which program is right for you?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book a free consultation call and let's chat about your goals, lifestyle, and which approach will get you the best results.
            </p>
            <Button className="btn-accent">
              💬 Book Your Free Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;