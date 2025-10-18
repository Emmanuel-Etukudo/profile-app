import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Subtitle from "./Subtitle";
import { useTheme } from "@/context/ThemeContext";
import Colors from "@/constants/Colors";

const About = () => {
  const { effectiveTheme } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[effectiveTheme].background },
      ]}
    >
      <View
        style={{
          flex: 1,
          padding: 8,
        }}
      >
        ß
        <Image
          source={require("@/assets/images/profile.png")}
          style={styles.image}
        />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 100,
          left: 24,
          right: 0,
          backgroundColor: "transparent",
          // backgroundColor: "powderblue",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            backgroundColor: "transparent",
          }}
        >
          <Text style={styles.title}>Etukz, 29 </Text>
          <Ionicons name="male" size={16} color="white" />
        </View>
        <Subtitle
          text="Software developer at HNG"
          iconName="briefcase-outline"
        />
        <Subtitle
          text="A mobile app developer who builds cross-platform applications using both Flutter and React Native."
          iconName="information-circle-outline"
        />
      </View>
      {/* <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    // resizeMode: "",
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
