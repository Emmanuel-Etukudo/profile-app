import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactType from "./ContactType";
import { Ionicons } from "@expo/vector-icons";
import ConnectIcon from "../icons/ConnectIcon";
import { useTheme } from "@/context/ThemeContext";
import ConnectIconNight from "../icons/ConnectIconNight";
import Colors from "@/constants/Colors";

const contactTypes: {
  text: string;
  subtext: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
}[] = [
  { text: "Email", subtext: "etukzbong@gmail.com", iconName: "mail" },
  { text: "Phone", subtext: "+1234567890", iconName: "call" },

  {
    text: "LinkedIn",
    subtext: "https://www.linkedin.com/in/emmanuel-etukudo-aa1078151/",
    iconName: "logo-linkedin",
  },
  {
    text: "GitHub",
    subtext: "http://github.com/Emmanuel-Etukudo",
    iconName: "logo-github",
  },
  {
    text: "Twitter",
    subtext: "twitter.com/username",
    iconName: "logo-twitter",
  },
];

const Contact = () => {
  const { effectiveTheme } = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: Colors[effectiveTheme].background },
      ]}
    >
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        {effectiveTheme === "dark" ? (
          <ConnectIconNight width={100} height={100} />
        ) : (
          <ConnectIcon width={100} height={100} />
        )}
      </View>
      <Text
        style={{
          color: Colors[effectiveTheme].text,
          fontSize: 16,
          marginBottom: 16,
        }}
      >
        Have a project in mind? Whether you need a sleek mobile app, want to
        discuss Flutter or React Native development, or just have questions
        about bringing your idea to life, I'd love to hear from you.
      </Text>
      {contactTypes.map((type, index) => (
        <View key={index}>
          <ContactType
            text={type.text}
            subtext={type.subtext}
            iconName={type.iconName}
          />
        </View>
      ))}
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
