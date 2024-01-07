import RootLayout from "../components/RootLayout";

import { router } from "expo-router";
import { StyleSheet, Pressable, Text, View } from "react-native";

import { constants } from "../constants";

export default function Screen() {
  return (
  <RootLayout>
    <View
      style={{
        flex: 1,
        paddingVertical: 10,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <View style={{ gap: 5 }}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: "Lato-Black",
              textTransform: "capitalize",

            }}
          >
            Welcome to Baba Alajo
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "Lato-Regular"
            }}
          >
            The most preferred savings manager
          </Text>
        </View>
      </View>
      <View style={{ gap: 5 }}>
        <Pressable
          onPress={() => router.push("/auth/register")}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: constants.themeColor,
            backgroundColor: constants.themeColor,
          }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              textTransform: "capitalize",
              fontFamily: "Lato-Black"
            }}
          >
            create your free account
          </Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/auth/login")}
          style={{
            padding: 15,
            borderWidth: 1,
            borderRadius: 5,
            borderColor: constants.themeColor,
          }}
        >
          <Text
            style={{
              color: constants.themeColor,
              textAlign: "center",
              textTransform: "capitalize",
              fontFamily: "Lato-Black"
            }}
          >
            log into your account
          </Text>
        </Pressable>
      </View>
    </View>
  </RootLayout>
  );
}