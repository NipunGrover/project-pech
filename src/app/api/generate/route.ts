import { createDirectus, createItems, rest, staticToken } from "@directus/sdk";
import { faker } from "@faker-js/faker";
import { NextResponse } from "next/server";

interface Profile {
	id?: string;
	status: "draft" | "published" | "archived";
	profile_image?: string;
	display_name: string;
	display_blurb: string;
	is_coordinator: boolean;
}

interface Schema {
	profiles: Profile[];
}

// eslint-disable-next-line node/prefer-global/process
const directus = createDirectus<Schema>(process.env.DIRECTUS_URL as string)
	.with(rest())
	.with(staticToken(process.env.DIRECTUS_TOKEN as string)); // eslint-disable-line node/prefer-global/process

export async function GET() {
	try {
		const profiles: Omit<Profile, "id">[] = [];

		for (let i = 0; i < 30; i++) {
			const profile: Omit<Profile, "id"> = {
				status: "published",
				display_name: faker.person.fullName(),
				display_blurb: faker.lorem.paragraph({ min: 2, max: 4 }),
				is_coordinator: false,
			};
			profiles.push(profile);
		}

		const result = await directus.request(
			createItems("profiles", profiles),
		);

		return NextResponse.json({
			success: true,
			message: "Successfully created 30 fake profiles",
			count: 30,
			data: result,
		});
	} catch (error) {
		console.error("Error creating profiles:", error);
		return NextResponse.json(
			{
				success: false,
				error: "Failed to create profiles",
				details: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
}
