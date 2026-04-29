import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Link from 'next/link';

export default function ProjectInfo({ name, description, location, scope, itemNumber, imageSrc, projectLink }) {
  return (
    <div className="group grid lg:grid-cols-2 gap-0 bg-card border border-border/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-black/20">
      <div className="relative h-64 lg:h-auto lg:min-h-[320px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={`${name} project`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
          <span className="text-xs font-bold text-foreground tabular-nums">
            {itemNumber < 10 ? `0${itemNumber}` : itemNumber}
          </span>
        </div>
      </div>

      <div className="p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-foreground">{name}</h3>
          <p className="mt-3 text-muted-foreground leading-relaxed line-clamp-3">
            {description}
          </p>

          <div className="mt-6 flex flex-col gap-3">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-muted-foreground">{location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="h-3.5 w-3.5 rounded-full border-2 border-amber-600 flex-shrink-0" />
              <span className="text-muted-foreground">{scope}</span>
            </div>
          </div>
        </div>

        <Link
          href={projectLink}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 group/link"
        >
          View details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </div>
  );
}
