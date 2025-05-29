
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import TrainingSection from '@/components/TrainingSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <SolutionsSection />
      <TrainingSection />
      <DifferentialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
