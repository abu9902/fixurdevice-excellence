import { CheckCircle, Zap, HeadphonesIcon, MapPin, DollarSign, ShieldCheck } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useEffect, useState, useRef } from 'react';

const reasons = [
  { icon: Zap, title: '30-Minute Express Repairs', desc: 'Most screen and battery repairs completed while you wait.' },
  { icon: ShieldCheck, title: '6-Month Warranty', desc: 'Every repair backed by our comprehensive service warranty.' },
  { icon: DollarSign, title: 'Transparent Pricing', desc: 'No hidden costs. Free diagnosis before every repair.' },
  { icon: MapPin, title: 'Doorstep Pickup', desc: 'Free pickup and delivery across Bangalore.' },
  { icon: HeadphonesIcon, title: '24/7 Support', desc: 'Reach us anytime via call or WhatsApp.' },
  { icon: CheckCircle, title: '10,000+ Repairs Done', desc: 'Trusted by thousands of customers across Bangalore.' },
];

const Counter = ({ target, suffix = '' }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 1500;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
};

const WhyChoose = () => {
  const ref = useScrollAnimation();

  return (
    <section id="why-us" className="section-padding bg-card/30" ref={ref} aria-label="Why Choose FixurDevice">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            Why Choose FixurDevice?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bangalore's most trusted iPhone service center with the fastest turnaround times.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-12 animate-on-scroll">
          {[
            { num: 10000, suffix: '+', label: 'Repairs Done' },
            { num: 98, suffix: '%', label: 'Satisfaction Rate' },
            { num: 30, suffix: ' min', label: 'Avg Repair Time' },
          ].map((s) => (
            <div key={s.label} className="text-center glass rounded-xl py-6">
              <div className="text-3xl sm:text-4xl font-bold text-gradient">
                <Counter target={s.num} suffix={s.suffix} />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className={`animate-on-scroll stagger-${Math.min(i + 1, 4)} flex items-start gap-4 glass rounded-xl p-5 hover-glow`}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <r.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-xs text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
