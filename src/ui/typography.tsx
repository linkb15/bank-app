import { cn } from "@/util/cn";
import React from "react";
import { Text, TextProps } from "react-native";
import { tv } from "tailwind-variants";

export const typographyVariants = tv({
	base: "",
	variants: {
		variant: {
			h1: "font-[SF-Pro-Display-Bold] text-[25px]/[32px]",
			h2: "font-[SF-Pro-Display] text-[21px]/[24px] tracking-[0.168px]",

			b1: "font-[SF-Pro-Display-Bold] text-[17px]/[24px]",
			b2: "font-[SF-Pro-Display-Medium] text-[16px]/[20px]",
			b3: "font-[SF-Pro-Display] text-[16px]/[20px] tracking-[0.128px]",
			b4: "font-[SF-Pro-Display-SemiBold] text-[15px]/[18px]",
			b5: "font-[SF-Pro-Display] text-[15px]/[18px]",

			c1: "font-[SF-Pro-Display] text-[14px]/[18px] tracking-[0.112px]",
			c2: "font-[SF-Pro-Display] text-[12px]/[16px]",
			c3: "font-[SF-Pro-Display-Medium] text-[11px]/[12px] tracking-[0.088px]",
			c4: "font-[SF-Pro-Rounded-Medium] text-[10px]/[14px] tracking-[0.3px]",
		},
		weight: { 600: "", 400: "" },
	},
	compoundVariants: [
		{
			variant: "h2",
			weight: 600,
			class: "font-[SF-Pro-Rounded-Semibold]",
		},
	],
	defaultVariants: {
		variant: "h1",
	},
});

export const H1 = React.forwardRef<Text, TextProps>(
	({ className, children, ...props }, ref) => {
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

export const H2 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "h2", weight }), className)}
				{...props}
			/>
		);
	},
);

H2.displayName = "H2";

export const B1 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "b1", weight }), className)}
				{...props}
			/>
		);
	},
);

B1.displayName = "B1";

export const B2 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "b2", weight }), className)}
				{...props}
			/>
		);
	},
);

B2.displayName = "B2";

export const B3 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "b3", weight }), className)}
				{...props}
			/>
		);
	},
);

B3.displayName = "B3";

export const B4 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "b4", weight }), className)}
				{...props}
			/>
		);
	},
);

B4.displayName = "B4";

export const B5 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "b5", weight }), className)}
				{...props}
			/>
		);
	},
);

B5.displayName = "B5";

export const C1 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "c1", weight }), className)}
				{...props}
			/>
		);
	},
);

C1.displayName = "C1";

export const C2 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "c2", weight }), className)}
				{...props}
			/>
		);
	},
);

C2.displayName = "C2";

export const C3 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "c3", weight }), className)}
				{...props}
			/>
		);
	},
);

C3.displayName = "C3";

export const C4 = React.forwardRef<Text, TextProps & { weight?: 600 }>(
	({ className, weight, ...props }, ref) => {
		return (
			<Text
				ref={ref}
				className={cn(typographyVariants({ variant: "c4", weight }), className)}
				{...props}
			/>
		);
	},
);

C4.displayName = "C4";
