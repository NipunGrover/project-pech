import React from "react";

/* Spec
   - 3 equal segments (~33.33% each)
   - Two guides exactly at 33.333% and 66.667% (no end markers)
   - Left: dark, Middle: grey, Right: teal gradient (#095A5A → #71C6AC)
   - Bar height ~40px, rounded outer corners
*/

type MarkerSide = "top" | "bottom";
type MarkerAlign = "center" | "left";
interface Mark {
	title: string;
	caption?: string;
	position: number; // % along the bar (0–100)
	side: MarkerSide; // which side shows the short line
	align?: MarkerAlign; // text alignment/anchor
}
interface RoadmapSegment {
	label: string;
	width: number;
	color?: string;
	gradient?: boolean;
}

// Three markers alternating bottom → top → bottom
const markers: Mark[] = [
	{
		title: "Using data to guide decisions.",
		caption: "Tracking what works and sharing it widely.",
		position: 0, // start of the bar
		side: "bottom",
		align: "left",
	},
	{
		title: "Advocating for policy change.",
		caption: "Asking for stronger housing policies and more funding.",
		position: 33.333, // first internal boundary
		side: "top",
		align: "left",
	},
	{
		title: "Supporting innovation.",
		caption:
      "Backing new ideas and pilot projects that help people get and keep housing.",
		position: 66.667, // second internal boundary
		side: "bottom",
		align: "left",
	},
];

const segments: RoadmapSegment[] = [
	{ label: "Planning", width: 33.333, color: "#0B0B0B" },
	{ label: "Implementation", width: 33.333, color: "#525252" },
	{ label: "Impact", width: 33.334, gradient: true },
];

export default function PlanPhases() {
	return (
		<section
			id="roadmap"
			aria-labelledby="roadmap-title"
			className="bg-neutral-800 text-white py-14 lg:py-16"
		>
			<div className="max-w-6xl mx-auto px-4 space-y-8">
				{/* Intro copy matching the provided mock */}
				<div className="space-y-2">
					<h2 className="text-3xl font-semibold tracking-tight text-white">
						Pushing for Big Change Together
					</h2>
					<p className="text-neutral-300 max-w-3xl text-sm md:text-base">
						Lasting change takes teamwork at every level: local, regional, provincial, and national.
						By joining forces, we can make a bigger impact.
					</p>
				</div>
				<h3 id="roadmap-title" className="text-2xl font-semibold text-white p-0">
					What we’re doing in 2025
				</h3>
				<RoadmapCanvas />
				<Legend />
			</div>
		</section>
	);
}

function RoadmapCanvas() {
	const ariaLabel = `Roadmap with phases ${segments.map(s => `${s.label} ${s.width}%`).join(", ")}.`;

	return (
		<div
			role="img"
			aria-label={ariaLabel}
			className="p-6 md:p-8"
		>
			<div className="relative">
				{/* Top zone: line at the bottom, text above it */}
				<div className="relative mb-0 h-16">
					{markers.filter(m => m.side === "top").map((m, idx) => (
						<div
							key={`t-line-${idx}`}
							className="absolute bottom-0 h-6 w-px bg-[rgba(82,82,82,0.6)]"
							style={{ left: `${m.position}%` }}
							aria-hidden
						/>
					))}
					{markers.filter(m => m.side === "top").map((m, idx) => (
						<div
							key={`t-text-${idx}`}
							className="absolute"
							style={{
								left: `${m.position}%`,
								transform: m.align === "left" ? "translateX(0)" : "translateX(-50%)",
								bottom: "1.75rem", // sits above the line
								marginLeft: m.align === "left" ? "0.5rem" : undefined,
							}}
						>
							<div className={`space-y-1 ${m.align === "left" ? "text-left" : "text-center"} min-w-[140px] max-w-[260px]`}>
								<div className="text-sm font-semibold leading-tight">{m.title}</div>
								{m.caption && (
									<div className="text-xs text-neutral-300 leading-snug">{m.caption}</div>
								)}
							</div>
						</div>
					))}
				</div>

				{/* Bar */}
				<div className="relative z-10 mb-0">
					<div className="flex w-full h-10 overflow-hidden rounded-md">
						{segments.map((seg, i) => {
							const radius
                = i === 0
                	? "rounded-l-md"
                	: i === segments.length - 1
                		? "rounded-r-md"
                		: "";
							const style: React.CSSProperties = seg.gradient
								? {
									width: `${seg.width}%`,
									// Darker on the left (#095A5A) to lighter on the right (#71C6AC)
									background:
                      "linear-gradient(90deg,#095A5A 0%,#71C6AC 100%)",
								}
								: { width: `${seg.width}%`, background: seg.color };
							return (
								<div
									key={seg.label}
									className={`h-full ${radius}`}
									style={style}
								/>
							);
						})}
					</div>
					<ul className="sr-only">
						{segments.map(s => (
							<li key={s.label}>{`${s.label} ${s.width}%`}</li>
						))}
					</ul>
				</div>

				{/* Bottom zone: line at the top, text below it */}
				<div className="relative mt-0 h-16">
					{markers.filter(m => m.side === "bottom").map((m, idx) => (
						<div
							key={`b-line-${idx}`}
							className="absolute top-0 h-6 w-px bg-[rgba(82,82,82,0.6)]"
							style={{ left: `${m.position}%` }}
							aria-hidden
						/>
					))}
					{markers.filter(m => m.side === "bottom").map((m, idx) => (
						<div
							key={`b-text-${idx}`}
							className="absolute"
							style={{
								left: `${m.position}%`,
								transform: m.align === "left" ? "translateX(0)" : "translateX(-50%)",
								top: "1.75rem", // sits below the line
								marginLeft: m.align === "left" ? "0.5rem" : undefined,
							}}
						>
							<div className={`space-y-1 ${m.align === "left" ? "text-left" : "text-center"} min-w-[140px] max-w-[260px]`}>
								<div className="text-sm font-semibold leading-tight">{m.title}</div>
								{m.caption && (
									<div className="text-xs text-neutral-300 leading-snug md:block hidden">{m.caption}</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

function Legend() {
	return (
		<div className="flex flex-wrap gap-4 text-xs">
			{segments.map(seg => (
				<span key={seg.label} className="inline-flex items-center gap-2">
					<span
						aria-hidden
						className="h-3 w-3 rounded-sm"
						style={{
							background: seg.gradient
								? "linear-gradient(90deg,#095A5A 0%,#71C6AC 100%)"
								: seg.color,
						}}
					/>
					<span className="text-neutral-300 text-sm">{seg.label}</span>
				</span>
			))}
		</div>
	);
}
