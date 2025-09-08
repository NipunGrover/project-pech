"use server";
import { readItems } from "@directus/sdk";
import { directus } from "../../../../lib/directus";
import { HousingStats } from "./housing-stats";

async function FetchDashboardData() {
	const data = await directus.request(
		readItems("dashboard", {
			sort: ["Year_Month"],
			fields: [
				"id",
				"Year_Month",
				"Housed_Chronic",
				"Housed_N_Chronic",
				"Outflow",
				"New_Chronic_Y_Inflow",
			],
		}),
	);

	const sorted_data = data.map((d) => {
		const Year_Month = d.Year_Month;

		const [year, month] = Year_Month.split("-");

		const year_num = Number.parseInt(year);

		const month_num = Number.parseInt(month);

		// Subtracting 1 from month as js dates are 0 based
		const date = new Date(year_num, month_num - 1);

		return { ...d, date };
	}).sort((a, b) => a.date.getUTCMilliseconds() - b.date.getUTCMilliseconds());

	return sorted_data;
}

export async function HousingStatsContainer() {
	const data = await FetchDashboardData();

	return (
		<HousingStats data={data} />
	);
}
