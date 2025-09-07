import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ExternalLink } from "../../components/external-link";
import { CommunityIcon } from "../../components/icons/community.icon";
import { DocumentWithCheckIcon } from "../../components/icons/document-with-check.icon";
import { DollarIcon } from "../../components/icons/dollar.icon";
import { HomeIcon } from "../../components/icons/home.icon";
import { DollarSignIllustration } from "../../components/illustrations/dollarsign";
import { HumanIllustration } from "../../components/illustrations/human";
import { ButtonVariants } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { cn } from "../../lib/utils";
import { BlockIllustration } from "./block-illustration";
import { BuildingIllustration } from "./building-illustration";
import { FallenBlocksIllustration } from "./fallen-blocks-illustration";
import { ResearchHeaderCopyIllustration } from "./header-copy-illustration";
import { HouseIllustration } from "./house-illustration";
import { SolidHouseIllustration } from "./solid-house-illustration";

const FeatureChangeCardItems: Array<FeatureChangeCardProps> = [
	{
		icon: <HomeIcon />,
		title: "Building More Homes",
		items: [
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We're building more affordable housing.
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We're adding more transitional housing spaces.
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text size="md" as="span">
				We've opened a shelter for women and gender-diverse people.
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text size="md" as="span">
				Learn about the Region of Waterloo's Building Better Futures Plan
				{" "}
				<ExternalLink href="https://www.regionofwaterloo.ca/en/living-here/affordable-housing-plan.aspx" className="text-brand-medium-green">[LINK]</ExternalLink>
			</Text>,
		],
	},
	{
		icon: <CommunityIcon />,
		title: "Community First",
		items: [
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We’re centering community voices in all our work.
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We’ve created flexible funding so equity-owed groups can use it in ways that work best for them.
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text size="md" as="span">
				We’re doing more research to better understand the needs of the community.
			</Text>,

		],
	},

	{
		icon: <DocumentWithCheckIcon />,
		title: "Better Systems",
		items: [
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We’ve set up working groups to solve big challenges in ending homelessness.
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We’re checking our work to make sure it follows best practices and is trauma-informed.
			</Text>,
		],
	},

	{
		icon: <DollarIcon />,
		title: "Stronger Supports",
		items: [
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We’ve launched a program to help people pay their rent
			</Text>,
			// eslint-disable-next-line react/no-missing-key
			<Text
				size="md"
				as="span"
			>
				We’ve built new supports for the workers who help people without housing.
			</Text>,
		],
	},
];

