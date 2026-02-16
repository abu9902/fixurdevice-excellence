import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const areas = [
  { name: 'Indiranagar', desc: 'Fast iPhone repairs near 100 Feet Road, Indiranagar.' },
  { name: 'BTM Layout', desc: 'Same-day service for BTM Layout residents.' },
  { name: 'Whitefield', desc: 'Doorstep iPhone repair in Whitefield, ITPL area.' },
  { name: 'Marathahalli', desc: 'Quick Apple device fixes near Marathahalli Bridge.' },
  { name: 'Electronic City', desc: 'Convenient iPhone service center near Electronic City.' },
  { name: 'Koramangala', desc: 'Trusted repairs near Koramangala 4th Block.' },
];

const ServiceAreas = () => {
  const ref = useScrollAnimation();

  return (
    <section id="areas" className="section-padding bg-card/30" ref={ref} aria-label="Service Areas in Bangalore">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            iPhone Repair Service Areas in Bangalore
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Serving all major areas in Bangalore with free pickup and delivery.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {areas.map((area, i) => (
            <div
              key={area.name}
              className={`animate-on-scroll stagger-${(i % 4) + 1} glass rounded-xl p-6 hover-glow`}
            >
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <h3 className="text-base font-semibold text-foreground">
                  iPhone Repair in {area.name}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
