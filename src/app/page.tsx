import { CommunitySpotlight } from "@/components/index-page/sections/CommunitySpotlight";
import { DataSection } from "@/components/index-page/sections/DataSection";
import { Footer } from "@/components/index-page/sections/Footer";
import { Goal } from "@/components/index-page/sections/Goal";
import { Header } from "@/components/index-page/sections/Header";
import { Hero } from "@/components/index-page/sections/Hero";
import { Statistics } from "@/components/index-page/sections/Statistics";

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
