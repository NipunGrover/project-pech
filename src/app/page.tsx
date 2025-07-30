import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Statistics } from "@/components/sections/Statistics";
import { Goal } from "@/components/sections/Goal";
import { DataSection } from "@/components/sections/DataSection";
import { CommunitySpotlight } from "@/components/sections/CommunitySpotlight";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Statistics />
        <Goal />
        <DataSection />
        <CommunitySpotlight />
      </main>
      <Footer />
    </>
  );
}
