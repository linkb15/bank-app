import "./global.css";

import { useFonts } from "expo-font";

import { Slot } from "expo-router";

import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [fontsLoaded, fontError] = useFonts({
		"SF-Pro": require("@/../public/fonts/SF-Pro.ttf"),
		"SF-Pro-Display": require("@/../public/fonts/SF-Pro-Display-Regular.otf"),
		"SF-Pro-Display-Bold": require("@/../public/fonts/SF-Pro-Display-Bold.otf"),
		"SF-Pro-Rounded-Semibold": require("@/../public/fonts/SF-Pro-Rounded-Semibold.otf"),
	});

	useEffect(() => {
		if (fontsLoaded || fontError) {
			// Hide the splash screen after the fonts have loaded (or an error was returned) and the UI is ready.
			SplashScreen.hideAsync();
		}
	}, [fontsLoaded, fontError]);

	// Prevent rendering until the font has loaded or an error was returned
	if (!fontsLoaded && !fontError) {
		return null;
	}

	if (!fontsLoaded && !fontError) {
		return null;
	}

	return <Slot />;
}
