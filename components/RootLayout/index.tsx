import { useFonts } from "expo-font";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, View } from "react-native";

type ComponentType = {
  children: React.ReactNode
}

export default function RootLayout({ children }: ComponentType) {
  const [ fontsLoaded ] = useFonts({
    "PTSans-Regular": require("../../assets/fonts/PT_Sans/PTSans-Regular.ttf"),
    "PTSans-Bold": require("../../assets/fonts/PT_Sans/PTSans-Bold.ttf"),
    "PTSans-Italic": require("../../assets/fonts/PT_Sans/PTSans-Italic.ttf"),
    "PTSans-BoldItalic": require("../../assets/fonts/PT_Sans/PTSans-BoldItalic.ttf"),

    "Lato-Black": require("../../assets/fonts/Lato/Lato-Black.ttf"),
    "Lato-BlackItalic": require("../../assets/fonts/Lato/Lato-BlackItalic.ttf"),
    "Lato-Bold": require("../../assets/fonts/Lato/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("../../assets/fonts/Lato/Lato-BoldItalic.ttf"),
    "Lato-Italic": require("../../assets/fonts/Lato/Lato-Italic.ttf"),
    "Lato-Light": require("../../assets/fonts/Lato/Lato-Light.ttf"),
    "Lato-LightItalic": require("../../assets/fonts/Lato/Lato-LightItalic.ttf"),
    "Lato-Regular": require("../../assets/fonts/Lato/Lato-Regular.ttf"),
    "Lato-Thin": require("../../assets/fonts/Lato/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("../../assets/fonts/Lato/Lato-ThinItalic.ttf"),
  });

	return (
		<SafeAreaView>
			<StatusBar
        style="dark"
        hidden={false}
        translucent={true}
      />
      <View
        style={{
          height: "100%",
          paddingHorizontal: 10,
          backgroundColor: "white"
        }}
      >
			  {children}
      </View>
		</SafeAreaView>
	);
}