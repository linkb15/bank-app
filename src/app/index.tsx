import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "@/ui/button";
import { Link } from "expo-router";
import { H1, H2 } from "@/ui/typography";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>Open up App.js to start working on yoasasdfur app!</Text>
			<Text className="font-sans">
				asdfsadasdf
				{"\n"}
				asdfsd
			</Text>
			<Button />

			<H1>Texsdfgsdt</H1>

			<H2>DSFdsfsdfsd</H2>

			<Text className="font-bold font-[SF-Pro-Display-Bold] text-[25px]">
				Bold length headline
			</Text>

			<Link href="/home">About</Link>
			<StatusBar style="auto" />
		</View>
	);
}
