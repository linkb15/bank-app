import { Text, TouchableOpacity } from "react-native";
import { tv } from "tailwind-variants";

const button = tv({
	base: "bg-blue-500 rounded-full active:opacity-80",
	variants: {
		color: {
			primary: "bg-blue-500",
			secondary: "bg-purple-500",
		},
		size: {
			sm: "",
			md: "",
			lg: "px-4 py-3",
		},
	},
	compoundVariants: [
		{
			size: ["sm", "md"],
			class: "px-3 py-1",
		},
	],
	defaultVariants: {
		size: "md",
		color: "primary",
	},
});

const text = tv({
	base: "font-medium text-white",
	variants: {
		color: {
			primary: "text-white",
			secondary: "text-white",
		},
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-lg",
		},
	},
	defaultVariants: {
		size: "md",
		color: "primary",
	},
});

export const Button = () => {
	console.log(button({ size: "sm", color: "secondary" }));
	console.log(text({ size: "sm", color: "secondary" }));
	return (
		<TouchableOpacity
			onPress={() => {}}
			className={button({ size: "sm", color: "secondary" })}
		>
			<Text className={text({ size: "sm", color: "secondary" })}>Click me</Text>
		</TouchableOpacity>
	);
};
