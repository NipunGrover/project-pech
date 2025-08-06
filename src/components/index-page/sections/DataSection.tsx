import { Home, TrendingUp } from "lucide-react";
import {
  TypographyH2,
  TypographyH3,
  TypographyLarge,
  TypographyMuted,
  TypographyBlockquote,
} from "@/components/ui/typography";

export function DataSection() {
  return (
    <section id="data-trends" className="bg-zinc-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <TypographyH2 className="text-3xl lg:text-4xl text-white mb-12 text-center border-0 pb-0">
          What&apos;s the data behind chronic homelessness?
        </TypographyH2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <BuildingIllustration variant="data" className="w-24 h-24" />
                </div>
              </div>
              <TypographyMuted className="text-gray-400 mb-2">
                Average housing income
              </TypographyMuted>
              <TypographyLarge className="text-3xl text-white">
                $108,500
              </TypographyLarge>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <Home className="w-16 h-16 text-purple-500" />
              </div>
              <TypographyMuted className="text-gray-400 mb-2">
                Average house price
              </TypographyMuted>
              <TypographyLarge className="text-3xl text-white">
                $619,323
              </TypographyLarge>
            </CardContent>
          </Card>

          <Card className="bg-zinc-800 border-zinc-700">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="w-16 h-16 text-pink-500" />
              </div>
              <TypographyMuted className="text-gray-400 mb-2">
                Household income required
              </TypographyMuted>
              <TypographyLarge className="text-3xl text-white">
                $140,919
              </TypographyLarge>
            </CardContent>
          </Card>
        </div>

        <div className="bg-zinc-800 rounded-lg p-8 mb-8">
          <div className="flex items-start gap-4">
            <span className="text-6xl text-gray-600">&quot;</span>
            <div className="space-y-4">
              <TypographyBlockquote className="text-xl text-gray-300 border-0">
                Some guy beat me up on the street. Yeah, I was in the hospital
                because of it... I died a few times... Meantime my landlord, he
                got rid of everything in my apartment and I lost my rent-geared
                to income housing and I ended up discharged from the hospital
                and driven to the shelter.
              </TypographyBlockquote>
              <TypographyMuted className="text-gray-500">
                — Project Willow Interview Participant
              </TypographyMuted>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <TypographyH3 className="text-2xl text-white">
              There&apos;s a real life story behind the numbers
            </TypographyH3>
          </div>
          <Button
            variant="link"
            className="text-purple-400 hover:text-purple-300 cursor-pointer"
          >
            View Data & Trends →
          </Button>
        </div>
      </div>
    </section>
  );
}
