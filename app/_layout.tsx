import "./global.css";

import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "./ui/button";

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
			<StatusBar style="auto" />
		</View>
	);
}
