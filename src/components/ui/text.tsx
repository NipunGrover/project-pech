import type { VariantProps } from "class-variance-authority";
import type { PolymorphicComponentPropWithRef } from "@/lib/polymorphic";

import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

export const TextVariants = cva("", {
	variants: {
		size: {
			xs: "text-[0.75rem] leading-[1.125rem]",
			sm: "text-[0.875rem] leading-[1.25rem]",
			md: "text-[1rem] leading-[1.5rem]",
			lg: "text-[1.125rem] leading-[1.75rem]",
			xl: "text-[1.25rem] leading-[1.875rem]",
		},
		weight: {
			normal: "font-normal",
			medium: "font-medium",
			semibold: "font-semibold",
			bold: "font-bold",
		},
	},
	defaultVariants: {
		size: "md",
		weight: "normal",
	},
});

type BaseTextProps = VariantProps<typeof TextVariants>;

type TextProps<C extends React.ElementType = "p">
	= PolymorphicComponentPropWithRef<C, BaseTextProps>;

type TextComponent = (<C extends React.ElementType = "p">(
	props: TextProps<C>
) => React.ReactNode) & { displayName?: string };

const Text: TextComponent = <C extends React.ElementType = "p">({
	size,
	weight,
	className,
	as,
	...props
}: TextProps<C>) => {
	const Component = as || ("p" as C);

	return (
		<Component
			className={cn(TextVariants({ size, weight }), className)}
			{...props}
		/>
	);
};

Text.displayName = "Text";

export { Text, type TextProps };
