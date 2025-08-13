import { TypographyH3, TypographySmall } from "@/components/ui/typography";
import React from "react";

/* Roadmap refactor per roadmap-fix.md
   - Guides at 0%,33%,66%
   - Segments widths 28,12,40,20 via inline style (spec requirement)
   - Segment colors #0B0B0B, #1F1F1F, #525252, gradient #F97316->#FDBA74
   - Bar ~40px height (h-10) with rounded outer corners
   - Bar sits above guides (z-index stacking)
*/

interface RoadmapYear {
  year: string;
  topCaption?: string;
  bottomCaption?: string;
}
interface RoadmapSegment {
  label: string;
  width: number;
  color?: string;
  gradient?: boolean;
}

const years: RoadmapYear[] = [
  { year: "2024", topCaption: "Pilot + Baseline", bottomCaption: "Data setup" },
  { year: "2025", topCaption: "Scale Systems", bottomCaption: "Builds open" },
  {
    year: "2026",
    topCaption: "Outcome Gains",
    bottomCaption: "Retention focus",
  },
];

const segments: RoadmapSegment[] = [
  { label: "Planning", width: 28, color: "#0B0B0B" },
  { label: "Build", width: 12, color: "#1F1F1F" },
  { label: "Implementation", width: 40, color: "#525252" },
  { label: "Impact", width: 20, gradient: true },
];

export function PlanPhases() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="bg-neutral-800 text-white py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <TypographyH3
          id="roadmap-title"
          className="text-lg font-semibold text-white border-none p-0"
        >
          The Roadmap
        </TypographyH3>
        <RoadmapCanvas />
        <Legend />
      </div>
    </section>
  );
}

function RoadmapCanvas() {
  const ariaLabel = `Roadmap progress for 2024–2026 with phases: ${segments
    .map((s) => `${s.label} ${s.width}%`)
    .join(", ")}.`;
  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="relative rounded-md p-6 md:p-8 bg-neutral-900/40 ring-1 ring-inset ring-[#3F3F46]"
    >
      {/* Guides (0%,33%,66%) using grid overlay to avoid inline styles */}
      <div className="pointer-events-none absolute inset-0 z-0 grid grid-cols-3">
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-px bg-[rgba(82,82,82,0.6)]"
          />
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-px bg-[rgba(82,82,82,0.6)]"
          />
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-px bg-[rgba(82,82,82,0.6)]"
          />
        </div>
      </div>

      {/* Top markers */}
      <div className="relative z-10 grid grid-cols-3 gap-4 mb-6 text-center">
        {years.map((y) => (
          <div key={y.year} className="space-y-1">
            <div className="text-sm font-semibold text-white leading-tight">
              {y.year}
            </div>
            {y.topCaption && (
              <div className="text-xs text-neutral-300 leading-snug line-clamp-2">
                {y.topCaption}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Stacked bar */}
      <div className="relative z-10 mb-6">
        <div className="flex w-full h-10 overflow-hidden">
          {segments.map((seg, i) => {
            const isFirst = i === 0;
            const isLast = i === segments.length - 1;
            const radius = isFirst
              ? "rounded-l-md"
              : isLast
              ? "rounded-r-md"
              : "";
            const style: React.CSSProperties = seg.gradient
              ? {
                  width: `${seg.width}%`,
                  background: "linear-gradient(90deg,#F97316 0%,#FDBA74 100%)",
                }
              : { width: `${seg.width}%`, background: seg.color };
            return (
              /* Inline style required by spec (roadmap-fix.md) for explicit widths */
              <div
                key={seg.label}
                className={`h-full ${radius}`}
                style={style}
              />
            );
          })}
        </div>
        <ul className="sr-only">
          {segments.map((s) => (
            <li key={s.label}>{`${s.label} ${s.width}%`}</li>
          ))}
        </ul>
      </div>

      {/* Bottom markers */}
      <div className="relative z-10 grid grid-cols-3 gap-4 text-center">
        {years.map((y) => (
          <div key={y.year} className="space-y-1">
            <div className="text-sm font-semibold text-white leading-tight">
              {y.year}
            </div>
            {y.bottomCaption && (
              <div className="text-xs text-neutral-300 leading-snug md:block hidden line-clamp-2">
                {y.bottomCaption}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend() {
  return (
    <div className="flex flex-wrap gap-4 text-xs">
      {segments.map((seg) => (
        <span key={seg.label} className="inline-flex items-center gap-2">
          <span
            aria-hidden
            className={
              seg.gradient
                ? "h-3 w-3 rounded-sm bg-[linear-gradient(90deg,#F97316_0%,#FDBA74_100%)]"
                : `h-3 w-3 rounded-sm bg-[${seg.color}]`
            }
          />
          <TypographySmall className="text-neutral-300">
            {seg.label}
          </TypographySmall>
        </span>
      ))}
    </div>
  );
}
