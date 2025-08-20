import Link from "next/link";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { href: "/plan", label: "The Plan" },
  { href: "#data-trends", label: "Data & Trends" },
  { href: "#community-spotlight", label: "Community Spotlight" },
  { href: "#about", label: "About" },
];

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

export function Navigation({ isMobile = false, onLinkClick }: NavigationProps) {
  return (
    <>
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={
            isMobile
              ? "block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-3 text-sm font-medium transition-colors rounded-md"
              : "text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-colors rounded-md"
          }
          onClick={onLinkClick}
        >
          {item.label}
        </Link>
      ))}
      <div className={isMobile ? "px-4 pt-2" : ""}>
        <Button
          variant="default"
          className={`bg-gray-800 text-white hover:bg-gray-900 cursor-pointer ${
            isMobile ? "w-full" : ""
          }`}
          onClick={onLinkClick}
        >
          Find help now
        </Button>
      </div>
    </>
  );
}
