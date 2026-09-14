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
import { StorySection } from './components/story/StorySection';
import { BatchCardSection } from './components/pricing/BatchCardSection'; // ← 1. IMPORT INI
import { ContactSection } from './components/contact/ContactSection';
import { ProjectCaseStudyModal } from './components/projects/ProjectCaseStudyModal';

export function App() {
  const [isVerified, setIsVerified] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  useLenisSmoothScroll();

  return (
    <div className="min-h-screen bg-[#fff9d4] text-[#0f172a] selection:bg-[#0284c7] selection:text-white">
      {!isVerified && (
        <VerificationGate onVerified={() => setIsVerified(true)} />
      )}

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
        <StorySection />
        <BatchCardSection /> {/* ← 2. PASANG DI TENGAH SINI */}
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
