"use client";

import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

export default function PlanHowYouCanHelp() {
	return (
		<section
			id="how-you-can-help"
			aria-labelledby="how-you-can-help-title"
			className="bg-brand-black text-brand-white py-8"
		>
			<div className="max-w-6xl mx-auto px-4 space-y-6">
				<Heading size="md" className="text-white" id="how-you-can-help-title">
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

		</section>
	);
}
