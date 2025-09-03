import { cn } from "@/lib/utils";
import React from "react";

// Base prop sets for different element kinds
type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  className?: string;
};
type ParagraphProps = React.HTMLAttributes<HTMLParagraphElement> & {
  className?: string;
};
type DivProps = React.HTMLAttributes<HTMLDivElement> & { className?: string };
type SmallProps = React.HTMLAttributes<HTMLElement> & { className?: string };
type BlockquoteProps = React.HTMLAttributes<HTMLElement> & {
  className?: string;
};

export function TypographyH1({ className, ...props }: HeadingProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight break-words [text-wrap:balance]",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH2({ className, ...props }: HeadingProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH3({ className, ...props }: HeadingProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function TypographyH4({ className, ...props }: HeadingProps) {
  return (
    <h4
      className={cn(
        "scroll-m-20 text-xl font-semibold tracking-tight",
        className
      )}
      {...props}
    />
  );
}

export function TypographyP({ className, ...props }: ParagraphProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  );
}

export function TypographyLead({ className, ...props }: ParagraphProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...props} />
  );
}

export function TypographyLarge({ className, ...props }: DivProps) {
  return <div className={cn("text-lg font-semibold", className)} {...props} />;
}

export function TypographySmall({ className, ...props }: SmallProps) {
  return (
    <small
      className={cn("text-sm font-medium leading-none", className)}
      {...props}
    />
  );
}

export function TypographyMuted({ className, ...props }: ParagraphProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...props} />
  );
}

export function TypographyBlockquote({ className, ...props }: BlockquoteProps) {
  return (
    <blockquote
      className={cn("mt-6 border-l-2 pl-6 italic", className)}
      {...props}
    />
  );
}
