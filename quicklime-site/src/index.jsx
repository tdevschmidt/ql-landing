
// pages/index.jsx
import { Hero } from "@/components/Hero";
import { ValueProps } from "@/components/ValueProps";
import { Testimonials } from "@/components/Testimonials";
import { CaseStudy } from "@/components/CaseStudy";
import { Portfolio } from "@/components/Portfolio";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <ValueProps />
      <Testimonials />
      <CaseStudy />
      <Portfolio />
      <Services />
      <Contact />
    </main>
  );
}
