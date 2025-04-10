import { Container } from './Container';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex flex-col">
        {children}
      </main>
    </div>
  );
} 