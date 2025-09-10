import type { Metadata } from "next";
import PlanHowYouCanHelp from "@/components/plan-page/sections/PlanHowYouCanHelp";
import PlanLookingAhead from "@/components/plan-page/sections/PlanLookingAhead";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { cn } from "../../lib/utils";
import { HeroIllustration } from "./hero-illustration";

export const metadata: Metadata = {
	title: "The Plan",
	description:
    "The Plan to End Chronic Homelessness is Waterloo Region's roadmap to make sure everyone has a safe, stable home. It was created with input from people with lived experience, service providers, community groups, and local government.",
};

export default function PlanPage() {
	return (
		<>
			<main className="bg-brand-black text-brand-white py-10 md:py-0">
				<Container
					size="6xl"
					className={cn(
						// "py-16",
						"grid grid-cols-1 md:grid-cols-2",
						"items-center justify-center",
					)}
				>
					<div className="flex flex-col gap-8">
						<Heading
							size="2xl"
						>
							The Plan
						</Heading>
						<Text size="xl">
							The Plan to End Chronic Homelessness is Waterloo Region’s roadmap to make sure everyone has a safe, stable home. It was created with input from people with lived experience, service providers, community groups, and local government.
						</Text>
					</div>
					<HeroIllustration
						className={cn(
							"md:mt-20 md:w-172 md:h-172",
							"w-72 h-72",
						)}
					/>
				</Container>
			</main>
			<section
				className="bg-brand-yellow"
			>
				<Container>
					<Heading
						size="lg"
						className="text-brand-dark-green text-left"
					>
						Our focus areas
					</Heading>
				</Container>
			</section>
			<section
				className="bg-brand-black text-brand-white"
			>
				<Container
					size="6xl"
					className="py-24 flex flex-col gap-16"
				>
					<div className="flex flex-col gap-4">
						<Heading size="lg" as="h3">
							Pushing for big change together
						</Heading>
						<Text size="xl">
							Lasting change takes teamwork at every level: local, regional, provincial, and national. By joining forces, we can make a bigger impact.
						</Text>
					</div>
					<div className="flex flex-col md:gap-8">
						<Heading size="md" as="h4">
							What we’re doing in 2025
						</Heading>
						<div className="relative w-full pt-24 pb-24">
							{/* Segmented bar with in-segment content and connectors */}
							<div className="grid grid-cols-1 md:grid-cols-3 w-full gap-y-12 md:gap-y-0 md:h-12">
								{/* Segment 1: Using data */}
								<div className="relative w-full">
									<div className="h-12 md:h-full bg-[#111111]"></div>
									<div className="md:absolute md:top-12">
										<div className="w-[1px] h-10 md:h-16 bg-brand-white/50"></div>
										<div className="flex flex-col">
											<Heading size="xs" className="text-md">Using data to guide decisions.</Heading>
											<Text size="sm" className="opacity-80">Tracking what works and sharing it widely.</Text>
										</div>
									</div>
								</div>

								{/* Segment 2: Advocating for policy change */}
								<div className="relative w-full">
									<div className="h-12 md:h-full bg-brand-grey"></div>
									<div className="md:absolute md:-top-27 flex flex-col-reverse md:flex-col">
										<div className="flex flex-col">
											<Heading size="xs" className="text-md">Advocating for policy change.</Heading>
											<Text size="sm" className="opacity-80">Asking for stronger housing policies and more funding.</Text>
										</div>
										<div className="w-[1px] h-10 md:h-16 bg-brand-white/50"></div>
									</div>
								</div>

								{/* Segment 3: Supporting innovation */}
								<div className="relative w-full">
									<div className={cn(
										"h-12 md:h-full",
										"bg-gradient-to-r from-brand-dark-green to-brand-light-green",
									)}
									>
									</div>
									<div className="md:absolute md:top-12">
										<div className="w-[1px] h-10 md:h-16 bg-brand-white/50"></div>
										<div className="flex flex-col md:items-start">
											<Heading size="xs" className="text-md">Supporting innovation</Heading>
											<Text size="sm" className="opacity-80">Backing new ideas and pilot projects that help people get and keep housing.</Text>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</Container>
			</section>
			<PlanLookingAhead />
			<PlanHowYouCanHelp />
		</>
	);
}
