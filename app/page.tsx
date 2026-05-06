import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MenuSection from "./components/MenuSection";
import QualityBanner from "./components/QualityBanner";
import PopularSection from "./components/PopularSection";
import BranchesSection from "./components/BranchesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <QualityBanner />
      <PopularSection />
      <BranchesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
