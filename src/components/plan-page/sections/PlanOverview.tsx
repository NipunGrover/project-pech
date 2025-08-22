// app/components/plan-overview.tsx
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { TypographyH3, TypographyMuted } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type FocusArea = {
  id: string;
  title: string;
  blurb: string;
  variant?: "dark" | "orange" | "purple" | "light";
  href?: string;
};

/*I'm leaving these in case we decide to have coloured boxes later on
without images, its still not very clear from the figma design if all of them
are going to be white and every one of them will always have an image*/
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

function FocusAreaCard({ area }: { area: FocusArea }) {
  const v = VARIANT[area.variant ?? "light"];
  return (
    <Card
      className={cn(
        v.card,
        "rounded-md shadow-sm transition-transform duration-300 ease-in-out hover:scale-[1.02] aspect-auto flex h-full"
      )}
    >
      <CardContent className="p-4 md:p-5 flex flex-col justify-between w-full">
        {/* top row */}
        <div className="flex items-start justify-between">
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

          {/* expand */}
          {area.href ? (
            <Link
              href={area.href}
              className={cn(
                v.expand,
                "inline-flex items-center gap-1 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 rounded px-2 py-1"
              )}
              aria-label={`Expand ${area.title}`}
            >
              Expand
              <svg
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M5 15 15 5v7h-2V8.41L6.41 15H13v2H5v-2z"
                />
              </svg>
            </Link>
          ) : (
            <button
              type="button"
              className={cn(
                v.expand,
                "inline-flex items-center gap-1 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40 rounded px-2 py-1"
              )}
              aria-label={`Expand ${area.title}`}
            >
              Expand
              <svg
                viewBox="0 0 20 20"
                className="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M5 15 15 5v7h-2V8.41L6.41 15H13v2H5v-2z"
                />
              </svg>
            </button>
          )}
        </div>

        {/* text */}
        <div className="space-y-2 pt-2">
          <h3
            className={cn(
              "font-semibold leading-tight",
              "text-base md:text-lg",
              v.title
            )}
          >
            {area.title}
          </h3>
          <p className={cn("text-xs md:text-sm", v.blurb)}>{area.blurb}</p>
        </div>
      </CardContent>
    </Card>
  );
}

const AREAS: FocusArea[] = [
  {
    id: "policies",
    title: "Better Policies and Shared Accountability",
    blurb: "Learn how better policies and teamwork keep us on track.",
    variant: "light",
    href: "/focus/policies",
  },
  {
    id: "voices",
    title: "Listening to Community Voices",
    blurb:
      "Discover how lived experience and community knowledge guide the plan.",
    variant: "orange",
    href: "/focus/voices",
  },
  {
    id: "systems",
    title: "Working Together Across Systems",
    blurb:
      "Explore how housing, health, and community services connect to support people.",
    variant: "purple",
    href: "/focus/systems",
  },
  {
    id: "housing",
    title: "Fair and Inclusive Housing",
    blurb:
      "Learn how housing and supports are designed to meet different needs fairly.",
    variant: "light",
    href: "/focus/housing",
  },
  {
    id: "prevention",
    title: "Stopping Homelessness Before It Starts",
    blurb: "Discover how prevention programs help people keep their homes.",
    variant: "light",
    href: "/focus/prevention",
  },
  {
    id: "narrative",
    title: "Changing How We Talk About Homelessness",
    blurb:
      "Find out how changing the way we talk about homelessness can help end stigma.",
    variant: "light",
    href: "/focus/narrative",
  },
];

export function PlanOverview() {
  return (
    <section
      id="progress"
      aria-labelledby="progress-title"
      className="bg-pech-white text-white py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <TypographyH3
            id="progress-title"
            className="font-semibold text-pech-deep-teal border-none p-0"
          >
            Our Focus Areas
          </TypographyH3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 max-w-xs md:max-w-4xl mx-auto items-stretch">
          {AREAS.map((a) => (
            <FocusAreaCard key={a.id} area={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
