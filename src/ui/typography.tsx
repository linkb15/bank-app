import { cn } from "@/util/cn";
import React from "react";
import { Text, TextProps } from "react-native";
import { tv } from "tailwind-variants";

export const typographyVariants = tv({
	base: "",
	variants: {
		variant: {
			h1: "font-[SF-Pro-Display-Bold] text-[25px]/[32px]",
			h2: "font-[SF-Pro-Rounded-Semibold] text-[21px]/[24px] tracking-[0.168px]",
			h3: "",
		},
	},
	compoundVariants: [
		{
			variant: "h2",
			disabled: true,
			className: "bg-green-100 text-green-700 dark:text-green-800", // You can also use "className"
		},
	],
	defaultVariants: {
		variant: "h1",
	},
});

export const H1 = React.forwardRef<Text, TextProps>(
	({ className, children, ...props }, ref) => {
		console.log(props);
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "h1" }), className)}
				{...props}
			>
				{children}
			</Text>
		);
	},
);

H1.displayName = "H1";

export const H2 = React.forwardRef<Text, TextProps>(
	({ className, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "h2" }), className)}
				{...props}
			/>
		);
	},
);

H2.displayName = "H2";
