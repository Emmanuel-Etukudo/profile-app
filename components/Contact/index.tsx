import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ContactType from "./ContactType";
import { Ionicons } from "@expo/vector-icons";
import ConnectIcon from "../icons/ConnectIcon";

const contactTypes: {
  text: string;
  subtext: string;
  iconName: React.ComponentProps<typeof Ionicons>["name"];
}[] = [
  { text: "Email", subtext: "example@example.com", iconName: "mail" },
  { text: "Phone", subtext: "+1234567890", iconName: "call" },

  {
    text: "LinkedIn",
    subtext: "linkedin.com/in/username",
    iconName: "logo-linkedin",
  },
  {
    text: "GitHub",
    subtext: "github.com/username",
    iconName: "logo-github",
  },
  {
    text: "Twitter",
    subtext: "twitter.com/username",
    iconName: "logo-twitter",
  },
];

const Contact = () => {
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", marginBottom: 16 }}>
        <ConnectIcon width={100} height={100} />
      </View>
      <Text>
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
