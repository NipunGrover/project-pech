import CoCreatorsList from "@/components/co-creators/CoCreatorsList";
import CoordinatingTeam from "@/components/co-creators/CoordinatingTeam";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Typography2XL, TypographyH2, TypographyLead } from "@/components/ui/typography";
import { Heading } from "../../components/ui/heading";
import { Text } from "../../components/ui/text";

export default function CoCreators() {
	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<section className="bg-gray-900 text-white py-20">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center">
						<div className="flex flex-col gap-4">
							<Heading size="2xl" className="font-bold leading-[4.5rem]">
								Meet the co-creators
							</Heading>
							<Text size="xl">
								This plan was built by our community, for our community. Our co-creators include people with lived experience of homelessness, service providers, advocates, and local leaders. Each person brought their ideas, skills, and stories to help shape a plan that works for everyone in Waterloo Region.
							</Text>
						</div>
						<div className="bg-teal-600 h-64 aspect-[4/3] rounded-lg">
							{/* Placeholder for teal accent area */}
						</div>
					</div>
				</div>
			</section>

			<CoordinatingTeam />

			<CoCreatorsList />

			{/* Get Involved Section */}
			<section className="bg-gray-50 py-20">
				<div className="max-w-7xl mx-auto px-4">
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
				</div>
			</section>
		</div>
	);
}
