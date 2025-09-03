"use client";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { BuildingIllustration } from "@/components/BuildingIllustration";
import {
  TypographyH1,
  TypographyLead,
  TypographySmall,
} from "@/components/ui/typography";

export function Hero() {
  return (
    <section className="relative bg-zinc-900 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <TypographyH1 className="text-3xl sm:text-4xl lg:text-6xl text-white leading-tight break-words">
              The Plan
              <br />
              to End Chronic
              <br />
              Homelessness
            </TypographyH1>
            <TypographyLead className="text-gray-400 max-w-md">
              A collaborative roadmap for strategies, resources and timelines to
              end chronic homelessness in Waterloo Region
            </TypographyLead>

            <Card className="bg-zinc-800 border-zinc-700 max-w-sm">
              <CardHeader>
                <CardTitle className="text-white text-lg">
                  Our next town hall meeting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Badge className="bg-purple-500 hover:bg-purple-600 text-white">
                    DATE: July 10
                  </Badge>
                  <Badge className="bg-pink-500 hover:bg-pink-600 text-white">
                    TIME: 7PM
                  </Badge>
                </div>

                <div className="flex items-center gap-2 text-gray-300">
                  <MapPin className="h-4 w-4" />
                  <TypographySmall>
                    Waterloo City Hall
                    <br />
                    100 Regina St. S, Waterloo
                  </TypographySmall>
                </div>

                <div className="space-y-2">
                  <TypographySmall className="text-gray-400">
                    Sign up for our newsletter:
                  </TypographySmall>
                  <Input
                    type="email"
                    placeholder="Enter your email to get meeting details and zoom link"
                    className="bg-zinc-700 border-zinc-600 text-white placeholder:text-gray-500"
                  />
                  <Button className="w-full bg-zinc-600 hover:bg-zinc-700 text-white cursor-pointer">
                    Sign up
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <BuildingIllustration variant="hero" className="opacity-80" />
          </div>
        </div>
      </div>
    </section>
  );
}
