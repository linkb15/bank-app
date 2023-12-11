import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "@/ui/button";
import { Link } from "expo-router";

export default function App() {
	return (
		<View className="flex-1 items-center justify-center bg-white">
			<Text>Open up App.js to start working on yoasasdfur app!</Text>
			<Text>
				asdfsadasdf
				{"\n"}
				asdfsd
			</Text>
			<Button />

			<Link href="/home">About</Link>
			<StatusBar style="auto" />
		</View>
	);
}
