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
                  Create Account
                </Text>
                <Text style={{ fontFamily: "Lato-Regular" }}>
                  Open a savings account in just a few steps
                </Text>
              </View>
              <View style={{ gap: 20 }}>
                <View style={{ gap: 3 }}>
                  <Text style={{ fontFamily: "Lato-Bold" }}>Full name</Text>
                  <TextInput
                    inputMode="text"
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
                  <Text style={{ fontFamily: "Lato-Bold" }}>Phone number</Text>
                  <TextInput
                    maxLength={11}
                    inputMode="tel"
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
                  <Text style={{ fontFamily: "Lato-Bold" }}>BVN</Text>
                  <TextInput
                    maxLength={11}
                    inputMode="numeric"
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
                  <Text style={{ fontFamily: "Lato-Bold" }}>NIN</Text>
                  <TextInput
                    maxLength={11}
                    inputMode="numeric"
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
                  <Text style={{ fontFamily: "Lato-Bold" }}>Confirm password</Text>
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
            >create your account</Text>
          </Pressable>
          <Text style={{ fontFamily: "Lato-Regular" }}>
            Already have an account with us?
            <Link replace style={{ color: constants.themeColor, fontFamily: "Lato-Bold" }} href="/auth/login">
              &nbsp;Sign in here.
            </Link>
          </Text>
        </View>
      </View>
    </RootLayout>
  );
}