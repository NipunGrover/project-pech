import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import { TypographySmall } from "@/components/ui/typography";

export function Footer() {
	return (
		<footer className="bg-zinc-900 py-16 border-t border-zinc-800">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<Link
						href="#updates"
						className="text-gray-400 hover:text-white transition-colors"
					>
						See all updates →
					</Link>

					<div className="flex items-center gap-6">
						<Link href="#" className="text-gray-400 hover:text-white transition-colors">
							<Facebook className="h-5 w-5" />
							<span className="sr-only">Facebook</span>
						</Link>
						<Link href="#" className="text-gray-400 hover:text-white transition-colors">
							<Twitter className="h-5 w-5" />
							<span className="sr-only">Twitter</span>
						</Link>
						<Link href="#" className="text-gray-400 hover:text-white transition-colors">
							<Instagram className="h-5 w-5" />
							<span className="sr-only">Instagram</span>
						</Link>
					</div>
				</div>

				<div className="mt-8 pt-8 border-t border-zinc-800 text-center">
					<TypographySmall className="text-gray-500">

						{" "}
						{new Date().getFullYear()}
						{" "}
						PECH - The Plan to End Chronic Homelessness. All rights reserved.
					</TypographySmall>
				</div>
			</div>
		</footer>
	);
}
