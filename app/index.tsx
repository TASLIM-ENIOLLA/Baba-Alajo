import { useEffect } from "react";

import { router } from "expo-router";

import RootLayout from "../components/RootLayout";
import { StyleSheet, View, Image } from "react-native";

export default function Screen() {
  useEffect(() => {
    const timeout = setTimeout(() => router.replace("/home"), 3000)

    return () => clearTimeout(timeout);
  }, [])

  return (
    <RootLayout>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("../assets/images/favicon.png")}
        />
      </View>
    </RootLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 50,
    height: 50,
  }
});