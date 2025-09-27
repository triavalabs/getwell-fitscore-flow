import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Target, Zap } from "lucide-react";

const FitScoreQuiz = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-3 mb-6">
              <Target className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-accent">Free Assessment</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              What's Your <span className="text-gradient">Fit Score?</span>
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto mb-8">
              In less than 2 minutes, discover your personalized fitness, nutrition, and wellness score — and get a free action plan from Jas.
            </p>
          </div>

          {/* Quiz Preview */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 card-wellness animate-slide-up">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Quick & Easy
              </h3>
              <p className="text-muted-foreground text-sm">
                Just 8 questions about your current fitness, nutrition habits, and wellness goals.
              </p>
            </Card>

            <Card className="p-6 card-wellness animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Personalized
              </h3>
              <p className="text-muted-foreground text-sm">
                Get your unique Fit Score based on fitness level, nutrition habits, and lifestyle.
              </p>
            </Card>

            <Card className="p-6 card-wellness animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-rose/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-rose" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                Actionable
              </h3>
              <p className="text-muted-foreground text-sm">
                Receive a custom action plan with next steps tailored to your results.
              </p>
            </Card>
          </div>

          {/* Quiz Mockup */}
          <div className="card-wellness max-w-2xl mx-auto mb-12 animate-fade-in">
            <div className="bg-muted/50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-muted-foreground">Question 3 of 8</span>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                    <div
                      key={i}
                      className={`w-8 h-2 rounded-full ${
                        i <= 3 ? 'bg-primary' : 'bg-border'
                      }`}
                    />
                  ))}
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold text-foreground mb-6">
                How would you describe your current fitness routine?
              </h3>

              <div className="space-y-3">
                {[
                  "I work out consistently 4+ times per week",
                  "I exercise 2-3 times per week",
                  "I'm just getting started (1-2 times per week)",
                  "I'm not currently exercising regularly"
                ].map((option, index) => (
                  <button
                    key={index}
                    className="w-full text-left p-4 rounded-xl border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300"
                  >
                    <span className="text-foreground">{option}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-6">
                🔒 Your information is completely secure and will never be shared.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button className="btn-hero text-xl px-12 py-6 group">
              🔥 Start Your Fit Score Quiz
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No spam, ever</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Instant results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitScoreQuiz;