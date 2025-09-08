/* eslint-disable react/no-array-index-key */
"use client";
import type { DashboardData } from "../../../../lib/directus";
import { formatDate } from "date-fns";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React from "react";
import { HumanIllustration } from "../../../illustrations/human";
import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card";
import { Heading } from "../../../ui/heading";
import { Text } from "../../../ui/text";

export interface HousingStatsProps {
	data: Array<Pick<
		DashboardData,
		"id"
		| "Year_Month"
		| "Housed_Chronic"
		| "Housed_N_Chronic"
		| "Outflow"
		| "New_Chronic_Y_Inflow"
	> & { date: Date }>;
}

export function HousingStats({ data }: HousingStatsProps) {
	const [currentDataPointIndex, setCurrentDataPointIndex] = React.useState(data.length - 1);

	const displayData = data[currentDataPointIndex];

	const housedNonChronic = Number.parseInt(displayData.Housed_N_Chronic);

	const housedChronic = Number.parseInt(displayData.Housed_Chronic);

	const totalHoused = housedChronic + housedNonChronic;

	const inflowStat = Number.parseInt(displayData.New_Chronic_Y_Inflow);

	const outflowStat = Number.parseInt(displayData.Outflow);

	const isNextDataPointDisabled = currentDataPointIndex === data.length - 1;

	const isPreviousDataPointDisabled = currentDataPointIndex === 0;

	function goToNextDataPoint() {
		if (isNextDataPointDisabled) {
			return;
		}

		setCurrentDataPointIndex(idx => idx + 1);
	}

	function goToPreviousDataPoint() {
		if (isPreviousDataPointDisabled) {
			return;
		}

		setCurrentDataPointIndex(idx => idx - 1);
	}

	return (
		<React.Fragment>
			<Heading size="lg" className="font-bold inline-flex gap-4 items-center">
				Total people housed for
				<DataSelector
					isNextDataPointDisabled={isNextDataPointDisabled}
					isPreviousDataPointDisabled={isPreviousDataPointDisabled}
					goToNextDataPoint={goToNextDataPoint}
					goToPreviousDataPoint={goToPreviousDataPoint}
					dataPoint={displayData}
				/>
			</Heading>
			<div className="grid grid-cols-12 gap-8 items-center">
				<div className="col-span-12 md:col-span-8">
					<div className="flex flex-col gap-8">
						<div className="flex items-center gap-20">
							<Heading size="2xl" className="text-brand-dark-green">
								{totalHoused}
							</Heading>
							<div className="grid grid-cols-10 gap-2">
								{[...Array.from({ length: housedChronic })]
									.map((_, idx) => {
										return (
											<HumanIllustration
												className="h-10"
												variant="brand-medium-green"
												key={`housed-chronic-human-illustration:${idx}`}
											/>
										);
									})}
								{[...Array.from({ length: housedNonChronic })]
									.map((_, idx) => {
										return (
											<HumanIllustration
												className="h-10"
												variant="brand-grey"
												key={`housed-non-chronic-human-illustration:${idx}`}
											/>
										);
									})}
							</div>
						</div>
						<div className="ml-auto flex gap-4 justify-end">
							<div className="flex gap-2 items-center">
								<div className="h-4 w-4 rounded-full bg-brand-medium-green" />
								<Text size="sm">
									Chronic
								</Text>
							</div>
							<div className="flex gap-2 items-center">
								<div className="h-4 w-4 rounded-full bg-brand-grey" />
								<Text size="sm">
									Non Chronic
								</Text>
							</div>

						</div>

					</div>
					<Text size="lg" className="text-brand-grey mt-8">
						Chronic homelessness is defined as experiencing homelessness for a total of at least six months in the past year, or lots of episodes of homelessness over the past three years that total at least 18 months.
					</Text>
				</div>
				<div className="col-span-12 md:col-span-4">
					<div className="flex flex-col gap-4">
						<FlowCard type="outflow" stat={outflowStat} />
						<FlowCard type="inflow"stat={inflowStat} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

interface DataSelectorProps {
	dataPoint: HousingStatsProps["data"][number];
	isNextDataPointDisabled: boolean;
	isPreviousDataPointDisabled: boolean;
	goToNextDataPoint: () => void;
	goToPreviousDataPoint: () => void;
}

function DataSelector({
	dataPoint,
	isNextDataPointDisabled,
	isPreviousDataPointDisabled,
	goToNextDataPoint,
	goToPreviousDataPoint,
}: DataSelectorProps) {
	return (
		<div className="flex gap-4">
			<Heading className="text-brand-dark-green underline" as="span">{formatDate(dataPoint.date, "MMMM yyyy")}</Heading>
			<div>
				<button
					type="button"
					disabled={isPreviousDataPointDisabled}
					onClick={goToPreviousDataPoint}
				>
					<ArrowLeftIcon />
				</button>
				<button
					onClick={goToNextDataPoint}
					type="button"
					disabled={isNextDataPointDisabled}
				>
					<ArrowRightIcon />
				</button>
			</div>
		</div>
	);
}

interface FlowCardProps {
	type: "inflow" | "outflow";
	stat: number;
}

function FlowCard({ stat, type }: FlowCardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>
					<Heading size="xs" className="font-semibold">
						{type === "inflow" ? "Chronic inflow" : "Chronic outflow"}
					</Heading>
				</CardTitle>
				<CardContent>
					<div className="flex items-center gap-4">
						<Heading as="p" size="xl" className="font-semibold text-brand-grey">
							{stat}
						</Heading>
						{type === "inflow"
							? <InflowArrow />
							: <OutflowArrow />}
					</div>
				</CardContent>
			</CardHeader>
		</Card>
	);
}

interface ArrowStatsProps extends React.ComponentPropsWithRef<"svg"> {}

function InflowArrow(props: ArrowStatsProps) {
	return (
		<svg
			width="183"
			height="96"
			viewBox="0 0 183 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M53.7217 54.7347L55.9864 56.7022L53.8653 59.1437L51.5898 56.8454L53.7217 54.7347ZM94.4118 7.89796L92.1471 5.93045L94.3381 3.40855L96.6107 5.85711L94.4118 7.89796ZM176.396 93.1117C176.335 94.7674 174.943 96.0596 173.287 95.9979L146.306 94.9924C144.65 94.9307 143.358 93.5384 143.419 91.8827C143.481 90.227 144.873 88.9348 146.529 88.9965L170.512 89.8904L171.406 65.907C171.468 64.2513 172.86 62.9591 174.516 63.0208C176.172 63.0825 177.464 64.4748 177.402 66.1305L176.396 93.1117ZM2.5 3L4.63186 0.889275L55.8536 52.624L53.7217 54.7347L51.5898 56.8454L0.368136 5.11073L2.5 3ZM53.7217 54.7347L51.457 52.7672L92.1471 5.93045L94.4118 7.89796L96.6765 9.86546L55.9864 56.7022L53.7217 54.7347ZM94.4118 7.89796L96.6107 5.85711L175.597 90.9592L173.399 93L171.2 95.0408L92.213 9.9388L94.4118 7.89796Z" fill="#979798" />
			<path d="M58.8233 54.7347L61.088 56.7022L58.9669 59.1437L56.6914 56.8454L58.8233 54.7347ZM99.5134 7.89796L97.2487 5.93045L99.4396 3.40854L101.712 5.85711L99.5134 7.89796ZM181.498 93.1117C181.436 94.7674 180.044 96.0596 178.388 95.9979L151.407 94.9924C149.751 94.9307 148.459 93.5384 148.521 91.8827C148.583 90.227 149.975 88.9348 151.631 88.9965L175.614 89.8904L176.508 65.907C176.569 64.2513 177.962 62.9591 179.617 63.0208C181.273 63.0825 182.565 64.4748 182.504 66.1305L181.498 93.1117ZM7.60156 3L9.73343 0.889276L60.9551 52.624L58.8233 54.7347L56.6914 56.8454L5.4697 5.11072L7.60156 3ZM58.8233 54.7347L56.5585 52.7672L97.2487 5.93045L99.5134 7.89796L101.778 9.86546L61.088 56.7022L58.8233 54.7347ZM99.5134 7.89796L101.712 5.85711L180.699 90.9592L178.5 93L176.301 95.0408L97.3145 9.9388L99.5134 7.89796Z" fill="url(#paint0_radial_615_1464)" />
			<defs>
				<radialGradient id="paint0_radial_615_1464" cx="0" cy="0" r="1" gradientTransform="matrix(-6.46255 -66.7347 -126.721 5.01822 99.5134 69.7347)" gradientUnits="userSpaceOnUse">
					<stop stopColor="#81AE30" />
					<stop offset="1" stopColor="#81AE30" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>

	);
}

function OutflowArrow(props: ArrowStatsProps) {
	return (
		<svg
			width="183"
			height="96"
			viewBox="0 0 183 96"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M53.7217 41.2653L55.9864 39.2978L53.8653 36.8563L51.5898 39.1546L53.7217 41.2653ZM94.4118 88.102L92.1471 90.0695L94.3381 92.5915L96.6107 90.1429L94.4118 88.102ZM176.396 2.88827C176.335 1.23257 174.943 -0.0596242 173.287 0.00208116L146.306 1.00763C144.65 1.06933 143.358 2.46157 143.419 4.11727C143.481 5.77298 144.873 7.06517 146.529 7.00347L170.512 6.10965L171.406 30.093C171.468 31.7487 172.86 33.0409 174.516 32.9792C176.172 32.9175 177.464 31.5252 177.402 29.8695L176.396 2.88827ZM2.5 93L4.63186 95.1107L55.8536 43.376L53.7217 41.2653L51.5898 39.1546L0.368136 90.8893L2.5 93ZM53.7217 41.2653L51.457 43.2328L92.1471 90.0695L94.4118 88.102L96.6765 86.1345L55.9864 39.2978L53.7217 41.2653ZM94.4118 88.102L96.6107 90.1429L175.597 5.04085L173.399 3L171.2 0.959155L92.213 86.0612L94.4118 88.102Z" fill="#979798" />
			<path d="M58.8233 41.2653L61.088 39.2978L58.9669 36.8563L56.6914 39.1546L58.8233 41.2653ZM99.5134 88.102L97.2487 90.0695L99.4396 92.5915L101.712 90.1429L99.5134 88.102ZM181.498 2.88827C181.436 1.23257 180.044 -0.0596242 178.388 0.00208123L151.407 1.00763C149.751 1.06933 148.459 2.46157 148.521 4.11727C148.583 5.77298 149.975 7.06517 151.631 7.00347L175.614 6.10965L176.508 30.093C176.569 31.7487 177.962 33.0409 179.617 32.9792C181.273 32.9175 182.565 31.5252 182.504 29.8695L181.498 2.88827ZM7.60156 93L9.73343 95.1107L60.9551 43.376L58.8233 41.2653L56.6914 39.1546L5.4697 90.8893L7.60156 93ZM58.8233 41.2653L56.5585 43.2328L97.2487 90.0695L99.5134 88.102L101.778 86.1345L61.088 39.2978L58.8233 41.2653ZM99.5134 88.102L101.712 90.1429L180.699 5.04085L178.5 3L176.301 0.959155L97.3145 86.0612L99.5134 88.102Z" fill="url(#paint0_radial_615_1454)" />
			<defs>
				<radialGradient id="paint0_radial_615_1454" cx="0" cy="0" r="1" gradientTransform="matrix(-6.46255 66.7347 -126.721 -5.01822 99.5134 26.2653)" gradientUnits="userSpaceOnUse">
					<stop stopColor="#DB4D52" />
					<stop offset="1" stopColor="#AF522A" stopOpacity="0" />
				</radialGradient>
			</defs>
		</svg>

	);
}
