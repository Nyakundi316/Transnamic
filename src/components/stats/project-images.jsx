"use client";

import Image from 'next/image';

const projects = [
  { id: 1, image: "/p2.jpg", alt: "Construction project 1" },
  { id: 2, image: "/Project3.jpeg", alt: "Construction project 2" },
  { id: 3, image: "/Project4.jpeg", alt: "Construction project 3" },
  { id: 4, image: "/Dongo.jpg", alt: "Construction project 4" },
  { id: 5, image: "/Project5.jpg", alt: "Construction project 5" },
];

export function ProjectImages() {
  return (
    <div className="flex -space-x-3">
      {projects.map((project) => (
        <div
          key={project.id}
          className="w-10 h-10 rounded-full border-2 border-background overflow-hidden shadow-sm"
        >
          <Image
            src={project.image}
            alt={project.alt}
            width={40}
            height={40}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      <div className="w-10 h-10 rounded-full border-2 border-background bg-amber-600 flex items-center justify-center shadow-sm">
        <span className="text-[10px] font-bold text-white">+99</span>
      </div>
    </div>
  );
}
