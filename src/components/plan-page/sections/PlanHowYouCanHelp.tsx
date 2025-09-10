"use client";

import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { TypographyH3 } from "@/components/ui/typography";

export default function PlanHowYouCanHelp() {
	return (
		<section
			id="how-you-can-help"
			aria-labelledby="how-you-can-help-title"
			className="bg-brand-black text-brand-white py-8"
		>
			<Container size="6xl" className="py-20 flex flex-col gap-8">
<div className="flex flex-col gap-8">
				<Heading
					as="h3" size="lg"
				>
					How you can help
				</Heading>

				<ul className="list-disc pl-5 space-y-2 text-neutral-200">
					<Text size="xl" className="font-semibold" as="li">Learn and share. Tell friends and neighbours about the Plan.</Text>
					<Text size="xl" className="font-semibold" as="li">
						Add your voice. Write to your councillor, MPP or MP about affordable
						housing.
					</Text>
					<Text size="xl" className="font-semibold" as="li">Join in. Come to town halls and community meetings.</Text>
				</ul>

			
			</div>
			</Container>
			
		</section>
	);
}
