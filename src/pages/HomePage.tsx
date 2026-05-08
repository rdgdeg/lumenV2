import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/sections/HeroSection";
import IntroductionSection from "@/sections/IntroductionSection";
import VisitingHoursSection from "@/sections/VisitingHoursSection";
import AboutSection from "@/sections/AboutSection";
import ServicesSection from "@/sections/ServicesSection";
import CondolencesSection from "@/sections/CondolencesSection";
import ContactSection from "@/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Pompes Funebres Lumen | Accueil</title>
        <meta name="description" content="Pompes Funebres Lumen - Service funeraire complet a Maffle, Belgique. Plus de 20 ans d'experience a votre service." />
      </Helmet>
      <div className="min-h-screen" style={{ backgroundColor: "var(--bg-primary)" }}>
        <Header />
        <main className="pt-20">
          <HeroSection />
          <IntroductionSection />
          <VisitingHoursSection />
          <AboutSection />
          <ServicesSection />
          <CondolencesSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
