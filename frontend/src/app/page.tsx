import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import FeaturesSlider from "@/components/FeaturesSlider";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Newsletter from "@/components/Newsletter";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="App">
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <FeaturesSlider />
        <MissionVision />
        <Projects />
        <Services />

        <Clients />
        <Founder />

        <Newsletter />
        <ContactMap />
      </main>
      <Footer />
    </div>
  );
}
