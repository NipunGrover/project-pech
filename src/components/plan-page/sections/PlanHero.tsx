import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { PlanHeroIllustration } from "../illustrations/PlanHeroIllustration";

export function PlanHero() {
	return (
		<section
			id="plan"
			aria-labelledby="plan-title"
			className="bg-neutral-800 text-white py-14 lg:py-16"
		>
			<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
				<div id="plan-title" className="space-y-6">
					<Heading as="h2" size="md" className="tracking-tight">
						The Plan
					</Heading>
					<Heading as="h3" size="sm">Help us reach functional zero by 2030</Heading>
					<Text size="sm" className="text-neutral-300 max-w-prose md:text-base">
						The Plan to End Chronic Homelessness is Waterloo Region's roadmap to
						make sure everyone has a safe, stable home. It was created with
						input from people with lived experience, service providers,
						community groups, and local government.
					</Text>
				</div>
				<PlanHeroIllustration />
			</div>
		</section>
	);
}
