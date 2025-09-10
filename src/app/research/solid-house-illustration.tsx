export interface SolidHouseIllustrationProps extends React.ComponentPropsWithRef<"svg"> {}

export function SolidHouseIllustration(props: SolidHouseIllustrationProps) {
	return (
		<svg
			width="173"
			height="145"
			viewBox="0 0 173 145"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<rect x="10.6914" y="32.6338" width="158.809" height="111.661" fill="#5A5A5A" />
			<path d="M51.8508 2.78381L8.5 32.6337L166.214 31.655L136.488 2.78381H51.8508Z" fill="#1E968C" stroke="#1E968C" strokeWidth="5" />
			<path d="M10.6914 34.5166L53.6849 6.10059L95.0247 34.5166V144.295H10.6914V34.5166Z" fill="#979798" />
			<rect width="20.8095" height="18.7944" transform="matrix(1 0 0 -1 29.3086 80.1725)" fill="white" />
			<rect width="20.8095" height="18.7944" transform="matrix(1 0 0 -1 29.3086 117.761)" fill="white" />
			<rect width="19.7143" height="18.7944" transform="matrix(1 0 0 -1 55.5977 80.1725)" fill="white" />
			<rect width="19.7143" height="18.7944" transform="matrix(1 0 0 -1 55.5977 117.761)" fill="white" />
		</svg>
	);
}
