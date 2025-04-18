'use client';

import { useState } from 'react';
import CarouselCard from '@/components/CarouselCard';
import { cn } from '@/lib/utils';

export const WipSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "PROJECT 1",
      projectType: "Project Type",
      skills: ["Next.js", "Node.js", "MongoDB"],
      description: "A description of Project 1 and its features. This is a work in progress project showcasing various technologies and implementations.",
      image: "/assets/images/project1.png",
      projectUrl: "/portfolio/project1"
    },
    {
      title: "PROJECT 2",
      projectType: "Project Type",
      skills: ["Next.js", "Node.js", "MongoDB"],
      description: "A description of Project 2 and its features. This is a work in progress project showcasing various technologies and implementations.",
      image: "/assets/images/project2.png",
      projectUrl: "/portfolio/project2"
    },
  ];

  return (
    <section className="relative py-8 overflow-hidden z-10">
      <div className="absolute inset-0 bg-[#15102A]/30 backdrop-blur-xl" />
      <div className="container relative mx-auto px-4 md:px-8">
        <h2 className="text-white text-xl md:text-2xl font-header mb-6">WIP</h2>
        
        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">
          <div className="flex gap-4 md:gap-6 mx-auto">
            {projects.map((project, index) => {
              const isExpanded = expandedIndex === index;
              const isBeforeExpanded = expandedIndex !== null && index < expandedIndex;
              const isAfterExpanded = expandedIndex !== null && index > expandedIndex;
              
              return (
                <div 
                  key={index} 
                  className={cn(
                    "transition-all duration-500 ease-in-out",
                    isExpanded 
                      ? "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50" 
                      : expandedIndex !== null 
                        ? cn(
                            "opacity-50 pointer-events-none",
                            isBeforeExpanded && "-translate-x-1/2",
                            isAfterExpanded && "translate-x-1/2"
                          )
                        : "opacity-100"
                  )}
                  style={{
                    width: isExpanded ? '90vw' : '227px',
                    maxWidth: isExpanded ? '1046px' : 'none',
                  }}
                >
                  <CarouselCard 
                    {...project} 
                    images={[project.image]}
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