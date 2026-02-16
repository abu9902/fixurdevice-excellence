import { Shield, Clock, Award, Wrench } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const items = [
  { icon: Clock, label: 'Same Day Repair', desc: 'Most repairs done in 30-60 minutes' },
  { icon: Award, label: 'Certified Technicians', desc: 'Apple-trained repair experts' },
  { icon: Shield, label: 'Genuine Apple Parts', desc: 'Original quality components' },
  { icon: Wrench, label: 'Warranty on Service', desc: 'Up to 6 months service warranty' },
];

const TrustBar = () => {
  const ref = useScrollAnimation();

  return (
    <section className="relative z-10 -mt-8 sm:-mt-12 px-4 sm:px-6" ref={ref}>
      <div className="container-narrow">
        <div className="glass-strong rounded-2xl p-6 sm:p-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`animate-on-scroll stagger-${i + 1} flex flex-col items-center text-center gap-3`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-foreground">{item.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
