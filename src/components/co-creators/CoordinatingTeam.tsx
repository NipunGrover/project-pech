import type { Profile } from "@/lib/directus";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { getDirectusAssetUrlWithFallback } from "@/lib/assets";
import { directus, readItems } from "@/lib/directus";

async function getCoordinatingTeam(): Promise<Profile[]> {
	try {
		const coordinators = await directus.request(
			readItems("profiles", {
				filter: {
					is_coordinator: { _eq: true },
					status: { _eq: "published" },
				},
				fields: ["id", "display_name", "display_blurb", "profile_image", "status", "is_coordinator"],
			}),
		);

		return coordinators;
	} catch (error) {
		console.error("Failed to fetch coordinating team:", error);
		return [];
	}
}

export default async function CoordinatingTeam() {
	const teamMembers = await getCoordinatingTeam();

	return (
		<section className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-4">
				<TypographyH2 className="text-3xl font-bold text-center mb-4 text-teal-600">
					Coordinating team
				</TypographyH2>
				<p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
					Our coordination team brings together program leads who have experience
					across sectors. Together, they guide this work in coordination
					with community voices.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map(member => (
						<Card key={member.id} className="text-center">
							<CardContent className="pt-6">
								{(() => {
									const imageUrl = getDirectusAssetUrlWithFallback(member.profile_image);
									return imageUrl
										? (
											<Image
												src={imageUrl}
												alt={member.display_name}
												width={96}
												height={96}
												className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
											/>
										)
										: (
											<div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
										);
								})()}
								<h3 className="text-lg font-semibold mb-2">{member.display_name}</h3>
								<p className="text-sm text-gray-600">{member.display_blurb}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
