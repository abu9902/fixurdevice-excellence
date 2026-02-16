import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const models = [
  'iPhone 11', 'iPhone 12', 'iPhone 13', 'iPhone 14', 'iPhone 15',
  'iPhone 11 Pro', 'iPhone 12 Pro', 'iPhone 13 Pro', 'iPhone 14 Pro', 'iPhone 15 Pro',
];

const ModelsGrid = () => {
  const ref = useScrollAnimation();

  return (
    <section id="models" className="section-padding" ref={ref} aria-label="iPhone Models We Service">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            iPhone Models We Service
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expert repairs for all iPhone models. From iPhone 11 to the latest iPhone 15 series.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {models.map((model, i) => (
            <div
              key={model}
              className={`animate-on-scroll stagger-${(i % 4) + 1} glass rounded-xl p-5 text-center hover-glow hover-lift cursor-default`}
            >
              <div className="text-3xl mb-3">📱</div>
              <h3 className="text-sm font-semibold text-foreground">{model}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsGrid;
