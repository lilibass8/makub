import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ArtistsGrid from "@/components/ArtistsGrid";
import SpacesSection from "@/components/SpacesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ArtistsGrid />
        <SpacesSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
