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
		<Link {...rest} className={cn("inline leading-[inherit] whitespace-normal break-words", rest.className)}>
			<span className="break-words">{children}</span>
			<ExternalLinkIcon className="h-[1em] w-[1em] inline-block ml-1 align-middle -translate-y-[0.15em]" />
		</Link>
	);
}
