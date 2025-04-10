'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface CarouselCardProps {
  title: string;
  projectType: string;
  skills: string[];
  image: string;
  isExpanded?: boolean;
  onClick?: () => void;
}

export const CarouselCard = ({ 
  title, 
  projectType, 
  skills, 
  image,
  isExpanded,
  onClick
}: CarouselCardProps) => {
  return (
    <div 
      className={cn(
        "relative rounded-lg cursor-pointer overflow-hidden",
        "transition-all duration-500 ease-in-out",
        isExpanded 
          ? "bg-[#6B53A3] min-h-[600px]" 
          : "bg-[#15102A] shadow-[0_0_2px_0_#C0282D] hover:shadow-[0_0_20px_0_rgba(255,70,85,0.3)]"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "p-4 flex flex-col gap-3",
        "transition-all duration-500 ease-in-out",
        isExpanded && "items-start"
      )}>
        {/* Project Thumbnail */}
        <div className={cn(
          "rounded-2xl bg-[#C0282D] overflow-hidden",
          "transition-all duration-500 ease-in-out",
          isExpanded ? "w-[121px] h-[95px]" : "w-[202px] h-[158px]"
        )}>
          <Image
            src={image}
            alt={title}
            width={isExpanded ? 121 : 202}
            height={isExpanded ? 95 : 158}
            className="object-cover transition-all duration-500"
          />
        </div>
        
        <div className={cn(
          "flex flex-col transition-all duration-500 ease-in-out",
          isExpanded ? "gap-4" : "gap-3"
        )}>
          {/* Title */}
          <h3 className="text-white text-[10pt] font-hack">{title}</h3>
          
          {/* Project Type Container */}
          <div className="bg-white/10 rounded-full px-3 py-1 border border-[#C0282D] w-fit">
            <span className="text-white text-[6pt] font-hack">{projectType}</span>
          </div>

          {!isExpanded && (
            /* Project Skills Container */
            <div className="bg-white/10 rounded-full px-3 py-1 border border-[#4361EE] w-fit">
              <span className="text-white text-[6pt] font-hack">
                {skills.join(' • ')}
              </span>
            </div>
          )}
        </div>

        {isExpanded && (
          <>
            {/* Embedded Behance Project */}
            <div className={cn(
              "w-full rounded-lg overflow-hidden transition-all duration-500 ease-in-out border-4 border-[#4361EE]",
              isExpanded ? "opacity-100 h-[514px] mt-4" : "opacity-0 h-0"
            )}>
              <iframe 
                src="https://www.behance.net/embed/project/YOUR_PROJECT_ID"
                width="1046"
                height="514"
                className="w-full h-full"
                style={{ border: 'none' }}
              />
            </div>

            {/* Close Button */}
            <div className="w-full flex justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClick?.();
                }}
                className="w-full h-12 flex items-center justify-center bg-[#15102A]/20 hover:bg-[#15102A]/30 transition-all duration-300 border-2 border-[#C0282D] rounded-lg"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    d="M12 20L12 4M12 4L5 11M12 4L19 11" 
                    stroke="white" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}; 