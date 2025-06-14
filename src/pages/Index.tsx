
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhoIsArielton from '@/components/WhoIsArielton';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import PricingSection from '@/components/PricingSection';
import TrainingSection from '@/components/TrainingSection';
import DifferentialsSection from '@/components/DifferentialsSection';
import ContactSection from '@/components/ContactSection';
import SuccessCases from '@/components/SuccessCases';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <WhoIsArielton />
      <AboutSection />
      <SolutionsSection />
      <PricingSection />
      <TrainingSection />
      <DifferentialsSection />
      <SuccessCases />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
