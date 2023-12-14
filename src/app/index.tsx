import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "@/ui/button";
import { Link } from "expo-router";
import { B1, B2, H1, H2 } from "@/ui/typography";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Logo } from "@/app/logo";
import { BlurView } from "expo-blur";

const blurhash =
	"|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

export default function App() {
	return (
		<View className="flex-1 bg-[#1E2121] items-center justify-center">
			<View>
				<Image
					source="https://picsum.photos/seed/696/3000/2000"
					placeholder={blurhash}
					contentFit="cover"
					transition={1000}
				/>
			</View>

			<Logo width={72} height={21} />

			<BlurView
				style={{
					height: 308,
					width: 308,
					position: "absolute",
					top: 0,
					left: 0,
					overflow: "hidden",
					borderRadius: 9999,
					zIndex: -1,
					// backgroundColor: "hsla(271, 8%, 26%, 0.3)",
				}}
				intensity={67}
				tint="dark"
			/>

			<View className="h-[308px] w-[308px] rounded-full absolute top-0 left-0 bg-[hsla(271, 8%, 26%, 0.3)]" />

			<Text>Open up App.js to start working on yoasasdfur app!</Text>
			<Text className="font-sans">
				asdfsadasdf
				{"\n"}
				asdfsd
			</Text>
			<Button />

			<Text>Heading</Text>

			<H1>Bold length healdine</H1>

			<H2 weight={600}>Semibold length healdine</H2>

			<H2>Regular length healdine</H2>

			<Text>Body</Text>

			<B1>Bold length healdine</B1>

			<B2>Medium length healdine</B2>

			<View className="h-[140px] flex justify-center items-center bg-accent w-[140px] rounded-full">
				<Text>Yellow</Text>
			</View>

			<View className="h-[140px] flex justify-center items-center bg-mint w-[140px] rounded-full">
				<Text className="text-white">Mint</Text>
			</View>

			<View className="h-[140px] flex justify-center items-center bg-purple w-[140px] rounded-full">
				<Text className="text-white">Purple</Text>
			</View>

			<View className="h-[140px] flex justify-center items-center w-[140px] rounded-full">
				<LinearGradient
					colors={["#252525", "#2C2C2C"]}
					className="flex rounded-full"
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
						height: "100%",
						borderRadius: 9999,
					}}
				>
					<Text className="text-white">Grey 1</Text>
				</LinearGradient>
			</View>

			<Link href="/home">About</Link>
			<StatusBar style="auto" />
		</View>
	);
}
