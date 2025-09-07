import type { LinkProps } from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { cn } from "../lib/utils";

export type ExternalLinkProps = React.ComponentPropsWithRef<"a"> & LinkProps & {
	children: React.ReactNode;
};

export function ExternalLink({ children, ...rest }: ExternalLinkProps) {
	return (
		<Link {...rest} className={cn("inline-flex items-center gap-1", rest.className)}>
			{children}
			<ExternalLinkIcon className="h-4 w-4" />
		</Link>
	);
}
