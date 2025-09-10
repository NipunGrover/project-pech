import Image from "next/image";
import React from "react";
import PlanHeroSvg from "./PlanHero.svg";

export function PlanHeroIllustration() {
	return (
		<div className="w-full max-w-lg mx-auto">
			<Image
				src={PlanHeroSvg}
				alt="Plan Hero Illustration"
				className="w-full h-auto"
				width={512}
				height={394}
			/>
		</div>
	);
}
