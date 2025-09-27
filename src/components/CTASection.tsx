import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-rose/5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Your Transformation Awaits</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Ready to Feel <span className="text-gradient">Strong, Balanced,</span><br />
              and Empowered?
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto mb-8">
              Stop waiting for the "perfect" time. Your health and happiness matter right now, and I'm here to support every step of your journey.
            </p>
          </div>

          {/* Main CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up">
            <Button className="btn-hero text-xl px-12 py-6 group">
              🔥 Take the Fit Score Quiz
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button className="btn-accent text-xl px-12 py-6">
              💬 Book Your Free Strategy Call
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                No Judgment Zone
              </h3>
              <p className="text-sm text-muted-foreground">
                Inclusive, supportive coaching that meets you exactly where you are
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Values-Aligned
              </h3>
              <p className="text-sm text-muted-foreground">
                Respecting your family values while celebrating your identity
              </p>
            </div>

            <div className="text-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-rose/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-rose" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                Proven Results
              </h3>
              <p className="text-sm text-muted-foreground">
                100+ women transformed with sustainable, lasting changes
              </p>
            </div>
          </div>

          {/* Final Message */}
          <div className="card-wellness max-w-2xl mx-auto">
            <blockquote className="text-xl font-serif italic text-foreground/80 mb-6">
              "The best time to plant a tree was 20 years ago. The second best time is now."
            </blockquote>
            <p className="text-muted-foreground mb-8">
              Your future self is counting on the decision you make today. Let's create a health and fitness plan that actually sticks — one that honors who you are and supports who you're becoming.
            </p>
            
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary font-medium">
                ✨ Your transformation starts with a single step ✨
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-hero">
                  Start Your Fit Score Quiz
                </Button>
                <Button variant="outline" className="btn-outline">
                  Schedule Free Consultation
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>Questions? Email me directly at <a href="mailto:hello@getwellwithjas.com" className="text-primary hover:underline">hello@getwellwithjas.com</a></p>
            <p className="mt-2">Follow along: <a href="#" className="text-primary hover:underline">@getwellwithjas</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;