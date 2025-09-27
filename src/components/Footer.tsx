import { Heart, Instagram, Facebook, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Get Well With Jas
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering women to build sustainable health habits through inclusive, personalized coaching that honors your values and celebrates your journey.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Programs</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">1:1 Elite Coaching</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Group Coaching</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Self-Guided Plans</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Fit Score Quiz</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-heading font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Free Consultation</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Contact</a></li>
                <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 Get Well With Jas. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/80">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 fill-current text-accent" />
              <span className="text-sm">for strong, empowered women</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;