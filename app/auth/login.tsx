import RootLayout from "../../components/RootLayout";

import { Text, View, TextInput, ScrollView, Pressable } from "react-native";
import { constants } from "../../constants";
import { Link } from "expo-router";

export default function Screen() {
  return (
    <RootLayout>
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ gap: 30, marginBottom: 50 }}>
              <View style={{ paddingTop: "15%" }}>
                <Text style={{ color: constants.themeColor, fontSize: 30, fontFamily: "Lato-Black" }}>
                  Sign into your Account
                </Text>
                <Text style={{ fontFamily: "Lato-Regular" }}>
                  Log into your savings account
                </Text>
              </View>
              <View style={{ gap: 20 }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontFamily: "Lato-Bold" }}>Email address</Text>
                  <TextInput
                    inputMode="email"
                    style={{
                      color: "black",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: "lightgray",
                    }}
                  />
                </View>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontFamily: "Lato-Bold" }}>Password</Text>
                  <TextInput
                    inputMode="text"
                    secureTextEntry={true}
                    style={{
                      color: "black",
                      borderWidth: 1,
                      borderRadius: 5,
                      paddingVertical: 5,
                      paddingHorizontal: 10,
                      borderColor: "lightgray",
                    }}
                  />
                </View>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontFamily: "Lato-Regular" }}>
                    Have you forgotten your password?
                    <Link style={{ color: constants.themeColor, fontFamily: "Lato-Bold" }} href="/auth/forgot-password">
                      &nbsp;Click here to recover it.
                    </Link>
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ gap: 5, alignItems: "center", justifyContent: "center" }}>
          <Pressable
            style={{
              padding: 15,
              width:"100%",
              borderRadius: 5,
              backgroundColor: constants.themeColor,
            }}
          >
            <Text
              style={{
                color: "white",
                textAlign: "center",
                fontFamily: "Lato-Black",
                textTransform: "capitalize",
              }}
            >log in</Text>
          </Pressable>
          <Text style={{ fontFamily: "Lato-Regular" }}>
            Don&apos;t have an account with us?
            <Link replace style={{ color: constants.themeColor, fontFamily: "Lato-Bold" }} href="/auth/register">
              &nbsp;Create an account here.
            </Link>
          </Text>
        </View>
      </View>
    </RootLayout>
  );
}