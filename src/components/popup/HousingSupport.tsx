"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import HousingHelpIllustration from "./housing-help-illustration";

export function HousingSupport() {
	const [open, setOpen] = useState(false);
	const mounted = useRef(false);

	useEffect(() => {
		mounted.current = true;
		// Check if user has visited before
		const hasVisited = localStorage.getItem("housing-popup-shown");

		if (!hasVisited) {
			// If first visit, show popup and set flag
			const timeoutId = setTimeout(() => setOpen(true), 0);
			localStorage.setItem("housing-popup-shown", "true");

			// Cleanup timeout
			return () => clearTimeout(timeoutId);
		}
	}, []);

	// Prevent hydration mismatch by not rendering until mounted
	if (!mounted.current)
		return null;

	return (
		<Dialog.Root open={open} onOpenChange={setOpen}>
			<Dialog.Portal>
				<Dialog.Overlay className="fixed inset-0 bg-black/40 z-[9998]" />
				<Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-h-[90vh]  bg-white rounded-lg p-6 md:p-12 shadow-xl z-[9999]">
					<div className="relative">
						{/* Close Button */}
						<Dialog.Close className="absolute right-3 rounded-full hover:bg-gray-100 z-10">
							<Cross2Icon className="h-8 w-8" />
						</Dialog.Close>

						<div className="grid grid-cols-1 min-[1100px]:grid-cols-2 gap-6 items-center mx-8 mb-8">
							{/* Content Side */}
							<div className="space-y-4">
								<Dialog.Title className="scroll-m-20 font-[600] tracking-tight text-[clamp(1.875rem,3vw,4rem)] leading-[clamp(2.25rem,4vw,5.625rem)]">
									Need Housing Help Now?
								</Dialog.Title>

								<p className="text-gray-600">
									If you need emergency shelter, call First Connect any time—day or night.
								</p>

								<div className="inline-flex items-center px-4 py-3 bg-pech-yellow border border-[#2F4D4C] rounded-lg">
									<span className="text-lg lg:text-xl text-[#2F4D4C] font-light">
										📞 519-624-9133
									</span>
								</div>

								<p className="text-gray-600">
									Help is available 24 hours a day, 7 days a week.
								</p>

								<p className="text-gray-600">
									For more housing and community supports, visit our Get Help Now page.
								</p>

								<button className="bg-brand-dark-green text-white px-6 py-3 rounded-md hover:bg-[#263f3e] transition-colors flex items-center gap-2" type="submit">
									Find help now
									<span className="text-lg">→</span>
								</button>
							</div>
							<div className="hidden min-[1100px]:flex justify-center">
								<HousingHelpIllustration />
							</div>
						</div>
					</div>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
};
