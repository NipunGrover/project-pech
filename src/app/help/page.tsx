import { ArrowRightIcon, InfoIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { cn } from "../../lib/utils";
import { HeaderIllustration } from "./header-illustration";
import { NeighbourhoodIllustration } from "./neighbourhood-illustration";
import { PersonHoldingBabyWithHouseIllustration } from "./person-holding-baby-with-house-illustration";
import { PersonWalkingByBuildingIllustration } from "./person-walking-by-building-illustration";
import { SharedGoalsIllustrations } from "./shared-goals-illustrations";
import { TextingPersonIllustration } from "./texting-person-illustration";

export default function HelpPage() {
	return (
		<div className="relative">
			<div
				className={cn(
					"sticky top-16 p-2 z-40 bg-brand-red text-brand-white",
				)}
			>
				<Link
					href="https://www.google.ca"
					className="w-screen flex items-center gap-2 justify-center"
				>
					<InfoIcon className="h-4 w-4" />
					<Text size="md" as="span">
						HIDE WEBSITE
					</Text>
					<ArrowRightIcon className="h-4 w-4" />
				</Link>
			</div>
			<div>
				<main className="bg-brand-black text-brand-white overflow-hidden">
					<Container
						size="6xl"
						as="section"
						className={cn(
							"flex flex-row items-center justify-between gap-16",
							"py-16",
						)}
					>
						<div className="max-w-xl flex flex-col gap-4">
							<Heading size="2xl">
								Get help now
							</Heading>
							<Text size="xl">
								If you don’t have a safe place to stay, or you might lose your home, there are people and programs in Waterloo Region who can help.
							</Text>
						</div>
						<HeaderIllustration
							className={cn(
								"w-96 h-96",
								"hidden md:block",
							)}
						/>
					</Container>
				</main>
				<Container
					as="section"
					size="6xl"
					className={cn(

						"flex flex-row items-end justify-between gap-16",
						"py-16 md:mt-[-6rem] overflow-hidden",
					)}
				>
					<div className="max-w-xl text-brand-black flex flex-col gap-4">
						<Heading size="lg">
							Do you need emergency shelter?
						</Heading>
						<Text size="lg">
							This number will connect you to shelter programs in Cambridge, Kitchener, and Waterloo. Staff can tell you where there is space and help you get there.
						</Text>
						<div className={cn(
							"md:border md:border-solid md:border-brand-medium-green",
							"rounded-md p-2 flex gap-2",
							"md:items-center items-start flex-wrap",
						)}
						>
							<Link
								href="tel:519-624-9133"
								className={cn(
									"text-brand-medium-green bg-brand-yellow",
									"p-1 rounded-md",
									"border border-solid border-brand-medium-green",
								)}
							>
								<Text
									as="span"
									size="lg"
									className={cn(
										"text-brand-dark-green",

									)}
								>
									📞 519-624-9133
								</Text>
							</Link>
							<Text as="span" size="lg" className="text-brand-dark-green">
								First Connect (available 24/7)
							</Text>
						</div>
					</div>
					<NeighbourhoodIllustration
						className={cn(
							"w-96 h-96 pt-20",
							"hidden md:block",

						)}
					/>
				</Container>

				<Container
					as="section"
					size="6xl"
					className={cn(

						"flex flex-row items-end justify-between gap-16",
						"py-16 overflow-hidden",
					)}
				>
					<PersonWalkingByBuildingIllustration
						className={cn(
							"w-96 h-96 pt-20",
							"hidden md:block",

						)}
					/>
					<div className="max-w-xl text-brand-black flex flex-col gap-4">
						<Heading size="lg">
							Are you in an unsafe or abusive home?
						</Heading>
						<div className="flex flex-col gap-2">
							<Text size="lg">
								If you are experiencing violence at home and it's no longer safe to stay, contact Women's Crisis Services of Waterloo region:
							</Text>

							<div className={cn(
								"md:border md:border-solid md:border-brand-medium-green",
								"rounded-md p-2 flex gap-2",
								"md:items-center items-start flex-wrap",
							)}
							>
								<Link
									href="tel:519-742-5894"
									className={cn(
										"text-brand-medium-green bg-brand-yellow",
										"p-1 rounded-md",
										"border border-solid border-brand-medium-green",
									)}
								>
									<Text
										as="span"
										size="lg"
										className={cn(
											"text-brand-dark-green",
										)}
									>
										📞 519-742-5894
									</Text>
								</Link>
								<Text as="span" size="lg" className="text-brand-dark-green">
									Crisis line for Kitchener-Waterloo
								</Text>
							</div>
							<div className={cn(
								"md:border md:border-solid md:border-brand-medium-green",
								"rounded-md p-2 flex gap-2",
								"md:items-center items-start flex-wrap",
							)}
							>
								<Link
									href="tel:519-653-2422"
									className={cn(
										"text-brand-medium-green bg-brand-yellow",
										"p-1 rounded-md",
										"border border-solid border-brand-medium-green",
									)}
								>
									<Text
										as="span"
										size="lg"
										className={cn(
											"text-brand-dark-green",
										)}
									>
										📞 519-653-2422
									</Text>
								</Link>
								<Text as="span" size="lg" className="text-brand-dark-green">
									Crisis line for Cambridge
								</Text>
							</div>

						</div>
						<Text size="lg">
							If you are in immediate danger, call 911.
						</Text>
					</div>

				</Container>

				<Container
					as="section"
					size="6xl"
					className={cn(

						"flex flex-row items-end justify-between gap-16",
						"py-16 overflow-hidden",
					)}
				>
					<div className="max-w-xl text-brand-black flex flex-col gap-4">
						<Heading size="lg">
							Experiencing sexual exploitation and you need help to leave?
						</Heading>
						<Text size="lg">
							Contact the Anti-Human Trafficking Program of the Sexual Assault Support Centre (SASC) 24-hour support line below or email at
							{" "}
							<Link
								href="email:ahtp@sascwr.org"
								className="text-brand-medium-green"
							>
								ahtp@sascwr.org
							</Link>
							{" "}
							from Monday-Friday, 9 a.m. to 4:30 p.m.
						</Text>
						<div className={cn(
							"md:border md:border-solid md:border-brand-medium-green",
							"rounded-md p-2 flex gap-2",
							"md:items-center items-start flex-wrap",
						)}
						>
							<Link
								href="tel:519-571-0121;111"
								className={cn(
									"text-brand-medium-green bg-brand-yellow",
									"p-1 rounded-md",
									"border border-solid border-brand-medium-green",
								)}
							>
								<Text
									as="span"
									size="lg"
									className={cn(
										"text-brand-dark-green",

									)}
								>
									📞 519-571-0121 ext. 111
								</Text>
							</Link>
							<Text as="span" size="lg" className="text-brand-dark-green">
								SASC Waterloo Region
							</Text>
						</div>

					</div>
					<TextingPersonIllustration
						className={cn(
							"w-96 h-96 pt-20",
							"hidden md:block",

						)}
					/>
				</Container>

				<Container
					as="section"
					size="6xl"
					className={cn(

						"flex flex-row items-end justify-between gap-16",
						"py-16 overflow-hidden",
					)}
				>
					<PersonHoldingBabyWithHouseIllustration
						className={cn(
							"w-96 h-96 pt-20",
							"hidden md:block",

						)}
					/>
					<div className="max-w-xl text-brand-black flex flex-col gap-4">
						<Heading size="lg">
							If You Are at Risk of Losing Your Housing
						</Heading>
						<div className="flex flex-col gap-2">
							<Text size="lg">
								You can get help to:
							</Text>
							<ul className="list-disc list-inside">
								<Text size="lg" as="li">Pay rent or utility bills in an emergency</Text>
								<Text size="lg" as="li">Work with your landlord to solve problems</Text>
								<Text size="lg" as="li">Find new housing if you need to move</Text>
							</ul>
						</div>
						<div className={cn(
							"md:border md:border-solid md:border-brand-medium-green",
							"rounded-md p-2 flex gap-2",
							"md:items-center items-start flex-wrap",
						)}
						>
							<Link
								href="tel:519-883-2280"
								className={cn(
									"text-brand-medium-green bg-brand-yellow",
									"p-1 rounded-md",
									"border border-solid border-brand-medium-green",
								)}
							>
								<Text
									as="span"
									size="lg"
									className={cn(
										"text-brand-dark-green",
									)}
								>
									📞 519-883-2280
								</Text>
							</Link>
							<Text as="span" size="lg" className="text-brand-dark-green">
								Call Region of Waterloo Housing Services.
							</Text>
						</div>

					</div>

				</Container>

				<section className="bg-brand-black text-brand-white overflow-hidden">
					<Container
						size="6xl"
						as="div"
						className={cn(
							"flex flex-col gap-8",
							"py-16",
						)}
					>

						<Heading size="lg">
							If You Need Support While Housed
						</Heading>
						<div className="flex flex-col gap-4">
							<Text size="lg">
								Some programs can help you keep your home by:
							</Text>
							<ul className="list-disc list-inside">
								<Text size="lg" as="li">Visiting you where you live</Text>
								<Text size="lg" as="li">Connecting you to health care, food, and other services</Text>
								<Text size="lg" as="li">Helping with forms, benefits, and ID</Text>
							</ul>
							<Text size="lg">
								Ask about Housing First or supportive housing programs when you call Housing Services.
							</Text>
						</div>

						<Heading size="md">
							Other Ways to Get Help
						</Heading>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							<Card className="w-fit gap-2 bg-brand-yellow">
								<CardHeader>
									<CardTitle>
										<Heading size="md" className="text-brand-dark-green">
											211 Ontario
										</Heading>

									</CardTitle>
								</CardHeader>
								<CardContent>
									Call 2-1-1 or visit
									{" "}
									<Link
										href="https://211ontario.ca"
										className="underline underline-offset-2 font-semibold text-brand-dark-green"
									>
										211ontario.ca
									</Link>
									{" "}
									to find community programs, food banks, and support services.
								</CardContent>
							</Card>
							<Card className="w-fit gap-2 bg-brand-yellow">
								<CardHeader>
									<CardTitle>
										<Heading size="md" className="text-brand-dark-green">
											Street Outreach
										</Heading>

									</CardTitle>
								</CardHeader>
								<CardContent>
									If you are living outside, outreach workers can bring supplies and connect you to services.
								</CardContent>
							</Card>
						</div>
					</Container>
				</section>
				<Container
					as="section"
					size="6xl"
					className={cn(

						"flex flex-row items-center justify-between gap-16",
						"py-16 overflow-hidden",
					)}
				>
					<div className="max-w-xl text-brand-black flex flex-col gap-4">
						<Heading size="lg">
							You Are Not Alone
						</Heading>
						<Text size="lg">
							It can be hard to ask for help, but there are people in our community who care and want to see you safe and housed. Even if you’re not sure what help you need, start by calling one of the numbers above.
						</Text>
					</div>
					<SharedGoalsIllustrations
						className={cn(
							"w-96 h-96",
							"hidden md:block",

						)}
					/>
				</Container>

			</div>
		</div>
	);
}
