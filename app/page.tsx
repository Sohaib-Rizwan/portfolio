import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { Hero } from "@/components/Hero";
// import { Stack } from "@/components/Stack";
import TechStack from "@/components/TechStack";
import { Footer } from "@/components/Footer";
import { Portfolio } from "@/components/Portfolio";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { KeyMetrics } from "@/components/KeyMetrics";
import { LogoAnimation } from "@/components/LogoAnimation";
import { Contact } from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop"; // ✅ Import here

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <LogoAnimation />
      <Projects />
      <KeyMetrics />
      {/* <Portfolio /> */}
      <Services />
      <Contact />
      <Footer />

      <ScrollToTop /> {/* ✅ Add it here so it's always on top */}
    </>
  );
}

