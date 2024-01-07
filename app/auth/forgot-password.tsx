import RootLayout from "../../components/RootLayout";

import { Text, View, TextInput, ScrollView, Pressable, Alert } from "react-native";
import { constants } from "../../constants";
import { Link } from "expo-router";

export default function Screen() {
  function sendResetCode() {
    Alert.alert("Rest code", "A reset code has been sent to your email");
  }

  return (
    <RootLayout>
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ gap: 30, marginBottom: 50 }}>
              <View style={{ paddingTop: "15%" }}>
                <Text style={{ color: constants.themeColor, fontSize: 30, fontFamily: "Lato-Black" }}>
                  Password recovery
                </Text>
                <Text style={{ fontFamily: "Lato-Regular" }}>
                  Regain access into your account
                </Text>
              </View>
              <View style={{ gap: 20 }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontFamily: "Lato-Bold" }}>Enter your registered email address</Text>
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
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ gap: 5, alignItems: "center", justifyContent: "center" }}>
          <Pressable
            onPress={sendResetCode}
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
            >Send reset code</Text>
          </Pressable>
          <Text style={{ fontFamily: "Lato-Regular" }}>
            Having any persisten issue?
            <Link replace style={{ color: constants.themeColor, fontFamily: "Lato-Bold" }} href="/contact-us">
              &nbsp;Contact us.
            </Link>
          </Text>
        </View>
      </View>
    </RootLayout>
  );
}