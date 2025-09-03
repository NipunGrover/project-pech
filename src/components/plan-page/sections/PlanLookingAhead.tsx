import { TypographyH3, TypographyMuted } from "@/components/ui/typography";

interface Action {
  id: string;
  label: string;
  bgClass: string;
}

const ACTIONS: Action[] = [
  {
    id: "unused-land",
    label: "More housing on unused land",
    bgClass: "bg-[#71C6AC] text-white",
  },
  {
    id: "indigenous",
    label: "Indigenous-focused housing strategies",
    bgClass: "bg-pech-deep-teal text-white",
  },
  {
    id: "youth",
    label: "Youth Strategy",
    bgClass: "bg-[#1BA3A3] text-white",
  },
  {
    id: "veterans",
    label: "Housing plan for veterans",
    bgClass: "bg-pech-grey text-white",
  },
];

export default function PlanLookingAhead() {
  return (
    <section
      id="looking-ahead"
      aria-labelledby="looking-ahead-title"
      className="bg-pech-white py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <div className="space-y-1">
          <TypographyH3
            id="looking-ahead-title"
            className="font-semibold text-pech-deep-teal border-none p-0"
          >
            Looking Ahead
          </TypographyH3>
          <TypographyMuted className="text-neutral-500">
            Our future Priority Actions
          </TypographyMuted>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ACTIONS.map((a) => (
            <div
              key={a.id}
              className={`rounded-lg px-4 py-5 sm:py-6 font-medium leading-snug shadow-sm ${a.bgClass}`}
              role="group"
              aria-roledescription="action"
            >
              {a.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
