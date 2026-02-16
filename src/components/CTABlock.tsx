import { Phone, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const CTABlock = () => {
  const ref = useScrollAnimation();

  return (
    <section className="section-padding" ref={ref} aria-label="Book Your Repair">
      <div className="container-narrow animate-on-scroll">
        <div className="relative glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 text-center overflow-hidden">
          {/* Glow effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px]" />

          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
              Ready to Fix Your iPhone?
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto mb-8">
              Get a free diagnosis and same-day repair. Call us now or send a message on WhatsApp.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:brightness-110 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20iPhone%20repair"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass hover-glow px-8 py-4 rounded-xl text-base font-semibold text-foreground"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABlock;
