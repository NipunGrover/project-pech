import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export default function CoCreators() {
	return (
		<div className="min-h-screen bg-white">
			<section className="pt-16 pb-20">
				<div className="max-w-7xl mx-auto px-4">
					<div className="text-center space-y-8">
						<TypographyH1 className="text-4xl lg:text-5xl text-black">
							Co-creators
						</TypographyH1>
						<TypographyLead className="text-gray-600 max-w-2xl mx-auto">
							Join our collaborative community working together to end chronic
							homelessness in Waterloo Region. Your voice and expertise matter.
						</TypographyLead>
					</div>

					<div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						<div className="p-6 border border-gray-200 rounded-lg bg-white">
							<h3 className="text-xl font-semibold text-black mb-4">
								Community Input
							</h3>
							<p className="text-gray-600">
								Share your insights and experiences to help shape our strategies
								and initiatives.
							</p>
						</div>

						<div className="p-6 border border-gray-200 rounded-lg bg-white">
							<h3 className="text-xl font-semibold text-black mb-4">
								Data Collaboration
							</h3>
							<p className="text-gray-600">
								Work with us to collect, analyze, and visualize data that drives
								meaningful change.
							</p>
						</div>

						<div className="p-6 border border-gray-200 rounded-lg bg-white">
							<h3 className="text-xl font-semibold text-black mb-4">
								Solution Building
							</h3>
							<p className="text-gray-600">
								Collaborate on developing innovative solutions and
								implementation strategies.
							</p>
						</div>
					</div>

					<div className="mt-16 text-center">
						<p className="text-gray-600">
							More collaboration features coming soon. Stay tuned for updates
							on how you can get involved.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
