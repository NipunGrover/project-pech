import { Hero } from "@/components/index-page/sections/Hero";
import { Statistics } from "@/components/index-page/sections/Statistics";
import { Goal } from "@/components/index-page/sections/Goal";
import { DataSection } from "@/components/index-page/sections/DataSection";
import { CommunitySpotlight } from "@/components/index-page/sections/CommunitySpotlight";

export default function Home() {
  return (
    <>
      <Hero />
      <Statistics />
      <Goal />
      <DataSection />
      <CommunitySpotlight />
    </>
  );
}
