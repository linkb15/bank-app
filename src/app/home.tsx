import { Link } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
	return (
		<View className="flex-1 items-center justify-center bg-red-500">
			<Text>HomeScreen</Text>

			<Link href={"/"}>Root</Link>
		</View>
	);
}
