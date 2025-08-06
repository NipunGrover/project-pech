import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { TypographyH2, TypographyLead } from "@/components/ui/typography";

export function CommunitySpotlight() {
	const spotlights = [
		{
			title:
        "The Plan to End Chronic Homelessness (PECH) Committee meeting notes",
			description: "Committee meeting notes July 15 2024",
			action: "View more",
			actionVariant: "secondary" as const,
			image: "/placeholder-notes.jpg",
			bgColor: "bg-yellow-500",
		},
		{
			title: "Partnership with GRT for free buses program",
			description:
        "Updates coming soon after our last meeting to finalize bus passes for individuals experiencing homelessness",
			action: "View more",
			actionVariant: "outline" as const,
			image: "/placeholder-bus.jpg",
			bgColor: "bg-blue-500",
		},
		{
			title: "Lived Expertise Panel",
			description:
        "Quarterly meetings with representatives shared insights of the journey home for those experiencing homelessness",
			action: "View more",
			actionVariant: "default" as const,
			image: "/placeholder-panel.jpg",
			bgColor: "bg-green-500",
		},
	];

	return (
		<section id="community-spotlight" className="bg-gray-100 py-20">
			<div className="max-w-7xl mx-auto px-4">
				<div className="mb-12">
					<TypographyH2 className="text-3xl lg:text-4xl text-gray-900 mb-4 border-0 pb-0">
						Community spotlight
					</TypographyH2>
					<TypographyLead className="text-gray-600">
						We couldn&apos;t do it alone. Learn about the community partners
						making an impact.
					</TypographyLead>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{spotlights.map((spotlight, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<Card key={index} className="overflow-hidden border-gray-200">
							<div className={`h-48 ${spotlight.bgColor} relative`}>
								{spotlight.image && (
									<div className="absolute inset-0 flex items-center justify-center text-white/50 text-lg">
										[Image Placeholder]
									</div>
								)}
							</div>
							<CardHeader>
								<CardTitle className="text-xl">{spotlight.title}</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className="mb-4">
									{spotlight.description}
								</CardDescription>
								<Button
									variant={spotlight.actionVariant}
									className={`cursor-pointer ${
										spotlight.actionVariant === "secondary"
											? "bg-purple-100 text-purple-700 hover:bg-purple-200"
											: ""
									}`}
								>
									{spotlight.action}
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
