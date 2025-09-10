import type { Profile } from "../lib/directus";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HouseIllustration } from "@/components/pages/index-page";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { BuildingIllustration } from "../components/pages/index-page/building-illustration";
import { BuildingUnderConstructionIllustration } from "../components/pages/index-page/building-under-construction-illustration";
import { FallenBuildingIllustration } from "../components/pages/index-page/fallen-building-illustration";
import { HouseWithMagnifyingLensIllustration } from "../components/pages/index-page/house-with-magnifying-lens-illustration";
import { HousingStatsContainer } from "../components/pages/index-page/housing-stats/housing-stats-container";
import { Button } from "../components/ui/button";
import { getDirectusAssetUrl } from "../lib/assets";
import { directus, readItems } from "../lib/directus";

export const dynamic = "force-dynamic";

const IllustrationWithCopyItems: Array<IllustrationWithCopyProps> = [
	{
		illustration: <BuildingIllustration />,
		copy: "When constraints are not addressed",
	},
	{
		illustration: <BuildingUnderConstructionIllustration />,
		copy: "Our foundation becomes shaky",
	},
	{
		illustration: <FallenBuildingIllustration />,
		copy: "Until it can't withstand its own weight and comes crashing down",
	},
];

export default function Home() {
	return (
		<React.Fragment>
			<main className="bg-brand-black text-brand-white">
				<Container
					size="6xl"
					as="section"
					className={cn(
						"flex md:flex-row items-center flex-wrap flex-col-reverse md:flex-nowrap justify-between gap-16",
						"py-16",
					)}
				>
					<div
						className="max-w-xl flex flex-col gap-4"
					>
						<Heading size="2xl" className="break-words text-pretty font-normal">
							<span className="font-bold">The Plan</span>
							{" "}
							<br />
							to End Chronic Homelessness
						</Heading>
						<Text size="lg" className="font-normal">
							A shared plan with clear steps and resources to end chronic homelessness in Waterloo Region.
						</Text>
					</div>
					<HouseIllustration
						className={cn(
							// "hidden md:block",
							"h-48 w-48",
							"md:h-auto md:w-auto",
						)}
					/>
				</Container>
			</main>
			<Container
				size="6xl"
				className="py-20"
			>
				<div className="flex flex-col gap-4">
					<Heading size="md" className="font-normal">
						Monthly updates for Waterloo Region
					</Heading>
					<HousingStatsContainer />
				</div>
			</Container>
			<section className="bg-brand-black text-brand-white py-20">
				<Container
					size="6xl"
					as="section"
					className="flex flex-col gap-8"
				>
					<Heading size="md" className="font-semibold text-center">
						Our housing system has become progressively more unstable
					</Heading>
					<div
						className="grid grid-cols-1 md:grid-cols-3"
					>
						{IllustrationWithCopyItems.map(({ copy, illustration }) => {
							return (
								<IllustrationWithCopy
									key={`illustration-with-copy:${copy}`}
									copy={copy}
									illustration={illustration}
								/>
							);
						})}
					</div>
					<div className="flex flex-col items-start">
						<Heading size="sm" className="font-serif font-normal" as="h3">
							"Housing is both a human right and a speculative commodity from which to extract wealth. Therein lies the crux of the housing problem. Until we fully reconcile these contradictory roles that housing plays, we will be in a perpetual state of crisis."
						</Heading>
						<Text size="xl" className="font-serif">
							—(Doucet, Mcdougall and Jay 2023) (LE Prototyping Cohort, 2024)
						</Text>
					</div>
				</Container>
				<Container
					size="6xl"
					className="mt-20 grid grid-cols-1 md:grid-cols-2 items-center"
				>
					<div className="flex items-center gap-4 flex-col">
						<div className="flex items-center flex-col">
							<OutlinedHouseIllustration />
							<Heading size="xs">
								It's time to build a stronger system.
							</Heading>
						</div>
					</div>
					<div className="flex gap-4 mt-8 flex-col justify-evenly">
						<Heading size="sm" className="text-brand-light-green font-bold">
							The data we collect have real life stories behind the numbers.
						</Heading>
						<Link
							href="/research"
							className={cn(
								"bg-brand-white text-brand-dark-green",
								"flex gap-2 p-2.5 w-fit rounded-md",
							)}
						>
							View the research
							<ArrowRightIcon />
						</Link>
					</div>
				</Container>
			</section>
			<section className="bg-brand-white text-brand-grey py-20">
				<Container size="6xl" className="flex flex-col gap-2">
					<Heading as="h3" size="md" className="font-normal">Our goal</Heading>
					<div className="grid grid-cols-12 gap-8">
						<div className="col-span-12 md:col-span-8 flex flex-col gap-6">
							<Heading as="h4" size="lg" className="font-bold text-brand-black">
								Help us reach functional zero by 2030
							</Heading>
							<Text>
								Functional zero is when a community has ended homelessness for a group of people. This means there are no people without a home, or just a very small number, like 3 people or less than 1 out of 1,000. The community also has enough housing and support to help anyone who needs it. To count as functional zero, the community must keep numbers this low for three months in a row.
							</Text>
							<Text>
								Together with our community partners, we have a plan to end chronic homelessness in Waterloo Region.
							</Text>
							<Button variant="default" className="w-fit" asChild>
								<Link href="/plan">
									Learn about The Plan
									<ArrowRightIcon />
								</Link>
							</Button>
						</div>
						<div>
							<HouseWithMagnifyingLensIllustration
								className={cn(
									"w-120 h-120",
									"hidden md:block",
								)}
							/>
						</div>

					</div>
				</Container>
			</section>
			<section className=" text-brand-grey py-10">
				<Container size="6xl" className="flex flex-col gap-2">
					<div className="grid grid-cols-12">
						<div className="col-span-12 md:col-span-4 flex flex-col gap-6">
							<Heading size="lg" className="font-bold text-brand-black">
								Meet the Co-Creators
							</Heading>
							<Text size="lg" className="font-normal">
								Many of us worked on this plan together. Meet the people who helped make it happen.
							</Text>
							<Button variant="default" className="w-fit" asChild>
								<Link href="/co-creators">
									See all Co-Creators
									<ArrowRightIcon />
								</Link>
							</Button>
						</div>
						<div className="col-span-12 md:col-span-8">
							<CoordinatingTeam />
						</div>
					</div>
				</Container>
			</section>
		</React.Fragment>
	);
}

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