export default function ResearchPage() {
	return (
		<div className="min-h-screen">

			<section className="bg-brand-black text-white py-20">
				<Container size="6xl">
					<div className="grid lg:grid-cols-2 items-center">
						<div className="flex flex-col gap-4">
							<Heading size="2xl" className="font-semibold">
								The housing system is under strain
							</Heading>
							<Text size="xl">
								Our housing system is like a tower with missing blocks: it can't hold everyone up. As we face  more challenges, the whole structure becomes shaky.
							</Text>
						</div>
						<div className="flex justify-end">
							<ResearchHeaderCopyIllustration className="md:h-96 md:w-64 hidden md:block rounded-lg " />
						</div>
					</div>
				</Container>

			</section>
			<div className="relative overflow-hidden">
				<div className="absolute top-[-80px] right-[-600px] lg:right-[-550px]">
					<BuildingIllustration
						className="h-[1792px] opacity-10 lg:opacity-100"
					/>
				</div>
				<Container size="6xl" className="py-20 ">
					<div className="flex flex-col gap-20">

						<section className="max-w-3xl flex flex-col gap-8">
							<Heading as="h3" size="lg" className="text-brand-dark-green">
								We've got cracks in our system
							</Heading>
							<Text size="md" className="text-brand-grey">
								To make sure our system does not topple over, we have to build a better foundation that supports all of our needs. Homelessness is complicated, and unfortunately, lots of people fall through the cracks.
							</Text>
						</section>

						<div className="relative">
							<section className="max-w-2xl flex flex-col gap-8">
								<Heading as="p" size="md" className="text-brand-grey">
									More than half of all known homelessness in Ontario is chronic
								</Heading>
								<div className="flex gap-4">
									{[...Array.from({ length: 10 })].map((_, index) => (
										<HumanIllustration
											variant={index < 5 ? "brand-medium-green" : "brand-grey"}
											// eslint-disable-next-line react/no-array-index-key
											key={`human-${index}`}
										/>
									))}
								</div>
								<div className="flex flex-row gap-4">
									<div className="flex flex-row gap-2 items-center">
										<div className="h-4 w-4 rounded-full bg-brand-medium-green"></div>
										<Text size="md" className="text-brand-grey">
											Chronically Unhoused
										</Text>
									</div>
									<div className="flex flex-row gap-2 items-center">
										<div className="h-4 w-4 rounded-full bg-brand-grey"></div>
										<Text size="md" className="text-brand-grey">
											Unhoused
										</Text>
									</div>
								</div>
								<Text size="md" className="text-brand-grey">
									Since 2020, chronic homelessness in Waterloo Region has grown by
									{" "}
									<Link href="https://waterlooregion.org/sites/default/files/PECHKeyFindingsReport_DRAFT.pdf" className="text-brand-medium-green">
										<strong>28%</strong>
										{" "}
										each year
									</Link>
									.
								</Text>
								<Text size="md" className="text-brand-grey">
									On October 22, 2024,
									{" "}
									<Link
										href="https://www.regionofwaterloo.ca/en/living-here/resources/Housing-Services/137392-CS---PIT-Count-Infographic_Accessibility.pdf"
										className="text-brand-medium-green"
									>
										<strong>2,371 people</strong>
										{" "}
										were experiencing homelessness in Waterloo Region
									</Link>
									. With only
									{" "}
									<strong>301 shelter beds</strong>
									{" "}
									available, many had to live outside or sleep in cars.
								</Text>
								<Text size="md" className="text-brand-grey">
									Some people may not have been counted by service providers if they were unsheltered, unsafely housed, or couch-surfing. This is known as hidden homelessness.
									It also means there could be many more people experiencing homelessness than counted by our system.
								</Text>
							</section>
							<BlockIllustration
								className={cn(
									"absolute top-0 right-35",
									"hidden xl:block",
									"rotate-[-17.5deg]",
									"scale-125",
								)}
							/>
						</div>
						<div className="relative">
							<section className="max-w-xl flex flex-col gap-8">
								<Heading as="p" size="md" className="text-brand-grey">
									5 main reasons people in Waterloo Region are experiencing homelessness:
								</Heading>
								<div className="flex flex-col gap-4">
									<ul className="list-disc list-inside">
										<Text as="li" className="text-brand-grey" size="md">
											They did not have enough income for housing
											{" "}
											{" "}
											<span className="text-brand-dark-green">(44%)</span>
										</Text>
										<Text as="li" className="text-brand-grey" size="md">
											Had a conflict with their partner
											{" "}
											{" "}
											<span className="text-brand-dark-green">(18%)</span>
										</Text>
										<Text as="li" className="text-brand-grey" size="md">
											Had a conflict with their landlord
											{" "}
											{" "}
											<span className="text-brand-dark-green">(13%)</span>
										</Text>
										<Text as="li" className="text-brand-grey" size="md">
											Were stuck living in unfit and unsafe housing conditions
											{" "}
											{" "}
											<span className="text-brand-dark-green">(12%)</span>
										</Text>
										<Text as="li" className="text-brand-grey" size="md">
											Substance use challenges
											{" "}
											{" "}
											<span className="text-brand-dark-green">(10%)</span>
										</Text>
									</ul>
								</div>
							</section>
							<BlockIllustration
								className={cn(
									"absolute top-20 right-35",
									"hidden xl:block",
									"rotate-[30deg]",
									"scale-125",
								)}
							/>
						</div>
						<div className="relative">
							<section className="max-w-xl flex flex-col gap-8">
								<Heading as="p" size="md" className="text-brand-grey">
									45% of family homelessness cases caused by gender-based violence
								</Heading>
								<Text size="md" className="text-brand-grey">
									In local research, 83% of women said they stayed in an abusive housing situation because it felt safer than being unhoused, contributing to hidden homelessness.
									{" "}
									<Link
										className="text-brand-medium-green"
										href="https://caeh.ca/wp-content/uploads/WH6-%E2%80%98Dont-Tell-People-Youre-Homeless-Experiences-of-Safety-Violence-and-Justice-among-Womens-Emergency-Shelter-Users.pdf"
									>
										[LINK]
									</Link>
								</Text>
								<Text size="md" className="text-brand-grey">
									In a 2023 region-wide survey, 13% of young people said that they had experienced homelessness.
									{" "}
									<Link
										className="text-brand-medium-green"
										href="https://childrenandyouthplanningtable.ca/wp-content/uploads/2024/08/HOMELESSNESS-Snapshot-YOUTH-IMPACT-SURVEY-Fast-Facts-V2-FINAL.pdf"
									>
										[LINK]
									</Link>
								</Text>
							</section>
							<BlockIllustration
								className={cn(
									"absolute top-20 right-50",
									"hidden xl:block",
									"rotate-[-120deg]",
									"scale-125",
								)}
							/>
						</div>
						<div className="relative">
							<section className="max-w-xl flex flex-col gap-12">
								<Heading as="p" size="md" className="text-brand-grey">
									High rents and low wages contribute to housing loss
								</Heading>
								<div className="flex justify-evenly items-center gap-4">
									<div className="flex flex-col gap-2 items-center">
										<DollarSignIllustration className="h-36" />
										<div className="flex flex-col gap-2 items-center">
											<Text size="md" className="text-brand-grey max-w-[50ch] text-center">
												Ontario Disability Support Program (ODSP) housing allowance
											</Text>
											<Text size="md" className="text-brand-dark-green">
												$522
											</Text>
										</div>
									</div>
									<div className="flex flex-col gap-2 items-center">
										<SolidHouseIllustration className="h-36" />
										<div className="flex flex-col gap-2 items-center">
											<Text size="md" className="text-brand-grey text-center">
												Average rent price for 1-bedrooms in Waterloo Region
											</Text>
											<Text size="md" className="text-brand-dark-green">
												$1,600+/month
											</Text>
										</div>
									</div>
								</div>
								<Text size="md" className="text-brand-grey">
									There is no rent control for housing built after 2018, so we are losing affordable housing. As one lived expert said: “Affordable housing means rent control. People on fixed incomes can't handle big rent increases without harming their health.”
									{" "}
									<Link
										className="text-brand-medium-green"
										href="https://caeh.ca/wp-content/uploads/WH6-%E2%80%98Dont-Tell-People-Youre-Homeless-Experiences-of-Safety-Violence-and-Justice-among-Womens-Emergency-Shelter-Users.pdf"
									>
										[LINK]
									</Link>
								</Text>

							</section>
							<BlockIllustration
								className={cn(
									"absolute top-20 right-30",
									"hidden xl:block",
									"rotate-[60deg]",
									"scale-125",
								)}
							/>
						</div>
						<section className="flex flex-row items-center flex-wrap xl:flex-nowrap space-between">
							<div className="flex flex-col gap-8">
								<Heading as="p" size="md" className="text-brand-grey">
									Even with shelters and housing supports, many people can't find a safe place that meets their needs.
								</Heading>
								<Text size="md" className="text-brand-grey">
									Shelter spaces are often for specific groups, which leaves gaps for couples, 2SLGBTQ+ people, and those with pets. Rising rents, low incomes that can't keep up with the cost of living, and the loss of deeply affordable and therapeutic housing has damaged our whole housing system.
								</Text>
							</div>
							<div>
								<FallenBlocksIllustration className="w-72 h-42 lg:w-128 lg:h-84" />
							</div>
						</section>
					</div>
				</Container>
			</div>
			<div className="bg-brand-black text-white">
				<Container size="6xl" className="py-20 flex flex-col gap-8">
					<div className="flex flex-col gap-8">
						<Heading as="h3" size="lg">
							We're changing the system
						</Heading>
						<Text size="md">
							It is time to rebuild our system to create something more resilient and transformed, or even a new kind of structure, rather than trying to force pieces to fit where they no longer make sense.
						</Text>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{FeatureChangeCardItems.map((item) => {
							return (
								<FeatureChangeCard
									key={item.title.toString()}
									icon={item.icon}
									title={item.title}
									items={item.items}
								/>
							);
						})}
					</div>

					<div className="flex flex-row gap-8 items-center flex-wrap lg:flex-nowrap">
						<div>
							<div className="flex flex-col gap-8">
								<Heading as="h3" size="sm" className="font-medium">
									But there’s still work to do!
								</Heading>
								<Heading as="h3" size="sm" className="font-medium">
									We still need more safe, affordable housing and stronger supports to help the system thrive for everyone.
								</Heading>
							</div>
						</div>

						<div className="flex justify-center items-center w-full lg:block lg:justify-start lg:w-auto">
							<HouseIllustration className="w-60 h-60 lg:w-120 lg:h-120" />
						</div>

					</div>
				</Container>
			</div>
			<div>
				<Container size="6xl" className="py-20 flex flex-col gap-4">
					<Heading as="h3" size="lg" className="text-brand-dark-green font-bold">
						Be Part of the Solution
					</Heading>
					<Text size="md" className="font-semibold text-brand-grey">
						Ending chronic homelessness takes all of us. Learn more about the Plan, share what you know, and speak up for safe, affordable housing in Waterloo Region.
					</Text>
					<Link
						href="/plan"
						className={cn(
							ButtonVariants({
								size: "default",
							}),
							"bg-brand-dark-green text-white hover:bg-brand-dark-green/90",
							"w-fit mt-2",
						)}
					>
						Learn about The Plan
						<ArrowRightIcon />
					</Link>
				</Container>
			</div>
		</div>
	);
}

interface FeatureChangeCardProps {
	icon: React.ReactNode;
	title: string;
	items: Array<React.ReactNode>;
}

function FeatureChangeCard({ icon, title, items }: FeatureChangeCardProps) {
	return (
		<Card className="bg-brand-yellow min-h-64">
			<CardHeader>
				<div>
					{icon}
				</div>
				<CardTitle className="flex flex-row gap-2 items-center">
					<Text size="md" className="font-bold text-brand-dark-green">
						{title}
					</Text>
				</CardTitle>
				<CardContent className="mt-2">
					<ul className={cn("list-disc list-outside")}>
						{items.map(item => (
							<Text
								as="li"
								className="text-brand-grey"
								key={JSON.stringify(item)}
							>
								{item}
							</Text>
						))}
					</ul>
				</CardContent>
			</CardHeader>
		</Card>
	);
}
