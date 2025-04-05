
import { Navbar } from "../components/Navbar";
import { Hero } from "@/components/Hero";

import TechStack from "@/components/TechStack";
import { Footer } from "@/components/Footer";

import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { KeyMetrics } from "@/components/KeyMetrics";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Contact } from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop"; 

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <LogoAnimation />
      <Projects />
      <KeyMetrics />
   
      <Services />
      <Contact />
      <Footer />

      <ScrollToTop /> 
    </>
  );
}

