import { HeroSection } from '@/components/sections/HeroSection';
import { WipSection } from '@/components/sections/WipSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WipSection />
    </main>
  );
}
