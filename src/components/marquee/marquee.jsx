import { Star } from 'lucide-react';

const items = [
  'Purpose & Growth',
  'Customer Commitment',
  'Professional Standards',
  'Health & Safety',
  'Accountability',
  'Good Business Relations',
];

export default function Marquee() {
  const doubled = [...items, ...items];

  return (
    <section className="py-6 bg-red-700 dark:bg-red-800 overflow-hidden">
      <div className="animate-marquee-left flex whitespace-nowrap">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-4 px-8 shrink-0">
            <Star className="h-4 w-4 text-red-300 fill-red-300" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
