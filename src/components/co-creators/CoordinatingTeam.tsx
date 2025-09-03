"use server";

import type { Profile } from "@/lib/directus";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";
import { getDirectusAssetUrl } from "@/lib/assets";
import { directus, readItems } from "@/lib/directus";
import { Container } from "../ui/container";

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

		return coordinators.map((c) => {
			return {
				...c,
				profile_image: c.profile_image ? getDirectusAssetUrl(c.profile_image) : undefined,
			};
		});
	} catch (error) {
		console.error("Failed to fetch coordinating team:", error);
		return [];
	}
}

export default async function CoordinatingTeam() {
	const teamMembers = await getCoordinatingTeam();

	return (
		<section className="bg-white py-20">
			<Container size="6xl">
				<TypographyH2 className="font-semibold mb-4 text-brand-dark-green">
					Coordinating team
				</TypographyH2>
				<p className="text-gray-600 mb-16">
					Our coordinating team brings together people with many skills and experiences. Together, they guide the work to end chronic homelessness in Waterloo Region.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map(member => (
						<Card key={member.id} className="pt-0 rounded-sm overflow-hidden">
							<div className="relative h-36 w-full">
								{member.profile_image
									? (
										<Image
											src={member.profile_image}
											alt={member.display_name}
											fill
											className="object-cover object-[center_20%]"
										/>
									)
									: (
										<div className="w-full h-full bg-brand-medium-green flex items-center justify-center">
											<span className="text-white text-5xl font-semibold">
												{member.display_name.charAt(0).toUpperCase()}
											</span>
										</div>
									)}
							</div>
							<CardContent className="pt-0">
								<h3 className="text-lg font-semibold mb-2">{member.display_name}</h3>
								<p className="text-sm text-gray-600">{member.display_blurb}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</Container>
		</section>
	);
}
