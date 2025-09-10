import type { VariantProps } from "class-variance-authority";
import type { PolymorphicComponentPropWithRef } from "../polymorphic.js";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "@/lib/utils";

export const ContainerVariants = cva("px-4 mx-auto", {
	variants: {
		size: {
			"xs": "max-w-xs",
			"sm": "max-w-sm",
			"md": "max-w-md",
			"lg": "max-w-lg",
			"xl": "max-w-xl",
			"2xl": "max-w-2xl px-6",
			"3xl": "max-w-3xl px-8",
			"4xl": "max-w-4xl px-8",
			"5xl": "max-w-5xl px-8",
			"6xl": "max-w-6xl px-8",
			"7xl": "max-w-7xl px-8",
		},
	},
	defaultVariants: {
		size: "md",
	},
});

interface BaseContainerProps extends VariantProps<typeof ContainerVariants> {
	children: React.ReactNode;
}

export type ContainerProps<C extends React.ElementType = "div">
= | ({ asChild?: false } & PolymorphicComponentPropWithRef<C, BaseContainerProps>)
	| ({ asChild: true; children: React.ReactNode } & BaseContainerProps);

type ContainerComponent = (<C extends React.ElementType = "div">(
	props: ContainerProps<C>
) => React.ReactNode) & { displayName?: string };

const Container: ContainerComponent = function Container<C extends React.ElementType = "div">(props: ContainerProps<C>) {
	const { asChild, size, ...others } = props;

	const className = cn(
		ContainerVariants({ size }),
		(others as unknown as { className: string }).className,
	);

	if (asChild) {
		return <Slot {...others} className={className} />;
	}

	const { as = "div", ...rest } = others as { as: C } & Record<string, unknown>;

	const Component = as;

	return <Component {...rest} className={className} />;
};

Container.displayName = "Container";

export { Container };
