import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "How much time do I need to commit each week?",
      answer: "Most clients see great results with 3-4 workouts per week (30-45 minutes each) plus meal prep time. I design flexible programs that work with busy schedules - whether you have 20 minutes or 2 hours, we'll make it work for your lifestyle."
    },
    {
      question: "Do I need a gym membership or special equipment?",
      answer: "Not necessarily! I create custom workout plans based on what you have access to - whether that's a full gym, basic home equipment, or just bodyweight exercises. I'll work with your current setup and help you get the most out of what's available."
    },
    {
      question: "Can you accommodate dietary restrictions and preferences?",
      answer: "Absolutely! I work with all dietary preferences including vegetarian, vegan, gluten-free, dairy-free, and various cultural food preferences. I believe nutrition should enhance your life, not restrict it, so we'll find an approach that you actually enjoy."
    },
    {
      question: "What makes your approach different from other fitness programs?",
      answer: "I focus on the whole person - not just workouts and meal plans. My approach combines evidence-based fitness and nutrition with women's hormone health, lifestyle factors, and mental wellness. Plus, I create an inclusive space that affirms all identities while respecting diverse family values."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most clients notice improved energy and mood within the first 2 weeks, physical changes within 4-6 weeks, and significant transformations after 3 months. However, everyone's journey is unique, and I focus on sustainable progress rather than quick fixes."
    },
    {
      question: "What level of support can I expect?",
      answer: "Support level depends on your program choice. Elite coaching includes weekly 1:1 calls and unlimited messaging. Group coaching offers bi-weekly calls and community support. All programs include access to me via the coaching app for questions and guidance."
    },
    {
      question: "Do you work with beginners?",
      answer: "Yes! I love working with women who are just starting their fitness journey. I'll meet you exactly where you are and create a plan that feels achievable, not overwhelming. Many of my most successful clients started as complete beginners."
    },
    {
      question: "What if I have a medical condition or previous injuries?",
      answer: "I work with many clients who have medical conditions or injury histories. While I can't provide medical advice, I collaborate with your healthcare team and modify programs as needed. Safety is always the top priority, and I'm experienced in creating effective workouts within medical limitations."
    },
    {
      question: "Is this program family-friendly?",
      answer: "Definitely! I understand the importance of family values and create programs that work with family life. Many clients include their kids in activities, and I provide guidance on modeling healthy habits for children while maintaining your personal health goals."
    },
    {
      question: "What happens if I need to pause or change my program?",
      answer: "Life happens, and I get it! All programs offer flexibility for life changes, travel, illness, or shifting priorities. We can pause, modify, or adjust your program as needed. The goal is long-term success, not perfect adherence to a rigid plan."
    }
  ];

  return (
    <section className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3 mb-6">
              <HelpCircle className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Got Questions?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>

            <p className="text-xl font-serif text-muted-foreground max-w-3xl mx-auto">
              I get these questions a lot! If you don't see your question here, feel free to reach out directly.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="animate-slide-up">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="card-wellness border-0 shadow-soft"
                >
                  <AccordionTrigger className="text-left text-lg font-heading font-semibold text-foreground hover:text-primary hover:no-underline px-6 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed px-6 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="card-wellness max-w-2xl mx-auto">
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-muted-foreground mb-6">
                I'd love to chat with you personally about your goals and answer any questions you have about working together.
              </p>
              <button className="btn-accent">
                💬 Book a Free 15-Minute Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;