import { cva } from "class-variance-authority";
import React from "react";

export interface HumanIllustrationProps extends React.ComponentProps<"svg"> {
	variant: "brand-dark-green" | "brand-dark-green-lighter" | "brand-grey";
}

const humanIllustrationPathVariants = cva("", {
	variants: {
		variant: {
			"brand-dark-green": "fill-brand-dark-green",
			"brand-dark-green-lighter": "fill-brand-dark-green-lighter",
			"brand-grey": "fill-brand-grey",
		},
	},
});

export function HumanIllustration({ ...props }: HumanIllustrationProps) {
	return (
		<svg
			width="51"
			height="112"
			viewBox="0 0 51 112"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M25.7648 18.9149C31.298 18.9149 35.7835 14.7291 35.7835 9.56555C35.7835 4.40204 31.298 0.216187 25.7648 0.216187C20.2316 0.216187 15.7461 4.40204 15.7461 9.56555C15.7461 14.7291 20.2316 18.9149 25.7648 18.9149Z"
				className={humanIllustrationPathVariants({ variant: props.variant })}
			/>
			<path
				d="M29.0131 23.3711C26.5168 22.8981 23.8026 22.9189 21.3507 23.4582C4.69435 25.2796 -0.714019 43.2709 0.813127 56.989C1.47556 62.9197 11.4943 62.982 10.8252 56.989C10.2694 51.9897 10.5073 44.445 13.3548 39.0827C13.3548 45.6005 13.3548 52.1183 13.3548 58.634C13.3548 58.8643 13.3793 59.08 13.3904 59.302C13.3837 59.4078 13.3571 59.497 13.3571 59.6048C13.3571 75.1193 13.3282 90.6276 12.6413 106.13C12.3368 113.021 23.787 112.994 24.0893 106.13C24.6273 93.9799 24.7629 81.8238 24.794 69.6657C25.3364 69.6989 25.8788 69.6989 26.4212 69.6699C26.4545 81.828 26.5857 93.984 27.1192 106.13C27.4237 112.994 38.874 113.021 38.5672 106.13C37.8803 90.6276 37.8559 75.1193 37.8559 59.6048C37.8559 59.1236 37.787 58.6859 37.6825 58.2648C37.6669 51.5291 37.3913 44.7873 37.4758 38.0559C40.8857 43.4431 41.1969 51.6598 40.6056 56.9848C39.9343 62.9737 49.9552 62.9135 50.6177 56.9848C52.1804 42.9826 46.5119 24.5245 29.0131 23.3711Z"
				className={humanIllustrationPathVariants({ variant: props.variant })}
			/>
		</svg>
	);
}
