import { Star } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useState, useEffect } from 'react';

const reviews = [
  { name: 'Priya S.', text: 'Got my iPhone 14 screen replaced in just 40 minutes! Quality is amazing and the price was very fair. Highly recommend FixurDevice.', rating: 5, model: 'iPhone 14' },
  { name: 'Rahul M.', text: 'Best iPhone service center in Bangalore. My water-damaged iPhone 13 was completely recovered with all data intact.', rating: 5, model: 'iPhone 13' },
  { name: 'Sneha K.', text: 'Battery replacement for my iPhone 12 was done while I waited. Battery health back to 100%. Great service!', rating: 5, model: 'iPhone 12' },
  { name: 'Arjun D.', text: 'Motherboard repair that two other shops said was impossible. FixurDevice fixed it in a day. Amazing technicians!', rating: 5, model: 'iPhone 11 Pro' },
  { name: 'Meera R.', text: 'Free pickup from Whitefield and delivery the same evening. Professional service with genuine parts.', rating: 5, model: 'iPhone 15' },
];

const Reviews = () => {
  const ref = useScrollAnimation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((p) => (p + 1) % reviews.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="section-padding" ref={ref} aria-label="Customer Reviews">
      <div className="container-narrow">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-bold text-gradient-white mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground">Rated 4.9/5 by 2,000+ customers on Google</p>
        </div>

        <div className="animate-on-scroll max-w-2xl mx-auto">
          <div className="glass rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: reviews[active].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <blockquote className="text-lg text-foreground leading-relaxed mb-6 min-h-[80px]">
              "{reviews[active].text}"
            </blockquote>
            <div>
              <p className="font-semibold text-foreground">{reviews[active].name}</p>
              <p className="text-sm text-muted-foreground">{reviews[active].model} Repair</p>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === active ? 'bg-primary w-6' : 'bg-muted-foreground/30'
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
