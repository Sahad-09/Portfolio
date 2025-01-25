import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { BrandsSection } from "@/sections/BrandsSection";

import Services from "@/sections/Services";

export default function Home() {
  return (
    <div>
      <section id="home">
        <HeroSection />
        <BrandsSection />
        {/* <Services /> */}
      </section>
      <section id="project">
        <ProjectsSection />
      </section>
      <TapeSection />
      {/* <TestimonialsSection /> */}
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

