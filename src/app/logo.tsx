import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const Logo = (props: SvgProps) => (
	<Svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 72 22"
		{...props}
	>
		<Path
			fill="#EEFC79"
			d="M9.3 15.8H3.76V5.32H1.1V18h8.2v-2.2Zm6.26 2.4c2.85 0 4.67-1.82 4.67-4.92 0-3.06-1.85-4.9-4.67-4.9s-4.67 1.85-4.67 4.9c0 3.1 1.82 4.92 4.67 4.92Zm0-1.96c-1.27 0-2.07-1.06-2.07-2.95 0-1.87.82-2.95 2.07-2.95s2.05 1.08 2.05 2.95c0 1.89-.8 2.95-2.05 2.95Zm15.41-7.66h-2.56v5.4c0 1.24-.71 2.06-1.86 2.06-1.13 0-1.76-.67-1.76-1.92V8.58h-2.56v6.07c0 2.2 1.35 3.53 3.4 3.53a2.8 2.8 0 0 0 2.81-1.88h.05V18h2.48V8.58Z"
		/>
		<Path
			fill="#fff"
			d="M38.3 18c2.68 0 4.3-1.32 4.3-3.48 0-1.76-1.23-2.94-2.99-3.16v-.06a2.87 2.87 0 0 0 2.32-2.85c0-1.88-1.47-3.13-3.65-3.13H33.7V18h4.6ZM34.91 6.38h3.11c1.69 0 2.7.82 2.7 2.2 0 1.5-1.13 2.37-3.05 2.37h-2.76V6.38Zm0 10.56v-4.95h3.07c2.19 0 3.38.89 3.38 2.47 0 1.57-1.15 2.48-3.22 2.48H34.9Zm12.88.2c-1.23 0-2.09-.68-2.09-1.67 0-1.01.8-1.64 2.24-1.73l2.71-.19v1.01c0 1.45-1.26 2.59-2.86 2.59Zm-.23 1a3.4 3.4 0 0 0 3.12-1.88h.02V18h1.11v-6.26c0-1.86-1.3-3.03-3.4-3.03-2.07 0-3.42 1.16-3.55 2.8h1.12c.2-1.11 1.07-1.77 2.41-1.77 1.43 0 2.26.79 2.26 2.1v.8l-2.85.17c-2.1.15-3.28 1.1-3.28 2.66 0 1.6 1.24 2.68 3.04 2.68Zm6.92-.14h1.16v-5.41c0-1.7 1.07-2.84 2.65-2.84 1.53 0 2.4.91 2.4 2.51V18h1.17v-5.92c0-2.08-1.23-3.37-3.24-3.37-1.47 0-2.55.73-3.01 1.84h-.03v-1.7h-1.1V18Zm11.3-4.82V5.32h-1.16V18h1.16v-3.54l1.02-.94L70.46 18h1.36l-4.18-5.2 4.1-3.94H70.3l-4.52 4.32Z"
		/>
		<Path stroke="#EEFC79" d="M44.5 3C48.67 1.5 59.4-.6 69 3" />
	</Svg>
);
