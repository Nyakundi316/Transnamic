import ServiceIcon from './ServiceIcon';
import Image from 'next/image';

const ServiceCard = ({ type, title, description, image, index }) => {
  return (
    <div className="group rounded-2xl bg-card border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20 hover:border-border">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-4 left-4">
          <ServiceIcon type={type} />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground">
          {title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
