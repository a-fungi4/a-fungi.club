'use client';

import { cn } from '@/lib/utils';

interface HighlightedProjectComponentProps {
  reversed?: boolean;
}

export const HighlightedProjectComponent = ({ reversed = false }: HighlightedProjectComponentProps) => {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2">
      <div className={cn(
        "w-full flex flex-col sm:flex-row",
        reversed && "sm:flex-row-reverse"
      )}>
        {/* Project Thumbnail Section */}
        <div className={cn(
          "w-full sm:w-1/2 min-h-[200px] sm:min-h-[247px] bg-[#C0282D] flex items-center justify-center",
          reversed 
            ? "rounded-t-[40px] sm:rounded-r-[123.5px] sm:rounded-tl-none sm:rounded-bl-none" 
            : "rounded-t-[40px] sm:rounded-l-[123.5px] sm:rounded-tr-none sm:rounded-br-none",
          "p-6 sm:p-10"
        )}>
          <span className="text-white font-hack text-sm sm:text-base md:text-lg lg:text-xl">Project Thumbnail</span>
        </div>

        {/* Project Description Section */}
        <div className={cn(
          "w-full sm:w-1/2 min-h-[200px] sm:min-h-[247px] bg-[#2DA9D8]/25 flex flex-col items-center justify-center gap-6 sm:gap-10",
          reversed 
            ? "rounded-b-[40px] sm:rounded-l-[123.5px] sm:rounded-tr-none sm:rounded-br-none" 
            : "rounded-b-[40px] sm:rounded-r-[123.5px] sm:rounded-tl-none sm:rounded-bl-none",
          "px-10 py-6 sm:py-10"
        )}>
          {/* Description Container */}
          <div className="w-full bg-[#151429] rounded-[40px] flex items-center">
            <div className="w-full px-10 py-5">
              <p className="text-white font-hack text-xs sm:text-sm md:text-base lg:text-lg">
                Project DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject DescriptionProject
              </p>
            </div>
          </div>

          {/* Close Button */}
          <div className="w-full max-w-[515px] h-[35px] sm:h-[45px] bg-[#2DA9D8] border-2 border-[#C0282D] rounded-[22.5px] flex items-center justify-center">
            <span className="text-white font-hack text-sm sm:text-base md:text-lg">Go To Project</span>
          </div>
        </div>
      </div>
    </div>
  );
}; 