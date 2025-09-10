import type { VariantProps } from "class-variance-authority";
import type { PolymorphicComponentPropWithRef } from "@/components/polymorphic";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

export const HeadingVariants = cva("m-0 font-semibold", {
	variants: {
		size: {
			"xs": "text-2xl leading-8 tracking-normal", // 24px / 32px
			"sm": "text-[1.875rem] leading-[2.375rem] tracking-normal", // 30px / 38px
			"md": "text-4xl leading-11 tracking-[-0.02em]", // 36px / 44px
			"lg": "text-5xl leading-[3.75rem] tracking-[-0.02em]", // 48px / 60px
			"xl": "text-[3.75rem] leading-[4.5rem] tracking-[-0.02em]", // 60px / 72px
			"2xl": "text-[3rem] md:text-[4.5rem] md:leading-[5.375rem] md:tracking-[-0.02em]", // 72px / 90px
		},
		highContrast: {
			true: "",
			false: "",
		},
	},
	defaultVariants: {
		highContrast: false,
	},
});

type BaseHeadingProps = VariantProps<typeof HeadingVariants>;

type HeadingProps<C extends React.ElementType = "h2">
	= | ({ asChild?: false } & PolymorphicComponentPropWithRef<C, BaseHeadingProps>)
		| ({ asChild: true; children: React.ReactNode } & BaseHeadingProps);

type HeadingComponent = (<C extends React.ElementType = "h2">(
	props: HeadingProps<C>
) => React.ReactNode) & { displayName?: string };

const Heading: HeadingComponent = <C extends React.ElementType = "h2">(
	{ ...props },
) => {
	const { asChild, size, color, highContrast, ...others } = props;

	const className = cn(
		HeadingVariants({ size, highContrast }),
		(others as unknown as { className: string }).className,
	);

	if (asChild) {
		return <Slot {...others} className={className} />;
	}

	const { as = "h2", ...rest } = others as { as: C } & Record<string, unknown>;

	const Component = as;

	return <Component {...rest} className={className} />;
};

Heading.displayName = "Heading";

export { Heading };
