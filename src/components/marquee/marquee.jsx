import { Star } from 'lucide-react';

const items = [
  'Client-Centric Approach',
  'Sustainable Practices',
  'High-Quality Craftsmanship',
  'Transparent Communication',
  'Innovative Design Solutions',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="py-6 bg-amber-600 dark:bg-amber-700 overflow-hidden">
      <div className="animate-marquee-left flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-8 shrink-0">
            <Star className="h-4 w-4 text-amber-200 fill-amber-200" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
