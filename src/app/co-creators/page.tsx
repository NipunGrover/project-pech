import Image from "next/image";
import CoCreatorsList from "@/components/co-creators/CoCreatorsList";
import CoordinatingTeam from "@/components/co-creators/CoordinatingTeam";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "../../components/external-link";
import { Container } from "../../components/ui/container";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";
import { HeaderCopyIllustration } from "./header-copy-illustration";

export default function CoCreators() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-brand-black text-white py-20">
				<Container size="6xl" className="overflow-hidden">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="flex flex-col gap-4">
							<Heading size="2xl" className="font-semibold">
								Meet the Co-Creators
							</Heading>
							<Text size="xl">
								The Plan to End Chronic Homelessness was made in community, by community, and for our community. Our Co-Creators include people with lived experience of homelessness, service providers, advocates, and local leaders. Each person brought their ideas, skills, and stories to help shape a plan that works for everyone in Waterloo Region.
							</Text>
						</div>
						<div>
							<HeaderCopyIllustration className="md:h-60 md:w-72 lg:h-96 lg:w-150 hidden lg:block aspect-[4/3] rounded-lg" />
						</div>
					</div>
				</Container>
			</section>

			<CoordinatingTeam />

			<CoCreatorsList />

			<Container size="6xl">
				<section className="py-20">
					<div className="flex flex-row flex-wrap md:flex-nowrap items-center">
						<div className="flex flex-col gap-6">

							<Heading size="lg" className="text-brand-dark-green">About PECH</Heading>

							<div className="flex flex-row gap-4 flex-wrap items-center">
								<Text
									size="xl"
									className="font-semibold text-brand-grey max-w-3xl"
								>
									Homelessness in Waterloo Region is higher than ever before. It is a complex problem with many causes, so there is no single solution.
								</Text>
								<Text
									size="xl"
									className="font-semibold break-words text-brand-grey max-w-3xl"
								>
									To respond, the community worked with the
									{" "}
									<ExternalLink
										href="https://www.waterlooregion.org/lived-expertise"
										className="text-brand-medium-green wrap-break-word"
									>
										Social Development Centre of Waterloo Region
									</ExternalLink>
									{" "}
									and Region of Waterloo staff in order to co-create The Plan to End Chronic Homelessness. This plan is a roadmap with clear strategies, resources, and timelines to end chronic homelessness in our region.
								</Text>
								<Text
									size="xl"
									className="font-semibold text-brand-grey max-w-3xl"
								>
									The voices of people with lived experience are central to this work. The Plan is created with the community, by the community, and for the community.
								</Text>

							</div>

							<div>
								<Button>Read the full report</Button>
							</div>
						</div>
						<div className="flex-shrink-0 w-64 h-64">
							<Image
								alt="Logo of the PECH organization"
								src="/logomark.png"
								width={256}
								height={256}
								className="w-full h-full object-contain"
								priority
							/>
						</div>
					</div>

				</section>
			</Container>
			{/* This is not yet implemented but keeping it in case we add it later */}
			{/* Get Involved Section */}
			{/* <section className="bg-gray-50 py-20">
				<Container size="6xl">
					<TypographyH2 className="text-3xl font-bold text-center mb-4 text-teal-600">
						Get involved
					</TypographyH2>
					<p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
						Join us for town halls or stay in our newsletter loop to learn about developments.
					</p>

					<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
						<Card>
							<CardHeader>
								<CardTitle>Our next town hall</CardTitle>
							</CardHeader>
							<CardContent>
								<div className="flex items-center gap-2 mb-4">
									<div className="w-3 h-3 bg-green-500 rounded-full"></div>
									<span className="text-sm font-medium">Wednesday, March 26</span>
								</div>
								<p className="text-gray-600 text-sm mb-4">
									Join us for regular town halls to stay up to date with
									progress and help inform the direction of our work.
								</p>
								<Button className="w-full">
									Join town hall
								</Button>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<CardTitle>Sign up for our newsletter</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-gray-600 text-sm mb-4">
									Get updates on progress and opportunities to get involved.
								</p>
								<div className="space-y-3">
									<Input
										type="email"
										placeholder="Email address"
										className="w-full"
									/>
									<Button className="w-full bg-gray-800 hover:bg-gray-900">
										Subscribe
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</Container>
			</section>  */}
		</div>
	);
}
