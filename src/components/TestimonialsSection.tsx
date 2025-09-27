import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      role: "Busy Mom of 2",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612c1c8?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Jas helped me find a sustainable routine that actually fits my crazy mom life. I've lost 25 pounds and feel stronger than I have in years!",
      result: "Lost 25 lbs • Gained confidence"
    },
    {
      name: "Maria L.",
      role: "Working Professional",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "The personalized nutrition plan was a game-changer. No more restrictive dieting - just real food that fuels my body and busy schedule.",
      result: "Improved energy • Better sleep"
    },
    {
      name: "Alex R.",
      role: "New to Fitness",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "I was intimidated by fitness, but Jas created a welcoming space where I could learn and grow. The app makes everything so easy to follow!",
      result: "First time finishing a workout program"
    },
    {
      name: "Jennifer K.",
      role: "Returning to Fitness",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "After years of yo-yo dieting, Jas taught me how to build sustainable habits. I'm finally at peace with food and my body.",
      result: "Healed relationship with food"
    },
    {
      name: "Taylor S.",
      role: "LGBTQ+ Community",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Finding a coach who truly understands and affirms my identity while helping me reach my health goals has been life-changing.",
      result: "Found inclusive fitness community"
    },
    {
      name: "Rachel P.",
      role: "Hormone Health Focus",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      quote: "Jas's approach to women's hormone health is incredible. My energy is stable, my mood is better, and I actually enjoy working out now!",
      result: "Balanced hormones • Stable energy"
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-rose/10 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-rose" />
              <span className="text-sm font-medium text-rose">Success Stories</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Real Women. <span className="text-gradient">Real Results.</span>
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
              See how women just like you have transformed their health, confidence, and relationship with fitness and food.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 card-wellness hover:shadow-primary/10 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" />
                  <p className="text-foreground/80 leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>

                {/* Result */}
                <div className="bg-primary/5 rounded-lg p-3 border border-primary/20">
                  <div className="text-xs font-medium text-primary uppercase tracking-wider mb-1">
                    Key Result
                  </div>
                  <div className="text-sm font-medium text-foreground">
                    {testimonial.result}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Women Transformed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">95%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Workouts Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;