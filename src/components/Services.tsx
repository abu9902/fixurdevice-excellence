import { Smartphone, Battery, Droplets, Cpu } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const services = [
  {
    icon: Smartphone,
    title: 'iPhone Screen Replacement',
    desc: 'Cracked or broken screen? Get an OEM-quality screen replacement with same-day service. Original display quality guaranteed.',
    keywords: 'iPhone screen replacement Bangalore',
  },
  {
    icon: Battery,
    title: 'iPhone Battery Replacement',
    desc: 'Restore your iPhone battery life to 100%. Genuine battery cells with health monitoring support.',
    keywords: 'iPhone battery replacement Bangalore',
  },
  {
    icon: Droplets,
    title: 'iPhone Water Damage Repair',
    desc: 'Expert water damage recovery with ultrasonic cleaning. Save your data and device from liquid damage.',
    keywords: 'iPhone water damage repair Bangalore',
  },
  {
    icon: Cpu,
    title: 'iPhone Motherboard Repair',
    desc: "Advanced micro-soldering and IC-level motherboard repair. We fix what others can't.",
    keywords: 'iPhone motherboard repair Bangalore',
  },
];

const Services = () => {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="section-padding" ref={ref} aria-label="Our Services">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            Our Expert iPhone Repair Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional Apple device repairs in Bangalore with genuine parts and certified technicians.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <a
              key={s.title}
              href={`#${s.keywords.replace(/\s+/g, '-').toLowerCase()}`}
              className={`animate-on-scroll stagger-${i + 1} group glass rounded-2xl p-6 sm:p-8 hover-glow hover-lift cursor-pointer block`}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <span className="inline-block mt-4 text-sm text-primary font-medium group-hover:translate-x-1 transition-transform">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
