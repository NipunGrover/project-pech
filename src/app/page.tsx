import { CommunitySpotlight } from "@/components/index-page/sections/CommunitySpotlight";
import { DataSection } from "@/components/index-page/sections/DataSection";
import { Goal } from "@/components/index-page/sections/Goal";
import { Hero } from "@/components/index-page/sections/Hero";
import { Statistics } from "@/components/index-page/sections/Statistics";
import { HousingSupport } from "@/components/popup/HousingSupport";

export default function Home() {
	return (
		<>
			<HousingSupport />
			<Hero />
			<Statistics />
			<Goal />
			<DataSection />
			<CommunitySpotlight />
		</>
	);
}
