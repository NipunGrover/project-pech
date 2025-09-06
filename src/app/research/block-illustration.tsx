export interface BlockIllustrationProps extends React.ComponentPropsWithRef<"svg"> {}

export function BlockIllustration(props: BlockIllustrationProps) {
	return (
		<svg
			width="205"
			height="158"
			viewBox="0 0 205 158"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path d="M202.418 51.6094L153.186 37.9276L1.50611 99.3344L50.8512 120.237L202.418 51.6094Z" fill="#71C6AC" />
			<path d="M202.978 88.4425L202.413 51.2441L50.7681 114.792L51.418 157.566L202.978 88.4425Z" fill="#1E968C" />
			<path d="M2.15043 141.828L1.50439 99.3066L50.7609 114.611L51.4155 157.698L2.15043 141.828Z" fill="#095A5A" />
		</svg>
	);
}
