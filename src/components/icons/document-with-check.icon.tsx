export interface DocumentWithCheckIconProps extends React.ComponentPropsWithRef<"svg"> {

}

export function DocumentWithCheckIcon(props: DocumentWithCheckIconProps) {
	return (
		<svg
			width="25"
			height="24"
			viewBox="0 0 25 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M20.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H20.5C21.6 21 22.5 20.1 22.5 19V5C22.5 3.9 21.6 3 20.5 3ZM10.5 17H5.5V15H10.5V17ZM10.5 13H5.5V11H10.5V13ZM10.5 9H5.5V7H10.5V9ZM15.32 15L12.5 12.16L13.91 10.75L15.32 12.17L18.49 9L19.91 10.42L15.32 15Z"
				fill="#1E968C"
			/>
		</svg>
	);
}
