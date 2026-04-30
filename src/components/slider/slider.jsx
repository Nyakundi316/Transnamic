export default function Slider() {
  const items = Array.from({ length: 10 });

  return (
    <section className="py-8 bg-foreground overflow-hidden">
      <div className="animate-marquee-right flex whitespace-nowrap">
        {items.map((_, i) => (
          <div key={i} className="flex items-center gap-6 px-8 shrink-0">
            <span className="text-3xl lg:text-4xl font-bold text-background/15 tracking-tight logo-font">
              Transnamic
            </span>
            <span className="text-background/10 text-2xl">/</span>
          </div>
        ))}
      </div>
    </section>
  );
}
