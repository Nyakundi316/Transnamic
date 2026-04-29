'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ServiceCard from './ServiceCard';
import ServicesNavigation from './ServicesNavigation';

const services = [
  {
    type: 'sustainable',
    title: 'Sustainable Building',
    description: 'Implementing eco-friendly practices and materials to create structures that last.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: 'construction',
    title: 'Construction Management',
    description: 'Expert project oversight from planning through completion, ensuring seamless execution.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: 'residential',
    title: 'Residential Construction',
    description: 'Custom-built homes that combine comfort, style, and modern functionality.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800'
  },
  {
    type: 'drill',
    title: 'Borehole Drilling',
    description: 'Sustainable borehole drilling for water extraction, environmental assessments, and geotechnical applications.',
    image: 'https://images.unsplash.com/photo-1687669981635-a0becffac6be?q=80&w=1974&auto=format&fit=crop'
  },
  {
    type: 'pickaxe',
    title: 'Excavation Services',
    description: 'Precision excavation for accurate and safe foundations, trenches, and site preparation.',
    image: 'https://media.istockphoto.com/id/1419307054/photo/excavator-at-a-construction-site-against-sunset-sky.webp?a=1&b=1&s=612x612&w=0&k=20&c=S1uBZQUqlZgjCeYVukzk3LqGQpqZ_-dBWx1xiPBlwy4='
  },
  {
    type: 'truck',
    title: 'Road Freight',
    description: 'Reliable road freight services with timely delivery across local, regional, and national routes.',
    image: '/truck0001.jpeg'
  }
];

const CARDS_PER_PAGE = 3;

const ServicesGrid = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(services.length / CARDS_PER_PAGE);

  const nextPage = () => setCurrentPage((p) => (p + 1) % totalPages);
  const prevPage = () => setCurrentPage((p) => (p - 1 + totalPages) % totalPages);

  const currentServices = services.slice(
    currentPage * CARDS_PER_PAGE,
    (currentPage + 1) * CARDS_PER_PAGE
  );

  return (
    <div className="relative pb-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.4 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {currentServices.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      <div className="flex items-center justify-between mt-10">
        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentPage ? 'w-8 bg-amber-600' : 'w-4 bg-border hover:bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
        <ServicesNavigation onNext={nextPage} onPrev={prevPage} />
      </div>
    </div>
  );
};

export default ServicesGrid;
