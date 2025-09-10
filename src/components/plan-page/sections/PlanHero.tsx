import {
	TypographyH2,
	TypographyH3,
	TypographyLead,
} from "@/components/ui/typography";
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
					<TypographyH2
						className="text-3xl md:text-4xl font-semibold tracking-tight border-b-0 pb-0"
					>
						The Plan
					</TypographyH2>
					<TypographyH3>Help us reach functional zero by 2030</TypographyH3>
					<TypographyLead className="text-neutral-300 max-w-prose text-sm md:text-base font-normal">
						The Plan to End Chronic Homelessness is Waterloo Region’s roadmap to
						make sure everyone has a safe, stable home. It was created with
						input from people with lived experience, service providers,
						community groups, and local government.
					</TypographyLead>
				</div>
				<PlanHeroIllustration />
			</div>
		</section>
	);
}
