import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";

interface Profile {
	id: string;
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

export { directus, readItems };
export type { Profile };
