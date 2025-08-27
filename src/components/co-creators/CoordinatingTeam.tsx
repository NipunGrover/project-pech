import { Card, CardContent } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";

interface TeamMember {
	id: string;
	name: string;
	role: string;
	description: string;
	photo?: string;
}

async function getCoordinatingTeam(): Promise<TeamMember[]> {
	// TODO: Replace with actual Directus API call
	// For now, return placeholder data
	return [
		{
			id: "1",
			name: "Name",
			role: "Role",
			description: "Description of their role, expertise, and how they contribute to the coordination team. Describes their background and experience in this work of ending chronic homelessness in the region.",
		},
		{
			id: "2",
			name: "Name",
			role: "Role",
			description: "Description of their role, expertise, and how they contribute to the coordination team. Describes their background and experience in this work of ending chronic homelessness in the region.",
		},
		{
			id: "3",
			name: "Name",
			role: "Role",
			description: "Description of their role, expertise, and how they contribute to the coordination team. Describes their background and experience in this work of ending chronic homelessness in the region.",
		},
		{
			id: "4",
			name: "Name",
			role: "Role",
			description: "Description of their role, expertise, and how they contribute to the coordination team. Describes their background and experience in this work of ending chronic homelessness in the region.",
		},
	];
}

export default async function CoordinatingTeam() {
	const teamMembers = await getCoordinatingTeam();

	return (
		<section className="bg-white py-20">
			<div className="max-w-7xl mx-auto px-4">
				<TypographyH2 className="text-3xl font-bold text-center mb-4 text-teal-600">
					Coordinating team
				</TypographyH2>
				<p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
					Our coordination team brings together program leads who have experience
					across sectors. Together, they guide this work in coordination
					with community voices.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map(member => (
						<Card key={member.id} className="text-center">
							<CardContent className="pt-6">
								<div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4"></div>
								<h3 className="text-lg font-semibold mb-2">{member.name}</h3>
								<p className="text-sm text-gray-600 mb-3">{member.role}</p>
								<p className="text-sm text-gray-600">{member.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
