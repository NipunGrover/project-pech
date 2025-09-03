"use server";

import type { Profile } from "@/lib/directus";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { getDirectusAssetUrl } from "@/lib/assets";
import { directus, readItems } from "@/lib/directus";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";

async function getCoCreators(): Promise<Profile[]> {
	try {
		const coCreators = await directus.request(
			readItems("profiles", {
				filter: {
					is_coordinator: { _eq: false },
					status: { _eq: "published" },
				},
				fields: ["id", "display_name", "display_blurb", "profile_image", "status", "is_coordinator"],
			}),
		);

		return coCreators.map((c) => {
			return {
				...c,
				profile_image: c.profile_image ? getDirectusAssetUrl(c.profile_image) : undefined,
			};
		});
	} catch (error) {
		console.error("Failed to fetch co-creators:", error);
		return [];
	}
}

export default async function CoCreatorsList() {
	const coCreators = await getCoCreators();

	return (
		<section className="bg-brand-black text-white py-20">
			<Container size="6xl">
				<div className="flex flex-col gap-4">
					<Heading size="lg" className="font-bold">
						Co-creators
					</Heading>
					<Text size="xl" className="font-semibold">
						Lasting change takes teamwork at every level: local, regional, provincial, and national. By joining forces, we can make a bigger impact.
					</Text>
				</div>

				<div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-12">
					{coCreators.map(creator => (
						<div key={creator.id} className="flex flex-row gap-4">
							<div
								className="w-16 h-16 rounded-full mb-3 overflow-hidden relative"
							>
								{creator.profile_image
									? (
										<Image
											src={creator.profile_image}
											alt={creator.display_name}
											fill
											className="object-cover"
										/>
									)
									: (
										<div
											className="w-full h-full bg-gray-500 flex items-center justify-center"
										>
											<span
												className="text-white text-xl font-semibold"
											>
												{creator.display_name.charAt(0).toUpperCase()}
											</span>
										</div>
									)}
							</div>
							<div className="flex flex-col">
								<Text
									size="md"
									className="font-semibold"
								>
									{creator.display_name}
								</Text>
								<Text
									size="sm"
									className="text-brand-medium-green text-sm truncate max-w-20"
								>
									{creator.display_blurb}
								</Text>
							</div>
						</div>
					))}
				</div>
			</Container>
		</section>
	);
}
