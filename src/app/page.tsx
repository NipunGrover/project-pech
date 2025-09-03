import { CommunitySpotlight } from "@/components/index-page/sections/CommunitySpotlight";
import { DataSection } from "@/components/index-page/sections/DataSection";
import { Goal } from "@/components/index-page/sections/Goal";
import { Hero } from "@/components/index-page/sections/Hero";
import { Statistics } from "@/components/index-page/sections/Statistics";

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
