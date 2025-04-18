'use client';

import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useState } from 'react';

export interface CarouselCardProps {
  title: string;
  projectType: string;
  skills: string[];
  description: string;
  images?: string[];
  projectUrl?: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

const CarouselCard = ({ 
  title, 
  projectType, 
  skills, 
  description,
  images = ['/assets/images/project1.png'],
  projectUrl = '#',
  isExpanded,
  onClick
}: CarouselCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (images.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <div 
      className={cn(
        "relative rounded-lg cursor-pointer overflow-hidden",
        "transition-[width] duration-300 ease-in-out",
        isExpanded 
          ? "bg-[#6B53A3] w-[90vw] max-w-[1046px]" 
          : "bg-[#15102A] shadow-[0_0_2px_0_#C0282D] hover:shadow-[0_0_20px_0_rgba(255,70,85,0.3)] w-[227px] aspect-[227/300]"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "flex flex-col",
        "transition-[height] duration-300 delay-300 ease-in-out",
        isExpanded ? "min-h-[600px] p-4 gap-3" : "h-full px-1 pt-1"
      )}>
        {/* Project Thumbnail Section */}
        <div className={cn(
          "relative w-full rounded-lg overflow-hidden",
          isExpanded ? "h-[115px]" : "aspect-[202/158]"
        )}>
          <Image
            src={images[0]}
            alt={title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Main Content Section */}
        <div className={cn(
          "w-full flex flex-col",
          isExpanded ? "gap-3" : "gap-2 px-3",
          !isExpanded && "mt-[10px]"
        )}>
          {/* Title */}
          <h3 className="text-white text-[10pt] font-hack">{title}</h3>
          
          {/* Project Type */}
          <div className="w-fit inline-flex bg-white rounded-full border-2 border-[#C0282D]">
            <span className="text-black text-[6pt] font-hack px-[4px] py-[4px] leading-none whitespace-nowrap">
              {projectType}
            </span>
          </div>

          {/* Photo Carousel */}
          {isExpanded && (
            <div className={cn(
              "w-full h-[198px] flex gap-3 overflow-x-auto opacity-0",
              "transition-opacity duration-300 delay-[400ms]",
              isExpanded && "opacity-100"
            )}>
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="relative min-w-[198px] h-[198px] rounded-lg overflow-hidden shadow-[0_0_4px_0_rgba(0,0,0,0.25)]"
                >
                  <Image
                    src={image}
                    alt={`${title} - Image ${index + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              ))}
            </div>
          )}

          {/* Description */}
          {isExpanded && (
            <div className={cn(
              "w-full h-[116px] p-4 bg-white border-2 border-[#4361EE] rounded-lg opacity-0",
              "transition-opacity duration-300 delay-[500ms]",
              isExpanded && "opacity-100"
            )}>
              <p className="text-black text-sm font-hack leading-relaxed">
                {description}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          {isExpanded && (
            <div className={cn(
              "w-full flex justify-center gap-[60px] mt-4 opacity-0",
              "transition-opacity duration-300 delay-[600ms]",
              isExpanded && "opacity-100"
            )}>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                className="w-[422px] h-[45px] flex items-center justify-center bg-[#C0282D] hover:bg-[#C0282D]/90 transition-all duration-300 rounded-[48px] text-white font-hack text-sm border-2 border-[#4361EE]"
              >
                Close
              </button>
              {projectUrl && projectUrl.length > 1 && (
                <Link
                  href={projectUrl}
                  className="w-[422px] h-[45px] flex items-center justify-center bg-[#4361EE] hover:bg-[#4361EE]/90 transition-all duration-300 rounded-[100px] text-white font-hack text-sm border-2 border-[#C0282D]"
                  onClick={(e) => e.stopPropagation()}
                >
                  Go To Project
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard; 