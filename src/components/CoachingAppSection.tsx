import { Button } from "@/components/ui/button";
import { Play, MessageCircle, TrendingUp, Calendar, Smartphone } from "lucide-react";
import appMockup from "@/assets/app-mockup-screens.jpg";

const CoachingAppSection = () => {
  const features = [
    {
      icon: Play,
      title: "Personalized Workouts",
      description: "Custom workout plans with video demos that adapt to your fitness level and goals."
    },
    {
      icon: TrendingUp,
      title: "Nutrition Tracking",
      description: "Easy meal planning and nutrition tracking designed specifically for women's health."
    },
    {
      icon: Calendar,
      title: "Weekly Check-ins",
      description: "Regular progress reviews and plan adjustments to keep you on track."
    },
    {
      icon: MessageCircle,
      title: "Direct Support",
      description: "Chat with Jas anytime for questions, motivation, and personalized guidance."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Smartphone className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Your Personal Wellness Hub</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Your Health. <span className="text-gradient">In Your Pocket.</span>
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
              Track your workouts, follow your meal plan, check in weekly, and message Jas directly — all inside your own personalized coaching app.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* App Mockup */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src={appMockup}
                  alt="Get Well With Jas Coaching App Screenshots"
                  className="w-full rounded-3xl shadow-card"
                />
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-accent rounded-full p-4 shadow-primary animate-gentle-bounce">
                  <MessageCircle className="w-6 h-6 text-accent-foreground" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-primary rounded-full p-4 shadow-primary animate-gentle-bounce" style={{ animationDelay: '1s' }}>
                  <TrendingUp className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-8 animate-fade-in">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-6 p-6 card-wellness hover:shadow-primary/10 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="card-wellness max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Ready to experience personalized coaching?
              </h3>
              <p className="text-muted-foreground mb-6">
                Get started with your Fit Score Quiz and see how the app can transform your wellness journey.
              </p>
              <Button className="btn-hero">
                🔥 Take the Fit Score Quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingAppSection;