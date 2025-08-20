import React from "react";

/* Spec
   - 4 markers total: 2 top, 2 bottom
   - Guides at 0%, 33.333%, 66.667% aligned with the bar
   - Segments 28/12/40/20 with colors (#0B0B0B, #1F1F1F, #525252, orange gradient)
   - Bar height ~40px, rounded outer corners, bar above guides
*/

interface Mark {
  title: string;
  caption?: string;
}
interface RoadmapSegment {
  label: string;
  width: number;
  color?: string;
  gradient?: boolean;
}

const topMarks: Mark[] = [
  { title: "2022", caption: "Pellentesque pretium turpis vitae ligula." },
  { title: "2022", caption: "Pellentesque pretium turpis vitae ligula." },
];

const bottomMarks: Mark[] = [
  { title: "2022", caption: "Pellentesque pretium turpis vitae ligula." },
  { title: "2022", caption: "Pellentesque pretium turpis vitae ligula." },
];

const segments: RoadmapSegment[] = [
  { label: "Planning", width: 28, color: "#0B0B0B" },
  { label: "Build", width: 12, color: "#1F1F1F" },
  { label: "Implementation", width: 40, color: "#525252" },
  { label: "Impact", width: 20, gradient: true },
];

export default function PlanPhases() {
  return (
    <section
      id="roadmap"
      aria-labelledby="roadmap-title"
      className="bg-neutral-800 text-white py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <h3
          id="roadmap-title"
          className="text-2xl font-semibold text-white border-none p-0"
        >
          The Roadmap
        </h3>
        <RoadmapCanvas />
        <Legend />
      </div>
    </section>
  );
}

function RoadmapCanvas() {
  const ariaLabel = `Roadmap with phases ${segments.map((s) => `${s.label} ${s.width}%`).join(", ")}.`;

  return (
    <div
      role="img"
      aria-label={ariaLabel}
      className="rounded-md p-6 md:p-8 bg-neutral-900/40 ring-1 ring-inset ring-[#3F3F46]"
    >
      <div className="relative">
        {/* Guides */}
        <div className="pointer-events-none absolute inset-y-0 left-0 right-0 z-0">
          <div
            aria-hidden
            className="absolute inset-y-0 left-0 w-px bg-[rgba(82,82,82,0.6)]"
          />
          <div
            aria-hidden
            className="absolute inset-y-0 w-px bg-[rgba(82,82,82,0.6)]"
            style={{ left: "28%" }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 w-px bg-[rgba(82,82,82,0.6)]"
            style={{ left: "40%" }}
          />
          <div
            aria-hidden
            className="absolute inset-y-0 w-px bg-[rgba(82,82,82,0.6)]"
            style={{ left: "80%" }}
          />
        </div>

        {/* Top 2 markers */}
        <div className="relative z-10 mb-6 flex">
          {/* First marker at 28% */}
          <div
            className="absolute"
            style={{ left: "28%", transform: "translateX(-50%)" }}
          >
            <div className="space-y-1 text-center min-w-[120px]">
              <div className="text-sm font-semibold leading-tight">
                {topMarks[0].title}
              </div>
              {topMarks[0].caption && (
                <div className="text-xs text-neutral-300 leading-snug">
                  {topMarks[0].caption}
                </div>
              )}
            </div>
          </div>

          {/* Second marker at 80% */}
          <div
            className="absolute"
            style={{ left: "80%", transform: "translateX(-50%)" }}
          >
            <div className="space-y-1 text-center min-w-[120px]">
              <div className="text-sm font-semibold leading-tight">
                {topMarks[1].title}
              </div>
              {topMarks[1].caption && (
                <div className="text-xs text-neutral-300 leading-snug">
                  {topMarks[1].caption}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spacer for top markers */}
        <div className="h-16"></div>

        {/* Bar */}
        <div className="relative z-10 mb-6">
          <div className="flex w-full h-10 overflow-hidden rounded-md">
            {segments.map((seg, i) => {
              const radius =
                i === 0
                  ? "rounded-l-md"
                  : i === segments.length - 1
                    ? "rounded-r-md"
                    : "";
              const style: React.CSSProperties = seg.gradient
                ? {
                    width: `${seg.width}%`,
                    background:
                      "linear-gradient(90deg,#F97316 0%,#FDBA74 100%)",
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
            {segments.map((s) => (
              <li key={s.label}>{`${s.label} ${s.width}%`}</li>
            ))}
          </ul>
        </div>

        {/* Bottom 2 markers */}
        <div className="relative z-10 flex">
          {/* First marker at 28% */}
          <div
            className="absolute"
            style={{ left: "28%", transform: "translateX(-50%)" }}
          >
            <div className="space-y-1 text-center min-w-[120px]">
              <div className="text-sm font-semibold leading-tight">
                {bottomMarks[0].title}
              </div>
              {bottomMarks[0].caption && (
                <div className="text-xs text-neutral-300 leading-snug md:block hidden">
                  {bottomMarks[0].caption}
                </div>
              )}
            </div>
          </div>

          {/* Second marker at 80% */}
          <div
            className="absolute"
            style={{ left: "80%", transform: "translateX(-50%)" }}
          >
            <div className="space-y-1 text-center min-w-[120px]">
              <div className="text-sm font-semibold leading-tight">
                {bottomMarks[1].title}
              </div>
              {bottomMarks[1].caption && (
                <div className="text-xs text-neutral-300 leading-snug md:block hidden">
                  {bottomMarks[1].caption}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Spacer for bottom markers */}
        <div className="h-16"></div>
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
            className="h-3 w-3 rounded-sm"
            style={{
              background: seg.gradient
                ? "linear-gradient(90deg,#F97316 0%,#FDBA74 100%)"
                : seg.color,
            }}
          />
          <span className="text-neutral-300 text-sm">{seg.label}</span>
        </span>
      ))}
    </div>
  );
}
