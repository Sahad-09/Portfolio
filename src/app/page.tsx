import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { BrandsSection } from "@/components/BrandsSection";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
      </section>
      {/* BrandsSection now comes before ProjectsSection */}
      <section id="brands">
        <BrandsSection />
      </section>
      <section id="project">
        <ProjectsSection />
      </section>
      <TapeSection />
      <TestimonialsSection />
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactSection />
      </section>
      <Footer />
    </div>
  );
}
