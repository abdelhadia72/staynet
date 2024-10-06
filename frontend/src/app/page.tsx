import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowitWorks";
import Services from "@/components/home/Services";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <HowItWorks />
      <Footer />
    </div>
  );
}
