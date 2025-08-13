import { TypographyH1, TypographyLead } from "@/components/ui/typography";

export function PlanHero() {
  return (
    <section
      id="plan"
      aria-labelledby="plan-title"
      className="bg-neutral-800 text-white py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <TypographyH1
            id="plan-title"
            className="text-3xl md:text-4xl font-semibold tracking-tight"
          >
            The Plan
          </TypographyH1>
          <TypographyLead className="text-neutral-300 max-w-prose text-sm md:text-base font-normal">
            A collaborative roadmap to end chronic homelessness in Waterloo
            Region through coordinated projects, shared data and community
            accountability.
          </TypographyLead>
        </div>
        <div className="flex md:justify-end">
          <div
            aria-hidden
            className="h-48 w-72 md:h-56 md:w-80 bg-[#F4C6C6] rounded-md shadow"
          />
        </div>
      </div>
    </section>
  );
}
