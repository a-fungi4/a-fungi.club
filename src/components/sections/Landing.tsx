import React from 'react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export const Landing = () => {
  return (
    <section className="relative min-h-[calc(100vh-8rem)] w-full bg-background overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[30rem] bg-primary/20 blur-[10rem] rounded-full" />
      
      {/* Main content */}
      <Container className="pt-24 relative">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-mono text-white mb-6 leading-tight">
            Crafting Digital
            <br />
            <span className="text-primary">Experiences</span>
            <br />
            That Matter
          </h1>
          <p className="text-lg text-white/60 mb-8 max-w-xl font-mono">
            Full-stack developer specializing in creating innovative web solutions 
            that combine elegant design with powerful functionality.
          </p>
          <div className="flex gap-4">
            <Button size="lg" className="font-mono">View Projects</Button>
            <Button variant="secondary" size="lg" className="font-mono">Contact Me</Button>
          </div>
        </div>

        {/* Tech stack */}
        <div className="mt-24 pb-8">
          <p className="text-center text-white/60 mb-8 font-mono">Technologies I work with</p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              'react', 'typescript', 'nextjs',
              'tailwind', 'node', 'mongodb'
            ].map((tech) => (
              <div 
                key={tech} 
                className="relative w-12 h-12 opacity-60 hover:opacity-100 transition-opacity"
              >
                <img
                  src={`/assets/tech/${tech}.svg`}
                  alt={`${tech} logo`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}; 