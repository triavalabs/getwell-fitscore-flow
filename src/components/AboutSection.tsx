import coachImage from "@/assets/jas-real-photo.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative animate-slide-up">
              <div className="relative">
                <img
                  src={coachImage}
                  alt="Jas - Women's Health & Wellness Coach"
                  className="rounded-3xl shadow-card w-full max-w-lg mx-auto"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent rounded-full p-6 shadow-primary">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent-foreground">100+</div>
                    <div className="text-sm text-accent-foreground/80">Women Empowered</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="animate-fade-in">
              <div className="mb-6">
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">Meet Your Coach</span>
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-2 mb-4">
                  Hey, I'm Jas! 👋
                </h2>
                <p className="text-xl font-serif text-accent italic">
                  Your wellness journey starts with someone who gets it.
                </p>
              </div>

              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
                <p>
                  I believe every woman deserves to feel <strong className="text-primary">strong, confident, and completely supported</strong> on her health journey – no matter where she's starting from or what her story looks like.
                </p>

                <p>
                  As your coach, I bring together evidence-based fitness and nutrition with a deep understanding of women's unique health needs. Whether you're a busy mom, career-focused, part of the LGBTQ+ community, or navigating family expectations – <strong className="text-primary">you belong here</strong>.
                </p>

                <p>
                  My approach is simple: <strong className="text-accent">real plans for real women</strong>. No cookie-cutter programs, no judgment, just personalized support that fits your life and honors your values.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-card rounded-2xl border border-border/50">
                  <div className="text-2xl font-bold text-primary">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-card rounded-2xl border border-border/50">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Workouts Created</div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/20">
                <h3 className="font-semibold text-primary mb-3">My Promise to You:</h3>
                <ul className="space-y-2 text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Inclusive, judgment-free coaching that celebrates all bodies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Respect for your family values and personal beliefs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary mt-1">✓</span>
                    <span>Sustainable changes that actually stick</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;