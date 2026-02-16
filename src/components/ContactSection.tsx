import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, FormEvent } from 'react';

const ContactSection = () => {
  const ref = useScrollAnimation();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding bg-card/30" ref={ref} aria-label="Contact Us">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            Contact FixurDevice
          </h2>
          <p className="text-muted-foreground">
            Visit us or book a repair online. Free diagnosis on all devices.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 animate-on-scroll">
          {/* Info + Map */}
          <div className="space-y-6">
            <div className="glass rounded-xl p-6 space-y-5">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">FixurDevice</h3>
                  <p className="text-sm text-muted-foreground">
                    123, 1st Floor, 100 Feet Road, Indiranagar, Bangalore - 560038
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-foreground hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:support@fixurdevice.com" className="text-sm text-foreground hover:text-primary transition-colors">
                  support@fixurdevice.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <p className="text-sm text-muted-foreground">Mon–Sat: 10AM – 8PM | Sun: 11AM – 6PM</p>
              </div>
            </div>

            {/* Map */}
            <div className="glass rounded-xl overflow-hidden aspect-[4/3]">
              <iframe
                title="FixurDevice Location in Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.6410!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sIndiranagar%2C+Bangalore!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Booking Form */}
          <div className="glass rounded-xl p-6 sm:p-8">
            <h3 className="text-lg font-semibold text-foreground mb-6">Book Your Repair</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Booking Received!</h4>
                <p className="text-sm text-muted-foreground">
                  We'll call you within 30 minutes to confirm your repair.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-muted-foreground mb-1.5">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm text-muted-foreground mb-1.5">Phone Number</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label htmlFor="model" className="block text-sm text-muted-foreground mb-1.5">iPhone Model</label>
                  <select
                    id="model"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  >
                    <option value="">Select Model</option>
                    <option>iPhone 11</option>
                    <option>iPhone 12</option>
                    <option>iPhone 13</option>
                    <option>iPhone 14</option>
                    <option>iPhone 15</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="issue" className="block text-sm text-muted-foreground mb-1.5">Issue Description</label>
                  <textarea
                    id="issue"
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                    placeholder="Describe your issue..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold hover:brightness-110 transition-all"
                >
                  Book Repair – Free Diagnosis
                </button>
                <a
                  href="https://wa.me/919876543210?text=Hi%20I%20need%20iPhone%20repair"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 glass hover-glow py-3.5 rounded-xl font-semibold text-foreground"
                >
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  Or WhatsApp Us
                </a>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
