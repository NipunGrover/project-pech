"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-black">
            PECH
          </Link>

          <div className="flex items-center gap-2">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#the-plan"
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-colors rounded-md"
                  >
                    The Plan
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#data-trends"
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-colors rounded-md"
                  >
                    Data & Trends
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#community-spotlight"
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-colors rounded-md"
                  >
                    Community Spotlight
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    href="#about"
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-colors rounded-md"
                  >
                    About
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button
              variant="default"
              className="bg-gray-800 text-white hover:bg-gray-900 cursor-pointer"
            >
              Find help now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
