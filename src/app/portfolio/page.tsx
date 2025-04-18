'use client';

import CarouselCard from '@/components/CarouselCard';
import { projects } from '@/data/projects';
import { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export default function PortfolioPage() {
  const [expandedCardIndex, setExpandedCardIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  const handleCardClick = (index: number) => {
    setExpandedCardIndex(expandedCardIndex === index ? null : index);
  };

  const uniqueProjectTypes = Array.from(new Set(projects.map(project => project.projectType)));

  return (
    <main className="min-h-screen bg-[#15102A]">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="flex flex-col items-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center">
            Portfolio
          </h1>
          <p className="text-[#A0A0A0] text-lg text-center max-w-2xl mb-8">
            Explore my collection of projects and see how I bring ideas to life through code and design.
          </p>
          
          {/* Search and Filter Section */}
          <div className="flex flex-col md:flex-row gap-4 w-full max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 bg-[#1E1E1E] border border-[#2D2D2D] rounded-lg text-white placeholder-[#A0A0A0] focus:outline-none focus:border-[#6B53A3]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#A0A0A0]" size={20} />
              <select
                className="appearance-none pl-10 pr-8 py-2 bg-[#1E1E1E] border border-[#2D2D2D] rounded-lg text-white focus:outline-none focus:border-[#6B53A3]"
                value={selectedFilter || ''}
                onChange={(e) => setSelectedFilter(e.target.value || null)}
              >
                <option value="">All Projects</option>
                {uniqueProjectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects
            .filter(project => {
              const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                  project.description.toLowerCase().includes(searchQuery.toLowerCase());
              const matchesFilter = !selectedFilter || project.projectType === selectedFilter;
              return matchesSearch && matchesFilter;
            })
            .map((project, index) => (
              <CarouselCard
                key={index}
                title={project.title}
                projectType={project.projectType}
                skills={project.skills}
                description={project.description}
                images={project.images}
                projectUrl={project.projectUrl}
                isExpanded={expandedCardIndex === index}
                onClick={() => handleCardClick(index)}
              />
            ))}
        </div>
      </div>
    </main>
  );
} 