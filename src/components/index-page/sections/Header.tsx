"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const navigationItems = [
		{ href: "#the-plan", label: "The Plan" },
		{ href: "#data-trends", label: "Data & Trends" },
		{ href: "#community-spotlight", label: "Community Spotlight" },
		{ href: "#about", label: "About" },
	];

	return (
		<header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90 border-b border-gray-200">
			<div className="max-w-7xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<Link href="/" className="text-2xl font-bold text-black">
						PECH
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center gap-2">
						<NavigationMenu>
							<NavigationMenuList>
								{navigationItems.map(item => (
									<NavigationMenuItem key={item.href}>
										<NavigationMenuLink
											href={item.href}
											className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-2 text-sm font-medium transition-colors rounded-md"
										>
											{item.label}
										</NavigationMenuLink>
									</NavigationMenuItem>
								))}
							</NavigationMenuList>
						</NavigationMenu>

						<Button
							variant="default"
							className="bg-gray-800 text-white hover:bg-gray-900 cursor-pointer"
						>
							Find help now
						</Button>
					</div>

					{/* Mobile Hamburger Button */}
					<button
						type="button"
						className="lg:hidden flex flex-col items-center justify-center w-6 h-6"
						onClick={toggleMobileMenu}
						aria-label="Toggle mobile menu"
					>
						<span
							className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
								isMobileMenuOpen ? "rotate-45" : ""
							}`}
						/>
						<span
							className={`block w-6 h-0.5 bg-gray-800 transition-transform duration-300 ${
								isMobileMenuOpen
									? "-rotate-45 -translate-y-0.5"
									: "translate-y-1"
							}`}
						/>
					</button>
				</div>

				{/* Mobile Navigation Menu */}
				<div
					className={`lg:hidden transition-all duration-300 ease-in-out ${
						isMobileMenuOpen
							? "max-h-96 opacity-100"
							: "max-h-0 opacity-0 overflow-hidden"
					}`}
				>
					<nav className="py-4 space-y-2">
						{navigationItems.map(item => (
							<Link
								key={item.href}
								href={item.href}
								className="block text-gray-700 hover:text-gray-900 hover:bg-gray-100 px-4 py-3 text-sm font-medium transition-colors rounded-md"
								onClick={closeMobileMenu}
							>
								{item.label}
							</Link>
						))}
						<div className="px-4 pt-2">
							<Button
								variant="default"
								className="w-full bg-gray-800 text-white hover:bg-gray-900 cursor-pointer"
								onClick={closeMobileMenu}
							>
								Find help now
							</Button>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
}
