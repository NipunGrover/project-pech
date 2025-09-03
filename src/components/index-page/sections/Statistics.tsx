import { Typography2XL, TypographyLarge, TypographyLead } from "@/components/ui/typography";

export function Statistics() {
	return (
		<section className="bg-gray-100 py-20">
			<div className="max-w-7xl mx-auto px-4 text-center">
				<TypographyLarge className="text-gray-600 mb-4">In Waterloo Region</TypographyLarge>
				<Typography2XL className="text-5xl lg:text-6xl text-gray-900 mb-6">
					257 people are experiencing chronic homelessness
				</Typography2XL>
				<TypographyLead className="text-gray-600 italic max-w-3xl mx-auto">
					Chronic homelessness is defined as being homeless for over 6 months.
				</TypographyLead>
			</div>
		</section>
	);
}
