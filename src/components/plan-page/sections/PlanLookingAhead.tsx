import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";

interface Action {
	id: string;
	label: string;
	bgClass: string;
}

const ACTIONS: Action[] = [
	{
		id: "unused-land",
		label: "More housing on unused land",
		bgClass: "bg-brand-light-green text-white",
	},
	{
		id: "indigenous",
		label: "Indigenous-focused housing strategies",
		bgClass: "bg-brand-dark-green text-white",
	},
	{
		id: "youth",
		label: "Youth Strategy",
		bgClass: "bg-brand-medium-green text-white",
	},
	{
		id: "veterans",
		label: "Housing plan for veterans",
		bgClass: "bg-brand-grey text-white",
	},
];

export default function PlanLookingAhead() {
	return (
		<section
			id="looking-ahead"
			aria-labelledby="looking-ahead-title"
			className="bg-pech-white py-14 lg:py-16"
		>
			<div className="max-w-6xl mx-auto px-4 space-y-6">
				<div className="space-y-1">
					<Heading size="md" className="text-pech-deep-teal">
						Looking Ahead
					</Heading>
					<Text size="sm" className="text-neutral-500">
						Our future Priority Actions
					</Text>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					{ACTIONS.map(a => (
						<div
							key={a.id}
							className={`rounded-lg px-4 py-5 sm:py-6 font-medium leading-snug shadow-sm ${a.bgClass}`}
							role="group"
							aria-roledescription="action"
						>
							<Heading size="xs" className="font-bold">
								{a.label}
							</Heading>

						</div>
					))}
				</div>
			</div>
		</section>
	);
}
