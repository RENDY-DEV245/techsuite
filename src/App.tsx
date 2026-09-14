import { useState } from 'react';
import type { Project } from './types/portfolio';
import { useLenisSmoothScroll } from './hooks/useLenisSmoothScroll';
import { NavigationBar } from './components/navigation/NavigationBar';
import { HeroSection } from './components/hero/HeroSection';
import { WelcomeAnimation } from './components/hero/WelcomeAnimation';
import { VerificationGate } from './components/hero/VerificationGate';
import { EditorialProfile } from './components/profile/EditorialProfile';
import { ProjectShowcase } from './components/projects/ProjectShowcase';
import { TechGrid } from './components/tech/TechGrid';
import { JourneyTimeline } from './components/journey/JourneyTimeline';
import { ContactSection } from './components/contact/ContactSection';
import { ProjectCaseStudyModal } from './components/projects/ProjectCaseStudyModal';

export function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useLenisSmoothScroll();

  return (
    <div className="min-h-screen bg-[#fff9d4] text-[#0f172a] selection:bg-[#0284c7] selection:text-white">
      {/* 1. Gate Verifikasi muncul pertama kali */}
      {!isVerified && (
        <VerificationGate onVerified={() => setIsVerified(true)} />
      )}

      {/* 2. Welcome Animation ombak baru berjalan setelah lolos verifikasi */}
      {isVerified && showWelcome && (
        <WelcomeAnimation onComplete={() => setShowWelcome(false)} />
      )}

      <NavigationBar />

      <main className="relative">
        <HeroSection />
        <EditorialProfile />
        <ProjectShowcase />
        <TechGrid onOpenProject={setActiveModalProject} />
        <JourneyTimeline />
        <ContactSection />
      </main>

      <ProjectCaseStudyModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </div>
  );
}

export default App;
