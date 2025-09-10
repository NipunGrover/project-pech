import type { DashboardData } from "../../../../lib/directus";

export interface HousingStatsDatapoint extends Pick<
	DashboardData,
	"id"
	| "Year_Month"
	| "Housed_Chronic"
	| "Housed_N_Chronic"
	| "Outflow"
	| "New_Chronic_Y_Inflow"
> {
	date: Date;
}

export interface HousingStatsState {
	allDataPoints: Array<HousingStatsDatapoint>;

	currentDataPoint: HousingStatsDatapoint;

	currentDataPointIndex: number;

	isNextDataPointAvailable: boolean;

	isPreviousDataPointAvailable: boolean;
}

export type HousingStatsStateActions
	= {
		type: "go_to_next_data_point";
	} | {
		type: "go_to_previous_data_point";
	};

export function HousingStatsStateReducer(
	state: HousingStatsState,
	action: HousingStatsStateActions,
): HousingStatsState {
	switch (action.type) {
		case "go_to_next_data_point":{
			if (state.currentDataPointIndex === state.allDataPoints.length - 1) {
				return state;
			}

			const currentDataPointIndex = state.currentDataPointIndex + 1;

			const currentDataPoint = state.allDataPoints[currentDataPointIndex];

			const isNextDataPointAvailable = currentDataPointIndex !== state.allDataPoints.length - 1;

			const isPreviousDataPointAvailable = currentDataPointIndex !== 0;

			return {
				...state,
				currentDataPointIndex,
				currentDataPoint,
				isNextDataPointAvailable,
				isPreviousDataPointAvailable,
			};
		}
		case "go_to_previous_data_point": {
			if (state.currentDataPointIndex === 0) {
				return state;
			}

			const currentDataPointIndex = state.currentDataPointIndex - 1;

			const currentDataPoint = state.allDataPoints[currentDataPointIndex];

			const isNextDataPointAvailable = currentDataPointIndex !== state.allDataPoints.length - 1;

			const isPreviousDataPointAvailable = currentDataPointIndex !== 0;

			return {
				...state,
				currentDataPointIndex,
				currentDataPoint,
				isNextDataPointAvailable,
				isPreviousDataPointAvailable,
			};
		}
		default:{
			const exhaustive: never = action;
			throw new Error(`unhandled action: ${exhaustive}`);
		}
	}
}
