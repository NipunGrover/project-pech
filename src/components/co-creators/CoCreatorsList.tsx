import { Card, CardContent } from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";

interface CoCreator {
	id: string;
	name: string;
	description: string;
	photo?: string;
}

async function getCoCreators(): Promise<CoCreator[]> {
	// TODO: Replace with actual Directus API call
	// For now, return placeholder data
	return [
		{
			id: "1",
			name: "Name",
			description: "Description and view about creative creation involved in this journey, or in our historic respect.",
		},
		{
			id: "2",
			name: "Name",
			description: "Description and view about creative creation involved in this journey, or in our historic respect.",
		},
		{
			id: "3",
			name: "Name",
			description: "Description and view about creative creation involved in this journey, or in our historic respect.",
		},
		{
			id: "4",
			name: "Name",
			description: "Description and view about creative creation involved in this journey, or in our historic respect.",
		},
		{
			id: "5",
			name: "Name",
			description: "Description and view about creative creation involved in this journey, or in our historic respect.",
		},
		{
			id: "6",
			name: "Name",
			description: "Description and view about creative creation involved in this journey, or in our historic respect.",
		},
	];
}

export default async function CoCreatorsList() {
	const coCreators = await getCoCreators();

	return (
		<section className="bg-gray-900 text-white py-20">
			<div className="max-w-7xl mx-auto px-4">
				<TypographyH2 className="text-3xl font-bold mb-4 text-white">
					Co-creators
				</TypographyH2>
				<p className="text-gray-300 max-w-2xl mb-16">
					Looking for folks between all every level, local, regional, provincial, and
					national across every single voice.
				</p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{coCreators.map(creator => (
						<Card key={creator.id} className="bg-white text-black">
							<CardContent className="p-6">
								<div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
								<h3 className="text-lg font-semibold mb-2">{creator.name}</h3>
								<p className="text-sm text-gray-600 mb-3">{creator.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
