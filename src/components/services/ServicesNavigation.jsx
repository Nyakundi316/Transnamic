import { ChevronLeft, ChevronRight } from 'lucide-react';

const ServicesNavigation = ({ onNext, onPrev }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onPrev}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Previous"
      >
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button
        onClick={onNext}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Next"
      >
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default ServicesNavigation;
