import {
  DefaultTheme,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Layout } from "../constants/Layout";

export const EntryScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { colors } = useTheme();
  const { navigate } = useNavigation();

  return (
    <>
      <SafeAreaView
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
          justifyContent: "space-between",
        }}
      >
        <StatusBar style="auto" />

        <View
          style={{
            padding: 32,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "700" }}>Hello again!</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexGrow: 1,
            padding: 32,
            width: "100%",
            justifyContent: "center",
          }}
        >
          <TextInput
            style={styles.textInput}
            returnKeyType="next"
            placeholder="Email"
            keyboardType="email-address"
            placeholderTextColor={colors.border}
            onChangeText={(email) => setEmail(email)}
          />

          <TextInput
            style={styles.textInput}
            returnKeyType="go"
            placeholder="Password"
            placeholderTextColor={colors.border}
            secureTextEntry={true}
            multiline={false}
            onChangeText={(password) => setPassword(password)}
          />
        </View>
        <View style={{ padding: 32, width: "100%" }}>
          <TouchableOpacity
            onPress={() => {
              navigate("App");
            }}
            style={{
              alignItems: "center",
              elevation: 10,
              backgroundColor: colors.primary,
              width: "100%",
              padding: 16,
              borderRadius: 16,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "600", color: colors.background }}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export const styles = StyleSheet.create({
  textInput: {
    padding: 12,
    elevation: 4,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    overflow: "hidden",
    fontSize: 16
  },
});
