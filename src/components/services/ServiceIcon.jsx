import { Building2, HardHat, Home, Pickaxe, Drill, Truck } from 'lucide-react';
import { cn } from '@/lib/utils';

const ServiceIcon = ({ type, className }) => {
  const icons = {
    sustainable: Building2,
    construction: HardHat,
    residential: Home,
    pickaxe: Pickaxe,
    drill: Drill,
    truck: Truck
  };

  const Icon = icons[type];

  return (
    <div className={cn(
      "flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 dark:bg-black/40 backdrop-blur-sm shadow-sm",
      className
    )}>
      <Icon className="h-5 w-5 text-red-700" />
    </div>
  );
};

export default ServiceIcon;
