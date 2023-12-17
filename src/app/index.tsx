import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
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
			<Logo width={72} height={21} />

			<View className="h-[308px] w-[308px] rounded-full absolute top-0 left-0 bg-[hsla(271, 8%, 26%, 0.3)]" />

			<View className="px-6 w-full flex flex-col gap-3">
				<LinearGradient
					colors={["#FCFFDF", "#F1FE87"]}
					className="rounded-full w-full"
					style={{ borderRadius: 50, width: "100%" }}
				>
					<Pressable
						onPress={() => console.log("running")}
						className="w-full justify-center flex items-center px-3 py-3"
					>
						<Text>Log in</Text>
					</Pressable>
				</LinearGradient>

				<LinearGradient
					colors={["#252525", "#2C2C2C"]}
					className="rounded-full w-full"
					style={{ borderRadius: 50, width: "100%" }}
				>
					<Pressable
						onPress={() => console.log("running - 2")}
						className="w-full justify-center flex items-center px-3 py-3"
					>
						<Text className="text-white">Become a client of the bank</Text>
					</Pressable>
				</LinearGradient>
			</View>

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
