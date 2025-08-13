import { Card, CardContent } from "@/components/ui/card";

export function PlanFAQ() {
  return (
    <section
      id="stories"
      aria-labelledby="stories-title"
      className="bg-neutral-100 text-neutral-900 py-14 lg:py-16"
    >
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="space-y-2">
          <h2
            id="stories-title"
            className="text-lg font-semibold tracking-tight"
          >
            Community stories
          </h2>
          <p className="text-sm text-neutral-600 max-w-prose">
            Snapshots of lived experience and program impact.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <Card
              key={i}
              className="bg-white border-neutral-200 rounded-md shadow-sm"
            >
              <CardContent className="p-5 space-y-4">
                <blockquote className="text-sm text-neutral-700 leading-relaxed italic">
                  “This is a placeholder quote about how having stable housing
                  changed everything for me.”
                </blockquote>
                <div className="flex items-end justify-between">
                  <p className="text-xs text-neutral-500">
                    A. — program participant
                  </p>
                  <button className="text-xs font-medium text-neutral-700 hover:text-neutral-900 underline underline-offset-2">
                    Read the update →
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
