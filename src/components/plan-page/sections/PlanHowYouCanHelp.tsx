"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Heading } from "@/components/ui/heading";

export default function PlanHowYouCanHelp() {
	return (
		<section
			id="how-you-can-help"
			aria-labelledby="how-you-can-help-title"
			className="bg-neutral-800 text-white py-14 lg:py-16"
		>
			<div className="max-w-6xl mx-auto px-4 space-y-6">
				<Heading size="md" className="text-white">
					How you can help
				</Heading>

				<ul className="list-disc pl-5 space-y-2 text-neutral-200">
					<li>Learn and share. Tell friends and neighbours about the Plan.</li>
					<li>
						Add your voice. Write to your councillor, MPP or MP about affordable
						housing.
					</li>
					<li>Join in. Come to town halls and community meetings.</li>
				</ul>

				<Card className="bg-white text-neutral-900 border-white/80 shadow-md md:grid md:grid-cols-2 md:items-center">
					<CardHeader className="md:border-0">
						<CardTitle className="text-lg">Get Updates</CardTitle>
						<CardDescription>
							Sign up to learn about what we are doing, and get the latest news
							and updates about the Plan to End Chronic Homelessness.
						</CardDescription>
					</CardHeader>
					<CardContent className="md:justify-self-end md:w-full">
						<form
							className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-3"
							action="#"
							onSubmit={e => e.preventDefault()}
						>
							<Input
								type="email"
								name="email"
								aria-label="Email address"
								placeholder="Enter your email"
								required
								className="bg-white text-neutral-900"
							/>
							<Button
								type="button"
								aria-label="Sign up (coming soon)"
								title="Coming soon"
								disabled
								className="bg-pech-deep-teal hover:bg-pech-deep-teal/90 text-white disabled:opacity-70 disabled:cursor-not-allowed"
							>
								Sign up
							</Button>
						</form>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
