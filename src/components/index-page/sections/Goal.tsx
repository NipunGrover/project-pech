import { Button } from "@/components/ui/button";
import { BuildingIllustration } from "@/components/BuildingIllustration";
import { TypographyH2, TypographyLarge, TypographyLead } from "@/components/ui/typography";

export function Goal() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <TypographyLarge className="text-gray-600">Our goal</TypographyLarge>
            <TypographyH2 className="text-4xl lg:text-5xl text-gray-900 leading-tight border-0 pb-0">
              Help us reach functional zero by 2030
            </TypographyH2>
            <TypographyLead className="text-gray-600 max-w-md">
              Together with our community partners, we have a plan to end chronic 
              homelessness in the Region of Waterloo.
            </TypographyLead>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">
              Learn about The Plan →
            </Button>
          </div>
          
          <div className="relative h-[300px] lg:h-[400px]">
            <BuildingIllustration variant="goal" />
          </div>
        </div>
      </div>
    </section>
  );
}