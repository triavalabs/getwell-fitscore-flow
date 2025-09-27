import { Card } from "@/components/ui/card";
import { ArrowRight, UserCheck, Target, TrendingUp, Sparkles } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      step: "01",
      icon: UserCheck,
      title: "Apply & Connect",
      description: "Take the Fit Score Quiz or book a free call. We'll discuss your goals, challenges, and find the perfect program fit.",
      details: [
        "Complete your Fit Score assessment",
        "Free 30-minute strategy call",
        "Discuss your health history & goals",
        "Choose your coaching program"
      ]
    },
    {
      step: "02",
      icon: Target,
      title: "Get Your Personalized Plan",
      description: "Receive your custom workout routines, nutrition guidelines, and lifestyle recommendations designed specifically for your body and goals.",
      details: [
        "Custom workout plans with video demos",
        "Personalized nutrition guidelines",
        "Habit-building roadmap",
        "Access to your coaching app"
      ]
    },
    {
      step: "03",
      icon: TrendingUp,
      title: "Transform with Support",
      description: "Execute your plan with ongoing coaching, weekly check-ins, and unlimited support. Adjust as needed and celebrate your wins!",
      details: [
        "Weekly progress reviews",
        "Plan adjustments as you grow",
        "Direct support via app messaging",
        "Celebrate milestones together"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Your Journey</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              How It <span className="text-gradient">Works</span>
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
              Your transformation journey is simple, supportive, and designed to create lasting change. Here's exactly what to expect.
            </p>
          </div>

          {/* Steps */}
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-primary to-accent transform -translate-x-1/2"></div>
                )}

                <div className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:[direction:rtl]' : ''
                }`}>
                  {/* Content */}
                  <div className={`animate-slide-up ${index % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="text-6xl font-heading font-bold text-primary/20">
                        {step.step}
                      </div>
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    <h3 className="text-3xl font-heading font-bold text-foreground mb-4">
                      {step.title}
                    </h3>

                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-foreground/80">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Visual */}
                  <Card className={`card-wellness p-8 animate-fade-in ${index % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                        <step.icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                      
                      <h4 className="text-xl font-heading font-semibold text-foreground mb-4">
                        Step {step.step.replace('0', '')}
                      </h4>
                      
                      <div className="space-y-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>

                      {index < steps.length - 1 && (
                        <div className="mt-6 flex justify-center">
                          <ArrowRight className="w-6 h-6 text-primary animate-gentle-bounce" />
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="card-wellness max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Ready to start your transformation?
              </h3>
              <p className="text-muted-foreground mb-6">
                Take the first step today and discover exactly how we can help you reach your health and fitness goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-hero">
                  🔥 Take the Fit Score Quiz
                </button>
                <button className="btn-outline">
                  💬 Book a Free Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;