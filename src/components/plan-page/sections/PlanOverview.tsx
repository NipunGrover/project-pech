import { Card, CardContent } from "@/components/ui/card";
import { TypographyH2, TypographyMuted } from "@/components/ui/typography";

export function PlanOverview() {
  return (
    <section
      id="progress"
      aria-labelledby="progress-title"
      className="bg-neutral-800 text-white py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <TypographyH2
            id="progress-title"
            className="text-lg font-semibold text-white border-none p-0"
          >
            Progress at a glance
          </TypographyH2>
          <TypographyMuted className="text-neutral-300 text-sm max-w-prose">
            A snapshot of current momentum and foundational work underway.
          </TypographyMuted>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="bg-white text-neutral-900 border-neutral-200 rounded-md shadow-sm">
            <CardContent className="p-5 space-y-2">
              <h3 className="text-base font-semibold">Coordinated Access</h3>
              <p className="text-sm text-neutral-600">
                Data integration pilot launched with 5 service partners sharing
                by-name lists securely.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-amber-600 text-white border-amber-600 rounded-md shadow-sm">
            <CardContent className="p-5 space-y-2">
              <h3 className="text-base font-semibold">New Supportive Units</h3>
              <p className="text-sm text-white/90">
                42 new supportive housing units in pre-development for 2025
                occupancy.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-violet-300 text-neutral-900 border-violet-300 rounded-md shadow-sm">
            <CardContent className="p-5 space-y-2">
              <h3 className="text-base font-semibold">Sustained Housing</h3>
              <p className="text-sm text-neutral-800">
                78% 12‑month housing retention among long‑term supported
                placements.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
