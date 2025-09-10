// app/components/plan-overview.tsx
"use client";
import { useLayoutEffect, useRef, useState } from "react";
import type React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH3 } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

interface FocusArea {
	id: string;
	title: string;
	blurb: string;
	description: string;
	keyPoints: string[];
	variant?: "dark" | "orange" | "purple" | "light";
}

/* I'm leaving these in case we decide to have coloured boxes later on
without images, its still not very clear from the figma design if all of them
are going to be white and every one of them will always have an image */
const VARIANT = {
	light: {
		card: "bg-white text-neutral-900 border-white",
		title: "text-neutral-900",
		blurb: "text-neutral-600",
		expand: "text-neutral-700 hover:text-neutral-900",
	},
	orange: {
		card: "bg-pech-orange text-white border-pech-orange",
		title: "text-white",
		blurb: "text-white/90",
		expand: "text-white/90 hover:text-white",
	},
	purple: {
		card: "bg-pech-purple text-white border-pech-purple",
		title: "text-white",
		blurb: "text-pech-white",
		expand: "text-white/90 hover:text-white",
	},
	dark: {
		card: "bg-pech-grey text-white border-pech-grey",
		title: "text-white",
		blurb: "text-pech-white",
		expand: "text-white/90 hover:text-white",
	},
};

function FocusAreaCard({
    area,
    onExpand,
}: {
    area: FocusArea;
    onExpand: (area: FocusArea, cardElement: HTMLElement) => void;
}) {
	const v = VARIANT[area.variant ?? "light"];
	const [isClicked, setIsClicked] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

    const handleExpandClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        if (cardRef.current) {
            setIsClicked(true);
            setTimeout(() => setIsClicked(false), 150);
            setTimeout(() => onExpand(area, cardRef.current!), 75);
        }
    };

    return (
        <Card
            ref={cardRef}
            className={cn(
                v.card,
                // Keep subtle lift on hover but remove pointer cursor
                "rounded-lg shadow-sm transition-transform duration-[225ms] md:hover:-translate-y-0.5 md:hover:shadow-md",
                // Make card portrait: height ~1.3x width
                "aspect-[1/1.3]",
                isClicked && "scale-[0.98]",
            )}
        >
            <CardContent className="p-4 md:p-5 flex flex-col justify-between w-full h-full">
				{/* image placeholder */}
				<div className="h-14 w-14 md:h-16 md:w-16 rounded-md bg-white/10 grid place-items-center ring-1 ring-inset ring-black/5">
					<svg
						aria-hidden="true"
						viewBox="0 0 24 24"
						className="h-6 w-6 opacity-70"
					>
						<path
							fill="currentColor"
							d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14H3V5zm2 0v9l3.5-3.5 2.5 2.5L15 9l4 4V5H5z"
						/>
					</svg>
				</div>

                {/* text + expand */}
                <div className="pt-2 space-y-2">
                    <div className="flex items-start justify-between gap-2">
                        <h3
                            className={cn(
                                "font-semibold leading-tight flex-1",
                                "text-base md:text-lg",
                                v.title,
                            )}
                        >
                            {area.title}
                        </h3>
                        <button
                            type="button"
                            onClick={handleExpandClick}
                            aria-label={`Expand: ${area.title}`}
                            className={cn(
                                // pill button look to match mock
                                "inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm shadow-sm shrink-0",
                                "bg-white text-neutral-700 hover:bg-neutral-50 border-neutral-200",
                                "mt-0",
                            )}
                        >
                            <span>Expand</span>
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 24 24"
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                {/* top-right expand arrow */}
                                <path d="M14 5h5v5" />
                                <path d="M19 5l-7 7" />
                                {/* bottom-left expand arrow */}
                                <path d="M10 19H5v-5" />
                                <path d="M5 19l7-7" />
                            </svg>
                        </button>
                    </div>
                    <p className={cn("text-xs md:text-sm", v.blurb)}>{area.blurb}</p>
                </div>
            </CardContent>
        </Card>
    );
}

