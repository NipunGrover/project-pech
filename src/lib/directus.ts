import { createDirectus, readItems, rest, staticToken } from "@directus/sdk";

interface Profile {
	id: string;
	status: "draft" | "published" | "archived";
	profile_image?: string;
	display_name: string;
	display_blurb: string;
	is_coordinator: boolean;
}

export interface DashboardData {
	id: string;
	status: "draft" | "published" | "archived";
	Outflow: string;
	Year_Month: string;
	Chronic_Y_Count: string;
	New_Chronic_Y_Inflow: string;
	Move_In_Same_Month_Count: string;
	Housed_Chronic: string;
	Housed_N_Chronic: string;
}

interface Schema {
	profiles: Profile[];
	dashboard: Array<DashboardData>;
}

// eslint-disable-next-line node/prefer-global/process
const directus = createDirectus<Schema>(process.env.DIRECTUS_URL as string)
	.with(rest())
	.with(staticToken(process.env.DIRECTUS_TOKEN as string)); // eslint-disable-line node/prefer-global/process

export { directus, readItems };
export type { Profile };
