'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Project1Page() {
  const router = useRouter();

  useEffect(() => {
    console.log('Project1 page mounted');
  }, []);

  return (
    <div className="min-h-screen bg-[#15102A] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-white text-2xl font-hack mb-4">Project 1</h1>
        <p className="text-white font-hack">This is a placeholder page for Project 1.</p>
      </div>
    </div>
  );
} 