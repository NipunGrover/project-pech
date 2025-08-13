import { PlanHero } from "@/components/plan-page/sections/PlanHero";
import { PlanOverview } from "@/components/plan-page/sections/PlanOverview";
import { PlanGetInvolved } from "@/components/plan-page/sections/PlanGetInvolved";
import { PlanFAQ } from "@/components/plan-page/sections/PlanFAQ";
import { PlanPhases } from "@/components/plan-page/sections/PlanPhases";

export default function PlanPage() {
  return (
    <>
      <PlanHero />
      <PlanOverview />
      <PlanGetInvolved />
      <PlanFAQ />
      <PlanPhases />
    </>
  );
}
