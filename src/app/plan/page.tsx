import { PlanHero } from "@/components/plan-page/sections/PlanHero";
import { PlanOverview } from "@/components/plan-page/sections/PlanOverview";
import { PlanGetInvolved } from "@/components/plan-page/sections/PlanGetInvolved";
import { PlanFAQ } from "@/components/plan-page/sections/PlanFAQ";
import PlanPhases from "@/components/plan-page/sections/PlanPhases";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Plan",
  description:
    "The Plan to End Chronic Homelessness is Waterloo Region's roadmap to make sure everyone has a safe, stable home. It was created with input from people with lived experience, service providers, community groups, and local government.",
};

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
