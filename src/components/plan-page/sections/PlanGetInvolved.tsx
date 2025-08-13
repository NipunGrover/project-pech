import { TypographyH2 } from "@/components/ui/typography";

interface Project {
  name: string;
  status: "Planned" | "Active" | "Complete";
  summary: string;
}

const projects: Project[] = [
  {
    name: "Coordinated Access Platform",
    status: "Active",
    summary:
      "Building a unified intake and data environment connecting outreach, shelter, and housing programs.",
  },
  {
    name: "Supportive Housing Build #1",
    status: "Planned",
    summary:
      "42 unit modular supportive development with on‑site wraparound services targeting 2025 opening.",
  },
  {
    name: "Retention & Aftercare Model",
    status: "Complete",
    summary:
      "Standardized follow‑up protocols and peer supports raising 12‑month housing stability to 78%.",
  },
];

export function PlanGetInvolved() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-title"
      className="bg-neutral-100 text-neutral-900 py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <TypographyH2
            id="projects-title"
            className="text-lg font-semibold tracking-tight border-none p-0"
          >
            Projects at a glance
          </TypographyH2>
          <p className="text-sm text-neutral-600 max-w-prose">
            Key initiatives driving systems change and housing outcomes.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div
              key={p.name}
              className="bg-white border border-neutral-200 rounded-md shadow-sm p-5 flex flex-col gap-3"
            >
              <div className="flex items-start justify-between gap-3">
                <h4 className="text-base font-semibold leading-tight">
                  {p.name}
                </h4>
                <StatusPill status={p.status} />
              </div>
              <p className="text-sm text-neutral-600 flex-1 leading-relaxed">
                {p.summary}
              </p>
              <button className="text-sm font-medium text-neutral-700 hover:text-neutral-900 underline underline-offset-2 self-start">
                View details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatusPill({ status }: { status: Project["status"] }) {
  const styles: Record<Project["status"], string> = {
    Planned: "bg-blue-100 text-blue-700",
    Active: "bg-amber-100 text-amber-800",
    Complete: "bg-emerald-100 text-emerald-700",
  };
  return (
    <span
      className={`text-xs px-2 py-1 rounded-md font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}