function FocusAreaModal({
	area,
	isOpen,
	onClose,
	originRect,
}: {
	area: FocusArea | null;
	isOpen: boolean;
	onClose: () => void;
	originRect: DOMRect | null;
}) {
	const [animationState, setAnimationState] = useState<
		"entering" | "entered" | "exiting"
	>("entering");
	const modalRef = useRef<HTMLDivElement>(null);

	useLayoutEffect(() => {
		if (isOpen) {
			setAnimationState("entering");
			const timer = window.setTimeout(() => setAnimationState("entered"), 50);
			return () => clearTimeout(timer);
		}
		setAnimationState("exiting");
		return undefined;
	}, [isOpen]);

	const handleClose = () => {
		setAnimationState("exiting");
		setTimeout(onClose, 300);
	};

	if (!isOpen || !area) {
		return null;
	}

	const v = VARIANT[area.variant ?? "light"];

	// Calculate transform origin and initial scale based on card position
	const getTransformClasses = () => {
		if (animationState === "entering") {
			return "modal-transform-enter";
		}
		if (animationState === "entered") {
			return "modal-transform-entered";
		}
		return "modal-transform-exiting";
	};

	const getInitialTransform = () => {
		if (!originRect || animationState === "entered")
			return {};

		// Get viewport dimensions
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;

		// Maintain same aspect ratio as cards (height = 1.3 * width)
		const RATIO = 1.3; // H = W * 1.3

		// Target modal size should fit viewport while keeping ratio and a max width ~2xl (672px)
		const maxViewportWidth = viewportWidth * 0.9;
		const maxViewportHeight = viewportHeight * 0.9;
		const maxWidthByHeight = maxViewportHeight / RATIO;
		const targetWidth = Math.min(672, maxViewportWidth, maxWidthByHeight);
		const targetHeight = Math.min(targetWidth * RATIO, maxViewportHeight);

		// Calculate modal's final position (center of viewport)
		const modalFinalX = viewportWidth / 2;
		const modalFinalY = viewportHeight / 2;

		// Calculate card's center position
		const cardCenterX = originRect.left + originRect.width / 2;
		const cardCenterY = originRect.top + originRect.height / 2;

		// Calculate the offset from modal center to card center
		const offsetX = cardCenterX - modalFinalX;
		const offsetY = cardCenterY - modalFinalY;

		// Calculate scale factors
		const scaleX = originRect.width / targetWidth;
		const scaleY = originRect.height / targetHeight;

		return {
			transformOrigin: "center center",
			width: targetWidth,
			height: targetHeight,
			transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) scale(${scaleX}, ${scaleY})`,
		};
	};

	// Provide width/height even after animation enters to avoid height jump
	const getFinalDimensions = () => {
		const viewportWidth = window.innerWidth;
		const viewportHeight = window.innerHeight;
		const RATIO = 1.3;
		const maxViewportWidth = viewportWidth * 0.9;
		const maxViewportHeight = viewportHeight * 0.9;
		const maxWidthByHeight = maxViewportHeight / RATIO;
		const targetWidth = Math.min(672, maxViewportWidth, maxWidthByHeight);
		const targetHeight = Math.min(targetWidth * RATIO, maxViewportHeight);
		return { width: targetWidth, height: targetHeight } as const;
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div
				className={cn(
					"absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300",
					animationState === "entered" ? "opacity-100" : "opacity-0",
				)}
				onClick={handleClose}
			/>

			{/* Modal */}
			<div
				ref={modalRef}
				className={cn(
					// Fixed dimensions based on viewport with the same ratio as card
					"absolute top-1/2 left-1/2 w-auto max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl",
					getTransformClasses(),
					v.card,
				)}
				style={{
					...(animationState === "entered" ? getFinalDimensions() : {}),
					...getInitialTransform(),
				}}
			>
				{/* Close button */}
				<button
					type="button"
					onClick={handleClose}
					className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
					aria-label="Close modal"
				>
					<svg
						className="w-6 h-6 text-white"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<div className="p-8">
					{/* Header */}
					<div className="flex items-start gap-6 mb-6">
						<div className="h-20 w-20 rounded-lg bg-white/10 grid place-items-center ring-1 ring-inset ring-black/5 flex-shrink-0">
							<svg
								aria-hidden="true"
								viewBox="0 0 24 24"
								className="h-10 w-10 opacity-70"
							>
								<path
									fill="currentColor"
									d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14H3V5zm2 0v9l3.5-3.5 2.5 2.5L15 9l4 4V5H5z"
								/>
							</svg>
						</div>
						<div>
							<h2
								className={cn("text-2xl md:text-3xl font-bold mb-3", v.title)}
							>
								{area.title}
							</h2>
							<p className={cn("text-lg", v.blurb)}>{area.description}</p>
						</div>
					</div>

					{/* Key Points */}
					<div>
						<h3 className={cn("text-xl font-semibold mb-4", v.title)}>
							Key Focus Areas:
						</h3>
						<ul className="space-y-3">
							{area.keyPoints.map(point => (
								<li key={point} className="flex items-start gap-3">
									<div
										className={cn(
											"w-2 h-2 rounded-full mt-2 flex-shrink-0",
											area.variant === "light"
												? "bg-neutral-600"
												: "bg-white/70",
										)}
									/>
									<span className={cn("text-base", v.blurb)}>{point}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

const AREAS: FocusArea[] = [
	{
		id: "policies",
		title: "Better Policies and Shared Accountability",
		blurb: "Learn how better policies and teamwork keep us on track.",
		description:
      "Developing comprehensive policies that ensure accountability and collaborative approaches to ending homelessness through coordinated systems and shared responsibility.",
		keyPoints: [
			"Establish clear performance metrics and accountability frameworks",
			"Create cross-sector partnerships between government, nonprofits, and community organizations",
			"Implement evidence-based policy recommendations from research and best practices",
			"Develop sustainable funding models that support long-term solutions",
			"Ensure policies are informed by lived experience and community input",
		],
		variant: "light",
	},
	{
		id: "voices",
		title: "Listening to Community Voices",
		blurb:
      "Discover how lived experience and community knowledge guide the plan.",
		description:
      "Centering the voices and experiences of people who have experienced homelessness in all aspects of planning, implementation, and evaluation of services and supports.",
		keyPoints: [
			"Include people with lived experience in leadership and decision-making roles",
			"Create formal advisory councils and feedback mechanisms",
			"Ensure compensation and meaningful participation in planning processes",
			"Develop culturally responsive approaches that honor diverse community voices",
			"Implement trauma-informed practices in all community engagement activities",
		],
		variant: "light",
	},
	{
		id: "systems",
		title: "Working Together Across Systems",
		blurb:
      "Explore how housing, health, and community services connect to support people.",
		description:
      "Creating seamless coordination between housing, healthcare, mental health, addiction services, and other support systems to provide comprehensive, person-centered care.",
		keyPoints: [
			"Establish coordinated entry systems that streamline access to services",
			"Integrate healthcare and housing services for better outcomes",
			"Create data sharing agreements that protect privacy while improving coordination",
			"Develop cross-training programs for service providers across different sectors",
			"Implement case management approaches that address multiple needs simultaneously",
		],
		variant: "light",
	},
	{
		id: "housing",
		title: "Fair and Inclusive Housing",
		blurb:
      "Learn how housing and supports are designed to meet different needs fairly.",
		description:
      "Ensuring equitable access to safe, affordable housing options with appropriate supports that meet diverse needs and promote long-term housing stability.",
		keyPoints: [
			"Expand affordable housing stock across all income levels and family sizes",
			"Eliminate discriminatory barriers in housing access and selection",
			"Provide flexible, person-centered support services that adapt to individual needs",
			"Create housing options that are accessible and inclusive for people with disabilities",
			"Develop rent supplements and housing allowances that make housing affordable",
		],
		variant: "light",
	},
	{
		id: "prevention",
		title: "Stopping Homelessness Before It Starts",
		blurb: "Discover how prevention programs help people keep their homes.",
		description:
      "Implementing comprehensive prevention strategies that identify and support people at risk of homelessness before they lose their housing, including eviction prevention and rapid rehousing.",
		keyPoints: [
			"Create early warning systems to identify households at risk of homelessness",
			"Provide emergency financial assistance for rent, utilities, and other housing costs",
			"Offer mediation and legal services to prevent evictions",
			"Implement rapid rehousing programs that quickly connect people to permanent housing",
			"Address root causes like job loss, health crises, and family conflicts",
		],
		variant: "light",
	},
	{
		id: "narrative",
		title: "Changing How We Talk About Homelessness",
		blurb:
      "Find out how changing the way we talk about homelessness can help end stigma.",
		description:
      "Transforming public understanding and discourse about homelessness by challenging stereotypes, promoting dignity, and building community support for evidence-based solutions.",
		keyPoints: [
			"Use person-first language that maintains dignity and respect",
			"Share stories that highlight systemic causes rather than individual blame",
			"Educate the public about the complex factors that contribute to homelessness",
			"Challenge myths and misconceptions through data and lived experience",
			"Build community empathy and support for comprehensive solutions",
		],
		variant: "light",
	},
];

export function PlanOverview() {
	const [selectedArea, setSelectedArea] = useState<FocusArea | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [originRect, setOriginRect] = useState<DOMRect | null>(null);

	const handleExpand = (area: FocusArea, cardElement: HTMLElement) => {
		const rect = cardElement.getBoundingClientRect();
		setOriginRect(rect);
		setSelectedArea(area);
		setIsModalOpen(true);
	};

	const handleClose = () => {
		setIsModalOpen(false);
		setTimeout(() => {
			setSelectedArea(null);
			setOriginRect(null);
		}, 300);
	};

	return (
		<>
			<section
				id="progress"
				aria-labelledby="progress-title"
				className="bg-pech-white text-white py-14 lg:py-16"
			>
				<div className="max-w-6xl mx-auto px-4 space-y-8">
					<div className="space-y-2">
						<TypographyH3
							className="font-semibold text-pech-deep-teal border-none p-0"
						>
							Our Focus Areas
						</TypographyH3>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-7 items-stretch">
						{AREAS.map(a => (
							<FocusAreaCard key={a.id} area={a} onExpand={handleExpand} />
						))}
					</div>
				</div>
			</section>

			<FocusAreaModal
				area={selectedArea}
				isOpen={isModalOpen}
				onClose={handleClose}
				originRect={originRect}
			/>
		</>
	);
}
