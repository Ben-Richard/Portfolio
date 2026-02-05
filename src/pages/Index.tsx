 import HeroSection from "@/components/portfolio/HeroSection";
 import AnimatedBackground from "@/components/portfolio/AnimatedBackground";
 import AboutSection from "@/components/portfolio/AboutSection";
 import SkillsSection from "@/components/portfolio/SkillsSection";
 import ExperienceSection from "@/components/portfolio/ExperienceSection";
 import ProjectsSection from "@/components/portfolio/ProjectsSection";
 import ResearchSection from "@/components/portfolio/ResearchSection";
 import CertificationsSection from "@/components/portfolio/CertificationsSection";
 import EducationSection from "@/components/portfolio/EducationSection";
 import ReferencesSection from "@/components/portfolio/ReferencesSection";
 import ContactSection from "@/components/portfolio/ContactSection";
 import Footer from "@/components/portfolio/Footer";
 
 const Index = () => {
   return (
     <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/* Animated background - NOT in hero */}
       <div className="fixed inset-0 pointer-events-none z-0">
         <AnimatedBackground />
       </div>
 
       {/* Hero Section - Full screen with scroll video */}
       <HeroSection />
 
       {/* Main content sections */}
       <main className="relative">
         <AboutSection />
         <SkillsSection />
         <ExperienceSection />
         <ProjectsSection />
         <ResearchSection />
         <CertificationsSection />
         <EducationSection />
         <ReferencesSection />
         <ContactSection />
       </main>
 
       <Footer />
     </div>
   );
 };
 
 export default Index;
