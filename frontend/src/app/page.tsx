import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesSlider from "@/components/FeaturesSlider";
import MissionVision from "@/components/MissionVision";
import Services from "@/components/Services";
import Founder from "@/components/Founder";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import Newsletter from "@/components/Newsletter";
import ContactMap from "@/components/ContactMap";
import Vision2030 from "@/components/Vision2030";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="App">
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
        <Vision2030 />
      </main>
      <Footer />
    </div>
  );
}
