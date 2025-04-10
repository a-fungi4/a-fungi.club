'use client';

import { useState } from 'react';
import { CarouselCard } from '@/components/CarouselCard';
import { cn } from '@/lib/utils';

export const WipSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "PROJECT 1",
      projectType: "Project Type",
      skills: ["Next.js", "Node.js", "MongoDB"],
      image: "/assets/images/project1.jpg",
    },
    {
      title: "PROJECT 2",
      projectType: "Project Type",
      skills: ["Next.js", "Node.js", "MongoDB"],
      image: "/assets/images/project2.jpg",
    },
  ];

  return (
    <section id="wip" className="relative min-h-screen bg-[#15102A] pt-32 overflow-hidden">
      <div className="container mx-auto px-16">
        <h2 className="text-white text-[24pt] font-hack mb-24">WORK IN PROGRESS</h2>
        
        {/* Carousel Container */}
        <div className="relative flex items-start min-h-[600px]">
          <div className="absolute left-1/2 -translate-x-1/2 flex gap-6">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "transition-all duration-500 ease-in-out",
                    isExpanded && "fixed left-1/2 top-32 -translate-x-1/2 z-20",
                    expandedIndex !== null && !isExpanded && "opacity-0"
                  )}
                  style={{
                    width: isExpanded ? '1046px' : '227px',
                  }}
                >
                  <CarouselCard 
                    {...project} 
                    isExpanded={isExpanded}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}; 