async function CoordinatingTeam() {
	const profiles = await getCoordinatingTeam();

	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
			{profiles.map((profile) => {
				return (
					<div
						key={profile.id}
						className="flex gap-4 items-center"
					>
						<div className="relative h-16 w-16">
							<Image
								src={profile.profile_image!}
								alt={profile.display_name}
								fill
								className="object-cover object-[center_20%] rounded-full"
							/>
						</div>
						<div>
							<Text size="md">
								{profile.display_name}
							</Text>
							<Text
								className="text-brand-medium-green text-sm truncate max-w-20"
							>
								{profile.display_blurb}
							</Text>
						</div>
					</div>
				);
			})}
		</div>
	);
}

function OutlinedHouseIllustration(props: React.ComponentPropsWithRef<"svg">) {
	return (
		<svg
			width="242"
			height="265"
			viewBox="0 0 242 265"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M168.687 221.25L187.191 197.806L186.209 103.324L163.636 125.278L168.687 221.25Z" fill="#71C6AC" />
			<path d="M147.937 213.637L168.892 221.327L166.704 126.404L142.608 117.562L147.937 213.637Z" fill="#1E968C" />
			<path d="M162.272 94.5405L186.225 103.331L166.807 126.439L142.535 117.532L162.272 94.5405Z" fill="#095A5A" />
			<path d="M54.939 224.47L70.7558 201.781L71.8385 96.868L52.0191 120.425L54.939 224.47Z" fill="#71C6AC" />
			<path d="M35.824 212.169L55.1284 224.592L56.1663 115.948L32.6471 107.96L35.824 212.169Z" fill="#1E968C" />
			<path d="M49.9348 87.8548L71.9824 96.7395L55.9841 115.862L32.5799 107.913L49.9348 87.8548Z" fill="#095A5A" />
			<path d="M194.662 151.552L164.052 141.921L88.6989 46.3188L123.601 53.9104L194.662 151.552Z" fill="#71C6AC" />
			<path d="M203.502 126.705L194.574 151.798L116.618 52.7367L132.56 28.7294L203.502 126.705Z" fill="#1E968C" />
			<path d="M102.431 22.514L88.4756 46.3018L116.725 52.5283L132.589 28.6384L102.431 22.514Z" fill="#095A5A" />
			<path d="M30.353 141.325L60.9629 131.694L136.316 36.092L101.414 43.6836L30.353 141.325Z" fill="#71C6AC" />
			<path d="M21.5133 116.478L30.4409 141.571L108.397 42.5098L92.4552 18.5026L21.5133 116.478Z" fill="#1E968C" />
			<path d="M122.584 12.2884L136.539 36.0762L108.29 42.3027L92.4258 18.4128L122.584 12.2884Z" fill="#095A5A" />
			<path d="M40.7432 200.51L69.6963 184.759L172.665 198.501L144.602 218.611L40.7432 200.51Z" fill="#71C6AC" />
			<path d="M45.2903 222.744L40.6982 200.29L143.93 215.325L149.21 241.144L45.2903 222.744Z" fill="#1E968C" />
			<path d="M177.911 224.15L172.662 198.484L143.91 215.214L149.229 241.222L177.911 224.15Z" fill="#095A5A" />
		</svg>
	);
}

interface IllustrationWithCopyProps {
	illustration: React.ReactNode;
	copy: string;
}

function IllustrationWithCopy(props: IllustrationWithCopyProps) {
	return (
		<div className="flex flex-col items-center">
			<div className="h-72 w-full flex items-end justify-center">
				{props.illustration}
			</div>
			<Text size="lg" className="w-full mt-4 text-center">
				{props.copy}
			</Text>
		</div>
	);
}
