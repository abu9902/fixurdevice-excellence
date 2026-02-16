import { Phone, MessageCircle } from 'lucide-react';
import Grainient from './Grainient';
import iphoneHero from '@/assets/iphone-hero.jpg';
import iphoneBefore from '@/assets/iphone-before.jpg';
import iphoneAfter from '@/assets/iphone-after.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      {/* Grainient Background */}
      <div className="absolute inset-0 z-0">
        <Grainient
          color1="#1a73e8"
          color2="#0d1117"
          color3="#1e1e2f"
          timeSpeed={0.15}
          warpStrength={0.8}
          warpFrequency={3}
          warpSpeed={1}
          warpAmplitude={60}
          rotationAmount={300}
          noiseScale={1.5}
          grainAmount={0.06}
          contrast={1.3}
          saturation={0.9}
          zoom={1}
        />
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 z-[1] bg-background/40" />

      <div className="relative z-10 container-narrow w-full section-padding pt-28 sm:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs text-muted-foreground mb-6 animate-fade-up">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Trusted by 10,000+ customers in Bangalore
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <span className="text-gradient-white">iPhone Service Center</span>
              <br />
              <span className="text-gradient-white">in Bangalore –</span>
              <br />
              <span className="text-gradient">FixurDevice</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Same-day iPhone, MacBook &amp; Apple device repairs by certified technicians. Genuine parts. Warranty on every service.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl text-base font-semibold hover:brightness-110 transition-all animate-pulse-glow"
              >
                <Phone className="w-5 h-5" />
                Call Now – Free Diagnosis
              </a>
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20iPhone%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 glass hover-glow px-8 py-4 rounded-xl text-base font-semibold text-foreground transition-all"
              >
                <MessageCircle className="w-5 h-5 text-green-400" />
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Right - iPhone Visual + Before/After */}
          <div className="relative flex flex-col items-center gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {/* Main iPhone Image */}
            <div className="relative animate-float">
              <div className="absolute inset-0 rounded-3xl glow-primary opacity-40 blur-2xl" />
              <img
                src={iphoneHero}
                alt="iPhone repair service at FixurDevice Bangalore - professional screen and battery replacement"
                className="relative w-64 sm:w-72 lg:w-80 rounded-3xl object-cover shadow-2xl"
                loading="eager"
                width={320}
                height={400}
              />
            </div>

            {/* Before/After Cards */}
            <div className="flex gap-4 w-full max-w-sm">
              <div className="flex-1 glass rounded-xl p-3 hover-lift">
                <p className="text-xs text-muted-foreground mb-2 text-center font-medium">Before</p>
                <img
                  src={iphoneBefore}
                  alt="Damaged iPhone screen before repair at FixurDevice"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                  loading="eager"
                  width={160}
                  height={213}
                />
              </div>
              <div className="flex-1 glass rounded-xl p-3 hover-lift border-primary/30">
                <p className="text-xs text-primary mb-2 text-center font-medium">After</p>
                <img
                  src={iphoneAfter}
                  alt="Repaired iPhone screen after professional service at FixurDevice"
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                  loading="eager"
                  width={160}
                  height={213}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
