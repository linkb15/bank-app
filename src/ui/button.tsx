import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { VariantProps, tv } from "tailwind-variants";

import { cn } from "@/util/cn";

const button = tv({
	slots: {
		container: "bg-blue-500 rounded-full active:opacity-80",
		text: "text-white",
	},
	variants: {
		color: {
			primary: { container: "bg-blue-500", text: "text-white" },
			secondary: { container: "bg-purple-500", text: "text-white" },
		},
		size: {
			sm: { text: "text-sm" },
			md: { text: "text-base" },
			lg: { container: "px-4 py-3", text: "text-lg" },
		},
	},
	compoundVariants: [
		{
			size: ["sm", "md"],
			class: { container: "px-3 py-1" },
		},
	],
	defaultVariants: {
		size: "md",
		color: "primary",
	},
});

export interface ButtonProps
	extends TouchableOpacityProps,
		VariantProps<typeof button> {}

export const Button = ({
	className,
	color,
	size,
	children,
	style,
	...props
}: ButtonProps) => {
	const { container, text } = button();

	const Comp = TouchableOpacity;

	return (
		<Comp
			{...props}
			className={cn(container({ size: size, color: color }), className)}
		>
			<Text className={text({ size: size, color: color })}>{children}</Text>
		</Comp>
	);
};
